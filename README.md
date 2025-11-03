# B&B Education Consultancy Website

A modern, full-stack education consultancy website built with Next.js 15, TypeScript, MongoDB, and Tailwind CSS. This platform helps students explore study abroad opportunities and manage inquiries through a comprehensive admin dashboard.

## 🌟 Features

### Public Website
- **Modern Landing Page** - Attractive hero section with gradient designs
- **Services Showcase** - Detailed information about consultancy services
- **About Page** - Company information, mission, vision, and values
- **Contact Form** - Easy inquiry submission with real-time validation
- **Responsive Design** - Mobile-first approach with beautiful UI

### Admin Dashboard
- **Secure Authentication** - JWT-based login system with bcrypt password hashing
- **Dashboard Overview** - Quick stats and recent inquiries at a glance
- **Inquiry Management** - View, filter, and manage student inquiries by status
- **Admin Management** - Create and manage admin users (Super Admin only)
- **Profile Settings** - Update admin profile and change password
- **Real-time Updates** - Dynamic data fetching and updates

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcryptjs
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with smooth animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm
- MongoDB (local installation or MongoDB Atlas account)
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/consultancy.git
cd consultancy
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Update the `.env.local` file with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/consultancy
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/consultancy?retryWrites=true&w=majority
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Admin Setup

### Creating the First Admin Account

1. **Visit the Seed Page**: Navigate to `http://localhost:3000/seed`
2. **Create Super Admin**: Click the "Create Initial Super Admin" button
3. **Default Credentials**:
   - Email: `admin@bbconsultancy.com`
   - Password: `Admin@123`
   - Role: Super Admin

4. **Login**: Go to `http://localhost:3000/login` and use the credentials

> ⚠️ **Important**: Change the default password immediately after first login!

### Admin Roles
- **Super Admin**: Full access including admin management
- **Admin**: Can manage inquiries and view statistics
- **Viewer**: Read-only access to inquiries

## 📁 Project Structure

```
consultancy/
├── src/
│   ├── app/
│   │   ├── (admin)/           # Admin routes (grouped)
│   │   │   ├── dashboard/     # Admin dashboard
│   │   │   ├── login/         # Admin login
│   │   │   └── layout.tsx     # Admin layout
│   │   ├── api/               # API routes
│   │   │   └── admin/         # Admin API endpoints
│   │   ├── db/                # Database schemas
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Services page
│   │   ├── seed/              # Database seeding
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   └── components/
│       ├── admin/             # Admin components
│       ├── navbar.tsx         # Navigation bar
│       ├── footer.tsx         # Footer
│       └── success-notification.tsx
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
└── README.md                 # This file
```

## 🎨 Key Features Details

### Contact Form
- Multi-step validation
- Country and study level selection
- Real-time form submission
- Success notification with auto-dismiss
- Server-side validation and sanitization

### Admin Dashboard
- **Overview Section**: Statistics cards, recent inquiries, quick actions
- **Inquiries Management**: Filter by status (unseen/processing/resolved)
- **Admin Management**: Create, activate/deactivate admins
- **Settings**: Update profile, change password
- **Secure Logout**: Clear sessions and cookies

### Database Models
- **Admin Model**: User authentication and authorization
- **Contact Model**: Student inquiry management with status tracking

## 🔒 Security Features

- JWT-based authentication with HTTP-only cookies
- Password hashing with bcrypt (10 rounds)
- Protected API routes with middleware
- Role-based access control
- Secure session management
- Environment variable protection

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized images and assets

## 🚢 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment Platforms
- **Vercel** (Recommended for Next.js)
- **Railway**
- **Digital Ocean**
- **AWS**

### Environment Variables for Production
Set these in your deployment platform:
```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_production_secret
NODE_ENV=production
```

## 🧪 Development Scripts

```bash
# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📝 API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Protected)
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/auth` - Check authentication
- `GET /api/admin/contacts` - Get inquiries (with filters)
- `PUT /api/admin/contacts` - Update inquiry status
- `GET /api/admin/manage` - Get all admins (Super Admin)
- `POST /api/admin/manage` - Create new admin (Super Admin)
- `GET /api/admin/profile` - Get admin profile
- `PUT /api/admin/profile` - Update admin profile
- `POST /api/admin/change-password` - Change password
- `POST /api/admin/seed` - Create initial admin

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

B&B Education Consultancy
- Website: [www.bbconsultancy.com](https://www.bbconsultancy.com)
- Email: info@bbconsultancy.com
- Phone: +977-1-4444444
- Address: Putalisadak, Kathmandu, Nepal

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Vercel for hosting solutions
- MongoDB for the database
- Tailwind CSS for the styling system

---

**Made with ❤️ for students pursuing international education**
