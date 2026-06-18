window.addEventListener("scroll", () => {

    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#111827";
    }
    else{
        navbar.style.background = "rgba(0,0,0,0.2)";
    }

});