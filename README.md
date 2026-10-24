# NANA OPTOM — Wholesale Cosmetics Website

## Project Overview

NANA OPTOM is a responsive and interactive wholesale cosmetics website developed for the Introduction to Web Technologies course.

The project was initially created using HTML5, CSS3, and Bootstrap 5.3.3. During Assignments 4–5, JavaScript was added to implement interactive features, dynamic content, form validation, and shopping cart functionality.

The website allows visitors to browse cosmetics, search and filter products, manage a shopping cart, prepare demonstration orders, submit feedback, and interact with a login form.

**Project Authors:**
- Aida Khalila
- Assiya Yesmagambet

**GitHub Repository:**  
https://github.com/yesmagambetasiya-hub/nana-optom-midterm

---

## Technologies Used

- **HTML5** — Website structure and semantic elements
- **CSS3** — Custom styling, colors, and responsive design
- **Bootstrap 5.3.3** — Responsive grid, navigation, forms, buttons, and utilities
- **JavaScript ES6** — Interactive functionality and calculations
- **DOM Manipulation** — Dynamic creation, modification, and removal of elements
- **Event Listeners** — Handling clicks, input changes, and form submissions
- **Session Storage** — Storing shopping cart information during the browser session
- **Visual Studio Code** — Code editor
- **Git and GitHub** — Version control and project collaboration

The website is a front-end educational project and does not use a backend server or database.

---

## Website Pages

| File | Description |
|---|---|
| `index.html` | Home page, navigation, and contact information |
| `products.html` | Product catalog, search, filtering, sorting, and shopping cart |
| `order.html` | Order form, cart summary, calculations, validation, and confirmation |
| `about.html` | Store information, history, products, and ordering instructions |
| `feedback.html` | Customer reviews, feedback form, and validation |
| `login.html` | Login form, password validation, visibility toggle, and notifications |

---

## Project Structure

```text
NANA-OPTOM/
├── index.html
├── products.html
├── order.html
├── about.html
├── feedback.html
├── login.html
├── README.md
├── css/
│   ├── base.css
│   ├── aida.css
│   ├── assiya.css
│   ├── login.css
│   └── Additional page stylesheets
├── js/
│   ├── main.js
│   ├── products.js
│   ├── order.js
│   ├── about.js
│   ├── feedback.js
│   └── login.js
└── images/
    └── Product and store photographs
```

---

## Bootstrap Features

The website uses Bootstrap 5.3.3 for:

- Responsive navigation with a collapsible mobile menu
- Grid layouts for product cards and forms
- Responsive product information
- Form controls, select menus, checkboxes, and radio buttons
- Buttons, spacing, and alignment utilities
- Responsive images using `img-fluid`

The layout adapts to mobile phones, tablets, and desktop screens.

---

## Responsive Design

The website is designed for different screen sizes:

- **Mobile:** 375 px
- **Tablet:** 768 px
- **Desktop:** 1200 px and wider

The product gallery displays one column on phones, two columns on tablets, and three columns on desktops.

The navigation menu collapses on smaller screens.

JavaScript-generated content is intended to work across these screen sizes.

---

# Assignment 4–5 — JavaScript Implementation

## Assignment 4: JavaScript Fundamentals

Assignment 4 focuses on implementing the data structures and application logic required for the website.

The project uses:

- Variables and constants
- Arrays and objects
- Arithmetic operations
- Conditional statements
- Logical operators
- Loops and array methods
- Reusable functions
- Product calculations
- Shopping cart calculations
- Random demonstration reference generation

These concepts support product selection, cart management, and order processing.

## Assignment 5: DOM, Events, and Validation

Assignment 5 focuses on connecting JavaScript logic to the website interface.

The implementation includes:

- DOM element selection
- Dynamic element creation and removal
- Event listeners
- Interactive buttons
- Form validation
- Error and success messages
- Dynamic product rendering
- Shopping cart updates
- Order confirmation
- Feedback interactions
- Login form interactions

---

## Functionality Plan

