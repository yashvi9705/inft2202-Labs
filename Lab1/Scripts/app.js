/*
Lab 1
Group Members:
- Yashvi Patel: 100900705
- Justin Wastle: 
- Andrew Mekhail: 100828858
Date: February 1st, 2024 
*/

// Inject site content

const navbar = document.getElementById("navbarSupportedContent");
const navbarUl = navbar.querySelector(".navbar-nav");
const navbarLinks = navbar.getElementsByClassName("nav-link");

// 3b. Change the Products link in the Navbar to Projects
const productsItem = Array.from(navbarLinks).find(link => link.textContent.trim() == "Products");
productsItem.innerHTML = '<i class="fa fa-th" aria-hidden="true"></i> Projects';

// 3c. Add another link to the Navbar before Contact Us
// Create the li element to hold the a element
const humanResourcesItem = document.createElement("li");
// Set the class for the li elem
humanResourcesItem.className = "nav-item";

// Create the a element to hold the link
const humanResourcesLink = document.createElement("a");
// Set the class for the elem
humanResourcesLink.className = "nav-link";
// Set the href for the elem
humanResourcesLink.href = "#";
// Set the innerHTML (icon and label) for the elem
humanResourcesLink.innerHTML = '<i class="fa fa-handshake-o" aria-hidden="true"></i> Human Resources';

// Append the a elem to the li elem
humanResourcesItem.appendChild(humanResourcesLink);

// Find the location of the contact us link
const contactUsLink = Array.from(navbarLinks).find(link => link.textContent.trim() == "Contact us");
// In the navbar ul, insert the new elem before the contact us link
navbarUl.insertBefore(humanResourcesItem, contactUsLink.parentNode)

// 3d. Add a fixed navbar (footer) to the bottom of the page
// Create an elem for the footer
const footer = document.createElement("nav");
// Set the nav class name
footer.className = "navbar fixed-bottom navbar-light bg-light";

// Create an elem for the footer content
const footerDiv = document.createElement("div");
// Set the div class name
footerDiv.className = "container-fluid";
// Set the div inner html
footerDiv.innerHTML = "&copy; Copyright 2024";

// Append the footer div to the footer nav
footer.appendChild(footerDiv);
// Append the footer to the document body
document.body.appendChild(footer);