let ordBtn = document.getElementsByClassName("order");

let overLap = document.getElementById("overlap");
let ordImg = document.createElement("img");

let items = [
    {
        id:1,
        img: "img/ITEMS/BUR1-removebg-preview.png",
        name: "Smoky BBQ Delight",
        price: "1000"
    },
    {
        id:2,
        img: "img/ITEMS/BUR2-removebg-preview.png",
        name: "Mediterranean Lamb Fusion",
        price: "800"
    },
    {
        id:3,
        img: "img/ITEMS/BUR3-removebg-preview.png",
        name: "Veggie Pesto Paradise",
        price: "1200"
    },
    {
        id:4,
        img: "img/ITEMS/BUR4-removebg-preview.png",
        name: "Spicy Sriracha Supreme",
        price: "1500"
    },
    {
        id:5,
        img: "img/ITEMS/BUR5-removebg-preview.png",
        name: "Hawaiian Luau Deluxe",
        price: "1100"
    }
    
];


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

   odrfdBtn.addEventListener("click", function(){
    setTimeout(function(){
        overLap.style.display = "block"
        overLap.style.opacity = ".8"
        },1000)

        let selectedOpt = select.value;
        let selectedItem = items.find(function(items){
            return items.name === selectedOpt;
        })

    if(selectedItem){
        console.log(`This is the Item Seleced ${selectedItem.name}`)

        let result = new Promise(function(res, rej){
            setTimeout(function(){
                res(selectedItem)
            },2000)
        })

        result.then(function(ans){
            ordImg.src = ans.img;
ordImg.className = "OrderImg";
            overLap.appendChild(ordImg)

            let infoDiv = document.createElement("div");
            infoDiv.className = "ImgPro";
            infoDiv.textContent = `
            Name: ${ans.name}`;
            overLap.appendChild(infoDiv)

            let infoDiv2 = document.createElement("div");
            infoDiv2.className = "ImgPro2";
            infoDiv2.textContent = `Price: ${ans.price}`
            overLap.appendChild(infoDiv2)

            let showOdrNo = document.createElement("div");
            showOdrNo.className = "ranClass";
            showOdrNo.textContent = randomOrderId();
            overLap.appendChild(showOdrNo)
        })
    }
    else{
        console.log("please select");
    }

   })

   function randomOrderId(){
    let ran = document.createElement("div");
    ran.className = "ranClass";

    let randonNo = Math.floor(Math.random() * 100000);
    let randonId = randonNo.toString().padStart(6, "0");
    overLap.append(ran);


    return `Order #${randonId}`;

}

randomOrderId();

    
}




orderFood();
showSelect();