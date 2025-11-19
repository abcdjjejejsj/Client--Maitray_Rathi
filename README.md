# 📘 Case Law Search — Full Stack Dev Task

A simple full-stack application where users can search for case laws using a keyword.  
The frontend sends the keyword to a backend API, and the backend returns mock case law results in JSON format.

This project was created as part of a development evaluation test.

---

## 🚀 Tech Stack

### **Frontend**
- React  
- Fetch API  
- Pure CSS (no UI libraries)

### **Backend**
- Node.js  
- Express.js  
- CORS enabled  
- Hardcoded mock JSON data (no database)

---

## 📂 Project Structure

Client--Maitray_Rathi/
│
├── backend/ → Express API server
│ ├── index.js
│ ├── package.json
│
├── frontend/ → React App
│ ├── src/
│ ├── public/
│ ├── package.json
│
└── README.md → Project documentation

yaml
Copy code

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Client--Maitray_Rathi.git
cd Client--Maitray_Rathi
🖥️ Backend Setup (Node + Express)
bash
Copy code
cd backend
npm install
npm start
Backend runs at:

👉 http://localhost:5000

API Endpoint:

sql
Copy code
GET /api/search?q=<keyword>
Example:

bash
Copy code
http://localhost:5000/api/search?q=bail
💻 Frontend Setup (React)
Open a new terminal:

bash
Copy code
cd frontend
npm install
npm start
Frontend runs at:

👉 http://localhost:3000

🔍 Features Implemented
✔ Keyword-based case search

✔ Frontend ↔ Backend API communication

✔ Loading animation while fetching

✔ Search button disabled during fetch

✔ Error handling

✔ Clean card UI (title, citation, snippet)

✔ Responsive and simple layout

✔ No UI frameworks

✔ Clear maintainable code

🧪 Example API Response
json
Copy code
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

Frontend sends request: GET /api/search?q=bail

Backend filters mock data

Returns JSON response

Frontend displays results in card format

Shows loading spinner while fetching

👨‍💻 Developer
Vaibhav Bharat Salve
3rd Year Computer Engineering
MERN Stack Developer | Aspiring SDE Intern

GitHub: https://github.com/abcdjjejejsj
Portfolio: https://developervaibhav.vercel.app
