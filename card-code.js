const slider = document.querySelector(".slider");
const nombreimg = document.querySelector("#nombreimg");
const price  = document.querySelector("#price");
let promoSwitch = document.querySelector("#switch");
const img = document.querySelector("#img");
const lista1 = document.querySelector("#lista-1");
const lista2 = document.querySelector("#lista-2");
const lista3 = document.querySelector("#lista-3");

//precio y imagenes
function printnombreimg(){
    if(slider.value == "0"){
        nombreimg.textContent = "LED LG 28";
        price.textContent = "398";
        img.setAttribute('src', 'images/tv-28.jpg');
        lista1.textContent = "2 en 1: TV y Monitor personal";
        lista2.textContent = "Montable a la pared (opcional)";
        lista3.textContent = "Entrada HDMI";

    }else if(slider.value == "25"){
        nombreimg.textContent = "TV Samsung 32";
        price.textContent = "561";
        img.setAttribute('src', 'images/tv-32.jpg');
        lista1.textContent = "Niveles de negro más profundos.";
        lista2.textContent = "Ayuda al ahorro de energía.";
        lista3.textContent = "Wifi";
    
    }else if(slider.value == "50"){
        nombreimg.textContent = "TV Samsung 43";
        price.textContent = "788.4";
        img.setAttribute('src', 'images/tv-43.jpg');
        lista1.textContent = "Sistema Operativo: TIZEN™";
        lista2.textContent = "AUDIO 20 WATTS";
        lista3.textContent = "DBV-T2";
    
    }else if(slider.value == "75"){
        nombreimg.textContent = "TV Samsung 58";
        price.textContent = "886.9";
        img.setAttribute('src', 'images/tv-58.jpg');
        lista1.textContent = "Conexión Bluetooth";
        lista2.textContent = "Sintonizador digital";
        lista3.textContent = "Entradas USB: 2";
    
    }else if(slider.value == "100"){
        nombreimg.textContent = "Led Caixun 50";
        price.textContent = "956";
        img.setAttribute('src', 'images/tv-50.jpg');
        lista1.textContent = "Resolución UHD";
        lista2.textContent = "3 HDMI/ 2 USB";
        lista3.textContent = "Mamoria Interna 4GB";
    }
}

// slider animado

slider.addEventListener("input",function (){
    let x = slider.value;
    //let color = "linear-gradient(90deg, rgb(184, 250, 243)" + x + "%, silver" + x + "%)";
    let color = `linear-gradient(90deg, rgb(184, 250, 243) ${x}%, silver ${x}%)`;
    slider.style.background = color;

    printnombreimg();
    
    if (promoSwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printnombreimg();
    };
});


// descuento ckeckbo
promoSwitch.addEventListener("input",function(){
  if(promoSwitch.checked == true){
     
    let x = price.textContent*0.25;
    price.textContent =price.textContent - x; 
  }else{
    printnombreimg();
  }

});
    