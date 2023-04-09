const Navbar =({name}) =>{

  return (
<nav className="navbar bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">{name}</a>
  </div>
</nav>
  )
}

export default Navbar

//usar classname para no tener confusiones con los constructores y otras clases de js