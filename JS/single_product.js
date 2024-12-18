/* Additional information start     */
let add1=document.querySelector(".span1");
let add2=document.querySelector(".span2");
let description_info =document.querySelector(".description_info");
let add_table =document.querySelector(".add_table");

let span1=document.querySelector(".span1");
let span2=document.querySelector(".span2");
add1.addEventListener("click" ,()=>{
    description_info.classList.add("displayed");
    description_info.classList.remove("hidden");
    add_table.classList.add("hidden");
    span1.classList.add("hover");
    span2.classList.remove("hover");
})
add2.addEventListener("click" ,()=>{
    add_table.classList.add("displayed");
    add_table.classList.remove("hidden");
    description_info.classList.add("hidden");
    span2.classList.add("hover");
    span1.classList.remove("hover");
})
/* Additional information end     */

/* single_product_sliger(+,-) start  */
let minus=document.querySelector(".minus");
let plus=document.querySelector(".plus");
let num=document.querySelector(".num");
let count=0;

plus.addEventListener('click', ()=>{
    count++;
    num.innerHTML=count;
    // Span_Cart.innerHTML=count;
})
minus.addEventListener('click', ()=>{
    if(count>0){
        count--;
        num.innerHTML=count;
        // Span_Cart.innerHTML=count;
    }
})

/* single_product_sliger(+,-) end  */
 
/* single_product_slider start  */
let main_image=document.querySelector(".main_image");
let slider_container=document.querySelector(".slider_container");
let formclose =document.querySelector('#form-close');
main_image.addEventListener('click',() =>{
    slider_container.classList.add('active');   
})
formclose.addEventListener('click',() =>{
    slider_container.classList.remove('active');   
})

/* single_product_slider end  */

