const buttonDesabilitarVideo = document.getElementById("desabilitarvideoapresentacao") as HTMLButtonElement;

const buttonhabilitarVideo = document.getElementById("habilitarvideoapresentacao") as HTMLButtonElement;

const divVideoApresentacao = document.getElementById("divvideoAprentacao") as HTMLDivElement;

const divTextoApresentacao = document.getElementById("divtextoapresentacao") as HTMLDivElement;

buttonDesabilitarVideo.addEventListener("click", ()=>{
    window.location.href = "index.html#sobre";
    divVideoApresentacao.style.display = "none";
    divTextoApresentacao.style.display = "flex";
})

buttonhabilitarVideo.addEventListener("click", ()=>{
    window.location.href = "index.html#sobre";
    divTextoApresentacao.style.display = "none";
    divVideoApresentacao.style.display = "block";
})