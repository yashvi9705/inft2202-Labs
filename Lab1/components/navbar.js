/*
Lab 1
Group Members:
- Yashvi Patel: 100900705
- Justin Wastle: 
- Andrew Mekhail: 100828858
Date: February 1st, 2024 
*/

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">INFT 2201 - Lab 1</a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="index.html"><i class="fa fa-home"
                            aria-hidden="true"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.html"><i class="fa fa-th" aria-hidden="true"></i>Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="services.html"> <i class="fa fa-bell" aria-hidden="true"> </i>Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html"><i class="fa fa-info-circle" aria-hidden="true"></i>About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html"><i class="fa fa-phone" aria-hidden="true"></i>Contact us</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>`
    }
}

customElements.define("navbar-component", Navbar);