// change the src of images start
const single_image=document.querySelectorAll(".single_image");
let name=document.querySelector(".name");
let new_price=document.querySelector(".new");
const ProductContain=JSON.parse(localStorage.getItem("ProductsItem"));
function src_of_img(){
ProductContain.forEach(item => {
   if(item.product==1){
        single_image.forEach((button)=>{
        button.src="../images/product-image-1.jpg"});
        name.innerHTML="Paper Pouch";
        new_price.innerHTML="$46.00";
        image="../images/product-image-1.jpg";
        id="1";
        title="Paper Pouch";
        price="46.00";
        quantity="1";
   }
   else if(item.product==2){
        single_image.forEach((button)=>{
        button.src="../images/product-image-2.jpg"});
        name.innerHTML="Paper Bag";
        new_price.innerHTML="$46.00";
        image="../images/product-image-2.jpg";
        id="2";
        title="Paper Bag";
        price="46.00";
        quantity="1";
   }
   else if(item.product==3){
        single_image.forEach((button)=>{
        button.src="../images/product-image-3-633x633.jpg"});
        name.innerHTML="Paper Pouch";
        new_price.innerHTML="$46.00";
        image="../images/product-image-3-633x633.jpg";
        id="3";
        title="Paper Pouch";
        price="46.00";
        quantity="1";
   }
   else if(item.product==4){
        single_image.forEach((button)=>{
        button.src="../images/product-image-4-633x633.jpg"});
        name.innerHTML="Coffee Pot";
        new_price.innerHTML="$46.00";
        image="../images/product-image-4-633x633.jpg";
        id="4";
        title="Coffee Pot";
        price="46.00";
        quantity="1";
   }
   else if(item.product==5){
        single_image.forEach((button)=>{
        button.src="../images/product-image-7-1-550x550.jpg"});
        name.innerHTML="Choco Bites";
        new_price.innerHTML="$46.00";
        image="../images/product-image-7-1-550x550.jpg";
        id="5";
        title="Choco Bites";
        price="46.00";
        quantity="1";
   }
   else if(item.product==6){
        single_image.forEach((button)=>{
        button.src="../images/product-image-6-633x633.jpg"});
        name.innerHTML="Paper Cup";
        new_price.innerHTML="$46.00";
        image="../images/product-image-6-633x633.jpg";
        id="6";
        title="Paper Cup";
        price="46.00";
        quantity="1";
   }
   else if(item.product==7){
        single_image.forEach((button)=>{
        button.src="../images/product-image-8-1-633x633.jpg"});
        name.innerHTML="Ground Coffee";
        new_price.innerHTML="$46.00";
        image="../images/product-image-8-1-633x633.jpg";
        id="7";
        title="Ground Coffee";
        price="46.00";
        quantity="1";
   }
   else if(item.product==8){
        single_image.forEach((button)=>{
        button.src="../images/product-image-9-1-633x633.jpg"});
        name.innerHTML="Moka Pot";
        new_price.innerHTML="$46.00";
        image="../images/product-image-9-1-633x633.jpg";
        id="8";
        title="Moka Pot";
        price="46.00";
        quantity="1";
   }
   else if(item.product==9){
        single_image.forEach((button)=>{
        button.src="../images/product-image-10-1-633x633.jpg"});
        name.innerHTML="Cafe Bags";
        new_price.innerHTML="$46.00";
        image="../images/product-image-10-1-633x633.jpg";
        id="9";
        title="Cafe Bags";
        price="46.00";
        quantity="1";
   }
   else if(item.product==10){
        single_image.forEach((button)=>{
        button.src="../images/product-image-11-1-633x633.jpg"});
        name.innerHTML="Tea Pot";
        new_price.innerHTML="$46.00";
        image="../images/product-image-11-1-633x633.jpg";
        id="10";
        title="Tea Pot";
        price="46.00";
        quantity="1";
   }
   else if(item.product==11){
        single_image.forEach((button)=>{
        button.src="../images/product5.jpg"});
        name.innerHTML="Paper Pouch";
        new_price.innerHTML="$46.00";
        image="../images/product5.jpg";
        id="11";
        title="Paper Pouch";
        price="46.00";
        quantity="1";
   }
   else{
        single_image.forEach((button)=>{
        button.src="../images/product-image-12-633x633.jpg"});
        name.innerHTML="Recycled Bags";
        new_price.innerHTML="$46.00";
        image="../images/product-image-12-633x633.jpg";
        id="12";
        title="Recycled Bags";
        price="46.00";
        quantity="1";
   }
   
    
})
return{id,title,image,price,quantity}}
src_of_img();
// change the src of images end
// let cunt=0;
// // plus.forEach((add)=>{
//     function del(){
//     // add.addEventListener('click', ()=>{
//         cunt++;
//         // localStorage.setItem("Products_Item",JSON.stringify(Products_Item));
//         const count=JSON.parse(localStorage.getItem("Products_Item"));
//         // console.log((JSON.parse(localStorage.getItem("cart"))[0].quantity)+1);
//         // return JSON.parse(localStorage.getItem("cart"))[0].quantity+1;
//         // count.push(cunt);
//         // num.forEach((add1)=>{
//         // add1.innerHTML=count;})
//         // Span_Cart.innerHTML=count;
//         console.log(JSON.parse(localStorage.getItem("Products_Item")));
//         Span_Cart.innerHTML=count;
//         // console.log(count);
//         }
//     // }) }
// // })

// del();

// window.onload=()=>{JSON.parse(localStorage.clear())}
const ADD_TO_CART=document.querySelectorAll(".add_to_cart");
ADD_TO_CART.forEach((button)=>{
    button.addEventListener("click",()=>{
     //    const id=button.getAttribute("data-id");
     //    const title=button.getAttribute("data-title");
     //    const image=button.getAttribute("data-image");
     //    const price=button.getAttribute("data-price");
     //    const quantity=button.getAttribute("data-quantity");
        const cartItem=src_of_img();
        const cart=JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart",JSON.stringify(cart));
    });
});


// get the src of images start
const pic=document.querySelectorAll(".pic");
pic.forEach((button)=>{
    button.addEventListener("click",()=>{
        let product=button.getAttribute("data-product");
        let quantity=button.getAttribute("data-quantity");
        let Products={product,quantity};
        const ProductsItem=JSON.parse(localStorage.getItem("ProductsItem")) || [];
        ProductsItem.push(Products);
        localStorage.setItem("ProductsItem",JSON.stringify(ProductsItem));
    });
});
// console.log(localStorage.getItem("ProductsItem"))
// get the src of images end
