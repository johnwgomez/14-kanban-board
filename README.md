# 🗂️ Kanban Board

A full-stack Kanban board app built with Node.js, Express, PostgreSQL, Sequelize, and TypeScript. Deployed via Render with a managed PostgreSQL instance.

---

## 🚀 Features

- Add, update, and delete Kanban cards
- PostgreSQL database integration via Sequelize
- RESTful API
- Type-safe backend using TypeScript
- Deployed on Render with external DB

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express, TypeScript
- **ORM:** Sequelize
- **Database:** PostgreSQL (Render-hosted)
- **Deployment:** Render

---

## 📁 Project Structure
server/
├── config/            # Database connection (Sequelize)
├── controllers/       # Business logic
├── models/            # Sequelize models
├── routes/            # API routes
├── middleware/        # Middleware functions
├── dist/              # Compiled output
├── server.ts          # Main entry point
└── .env               # Environment variables (ignored in Git)

---

## 🛠️  Local Development

npm run dev
npm run build
npm run start


## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/johnwgomez/14-kanban-board.git
cd 14-kanban-board

npm install
