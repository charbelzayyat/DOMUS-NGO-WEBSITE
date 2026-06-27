# DOMUS NGO Website

## Student Name

Charbel Zayyat

## Project Description

DOMUS NGO Website is a responsive humanitarian organization website developed using HTML5, CSS3, Bootstrap 5, and JavaScript (ES6). The website presents DOMUS activities, mission, volunteer opportunities, and donation services in a modern and user-friendly interface.

## Features

* Responsive design for desktop, tablet, and mobile devices.
* Multi-page website (Home, About, Activities, Contact).
* Real-time contact form validation.
* Donation and volunteer registration forms.
* Dynamic inspirational quotes fetched from an external API.
* Search and filtering functionality for activities.
* Interactive statistics counter animation.
* Embedded multimedia content.

## API Used

* API Ninjas Quotes API

The API is used to display inspirational quotes dynamically on the homepage.

## Custom Requirement

The custom requirement implemented is a contact form with styled inputs and real-time validation. Validation is performed while the user types using JavaScript ES6 classes.

## Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6 Classes)
* Font Awesome

## AI-Use Appendix

### AI Tools Used

* ChatGPT

### How AI Was Used

* Assistance with responsive layout improvements.
* Assistance with JavaScript form validation.
* Assistance with API integration.
* Assistance with styling and UI improvements.

### Example Prompts

1. "Create a responsive Bootstrap navbar for an NGO website."
2. "How can I implement real-time form validation using ES6 classes?"
3. "Improve the design of a donation modal using Bootstrap."

### Issues Encountered and Fixes

1. The counter animation started before the user scrolled to the statistics section.

   * Fixed by implementing Intersection Observer to trigger the animation only when visible.

2. The navigation bar colors reduced text visibility.

   * Fixed by adjusting color contrast and active link styling in CSS.

## Screenshots

Screenshots for desktop, tablet, and mobile views are included in the `screenshots` folder.
