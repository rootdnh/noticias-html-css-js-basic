
// Botão responsivo mobile
const bntMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
bntMobile.addEventListener('click', toggleMenu)

//Função para inserir dados na main


async function getNews(){
  await fetch('http://localhost:3003/noticias')
  .then(response =>{response.json()
  .then(response => showInScreen(response))
  })
}


function showInScreen(array){
    const content = document.getElementById("content");
    var loadContent = " ";
    
    array.forEach( element => {

        loadContent +=`
        <div id="box-noticias">
            <h2 id="titulo">${element.titulo}</h2>
            <h5 id="categoria">${element.categoria}</h5>
            <p id="conteudo">${element.noticia}</p>
        </div>
    `;
    });
    content.innerHTML = loadContent
}