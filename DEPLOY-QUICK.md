# 🚀 Quick Deployment Steps

## Problem
Your site works locally but not on Vercel because the backend (`localhost:3001`) isn't accessible from the internet.

## Solution
Deploy the backend separately, then connect it to your Vercel frontend.

---

## Step 1: Deploy Backend to Render (5 minutes)

### 1. Go to [render.com](https://render.com) and sign up/login

### 2. Click "New +" → "Web Service"

### 3. Connect your GitHub repo or paste this:
   - **Repository**: Your GitHub repo URL
   - **Name**: `kalakruti-backend`
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Root Directory**: Leave blank
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`

### 4. Add Environment Variables (Click "Advanced"):
   ```
   MONGODB_URI = mongodb+srv://ankita:ankita123@kalakruti.gymbfcz.mongodb.net/?appName=kalakruti
   PORT = 3001
   ```

### 5. Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Copy your backend URL (looks like: `https://kalakruti-backend.onrender.com`)

---

## Step 2: Update Vercel Frontend (2 minutes)

### 1. Go to your Vercel dashboard

### 2. Select your project → Settings → Environment Variables

### 3. Add new variable:
   ```
   Name: VITE_API_URL
   Value: https://kalakruti-backend.onrender.com/api
   ```
   (Replace with YOUR actual Render URL + `/api`)

### 4. Go to Deployments → Click "..." → Redeploy

---

## Step 3: Test! 🎉

1. Visit your Vercel site
2. Scroll to the review section
3. Submit a review
4. It should work!

---

## ⚠️ Important Notes

- **First Load**: Render free tier sleeps after 15 mins of inactivity
  - First request may take 30-60 seconds to wake up
  - After that, it's instant!

- **If reviews don't show immediately**:
  - Wait 30 seconds (backend waking up)
  - Refresh the page
  - Check browser console (F12) for errors

---

## Alternative: Deploy Both on Vercel

If you want everything on Vercel (more complex but faster):

1. Move `server/` to `api/` folder
2. Convert Express routes to Vercel serverless functions
3. Update imports and paths

(This requires more code changes - Render is easier!)

---

## Cost

- ✅ Render Backend: **FREE** (500 free hours/month)
- ✅ Vercel Frontend: **FREE**
- ✅ MongoDB: **FREE** (512MB)
- **Total: $0/month** 💰

---

## Need Help?

Check the full guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
