# cPanel Node.js Deployment Guide for Stove Africa

## Overview
This guide covers deploying your Next.js app to cPanel using Node.js Application Manager. Your app uses Firebase for data and Tailwind CSS via CDN.

## Prerequisites
- cPanel hosting with Node.js Application Manager enabled
- Node.js version 18+ (recommended)
- Your Firebase project configured

## What We've Prepared
✅ **Next.js configured for Node deployment** (`output: 'standalone'` in `next.config.mjs`)  
✅ **Tailwind CSS via CDN** (easy to edit without rebuilding)  
✅ **Production build tested** (`npm run build` successful)  
✅ **All dynamic routes preserved** (blog detail pages, admin functions)

## Step 1: Create Server Entry File

Create `server.js` in your project root:

```javascript
const { join } = require('path');
const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log('> Ready on port ' + port);
  });
});
```

## Step 2: Update Package.json Scripts

Ensure your `package.json` has the correct start script:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "NODE_ENV=production node server.js",
    "lint": "eslint"
  }
}
```

## Step 3: Prepare Files for Upload

### Files to Upload
Upload your entire project folder to cPanel, **excluding**:
- `node_modules/` (cPanel will install these)
- `.next/` (will be rebuilt)
- `.git/` (if present)

### Files to Include
- All source code (`src/`)
- `package.json` and `package-lock.json`
- `next.config.mjs`
- `firebaseConfig.js`
- `public/` folder (images, assets)
- `server.js` (created in Step 1)
- Any other config files

## Step 4: cPanel Setup

### 4.1 Create Node.js Application
1. Log into cPanel
2. Find "Setup Node.js App" (usually in Software section)
3. Click "Create Application"
4. Fill in:
   - **Application mode**: Production
   - **Node.js version**: 18.x or higher
   - **Application root**: `stove2` (or your chosen folder name)
   - **Application URL**: Choose your domain/subdomain
   - **Application startup file**: `server.js`
5. Click "Create"

### 4.2 Upload Files
1. Use cPanel File Manager or FTP
2. Upload all project files to the application root folder
3. Ensure `server.js` is in the root directory

### 4.3 Install Dependencies
1. In "Setup Node.js App", find your application
2. Click "Run NPM Install"
3. Wait for installation to complete

### 4.4 Start Application
1. Click "Restart" to start your app
2. Check the logs for "Ready on port" message
3. Visit your application URL to test

## Step 5: Environment Variables (Optional)

If you need to use environment variables for Firebase or other configs:

1. In "Setup Node.js App", click "Environment Variables"
2. Add any needed variables:
   ```
   NODE_ENV=production
   FIREBASE_API_KEY=your_key_here
   FIREBASE_PROJECT_ID=your_project_id
   ```
3. Click "Save" and restart the application

## Step 6: Verify Deployment

### Test These Features
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Blog pages load (including dynamic `/blog/[id]`)
- ✅ Admin pages work (`/blog/admin/login`, `/blog/admin/234813649`)
- ✅ Contact, About, Services pages
- ✅ Tailwind styles apply correctly
- ✅ Firebase data loads in blog sections

### Common Issues & Solutions

**App won't start:**
- Check Node.js version (needs 18+)
- Verify `server.js` is in root directory
- Check application logs in cPanel

**Styles not loading:**
- Tailwind CDN should load automatically
- Check browser console for CDN errors
- Verify `Script` component in `layout.js`

**Firebase errors:**
- Check Firebase config in `firebaseConfig.js`
- Verify Firebase project settings
- Check browser console for Firebase errors

**Dynamic routes not working:**
- Ensure you're using Node.js mode (not static export)
- Check that `output: 'standalone'` is in `next.config.mjs`

## File Structure After Upload
```
your-domain.com/
├── stove2/                    # Application root
│   ├── server.js             # Entry point
│   ├── package.json          # Dependencies
│   ├── next.config.mjs       # Next.js config
│   ├── firebaseConfig.js     # Firebase setup
│   ├── src/                  # Source code
│   │   └── app/
│   │       ├── layout.js     # With Tailwind CDN
│   │       ├── page.js
│   │       └── ...
│   ├── public/               # Static assets
│   └── .next/                # Built files (auto-generated)
```

## Maintenance

### Updating Your App
1. Make changes locally
2. Run `npm run build` to test
3. Upload changed files to cPanel
4. Restart the application

### Monitoring
- Check application logs in cPanel
- Monitor resource usage
- Set up error tracking if needed

## Current App Features
- **Static Pages**: Home, About, Services, Contact, Programs, FAQ, etc.
- **Dynamic Blog**: `/blog/[id]` with Firebase data
- **Admin Panel**: Blog management at `/blog/admin/`
- **Responsive Design**: Mobile-friendly with Tailwind CSS
- **Firebase Integration**: Real-time data for blog content

## Support
If you encounter issues:
1. Check cPanel application logs
2. Verify all files uploaded correctly
3. Ensure Node.js version compatibility
4. Test locally with `npm run build && npm start`

---

**Note**: This deployment preserves all functionality including dynamic routes and Firebase integration. The app runs as a Node.js server on cPanel, not as static files.
