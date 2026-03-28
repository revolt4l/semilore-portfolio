# Akinduko Goodness - Developer Portfolio

A modern, high-end developer portfolio website built with Next.js, Tailwind CSS, and Supabase. Features a beautiful, responsive design with dark/light mode, smooth animations, and a secure admin dashboard for content management.

## Features

### Portfolio Website
- **Hero Section** - Eye-catching introduction with animated gradient background
- **About Section** - Professional background and expertise
- **Projects Section** - Dynamic project showcase with live demos and GitHub links
- **Skills Section** - Visual skill grid with icons
- **Services Section** - Service offerings with detailed descriptions
- **Certifications** - Professional certifications and achievements
- **Contact Section** - Contact form and WhatsApp integration
- **Dark/Light Mode** - Theme toggle with system preference support
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile

### Admin Dashboard
- **Secure Authentication** - Protected admin area with Supabase Auth
- **Project Management** - Full CRUD operations for projects
- **Easy Content Updates** - Intuitive interface for managing portfolio content
- **Image Management** - Support for project images via URLs
- **Tech Stack Tags** - Dynamic technology badges for each project

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account (already configured)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Admin Dashboard

### Accessing the Admin Dashboard

1. Navigate to `/admin` to access the login page
2. Sign in with your Supabase authentication credentials
3. Once authenticated, you'll be redirected to `/admin/dashboard`

### Creating an Admin User

To create your first admin user, you need to sign up through Supabase:

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Click "Add User" and create a new user with email and password
4. Use these credentials to log into the admin dashboard at `/admin`

### Managing Projects

From the admin dashboard, you can:
- **Add New Projects** - Click "Add New Project" and fill in the details
- **Edit Projects** - Click the "Edit" button on any project card
- **Delete Projects** - Click the trash icon to remove a project
- **Upload Images** - Provide image URLs for project thumbnails
- **Add Tech Stack** - List technologies as comma-separated values
- **Set URLs** - Add live demo and GitHub repository links

## Project Structure

```
├── app/
│   ├── admin/              # Admin authentication and dashboard
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Main portfolio page
├── components/
│   ├── sections/           # Portfolio sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── services.tsx
│   │   ├── certifications.tsx
│   │   └── contact.tsx
│   ├── navigation.tsx      # Navigation bar
│   ├── footer.tsx          # Footer component
│   └── theme-provider.tsx  # Dark mode provider
├── lib/
│   └── supabase.ts         # Supabase client configuration
└── components/ui/          # Shadcn UI components
```

## Database Schema

### Projects Table
- `id` - Unique identifier
- `title` - Project name
- `description` - Project description
- `tech_stack` - Array of technologies used
- `image_url` - Project image URL
- `live_url` - Live demo URL
- `github_url` - GitHub repository URL
- `order_index` - Display order
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

### Resume Table
- `id` - Unique identifier
- `file_url` - Resume file URL
- `file_name` - Resume file name
- `updated_at` - Last update timestamp

## Customization

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Update navigation items if needed

### Styling
- Uses Tailwind CSS for styling
- Dark mode classes are automatically applied based on theme
- Customize colors in `tailwind.config.ts`

### Contact Information
Update contact details in `components/sections/contact.tsx`:
- Email address
- WhatsApp number
- Website URL

## Technologies Used

- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a Service (Database + Authentication)
- **Shadcn UI** - Beautiful, accessible UI components
- **Lucide React** - Icon library
- **Next Themes** - Dark mode support

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import the repository in Netlify
3. Add environment variables
4. Deploy

## Security Notes

- Never commit `.env` files to version control
- Keep your Supabase keys secure
- Use Row Level Security (RLS) policies in Supabase
- Admin dashboard requires authentication

## Support

For issues or questions:
- Email: Oluwasemiloregoodness@gmail.com
- WhatsApp: +234 805 971 2276
- Website: https://goratechpowerhub.vercel.app

## License

This project is private and proprietary.

---

Built with care by Akinduko Goodness
