Work In Progress...

This web app lets users log in with their Spotify account, input how they're feeling, and get a personalized playlist based on their mood.

Built with:
- React (Frontend)
- Node.js + Express (Backend)
- Spotify Web API

---

## 🚀 Features

- Spotify OAuth login
- Mood-based genre selection
- Auto-generates a playlist with recommended tracks
- Option to open playlist directly in Spotify

---

## 🛠️ Getting Started

# 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/mood-playlist-creator.git
cd mood-playlist-creator

# 2. Set up environment variables

In server/.env:

CLIENT_ID=your_spotify_client_id
CLIENT_SECRET=your_spotify_client_secret
REDIRECT_URI=http://localhost:5001/callback

# 3. Install dependencies

# Backend
cd server
npm install

# Frontend
cd ../client
npm install

# 4. Run the app locally

# In one terminal tab (for backend)
cd server
node index.js

# In another terminal tab (for frontend)
cd client
npm start

This app uses Spotify's /recommendations endpoint based on hardcoded genre mappings.

Be sure to add your redirect URI to the Spotify Developer Dashboard under your app settings.