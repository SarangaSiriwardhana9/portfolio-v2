# 🚀 Personal Portfolio

A modern and responsive developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS (ShadCN UI)**, and **Framer Motion**. This portfolio showcases my projects, skills, and experience as a Full Stack Developer.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, [ShadCN UI](https://ui.shadcn.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: Yarn
- **Deployment**: [Netlify](https://www.netlify.com/) / Static Export

---

## 📸 Screenshots

| Home Page | Projects Section |
|----------|------------------|
| ![Home]([./public/screenshots/home.png](https://github.com/user-attachments/assets/aab6e3b4-616c-434c-ab8b-2005bdba93e4)) | ![Projects](./public/screenshots/projects.png) |

> Replace with your actual screenshot paths or delete this section if not needed.

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
yarn install

# Run the development server
yarn dev
```

---

## 📤 Build for Production

```bash
yarn build
```

If you’re using `output: 'export'` in `next.config.js`, make sure to disable image optimization:

```ts
// next.config.js
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
```

---

## 📁 Folder Structure

```bash
src/
├── components/         # UI and shared components
├── pages/              # Page routes
├── styles/             # Global styles
├── utils/              # Utility functions
public/
├── images/             # Portfolio images
```

---

## 👨‍💻 Author

- **Name**: Saranga Siriwardhana
- **Title**: Full Stack Developer
- **LinkedIn**: [linkedin.com/in/sarangasiriwardhana](https://linkedin.com/in/sarangasiriwardhana)
- **Portfolio**: [yourdomain.com](https://yourdomain.com) *(replace with your actual URL)*

---

## 📜 License

This project is open source and a![1](https://github.com/user-attachments/assets/aab6e3b4-616c-434c-ab8b-2005bdba93e4)
vailable under the [MIT License](LICENSE).



