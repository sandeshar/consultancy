# Quick Testing Guide

## 🚀 Quick Start Testing

### 1. Environment Setup (First Time Only)
```bash
# Create .env.local file
cp .env.example .env.local

# Edit .env.local with your values:
MONGODB_URI=mongodb://localhost:27017/consultancy
JWT_SECRET=your-secure-random-string-min-32-chars
NODE_ENV=development
```

### 2. Start Development Server
```powershell
npm run dev
```

### 3. Create Initial Admin
1. Open browser: http://localhost:3000/seed
2. Click "Create Super Admin"
3. Note the credentials:
   - Email: admin@consultancy.com
   - Password: admin123

### 4. Test Admin Login
1. Go to: http://localhost:3000/login
2. Enter credentials from step 3
3. Should redirect to dashboard

---

## 🧪 Test Each Route

### Public Routes (No Authentication Required)

#### Home Page
- **URL:** http://localhost:3000/
- **Test:**
  - ✅ Page loads without errors
  - ✅ Hero section displays
  - ✅ All images load
  - ✅ Navigation links work
  - ✅ "Start Your Journey" button goes to /contact
  - ✅ "Explore Services" button goes to /services

#### About Page
- **URL:** http://localhost:3000/about
- **Test:**
  - ✅ Company story displays
  - ✅ Mission & vision cards show
  - ✅ Core values section visible
  - ✅ All animations work

#### Services Page
- **URL:** http://localhost:3000/services
- **Test:**
  - ✅ Service cards display
  - ✅ Package information shows
  - ✅ All icons render
  - ✅ Responsive design works

#### Contact Page
- **URL:** http://localhost:3000/contact
- **Test:**
  - ✅ Contact form displays
  - ✅ All form fields present
  - ✅ Social media links work
  - ✅ Form submission works
  - ✅ Success notification appears
  - ✅ Data saved to database

**Test Contact Form Submission:**
```
1. Fill out form:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Phone: +977-9841234567
   - Country: United States
   - Study Level: Bachelor's Degree
   - Field of Study: Computer Science
   - Message: Test inquiry
   - Check terms checkbox

2. Click "Send Message & Book Consultation"

3. Should:
   - Redirect to /contact?success=true
   - Show green success notification
   - Notification auto-dismisses after 5s
```

---

### Admin Routes (Authentication Required)

#### Seed Page
- **URL:** http://localhost:3000/seed
- **Test:**
  - ✅ Page loads
  - ✅ "Create Super Admin" button works
  - ✅ Shows credentials in response
  - ✅ Returns error if admin exists

#### Login Page
- **URL:** http://localhost:3000/login
- **Test Invalid Login:**
  ```
  Email: wrong@email.com
  Password: wrongpassword
  Expected: Error message "Invalid credentials"
  ```
- **Test Valid Login:**
  ```
  Email: admin@consultancy.com
  Password: admin123
  Expected: Redirect to /dashboard
  ```
- **Test:**
  - ✅ Form validation works
  - ✅ Loading state shows
  - ✅ Error messages display
  - ✅ Successful login redirects

#### Dashboard - Overview Tab
- **URL:** http://localhost:3000/dashboard
- **Test:**
  - ✅ Loads after authentication
  - ✅ Shows statistics cards
  - ✅ Displays recent inquiries
  - ✅ Shows correct counts
  - ✅ Quick action buttons work

#### Dashboard - Inquiries Tab
- **URL:** http://localhost:3000/dashboard (Inquiries tab)
- **Test:**
  - ✅ Shows all inquiries
  - ✅ Filter buttons work (All/Unseen/Processing/Resolved)
  - ✅ Can click on inquiry to view details
  - ✅ Can update status
  - ✅ Can add notes
  - ✅ Search functionality works
  - ✅ Pagination works (if > 10 inquiries)

**Test Status Update:**
```
1. Click on an inquiry card
2. Change status dropdown (Unseen → Processing)
3. Add a note: "Following up with student"
4. Click "Update Status"
5. Should update and show success message
```

#### Dashboard - Admin Management Tab (Super Admin Only)
- **URL:** http://localhost:3000/dashboard (Clients tab)
- **Test:**
  - ✅ Only visible to super_admin
  - ✅ Shows all admins list
  - ✅ Can create new admin
  - ✅ Can activate/deactivate admins
  - ✅ Cannot deactivate self

**Test Create Admin:**
```
1. Click "Create New Admin"
2. Fill form:
   - Name: Test Admin
   - Email: testadmin@consultancy.com
   - Password: admin123
   - Role: Admin
3. Click "Create Admin"
4. Should appear in admin list
```

#### Dashboard - Settings Tab
- **URL:** http://localhost:3000/dashboard (Settings tab)
- **Test:**
  - ✅ Shows current profile info
  - ✅ Can update name/email
  - ✅ Can change password
  - ✅ Validation works

**Test Profile Update:**
```
1. Change name to: "Admin Updated"
2. Click "Update Profile"
3. Should show success message
4. Name should update in header
```

**Test Password Change:**
```
1. Current Password: admin123
2. New Password: newpassword123
3. Confirm Password: newpassword123
4. Click "Change Password"
5. Should show success
6. Logout and login with new password
```

