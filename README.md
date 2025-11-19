# Client--Maitray_Rathi
📘 Case Law Search — Full Stack Dev Task

A simple full-stack application where users can search for case laws using a keyword.
The frontend sends the keyword to a backend API, and the backend returns mock case law results in JSON format.

This project was created as part of a development evaluation task.

🚀 Tech Stack
Frontend

React

Fetch API

Pure CSS (no UI libraries)

Backend

Node.js

Express.js

CORS enabled

Hardcoded mock data (no database)

📂 Project Structure
Client--Maitray_Rathi/
│
├── backend/          → Express API server
│   ├── index.js
│   ├── package.json
│
├── frontend/         → React App
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md         → Project documentation

⚙️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/your-username/Client--Maitray_Rathi.git
cd Client--Maitray_Rathi

🖥️ Backend Setup (Node + Express)
cd backend
npm install
npm start


Backend will run on:

👉 http://localhost:5000

API Endpoint:

GET /api/search?q=<keyword>


Example:

http://localhost:5000/api/search?q=bail

💻 Frontend Setup (React)

Open a new terminal:

cd frontend
npm install
npm start


Frontend will run on:

👉 http://localhost:3000

🔍 Features Implemented

✔ Search case laws by keyword
✔ Frontend ↔ Backend communication via API
✔ Loading animation while fetching
✔ Search button disabled during fetch
✔ Clean and simple UI
✔ Error handling
✔ Case card layout (title, citation, snippet)
✔ No external UI frameworks
✔ Clear folder structure
✔ Easy to understand, readable code

🧪 Example API Response
{
  "results": [
    {
      "id": 1,
      "title": "State vs X - Bail Matter",
      "citation": "CRL.A. 1542/2020",
      "snippet": "This case discusses bail principles..."
    }
  ]
}

🛠 How It Works

User enters a keyword

Frontend sends API request:
GET /api/search?q=bail

Backend filters mock data

Returns JSON response

Frontend displays case cards

Loading spinner appears during fetch


👨‍💻 Developer

Vaibhav Bharat Salve
3rd Year Computer Engineering
MERN Stack Developer | Aspiring SDE Intern

GitHub: https://github.com/abcdjjejejsj

Portfolio: https://developervaibhav.vercel.app

