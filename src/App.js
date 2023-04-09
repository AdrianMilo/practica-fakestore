import Card from "./components/Card/Card";
import Nav from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Nav name='Rolling Code'/>
      <div className="mt-3 d-flex justify-content-center gap-3">
        <Card
          title='Card 1'
          description='Esta es una descripcion'
          image='https://picsum.photos/id/232/200/300'
          buttonLabel='Ir a otro lugar'/>
        <Card
          title='Card 2'
          description='Descripcion 2'
          image='https://picsum.photos/id/236/200/300'
          buttonLabel='Ir a otro lugar'/>
      </div>
    </>

  );
}

export default App;

//pa evitar el div se puede retornar un fragmente: etiqueta vacía <></>
