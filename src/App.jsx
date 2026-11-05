import Header from './components/Header';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
      </main>
    </>
  );
}

export default App;