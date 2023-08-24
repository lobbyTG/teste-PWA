




const closeModal = document.querySelector(".closeModal")
const modal = document.querySelector("dialog")

closeModal.onclick = function(){
    modal.close()
}

const loadModal = () =>{
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



