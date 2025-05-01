---

# Next.js Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Development](#development)
- [Font Optimization](#font-optimization)
- [Learn More](#learn-more)
- [Deployment](#deployment)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/unwir-dev/nextjs-boilerplate.git
```

Navigate to the project directory:

```bash
cd nextjs-boilerplate
```

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

### Development Server

To run the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## File Structure

- **`/app`**: Contains the main application code.
- **`/components`**: Reusable React components.
  - **`/ui`**: Contains the `shadcn` component.
  - **`/examples`**: Showcases the example usage of components.
- **`/config`**: Configuration files.
- **`/constants`**: Constants used throughout the application.
- **`/hooks`**: Custom React hooks.
- **`/styles`**: Global styles and CSS files.
- **`/utils`**: Utility functions and helper modules.

## Development

The project is set up with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and follows the conventions of a Next.js project. You can customize and extend it according to your needs.

## Font Optimization

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load the Inter font, a custom Google Font.

## Learn More

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial.

Check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) for feedback and contributions.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---
