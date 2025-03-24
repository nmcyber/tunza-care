# 🌟 Tunza Care Services Website

<div align="center">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<div align="center">
    <p><strong>A modern, accessible healthcare website for Tunza Care Services</strong></p>
    <p>Empowering lives through compassionate care and exceptional service</p>
</div>

## 📋 Overview

Tunza Care Services is a Western Australian NDIS provider offering a range of in-home care, community participation, supported independent living, clinical care, and allied health services. This project is a complete redesign and development of their website, focusing on improved user experience, accessibility, and modern design principles.

## ✨ Before & After

<div align="center">
    <table>
        <tr>
            <td align="center"><strong>Before</strong></td>
            <td align="center"><strong>After</strong></td>
        </tr>
        <tr>
            <td><img src="https://github.com/nmcyber/tunza-care/blob/main/tunza_care_landing_page_before.png" alt="Old Tunza Care Website" /></td>
            <td><img src="https://github.com/nmcyber/tunza-care/blob/main/laptop_tunza-nmcyber-2025-03-25-02_14_33_after.png" alt="New Tunza Care Website" /></td>
        </tr>
        <tr>
            <td>Static design with limited functionality</td>
            <td>Dynamic, responsive design with modern UI components</td>
        </tr>
        <tr>
            <td><img src="/large_desktop_view-dev-tunza-nmcyber-2025-03-25-02_15_47_after.png" alt="Large Desktop View (1920 x 1080)" /></td>
        </tr>
    </table>
</div>

## 🚀 Key Features

- **Responsive Design**: Fully responsive across all device sizes
- **Animated UI Components**: Smooth, engaging animations using Framer Motion
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading times with optimized assets
- **Interactive Elements**: Dynamic forms, galleries, and navigation
- **SEO Friendly**: Structured data and optimized metadata
- **Career Portal**: Integrated job listings and application system

## 💻 Technical Highlights

### 🎨 AnimatedDoctor Component

One of the standout features of this project is the `AnimatedDoctorImage` component. Instead of using static SVG or PNG exports from Figma (as most developers would), we meticulously recreated the design using pure Tailwind CSS and enhanced it with Framer Motion animations.

```jsx
<div className="relative z-0 aspect-square rounded-tl-lg border-2 border-pink-700">
    {/* Complex shapes built with Tailwind CSS */}
    <div className="absolute z-10 inset-0 aspect-square w-1/2 rounded-tl-md bg-lime-500" />
    <div className="absolute z-10 -top-0 -left-0 aspect-square w-[95%] bg-lime-500 rounded-full" />

    {/* Animated image with sparkle effects */}
    <motion.img
        id="image"
        src={imageSrc}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
    />

    {/* Dynamic sparkle effects */}
    <Sparkle delay={1.2} x={20} y={30} size={6} />
</div>
```jsx

**Benefits of this approach:**

- **Pixel-perfect recreation** of the Figma design
- **Smaller file size** compared to SVG/PNG exports
- **Fully responsive** without quality loss at any screen size
- **Easier to animate** specific elements independently
- **Better accessibility** for screen readers
- **Easier to maintain** and modify in the future


### 🧩 Other Technical Features

- **Custom Hooks**: Reusable logic for responsive design, animations, and more
- **Type Safety**: Full TypeScript implementation for robust code
- **Component Library**: Custom UI components built on top of existing libraries
- **State Management**: Efficient state handling with React hooks
- **API Integration**: Seamless connection with backend services

## 📦 Project Structure

```plaintext
tunza-care/
├── components/             # Reusable React components
│   ├── about/              # About page components
│   ├── service-sections/   # Service section components
│   ├── shared/             # Shared components
│   └── ui/                 # UI components (e.g., from a library)
├── constants/              # Constants and static data
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
├── src/                    # Main source code directory (common in Vite React)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point of the application
│   ├── assets/             # Local assets
│   ├── components/         # (Could be nested here as well)
│   ├── pages/              # Page-level components
│   ├── styles/             # Global or component-specific styles
│   └── ...
├── styles/                 # Global styles (can be outside src as well)
├── index.html              # Main HTML file
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── ...

```

## 🛠️ Installation and Setup

1. **Clone the repository**

```shellscript
git clone https://github.com/your-username/tunza-care.git
cd tunza-care
```

2. **Install dependencies**

```shellscript
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Build for production**

```shellscript
npm run build
# or
yarn build
# or
pnpm build
```

## 🌐 Deployment

This website can be deployed to various platforms that support static site hosting or Node.js environments, depending on your specific backend setup. Some popular options include Netlify, Vercel, or AWS Amplify. Refer to the documentation of your chosen platform for detailed deployment instructions.

🧑‍🤝‍🧑 Contributors
@Xanderyeng
@sagar9k
@sangharate

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Vite](https://vite.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)