# SRQ IFMC - Next.js Website

A modern, responsive website for SRQ IFMC (Strategic Relations & Quality - Insurance, Finance, Marketing & Communications) built with Next.js 14, React 18, and TypeScript.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Next.js Image optimization and modern web practices
- **Component-Based**: Modular React components for maintainability
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Interactive Forms**: Contact form with React state management

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "d:\SRQ-IFMC Web\SRQ-WEB\SRIQ-IFMC"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Move assets to public folder**
   Move all files from the `assets/` folder to `public/assets/`:
   - `SRQ_LOGO.jpeg`
   - `manasi-jena.jpeg` 
   - `mutual-fund.png`
   - `ndc.png`
   - `punyabrata-mohanty.jpeg`
   - `why.png`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── Investment.tsx      # Investment solutions
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── public/
│   └── assets/             # Static assets (images, etc.)
├── package.json            # Dependencies and scripts
├── next.config.js          # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Components Overview

- **Header**: Fixed navigation with logo and menu links
- **Hero**: Landing section with call-to-action buttons
- **About**: Company mission, vision, and values
- **Services**: Finance and insurance service cards
- **Investment**: Mutual funds and NCD investment options
- **Contact**: Interactive contact form and company information
- **Footer**: Site links, services, and contact details

## 🚀 Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Deploy to Vercel (recommended)**
   ```bash
   npx vercel
   ```

## 🔧 Customization

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use inline styles for simplicity
- Colors follow the brand palette (blue: #3b82f6, purple: #8b5cf6)

### Content Updates
- Edit component files in the `components/` folder
- Update contact information in `Contact.tsx` and `Footer.tsx`
- Modify service offerings in `Services.tsx` and `Investment.tsx`

### Adding New Pages
1. Create new page in `app/` directory
2. Add corresponding components in `components/`
3. Update navigation links in `Header.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📄 License

This project is proprietary to SRQ IFMC. All rights reserved.

## 📞 Support

For technical support or questions about this website:
- Email: solutions@srq.in
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using Next.js**
