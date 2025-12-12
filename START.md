# 🚀 Quick Start Guide - Review System

## Step 1: Start Everything

Run this single command to start both the backend and frontend:

```bash
npm start
```

This will:
- Start the Express server on `http://localhost:5000`
- Start the Vite dev server on `http://localhost:5173`

## Step 2: Verify It's Working

Once both servers are running, you should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:5000
📡 Ready to accept requests

  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

## Step 3: Test the Website

1. Open your browser to `http://localhost:5173`
2. Scroll down to the "Customer Reviews" section
3. Fill out the review form:
   - Enter your name
   - Add a role (optional)
   - Select a star rating
   - Write your review
4. Click "Submit Review"
5. Your review should appear immediately below!

## Troubleshooting

### If you get "Submission Failed" error:

1. **Check if the backend is running:**
   Open `http://localhost:5000/api/health` in your browser
   You should see: `{"success":true,"message":"Server is running!"}`

2. **Restart the servers:**
   Press `Ctrl+C` in the terminal, then run `npm start` again

3. **Check for port conflicts:**
   ```bash
   lsof -i :5000
   ```
   If something else is using port 5000, kill it:
   ```bash
   kill -9 <PID>
   ```

4. **Test the API manually:**
   Open `test-api.html` in your browser and click the test buttons

### Manual Start (if npm start doesn't work):

**Terminal 1 - Backend:**
```bash
node server/index.js
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Features

✅ Real-time review submission
✅ Auto-refresh every 30 seconds  
✅ MongoDB storage
✅ Beautiful UI with star ratings
✅ Toast notifications
✅ Mobile responsive

## Need Help?

- Check `server.log` for backend errors
- Check browser console (F12) for frontend errors
- Ensure MongoDB connection string in `.env` is correct

Happy reviewing! 🎉
