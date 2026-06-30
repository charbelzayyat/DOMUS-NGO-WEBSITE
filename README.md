# DOMUS NGO Website

## Student Name
**Charbel Zayyat**

## Project Description
The DOMUS NGO Website is a fully responsive, full-stack humanitarian web application designed to represent a fictional NGO that supports community aid, volunteering, and donations. 

Originally engineered as a static front-end application, the platform has been upgraded into a robust **Full-Stack MERN-edge application**. It utilizes a decoupled architecture featuring a live Node.js api backend to securely process, validate, and store donor information alongside operational transactional payment receipts (OMT/Whish).


The platform provides users with an interactive experience to:
* Explore humanitarian activities and events.
* Learn about the DOMUS mission and values.
* Register as a volunteer through an interactive modal interface with personalized confirmation feedback.
* Send messages through a validated contact form.
* Receive inspirational quotes dynamically via API integration.
* Securely process and log donation transactions with manual payment receipt uploads (OMT/Whish).
* Interact with simulated checkout environments and sandbox workflows for digital money payment methods (Credit Card/PayPal).
> ⚠️ **Scope & Security Notice:** All online payment interfaces (Credit/Debit Card and PayPal) integrated within this application function strictly as UI/UX frontend mock simulations. This repository does not process, capture, or store real financial data or live credit card credentials.

## Full-Stack Architecture Workflow
The application is split into a completely modern, distributed full-stack pipeline:
1. **Frontend Client:** Hosted on **Vercel**, delivering optimized interfaces and handling dynamic UI state via ES6 Object-Oriented JavaScript.
2. **Backend Engine:** A **Node.js & Express** REST API web service hosted on **Render**, capturing form payloads and intercepting multi-part binary data transfers.
3. **Database Layer:** A managed cloud cluster hosted on **MongoDB Atlas**, handling schema enforcement and data persistence.


## Features
* **Full-Stack Form Integration:** Upgraded static client forms to pipeline transactional data to a live database cluster endpoint.
* **Responsive Layout Architecture:** Adaptive interfaces catering seamlessly to desktop, tablet, and mobile viewports.
* **Real-Time Input Validation:** Custom interactive contact forms featuring instant UI state response validation.
* **Multi-Part File Interception:** Secure binary data pipeline mapping to accept physical image transfers or digital document records.
* **Asynchronous Front-End API Integration:** Third-party REST API mapping with robust catch-all safety fallbacks.
* **Intersection Observer Elements:** Scroll-aware active statistic counter monitors optimizing user attention spans.
* **Embedded Multimedia Content:** Integrated YouTube presentation widgets directly into client views.


## API & Database Integration

### 1. Front-End API: API Ninjas Quotes API
* **Type:** REST API
* **Usage:** Dynamically displays inspirational quotes on the homepage with an explicit fallback mechanism to predefined local fallback arrays upon structural network dropping.

### 2. Back-End Engine: MongoDB Atlas & Express Endpoints
* **Database Driver:** Mongoose ODM
* **Core API Endpoint:** `POST /api/donate`
* **File Upload Interceptor:** Multer middleware configuration enforcing structural validation parameters (`.jpg`, `.png`, `.pdf`).


## Custom Requirement
The custom UI requirement implemented is a fully interactive contact form with styled inputs and real-time validation using JavaScript ES6 classes. The form validates user input dynamically while typing and provides instant feedback without requiring form submission.

This enhances user experience by ensuring data correctness before submission and improving usability.


## Additional Feature (Bonus Enhancement)
Upgraded the structural donation workflow from a simple conceptual mock dialog into a completely operational, multi-tier **Production Donation Pipeline**:
* **Dynamic Gateway Selection:** Dynamically monitors chosen payment gateways (OMT, Whish, PayPal, Credit Card).
* **Interactive Sandbox UI:** Toggles a fully simulated credit/debit card gateway wrapper inside the modal DOM when online card methods are selected to model real-world ecommerce workflows.
* **Conditional Media Demands:** Conditionals dynamically alter form requirements, demanding explicit transaction receipt binary uploads for local clearing verification if OMT or Whish is chosen.
* **Cloud Database Persistence:** Persists actual form records across remote database nodes, logging success tracking seamlessly onto database schemas.


## Technologies Used
* **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript (ES6 Classes - Object-Oriented Architecture), Font Awesome.
* **Backend:** Node.js, Express.js, Multer (Multi-part binary form data parser), Cors.
* **Database & Cloud:** MongoDB Atlas, Mongoose ODM, Render (Web Service Hosting), Vercel (Frontend Deployment).


## Issues Encountered and Fixes

1. **Counter Animation Early Triggering**
   * *Fix:* Implemented an `Intersection Observer` instance to toggle animation lifecycles purely upon active viewport visibility.
2. **Path Resolution Matrix Drops on Hosting**
   * *Fix:* Reconfigured structural assets to follow exact relative conventions ensuring Vercel framework deployment matching.
3. **Missing Local Storage Folders on Ephemeral Instances (Render 500 Error)**
   * *Fix:* Standard hosting platforms omit empty folders or strip untracked directory structures. Fixed by importing native `fs` and `path` modules within `server.js` to run a programmatically checked directory verification cycle at startup, auto-generating the missing `uploads/` folder instantly if it doesn't exist.
