# 💇 Revive Beauty Saloon — Premium Salon Website

A high-converting, mobile-first premium salon website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Firebase**.

![Revive Beauty Saloon](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Design | Dark luxury theme, gold accents, glassmorphism |
| 📱 Mobile-first | Sticky booking bar, tap-friendly UI |
| 🤖 AI Service Recommender | 3-question quiz → personalized service suggestions |
| 📅 Online Booking | Firebase Firestore + WhatsApp fallback |
| 🔥 Dynamic Offer Banner | Auto-rotating promotional strip |
| ⭐ Reviews | Google-style testimonials UI |
| 🗺️ Location | Dark-mode Google Maps embed |
| 💳 Memberships | Silver / Gold / Diamond plans |
| 🔍 SEO | Schema.org LocalBusiness, Open Graph, sitemap |
| ⚡ Performance | Lazy loading, image optimization, Vercel edge |

---

## 🚀 Quick Deploy to Vercel (5 minutes)

### Step 1 — Upload to GitHub

```bash
# On your PC or GitHub web interface
# 1. Create new repo: github.com/new
# 2. Name it: revive-beauty-salon
# 3. Upload all project files (drag & drop on GitHub web)
```

### Step 2 — Setup Firebase

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add Project** → Name it `revive-beauty-salon`
3. Go to **Project Settings** → **Web** → Register app
4. Copy your config values
5. Go to **Firestore Database** → Create database → Start in **test mode**
6. Create collection: `bookings`

### Step 3 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo
3. Add **Environment Variables** (from `.env.example`):

```
NEXT_PUBLIC_FIREBASE_API_KEY          = your_value
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN      = your_value
NEXT_PUBLIC_FIREBASE_PROJECT_ID       = your_value
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET   = your_value
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = your_value
NEXT_PUBLIC_FIREBASE_APP_ID           = your_value
NEXT_PUBLIC_SALON_WHATSAPP            = 919999999999
```

4. Click **Deploy** → Done! 🎉

---

## 🛠️ Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/revive-beauty-salon.git
cd revive-beauty-salon

# Install dependencies
npm install

# Create env file
cp .env.example .env.local
# Fill in your Firebase values in .env.local

# Start dev server
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
revive-beauty-salon/
├── components/
│   ├── Navbar.js              # Sticky nav with mobile menu
│   ├── Hero.js                # Full-screen hero with CTA
│   ├── DynamicOfferBanner.js  # Rotating promo banner
│   ├── Services.js            # 6-category service grid
│   ├── Gallery.js             # Before/After hover gallery
│   ├── WhyUs.js               # Trust features + image banner
│   ├── AIRecommend.js         # AI service quiz
│   ├── Reviews.js             # Google-style testimonials
│   ├── Offers.js              # Discount cards + membership plans
│   ├── Booking.js             # Firebase booking form + WhatsApp
│   ├── Location.js            # Map + hours + contact
│   ├── Footer.js              # Full footer with links
│   └── FloatingButtons.js     # WhatsApp FAB + mobile sticky bar
├── pages/
│   ├── _app.js                # App wrapper
│   ├── _document.js           # SEO meta + Schema.org
│   ├── index.js               # Main page (assembles all sections)
│   └── api/
│       └── bookings.js        # Server-side booking API
├── styles/
│   └── globals.css            # Tailwind + custom styles
├── lib/
│   └── firebase.js            # Firebase client config
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # SEO robots
│   └── sitemap.xml            # SEO sitemap
├── .env.example               # Environment variables template
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

---

## 🎨 Customization Checklist

After deploying, update these values to match your real salon:

### In `components/Booking.js`
```js
const SALON_PHONE = '91XXXXXXXXXX'; // Your WhatsApp number
```

### In `components/FloatingButtons.js`
```js
const SALON_PHONE = '91XXXXXXXXXX'; // Same WhatsApp number
```

### In `components/Location.js`
- Replace the Google Maps `src` iframe URL with your actual embed
- Update address, phone numbers, working hours

### In `components/Reviews.js`
- Replace `YOUR_GOOGLE_PLACE_ID` with your actual Google Maps Place ID

### In `pages/_document.js`
- Update address, coordinates, phone, social URLs

### In `public/sitemap.xml`
- Replace `revivebeautysaloon.in` with your actual domain

---

## 🔒 Firebase Security Rules

After testing, update Firestore rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public booking submissions
    match /bookings/{bookingId} {
      allow create: if request.resource.data.keys().hasAll(['name', 'phone', 'service', 'date', 'time'])
                    && request.resource.data.name is string
                    && request.resource.data.phone is string;
      allow read, update, delete: if false; // Admin only via Firebase Console
    }
  }
}
```

---

## 📊 View Bookings (Admin)

All bookings are stored in **Firebase Firestore → `bookings` collection**.

Go to: [console.firebase.google.com](https://console.firebase.google.com) → Your Project → Firestore Database → `bookings`

Each booking document contains:
```json
{
  "name": "Priya Sharma",
  "phone": "+91 98765 43210",
  "service": "Balayage",
  "date": "2025-04-20",
  "time": "11:00 AM",
  "notes": "Want copper tones",
  "status": "pending",
  "createdAt": "2025-04-16T10:30:00Z",
  "source": "website"
}
```

---

## 📱 WhatsApp Integration

The booking form has a **"Book via WhatsApp"** button that pre-fills a message with all form details and opens WhatsApp directly. Update the phone number in:
- `components/Booking.js` → `SALON_PHONE`
- `components/FloatingButtons.js` → `SALON_PHONE`

---

## 🔍 SEO Keywords Targeted

- `salon near me`
- `best unisex salon Hyderabad`
- `hair salon near me`
- `bridal makeup Hyderabad`
- `keratin treatment Hyderabad`
- `balayage Hyderabad`
- `facials near me`
- `beauty parlour Hyderabad`

---

## 🛡️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Database | Firebase Firestore |
| Icons | React Icons |
| Fonts | Playfair Display, DM Sans, Cormorant Garamond |
| Deployment | Vercel (Mumbai region) |

---

## 📞 Support

Built by **18Spar** — Web Design & Development Agency  
For customizations, contact via [18spar.com](https://18spar.com)

---

*© 2025 Revive Beauty Saloon. All rights reserved.*

