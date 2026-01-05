# 🐾 Find-a-Pet

Find-a-Pet is a full-stack web application that helps users discover adoptable pets in their area.  
Users can search by **city or ZIP code** (with autocomplete), browse detailed profiles, and view available pets by type.

🔗 **Live Demo:** [https://petfinder.jumpingcrab.com/](https://petfinder.jumpingcrab.com/)

---

## 🚀 About the Project

### Overview

Find-a-Pet was built to make pet adoption simpler and more user-friendly by connecting people with nearby shelters and rescues.

### Purpose

To demonstrate full-stack development skills, the app uses **sample pet data** generated for development and testing.  
This allows for a fully custom backend with data seeding, authentication, and RESTful API design — rather than relying on external APIs.

### Features

- Real-time search using city or ZIP input with autocomplete suggestions
- Individual pet detail pages with photos and descriptions
- Responsive layout optimized for both desktop and mobile
- User authentication and persistent favorites list (via backend API)
- Pet searching using different filters: species, breed, sex, age, and size

This repository contains the **frontend**, built with modern React and TypeScript.  
The **backend** (in a separate repo) provides RESTful APIs, data seeding, and authentication with Node.js, Express, and MongoDB.

---

## 🧠 Tech Stack

**Frontend:**

- React
- TypeScript
- Vite
- React Router
- BEM class naming

**Backend (separate repo):**

- Node.js
- Express
- MongoDB / Mongoose

---

## 🧩 Key Features

| Feature           | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| 🔍 Search         | Users can search by city or ZIP with autocomplete suggestions |
| ❤️ Favorites      | Save pets to a personal favorites list                        |
| 🐶 Filtering      | Browse pets by type (dogs, cats, etc.)                        |
| 🖥️ Responsive UI  | Works seamlessly across desktop and mobile devices            |
| 🔐 Authentication | Secure login and account management via API                   |

---

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
