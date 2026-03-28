# Goodness Semilore - Portfolio Website

A modern, clean portfolio website built with Next.js, Tailwind CSS, and Supabase. Features a beautiful, responsive design with dark/light mode, smooth animations, and a professional presence.

## Features

### Portfolio Website
- **Hero Section** - Professional introduction with personal photo
  - Text on the left side
  - Photo on the right side
  - Responsive grid layout for all devices
- **About Section** - Professional background and expertise
- **Projects Section** - Dynamic project showcase with live demos and GitHub links
- **Tech Stack Section** - Modern badge display of tools and technologies
  - HTML, CSS, JavaScript
  - Git & GitHub
  - Canva, ChatGPT, Fireflies, NotebookLM, Claude
- **Services Section** - Service offerings with detailed descriptions
- **Certifications** - Professional certifications and achievements
- **Contact Section** - Contact form and WhatsApp integration
- **Dark/Light Mode** - Theme toggle with system preference support
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile

## Getting Started

### Prerequisites
- Node.js 18+ installed

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

## Project Structure

```
├── app/
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
├── public/
│   └── image0_(2).jpeg     # Profile photo
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
- `github_url` - GitHub repository URL (optional)
- `order_index` - Display order
- `created_at` - Creation timestamp
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

### Hero Section
The hero section displays:
- Name: "Hi, I'm Goodness Semilore"
- Title: "AI-Certified Virtual Assistant | Developer"
- Description: "Helping businesses improve productivity and digital workflows using AI tools."
- Profile photo from `public/image0_(2).jpeg`

## Technologies Used

- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a Service (Database)
- **Shadcn UI** - Beautiful, accessible UI components
- **Lucide React** - Icon library
- **Next Themes** - Dark mode support
- **Next Image** - Optimized image loading

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

## License

This project is private and proprietary.

---

Built with care by Goodness Semilore
