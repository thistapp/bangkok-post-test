# Bangkok Post Test

A Next.js web application built with TypeScript and Tailwind CSS.

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

```bash
git clone https://github.com/your-username/bangkok-post-test.git
cd bangkok-post-test
npm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Development Approach

### Tech Stack

- **Next.js 15** — App Router, file-based routing
- **TypeScript** — Type safety across all components
- **Tailwind CSS v4** — Utility-first styling

## Optimizations

| Area              | Detail                                                                                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared components | Refactored base components (`InputBaseForm`, `ButtonBaseUI`, `AccordionBase`) to be reusable and consistent across the entire project         |
| Footer menu       | Fixed inconsistent menu rendering in footer to match the main navigation structure                                                            |
| Step indicator    | Refactored `StepIndicator` to accept dynamic steps array instead of hardcoded values — supports any number of steps                           |
| Credit card input | Improved `InputBaseForm` to fully support credit card formatting including card number grouping, expiry date mask, and CVV length enforcement |

---

## Future Improvements

- [ ] Integrate a real payment gateway (e.g. Stripe, Omise)
- [ ] Add form state management with React Hook Form + Zod validation
- [ ] Persist subscription plan selection across steps using Zustand or Context API
- [ ] Add unit tests for input formatting functions with Jest
