//TODO: alterar titulo, mainPhoto e MainInformation dinamicamente
//document.tilte = "TATA"
//TODO: carregar catálogo dinamicamente
const OpenSaborButton = document.querySelectorAll('[data-button-Sabores]')
const closeSaboresButton = document.querySelectorAll('[data-button-Close]')
const Overlay = document.getElementById('overlay')

//EVENTS
OpenSaborButton.forEach( button => {
    button.addEventListener('click', () =>{
        const sabores = document.querySelector(button.dataset.buttonSabores)
        openPopUp(sabores, button.id)
    });
});

closeSaboresButton.forEach( button => {
    button.addEventListener('click', () =>{
        const sabores = button.closest('#Sabores')
        closePopUp(sabores)
    })
})

//FUNCTIONS
function openPopUp(sabor, tipo){
    if(sabor == null) return;
    if(Overlay == null) return;
    
    editarLegendPopUp(tipo);

    sabor.classList.add('active')
    Overlay.classList.add('active')
}

function editarLegendPopUp(tipo){
    let legend = "<i class='fa-solid fa-spoon'></i> Sabores " + tipo
    document.getElementById('SaboresTitulo').innerHTML = legend
}

function closePopUp(sabor){
    if(sabor == null) return;
    if(Overlay == null) return;

    sabor.classList.remove('active')
    Overlay.classList.remove('active')
}