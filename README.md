# NANA OPTOM — Wholesale Cosmetics Website

## Project Overview

NANA OPTOM is a responsive cosmetics website created for the Introduction to Web Technologies course.

The website presents cosmetic products, prices, store information, an order form, a feedback form, and a login page.

This project was developed by Aida Khalila and Assiya Yesmagambet.

## Technologies Used

- HTML5 — page structure and content
- CSS3 — custom colors and styling
- Bootstrap 5.3.3 — responsive layout, navigation, tables, buttons, forms, and utilities
- Visual Studio Code — code editor

No custom JavaScript is used at the Midterm stage.

## Website Pages

| File | Description |
|---|---|
| `index.html` | Home page and contact information |
| `products.html` | Product price list and photo gallery |
| `order.html` | Customer order form |
| `about.html` | Store history, products, and ordering information |
| `feedback.html` | Customer feedback and rating form |
| `login.html` | Login form |

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
│   └── login.css
└── images/
    └── Product and store photographs
```

## Bootstrap Features

The website uses Bootstrap 5.3.3 for:

- Responsive navigation with a collapsible mobile menu
- Grid layouts for product cards and forms
- Responsive product price table
- Form controls, select menus, checkboxes, and radio buttons
- Buttons, spacing, and alignment utilities
- Responsive images using `img-fluid`

The layout adapts to mobile phones, tablets, and desktop screens.

## Responsive Design

The website is designed for different screen sizes:

- Mobile: 375 px
- Tablet: 768 px
- Desktop: 1200 px and wider

The product gallery displays one column on phones, two columns on tablets, and three columns on desktops.

The navigation menu collapses on smaller screens.

## Forms

The Order page includes customer information, product selection, quantity, delivery preferences, and order notes.

The Feedback page includes customer information, a 1–5 rating, product selection, and a comment field.

The Login page includes email, password, and a Remember me checkbox.

The forms use HTML validation.

At the Midterm stage, the forms are prepared for future JavaScript but are not connected to a backend or database.

## User Journeys

### Journey 1 — Browse Products and Prepare an Order

**Start:** Home page (`index.html`)

**Steps:**

1. Open the Home page.
2. Navigate to the Products page.
3. View the product price list and product photographs.
4. Open the Order page.
5. Enter customer information.
6. Select a product and quantity.
7. Choose delivery preferences.
8. Submit the order form.

**End:** The Order page contains a prepared confirmation area where a future JavaScript message can be displayed.

### Journey 2 — Leave Product Feedback

**Start:** Home page (`index.html`)

**Steps:**

1. Open the Home page.
2. Navigate to the Feedback page.
3. Enter customer information.
4. Select the date and product.
5. Give a rating from 1 to 5.
6. Write a feedback message.
7. Submit the feedback form.

**End:** The Feedback page contains a prepared confirmation area where a future JavaScript message can be displayed.

### Journey 3 — Login

**Start:** Any website page

**Steps:**

1. Click the Login button in the navigation.
2. Enter an email address.
3. Enter a password.
4. Optionally select Remember me.
5. Press the Login button.

**End:** The Login page contains a prepared result area where a future JavaScript login message can be displayed.

## JavaScript Readiness

No custom JavaScript is implemented at the Midterm stage.

The HTML structure is prepared for future JavaScript functionality.

Forms, important inputs, buttons, and result areas have consistent IDs so that they can be accessed later with JavaScript.

Prepared result areas include:

- Order confirmation area
- Feedback confirmation area
- Login result area

The shared CSS contains prepared interface states:

- `hidden`
- `active`
- `selected`
- `error`
- `success`

These states can later be controlled using JavaScript without adding new hand-written CSS.

## Authors and Contributions

### Aida Khalila

- Products page
- Order page
- `aida.css`

### Assiya Yesmagambet

- About page
- Feedback page
- `assiya.css`

### Shared Work

- Home page
- Login page
- `base.css`
- `login.css`
- Bootstrap integration
- Responsive layout and navigation
- Testing
- Documentation

## Quality Pass

Before the Midterm submission, the project team checks:

- Every navigation link
- Links between website pages
- Product and store images
- Order form
- Feedback form
- Login form
- Required HTML validation
- Mobile navigation
- Phone layout
- Desktop layout
- Horizontal overflow
- Dead links
- `href="#"` links
- Browser console errors
- HTML validation with the W3C Validator

Each team member also reviews pages originally created by the other team member.

## Quality Pass Results

## Quality Pass Results

The final quality pass was completed before the Midterm submission.

- All six HTML pages were checked with the W3C HTML Validator.
- Navigation links between all website pages were tested.
- Product and store images were checked.
- Order, Feedback, and Login forms were reviewed.
- The website was tested at phone and desktop widths.
- No horizontal overflow was found on the tested mobile layout.
- The browser console was checked for errors using Live Server.
- Mobile navigation and the collapsible navbar were tested.
- Phone and desktop screenshots were prepared for all six pages.
- Each team member reviewed pages created by the other team member.

## Screenshots

Midterm screenshots are prepared for every page at:

- Phone width
- Desktop width

Pages:

- Home
- Products
- Order
- About
- Feedback
- Login

## Midterm Freeze

After the final HTML and CSS quality check, the project will be frozen for the Midterm submission.

The final Git tag will be:

`midterm`

Future JavaScript development will use the prepared HTML elements, IDs, result areas, and CSS states.

## How to Run

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Use the navigation menu to explore the website.

An internet connection is required to load Bootstrap from the CDN.

## AI Usage Log

AI assistance was used for:

- Explaining HTML and CSS concepts
- Explaining Bootstrap concepts
- Reviewing HTML structure
- Reviewing responsive layout
- Explaining Midterm requirements
- Reviewing form structure and IDs
- Explaining preparation for future JavaScript
- Reviewing CSS organization
- Organizing project documentation

The project team reviewed the suggestions and checked the final website structure.