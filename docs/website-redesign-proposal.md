# Website Redesign & Membership Platform Proposal

## Executive summary

The redesigned experience turns The Gas Man’s website from a brochure plus disconnected forms into a customer and operations platform. The most important improvement is visible everywhere: **Customer joins. Payment confirms. Membership activates. Done.**

## Current observations and problems

The existing site communicates a useful local service, but key actions leave the site for Jotform. Customer details, payment state, and service operations are separated. The reported delayed membership recognition creates uncertainty for customers and staff. There is also no unified member portal or real-time operations view.

## Proposed customer journey

1. Customer learns about verified services and service areas.
2. Customer selects Cruise Control or Fast Lane from configurable plan records.
3. Customer enters contact, service address, vehicle, and fuel details.
4. Server creates a pending customer, membership, and payment record.
5. Payment provider authorizes and confirms payment.
6. A signature-verified, idempotent webhook updates the payment.
7. Membership becomes active, the confirmation page displays a non-sequential member number, and the admin dashboard updates.
8. The member can see billing, service details, recent payments, and request service in the portal.

## Proposed architecture

The demo uses a responsive Next-compatible TypeScript application, Zod validation, Cloudflare D1/SQLite with Drizzle migrations, explicit payment and membership state machines, a payment-provider interface, and an idempotent webhook endpoint. Internal ids are UUIDs. Human-facing membership numbers follow `GM-YYYY-NNNNNN`.

The database separates users, customers, addresses, plans, memberships, payments, payment events, service requests, notes, activity, and lead sources. This supports future accounting, CRM, routing, dispatch, messaging, invoices, ACH, stored methods, promotions, referrals, and advertising attribution without restructuring the core records.

## Website improvements

- Strong local-service visual system with clear phone, membership, and service CTAs.
- Dedicated Services, Membership, About, Service Area, FAQ, Contact, and booking experiences.
- Plain-language explanation of the membership activation improvement.
- Mobile-first forms, keyboard focus states, semantic markup, and high-contrast styling.
- Metadata, OpenGraph imagery, LocalBusiness structured data, sitemap, and robots policy.
- Central analytics events for membership, service requests, phone, and contact conversion.

## CRM and operations opportunities

The operations dashboard combines active, pending, past-due, and canceled members with payment state, signup time, service address, plan, notes, activity, and service requests. This provides a path to route planning, driver dispatch, automated delivery scheduling, SMS/email alerts, QuickBooks, fleet reporting, invoices, and review requests.

## Suggested rollout

1. Owner review: confirm address, legal policies, service boundaries, boat availability, brand assets, and payment processor.
2. Website launch: publish verified marketing pages and service request intake.
3. Membership pilot: configure production processor, test webhooks, transactional email, staff permissions, refunds, failures, and renewals.
4. Portal and operations rollout: migrate active members, train staff, and run a short parallel reconciliation period.
5. Growth integrations: add accounting, SMS/email, conversion pixels, CRM segmentation, and route/dispatch tooling.

## Success measures

Track membership completion rate, time from confirmed payment to active status, payment-failure recovery, “did my payment go through?” contacts, service-request conversion, phone clicks, acquisition source, and staff time spent reconciling new members.

