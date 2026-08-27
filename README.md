# The Gas Man Fuel — Website & Membership Platform Demo

## Live demo

**[Open the public GitHub Pages website](https://jamesshealy109-sudo.github.io/gas-man-fuel-demo/)** — no login required.

This sales demo shows how The Gas Man can replace a disconnected website/Jotform workflow with one customer and operations platform. The core change is simple: **Customer joins. Payment confirms. Membership activates. Done.**

## Features

- Responsive public website with Home, Services, Membership, About, Service Area, FAQ, Contact, and service-request pages.
- Four-step membership enrollment with immediate server-confirmed activation and a human-readable membership number.
- Explicit payment (`pending`, `processing`, `succeeded`, `failed`, `refunded`, `canceled`) and membership (`pending_payment`, `active`, `past_due`, `canceled`, `expired`) states.
- Payment-provider abstraction plus signature-verified, idempotent webhook architecture.
- Member portal and protected operations dashboard with searchable CRM-lite member records.
- Service requests, activity history, demo payments, lead sources, notes-ready customer model, and 25 fictional seed customers.
- Sales pages at `/demo` and `/demo/current-vs-new`.
- Zod validation, D1/SQLite + Drizzle migrations, LocalBusiness structured data, sitemap, OpenGraph card, and analytics hooks.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
copy .env.example .env.local
npm run db:generate
npm run db:migrate:local
npm run db:seed:local
npm run dev
```

Open `http://localhost:3000`. The Sites local sign-in helper uses `seedy@sites.test` for the protected admin route.

## Demo accounts

- Admin: `seedy@sites.test` through the local Sites passwordless sign-in screen.
- Customer record: `avery.carter@example.com` / member `GM-2026-001001`.
- The customer portal is intentionally available directly at `/portal` in this owner-only sales demo. Production must connect it to a customer identity provider before public launch.

## Payment demo

The join flow displays card `4242 4242 4242 4242` as a clearly labeled demonstration. No card data is collected or stored. The demo payment provider returns a server-side confirmation; the production webhook endpoint is `/api/payments/webhook` and requires `PAYMENT_WEBHOOK_SECRET`.

For production, replace `DemoPaymentProvider` with Stripe or the owner’s chosen processor, create recurring products/prices, configure hosted secrets, register the webhook endpoint, and test successful, failed, refunded, canceled, duplicate, delayed, and out-of-order events. Never trust a browser redirect as proof of payment.

## Database and seed data

Drizzle schema lives in `db/schema.ts`; generated migrations live in `drizzle/`; demo records live in `db/seed.sql`. All demo identities use `example.com` and reserved 555 telephone numbers.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Deployment

The public sales demo is deployed from `/docs` with GitHub Pages. It is a static, client-side presentation of the full customer and operations experience, so its forms and payment confirmation are clearly simulated and do not store data. The source application retains the Cloudflare D1, payment-webhook, and protected-route architecture for a production-capable server deployment. Configure all production payment, auth, email, analytics, and database values in the chosen deployment secret manager.

## Screenshots

Use the deployed Home, Join, confirmation, Admin, Portal, and Current vs. Proposed pages for presentation screenshots.

## Business information to confirm

- Publishable street/mailing address and map pin.
- Final service boundary and ZIP coverage.
- Owner/family names, founding year, approved story, real photographs, certifications, and licensed testimonials.
- Whether boat delivery is fully available across the published area.
- Which published failed-payment/grace-period terms are current.
- Production payment processor, taxes/fees, refund handling, and transactional email/SMS provider.

## Roadmap

Production customer authentication, email/SMS notifications, QuickBooks/accounting sync, dispatch and route scheduling, tank monitoring, automatic delivery, invoices, ACH, saved methods, fleet accounts, promotions, referral tracking, ad attribution, review requests, and customer segmentation.
