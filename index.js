//TODO: alterar titulo, mainPhoto e MainInformation dinamicamente
//TODO: carregar catálogo dinamicamente
//Classes
var itensCatalogo;
var itensSabores;

//Fetch
fetch('dataSourceSaboresItens.json').then(response => response.json())
.then( text => {
    itensSabores = text;
})

fetch('dataSourceCatalogoItens.json').then(response => response.json())
.then( text => {
    itensCatalogo = text;
    itensCatalogo.forEach(item => insertIntoCatalogo(item));
})

//Elements
const OpenSaborButton = document.querySelectorAll('[data-button-Sabores]')
const closeSaboresButton = document.querySelectorAll('[data-button-Close]')
const Overlay = document.getElementById('overlay')

//EVENTS
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Inicio");
});

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
});

//FUNCTIONS
function openPopUp(sabor, tipo){
    if(sabor == null) return;
    if(Overlay == null) return;
    
    editarLegendPopUpSabores(tipo);
    itensSabores.forEach(item => {if(item.tipo == tipo)insertIntoSabores(item)});

    sabor.classList.add('active')
    Overlay.classList.add('active')
}

function closePopUp(sabor){
    if(sabor == null) return;
    if(Overlay == null) return;

    sabor.classList.remove('active')
    Overlay.classList.remove('active')
    document.getElementById('saboresFieldset').innerHTML = '<legend id="SaboresTitulo"></legend>';
}

function editarLegendPopUpSabores(tipo){
    var type = tipo.includes("PR") ? "Premiums": "Tradicionais"
    let legend = "<i class='fa-solid fa-spoon'></i> Sabores " + type;
    document.getElementById('SaboresTitulo').innerHTML = legend;
}

function insertIntoCatalogo(item){
    var innerHTML = '<div class="catalogItem"><div class="catalogItemText"><h3>'+item.nome+'</h3><p>'+
                    item.descricao+'</p></div><div class="catalogItemImg"><img src="'+item.caminhoFoto+'"alt="'+
                    item.nome+'"/></div></div>';
    document.getElementById('catalogoProdutos').innerHTML  += innerHTML;
}

function insertIntoSabores(item){
    var caminhoFoto = item.status.includes("A") && item.caminhoFoto != "" ? item.caminhoFoto : "assets/embreve.png";

    var innerHTML = '<div class="saboresItem"><h3>'+item.nome+'</h3><div class="saboresItemImg">'+
                    '<img src="'+caminhoFoto+'"alt="'+item.nome+'"/></div></div>';

    document.getElementById('saboresFieldset').innerHTML += innerHTML;
}