4. **Cross-Origin Resource Blocking (CORS Exception)**
   * *Fix:* Integrated wildcard security policy controls via backend Cors middleware, allowing the separate Vercel client domain to safely transfer stream content to the Render API gateway.
5. **Initial JavaScript structure not fully ES6-based**
   * *Fix:* Refactored all logic into ES6 class-based modules for better maintainability and grading compliance.
6. **API integration errors due to missing response validation**
   * *Fix:* Added proper error handling and fallback quotes when API fails or returns empty responses.


## AI-Use Appendix

### AI Tools Used
* ChatGPT (OpenAI)
* Gemini (Google)
> The course instructor recommended using Claude Code. However, Claude Code requires a paid subscription plan that I could not afford. Therefore, this project was developed using only the free versions of ChatGPT and Google Gemini, without any paid AI subscription or upgrade plan.

### How AI Was Used
AI assistance was utilized across structural architectural optimization and deployment debugging:
* Designing class-based modular front-end code layout rules.
* Structuring conditional production deployment targets to toggle local/live base URLs (`window.location.hostname === "localhost"`).
* Debugging asynchronous payload formatting errors (`Unexpected token '<'`) caused by directory anomalies on remote hosts.
* Assisting with deployment troubleshooting on Vercel, Render, and MongoDB Atlas.
* Improving user interface interactions, modal behavior, and form validation logic.
* Generating suggestions for improving responsiveness, accessibility, and overall user experience.

## What AI Got Wrong

### 1. Donation modal layout issue

AI initially generated HTML for the donation modal with a missing closing `</div>` element in `index.html`. Because of this incomplete HTML structure, selecting **Food**, **Clothes**, or **Gifts** caused the **Submit Donation** button and some form elements to disappear unexpectedly.

**How I found it:**
I manually tested every donation option on the website. While the Money donation option worked correctly, switching to the other donation types caused part of the modal to disappear. I inspected the page using the browser Developer Tools and traced the problem to an unclosed `<div>` element that broke the DOM structure.

**How I fixed it:**
I corrected the HTML by adding the missing closing `</div>` tag and verified the modal structure. After fixing the HTML, the Submit Donation button remained visible for all donation types, and the dynamic form behaved correctly for Money, Food, Clothes, and Gift donations.

### 2. Incorrect deployment paths

AI initially suggested image paths that worked correctly during local development but resulted in **404 Not Found** errors after deploying the website to Vercel.

**How I found it:**
I opened the browser Developer Tools (F12) after deployment and noticed several 404 errors in the Console and Network tabs indicating that some images could not be loaded.

**How I fixed it:**
I reviewed all image references, corrected the relative file paths, ensured the assets were committed to the GitHub repository, and redeployed the project. After deployment, all images loaded successfully without any missing resource errors.

### 3. Backend deployment issue

AI initially assumed that the `uploads` folder would always exist on the hosting server. However, Render deployments start from a clean environment, so the folder was missing, causing file upload failures.

**How I found it:**
After deploying the backend, donation submissions returned server errors even though they worked correctly on my local machine. The Render logs indicated that the upload directory could not be found.

**How I fixed it:**
I modified `server.js` by using Node.js `fs` and `path` modules to check whether the `uploads` directory exists when the server starts. If it does not exist, the application automatically creates it before handling file uploads. This resolved the deployment issue.

## Example Prompts

1. "I want to replace the footer social media icons with real official logos for WhatsApp, Instagram, and YouTube. The icons should be clickable and redirect users to the correct official platforms instead of placeholders."

2. "Improve all website contact and social media integration:
* Connect Instagram icon to the official DOMUS Instagram page
* Connect YouTube directly to the official channel
* Replace email with the official company email (info@domuslb.com)
* Ensure Google Maps link works correctly
* Add a YouTube video in the Activities page
* Fix navigation so Donate Now and Volunteer buttons open a proper interactive form modal instead of redirecting incorrectly
* Replace static donation/contact behavior with a dynamic modal form collecting name, email, donation amount, and payment method with validation"

3. "Improve the NGO website donation and volunteer system to make it more interactive and realistic.
For the volunteer registration form, instead of a simple confirmation message, create a more engaging experience such as a personalized thank-you message, animated success feedback, or a confirmation popup that encourages users to stay involved with the NGO.
For the donation system, upgrade it into a more realistic multi-option flow:
- If the user selects money donation, allow them to choose a payment method such as Whish, OMT, PayPal, or credit card transfer, and display clear instructions or simulated secure payment steps.
- If the user selects physical donations (food, clothes, or gifts), allow them to upload or view example images of acceptable items and guide them through what can be donated.
The goal is to make the system feel like a real NGO platform with an interactive and user-friendly donation experience instead of a simple static form."

##  Project Links
* **Frontend (Vercel):** [https://domus-ngo-website.vercel.app](https://domus-ngo-website.vercel.app)
* **Backend API (Render):** [https://domus-ngo-website.onrender.com](https://domus-ngo-website.onrender.com)
* **GitHub Repository:** [https://github.com/charbelzayyat/DOMUS-NGO-WEBSITE.git](https://github.com/charbelzayyat/DOMUS-NGO-WEBSITE.git)

##  Deployment Information
* **Frontend:** Hosted on Vercel, providing a fast, globally distributed user interface.
* **Backend:** Hosted on Render, managing the Node.js/Express server and communication with the MongoDB Atlas cloud database.

## Screenshots
Screenshots for desktop, tablet, and mobile views are included in the `screenshots` folder.