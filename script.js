let ordBtn = document.getElementsByClassName("order");

let overLap = document.getElementById("overlap");
let ordImg = document.createElement("img");

//YHA SAREE ITEMS KI IMAGES OR PROPERTIES KO EK ARRAY OF OBJ M RAKHA HUA H.
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

// YHA EK SHOWSELECT FUNCTION BNYA GYA H JIS S ORDER NOW BTN P CLICK KRKE SELECT DROPDOWN SHOW HOGA.
function showSelect(){
   let selct = document.getElementById("sel"); //HTML S SEL ID JO KI "DIV H JISME SELECT TAG STORE H", KO EK SELCT VARIABLE M STORE KIYA GYA H.
    for(let i=0; i<ordBtn.length; i++){ // FOR LOOP LGYA GYA H, yha for loop isliya lgya gya h bcz class p direct ADDEVNTLISTENER KAM NI KRTA.
        ordBtn[i].addEventListener("click", function(){
            selct.style.display = "block"; //YHA JB HM ORDER BTN P CLICK KRNEGE TOH JO "SEL ID" CSS M DISPLAY NONE H USKO, "DISPLAY - BLOCK" KIYA GYA H. 
        })
    }
}

function orderFood(){ // Y FUNCTION ORDERFOOD BTN P CLICK HONE WALE SARE KAM KRAWAYEGA
   let select = document.getElementById("selectedOption"); //YHA EK NEW SELECT - VARIABLE, CREATE KIYA GYA H JISME, SELECT TAG K ID KO LIYA GYA H.
   let odrfdBtn = document.getElementById("odrfBtn"); // YHA EK VARIBLE M ODRBTN FOOD BTN KO STORE KIYA GYA H.

   odrfdBtn.addEventListener("click", function(){ // ODR FOOD BTN K CLICK KRNE PRR, 
    setTimeout(function(){ // SETTIMEOUT LGYA GYA H KI CLICK KRNE K 1 SEC BAAD KAM HO.
        overLap.style.display = "block"  // BTN CLICK KRNE PRR, OVERLAP SCREEN JISME ORDER SHOW HOGYA USKO DISPLAY - BLOCK KIYA GYA H JO PEHLA CSS M DISPLAY NONE THA. 
        overLap.style.opacity = ".8" // OR USKI OPACTITY BHI KAM KI GYI H.
        },1000)

        let selectedOpt = select.value; // EK NAYE SELECTEDOPT VARIABLE BNYA GYA H. JISME JB HMM SELECT TAG M S OPTION KO CHOOSE KRKE ODR FOOD BTN DAABYE, TOH JO VALUE SELECT TAG M STORE HOGI, WOH VALUE AB ISS NAYE VARIABLE SELECTEDOPT M STORE HOGI. ---> MTLB HMRI CHOOSE KRI HUI VALUE SELECTEDOPT VARIABLE M HOGI.
        let selectedItem = items.find(function(items){ // YHA EK NAYA VARAIBALE SELECTED ITEM BNAYA GYA H JISME. ARRAY ITEMS K K UPR FIND --> HOF K USE KRA JA RHA H. 

            // ISME ITEMS ARRAY KO FIND --> HOF K ANDR RAKH K EK items PARAMETER PASS KIYA GYA H, TOH ISS 
            // FIND H.O.F  SE ARRAY K ANDR JO ITEMS H UNKA NAME KO HMRE DWAR CHOOSE KIYA GYE ITEMS JO AB SELECTEDOPT K ANDR H. FIND H.O.F K ANDR AB IN DONO KO COMPARE KIYA JAYEGA, -------> MTLB HMRE DWAR SELECT KIYA GYA OPTION KO ARRAY K ITEMS K SATH.  
            return items.name === selectedOpt;
        })

    if(selectedItem){ // AGR ITEMS MATCH HOTE H.  
        console.log(`This is the Item Seleced ${selectedItem.name}`) //TOH CONSOLE.LOG KRO

        let result = new Promise(function(res, rej){ // AB YHA P EK RESULT PROMISE CREATE KIYA GYA H JO, KI HMRE DIYA GYA CLICK K RESPONSE DENGE. 
            setTimeout(function(){
                res(selectedItem)  
            },2000)
        })

        result.then(function(ans){
            ordImg.src = ans.img; // ORDIMG TAG JO KI IMG TAG H USME. SRC KO LINK KR DIYA H ANS KI IMG MEANS ARRAY KI IMG K SATH.
            ordImg.className = "OrderImg";
            overLap.appendChild(ordImg) // APPEND KIYA GYA H OVERLAP DIV K SATH.

            let infoDiv = document.createElement("div"); // Y DIV ITEMS KI PROPERTY KO SHOE KRNE K LIYA BNYA GYA H.
            infoDiv.className = "ImgPro";
            infoDiv.textContent = `
            Name: ${ans.name}`;
            overLap.appendChild(infoDiv) //APPEND KIYA GYA H OVERLAP DIV K SATH.

            let infoDiv2 = document.createElement("div");
            infoDiv2.className = "ImgPro2";
            infoDiv2.textContent = `Price: ${ans.price}`
            overLap.appendChild(infoDiv2)

            let showOdrNo = document.createElement("div"); //RANDON ORDER NO. SHOW KRNA K LKIYA BNYA GYA H
            showOdrNo.className = "ranClass";
            showOdrNo.textContent = randomOrderId(); // RANDOM GENERATED ORDER NO. KO AS A TEXT CONTENT SHOEODRNO. M DALA GYA H. 
            overLap.appendChild(showOdrNo) //APPEND KIYA GYA H OVERLAP DIV K SATH.
        })
    }
    else{
        console.log("please select");
    }

   })

   function randomOrderId(){ // RANDON NO. GENRATE KRNE K LIYA FUNCTION BNYA GYA H.,
    let ran = document.createElement("div");
    ran.className = "ranClass";

    let randonNo = Math.floor(Math.random() * 100000); // 1 SE LEKA 99999 TK RANDON NO. GENEARTE KRNE K LIYA.
    let randonId = randonNo.toString().padStart(6, "0"); // NO. KO STRING M CONVERT KRNA K LIYA, OR STRING KAM S KAM 6 DIGIT KI HO O STARTING M ZERO HO. USKA LIYA PADSTART K USE KIYA GYA H.
    overLap.append(ran); //APPEND KIYA GYA H OVERLAP DIV K SATH.


    return `Order #${randonId}`;

}

randomOrderId();

    
}




orderFood();
showSelect();