# 🐾 PawMart — Pet Adoption & Supply Portal  

**PawMart** is a community-driven platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products such as food, toys, and accessories. Users can explore, adopt, and order directly through a smooth and secure online experience.

🌐 **Live Website:** ph-mil10-mod59.netlify.app 
🌐 **Server Live API:** https://ph-mil10-mod59-backend.vercel.app/

---

## 🚀 Key Features

- 🐶 **Pet Adoption & Product Listings:** Users can browse pets for adoption and pet care products in multiple categories.
- 🔐 **Firebase Authentication:** Secure login and registration using Email/Password and Google Authentication.
- 🧺 **Add, Update & Delete Listings:** Logged-in users can manage their own listings with full CRUD functionality.
- 🧾 **My Orders Dashboard:** Users can view their personal order history in a structured table.
- 📄 **PDF Report Download:** Logged-in users can download their order history as a PDF using jsPDF.
- 🌗 **Dark/Light Mode Toggle:** Smooth UI experience with theme switching.
- 🔍 **Search & Filter:** Search by product name and filter by categories.
- 🎯 **Private Route Protection:** Secure routing for sensitive pages.
- 📱 **Fully Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- 🔔 **Toast Notifications:** User-friendly alerts using SweetAlert or React Hot Toast.
- 🎞️ **Animations:** Framer Motion & React Simple Typewriter used for interactive UI effects.

---

## 🧭 Main Pages & Routes

- `/` → Home Page  
- `/pets-supplies` → All Listings  
- `/add-listing` → Add New Listing (Private)  
- `/my-listings` → User’s Own Listings (Private)  
- `/my-orders` → User’s Orders (Private)  
- `/login` → Login Page  
- `/register` → Register Page  
- `*` → 404 Page (No Navbar & Footer)  

---

## 🗂️ Database Collections (MongoDB)

### 📁 Listings Collection
```json
{
  "name": "Golden Retriever Puppy",
  "category": "Pets",
  "price": 0,
  "location": "Dhaka",
  "description": "Friendly 2-month-old puppy available for adoption.",
  "image": "https://example.com/golden.jpg",
  "email": "owner@gmail.com",
  "date": "2025-10-27"
}
```

### 📁 Orders Collection
```json
{
  "productId": "65488adsfadf5454f",
  "productName": "Golden Retriever Puppy",
  "buyerName": "Mr. X",
  "email": "buyer@gmail.com",
  "quantity": 1,
  "price": 0,
  "address": "Chattogram",
  "phone": "017xxxxxxxx",
  "date": "2025-10-27",
  "additionalNotes": "Some Text"
}
```

---

## 🛠️ Technologies Used

### Frontend:
- React
- React Router DOM
- Tailwind CSS
- Axios
- Firebase Authentication
- Framer Motion
- jsPDF & jsPDF-AutoTable
- SweetAlert / React Hot Toast

### Backend:
- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv
- Vercel Deployment

---

## 📌 Project Rules Followed

- ✅ Minimum **15+ GitHub commits** in Client
- ✅ Minimum **8+ GitHub commits** in Server
- ✅ No Lorem Ipsum Used
- ✅ No Default Browser Alerts Used
- ✅ Firebase Authorized Domains Configured
- ✅ Page Reload Works on All Routes
- ✅ Navbar & Footer Hidden on 404 Page Only
- ✅ Dynamic Page Titles Added
- ✅ CRUD Toast Notifications Added
- ✅ Fully Responsive Layout

---

## 👨‍💻 Developed By  
**Tayeeb Muhtasim Abbasi**  
Web Developer | MERN Stack Learner  

---

✅ **This project is created as part of the Programming Hero Assignment — B12-A10_category-0016.**

---
