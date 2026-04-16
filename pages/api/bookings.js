// pages/api/bookings.js
// Server-side booking handler — used as fallback / admin notification layer

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin (server side)
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, service, date, time, notes } = req.body;

  // Basic validation
  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Phone validation (Indian format)
  const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  try {
    const docRef = await db.collection('bookings').add({
      name: name.trim(),
      phone: phone.trim(),
      service,
      date,
      time,
      notes: notes?.trim() || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      source: 'website',
    });

    // Optional: send WhatsApp notification to salon owner via Twilio / WATI
    // await notifySalonOwner({ name, phone, service, date, time });

    return res.status(201).json({
      success: true,
      bookingId: docRef.id,
      message: 'Booking confirmed! We will call you shortly.',
    });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ error: 'Failed to save booking. Please try again.' });
  }
}

