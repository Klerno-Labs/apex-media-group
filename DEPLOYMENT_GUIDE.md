# Deployment Guide for Apex Media Group Website

## Step-by-Step Vercel Deployment
1. **Create a Vercel Account**: Sign up at [vercel.com](https://vercel.com).

2. **Connect Your GitHub Repository**:
   - Go to the Vercel dashboard.
   - Click on "New Project".
   - Select your GitHub repository containing the Apex Media Group website.

3. **Configure Environment Variables**:
   - In the Vercel dashboard, navigate to your project settings.
   - Under the "Environment Variables" section, add the following:
     - `NEXT_PUBLIC_API_URL`: Your API endpoint.

4. **Domain Setup**:
   - In the Vercel dashboard, go to the "Domains" section.
   - Add your custom domain or use the default Vercel domain.

5. **Post-Deploy Checklist**:
   - Ensure SSL is enabled for your domain.
   - Set up any necessary redirects.
   - Integrate Google Analytics for tracking.
   - Verify that all pages load correctly and that forms function as expected.