var sizePrice, crustPrice;

function sizeSelect(size){
    this.size=size;
}

function crustSelect(crust){
    this.crust=crust;
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
});