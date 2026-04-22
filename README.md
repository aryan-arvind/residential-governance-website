# Rishikesh CHS — Residential Governance Portal 🏢

A premium, modern, and highly interactive residential society management portal built for **Rishikesh Co-operative Housing Society**. This platform streamlines society operations, providing residents with instant access to bills, notices, and complaint tracking.

![Project Screenshot](img/screenshot.png)

## ✨ Key Features

- **Resident Dashboard**: Personal access to maintenance history, notices, and documents.
- **Maintenance Payments**: Seamless interface for tracking and paying society dues.
- **Dynamic Notice Board**: Real-time updates on society circulars, AGMs, and emergency announcements.
- **Complaint Management**: Full ticketing system for residents to report and track maintenance/security issues.
- **Admin Panel**: Secure dashboard for the Managing Committee to post notices, manage complaints, and view society statistics.
- **Premium UI/UX**: Sophisticated dark-mode aesthetic with smooth GSAP animations and responsive design.

## 🛠️ Tech Stack

- **Frontend**: 
  - Semantic HTML5 & CSS3 (Custom Design System)
  - JavaScript (ES6+)
  - [GSAP](https://gsap.com/) for cinematic micro-interactions and scroll animations.
- **Backend**: 
  - [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
  - [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) for high-performance, lightweight data persistence.
- **Security & Authentication**:
  - `bcryptjs` for password hashing.
  - `jsonwebtoken` (JWT) for secure session management.
  - `dotenv` for protected environment configurations.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aryan-arvind/residential-governance-website.git
   cd residential-governance-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   JWT_SECRET=your_secret_key
   ADMIN_PIN=1234
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The portal will be live at `http://localhost:3000`.

## 🔒 Privacy Note

To protect resident privacy, all personal details (names, phone numbers) and community event photos have been masked in the demonstration screenshots.

---
*Developed for the residents of Rishikesh CHS.*