# Fragrence — Luxury Perfume Store Landing Page

This repository contains a production-grade, responsive, single-page marketing landing website for **Fragrence**, a premium perfume retail boutique established in **Surat, Gujarat, India** since **2008**.

---

## Technical Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (utility-first, theme extension in CSS)
- **Interactive UI**: Radix UI Primitives (for fully keyboard-accessible dialog, accordion, and tabs)
- **Animations**: Framer Motion (premium spring transitions & micro-interactions)
- **Form Handling**: React Hook Form + Zod Schema Validation
- **Fonts**: Cormorant Garamond (luxury serif display) & Inter (clean body text) loaded via `next/font/google`
- **Asset Handling**: Next.js `<Image>` component for static asset compression and lazy loading.

---

## Directory Structure
- `/app`: Root layout (fonts, metadata, JSON-LD) and landing page shell.
- `/components/sections`: Subcomponents for each scrolling anchor section.
- `/components/ui`: Radix-based accessible UI primitives.
- `/data`: Centralized database configurations (`siteConfig.ts`, `products.ts`, `encyclopedia.ts`).
- `/lib`: Form validators (`validators.ts`) and styling mergers (`utils.ts`).
- `/public`: Optimized graphic assets (generated product photography and vectors).

---

## Features Implemented
1. **Unified Site Data Config**: All business variables (Surat address, contact phone, daily regulars, established year, etc.) are centralized in `siteConfig.ts` for quick editing.
2. **Fragrence Choice Quiz**: An interactive, multi-step personality-to-scent matchmaking feature that dynamically recommends a custom fragrance profile and links directly to a pre-filled WhatsApp message.
3. **Pre-filled Contact Forms**: Contact buttons inside "Offers", "Categories", and "Gift Hampers" use custom browser events to scroll the user to the contact form and automatically pre-fill details (e.g. auto-selects "Custom Gift Hamper" with custom request copy).
4. **LocalBusiness SEO Schema**: Injects a structured `LocalBusiness` JSON-LD schema into the document head containing Surat's address locality, founding date, and founder information for local search crawlers.
5. **Mobile-First Responsiveness**: Designed to work cleanly starting from 320px up to 1920px. Features a touch-friendly navigation drawer.

---

## Setup & Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production
```bash
npm run build
```
This command compiles static files and checks for typescript and linting errors.

---

## Production Integrations

### 1. Form Backend Integration
Currently, the enquiry form in `Contact.tsx` executes client-side validation and demonstrates a loading/success state. To connect a live database or email delivery service, you can hook it up inside `components/sections/Contact.tsx` under the `onSubmit` handler:

- **Option A (Custom API Route)**: 
  Create an App Router file `app/api/enquiry/route.ts` and fetch it from the form:
  ```typescript
  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  };
  ```
- **Option B (Serverless Forms)**:
  Connect to Formspree by copying your endpoint token into `.env` and updating:
  ```typescript
  const onSubmit = async (data: ContactFormData) => {
    await fetch("https://formspree.io/f/your_endpoint_id", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Accept": "application/json" }
    });
  };
  ```

### 2. Analytics Integration (Google Analytics / Meta Pixel)
In `app/layout.tsx`, clearly commented code blocks are provided. To activate tracking, simply uncomment those blocks and swap out the placeholders (`G-XXXXXXXXXX` or `XXXXXXXXXXXXXXXX`) with your real tracking IDs.
