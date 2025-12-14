# Deployment Guide

## Backend Deployment (Choose One Option)

### Option 1: Deploy to Render (Recommended - Free Tier Available)

1. **Create account at [Render.com](https://render.com)**

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Or use "Deploy from Git URL"

3. **Configure the service:**
   - **Name**: `kalakruti-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Instance Type**: `Free`

4. **Add Environment Variables:**
   - `MONGODB_URI` = `mongodb+srv://ankita:ankita123@kalakruti.gymbfcz.mongodb.net/?appName=kalakruti`
   - `PORT` = `3001` (or leave blank, Render will auto-assign)

5. **Deploy** and copy your backend URL (e.g., `https://kalakruti-backend.onrender.com`)

### Option 2: Deploy to Railway

1. **Go to [Railway.app](https://railway.app)**
2. **New Project** → **Deploy from GitHub repo**
3. **Add variables:**
   - `MONGODB_URI`
   - `PORT`
4. **Settings** → **Generate Domain**
5. Copy the domain URL

### Option 3: Deploy to Vercel Serverless Functions

1. Create `api` folder in your project root
2. Move backend code to serverless functions
3. Deploy with Vercel

---

## Frontend Deployment to Vercel

1. **Set Environment Variable in Vercel:**
   - Go to your Vercel project dashboard
   - Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
   - (Replace with your actual backend URL from step above)

2. **Redeploy:**
   - Vercel → Deployments → Redeploy

---

## Quick Setup Commands

### For Render Backend Deployment:

```bash
# The backend will automatically deploy when you:
# 1. Push to GitHub
# 2. Connect Render to your repo
# 3. Render will run: npm install && node server/index.js
```

### For Vercel Frontend:

```bash
# Add environment variable in Vercel dashboard:
VITE_API_URL=https://your-backend.onrender.com/api

# Then redeploy or push to GitHub
```

---

## Testing After Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend.onrender.com/api/health
   ```
   Should return: `{"success":true,"message":"Server is running!"}`

2. **Test Reviews:**
   ```bash
   curl https://your-backend.onrender.com/api/reviews
   ```

3. **Visit your Vercel site** and try submitting a review!

---

## Important Notes

- ✅ Backend must be deployed BEFORE frontend works
- ✅ Update `VITE_API_URL` in Vercel environment variables
- ✅ Render free tier may sleep after inactivity (takes ~30s to wake)
- ✅ Keep MongoDB credentials secure in environment variables
- ✅ CORS is configured to accept all origins for development

---

## Troubleshooting

**Reviews not loading:**
- Check backend is deployed and running
- Verify `VITE_API_URL` is set correctly in Vercel
- Check browser console for CORS errors
- Ensure MongoDB connection string is correct

**Submission fails:**
- Backend might be sleeping (Render free tier) - wait 30s and retry
- Check network tab in browser DevTools
- Verify API URL is correct

---

## Cost Estimate

- **MongoDB Atlas**: Free (M0 cluster)
- **Render Backend**: Free (with sleep after inactivity)
- **Vercel Frontend**: Free
- **Total**: $0/month 🎉
