document.getElementById("aboutClick").addEventListener("click", displayAbout);
function displayAbout(){
    let ab = document.getElementById("about");
    let fi = document.getElementById("fishing");
    let ca = document.getElementById("camping");
    ab.style.display = "block";
    fi.style.display = "none";
    ca.style.display = "none";
    window.scrollTo(0, 0);
}
document.getElementById("fishingClick").addEventListener("click", displayFishing);
function displayFishing(){
    let ab = document.getElementById("about");
    let fi = document.getElementById("fishing");
    let ca = document.getElementById("camping");
    ab.style.display = "none";
    fi.style.display = "grid";
    ca.style.display = "none";
    window.scrollTo(0, 0);
}
document.getElementById("campingClick").addEventListener("click", displayCamping);
function displayCamping(){
    let ab = document.getElementById("about");
    let fi = document.getElementById("fishing");
    let ca = document.getElementById("camping");
    ab.style.display = "none";
    fi.style.display = "none";
    ca.style.display = "grid";
    window.scrollTo(0, 0);
}



