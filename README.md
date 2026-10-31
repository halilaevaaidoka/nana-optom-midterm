NANA OPTOM — Wholesale Cosmetics Website
Project Overview
NANA OPTOM is a responsive and interactive wholesale cosmetics website developed for the Introduction to Web Technologies course.

The project was initially created using HTML5, CSS3, and Bootstrap 5.3.3. During Assignments 4–5, JavaScript was added to implement interactive features, dynamic content, form validation, and shopping cart functionality.

The website allows visitors to browse cosmetics, search and filter products, manage a shopping cart, prepare demonstration orders, submit feedback, and interact with a login form.

Project Authors:

- Aida Khalila

- Assiya Yesmagambet

GitHub Repository:  

https://github.com/yesmagambetasiya-hub/nana-optom-midterm

---
Technologies Used
- HTML5 — Website structure and semantic elements

- CSS3 — Custom styling, colors, and responsive design

- Bootstrap 5.3.3 — Responsive grid, navigation, forms, buttons, and utilities

- JavaScript ES6 — Interactive functionality and calculations

- DOM Manipulation — Dynamic creation, modification, and removal of elements

- Event Listeners — Handling clicks, input changes, and form submissions

- Session Storage — Storing shopping cart information during the browser session

- Visual Studio Code — Code editor

- Git and GitHub — Version control and project collaboration

The website is a front-end educational project and does not use a backend server or database.

---
Website Pages
| File | Description |

|---|---|

| index.html | Home page, navigation, and contact information |

| products.html | Product catalog, search, filtering, sorting, and shopping cart |

| order.html | Order form, cart summary, calculations, validation, and confirmation |

| about.html | Store information, history, products, and ordering instructions |

| feedback.html | Customer reviews, feedback form, and validation |

| login.html | Login form, password validation, visibility toggle, and notifications |

---
Project Structure

NANA-OPTOM/

├── index.html

├── products.html

├── order.html

├── about.html

├── feedback.html

├── login.html

├── README.md

├── css/

│   ├── base.css

│   ├── aida.css

│   ├── assiya.css

│   ├── login.css

│   └── Additional page stylesheets

├── js/

│   ├── main.js

│   ├── products.js

│   ├── order.js

│   ├── about.js

│   ├── feedback.js

│   └── login.js

└── images/

    └── Product and store photographs

---
Bootstrap Features
The website uses Bootstrap 5.3.3 for:

- Responsive navigation with a collapsible mobile menu

- Grid layouts for product cards and forms

- Responsive product information

- Form controls, select menus, checkboxes, and radio buttons

- Buttons, spacing, and alignment utilities

- Responsive images using img-fluid

The layout adapts to mobile phones, tablets, and desktop screens.

---
Responsive Design
The website is designed for different screen sizes:

- Mobile: 375 px

- Tablet: 768 px

- Desktop: 1200 px and wider

The product gallery displays one column on phones, two columns on tablets, and three columns on desktops.

The navigation menu collapses on smaller screens.

JavaScript-generated content is intended to work across these screen sizes.

---
Assignment 4–5 — JavaScript Implementation
Assignment 4: JavaScript Fundamentals
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
Assignment 5: DOM, Events, and Validation
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
Functionality Plan
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
Products Page — JavaScript Features
The Products page includes an interactive cosmetics catalog.
Product Search
Visitors can search for products by entering a product name.

The displayed products are updated according to the search query.
Category Filtering
Visitors can select a category to display matching products.
Product Sorting
Products can be sorted according to available sorting options, including price.
Reset Functionality
The reset option clears the active search and filtering selections.
Shopping Cart
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

Cart information is stored using sessionStorage.

---
Order Page — JavaScript Features
The Order page is connected to the shopping cart.

When a visitor proceeds from Products to Order, selected products are displayed in the Order Summary.
Order Summary
The summary displays:

- Product names

- Product quantities

- Individual prices

- Product subtotals

- Final total price

The total is calculated automatically.
Quantity Management
Visitors can adjust quantities using the plus and minus buttons.

The order summary and total price are updated after changes.
Form Validation
JavaScript checks the required customer and order information.

Invalid input produces validation feedback.
Order Confirmation
After successful validation, the website displays a demonstration order confirmation.

The confirmation does not represent a real purchase, payment, or submitted order.

---
Feedback Page — JavaScript Features
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
Login Page — JavaScript Features
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
Shared JavaScript Functionality
The project uses js/main.js for shared functionality across website pages.

