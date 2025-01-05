"use strict";
const buttonBaixarCurriculo = document.getElementById("buttonbaixarCV");
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
buttonBaixarCurriculo.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "./src/document/curriculo.pdf";
    link.download = "curriculo_Anderson_Moraes.pdf";
    link.click();
});
