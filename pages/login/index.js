




const closeModal = document.querySelector(".closeModal")
const modal = document.querySelector("dialog")

closeModal.onclick = function(){
    modal.close()
}
// CAMINHO FUNCIONAL DA WEB GITHUB PAGES
// const urlAD = ["/teste-PWA/assets/img/agasalho.jpg", "/teste-PWA/assets/img/doarSangue.png","/teste-PWA/assets/img/pets.jpg"]

const urlAD = ["https://lobbytg.github.io/teste-PWA/assets/img/agasalho.jpg", "https://lobbytg.github.io/teste-PWA/assets/img/doarSangue.png","https://lobbytg.github.io/teste-PWA/assets/img/pets.jpg"]

const loadModal = () =>{
    const num = Math.floor(Math.random() * 3)
    modalAD(urlAD[num])
    console.log(urlAD[num])
    modal.showModal()
}



const teste = () =>{
    location.href = "./pages/menu/index.html";
    alert(`Login feito com sucesso!!!`);
}


const modalAD = (url) =>{
    document.querySelector("dialog").style.backgroundImage = `url(${url})`
    document.querySelector("dialog").style.backgroundSize = "cover";
    document.querySelector("dialog").style.backgroundRepeat = "no-repeat";
    document.querySelector("dialog").style.backgroundPosition = "center";
}



