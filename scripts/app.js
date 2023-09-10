const contPersonaje = document.getElementById("sctPersonajes")
const contEpisodios = document.getElementById("sctEpisodios")
const personajes = fetch("https://rickandmortyapi.com/api/character")
const pag2=fetch("https://rickandmortyapi.com/api/character/?page=2")
const pag19=fetch("https://rickandmortyapi.com/api/character/?page=19")
const episodios = fetch("https://rickandmortyapi.com/api/episode")

personajes.then((response) => {

    return response.json()
}).then((data) => {
    const arrPersonajes = data.results

    for (let i = 0; i < arrPersonajes.length; i++) {
        console.log(arrPersonajes[i].name)
        const imagen = arrPersonajes[i].image
        const nombre = arrPersonajes[i].name
        const genero = arrPersonajes[i].gender
        const especie = arrPersonajes[i].species
        const estado = arrPersonajes[i].status

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

    episodios.then((response) => {

        return response.json()
    }).then((data) => {
        const arrEpisodios = data.results
        console.log(data)
        for (let i = 0; i < arrEpisodios.length; i++) {
            console.log(arrEpisodios[i].name)
            const id = arrEpisodios[i].id
            const nombre = arrEpisodios[i].name
            const fecha = arrEpisodios[i].air_date
            const episodio = arrEpisodios[i].episode
            const link = arrEpisodios[i].url
            
    
            document.getElementById("sctEpisodios").innerHTML += `
            <div class="dvEpisodios">
                <p>Cap. ${id}</p>
                <h2>${nombre}</h2>
                <p>Fecha: ${fecha}</p>
            </div>
            `
        }
    })

    pag2.then((response) => {

        return response.json()
    }).then((data) => {
        const arrPersonajes = data.results
    
        for (let i = 0; i < arrPersonajes.length; i++) {
            console.log(arrPersonajes[i].name)
            const imagen = arrPersonajes[i].image
            const nombre = arrPersonajes[i].name
            const genero = arrPersonajes[i].gender
            const especie = arrPersonajes[i].species
            const estado = arrPersonajes[i].status
    
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
    pag19.then((response) => {

        return response.json()
    }).then((data) => {
        const arrPersonajes = data.results
    
        for (let i = 0; i < arrPersonajes.length; i++) {
            console.log(arrPersonajes[i].name)
            const imagen = arrPersonajes[i].image
            const nombre = arrPersonajes[i].name
            const genero = arrPersonajes[i].gender
            const especie = arrPersonajes[i].species
            const estado = arrPersonajes[i].status
    
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