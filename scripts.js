(function() {

    // change the images from trump to shemar
    let picElement = document.getElementsByClassName("thumbborder")[0];

    picElement.src = "https://i.imgur.com/ETE4bnG.jpg"
    picElement.srcset = " "

    // change the name from "Donald Trump" to "Shemar Dacosta"
    let nameElement = document.getElementsByClassName("infobox")[0].childNodes[0].childNodes[3].childNodes[0].childNodes[0].childNodes[1].childNodes[2]

    nameElement.innerHTML = "Shemar Dacosta"


}) ();