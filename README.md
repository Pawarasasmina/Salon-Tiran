# Salon Tiran Weerasinghe

A production-oriented MERN monorepo for a premium unisex salon: editorial public website, appointment booking flow, and operational admin dashboard.

> All seeded names, services, imagery, prices, reviews, and contact fields are explicitly demo content and must be approved or replaced before launch.

## Start locally

1. Copy `.env.example` to `.env` and configure MongoDB.
2. Run `npm install`.
3. Run both applications with `npm run dev`, or run them independently:

   - Frontend: `npm run dev:frontend`
   - Backend: `npm run dev:backend`
4. Open `http://localhost:5173`; the API runs at `http://localhost:4000`.

The frontend and backend are independently deployable. Dashboard database actions require the API and MongoDB to be available.

## Deploy frontend and backend separately

### Frontend host

- Project/root directory: `client`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_API_URL=https://api.your-domain.com`

`VITE_API_URL` is compiled into the frontend during its build, so set it before building. Do not include a trailing slash.

### Backend host

- Project/root directory: `server`
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm start`
- Required variables: `MONGODB_URI`, `SESSION_SECRET`, and `CLIENT_URLS`

Set `CLIENT_URLS` to the exact frontend origin. Multiple origins may be comma-separated:

```env
CLIENT_URLS=https://salon.example.com,https://www.salon.example.com
```

The backend exposes its routes under `/api`; for example, `https://api.your-domain.com/api/health`.

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
