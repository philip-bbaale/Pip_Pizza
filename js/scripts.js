var sizePrice, crustPrice, toppingPrice ;

function sizeSelect(size){
    this.size=size;
}

function crustSelect(crust){
    this.crust=crust;
}

function toppingSelect(topping){
    this.topping=topping;
}

function pizzaNumberSelect(pieces){
    this.pieces=pieces;
}

function finalPrice(){
    var finalPrice = sizeSelect()+crustSelect()+toppingSelect()*pizzaNumberSelect();
    return finalPrice;
}

$(document).ready(function(){


   $(".check_size").click(function(){
       var selectedSize = $("input[name='size']:checked").val();
       if(selectedSize=='small'){
        sizePrice = 250;
        }
        else if(selectedSize=='medium'){
            sizePrice = 500;
         }
         else if(selectedSize=='large'){
            sizePrice = 1000;
         }
         size=selectedSize;
         console.log(size);
   });


    $(".check_crust").click(function(){
        var selectedCrust = $("input[name='crust']:checked").val();
        if(selectedCrust=='thin'){
            crustPrice = 12;
        }
        else if(selectedCrust=='thick'){
            crustPrice = 30;
        }
        else if(selectedCrust=='stuffed'){
            crustPrice = 35;
        }
        else if(selectedCrust=='crispy'){
            crustPrice = 20;
        }
        else if(selectedCrust=='cheese'){
            crustPrice = 25;
        }
        else if(selectedCrust=='gluten'){
            crustPrice = 35;
        }
        crust=selectedCrust;
        console.log(crust);
    });


    $(".check_topping").click(function(){
        var selectedTopping = $("input[name='topping']:checked").val();
        if(selectedTopping=='pepperoni'){
            toppingPrice = 100;
        }
        else if(selectedTopping=='mushrooms'){
            toppingPrice = 75;
        }
        else if(selectedTopping=='onions'){
            toppingPrice = 50;
        }
        else if(selectedTopping=='sausage'){
            toppingPrice = 95;
        }
        else if(selectedTopping=='bacon'){
            toppingPrice = 110;
        }
        else if(selectedTopping=='extra_cheese'){
            toppingPrice = 50;
        }
        else if(selectedTopping=='black_olives'){
            toppingPrice = 80;
        }
        else if(selectedTopping=='pineapple'){
            toppingPrice = 75;
        }
        else if(selectedTopping=='green_peppers'){
            toppingPrice = 65;
        }
        else if(selectedTopping=='spinach'){
            toppingPrice = 60;
        }
        topping=selectedTopping;
        console.log(topping);
    });


    $("input[type='number']").inputSpinner();
    $(".pizza_number").click(function(){
        var slelctedPizzaNumber = $("input[type='number']").inputSpinner().val();
        pieces=slelctedPizzaNumber;
        console.log(pieces);
    });
    
    $("#price_show1").text(finalPrice());


});