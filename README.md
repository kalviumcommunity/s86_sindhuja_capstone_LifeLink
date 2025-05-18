#  LifeLink – Connecting Lives Through Blood and Care

##  Idea Brief

**LifeLink** is a comprehensive web application designed to manage **blood donations** and provide **basic e-healthcare services**, built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

###  User Roles:
- **Patients:** Can donate/request blood, view real-time blood availability, and track their history. Patients can also consult doctors via chat (free) and video/audio calls (premium).
- **Doctors:** Provide consultations, chat with patients, and upload digital prescriptions.
- **Admins:** Verify doctors, manage blood request approvals, and oversee system analytics.

###  Core Features:
- JWT-based secure login & role-based access
- Real-time chat and updates via **Socket.io**
- Video/audio consultations using **Twilio or WebRTC**
- **Stripe/Razorpay** integration for paid services
- Cloud storage of files using **Multer + Cloudinary**

---

##  Tech Stack

| Tech        | Description                                 |
|-------------|---------------------------------------------|
| MongoDB     | NoSQL Database                              |
| Express.js  | Web application framework (backend)         |
| React.js    | Frontend JavaScript library                 |
| Node.js     | Runtime environment for backend             |
| Socket.io   | Real-time WebSocket communication           |
| JWT         | Authentication and Authorization            |
| Cloudinary  | Image/File hosting                          |
| Multer      | File uploads from frontend to backend       |
| Twilio/WebRTC | Audio/Video Calling API                   |
| Razorpay/Stripe | Payment gateway integration             |
| Tailwind CSS or Material UI | UI design system (frontend) |
| Vercel/Netlify | Frontend deployment platform             |
| Render/Heroku | Backend deployment platform               |

---

##  6-Week Capstone Project Plan (Day-Wise)

### ✅ Week 1: Planning, Design & Setup

| Day | Task |
|-----|------|
| Day 1 | Define full feature list and user roles |
| Day 2 | Create low-fidelity wireframes (Figma/Sketch) |
| Day 3 | Design high-fidelity UI screens |
| Day 4 | Set up GitHub repo with README, issues, and project board |
| Day 5 | Initialize backend (Node.js + Express + MongoDB setup) |
| Day 6 | Initialize frontend (React + Tailwind or Material UI) |
| Day 7 | Plan & create database schema for users, blood data, bookings |

### ✅ Week 2: Authentication & Basic Blood Module

| Day | Task |
|-----|------|
| Day 1 | Build user registration/login with JWT |
| Day 2 | Implement role-based access (User, Doctor, Admin) |
| Day 3 | Create blood donation form (backend + frontend) |
| Day 4 | Create blood request form (backend + frontend) |
| Day 5 | Build blood data listing with GET API |
| Day 6 | Create basic user dashboard (view history) |
| Day 7 | Test and debug authentication + blood flows |

### ✅ Week 3: Admin Panel & Real-Time Features

| Day | Task |
|-----|------|
| Day 1 | Build admin dashboard layout |
| Day 2 | Implement blood request approval/rejection |
| Day 3 | Add real-time updates with Socket.io |
| Day 4 | Implement delete/update features for blood entries |
| Day 5 | Show available blood groups by location |
| Day 6 | Create donor/request history components |
| Day 7 | Test full admin + real-time flows end-to-end |

### ✅ Week 4: E-Healthcare Functionality

| Day | Task |
|-----|------|
| Day 1 | Setup chat UI and backend with Socket.io |
| Day 2 | Implement doctor-patient real-time chat |
| Day 3 | Create appointment booking system |
| Day 4 | Integrate Twilio or WebRTC for video/audio calls |
| Day 5 | Add Razorpay/Stripe payment for paid consultations |
| Day 6 | Doctors upload digital prescriptions |
| Day 7 | Users download/view prescriptions |

### ✅ Week 5: Deployment, Testing & Notifications

| Day | Task |
|-----|------|
| Day 1 | Deploy backend (Render/Heroku) |
| Day 2 | Deploy frontend (Vercel/Netlify) |
| Day 3 | Add email/SMS notifications (Nodemailer, Twilio) |
| Day 4 | Add unit tests with Jest (5+ test cases) |
| Day 5 | Integrate Cloudinary + Multer |
| Day 6 | Final UI polish + bug fixes |
| Day 7 | Test entire app with multiple users |

### ✅ Week 6: Finalization, Artifacts, Submission

| Day | Task |
|-----|------|
| Day 1 | Final testing of all flows (auth, blood, consult, payment) |
| Day 2 | Record short videos explaining APIs & features |
| Day 3 | Submit meaningful PRs + GitHub repo cleanup |
| Day 4 | Get user feedback (screenshots, testimonials) |
| Day 5 | Finalize video links, PR links, proof of work |
| Day 6 | Submit open concept requests (if applicable) |
| Day 7 | Final review with mentor + LMS submission |


## Backend deployement link: https://s86-sindhuja-capstone-lifelink-3.onrender.com

