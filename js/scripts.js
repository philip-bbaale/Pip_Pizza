var sizePrice, crustPrice, toppingPrice ;

function sizeSelect(sizePricing,sizeSlecting){
    this.sizePricing=sizePricing;
    this.sizeSlecting=sizeSlecting;
}

function crustSelect(crustPricing,crustSelecting){
    this.crustPricing=crustPricing;
    this.crustSelecting=crustSelecting
}

function toppingSelect(toppingPricing,toppingSelecting){
    this.toppingPricing=toppingPricing;
    this.toppingSelecting=toppingSelect;
}

function pizzaNumberSelect(pieces){
    this.pieces=pieces;
}

function finalPriceSubmition(finalPrice){
    this.finalPrice=finalPrice;
    return finalPrice;
}

function finalPriceDelivery(deliveryFinalPrice){
    this.deliveryFinalPrice=deliveryFinalPrice;
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
         sizePricing = sizePrice;
         sizeSlecting = selectedSize;
         $("#price_show1").text(sizePricing);
         console.log(sizePricing);
         console.log(sizeSlecting)
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
        crustPricing = crustPrice;
        crustSelecting = selectedCrust;
        $("#price_show1").text(sizePricing+crustPricing);
        console.log(crustPricing);
        console.log(crustSelecting);
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
        toppingPricing = toppingPrice;
        toppingSelecting = selectedTopping;
        $("#price_show1").text(sizePricing+crustPricing+toppingPricing);
        console.log(toppingPricing);
        console.log(toppingSelecting);
    });


    $("#pizza_number").change(function(){
        var selectedPizzaNumber = $("#pizza_number").val();
        pieces = selectedPizzaNumber;
        $("#price_show1").text((sizePricing+crustPricing+toppingPricing)*pieces);
        console.log(pieces);
    });

    $(".open").click(function(){
        var allPrice = ((sizePricing+crustPricing+toppingPricing)*pieces);
        finalPrice = allPrice;
        //finalPrice = new finalPriceSubmition(finalPrice);
        console.log(finalPrice);

    });

   $("#delivery_no").click(function(){
    alert("This is your reciept, take a screenshot of it and diaplay it at the counter of Pip Pizza.\n Your pizza order was.\n"+sizeSlecting+"@: "+sizePricing+"\n"+crustSelecting+"@: "+crustPricing+"\n"+toppingSelecting+"@: "+toppingPricing+"\n"+"Number of pizza's: "+pieces+"\n"+"Your total cost is. KCS: "+finalPrice+"\nThank YOu.");
   });

   $("#delivery_yes").click(function(){
    var deliveryAddress = prompt("Note: Delivery will be KCS:500 and 200+ per km.!\n Please fill your delivery address.");
    var addingDelivery = finalPrice+500;
    deliveryFinalPrice=addingDelivery;
    console.log(deliveryFinalPrice);
    console.log(deliveryAddress);
    alert("Your order will be deliverd at: "+deliveryAddress+"\n"+"Please call: 076522631 for confirmation.\n Your pizza order was.\n"+sizeSlecting+"@: "+sizePricing+"\n"+crustSelecting+"@: "+crustPricing+"\n"+toppingSelecting+"@: "+toppingPricing+"\n"+"Number of pizza's: "+pieces+"\nDelivery charge@: 500\n"+"Your total cost is. KCS: "+deliveryFinalPrice+"\n Please keep a screenshot of this receipt for confirmation on delivery. Thank YOu.");
   });
});