🔗 URL Shortener Backend

A simple and efficient URL Shortener API built using Node.js and Express. This project allows users to convert long URLs into short, shareable links and redirect them easily.

🚀 Features
Shorten long URLs
Redirect short URLs to original links
RESTful API structure
MongoDB database integration
Environment-based configuration

🛠️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose
dotenv


📁 Project Structure
├── controllers/
├── models/
├── routes/
├── config/
├── .env
├── app.js / server.js
├── package.json


⚙️ Installation & Setup
Clone the repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
Install dependencies
npm install
Create a .env file in the root directory and add the following:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Run the server
npm start

Or (for development with nodemon):

npm run dev
🌐 API Endpoints
➤ Shorten URL
POST /api/shorten

Body:

{
  "url": "https://example.com"
}

➤ Redirect to Original URL
GET /:shortId

🔐 Environment Variables
Variable	Description
PORT	Server running port
MONGODB_URI	MongoDB connection string


📌 Notes
Make sure MongoDB is running locally or use MongoDB Atlas.
.env file should not be pushed to GitHub (add it to .gitignore).
📷 Example

Input URL:
https://www.google.com
Short URL:
http://localhost:5000/abc123

🤝 Contributing
Feel free to fork this repository and contribute by submitting a pull request.

📄 License
This project is open-source and available under the MIT License.
