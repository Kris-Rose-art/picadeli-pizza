//contructor function
var size, crust, toppings, number;
const total = 0;
function Pizza(pizzaSize, pizzaCrust, pizzaToppings, numberOfPizza) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.numberOfPizza = number;
}
​//user interface
$(document).ready(function () {
​   $('button.order').click(function () {
        event.preventDefault();
        var pizzaSize = parseInt($("select#size").val());
        var pizzaCrust = parseInt($("select#crust").val());
        var pizzaToppings = parseInt($("select#toppings").val());
        var numberOfPizza = parseInt($("input#quantity").val());
        console.log(pizzaSize, pizzaCrust, pizzaToppings, numberOfPizza)
​        var getPizza = new Pizza(pizzaSize, pizzaCrust, pizzaToppings, numberOfPizza)
        console.log(getPizza)
​        var total = (pizzaSize + pizzaCrust + pizzaToppings) * numberOfPizza;
​        var pizzaSizeChoice = $("#size option:selected").text();
        var pizzaCrustChoice = $("#crust option:selected").text();
        var pizzaToppingsChoice = $("#toppings option:selected").text();
        console.log(pizzaSizeChoice, pizzaCrustChoice, pizzaToppingsChoice)
​        console.log$(parseInt("input[type=text]#price").value(total))

        //();
    })
    
})
​//prototype
Pizza.prototype.total = function () {
    return getPizza.total;
}
​
