cargarMisTestimonios = document.querySelector('.cargarMisTestimonios');



function cargarMiTestimonio(objTestimonio) {
    objTestimonio.forEach(Testimonio => {
        const Titulo = Testimonio.Titulo
        const descripccion = Testimonio.descripccion
        const img = Testimonio.imagen;
        console.log("entro")
        const card = document.createElement('article');
        card.classList.add('col-12');
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
                                class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalTestimonio">Comentar</button>
                            <button type="button" class="btn btn-sm btn-outline-danger">Eliminar</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        ` 
        cargarMisTestimonios.append(card);
        
    });

}

document.addEventListener('DOMContentLoaded', () => {
    cargarMiTestimonio(objTestimonio);

});