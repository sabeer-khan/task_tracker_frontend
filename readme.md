# 🧠 Task Tracker Frontend

This is the React-based frontend for the Task Tracker full-stack app. It allows users to register, log in, and manage their personal tasks through a secure and responsive UI, connected to a FastAPI backend via JWT-based authentication.

---

## 🚀 Features

- Register and login with secure JWT token storage
- View, add, and delete personal tasks
- Auto-redirect for unauthorized users
- Axios-based communication with backend
- React Router for navigation

---

## 🛠️ Tech Stack

- React (Vite)
- Axios
- React Router DOM
- LocalStorage (for JWT)
- CSS (can be replaced with Tailwind or Bootstrap)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-tracker-frontend.git
cd task-tracker-frontend

2. Install dependencies

pip install -r requirements.txt

3. Configure .env

DATABASE_URL=postgresql://postgres:password@localhost:5432/task_db

4. Initialize the database

python -c "from app.db.init_db import init_db; init_db()"

5. Run the app

uvicorn app.main:app --reload

Access the docs: http://localhost:8000/docs

## 🔗 Related Project

- [Frontend (React)](https://github.com/yourusername/task-tracker-frontend)

