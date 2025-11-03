# Project Testing Checklist

Use this checklist to ensure all features are working correctly before deployment.

## 🔧 Environment Setup
- [ ] `.env.local` file created with all required variables
- [ ] MongoDB connection string is correct
- [ ] JWT_SECRET is set (min 32 characters)
- [ ] MongoDB database is accessible

## 🏠 Public Website

### Home Page (`/`)
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] All images load properly
- [ ] Statistics show correctly (1000+ students, 25+ countries, 95% success rate)
- [ ] "Start Your Journey" button links to `/contact`
- [ ] "Explore Services" button links to `/services`
- [ ] Features section displays all cards
- [ ] Services overview shows correctly
- [ ] CTA section is visible
- [ ] Responsive on mobile devices

### Services Page (`/services`)
- [ ] Page loads without errors
- [ ] All service cards display correctly
- [ ] Service icons render properly
- [ ] IELTS/TOEFL package section visible
- [ ] Study destination cards load
- [ ] CTA buttons work
- [ ] Responsive design works on mobile

### About Page (`/about`)
- [ ] Page loads without errors
- [ ] Company story section displays
- [ ] Mission and vision cards visible
- [ ] Core values section shows all 4 values
- [ ] Team/statistics section renders
- [ ] Responsive on all screen sizes

### Contact Page (`/contact`)
- [ ] Page loads without errors
- [ ] Contact information displays correctly
  - [ ] Address
  - [ ] Phone numbers
  - [ ] Email addresses
  - [ ] Office hours
- [ ] Social media links work
- [ ] Contact form renders properly
- [ ] All form fields are present:
  - [ ] First Name
  - [ ] Last Name
  - [ ] Email
  - [ ] Phone
  - [ ] Country dropdown
  - [ ] Study Level dropdown
  - [ ] Field of Study
  - [ ] Message textarea
  - [ ] Terms checkbox
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Success notification appears
- [ ] Form data saved to MongoDB
- [ ] Notification auto-dismisses after 5 seconds
- [ ] Responsive on mobile

### Navigation & Layout
- [ ] Navbar displays on all pages
- [ ] Logo/brand name visible
- [ ] Navigation links work:
  - [ ] Home
  - [ ] About
  - [ ] Services
  - [ ] Contact
- [ ] Footer displays on all pages
- [ ] Footer links are correct
- [ ] Footer social media links work
- [ ] Mobile menu works (if applicable)
- [ ] Smooth scrolling functions

## 🔐 Admin System

### Admin Login (`/login`)
- [ ] Login page loads correctly
- [ ] Email and password fields present
- [ ] Form validation works
- [ ] Invalid credentials show error
- [ ] Valid credentials log in successfully
- [ ] JWT cookie is set
- [ ] Redirect to dashboard after login
- [ ] "Remember me" checkbox (if applicable)
- [ ] Password visibility toggle works

### Admin Seeding (`/seed`)
- [ ] Seed page loads
- [ ] "Create Initial Super Admin" button works
- [ ] Admin created in MongoDB
- [ ] Default credentials work:
  - Email: admin@bbconsultancy.com
  - Password: Admin@123
- [ ] Cannot create duplicate admin
- [ ] Success message shows

### Dashboard - Overview (`/dashboard`)
- [ ] Dashboard loads after authentication
- [ ] Statistics cards display:
  - [ ] Unseen inquiries count
  - [ ] Processing inquiries count
  - [ ] Resolved inquiries count
  - [ ] Total inquiries count
- [ ] Recent inquiries table shows
- [ ] Quick action buttons work
- [ ] Charts/graphs render (if applicable)
- [ ] Redirect to login if not authenticated

### Dashboard - Inquiries Tab
- [ ] Inquiries tab accessible
- [ ] All inquiries load correctly
- [ ] Filter buttons work:
  - [ ] All
  - [ ] Unseen
  - [ ] Processing
  - [ ] Resolved
- [ ] Inquiry cards show all information:
  - [ ] Name
  - [ ] Email
  - [ ] Phone
  - [ ] Country
  - [ ] Study Level
  - [ ] Field of Study
  - [ ] Message
  - [ ] Status
  - [ ] Date
- [ ] Status update works
- [ ] Search functionality (if applicable)
- [ ] Pagination works (if applicable)
- [ ] Real-time updates

### Dashboard - Admin Management (Super Admin Only)
- [ ] Admin management tab visible (super admin only)
- [ ] Create new admin button works
- [ ] Create admin form validates:
  - [ ] Name required
  - [ ] Email required and valid
  - [ ] Password required (min 8 chars)
  - [ ] Role selection works
- [ ] New admin created successfully
- [ ] Admin list displays all admins
- [ ] Admin status toggle works
- [ ] Cannot deactivate yourself
- [ ] Cannot delete yourself
- [ ] Regular admins cannot access this tab

