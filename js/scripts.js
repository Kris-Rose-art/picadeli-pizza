function dropdown() {
    var pizza = document.getElementById("dropdown");
    var displayText = pizza.options[pizza.selected].text();
}
function getPizza(size, toppings, crust) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
}
var myToppings = ["Hawaiian", "meatdeluxe", "periperi-chicken", "bbq steak", "veg tikka", "boerewors"];
var myCrust = ["crispy", "stuffed", "gluten-free"];
var mySize = ["small", "large", "medium"];

function submitForm(event) {
        var form = new FormData(event.target)
        var mySize = $("#dropdown option:select").value();
        var myToppings = $("#toppings option:select").value();
        var myCrust = $("#crust option:select").value();
        var price = $("input[type=text]#quantity").value();

    if (mySize === "small") {
        var add = function(toppingsPriceSmall, crustPriceSmall) {
        return (toppingsPriceSmall + crustPriceSmall)
        };
        var result = add(toppingsPriceSmall + crustPriceSmall);
        var toppingsPriceSmall = 300;
        var crustPriceSmall = 300;
        
        console.log ("result")
    } 
    else if (mySize==="medium") {
        var add = function(toppingsPriceMedium, crustPriceMedium) {
        return (parseInt(toppingsPriceMedium + crustPriceMedium))
        };
        var result = add(toppingsPriceMedium + crustPriceMedium)
        var toppingsPriceMedium = 400;
        var crustPriceMedium = 400;
        alert(result);

    }else if (mySize==="large") {
        var add = function(toppingsPriceLarge, crustPriceLarge) {
        return (parseInt(toppingsPriceLarge + crustPriceLarge))
        
        };
        var result = add(toppingsPriceLarge, crustPriceLarge);
        var toppingsPriceMedium = 500;
        var crustPriceMedium = 500;
        alert(result);
    }
    var totalPrice = (parseInt(result * $("input[type=text]#quantity").value()));
    alert("totalPrice")

    event.preventDefault();
}

// switch (mySize) {
//     case "":
//         size_price = 0;
//         console.log (size_price);
//         break;
//     case "large":
//         size_price = 1000;
//         console.log (size_price);
//         break;
//     case "medium":
//         size_price = 800;
//         console.log (size_price);
//         break; 
//     case "small":
//         size_price = 600;
//         console.log (size_price);
//         break;
//     default: console.log ("Please pick a size.");    
// }
// switch (myToppings) {
//     case "0":
//         toppings_price = 0;
//         console.log (toppings_price);
//         break;
//     case "hawaiian":
//         toppings_price = 300;
//         console.log (toppings_price);
//         break;
//     case "meatdeluxe":
//         toppings_price = 400;
//         console.log (toppings_price);
//         break; 
//     case "periperi-chicken":
//         toppings_price = 300;
//         console.log (toppings_price);
//         break;
//     case "bbq steak":
//         toppings_price = 300;
//         console.log (toppings_price);
//         break;
//     case "veg tikka":
//         toppings_price = 400;
//         console.log (toppings-price);
//         break; 
//     case "boerewors":
//         toppings_price = 300;
//         console.log (toppings_price);
//         break;
        
//     default: console.log ("error");    
// }
// switch (myCrust) {
//     case "0":
//         crust_price = 0;
//         console.log (crust_price);
//         break;
//     case "crispy":
//         crust_price = 300;
//         console.log (crust_price);
//         break;
//     case "stuffed":
//         crust_price = 400;
//         console.log (crust_price);
//         break; 
//     case "gluten-free":
//         crust_price = 300;
//         console.log (crust_price);
//         break;
//     default: console.log ("error"); 
// }
// if ((mySize == "0") && (myToppings == "0") && (myCrust == "0")) {
//     alert("Please make your order")
// }else{

//     // $(parseInt("input[type=text]#price").value(total))
//     alert("bleh bleh bleh")
// }
// totalPrice = total * ("input[type=text]#quantity").value
// total = toppings_price + crust_price
// console.log (totalPrice);














// Business logic
// function Pizza(size, crust, toppings) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = toppings;
// }
// $(".submit").click(function(){ 
//     let flavour = $(".flavour option:selected").val();
//     let size = $("#size option:selected").val();
//     let crust = $("#crust option:selected").val();
//     let topping = $("#toppings option:selected").val();
//     let number = $("#number").val();
//     console.log(size);

// })
// let price, totalPrice;
// switch(flavour) {
//     case flavour = "hawaiian":
//         switch(size) {
//             case size = "small":
//                         price = 400;
//                         if(crust === "crispy")
//                 }
//         }
// }
// var pizzaSize = [small, medium, large];
// var small = {name: "small", price: 600 };
// var medium = {name: "medium", price: 800 };
// var large = {name: "large", price: 1000 };

// var pizzaCrust = [crispy, stuffed, glutenFree];
// var crispy = {name: "crispy", prices: 300, 400, 500 };
// var stuffed = {name: "stuffed", prices: 250, 350, 450 };
// var glutenFree = {name: "gluten-free", prices: 350, 450, 550 };1

// var size = $("input:radio[name=size]:checked").val();
// var crust = $("input:radio[name=crust]:checked").val();
// var toppings = $("input:radio[name=toppings]:checked").val();
// function submitForm(event) {
//     $(document).ready(function() {
//         $("#new-pizza").click(function(event) {
//             event.preventDefault();
//             var form = new formData(event.target);
//             var size = $("input:radio[name=size]:checked").val();
//             var crust = $("input:radio[name=crust]:checked").val();
//             var toppings = $("input:radio[name=toppings]:checked").val();

//             var newPizza = new Pizza(size, crust, toppings);

//             var crust = [crispy, stuffed, gluten-free];
//             if($("input:radio[name=crust]:checked").val() === "crispy" && $("input:radio[name=size]:checked").val() === "small" && $("input:radio[name=toppings]:checked").val() === "hawaiian") {
//                 alert("your pizza costs ksh 600");
//             } 
                
            
//         });
//     });
// }        
// $(".submit").click(function() {
//     alert("your pizza will be delivered");
// })