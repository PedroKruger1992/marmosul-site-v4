import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Portfolio />
      </main>
    </>
  );
}

export default App;