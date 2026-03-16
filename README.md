# Apex Media Group Website

## Project Description
A bespoke, high-performance website for Apex Media Group, a full-service digital agency specializing in strategy, design, and performance marketing. This site is designed to generate high-quality leads while showcasing the agency's capabilities through a modern, dark-mode aesthetic.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (Utility-first)
- Framer Motion (for animations)
- react-hook-form (for form handling)

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/apex-media-group.git
   cd apex-media-group
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Build
To create an optimized production build:
```bash
npm run build
```

### Deploy
To deploy the application to Vercel:
```bash
npm run deploy
```

## Project Structure Overview
```
/src
  /app
    /api
    /components
    /config
    /pages
  /public
  /styles
  /utils
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot has a comment explaining where it appears.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: Gallery image 1
- **gallery-2**: Gallery image 2
- **team-1**: Team member photo
- **gallery-3**: Gallery image 3
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background

## Brand Customization
To change colors, fonts, or logo:
- **Colors**: Modify the `tailwind.config.js` file.
- **Fonts**: Update the font imports in `layout.tsx`.
- **Logo**: Change the logo URL in `src/config/images.ts`.

## Environment Variables
The following environment variables are required:
- `NEXT_PUBLIC_API_URL`: Your API endpoint.

## Deployment Instructions
1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy your application.