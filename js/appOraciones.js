

cargarOraciones = document.querySelector('.cargarOraciones');



function cargarOracion(objOraciones) {
    objOraciones.forEach(oracion => {
        const Titulo = oracion.Titulo;
        const descripccion = oracion.descripccion;
        const img = oracion.imagen;
        const card = document.createElement('article');
        card.classList.add('col-12');
        card.classList.add('col-lg-4')
        card.classList.add('mb-3')
        card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${img}" class="card-img-top" alt="Imagen Oracion"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">

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