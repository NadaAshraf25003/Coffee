let landing = document.querySelector(".landing");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let videoElement = document.getElementById("background-video"); 

let images = [
    "images/pexels-pixabay-260922.jpg",
    "images/pexels-apgpotr-702251.jpg", 
    "images/pexels-apgpotr-683039.jpg" 
];

let currentIndex = 0; 


function updateBackground() {
    if (images[currentIndex].endsWith('.mp4')) {
        // If the current item is a video
        videoElement.src = images[currentIndex];
        videoElement.style.display = "block"; // Show the video
        videoElement.play(); // Play the video
        landing.style.backgroundImage = ""; // Clear the background image
    } else {
        // If the current item is an image
        landing.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${images[currentIndex]})`;
        videoElement.style.display = "none"; // Hide the video
        videoElement.pause(); // Pause the video
    }
}

// Event listener for left arrow
leftArrow.addEventListener("click", function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Go to previous image
    updateBackground();
});

// Event listener for right arrow
rightArrow.addEventListener("click", function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Go to next image
    updateBackground();
});

// Initialize the background image or video
updateBackground();



/* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelector(".plus");
// let num=document.querySelector(".num");
// let ADD_TO_CART=document.querySelectorAll(".ADD_TO_CART");

// //Cart icon
// let Span_Cart=document.querySelector(".Span_Cart");

// let count=0;
// ADD_TO_CART.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//     count++;
//     Span_Cart.innerHTML=count;
// })
// })

// plus.addEventListener('click', ()=>{
//     count++;
//     num.innerHTML=count;
//     Span_Cart.innerHTML=count;
// })
// minus.addEventListener('click', ()=>{
//     if(count>0){
//         count--;
//         num.innerHTML=count;
//         Span_Cart.innerHTML=count;
//     }
// })

/* single_product_sliger(+,-) end  */

// get the src of images start
const pic=document.querySelectorAll(".pic");
pic.forEach((button)=>{
    button.addEventListener("click",()=>{
        let product=button.getAttribute("data-product");
        let quantity=button.getAttribute("data-quantity");
        let Products={product,quantity};
        const ProductsItem=JSON.parse(sessionStorage.getItem("ProductsItem")) || [];
        ProductsItem.push(Products);
        sessionStorage.setItem("ProductsItem",JSON.stringify(ProductsItem));
    });
});
console.log(sessionStorage.getItem("ProductsItem"))
// get the src of images end


// Add to Cart start
// window.onload=()=>{JSON.parse(localStorage.clear())};
const ADD_TO_CART=document.querySelectorAll(".ADD_TO_CART");
ADD_TO_CART.forEach((button)=>{
    button.addEventListener("click",()=>{
        const id=button.getAttribute("data-id");
        const title=button.getAttribute("data-title");
        const image=button.getAttribute("data-image");
        const price=button.getAttribute("data-price");
        const quantity=button.getAttribute("data-quantity");
        const cartItem={id,title,image,price,quantity};
        const cart=JSON.parse(sessionStorage.getItem("cart")) || [];
        cart.push(cartItem);
        sessionStorage.setItem("cart",JSON.stringify(cart));
    });
});
// Add to Cart end


// // Dark mode start 
// const DarkBtn=document.querySelector("#DarkBtn");
// const Section2=document.querySelector(".Section2");
// const Section4=document.querySelector(".Section4");
// DarkBtn.addEventListener("click",()=>{
//     Section4.classList.toggle("DarkBtn_toggle");
// })
// // Dark mode end