#### Logout
- **Test:**
  - ✅ Click "Logout" button
  - ✅ Redirects to /login
  - ✅ Cannot access /dashboard without login
  - ✅ Cookie is cleared

---

## 🔍 API Route Testing (with cURL or Postman)

### Test Authentication
```bash
# Login
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@consultancy.com","password":"admin123"}' \
  -c cookies.txt

# Check Auth (use cookie from login)
curl -X GET http://localhost:3000/api/admin/auth \
  -b cookies.txt

# Logout
curl -X POST http://localhost:3000/api/admin/logout \
  -b cookies.txt
```

### Test Contacts API
```bash
# Get all contacts
curl -X GET "http://localhost:3000/api/admin/contacts?status=all&limit=10" \
  -b cookies.txt

# Get unseen only
curl -X GET "http://localhost:3000/api/admin/contacts?status=unseen" \
  -b cookies.txt

# Update contact status
curl -X PUT http://localhost:3000/api/admin/contacts \
  -H "Content-Type: application/json" \
  -d '{"contactId":"CONTACT_ID_HERE","status":"processing","note":"Following up"}' \
  -b cookies.txt
```

---

## 🗄️ Database Testing

### Check MongoDB
```bash
# Connect to MongoDB
mongosh consultancy

# Check admins
db.admins.find()

# Check contacts
db.contacts.find()

# Count inquiries by status
db.contacts.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])
```

---

## 🎨 UI/UX Testing

### Responsive Design
- **Test Breakpoints:**
  - Mobile: 375px, 425px
  - Tablet: 768px, 1024px
  - Desktop: 1280px, 1920px

### Browser Testing
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### Animation Testing
- ✅ Success notification slides in
- ✅ Button hover effects work
- ✅ Card hover elevations
- ✅ Loading spinners
- ✅ Smooth page transitions

---

## 🐛 Error Scenario Testing

### Authentication Errors
```
1. Try accessing /dashboard without login
   Expected: Redirect to /login

2. Try invalid credentials
   Expected: Error message

3. Try with inactive admin account
   Expected: "Account is deactivated"

4. Try with expired JWT (wait 24h or modify token)
   Expected: Redirect to /login
```

### Form Validation Errors
```
1. Submit contact form without required fields
   Expected: HTML5 validation errors

2. Submit with invalid email format
   Expected: Validation error

3. Try creating admin with existing email
   Expected: "Email already exists"

4. Try changing password with wrong current password
   Expected: "Current password is incorrect"
```

### Network Errors
```
1. Stop MongoDB and try operations
   Expected: Connection error handling

2. Try operations with invalid JWT
   Expected: 401 Unauthorized

3. Try accessing super_admin routes as regular admin
   Expected: 403 Forbidden
```

---

## ✅ Success Criteria

### All Tests Pass If:
- ✅ All pages load without console errors
- ✅ All forms submit successfully
- ✅ Authentication flow works completely
- ✅ Authorization is properly enforced
- ✅ Data persists in database
- ✅ Notifications display correctly
- ✅ Responsive design works on all devices
- ✅ All animations are smooth
- ✅ Error messages are user-friendly
- ✅ Security measures are in place

---

## 🚨 Common Issues & Solutions

### Issue: MongoDB Connection Error
```
Error: "MongoDB connection error"
Solution: 
- Check MongoDB is running
- Verify MONGODB_URI in .env.local
- Check network connectivity
```

### Issue: JWT Error
```
Error: "Invalid token"
Solution:
- Clear browser cookies
- Check JWT_SECRET is set
- Try logging in again
```

### Issue: Cannot Access Dashboard
```
Error: Redirects to login immediately
Solution:
- Check if logged in
- Verify cookie is set
- Check JWT_SECRET matches
```

### Issue: Form Not Submitting
```
Error: Form doesn't submit or no success message
Solution:
- Check browser console for errors
- Verify MongoDB connection
- Check server-side logs
```

---

## 📊 Performance Testing

### Load Times (Expected)
- Home page: < 2 seconds
- Dashboard: < 3 seconds
- API responses: < 500ms

### Memory Usage
- Check for memory leaks in dashboard
- Monitor MongoDB connection pool
- Verify no console warnings

---

## 🎯 Final Checklist

Before considering testing complete:

- [ ] All public pages load correctly
- [ ] Contact form submits and saves to DB
- [ ] Success notification appears and dismisses
- [ ] Admin can be created via /seed
- [ ] Login works with correct credentials
- [ ] Login rejects invalid credentials
- [ ] Dashboard loads with all sections
- [ ] Inquiries can be filtered and updated
- [ ] New admins can be created (super_admin)
- [ ] Profile can be updated
- [ ] Password can be changed
- [ ] Logout works and clears session
- [ ] Cannot access dashboard when logged out
- [ ] Responsive design works on mobile
- [ ] All animations are smooth
- [ ] No console errors in any page
- [ ] MongoDB stores all data correctly
- [ ] Security measures are working

---

**When all items are checked, the application is fully tested and ready for deployment! 🎉**
