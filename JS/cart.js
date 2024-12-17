// /* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelectorAll(".plus");
// let num=document.querySelectorAll(".num");
// let cunt=0;
// plus.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//         cunt++;
//         const count=JSON.parse(localStorage.getItem("count")) || "";
//         count.push(cunt);
//         localStorage.setItem("count",JSON.stringify(count));
//         // num.forEach((add1)=>{
//         // add1.innerHTML=count;})
//         // Span_Cart.innerHTML=count;
//         Span_Cart.innerHTML=count;
//         console.log(count);
//     }) 
// })

// /* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelectorAll(".plus");
// let num=document.querySelectorAll(".num");
// const Span_Cart=document.querySelector(".Span_Cart");
// let cunt=0;
// plus.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//         cunt++;
//         localStorage.setItem("count",JSON.stringify(cunt));
//         const count=JSON.parse(localStorage.getItem("count"));
//         // count.push(cunt);
//         // num.forEach((add1)=>{
//         // add1.innerHTML=count;})
//         // Span_Cart.innerHTML=count;
//         Span_Cart.innerHTML=count;
//         console.log(count);
//     }) 
// })


// const cartBag=JSON.parse(localStorage.getItem("count"));

// minus.addEventListener('click', ()=>{
//     if(count>0){
//         count--;
//         num.innerHTML=count;
//         // Span_Cart.innerHTML=count;
//     }
// })

/* single_product_sliger(+,-) end  */


// const shopping=document.querySelector(".shopping");//cart icon
// const cart_info=document.querySelector(".cart_info table");//list 
// const listCard=document.querySelector("#cart-table"); //products in cart
// const total =document.querySelector(".total");
// const quantity =document.querySelector(".Span_Cart");

// let products=[
//     {
//         id:1,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:2,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:3,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:4,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:5,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:6,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:7,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:8,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:9,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:10,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:11,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:12,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
// ]

// let listCards=[
//     {
//         id:1,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     }
// ];

// const addToCard=(key)=>{
//     if(listCards[key]==null){
//         listCards[key]=JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity=1;
//     }
//     relaodCard();
// }
// function relaodCard(){
//     // listCard.innerHTML="";
//     console.log("lk");
//     let count=0;
//     let totalPrice=0;
//     listCards.forEach((value,key)=>{
//         totalPrice=totalPrice+value.price;
//         count=value.quantity;

//         if(value !=null){
//             let newDiv=document.createElement("tr");
//             newDiv.innerHTML=`
//                 <td><button class="delete" onclick="del()">Delete</button></td>
//                 <td class="product-image"><img src="${value.images}" alt=""></td>
//                 <td>${value.name}</td>
//                 <td>${value.price}</td>
//                 <td>
//                     <div class="add">
//                         <button class="minus" onclick="changeQuantity(${key},${value.quantity-1})">-</button>
//                         <button class="num">${value.quantity}</button>
//                         <button class="plus" onclick="changeQuantity(${key},${value.quantity-1})">+</button>
//                     </div>
//                 </td>
//                 <td class="total">${value.price.toLocaleString()}</td>
//             `
//             listCard.appendChild(newDiv);
//         }
//         total.innerText=totalPrice.toLocaleString();
//         quantity.innerText=count;
//     })
// }
// function del(){
//     listCard.removeChild();
//     console.log(5);
// }
// const changeQuantity=(key,quantity)=>{
//     if(quantity==0){
//         delete listCards[key]
//     }
//     else{
//         listCards[key].quantity=quantity;
//         listCards[key].price=quantity*products[key].price;
//     }
//     relaodCard();
// }

const CartItems=document.querySelector("#body-cart-table");
const HeadCartTable=document.querySelector("#head-cart-table");
const update=document.querySelector(".update");
const cartFoot=document.querySelector(".cart-foot");
const empty=document.querySelector(".empty");
// const Span_Cart=document.querySelector(".Span_Cart");
function displayCartItems(){
    const items=JSON.parse(localStorage.getItem("cart"));
    if(items!=null){
    empty.classList.add('display_empty');
    HeadCartTable.innerHTML=`
      <tr>
                    <th>Delete</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
    `;
    update.innerHTML=`<button class="upd-btn" onclick="relaodCard()">Update Cart</button>`;
    cartFoot.innerHTML=`
    <h2 id="cart-total">Cart Total</h2>
                <div class="total-cost">
                    <p>SUB-TOTAL:  <span class="total">$30</span></p>
                    <P>SHIPPING:  <span>FREE SHIPPING</span></P>
                    <p>TOTAL:  <span>$30</span></p>
                </div>
                <div class="checkout">
                    <button id="checkout-btn"   >Checkout</button>
                </div>
    `;
    };
    let a=[];
    let a2=[];
    let cunt=0;
    // let quantity=0
    items.forEach((item ,idx) => {
        const cartItem=document.createElement("tr");
        cartItem.className="cart-item";
        cunt++;
        localStorage.setItem("count",JSON.stringify(cunt));
        if(a.includes(item.id)){cartItem}
        else{
            a.push(item.id);
            // if(a.includes(item.id)){quantity+=parseInt(item.quantity);console.log(typeof(quantity))}
            // console.log(quantity)
            // console.log(item.quantity)
            cartItem.innerHTML=`
            <td><button class="delete" onclick="del(item.id)">Delete</button></td>
            <td class="product-image"><img src="${item.image}" alt=""></td>
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td>
            <div class="add">
            <button class="minus">-</button>
            <button class="num">${item.quantity}</button>
            <button class="plus" onclick="${item.quantity+1}">+</button>
            </div>
            </td>
            <td class="total">${item.price*item.quantity}</td>
            `      
            CartItems.appendChild(cartItem);
        }
        a2.push(item.quantity);
        
    });
        // console.log(a);
        // console.log(a2);
        // function del(){
        //     CartItems.removeChild(a);
        //     console.log(5);
        // }
        return cunt;      
} 
displayCartItems();
// let minus=document.querySelector(".minus");
// let plus=document.querySelectorAll(".plus");
// let num=document.querySelectorAll(".num");
// const Span_Cart=document.querySelector(".Span_Cart");
const count=JSON.parse(localStorage.getItem("count"));
Span_Cart.innerHTML=count;
let cunt=0;
// plus.forEach((add)=>{
    function del(){
    // add.addEventListener('click', ()=>{
        cunt++;
        // console.log((JSON.parse(localStorage.getItem("cart"))[0].quantity)+1);
        // return JSON.parse(localStorage.getItem("cart"))[0].quantity+1;
        // count.push(cunt);
        // num.forEach((add1)=>{
        // add1.innerHTML=count;})
        // Span_Cart.innerHTML=count;
        // Span_Cart.innerHTML=count;
        // console.log(count);
        }
    // }) }
// 
// console.log(localStorage.getItem('cart.price'))
// console.log();

function delete_item(){
    localStorage.removeItem('cart[0]')
}
