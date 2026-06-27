# DOMUS NGO Website

## Student Name

Charbel Zayyat

## Project Description

The DOMUS NGO Website is a fully responsive humanitarian web application designed to represent a fictional NGO that supports community aid, volunteering, and donations.

The platform provides users with an interactive experience to:

Explore humanitarian activities and events
Learn about DOMUS mission and values
Submit volunteer applications
Send messages through a validated contact form
Receive inspirational quotes dynamically via API integration

The project focuses on modern front-end development using responsive design, reusable components, and ES6 object-oriented JavaScript architecture.
## Features

* Responsive design for desktop, tablet, and mobile devices.
* Multi-page website (Home, About, Activities, Contact).
* Real-time contact form validation.
* Donation and volunteer registration forms.
* Dynamic inspirational quotes fetched from an external API.
* Search and filtering functionality for activities.
* Interactive statistics counter animation.
* Embedded multimedia content (YouTube integration).

## API Used

* API Ninjas Quotes API

The API is used to dynamically display inspirational quotes on the homepage.

* Type: REST API
* Authentication: Requires API key in request headers
* Response: JSON containing quote and author

If the API fails, a fallback system displays predefined DOMUS inspirational quotes.

## Custom Requirement

The custom UI requirement implemented is a fully interactive contact form with styled inputs and real-time validation using JavaScript ES6 classes. The form validates user input dynamically while typing and provides instant feedback without requiring form submission.

This enhances user experience by ensuring data correctness before submission and improving usability.

## Additional Feature (Bonus Enhancement)

The project also includes an enhanced donation modal system as an additional feature. This is not part of the official custom requirement but was implemented to improve user experience.

The donation modal allows users to:
- Enter personal information (name, email)
- Select donation type and payment method
- Specify donation amount
- Submit information through an interactive popup interface

This feature improves the realism of the NGO platform by simulating a real-world donation workflow.

## Technologies Used

* HTML5 (semantic structure)
* CSS3 (custom styling)
* Bootstrap 5 (responsive layout system)
* JavaScript (ES6 Classes - Object-Oriented Architecture)
* Font Awesome (icons)

## AI-Use Appendix

### AI Tools Used

* ChatGPT (OpenAI)
* Gemini

### How AI Was Used

AI assistance was used during development for:

* Structuring ES6 class-based JavaScript architecture
* Debugging form validation logic
* Improving UI/UX design and responsiveness
* Implementing API integration with error handling
* Enhancing code organization and modularity

### Example Prompts

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

### Issues Encountered and Fixes

1. The counter animation started before the user scrolled to the statistics section.

   * Fixed by implementing Intersection Observer to trigger the animation only when visible.

2. The navigation bar colors reduced text visibility.

   * Fixed by adjusting color contrast and active link styling in CSS.
3. Incorrect file paths causing missing assets in deployment

   * Fixed by correcting relative paths to images and assets for Vercel compatibility.
4. Initial JavaScript structure not fully ES6-based

   * Fixed by refactoring all logic into ES6 class-based modules for better maintainability and grading compliance.
5. API integration errors due to missing response validation

   * Fixed by adding proper error handling and fallback quotes when API fails or returns empty responses.

## Screenshots

Screenshots for desktop, tablet, and mobile views are included in the `screenshots` folder.
