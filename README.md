# 🛒 ShopSageRedux – Add-to-Cart E-commerce App

A modern, frontend‑only e‑commerce demo built with **React** and **Redux Toolkit**, focused on demonstrating robust global cart state management. Features dynamic cart updates, total calculations, and scalable architecture—ideal for showcasing frontend engineering skills.

---


## 🚀 Features

| Feature                          | Description                                     |
|----------------------------------|-------------------------------------------------|
| Add to Cart                      | Users can add products to the cart             |
| Remove from Cart                 | Easily remove individual items                 |
| Quantity Update                  | Increment or set exact quantity per product    |
| Cart Totals                      | Live total price and quantity calculation      |
| Redux Toolkit Integration        | Scalable global state management               |
| React Router                     | Seamless navigation between pages              |
| Modular Components               | Reusable UI components for scalability         |

---

## 🛠️ Technology Stack / Libraries Used

| Layer            | Tools / Libraries                        |
|------------------|-------------------------------------------|
| **Frontend**      | React, React Router DOM                  |
| **State Management** | Redux Toolkit, React-Redux            |
| **Mock Data**     | Static data from local JavaScript file   |
| **Styling**       | Plain CSS                                |
| **Build Tool**    | Create React App                         |

---

## 📂 Project Structure
```
ShopSageRedux-App/
├── public/
│ ├── index.html
│ ├── favicon.ico, logos, manifest.json, robots.txt
└── src/
  ├── components/
  │ ├── Card/
  │ ├── HorizontalCard/
  │ └── NavBar/
  ├── data/
  │ └── product.js          # Mock product data
  ├── pages/
  │ ├── Cart/
  │ └── Home/
  ├── store/
  │ ├── cartSlice.js        # Redux cart slice logic
  │ └── index.js            # Redux store configuration
  ├── App.js                # Root component with routes
  ├── index.js, index.css
```

---

## 🔧 Setup and Installation

1. Clone the repo  
    ```bash
    git clone https://github.com/Akshat-Gupta-2005/ShopSageRedux-App.git
    cd ShopSageRedux-App
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Start the development server
    ```bash
    npm start
    ```
   
## 🧠 Redux Design Pattern

The cart logic is implemented using **Redux Toolkit**, where state updates are handled through pure reducers in `cartSlice.js`. All totals and quantities are auto-recalculated after each action.

---

### 🧾 State Structure

| Property         | Type   | Description                                      |
|------------------|--------|--------------------------------------------------|
| `items`          | Array  | List of products added to cart                   |
| `totalQuantity`  | Number | Total number of product units in the cart        |
| `totalAmount`    | Number | Total cart value (sum of all item totals)        |

Each cart item has the following structure:

| Item Property   | Type     | Description                         |
|-----------------|----------|-------------------------------------|
| `id`            | String   | Unique identifier for the product   |
| `title`         | String   | Product name                        |
| `price`         | Number   | Price of one unit                   |
| `quantity`      | Number   | Number of units in the cart         |
| `totalPrice`    | Number   | `price × quantity`                  |

---

### 🔁 Reducers / Actions

| Action                            | Description                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| `addToCart(product)`              | Adds a product or increments quantity if it already exists                   |
| `removeFromCart(id)`              | Completely removes a product from the cart                                   |
| `updateQuantity({ id, quantity })`| Sets the quantity for a specific product                                     |
| `clearCart()`                     | Empties the entire cart and resets all state fields                          |

---

### 🔄 Auto Calculations

| Field           | Description                                              |
|------------------|----------------------------------------------------------|
| `totalPrice`     | Calculated as `price × quantity` for each item           |
| `totalAmount`    | Sum of all item `totalPrice` values                      |
| `totalQuantity`  | Total number of units from all items in the cart         |

> All values are updated live inside reducers using `.reduce()` and `.toFixed(2)` for precision.

## 📈 Why This Project Is Good for a Portfolio

- Demonstrates use of **Redux Toolkit** to manage complex application state
- Showcases **component-based architecture** and separation of concerns
- Includes live **cart computation logic**, useful for real-world shopping cart implementations
- Clean, scalable file structure with reusable logic and styling
- Easily extendable into a full-stack MERN app
- Ideal for explaining React + Redux patterns in interviews


## 📝 Concepts Learned:
- React Routing
- Redux Toolkit (slice, store, dispatch, selectors)
- Component Modularity
- UI-State Synchronization
- Data Mocking 

