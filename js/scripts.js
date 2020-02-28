var sizePrice, crustPrice, toppingPrice;

function sizeSelect(size){
    this.size=size;
}

function crustSelect(crust){
    this.crust=crust;
}

function toppingSelect(topping){
    this.topping=topping;
}

$(document).ready(function(){


   $(".check_size").click(function(){
       var selectedSize = $("input[name='size']:checked").val();
       if(selectedSize=='small'){
        sizePrice = 250;
           alert(selectedSize+" "+sizePrice);
        }
        else if(selectedSize=='medium'){
            sizePrice = 500;
            alert(selectedSize+sizePrice);
         }
         else if(selectedSize=='large'){
            sizePrice = 1000;
            alert(selectedSize+sizePrice);
         }
         size=selectedSize;
         console.log(size);
   });


    $(".check_crust").click(function(){
        var selectedCrust = $("input[name='crust']:checked").val();
        if(selectedCrust=='thin'){
            crustPrice = 12;
            alert(selectedCrust+crustPrice);
        }
        else if(selectedCrust=='thick'){
            crustPrice = 30;
            alert(selectedCrust+crustPrice);
        }
        else if(selectedCrust=='stuffed'){
            crustPrice = 35;
            alert(selectedCrust+crustPrice);
        }
        else if(selectedCrust=='crispy'){
            crustPrice = 20;
            alert(selectedCrust+crustPrice);
        }
        else if(selectedCrust=='cheese'){
            crustPrice = 25;
            alert(selectedCrust+crustPrice);
        }
        else if(selectedCrust=='gluten'){
            crustPrice = 35;
            alert(selectedCrust+crustPrice);
        }
        crust=selectedCrust;
        console.log(crust);
    });


    $(".check_topping").click(function(){
        var selectedTopping = $("input[name='topping']:checked").val();
        if(selectedTopping=='pepperoni'){
            toppingPrice = 100;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='mushrooms'){
            toppingPrice = 75;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='onions'){
            toppingPrice = 50;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='sausage'){
            toppingPrice = 95;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='bacon'){
            toppingPrice = 110;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='extra_cheese'){
            toppingPrice = 50;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='black_olives'){
            toppingPrice = 80;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='pineapple'){
            toppingPrice = 75;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='green_peppers'){
            toppingPrice = 65;
            alert(selectedTopping+toppingPrice);
        }
        else if(selectedTopping=='spinach'){
            toppingPrice = 60;
            alert(selectedTopping+toppingPrice);
        }
        topping=selectedTopping;
    });
});