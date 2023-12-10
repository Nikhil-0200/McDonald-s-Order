let ordBtn = document.getElementsByClassName("order");



function showSelect(){
   let selct = document.getElementById("sel");
    for(let i=0; i<ordBtn.length; i++){
        ordBtn[i].addEventListener("click", function(){
            selct.style.display = "block";
        })
    }
}

function orderFood(){
   let select = document.getElementById("selectedOption");
   let odrfdBtn = document.getElementById("odrfBtn");
   let selectedOpt = "";

   select.addEventListener("change", function(){
    selectedOpt = select.value;
   })

   odrfdBtn.addEventListener("click", function(){
    if(selectedOpt){
        console.log(`This is the Item Seleced ${selectedOpt}`)
        let result = new Promise(function(res, rej){
            setTimeout(function(){
                res("Order Received")
            },2000)
        })

        result.then(function(ans){
            console.log(ans);
        })
        console.log(result);
    }
    else{
        console.log("please select");
    }
   })
    
}


orderFood();
showSelect();