| Page | Visitor Goal | JavaScript Functionality | Expected Result | Responsible |
|---|---|---|---|---|
| Products | Find cosmetics | Search, category filtering, sorting, and reset | Matching products are displayed | Aida |
| Products | Select cosmetics | Shopping cart and quantity controls | Cart updates automatically | Aida |
| Order | Prepare an order | Cart summary and total calculation | Selected products and total are displayed | Aida |
| Order | Submit an order | Form validation and demo confirmation | Validation errors or confirmation appear | Aida |
| About | Explore store information | About page JavaScript functionality | Interactive store information | Assiya |
| Feedback | Share an opinion | Feedback validation and customer reviews | Valid feedback is displayed | Assiya |
| Login | Enter login information | Password validation and notifications | Validation feedback appears | Shared |
| All Pages | Navigate and use shared features | Shared JavaScript functionality | Consistent website behavior | Shared |

---

## Products Page — JavaScript Features

The Products page includes an interactive cosmetics catalog.

### Product Search

Visitors can search for products by entering a product name.

The displayed products are updated according to the search query.

### Category Filtering

Visitors can select a category to display matching products.

### Product Sorting

Products can be sorted according to available sorting options, including price.

### Reset Functionality

The reset option clears the active search and filtering selections.

### Shopping Cart

Visitors can:

- Add products to the cart
- Increase product quantity
- Decrease product quantity
- Remove individual products
- Clear the entire cart
- View product subtotals
- View the total quantity
- View the final total price
- Proceed to the Order page

Cart information is stored using `sessionStorage`.

---

## Order Page — JavaScript Features

The Order page is connected to the shopping cart.

When a visitor proceeds from Products to Order, selected products are displayed in the Order Summary.

### Order Summary

The summary displays:

- Product names
- Product quantities
- Individual prices
- Product subtotals
- Final total price

The total is calculated automatically.

### Quantity Management

Visitors can adjust quantities using the plus and minus buttons.

The order summary and total price are updated after changes.

### Form Validation

JavaScript checks the required customer and order information.

Invalid input produces validation feedback.

### Order Confirmation

After successful validation, the website displays a demonstration order confirmation.

The confirmation does not represent a real purchase, payment, or submitted order.

---

## Feedback Page — JavaScript Features

The Feedback page allows visitors to share their opinions about products and services.

The page includes:

- Customer information fields
- Product selection
- Rating selection
- Feedback text
- Form validation
- Customer review display
- Feedback confirmation

JavaScript is used to process form interactions and display feedback-related information.

The feedback process is a front-end demonstration.

---

## Login Page — JavaScript Features

The Login page includes interactive form behavior.

Implemented features include:

- Email input validation
- Password validation
- Show/Hide Password functionality
- Input feedback
- Login notification messages
- Success and error toast styling

The login process is a front-end demonstration.

No real authentication is performed, and the website does not connect to an authentication server.

Passwords must not be stored in browser storage.

---

## Shared JavaScript Functionality

The project uses `js/main.js` for shared functionality across website pages.

Shared features include:

- Navigation-related behavior
- Shopping cart counter updates
- Multilingual interface support

The website supports:

- English
- Russian
- Kazakh

---

## JavaScript Concepts Used

| Concept | Purpose |
|---|---|
| `const` and `let` | Declare variables |
| Arrays | Store collections of data |
| Objects | Represent products and other structured information |
| `if / else` | Validate conditions and control logic |
| `forEach()` | Process collections of items |
| `filter()` | Filter products |
| `find()` | Find matching data |
| `reduce()` | Calculate totals |
| `addEventListener()` | Respond to user actions |
| `createElement()` | Create HTML elements dynamically |
| `append()` | Insert elements into the page |
| `textContent` | Display text safely |
| `classList` | Manage element states |
| `sessionStorage` | Store cart information during a browser session |
| `Math.random()` | Generate demonstration reference values |

---

## User Journeys

### Journey 1 — Browse Products and Place a Demo Order

**Start:** Home page (`index.html`)

