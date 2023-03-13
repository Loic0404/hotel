document.body.onload = function () {
    nbr = 3;
    p = 0;
    content = document.getElementById("content");
    g = document.getElementById("g");
    d = document.getElementById("d");
    content.style.width = (1480 * nbr) + "px";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/caroussel/img" + i + ".jpg')";
        content.appendChild(div);
    }
    afficherMasquer();
}
d.onclick = function () {
    if (p > -nbr + 1)
        p--;
    content.style.transform = "translate(" + p * 1480 + "px)";
    content.style.transition = "all 0.5s ease";
    afficherMasquer();

}

g.onclick = function () {
    if (p < 0)
        p++;
    content.style.transform = "translate(" + p * 1480 + "px)";
    content.style.transition = "all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if(p==-nbr+1)
    d.style.visibility="hidden";
    else
    d.style.visibility="visible";
    if(p==0)
    g.style.visibility="hidden";
    else
    g.style.visibility="visible";
}