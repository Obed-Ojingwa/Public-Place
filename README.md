# NerdPace: Premium Technical SEO Agency Platform

A production-ready, full-stack SaaS platform for a modern SEO agency. Built with Next.js, FastAPI, PostgreSQL, and deployed on Vercel & Render.

## 📁 Project Structure

```
nerdpace-fullstack/
├── frontend/                 # Next.js 14 frontend
│   ├── src/
│   │   ├── app/             # App router pages & API routes
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities & API client
│   │   └── styles/          # CSS & Tailwind
│   ├── public/              # Static assets
│   └── package.json         # Dependencies
│
├── backend/                  # FastAPI backend
│   ├── app/
│   │   ├── api/             # API routes & endpoints
│   │   ├── models/          # SQLAlchemy models
│   │   ├── crud/            # Database operations
│   │   ├── services/        # Business logic
│   │   ├── db/              # Database config & migrations
│   │   └── core/            # Core configurations
│   └── requirements.txt      # Python dependencies
│
├── docker-compose.yml        # Docker development setup
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (for frontend)
- Python 3.11+ (for backend)
- PostgreSQL 14+ (or Docker)
- Redis (or Docker)

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone <repo-url>
cd nerdpace-fullstack

# Copy env files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Start all services
docker-compose up -d

# Run migrations
docker-compose exec backend alembic upgrade head

# Access the app
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Local Development

#### Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env

# Run database migrations
alembic upgrade head

# Start server
uvicorn app.main:app --reload
```

#### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start development server
npm run dev
```

## 📋 Key Features

- ✅ **SEO-Optimized**: Full technical SEO implementation
- ✅ **Authentication**: Clerk integration for user management
- ✅ **Lead Management**: Capture and qualify leads
- ✅ **SEO Audits**: Automated audit reports
- ✅ **Blog System**: Markdown-based content management
- ✅ **Case Studies**: Showcase client wins
- ✅ **Admin Dashboard**: Manage leads, audits, analytics
- ✅ **Email Notifications**: SendGrid integration
- ✅ **Payment Processing**: Stripe integration
- ✅ **Analytics**: Google Analytics integration
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Dark Mode**: Theme switching support

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Auth**: Clerk

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.11+
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Cache**: Redis
- **Email**: SendGrid
- **Payments**: Stripe
- **Auth**: JWT + Clerk
- **Task Queue**: Celery (optional)

### DevOps
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **Database**: Supabase (PostgreSQL)
- **Container Registry**: Docker
- **CI/CD**: GitHub Actions

## 📚 Development Guide

### Frontend Development

```bash
cd frontend

# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Testing
npm run test

# Building
npm run build
npm start
```

### Backend Development

```bash
cd backend

# Start server with reload
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Run tests
pytest

# Type checking
mypy app

# Code formatting
black app
isort app

# Database migrations
alembic revision --autogenerate -m "Add new table"
alembic upgrade head
alembic downgrade -1
```

## 🔒 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_GA_ID=...
```

### Backend (.env)
```
DATABASE_URL=postgresql+asyncpg://user:pass@localhost:5432/nerdpace
REDIS_URL=redis://localhost:6379
SECRET_KEY=...
SENDGRID_API_KEY=...
STRIPE_SECRET_KEY=...
CLERK_SECRET_KEY=...
```

## 📖 API Documentation

After starting the backend, visit:
```
http://localhost:8000/docs
```

This provides interactive Swagger documentation for all API endpoints.

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Connect GitHub repo to Vercel
# Set environment variables in Vercel dashboard
# Deploy on push to main branch
```

### Backend (Render)
```bash
# Create new Web Service on Render
# Connect GitHub repo
# Set environment variables
# Configure build command: pip install -r requirements.txt && alembic upgrade head
# Configure start command: uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Database (Supabase)
```bash
# Create new project on Supabase
# Get connection string (PostgreSQL)
# Set DATABASE_URL in backend environment
```

## 🧪 Testing

### Frontend Testing
```bash
npm run test
npm run test:watch
```

### Backend Testing
```bash
pytest
pytest -v
pytest --cov
```

## 📊 Project Status

- [x] Project structure
- [x] Frontend setup (Next.js)
- [x] Backend setup (FastAPI)
- [x] Database schema design
- [x] Authentication flow
- [ ] Core API endpoints
- [ ] Frontend pages
- [ ] Admin dashboard
- [ ] Email automation
- [ ] Payment integration
- [ ] Deployment pipeline

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make your changes
3. Run tests and linting
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature/new-feature`
6. Submit pull request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Support

- 📧 Email: support@nerdpace.com
- 💬 Issues: GitHub Issues
- 📚 Docs: See `/docs` folder

## 🎯 Next Steps

1. **Set up environment variables** (.env files)
2. **Initialize database** with migrations
3. **Create first admin user**
4. **Implement core API endpoints** (leads, audits, contact)
5. **Build frontend pages** (home, services, pricing)
6. **Set up authentication** (Clerk)
7. **Integrate email service** (SendGrid)
8. **Configure payment processing** (Stripe)
9. **Set up analytics** (Google Analytics)
10. **Deploy to production** (Vercel & Render)

---

**Happy coding! 🚀**
