# 📚 Book Management REST API  

A simple **Node.js + Express** REST API to manage a list of books.  
This project is part of the **Elevate Labs Internship – Task 3** and demonstrates the basics of **CRUD operations, Express routing, HTTP methods, and JSON handling** using in-memory storage (no database).  

---

## 🚀 Features  
- Retrieve all books (`GET /books`)  
- Add a new book (`POST /books`)  
- Update an existing book (`PUT /books/:id`)  
- Delete a book (`DELETE /books/:id`)  
- Uses `express.json()` middleware for JSON request parsing  
- Proper status codes for success and error handling  

---

## 🛠️ Tech Stack  
- **Node.js**  
- **Express.js**  

---

## ▶️ Getting Started  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/works-of-sarathy/elevate-labs-task-3-book-API.git
   cd elevate-labs-task-3-book-API
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the server**  
   ```bash
   node server.js
   ```

4. **Access the API**  
   ```
   http://localhost:3000
   ```

---

## 📌 API Endpoints  

### Get all books  
```http
GET /books
```

### Add a new book  
```http
POST /books
Content-Type: application/json

{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
```

### Update a book by ID  
```http
PUT /books/1
Content-Type: application/json

{
  "title": "New Title",
  "author": "Updated Author"
}
```

### Delete a book by ID  
```http
DELETE /books/1
```

---

## 📖 Learning Outcomes  
- REST API basics  
- Express routing & middleware  
- Handling HTTP methods (GET, POST, PUT, DELETE)  
- JSON request/response handling  
- Using proper HTTP status codes  

---

## 👨‍💻 Author  
**Satagopan Gopalakrishnan (Sarathy)**  
- [LinkedIn](https://www.linkedin.com/in/sarathy07)  
- [GitHub](https://github.com/works-of-sarathy)  
- [Instagram](https://www.instagram.com/ft._sarathy)