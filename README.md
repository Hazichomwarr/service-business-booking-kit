# BookingOS — Modern Appointment Booking System

A modern, full-stack appointment booking system built with **Next.js, Prisma, and Tailwind CSS**.

Designed as a reusable foundation for **salons, barbershops, clinics, and service businesses**, this project demonstrates a production-grade booking flow with real availability logic and admin management.

This repo serves both as:

- a professional demo system
- and a reusable starter template for real client projects

---

## Live Demo (optional)

Add later:
- Public booking page: https://your-demo.vercel.app/book
- Admin dashboard:  https://your-demo.vercel.app/book
---

## Features

### Customer Side

- Browse services
- Select date and available time slot
- Prevent double-booking automatically
- Book appointment in seconds
- Mobile-optimized interface

### Admin Side

- View all bookings
- View customer details
- Real-time booking updates
- Structured booking database

### System Features

- Availability engine
- Overlap prevention logic
- Reusable architecture
- Production-ready patterns

---

## Tech Stack

Frontend:

- Next.js (App Router)
- React
- Tailwind CSS

Backend:

- Next.js Route Handlers
- Prisma ORM

Database:

- SQLite (local)
- PostgreSQL ready (production)

---

## Architecture Overview

- app/
- book/ → booking UI
- admin/ → admin dashboard
- api/
- services/ → fetch services
- availability/ → compute availability
- bookings/ → create booking

- lib/
- db.ts → Prisma client
- booking/
- availability.ts → slot engine

- prisma/
- schema.prisma → data models


---

## Database Models

Core entities:

- Service
- Customer
- Appointment

Designed to scale later with:

- Staff accounts
- SMS reminders
- Payments
- Multi-location support

---

## Why This Project Exists

This project was built as a reusable booking system for service businesses.
Many small businesses still rely on manual scheduling, leading to:

- missed appointments
- double bookings
- inefficient workflows
- This system solves those problems with a modern booking interface.

## Future Extensions

Planned upgrades:
- SMS reminders (Twilio)
- Stripe payments
- Staff management
- Customer accounts
- Analytics dashboard
- Multi-business support

# Use Cases

- This template can be adapted for:
- Barbershops
- Hair salons
- Nail salons
- Clinics
- Consultants
- Fitness trainers
- Tutors

---

## Author

Built by Hamza Mare.
Full-stack developer focused on building systems that automate business operations.

## License

MIT License

You are free to use and modify this project.

---

## Installation

Clone repo:

```bash
git clone https://github.com/Hazichomwarr/service-business-booking-kit
cd booking-os```

Install dependencies:
```npm install```

Setup database:
```npx prisma migrate dev --name init
node prisma/seed.ts```

Run dev server:
```npm run dev```

Open:
```http://localhost:3000/book
http://localhost:3000/admin```

---



