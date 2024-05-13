/*componente unico = ID */ 
/*
const components = document.querySelector("#componentes");
console.log()*/

let bgdesktop = "md:bg-[url('./assets/destination/background-destination-desktop.jpg')]"
let bgmobile = "bg-[url('./assets/destination/background-destination-mobile.jpg')]"

const nav = document.querySelector("#nav");
const componentes = document.querySelector("#componentes")

nav.classList.add(bgdesktop);
nav.classList.add(bgmobile);

componentes.onclick = function (){
    console.log("estoy haciendo click");
    let bgdesktop = "md:bg-[url('./assets/destination/background-destination-desktop.jpg')]"
}



