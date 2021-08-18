const objOraciones = [
    {
        Titulo: 'Oracion de Juan',
        descripccion: 'Pido que oren por...',
        imagen : '../images/thumbnails/1.jpg'
    },

    {
        Titulo: 'Oracion de Juan',
        descripccion: 'Pido que oren por...',
        imagen : '../images/thumbnails/2.jpg'
    },

    {
        Titulo: 'Oracion de Juan',
        descripccion: 'Pido que oren por...',
        imagen : '../images/thumbnails/3.jpg'
    },

    {
        Titulo: 'Oracion de Juan',
        descripccion: 'Pido que oren por...',
        imagen : '../images/thumbnails/4.jpg'
    },

    {
        Titulo: 'Oracion de Juan',
        descripccion: 'Pido que oren por...',
        imagen : '../images/thumbnails/5.jpg'
    },

    {
        Titulo: 'Oracion de Juan',
        descripccion: 'Pido que oren por...',
        imagen : '../images/thumbnails/6.jpg'
    }
];



cargarOraciones = document.querySelector('.cargarOraciones');



function cargarOracion(objOraciones) {
    objOraciones.forEach(oracion => {
        const Titulo = oracion.Titulo
        const descripccion = oracion.Titulo
        const img = oracion.imagen;
        console.log("entro")
        const card = document.createElement('article');
        card.classList.add('col-6');
        card.classList.add('col-lg-4')
        card.classList.add('mb-3')
        card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${img}" class="card-img-top" alt="Imagen Oracion">

                <div class="card-body"e>
                    <h6>${Titulo}</h6>
                    <p class="card-texet text-dark">
                        ${descripccion}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Me
                                gusta</button>
                            <button type="button"
                                class="btn btn-sm btn-outline-secondary">Oraré</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        ` 
        cargarOraciones.append(card);
        
    });

}

document.addEventListener('DOMContentLoaded', () => {
    cargarOracion(objOraciones);

});