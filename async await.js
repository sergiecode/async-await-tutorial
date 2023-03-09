async function consumirAPI(url) {
    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.error(error)
    }
}

async function correrPrograma(){
    console.log("ANTES DE TRAER LA INFO")
    const data = await consumirAPI("https://jsonplaceholder.typicode.com/users")
    console.log("Info: ", data)
    console.log("DESPUÉS DE TRAER LA INFO")
}

correrPrograma()