### Dashboard - Profile Settings
- [ ] Settings tab loads
- [ ] Current admin info displays
- [ ] Update profile form works:
  - [ ] Name update
  - [ ] Email update
- [ ] Profile updates save correctly
- [ ] Change password form works:
  - [ ] Current password validation
  - [ ] New password validation
  - [ ] Password confirmation matching
- [ ] Password changed successfully
- [ ] Success/error messages display

### Dashboard - Logout
- [ ] Logout button works
- [ ] JWT cookie cleared
- [ ] Redirect to login page
- [ ] Cannot access dashboard after logout

## 🔒 Security Tests

### Authentication
- [ ] Cannot access `/dashboard` without login
- [ ] Invalid JWT redirects to login
- [ ] Expired JWT redirects to login
- [ ] JWT is HTTP-only cookie
- [ ] Secure flag set in production

### Authorization
- [ ] Regular admin cannot access admin management
- [ ] Super admin can access all features
- [ ] Viewer role (if implemented) has read-only access

### API Security
- [ ] All admin API routes require authentication
- [ ] Invalid tokens return 401
- [ ] Role-based access enforced
- [ ] SQL injection protection (N/A - using MongoDB)
- [ ] XSS protection in forms
- [ ] CSRF protection (verify)

### Password Security
- [ ] Passwords are hashed (bcrypt)
- [ ] Plain passwords never logged
- [ ] Strong password requirements enforced
- [ ] Password change requires current password

## 📱 Responsive Design Tests

### Mobile (375px - 767px)
- [ ] All pages render correctly
- [ ] Navigation is usable
- [ ] Forms are usable
- [ ] Buttons are touch-friendly
- [ ] Images scale properly
- [ ] No horizontal scroll

### Tablet (768px - 1023px)
- [ ] Layout adapts correctly
- [ ] Dashboard is usable
- [ ] Tables are readable
- [ ] Forms work properly

### Desktop (1024px+)
- [ ] Full layout displays
- [ ] Sidebar works properly
- [ ] Multi-column layouts render
- [ ] No layout issues

## 🌐 Browser Compatibility

### Chrome/Edge (Chromium)
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth

## ⚡ Performance Tests

- [ ] Page load time < 3 seconds
- [ ] Images optimized (Next.js Image component)
- [ ] No memory leaks
- [ ] Smooth animations (60fps)
- [ ] API responses < 500ms
- [ ] MongoDB queries optimized

## 🗄️ Database Tests

### Contact Collection
- [ ] Documents created correctly
- [ ] All fields saved properly
- [ ] Status updates persist
- [ ] Timestamps working
- [ ] Indexes present (if any)

### Admin Collection
- [ ] Admins created successfully
- [ ] Passwords hashed correctly
- [ ] Roles assigned properly
- [ ] Last login updates
- [ ] Active status works

### Database Connection
- [ ] Connection established
- [ ] Reconnection on failure
- [ ] Connection pooling works
- [ ] Error handling proper

## 🐛 Error Handling

- [ ] 404 page for invalid routes (if implemented)
- [ ] 500 error page (if implemented)
- [ ] Form validation errors display
- [ ] API errors show user-friendly messages
- [ ] Console errors handled gracefully
- [ ] Network errors handled

## ♿ Accessibility

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] Form labels present
- [ ] Color contrast sufficient
- [ ] Screen reader compatible (test if possible)

## 🎨 Visual Polish

- [ ] No layout shifts
- [ ] Consistent spacing
- [ ] Typography hierarchy clear
- [ ] Color scheme consistent
- [ ] Hover states on interactive elements
- [ ] Loading states for async operations
- [ ] Smooth transitions

## 📊 Analytics & Monitoring (Optional)

- [ ] Google Analytics configured (if applicable)
- [ ] Error tracking setup (if applicable)
- [ ] Performance monitoring (if applicable)

## 🚀 Pre-Deployment

- [ ] All TODO comments resolved
- [ ] Console.log statements removed (or appropriate)
- [ ] Development comments removed
- [ ] `.env.example` updated
- [ ] README.md up to date
- [ ] DEPLOYMENT.md reviewed
- [ ] Dependencies updated
- [ ] Security vulnerabilities checked (`npm audit`)
- [ ] Build succeeds (`npm run build`)
- [ ] Production build tested (`npm start`)

## 📝 Final Checks

- [ ] Git repository clean
- [ ] All files committed
- [ ] `.env` not committed
- [ ] `.gitignore` configured correctly
- [ ] Package.json versions correct
- [ ] No sensitive data in code
- [ ] License file present
- [ ] Documentation complete

---

## 🎉 Ready for Deployment!

Once all items are checked, you're ready to deploy to production!

**Last Steps:**
1. Create production MongoDB database
2. Generate secure JWT_SECRET
3. Deploy to hosting platform
4. Set environment variables
5. Test live deployment
6. Create first admin account
7. Change default credentials
8. Monitor for 24 hours

**Remember:** Test thoroughly in a staging environment before going live!
