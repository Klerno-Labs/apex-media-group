# Client Handoff for Apex Media Group Website

## Overview
We have built a modern, high-performance website for Apex Media Group, designed to showcase your services and generate leads. Below is a guide to help you navigate and customize your new site.

## Page-by-Page Overview
- **Home**: Features a type-driven hero section, logo marquee for social proof, and a preview of your services.
- **About**: Introduces your agency with a split-screen layout and details your unique process.
- **Services**: Showcases your core services with an interactive ROI calculator and an FAQ section.
- **Contact**: Provides your contact information and a form for potential clients to reach out.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., `hero`).
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can swap it in the same way as images by updating the `src` URL in `src/config/images.ts`.

## Changing Colors
To modify the colors used throughout the site:
- Edit the `tailwind.config.js` file to change the color palette.

## Changing Fonts
To swap the Google Font used in the root layout:
- Update the font imports in `layout.tsx`.

## Updating Text Content
To update text content on any page, locate the corresponding `.tsx` file in the `src/app/pages` directory and edit the text directly.

## Requesting Changes
For any additional changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance
Your site is hosted on Vercel, which handles deployments and scaling automatically. Regularly check for updates and performance optimizations.

## Contact
For support, contact Pegrio at support@pegrio.com.