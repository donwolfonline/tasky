# Taskyit - Modern Project Management System

A modern, full-stack project management system built with the T3 Stack, featuring real-time updates, beautiful UI, and seamless collaboration.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Authentication:** Clerk
- **Database:** Turso (LibSQL)
- **ORM:** Drizzle
- **Styling:** Tailwind CSS, shadcn/ui
- **State Management:** Zustand
- **Package Manager:** Bun
- **API:** tRPC

### Features
- 🏢 Authentication, User Management and Organization
- 💻 Role-based Access
- 📢 Get leads from funnels
- 🎨 Task board with drag-and-drop
- 📂 Project management system
- 🔗 Activity logging
- ☀️ Light & Dark mode

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+ and Bun installed
- Clerk account for authentication
- Turso account for database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/donwolfonline/taskyit.git
cd taskyit
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file with:
- Clerk API keys (from https://clerk.com/)
- Turso database credentials (from https://turso.tech/)
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
TURSO_DATABASE_URL=your_database_url
TURSO_AUTH_TOKEN=your_auth_token
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

5. Set up the database:
```bash
bun run db:generate  # Generate migrations
bun run db:push     # Push migrations to database
```

6. Start the development server:
```bash
bun dev
```

The application will be available at `http://localhost:3000`

## 🌟 Features in Detail

### Authentication & Organizations
- Sign up/Sign in with email or social providers
- Organization creation and management
- Role-based access control

### Project Management
- Create and manage boards
- Add lists and cards
- Drag-and-drop interface
- Real-time updates

### Activity Tracking
- Audit logs for all actions
- User activity monitoring
- Change history

## 📦 Deployment

You can deploy this application on:
- [Vercel](https://create.t3.gg/en/deployment/vercel)
- [Netlify](https://create.t3.gg/en/deployment/netlify)
- [Docker](https://create.t3.gg/en/deployment/docker)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with the [T3 Stack](https://create.t3.gg/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Database hosting by [Turso](https://turso.tech/)
- Authentication by [Clerk](https://clerk.com/)