Shared features include:

- Navigation-related behavior

- Shopping cart counter updates

- Multilingual interface support

The website supports:

- English

- Russian

- Kazakh

---
JavaScript Concepts Used
| Concept | Purpose |

|---|---|

| const and let | Declare variables |

| Arrays | Store collections of data |

| Objects | Represent products and other structured information |

| if / else | Validate conditions and control logic |

| forEach() | Process collections of items |

| filter() | Filter products |

| find() | Find matching data |

| reduce() | Calculate totals |

| addEventListener() | Respond to user actions |

| createElement() | Create HTML elements dynamically |

| append() | Insert elements into the page |

| textContent | Display text safely |

| classList | Manage element states |

| sessionStorage | Store cart information during a browser session |

| Math.random() | Generate demonstration reference values |

---
User Journeys
Journey 1 — Browse Products and Place a Demo Order
Start: Home page (index.html)

Steps:
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
End: The website displays a demonstration order result. No real order is sent to a server.
Journey 2 — Leave Product Feedback
Start: Home page (index.html)

Steps:
1. Open the Home page.
2. Navigate to the Feedback page.
3. Enter customer information.
4. Select the product.
5. Give a rating.
6. Write a feedback message.
7. Submit the form.
8. View validation feedback or confirmation.
End: The feedback is handled within the front-end demonstration.
Journey 3 — Login
Start: Any website page

Steps:
1. Click the Login button in the navigation.
2. Enter an email address.
3. Enter a password.
4. Use the Show/Hide Password button if needed.
5. Optionally select Remember me.
6. Press the Login button.
7. View validation feedback and the demonstration notification.
End: The website displays a front-end result without performing real authentication.

---
Authors and Contributions
Aida Khalila
- Products page

- Order page

- aida.css

- Product catalog interactions

- Shopping cart functionality

- Order calculations and validation
Assiya Yesmagambet
- About page

- Feedback page

- assiya.css

- About page functionality

- Feedback form and customer reviews
Shared Work
- Home page

- Login page

- base.css

- login.css

- Bootstrap integration

- Responsive layout and navigation

- Shared JavaScript functionality

- Testing

- Documentation

---
Quality Assurance
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
Midterm Version
The Midterm version used HTML5, CSS3, and Bootstrap 5.3.3.

At that stage:

- Six HTML pages were created.

- Responsive layouts were implemented.

- Forms were prepared for future JavaScript.

- Navigation and Bootstrap components were tested.

- JavaScript functionality had not yet been implemented.

The original Midterm version is preserved through the Git tag:

midterm

---
Git Version History
The project uses the same GitHub repository throughout development.
Important Commits
- a5930dc — Midterm project

- 9608948 — JavaScript functionality for Assignments 4–5

- 77c3d2f — README documentation update
Git Tags
- midterm — Original Midterm version

- assignment-5 — JavaScript implementation and documentation

Assignment 4 and Assignment 5 functionality were committed together. A separate assignment-4 milestone tag has not yet been created.

---
How to Run
1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open index.html using Live Server or a web browser.
4. Navigate between the website pages.
5. Test the JavaScript functionality.
An internet connection is required to load Bootstrap from the CDN.

---
Demonstration Notice
NANA OPTOM is an educational front-end project.

The website does not process real orders, payments, customer registrations, or authentication.

Order confirmations, feedback results, and login notifications are demonstrations.

---
AI Usage Log
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
JavaScript vs jQuery Comparison
Before (JavaScript)

document.getElementById('quantity').value;

After (jQuery)

$('#quantity').val();

Benefits
- Shorter and cleaner code

- Easier DOM manipulation

- Simpler event handling

- Built-in animation effects

---
Repository
GitHub:  

https://github.com/yesmagambetasiya-hub/nana-optom-midterm
Assignment 6 — jQuery Implementation
Objective
Continue developing the same NANA OPTOM website by converting existing JavaScript features to jQuery. The original project, pages, and GitHub repository remain unchanged.
jQuery Setup
- Library: jQuery 3.7.1, loaded from a CDN before the page-specific script.
- Initialization: $(function () { ... }); waits until the DOM is ready.
- JavaScript stays in external .js files, not inline HTML handlers.
- The implementation is focused on the About and Order pages. Other pages retain their existing functionality unless separately updated.
Rewritten Features
Page	Existing feature	jQuery approach
About	Category filtering and dynamic lists	.on(), .empty(), .append(), .find()
About	Show/hide ordering instructions	.on(), .slideToggle()
About	Search store facts and reset search	.on('input'), .val(), .fadeIn()
About	Gallery visibility	.fadeToggle()
Order	Customer and order form validation	.on('submit'), .val(), .addClass(), .removeClass()
Order	Cart quantity and removal controls	Delegated .on('click', selector, handler)
Order	Dynamic order summary	.text(), .append(), .attr()


