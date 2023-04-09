
const Card = (title, image, description, buttonLabel) => {

  return (
    <div className="card" style={{whith: '18rem'}}>
      <img src={image} class="card-img-top" alt={title}/>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="/" class="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  )
}

export default Card

//En todos los componentes no es necesario la impoprtación de react.
//Cerrar todas las etiquetas. con autoclose.
//Para agregar propiedades a las variables se abren llaves. Lo interpreta como string al rem, si es que no pongo el número solo que lo tomaría como px.
//Los props son para hacer los componentes reutilizables.