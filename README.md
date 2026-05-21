# 🌍 Wanderlust - Full Stack Airbnb Clone

Wanderlust is a full-stack web application inspired by Airbnb, built using the MERN-style backend stack with server-side rendering. It allows users to explore travel property listings, create their own listings, upload images, view locations on an interactive map, and add reviews.

The project includes authentication, authorization, CRUD operations, image uploads, map integration, reviews, flash messages, validation, and deployment.

---

## 🚀 Live Demo

🔗 **Live Project:**  
https://wanderlust-project-1-65jg.onrender.com

---

## 📌 Project Overview

Wanderlust is a travel listing web application where users can browse different stays and property listings. Authenticated users can create new listings, upload images, edit or delete their own listings, and add reviews.

Each listing also includes location-based map integration, allowing users to view the exact place on an interactive map using map tokens.

This project helped me understand how real-world full-stack applications are built, including backend routing, database design, authentication, authorization, cloud image storage, geocoding/map integration, and deployment.

---

## ✨ Features

- 🔐 User authentication: signup, login, logout
- 👤 User authorization for listing owners and review authors
- 🏡 Create, read, update, and delete property listings
- 🖼️ Upload listing images using Cloudinary
- ⭐ Add and delete reviews
- 🗺️ Interactive map integration for listing locations
- 📍 Location-based display using map tokens
- 🧭 Geocoding support for showing places on map
- 💬 Flash messages for success and error alerts
- 🧾 Server-side validation using Joi
- ⚠️ Custom error handling middleware
- 🗃️ MongoDB Atlas database integration
- 🎨 Responsive UI using Bootstrap and custom CSS
- ☁️ Deployed on Render

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap
- JavaScript
- EJS
- EJS Mate

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication & Authorization

- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session
- Connect Flash

### Image Upload & Storage

- Multer
- Cloudinary
- Multer Storage Cloudinary

### Map & Location

- Mapbox
- Mapbox Geocoding API
- Mapbox Access Token

### Validation & Error Handling

- Joi
- Custom Express Error Handler
- Async Error Wrapper

### Deployment

- Render

---

## 📂 Project Structure

```bash
Wanderlust-project/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
└── README.md
```
## ⚙️ Installation and Setup

Follow these steps to run the project locally on your system.

---

### 1. Clone the Repository

```bash
git clone https://github.com/vanshikasharma9126/Wanderlust-project.git
```

---

### 2. Navigate to the Project Folder

```bash
cd Wanderlust-project
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Create a `.env` File

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

---

### 5. Run the Application

```bash
node app.js
```

Or, if you are using nodemon:

```bash
nodemon app.js
```

---

### 6. Open the Project in Browser

```bash
http://localhost:8080/listings
```

---

## 🔐 Environment Variables

The project uses environment variables to keep sensitive information secure and separate from the source code.

| Variable Name | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Secret key used for express-session |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox access token for map and geocoding features |

---

## 🧭 Map Integration

Wanderlust uses **Mapbox** to display listing locations on an interactive map.

When a listing is created with a location, the application uses geocoding functionality to convert the location into coordinates and display it visually on the listing details page.

### Map Features

- Displays listing location on an interactive map
- Uses Mapbox access token securely through environment variables
- Supports geocoding for location-based coordinates
- Helps users understand where the property is located
- Improves the overall travel listing experience

---

## 🧪 Main Functionalities

### 🏡 Listings

Users can:

- View all listings
- View individual listing details
- Create a new listing
- Edit their own listings
- Delete their own listings
- Upload listing images
- View listing location on map

---

### ⭐ Reviews

Users can:

- Add reviews to listings
- Delete their own reviews
- View reviews added by other users

---

### 🔐 Authentication

Users can:

- Sign up
- Log in
- Log out
- Access protected routes only after login

---

### 👤 Authorization

The application ensures:

- Only listing owners can edit or delete their listings
- Only review authors can delete their reviews
- Unauthorized users are redirected with flash messages

---

## 🧠 What I Learned

While building **Wanderlust**, I learned:

- How to build a full-stack web application using Node.js and Express.js
- How to create RESTful routes
- How to connect MongoDB Atlas with Mongoose
- How to design schemas and relationships between models
- How authentication and authorization work in real applications
- How to use Passport.js for user login and signup
- How to upload and store images using Cloudinary
- How to use Multer for handling file uploads
- How to validate data using Joi
- How to handle errors using custom middleware
- How to use Mapbox for map and location features
- How to manage environment variables securely
- How to deploy a Node.js application on Render

---

## 🔮 Future Improvements

- 🔍 Add search functionality
- 🧾 Add category-based filtering
- 📅 Add booking feature
- 💳 Add payment gateway integration
- ❤️ Add wishlist/favorites feature
- 👤 Add user profile page
- 📱 Improve mobile responsiveness
- ⭐ Add advanced rating filters
- 🗺️ Add nearby places feature
- 📊 Add admin dashboard
- 🌙 Add dark mode

---

## 🚀 Deployment

The project is deployed on **Render**.

Before deployment, environment variables were configured securely on Render, including:

- MongoDB Atlas URL
- Cloudinary credentials
- Session secret
- Mapbox token

🔗 **Live Project:**  
https://wanderlust-project-1-65jg.onrender.com

---

## 👩‍💻 Author

**Vanshika Sharma**

- GitHub: https://github.com/vanshikasharma9126
- Live Project: https://wanderlust-project-1-65jg.onrender.com

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and educational purposes.
