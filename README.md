# 🐾 Find-a-Pet

Find-a-Pet is a full-stack web application that helps users discover adoptable pets in their area.  
Users can search by **city or ZIP code** (with autocomplete), browse detailed profiles, and view available pets by type.

## 🚀 About the Project

Find-a-Pet was built to make pet adoption simpler and more user-friendly by connecting people with nearby shelters and rescues.  
To demonstrate full-stack development skills, the app uses **sample pet data** generated for development and testing.  
The backend includes a custom database and API layer designed to handle real-world functionality, such as user authentication and data persistence.

### Features

- Real-time search using city or ZIP input with autocomplete suggestions
- Individual pet detail pages with photos and descriptions
- Responsive layout optimized for both desktop and mobile
- User authentication and persistent favorites list (via backend API)

This repository contains the **frontend**, built with modern React and TypeScript.  
The backend (in a separate repo) provides RESTful APIs, data seeding, and authentication with Node.js, Express, and MongoDB.

## 🧠 Tech Stack

**Frontend:**

- React
- TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS

**Backend:**

- Node.js
- Express
- MongoDB / Mongoose

## 🧩 Key Features

| Feature           | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| 🔍 Search         | Users can search by city or ZIP with autocomplete suggestions |
| ❤️ Favorites      | Save pets to a personal favorites list                        |
| 🐶 Filtering      | Browse pets by type (dogs, cats, etc.)                        |
| 🖥️ Responsive UI  | Works seamlessly across desktop and mobile devices            |
| 🔐 Authentication | Secure login and account management via API                   |

## 📦 Installation

To run the frontend locally:

```bash
# Clone the repository
git clone https://github.com/fdlai/Find-a-Pet-Frontend.git

# Navigate to the project directory
cd Find-a-Pet-Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
