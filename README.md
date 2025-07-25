# 🧠 TalkNext: Idea Summary

TalkNext is a real-time, voice-based web app designed for verified college students to connect anonymously and have meaningful conversations. The platform aims to reduce student loneliness, improve communication skills, and encourage free expression without fear of judgment — all through one-on-one random voice call.

---

## 🎯 Purpose & Vision

Many students, especially in their final college years, feel disconnected and isolated due to academic pressure and a lack of genuine conversation. TalkNext breaks this barrier by providing a safe, anonymous space for real-time interaction.

**Long-term vision:**  
While the current focus is on college students, TalkNext aims to expand to other sectors — such as banking, IT, and any environment where honest, judgment-free conversations are needed.

---

## 🛠️ Features (Planned & In Progress)

- 🔐 ERP-based authentication (college email login)
- 👤 One-time profile setup (username + bio)
- 🔊 Real-time voice chat (WebRTC)
- 🔄 Shuffle button to switch conversation partner
- 📊 Admin panel for misuse detection (AI-based)
- ⏳ Call timer & basic profile display
- 🚪 Logout with session time tracking

---

## 🤖 Tech Stack

- **Frontend:** ReactJS, Tailwind CSS
- **Voice/Communication:** WebRTC
- **Backend:** Node.js (planned), Express.js
- **Database:** MongoDB (planned; alternatives to Firebase)
- **AI Tools:** Offensive Language Detection API (planned)
- **Authentication:** College Email / Custom Auth
- **Hosting:** To be decided (e.g., Vercel for frontend, Render for backend)

---

## 🖼️ Landing Page

### Elements

- **Heading:** TalkNext (logo/branding)
- **Sub-text:** Intro or catchy tagline
- **Image:** Illustration/hero graphic
- **Button:** Get Started

### Scroll Section

- Features overview (key highlights)
- About section (goal, use-case, vision)
- **Button:** Try Now (anchors to authentication)

### Development Notes

- Smooth scroll to features/about
- Clean, simple design (Tailwind/CSS)
- Hover effects on Get Started / Try Now buttons (e.g., glow or border)

---

## 🔐 Authentication Section

### Elements

- Login / Sign Up form  (college  provide email )
- Inputs: Email, Password
- Submit button

### Style Notes

- Input borders glow/change color on focus/hover

---

## 👤 Profile Setup (First-Time Users Only)

- Upload profile picture (optional)
- Enter username
- Short bio prompt:  
  _“What would you be if a parallel universe existed?”_
- Save button (profile becomes non-editable after saving)

---

## 👓 Profile Screen (Returning Users)

- Welcome text + profile info
- Timer (call duration or login time)
- Buttons:
  - Mute / Unmute
  - Shuffle (random call/topic)
  - Logout
- Profile icon (top-left)

---

## 📦 Future Development

- Advanced admin features
- Enhanced real-time audio (WebRTC/mic access)
- UI improvements & animations
- Real data storage (MongoDB/Supabase)
- More AI moderation tools

---
## 📷 Screenshots

> ![Dashboard Preview](https://github.com/Vikash3456/TalkNext/blob/2a98210b3972b728d6738abd3d7de942d70ee15d/frontend/public/assert/Screenshot1.png)
>![Dashboard Preview](https://github.com/Vikash3456/TalkNext/blob/2a98210b3972b728d6738abd3d7de942d70ee15d/frontend/public/assert/Screenshot2.png)
>![Dashboard Preview](https://github.com/Vikash3456/TalkNext/blob/2a98210b3972b728d6738abd3d7de942d70ee15d/frontend/public/assert/Screenshot3.png)
---

## 📁 File Structure

```
TalkNext/
├── frontend/                     # Frontend React application
│   ├── public/
│   │   ├── assets/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── auth/
│   │   │   ├── call/
│   │   │   ├── profile/
│   │   │   └── shared/
│   │   ├── context/          # React context providers
│   │   ├── hooks/            # Custom hooks
│   │   ├── pages/            # Route components
│   │   ├── services/         # API calls & WebRTC
│   │   ├── utils/            # Helper functions
│   │   └── App.tsx
│   └── package.json
│
├── backend/                    # Backend Node.js/Express
│   ├── src/
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/       # Express middleware
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   └── app.ts
│   └── package.json
│
├── Docs/                     # Documentation
│   ├── context.md
│   ├── api.md
│   └── setup.md
│
└── docker-compose.yml        # Container configuration
```

## 🔐 Security & Scaling Notes

### Database Indexes
- Users: email (unique), username
- Calls: participants, status, startTime
- Reports: reportedUser, status

### Security Measures
- Rate limiting on auth endpoints
- WebRTC signaling encryption
- JWT with short expiry
- Input sanitization
- Call recording prevention
- Profanity filtering

### Scalability
- Horizontal scaling for WebRTC servers
- Caching layer for user profiles
- Message queue for notifications
- WebSocket connection pooling

---

## 🛠️ Tech Stack Ideas (Tentative)

- HTML / Tailwind CSS / JavaScript (for MVP frontend)
- Supabase or MongoDB (for Auth + Storage)
- React (optional, for component-based UI)
- Python backend (for future ML features)
