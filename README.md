# 💰 Expense Tracker

A full-stack Expense Tracker web application built using the **MERN stack**:  
**MongoDB, Express.js, React.js, and Node.js**

Users can securely log in, add income and expense entries, view totals, filter transactions by category, and visualise data through interactive charts.

---

## Features

- ✅ User Authentication (Register / Login)
- 📊 Dashboard with summary of total income & expenses
- ➕ Add, edit, and delete income or expense entries
- 📈 Data visualisation with pie and bar charts
- 📦 RESTful API built with Express and MongoDB
- 🎨 Responsive frontend using React and Tailwind CSS

---

## Set Up

#### 1. Clone the repository<br>
```
git clone https://github.com/dukgeunchoi/expense-tracker.git
```

#### 2. Install dependencies
```
cd backend
npm install
```

```
cd ../frontend
npm install
```

#### 3. Set up environment variables<br><br>
In the backend folder, create .env
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
In the frontend folder, create .env
```
PORT=3000
```

#### 4.Start backend server and frontend client
Run
```npm run dev``` 
in both folders.
