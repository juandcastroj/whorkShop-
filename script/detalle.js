const listador = document.querySelector('.list-group')


const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("Detail"));
    const { region, pais, capital, poblacion, img} = det
    listador.innerHTML += `
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
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

listador.addEventListener('click', (e) => {

    if (e.target.classList.contains('card-img-top')) {
        window.location.href = "index.html";
    }

})