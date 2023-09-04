const contPersonaje = document.getElementById("sctPersonajes")
const personajes = fetch("https://rickandmortyapi.com/api/character")


personajes.then((response) => {

    return response.json()
}).then((data) => {
    const arrPersonajes = data.results

    for (let i = 0; i < arrPersonajes.length; i++) {
        console.log(arrPersonajes[i].name)
const imagen=arrPersonajes[i].image
const nombre=arrPersonajes[i].name
const genero=arrPersonajes[i].gender
const especie=arrPersonajes[i].species
const estado=arrPersonajes[i].status

        document.getElementById("sctPersonajes").innerHTML += `
        <div class="dvPersonajes">
            <img src="${imagen}" alt="foto perfil">
            <h3>${nombre}</h3>
            <p>Género: ${genero}</p>
            <p>Especie: ${especie}</p>
            <p>Estado: ${estado}</p>
        </div>
        `
    }
})