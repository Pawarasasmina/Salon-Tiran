# Salon Tiran Weerasinghe

A production-oriented MERN monorepo for a premium unisex salon: editorial public website, appointment booking flow, and operational admin dashboard.

> All seeded names, services, imagery, prices, reviews, and contact fields are explicitly demo content and must be approved or replaced before launch.

## Start locally

1. Copy `.env.example` to `.env` and configure MongoDB.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:5173`; the API runs at `http://localhost:4000`.

The frontend also works in demo mode if the API or MongoDB is not available. Booking submissions remain local previews in that mode and are never falsely reported as confirmed.

## Architecture

- `client`: React + Vite + TypeScript, React Router, TanStack Query, React Hook Form, Zod, Motion, Recharts.
- `server`: Express + TypeScript, Mongoose, Zod, security middleware, centralized errors, scheduling domain services.
- UTC timestamps are stored server-side; business calculations use `Asia/Colombo`.
- Booking overlap rule: `existing.startAt < requested.endAt && existing.endAt > requested.startAt`.

## Production setup

- MongoDB Atlas: set `MONGODB_URI`, create least-privilege database credentials, and allow only production hosts.
- Cloudinary: set the three Cloudinary variables. Upload signatures and media validation belong on the API only.
- Google Calendar: create an OAuth web client, configure the callback above, and request only calendar-event access. MongoDB remains the source of truth.
- Admin bootstrap: no default password is seeded. Use a one-time, deployment-specific bootstrap flow before enabling admin access.
- Run `npm run typecheck`, `npm test`, and `npm run build` before deployment.

## Current delivery and limitations

Phase 1 and a polished vertical slice are implemented: design system, responsive marketing experience, portfolio, services, multi-step booking UI, admin overview, API foundation, schema design, booking conflict utilities, and unit tests. Credential-dependent Cloudinary, Google OAuth, email delivery, production auth/bootstrap, payment CRUD, complete admin CRUD, and durable booking transactions still require environment configuration and subsequent implementation before commercial launch.

See `docs/IMPLEMENTATION.md` for the phased checklist and acceptance status.
