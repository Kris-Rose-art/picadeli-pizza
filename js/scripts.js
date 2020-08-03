// Business logic
function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
var pizzaSize = [small, medium, large];
var small = {name: "small", price: 600 };
var medium = {name: "medium", price: 800 };
var large = {name: "large", price: 1000 };

var pizzaCrust = [crispy, stuffed, glutenFree];
var crispy = {name: "crispy", prices: 300, 400, 500 };
var stuffed = {name: "stuffed", prices: 250, 350, 450 };
var glutenFree = {name: "gluten-free", prices: 350, 450, 550 };1

var pizzaSize = $("input:radio[name=size]:checked").val();