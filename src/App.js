import Header from './componentes/header/Header';
import Servico from './componentes/section_one/Servico';
import Contato from './componentes/section_two/Contato';
import Info from './componentes/section_for/Info';
import Footer from './componentes/footer/Footer';


function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <Header/>
      <Servico/>
      <Info/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
