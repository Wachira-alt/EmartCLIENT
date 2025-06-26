
# ELIMU eMART - Personalized Stationery E-Commerce Platform

## Description

ELIMU eMART is a React-based web application built for a personalized stationery shopping experience. It features:

- Responsive design using Tailwind CSS
- Global state management with Context API
- RESTful API integration via Axios

Users can browse and customize products, manage their carts, and place orders. Admins can manage inventory and view customer orders.

### Tech Stack

- Framework: React
- Styling: Tailwind CSS
- API Integration: Axios (RESTful)

## Key Features

- User authentication (login/register) using JWT
- Product listing, cart management, and customization options
- Order placement and user profile viewing
- Responsive layout with a clean navigation and footer
- Admin panel for product and order management

## File Structure

```plaintext
frontend/
├── public/             # Static files (index.html, favicon)
├── src/
│   ├── components/
│   │   ├── admin/      # Admin-specific components (AdminProductForm, etc.)
│   │   ├── auth/       # LoginForm, RegisterForm
│   │   ├── cart/       # CartItem, QuantityForm
│   │   ├── checkout/   # CheckoutForm
│   │   ├── common/     # Navbar, Footer, Button
│   │   ├── product/    # ProductCard, ReviewForm, CustomizationForm
│   │   ├── user/       # Profile, ProfileForm, Searchbar
│   │   ├── constants/  # API endpoints (apiEndPoints.js)
│   │   ├── context/    # Context providers (AuthContext, CartContext)
│   ├── pages/
│   │   ├── admin/      # Admin pages (AdminOrdersPage, etc.)
│   │   ├── user/       # User pages (Home, CartPage, etc.)
│   │   ├── routes/     # Route configurations (AdminRoutes, ClientRoutes)
│   │   ├── utils/      # Utility functions (calculateCartTotal, formatPrice)
│   ├── App.css         # Global CSS
│   ├── App.jsx         # Main app component
│   ├── index.css       # Tailwind CSS setup
│   ├── main.jsx        # Entry point for React
├── package.json        # Dependencies and scripts
├── README.md           # This file
````

## Setup Instructions

### Prerequisites

* Node.js (version 14 or higher)
* npm
* Git

### Installation

1. Clone the repository

   ```bash
   git clone <your-frontend-repo-url>
   cd <project-folder>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure the API base URL

   Edit `src/components/constants/apiEndPoints.js` to match your backend endpoint.

4. Run the frontend

   ```bash
   npm run dev
   ```

## Usage

| Function        | Path                              |
| --------------- | --------------------------------- |
| Login/Register  | `/login`, `/register`             |
| Browse Products | `/products`                       |
| Cart            | `/cart`                           |
| Checkout        | `/checkout`                       |
| Admin Panel     | `/admin/*` (restricted to admins) |

## Backend Integration

* Frontend repository: [GitHub - Frontend]()
* Deployed frontend: [Vercel or Netlify link]()
* Backend repository: [GitHub - Backend]()
* Deployed backend: [Render / Railway link]()

## API Integration

### 1. Update API Endpoints

In `apiEndPoints.js`:

```js
export const API_ENDPOINTS = {
  LOGIN: "<url>/login",
  REGISTER: "<url>/register",
  PRODUCTS: "<url>/products",
  ORDERS: "<url>/orders",
  PROFILE: "<url>/profile",
  CART: "<url>/cart"
};
```

### 2. JWT Authentication

* JWT is stored in localStorage.
* AuthContext checks token existence and injects it into request headers using Axios interceptors.

### 3. Deployment

* Push frontend to GitHub and deploy to Vercel.
* Deploy backend (Render, Railway, etc.) and ensure CORS is configured.
* Confirm environment variables and base URLs match across both apps.

## Contributing

To contribute to this project:

1. Fork the repository

2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit:

   ```bash
   git commit -m "Add: brief description of feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request for review

