// Toggle Active Class on Navigation Links
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Smooth Scroll for Anchor Links (if applicable)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Animate Logo on Hover
const logo = document.querySelector(".logo a");
if (logo) {
    logo.addEventListener("mouseenter", () => {
        logo.style.transform = "scale(1.1)";
        logo.style.transition = "transform 0.3s ease-in-out";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "scale(1)";
    });
}

// Show a Message if No Products are Loaded
const productList = document.querySelector(".product-list");
if (productList && productList.children.length === 0) {
    const noProductsMessage = document.createElement("p");
    noProductsMessage.textContent = "No products available at the moment.";
    noProductsMessage.style.color = "#D4AF37";
    noProductsMessage.style.textAlign = "center";
    noProductsMessage.style.marginTop = "20px";
    productList.appendChild(noProductsMessage);
}
