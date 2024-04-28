let saludi = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludar = "Hola Luis";
        saludar = false;
        if (saludar) {
            resolve(saludar);
        } else {
            reject("No hay saludo disponible");
        }
    }, 2000);
});

saludi.then(resultado => {
    alert(resultado);
}).catch(error => {
    alert(error);
});