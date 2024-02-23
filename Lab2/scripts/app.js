/*
Lab 2
Group Members:
- Yashvi Patel: 100900705
- Justin Wastle: 100869386
- Andrew Mekhail: 100828858
Date: February 22, 2024 
*/

class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// Get Current Page
const currentPage = window.location.pathname.split("/").pop();

// Prepend the navbar component to every page
document.body.prepend(document.createElement("navbar-component"))

// 3a. Inject site content for each page
switch (currentPage) {
    // Content for index.html
    case "index.html": {
        // Set document body class
        document.body.className = "index";
        // Create a div elem for the home page content and set the class
        let contentDiv = document.createElement("div");
        contentDiv.className = "home-container"
        // Create an array with the elems for the content in the content div
        let contentArr = new Array();
        // Create elem for the header and push to the content array
        let header = document.createElement("h1");
        header.textContent = "Welcome to our Website - Explore, Discover and Enjoy!";
        contentArr.push(header);
        // Create an array for the paragraphs and push the to the content array
        let paragraphs = [
            "We are delighted to have you here. Explore our products, discover our services, and get to know more about our incredible team.",
            "Whether you're looking for information, inspiration, or just curious, we've got you covered. Feel free to navigate through the site, and if you have any questions, don't hesitate to reach out.",
            "Thank you for visiting, and we hope you enjoy your time on our website! You have any questions feel free to visit our about us page!"
        ];
        // Add each paragraph to the content array as a p elem
        paragraphs.forEach((paragraph) => {
            let p = document.createElement("p");
            p.textContent = paragraph;
            contentArr.push(p);
        })
        // Append all the elems in the content array to the content div
        for (let content of contentArr) {
            contentDiv.appendChild(content);
        }
        // Append the content div to the body
        document.body.appendChild(contentDiv);
        break;
    }
    // Content for products.html
    case "products.html": {
        // Create an array of objects for the products content and images
        let products = [
            {
                content: "One of our teams past projects, was a Database for Lake Ridge Healthcare Centre, located in Oshawa Ontario. The goal of this project was to improve functionality and security of information in the database. We included information on rooms, charges, patients, cost centres, and much more.",
                image: "images/Database.jpg", // Source: https://www.pinterest.ca/pin/588704982569774273
                imageAlt: "Database",
            },
            {
                content: "Another one of our projects is a Website, used for a companies sales people to record their clients, and calls between them. It included a fully function database, that took into account emails, and passwords to allow users to log in and out safely. We also implemented hashing on passwords, for secure logins.",
                image: "images/webpage.jpg",
            },
            {
                content: "We also created a testing file, used to test a clothing sales site, for errors in searching, purchasing and selection of clothing. The testing file was able to move through the website on its own, finding errors along the way, and giving an error message for said errors.",
                image: "images/webpage2.jpg",
                imageAlt: "Webpage2",
            }
        ];
        // Add the products to the body as div elems
        for (let product of products) {
            let div = document.createElement("div");
            div.className = "products";

            let p = document.createElement("p");
            p.textContent = product.content;

            let img = document.createElement("img");
            img.src = product.image;
            // Use the imageAlt value, if its undefined use the name of the image file
            img.alt = product.imageAlt || product.image.split("/").pop().split(".")[0];
            // Randomly select whether the image or paragraph is appended first
            if (Math.random() > 0.5) {
                div.appendChild(img);
                div.appendChild(p);
            } else {
                div.appendChild(p);
                div.appendChild(img);
            };

            document.body.appendChild(div);
        }
        break;
    }
    // Content for services.html
    case "services.html": {
        // Create the div for the services
        let servicesDiv = document.createElement("div");
        servicesDiv.className = "servicesPage";
        // Create an array of objects for the service content and images
        let services = [
            {
                content: "Web Development: We can create well-functioning, appealing and inexpensive websites for consumers as each member of our team has much experience in building web applications, and sites alike. Whether you wish to display information about your product or service or to create a database/hub for your business, we can create a state-of-the-art site to meet all of your needs.",
                image: "images/image1.gif", // Source: https://www.pinterest.ca/pin/588704982569774068
                imageAlt: "Animation1",
            },
            {
                content: "Test Automation: Our team can create testing software used to evaluate the performance of clients' websites, looking at all possible issues with each part of the site. This ensures sites meet the function they have been created for and leave users satisfied.",
                image: "images/image2.gif", // Source: https://www.pinterest.ca/pin/588704982569774177
                imageAlt: "Animation2",

            },
            {
                content: "Custom Programming: We can also take requests for different coding projects, such as a database, website, windows application, and much more.",
                image: "images/image3.gif", // Source: https://www.pinterest.ca/pin/588704982569774273
                imageAlt: "Animation3",
            }
        ];
        // Add the services to the services div
        for (let service of services) {
            let div = document.createElement("div");
            div.className = "products";

            let p = document.createElement("p");
            p.textContent = service.content;

            let img = document.createElement("img");
            img.src = service.image;
            // Use the imageAlt value, if its undefined use the name of the image file
            img.alt = service.imageAlt || service.image.split("/").pop().split(".")[0];
            // Randomly select whether the image or paragraph is appended first
            if (Math.random() > 0.5) {
                div.appendChild(img);
                div.appendChild(p);
            } else {
                div.appendChild(p);
                div.appendChild(img);
            };

            servicesDiv.appendChild(div);
        }
        document.body.appendChild(servicesDiv);
        break;
    }
    // Content for about.html
    case "about.html": {
        // Create an elem for the header
        let header = document.createElement("h2");
        header.style = "text-align:center";
        header.textContent = "About Us";
        document.body.appendChild(header);

        // Create an elem for the content div
        let contentDiv = document.createElement("div");
        contentDiv.className = "about-us";

        // Create an array for our team
        let team = [{
            name: "Andrew",
            image: "images/andrew.jpg", // Source: https://www.pinterest.ca/pin/588704982569796070
        },
        {
            name: "Yashvi",
            image: "images/Yashvi.jpg", // Source: https://www.pinterest.ca/pin/588704982569796118

        },
        {
            name: "Justin",
            image: "images/Justin.jpg", // Source: https://www.pinterest.ca/pin/588704982569796070
        }];

        for (let member of team) {
            let detailsDiv = document.createElement("div");
            detailsDiv.className = "details";

            let cardDiv = document.createElement("div");
            cardDiv.className = "card";

            let img = document.createElement("img");
            img.src = member.image;
            img.alt = member.name;
            img.style = "width:100%";
            cardDiv.appendChild(img);

            let nameDiv = document.createElement("div");
            nameDiv.className = "container";
            cardDiv.appendChild(nameDiv);

            let nameH2 = document.createElement("h2");
            nameH2.textContent = member.name;
            nameDiv.appendChild(nameH2);

            detailsDiv.appendChild(cardDiv);
            contentDiv.appendChild(detailsDiv);
        }
        document.body.appendChild(contentDiv);
        break;
    }
    // Content for contact.html
    case "contact.html": {
        // Create an elem for the header
        let header = document.createElement("h1");
        header.className = "top-header";
        header.style = "text-align: center";
        header.textContent = "Contact Us";
        document.body.appendChild(header);

        // Create an elem for the contact dev
        let contactDiv = document.createElement("div");
        contactDiv.className = "contact";

        // Create an elem for the contact form
        let contactForm = document.createElement("form");
        contactForm.id = "registration-form";
        contactForm.name = "registration-form";

        // Create an array for the input objects
        let inputs = [{
            id: "inputName",
            name: "Name",
            type: "text",
        },
        {
            id: "inputContactNumber",
            name: "Contact Number",
            type: "text",
        },
        {
            id: "inputEmail",
            name: "Email Address",
            type: "text",
        },
        {
            id: "inputMessage",
            name: "Short Message",
            type: "text",
        }];

        // Add each input object to the form
        for (let inputObj of inputs) {
            let div = document.createElement("div");
            div.className = "form-group col-md-6";

            let label = document.createElement("label");
            label.setAttribute("for", inputObj.id);
            label.textContent = inputObj.name;
            div.appendChild(label);

            let input = document.createElement("input");
            input.type = inputObj.type;
            input.className = "form-control";
            input.id = inputObj.id;
            input.placeholder = inputObj.name;
            div.appendChild(input);

            contactForm.appendChild(div);
        }

        // Create an elem for the submit button
        let submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = "btn btn-primary";
        submitButton.textContent = "Submit";
        // Add the button to the form
        contactForm.appendChild(submitButton);

        // Add the contact form to the contact div and the body
        contactDiv.appendChild(contactForm);
        document.body.appendChild(contactDiv);
        break;
    }
    case "login.html": {
        let loginDivMain = document.createElement("div");
        loginDivMain.id = "UserRegister";

        // Create an element for the contact form
        let loginForm = document.createElement("form");
        loginForm.id = "registration-form";
        loginForm.name = "registration-form";
        loginForm.className = "row g-3";

        // create the header
        let loginHeader = document.createElement("h1");
        loginHeader.innerHTML = "Login";
        loginForm.appendChild(loginHeader);

        // Create an array for the input objects
        let inputs = [{
            id: "inputUserName",
            name: "UserName",
            type: "text",
            iconClass: "fa fa-user",
        },
        {
            id: "inputPassword",
            name: "Password",
            type: "password",
            iconClass: "fa fa-lock",
        }];

        // Add each input object to the form
        for (let inputObj of inputs) {
            let div = document.createElement("div");
            div.className = "form-group col-12";
            let icon = document.createElement("i");

            // add the icon.
            icon.className = inputObj.iconClass;
            icon.setAttribute("aria-hidden", "true");
            div.appendChild(icon);

            let label = document.createElement("label");
            label.setAttribute("for", inputObj.id);
            label.textContent = inputObj.name;
            div.appendChild(label);

            let input = document.createElement("input");
            input.type = inputObj.type;
            input.className = "form-control";
            input.id = inputObj.id;
            input.placeholder = inputObj.name;
            div.appendChild(input);

            loginForm.appendChild(div);
        }

        // Create an elem for the submit button
        let submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.id = "loginButton";
        submitButton.className = "btn btn-primary";
        submitButton.textContent = "Login";
        // Add the button to the form
        loginForm.appendChild(submitButton);

        // Create a paragraph for the login link
        let registerLinkParagraph = document.createElement("p");
        registerLinkParagraph.innerHTML = 'Do not have an account? <a href="./register.html">Register Here!</a>';

        loginForm.appendChild(registerLinkParagraph);
        loginDivMain.appendChild(loginForm);
        document.body.appendChild(loginDivMain);

        break;
    }
    case "register.html": {

        let registerDivMain = document.createElement("div");
        registerDivMain.id = "UserRegister";

        // Create an elem for the contact form
        let registerForm = document.createElement("form");
        registerForm.id = "registration-form";
        registerForm.name = "registration-form";
        registerForm.className = "row g-3";


        let registerHeader = document.createElement("h1");
        registerHeader.innerHTML = "Register";
        // Create a paragraph for the login link
        let registerDescription = document.createElement("p");
        registerDescription.innerHTML = "Create your own account  It's free and it only takes a minute";
        registerForm.appendChild(registerHeader);
        registerForm.appendChild(registerDescription);

        let errorParagraph = document.createElement("p");
        errorParagraph.id = "ErrorMessage";
        errorParagraph.style.display = "none";
        registerForm.appendChild(errorParagraph);

        // Create an array for the input objects
        let inputs = [{
            id: "inputFirstName",
            name: "First Name",
            type: "text",
            colClass: "col-md-6",
        },
        {
            id: "inputLastName",
            name: "Last Name",
            type: "text",
            colClass: "col-md-6",
        },
        {
            id: "inputEmail",
            name: "Email Address",
            type: "email",
            colClass: "col-12",
        },
        {
            id: "inputPassword",
            name: "Password",
            type: "password",
            colClass: "col-12",
        },
        {
            id: "inputConfirmPassword",
            name: "Confirm Password",
            type: "password",
            colClass: "col-12",
        }];

        // Add each input object to the form
        for (let inputObj of inputs) {
            let div = document.createElement("div");
            div.className = `form-group ${inputObj.colClass}`;

            let label = document.createElement("label");
            label.setAttribute("for", inputObj.id);
            label.className = inputObj.classes
            label.textContent = inputObj.name;
            div.appendChild(label);

            let input = document.createElement("input");
            input.type = inputObj.type;
            input.className = "form-control";
            input.id = inputObj.id;
            input.placeholder = inputObj.name;
            div.appendChild(input);

            registerForm.appendChild(div);
        }

        // Create an element for the submit button
        let submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = "btn btn-primary";
        submitButton.textContent = "Register";

        // Add the button to the form
        registerForm.appendChild(submitButton);

        // Create a paragraph for the login link
        let loginLinkParagraph = document.createElement("p");
        loginLinkParagraph.innerHTML = 'Already Have an account? <a href="./login.html">Login Here!</a>';

        registerForm.appendChild(loginLinkParagraph);

        // Create an elem for the error messages div
        let errorMessagesDiv = document.createElement("div");
        errorMessagesDiv.id = "ErrorMessage";
        errorMessagesDiv.style.display = "none"; // Initially hide the error messages

        // Append the error messages div to the body
        document.body.appendChild(errorMessagesDiv);

        // Validate First Name and Last Name length on form submission
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Clear previous error messages
            errorMessagesDiv.innerHTML = "";
            errorMessagesDiv.style.display = "none";

            let firstNameInput = document.getElementById("inputFirstName");
            let lastNameInput = document.getElementById("inputLastName");
            let emailAddressInput = document.getElementById("inputEmail");
            let symbol = "@";
            let passwordInput = document.getElementById("inputPassword");
            let passwordConfirmInput = document.getElementById("inputConfirmPassword");

            // Validate First Name length
            if (firstNameInput.value.length < 2) {
                displayError("First Name must be at least 2 characters.");
                return;
            }
            // Validate Last Name length
            if (lastNameInput.value.length < 2) {
                displayError("Last Name must be at least 2 characters.");
                return;
            }
            // Validate Email Address @ Symbol
            if (!emailAddressInput.value.includes(symbol)) {
                displayError("Email Address must contain '@'.");
                return;
            }
            // Validate Email Address Length
            if (emailAddressInput.value.length <= 8) {
                displayError("Email Address cannot be less than 8 characters.");
                return;
            }
            // Validate Password Length
            if (passwordInput.value.length < 6) {
                displayError("Your password must be greater than 6 characters.");
                return;
            }
            // Validate Password matches Confirm Password
            if (passwordInput.value !== passwordConfirmInput.value) {
                displayError("Password and Confirm Password must be the same.");
                return;
            }
            // If there is no validation errors...
            // Clear the error messages
            displayError();
            // Create an instance of the User class
            let user = new User(
                firstNameInput.value,
                lastNameInput.value,
                `${firstNameInput.value}.${lastNameInput.value}`,
                emailAddressInput.value,
                passwordInput.value
            );
            // Display the User object in console
            console.log(user);
        });

        function displayError(errorMessage) {
            // Display error message in the div      
            errorParagraph.textContent = errorMessage;
            errorParagraph.style.display = "block";
        }

        registerDivMain.appendChild(registerForm);
        document.body.appendChild(registerDivMain);
        break;

    }
    // Content for all other pages
    default: {
        let div = document.createElement("div");
        div.className = "container";

        let header = document.createElement("h2");
        header.style = "text-align:center";
        header.textContent = "Work-in-Progress (WIP)"

        let span = document.createElement("span");
        span.textContent = "This page is coming soon";

        div.appendChild(header);
        div.appendChild(span);

        document.body.appendChild(div);
    }
}

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
humanResourcesLink.href = "wip.html";
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

// 4b. When the user clicks on the submit button, output their info to the console
if (currentPage == "contact.html") {
    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault()

        setTimeout(() => {
            window.location.replace("index.html")
        }, 3000);

        let name = document.getElementById("inputName");
        let contactNumber = document.getElementById("inputContactNumber");
        let email = document.getElementById("inputEmail");
        let message = document.getElementById("inputMessage");

        console.log(`!! Form Submission !!\nName: ${name.value}\nContact Number: ${contactNumber.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
    })
};

// It will add the username after the contact us link when the login button is clicked.
if (currentPage == "login.html") {
    document.getElementById("loginButton").addEventListener("click", function (e) {
        e.preventDefault();
        var username = document.getElementById("inputUserName").value;
        const user = document.createElement("li");
        user.className = "nav-item";
        const userNamesLink = document.createElement("a");
        userNamesLink.className = "nav-link";
        userNamesLink.innerHTML = "<li></li>";
        userNamesLink.firstChild.textContent = username;
        user.appendChild(userNamesLink);
        const contactUsLink = Array.from(navbarLinks).find(link => link.textContent.trim() == "LoginIn/LogOut");
        navbarUl.insertBefore(user, contactUsLink.parentNode)

    });
};


