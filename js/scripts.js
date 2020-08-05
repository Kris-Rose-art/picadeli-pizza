function dropdown() {
    var pizza = document.getElementById("dropdown");
    var displayText = pizza.options[pizza.selected].text();
}
function getPizza(size, toppings, crust) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
}
function ("button.order").click() {
    let mySize = $("#dropdown option:select").value()
    let myToppings = $("#toppings option:select").value()
    let myCrust = $("#crust option:select").value()
}
switch (mySize) {
    case "0":
        size-price = 0;
        console.log (size-price);
        break;
    case "large":
        size-price = 1000;
        console.log (size-price);
        break;
    case "medium":
        size-price = 800;
        console.log (size-price);
        break; 
    case "small":
        size-price = 600;
        console.log (size-price);
        break;
    default console.log ("error");    
}
switch (myToppings) {
    case "0":
        toppings-price = 0;
        console.log (toppings-price);
        break;
    case "hawaiian":
        toppings-price = 300;
        console.log (toppings-price);
        break;
    case "meatdeluxe":
        toppings-price = 400;
        console.log (toppings-price);
        break; 
    case "periperi-chicken":
        toppings-price = 300;
        console.log (toppings-price);
        break;
    case "bbq steak":
        toppings-price = 300;
        console.log (toppings-price);
        break;
    case "veg tikka":
        toppings-price = 400;
        console.log (toppings-price);
        break; 
    case "boerewors":
        toppings-price = 300;
        console.log (toppings-price);
        break;
        
    default console.log ("error");    
}
switch (myCrust) {
    case "0":
        crust-price = 0;
        console.log (crust-price);
        break;
    case "crispy":
        crust-price = 300;
        console.log (crust-price);
        break;
    case "meatdeluxe":
        crust-price = 400;
        console.log (crust-price);
        break; 
    case "periperi-chicken":
        crust-price = 300;
        console.log (crust-price);
        break;
    default console.log ("error"); 














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