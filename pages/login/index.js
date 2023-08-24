




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



