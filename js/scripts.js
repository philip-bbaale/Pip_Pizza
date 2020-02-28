var sizePrice, crustPrice;
function sizeSelect(size){
    this.size=size;
}


$(document).ready(function(){
   $(".check_size").click(function(){
       var selectedSize = $("input[name='size']:checked").val();
       if(selectedSize=='small'){
        sizePrice = 250;
           alert("Your are a - " + selectedSize+" "+sizePrice);
        }
        else if(selectedSize=='medium'){
            sizePrice = 500;
            alert("Your are a - " + selectedSize+sizePrice);
         }
         else if(selectedSize=='large'){
            sizePrice = 1000;
            alert("Your are a - " + selectedSize+sizePrice);
         }
         size=selectedSize;
         console.log(size);
   })

    
});