These describe the implementation work. All features must be verified in the browser before final submission.
Selectors, Traversal and Chaining
- Selectors: ID (#id), class (.class), element (input) and attribute ([type="..."]).
- Filtering: confirm a suitable jQuery filter such as :checked or :first is present in the submitted code.
- Traversal: .find(), .closest(), .parent(), .siblings(), .each().
- Event context: $(this) inside event handlers.
- Chaining: at least two chains of three or more jQuery methods are required; one needs an explanatory code comment.
DOM Manipulation
Use .text() for text, .html() for HTML markup, .val() for form values, .attr() for attributes, and .prop() for current properties such as checkbox state. Existing CSS classes are changed with .addClass(), .removeClass(), .toggleClass(), and .hasClass().

Product categories or other repeated content are generated from JavaScript arrays using .append() rather than being manually added to HTML.
Events and Delegation
Events are attached using .on(). The project uses different event types including click, input, change, and focusout. Delegated handlers allow a stable parent to respond to controls created dynamically after the page loads.

Form submission must use event.preventDefault() to avoid an unwanted browser page reload.
Effects
Functional effects include .slideToggle(), .fadeToggle(), and .fadeIn(). At least one effect needs an explicit duration and at least one needs a completion callback. Confirm the callback is present in the final code.
Form Validation
The Order form checks required values, email and phone formats, and field-level error feedback. Error classes and messages should update as the visitor corrects each field. A success confirmation must appear only after all checks pass, followed by the appropriate form reset.

Client-side validation improves usability but does not replace server-side validation. This project is a front-end demonstration without a backend.
JavaScript vs jQuery — Illustrative Comparison
Reading a field value
// Plain JavaScript
const quantity = document.getElementById('quantity').value;

// jQuery
const quantityJq = $('#quantity').val();
Attaching an event
// Plain JavaScript
button.addEventListener('click', handleClick);

// jQuery
$(button).on('click', handleClick);
These are illustrative syntax comparisons; the exact original three features must also be preserved in old-js-version.js, with comments in the rewritten code describing each change.
Assignment 6 Required Files
- Existing HTML, CSS, JavaScript and assets.
- Updated jQuery-based JavaScript files.
- old-js-version.js containing the original versions of three rewritten features, not linked to any page.
- Updated README.md.
- Updated AI_USAGE_LOG.md containing actual AI questions and assistance.
Final Verification Checklist
- [ ] jQuery CDN loads before scripts on every page using it.
- [ ] jQuery version and purpose are documented in a code comment.
- [ ] Three original features are preserved in old-js-version.js.
- [ ] Each rewritten feature has a comparison comment.
- [ ] Required selectors, filter, traversal methods and chains are present.
- [ ] .text(), .html(), .val(), .attr(), .prop() are used appropriately.
- [ ] Dynamic list or cards are created from an array.
- [ ] At least three event types and a delegated handler work.
- [ ] Three purposeful effects work; one has a duration and one a callback.
- [ ] Form validation displays field-specific errors, clears them, confirms success and resets.
- [ ] No new hand-written HTML/CSS or inline onclick attributes were introduced.
- [ ] Browser console shows zero errors on all pages.
- [ ] Git history satisfies the required commit count and distinct days.
- [ ] Every team member can explain and modify their code during the defense.
Version Control and Defense
Continue using the existing repository: https://github.com/yesmagambetasiya-hub/nana-optom-midterm

The assignment requires commits from each team member, at least four commits across three different days for team work (six commits if working alone). The defense is live: demonstrate delegation, effects, validation, and explain jQuery methods and their plain-JavaScript equivalents.
AI Disclosure
AI assistance was used for explanations, code suggestions, debugging discussions, and documentation. The course assignment restricts AI-generated code and requires every AI question to be recorded. The team must review its use against that policy and be able to explain the final implementation. See AI_USAGE_LOG.md for the documented interactions and items requiring verification.