import capturarPaises from "./capturarPaises.js"
import mostrarPaises from "./mostrarPaises.js"


const url ='http://localhost:4000/region/'

const elemento = document.querySelector('.list-group')

const form = document.getElementById('form')

//MOSTRAR TARJETAS

document.addEventListener('DOMContentLoaded', ()=>{

    const data = capturarPaises(url)
    mostrarPaises(data, elemento)
})



//DETALLE

elemento.addEventListener('click', async(e) => {

    const cardDet = e.target.classList.contains('card-img-top');
    const id = e.target.id

   // console.log(id)

    if(cardDet){
         const lista = await capturarPaises(url);
         const objeto = lista.find(list => list.id === Number(id))
         localStorage.setItem("Detail",JSON.stringify(objeto));
         window.location.href = "detalle.html"
    }
})






// BUSCADOR

const input = document.getElementById('buscar');

input.addEventListener('click', async () => {

    const valor = document.getElementById('place').value

    console.log(valor)

    const resp = await fetch(url);
    const lista = await resp.json()

    const buscado = lista.find(u => u.pais.toLocaleLowerCase() === valor.toLocaleLowerCase())

         elemento.innerHTML=''

    if (buscado !== undefined) {
        const { pais, img, poblacion, capital, region } = buscado;
        elemento.innerHTML+=`
        <li class="card"  style="width: 18rem">
            <div class="card-body">
            <a href="#"><img src=${img} class="card-img-top" alt="..."></a>
                            <h2 class="card-title">${pais}</h2>
                            <h4> poblacion:  ${poblacion} </h4>
                            <h4> Región:  ${region}</h4>
                            <h4> Capital:  ${capital}</h4>
            </div>
        </li>
        `
    } else {
        alert('Pais no encontrado')
    }


})


//TEMA