**Steps:**

1. Open the Home page.
2. Navigate to the Products page.
3. Search or filter cosmetic products.
4. Add selected products to the shopping cart.
5. Adjust product quantities.
6. Review the total price.
7. Proceed to the Order page.
8. Check the Order Summary.
9. Enter customer and delivery information.
10. Submit the order form.
11. View the demonstration confirmation.

**End:** The website displays a demonstration order result. No real order is sent to a server.

### Journey 2 — Leave Product Feedback

**Start:** Home page (`index.html`)

**Steps:**

1. Open the Home page.
2. Navigate to the Feedback page.
3. Enter customer information.
4. Select the product.
5. Give a rating.
6. Write a feedback message.
7. Submit the form.
8. View validation feedback or confirmation.

**End:** The feedback is handled within the front-end demonstration.

### Journey 3 — Login

**Start:** Any website page

**Steps:**

1. Click the Login button in the navigation.
2. Enter an email address.
3. Enter a password.
4. Use the Show/Hide Password button if needed.
5. Optionally select Remember me.
6. Press the Login button.
7. View validation feedback and the demonstration notification.

**End:** The website displays a front-end result without performing real authentication.

---

## Authors and Contributions

### Aida Khalila

- Products page
- Order page
- `aida.css`
- Product catalog interactions
- Shopping cart functionality
- Order calculations and validation

### Assiya Yesmagambet

- About page
- Feedback page
- `assiya.css`
- About page functionality
- Feedback form and customer reviews

### Shared Work

- Home page
- Login page
- `base.css`
- `login.css`
- Bootstrap integration
- Responsive layout and navigation
- Shared JavaScript functionality
- Testing
- Documentation

---

## Quality Assurance

The project is checked for:

- Working navigation links
- Correct product information
- Product search and filtering
- Sorting functionality
- Shopping cart calculations
- Quantity controls
- Empty cart behavior
- Order form validation
- Feedback form validation
- Login validation
- Responsive layouts
- Browser console errors
- Correct demonstration messages
- Keyboard accessibility
- HTML validity

The project is designed to work at mobile, tablet, and desktop widths.

---

## Midterm Version

The Midterm version used HTML5, CSS3, and Bootstrap 5.3.3.

At that stage:

- Six HTML pages were created.
- Responsive layouts were implemented.
- Forms were prepared for future JavaScript.
- Navigation and Bootstrap components were tested.
- JavaScript functionality had not yet been implemented.

The original Midterm version is preserved through the Git tag:

`midterm`

---

## Git Version History

The project uses the same GitHub repository throughout development.

### Important Commits

- `a5930dc` — Midterm project
- `9608948` — JavaScript functionality for Assignments 4–5
- `77c3d2f` — README documentation update

### Git Tags

- `midterm` — Original Midterm version
- `assignment-5` — JavaScript implementation and documentation

Assignment 4 and Assignment 5 functionality were committed together. A separate `assignment-4` milestone tag has not yet been created.

---

## How to Run

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server or a web browser.
4. Navigate between the website pages.
5. Test the JavaScript functionality.

An internet connection is required to load Bootstrap from the CDN.

---

## Demonstration Notice

NANA OPTOM is an educational front-end project.

The website does not process real orders, payments, customer registrations, or authentication.

Order confirmations, feedback results, and login notifications are demonstrations.

---

## AI Usage Log

AI assistance was used during the development and review process for:

- Explaining HTML and CSS concepts
- Explaining Bootstrap components
- Reviewing responsive layouts
- Understanding JavaScript fundamentals
- Explaining arrays, loops, functions, and DOM methods
- Discussing shopping cart logic
- Reviewing form validation approaches
- Troubleshooting JavaScript and interface behavior
- Assisting with code revisions and debugging
- Explaining Git commands and GitHub workflows
- Organizing project documentation
- Preparing for the project defense

The project team reviewed and tested the resulting website functionality.

---

## Repository

**GitHub:**  
https://github.com/yesmagambetasiya-hub/nana-optom-midterm