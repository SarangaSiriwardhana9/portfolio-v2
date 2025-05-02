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
| ![Capture1](https://github.com/user-attachments/assets/d5ec4f04-21df-4611-b292-c6475cd19ef2) | ![Capture](https://github.com/user-attachments/assets/6f2d0ecd-a987-4b2c-801e-47921334321a) |

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
- **LinkedIn**: [linkedin.com/in/sarangasiriwardhana](https://www.linkedin.com/in/saranga-siriwardhana-409494218/)
- **Portfolio**: [yourdomain.com](https://yourdomain.com) *(replace with your actual URL)*

---

## 🌐 Connect with Me

- [GitHub](https://github.com/SarangaSiriwardhana9)
- [LinkedIn](https://www.linkedin.com/in/saranga-siriwardhana-409494218/)
- [Instagram](https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==)
- [Facebook](https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
