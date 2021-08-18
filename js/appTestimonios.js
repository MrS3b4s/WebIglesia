const objTestimonio = [
    {
        Titulo: 'Testimonio de Juan',
        descripccion: 'Doy testimonio de...',
        imagen : '../images/thumbnails/1.jpg'
    },

    {
        Titulo: 'Testimonio de Juan',
        descripccion: 'Doy testimonio de...',
        imagen : '../images/thumbnails/2.jpg'
    },

    {
        Titulo: 'Testimonio de Juan',
        descripccion: 'Doy testimonio de...',
        imagen : '../images/thumbnails/3.jpg'
    },

    {
        Titulo: 'Testimonio de Juan',
        descripccion: 'Doy testimonio de...',
        imagen : '../images/thumbnails/4.jpg'
    },

    {
        Titulo: 'Testimonio de Juan',
        descripccion: 'Doy testimonio de...',
        imagen : '../images/thumbnails/5.jpg'
    },

    {
        Titulo: 'Testimonio de Juan',
        descripccion: 'Doy testimonio de...',
        imagen : '../images/thumbnails/6.jpg'
    }
];


cargarTestimonios = document.querySelector('.cargarTestimonio');



function cargarTestimonio(objTestimonio) {
    objTestimonio.forEach(Testimonio => {
        const Titulo = Testimonio.Titulo
        const descripccion = Testimonio.descripccion
        const img = Testimonio.imagen;
        console.log("entro")
        const card = document.createElement('article');
        card.classList.add('col-6');
        card.classList.add('col-lg-4');
        card.classList.add('mb-3');
        card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${img}" class="card-img-top" alt="Imagen Testimonio">

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
                                class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Comentar</button>
                           
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        ` 
        cargarTestimonios.append(card);
        
    });

}

document.addEventListener('DOMContentLoaded', () => {
    cargarTestimonio(objTestimonio);

});