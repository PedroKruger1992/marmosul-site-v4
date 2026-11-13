import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;