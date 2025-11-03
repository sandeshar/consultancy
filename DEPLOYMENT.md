# Deployment Guide

This guide will help you deploy the B&B Education Consultancy website to production.

## Prerequisites

- A MongoDB database (MongoDB Atlas recommended for production)
- A hosting platform account (Vercel, Railway, or similar)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Prepare Your Project

1. Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: MongoDB Setup

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is sufficient for testing)
3. Create a database user with a secure password
4. Whitelist all IPs (0.0.0.0/0) for Vercel deployment
5. Get your connection string - it should look like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/consultancy?retryWrites=true&w=majority
   ```

### Step 3: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: (leave default)

### Step 4: Set Environment Variables

In the Vercel project settings, add these environment variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/consultancy?retryWrites=true&w=majority
JWT_SECRET=your-secure-random-string-min-32-chars
NODE_ENV=production
```

**Generate a secure JWT_SECRET:**
```bash
# On Windows PowerShell:
$bytes = New-Object byte[] 32; (New-Object Security.Cryptography.RNGCryptoServiceProvider).GetBytes($bytes); [Convert]::ToBase64String($bytes)

# On macOS/Linux:
openssl rand -base64 32
```

### Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (2-5 minutes)
3. Your site will be live at `https://your-project.vercel.app`

### Step 6: Create Admin Account

1. Visit `https://your-project.vercel.app/seed`
2. Click "Create Initial Super Admin"
3. Login at `https://your-project.vercel.app/login` with:
   - Email: admin@bbconsultancy.com
   - Password: Admin@123
4. **IMPORTANT**: Change the default password immediately!

### Step 7: Custom Domain (Optional)

1. Go to Vercel Project Settings > Domains
2. Add your custom domain (e.g., www.bbconsultancy.com)
3. Follow Vercel's instructions to update your DNS records

## Option 2: Deploy to Railway

### Step 1: Sign Up

1. Go to [https://railway.app](https://railway.app)
2. Sign in with GitHub

### Step 2: Create New Project

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your repository

### Step 3: Add MongoDB

1. In your Railway project, click "New"
2. Select "Database" > "MongoDB"
3. Railway will automatically create a MongoDB instance
4. Copy the connection string from the Variables tab

### Step 4: Configure Environment Variables

Add these variables in Railway:

```env
MONGODB_URI=<your-railway-mongodb-connection-string>
JWT_SECRET=<your-secure-random-string>
NODE_ENV=production
```

### Step 5: Deploy

Railway will automatically deploy your application. Access it at the provided Railway URL.

## Option 3: Deploy to DigitalOcean App Platform

### Step 1: Create App

1. Go to [https://cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository

### Step 2: Configure Build

- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **Port**: 3000

### Step 3: Add MongoDB

Use MongoDB Atlas (as described in Vercel section) or DigitalOcean Managed MongoDB.

### Step 4: Set Environment Variables

Add the same environment variables as mentioned above.

### Step 5: Deploy

Click "Deploy" and wait for the build to complete.

## Post-Deployment Checklist

- [ ] Test the website homepage loads correctly
- [ ] Submit a test inquiry through the contact form
- [ ] Login to admin dashboard
- [ ] Change default admin password
- [ ] Create additional admin accounts if needed
- [ ] Test all admin features (view inquiries, update status, etc.)
- [ ] Verify MongoDB connection and data persistence
- [ ] Test on mobile devices
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL/HTTPS (most platforms do this automatically)
- [ ] Set up monitoring and error tracking (optional)

## Security Best Practices

### 1. Strong JWT Secret
Always use a cryptographically secure random string (at least 32 characters).

### 2. Change Default Credentials
Immediately change the default admin password after first login.

### 3. MongoDB Security
- Use MongoDB Atlas for automatic security updates
- Regularly rotate database passwords
- Enable MongoDB backup and point-in-time recovery

### 4. Environment Variables
- Never commit `.env` files to version control
- Use platform-specific environment variable management
- Rotate secrets regularly

### 5. HTTPS Only
- Ensure your domain uses HTTPS
- Enable HSTS headers
- Use secure cookies in production

## Monitoring and Maintenance

### Logs
- **Vercel**: Check deployment logs in the Vercel dashboard
- **Railway**: View logs in the Railway project dashboard
- **DigitalOcean**: Access logs through the Apps panel

### Database Backups
- MongoDB Atlas: Enable automated backups
- Set backup frequency to daily
- Test restore procedures regularly

### Performance Monitoring
Consider adding:
- Google Analytics
- Vercel Analytics
- Error tracking (Sentry, LogRocket)

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build` locally
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Can't Connect to Database
- Verify MongoDB connection string
- Check IP whitelist settings in MongoDB Atlas
- Ensure username and password are correct

### Admin Login Not Working
- Verify JWT_SECRET is set
- Check browser console for errors
- Clear browser cookies and try again

### Contact Form Not Working
- Check MongoDB connection
- Verify API routes are accessible
- Check server logs for errors

## Getting Help

If you encounter issues:
1. Check the logs in your deployment platform
2. Review MongoDB Atlas metrics
3. Test locally with production environment variables
4. Consult platform-specific documentation:
   - [Vercel Docs](https://vercel.com/docs)
   - [Railway Docs](https://docs.railway.app)
   - [DigitalOcean Docs](https://docs.digitalocean.com/products/app-platform/)

## Rollback

If something goes wrong:

**Vercel:**
1. Go to Deployments tab
2. Find the last working deployment
3. Click "..." > "Promote to Production"

**Railway:**
1. Go to Deployments
2. Find the previous deployment
3. Click "Redeploy"

---

**Remember**: Always test thoroughly before directing users to your new deployment!
