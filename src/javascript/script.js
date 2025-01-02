"use strict";
const buttonDesabilitarVideo = document.getElementById("desabilitarvideoapresentacao");
const buttonhabilitarVideo = document.getElementById("habilitarvideoapresentacao");
const divVideoApresentacao = document.getElementById("divvideoAprentacao");
const divTextoApresentacao = document.getElementById("divtextoapresentacao");
buttonDesabilitarVideo.addEventListener("click", () => {
    window.location.href = "index.html#sobre";
    divVideoApresentacao.style.display = "none";
    divTextoApresentacao.style.display = "flex";
});
buttonhabilitarVideo.addEventListener("click", () => {
    window.location.href = "index.html#sobre";
    divTextoApresentacao.style.display = "none";
    divVideoApresentacao.style.display = "block";
});
