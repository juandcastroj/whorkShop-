let mostrarPaises = async(list, elemento)=>{

    let paises = await list
    paises.forEach(country => {
        const{region, pais, capital, poblacion, img, id}=country

        elemento.innerHTML+=`
        <li class="card h-100" style= "width: 15rem;" >
        <img src=${img} class="card-img-top" id=${id} alt="...">
                        <div class="card-body">
                            
                            <h2 class="card-title">${pais}</h2>
                            <h4> poblacion:  ${poblacion} </h4>
                            <h4> Región:  ${region}</h4>
                            <h4> Capital:  ${capital}</h4>
                      </div>
         </li>
        `
    });
} 

export default mostrarPaises