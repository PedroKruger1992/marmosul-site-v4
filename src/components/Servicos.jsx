import { servicos } from '../data/servicos';
import { useState } from 'react';
import Lightbox from './Lightbox';

const Servicos = () => {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section id="servicos" className="scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16 md:pt-10 md:pb-20">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900">Nossos Serviços</h2>
        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {servicos.map((servico) => (
            <li key={servico.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <article className="h-full overflow-hidden rounded bg-white shadow-md">
                <button type="button" onClick={() => setSelecionado(servico)} aria-label={`Ampliar foto de ${servico.titulo}`} className="block w-full cursor-zoom-in">
                  <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                </button>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{servico.titulo}</h3>
                  <p className="mt-2 text-gray-700">{servico.texto}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      {selecionado && <Lightbox imagem={selecionado.imagemGrande} alt={selecionado.titulo} onFechar={() => setSelecionado(null)} />}
    </section>
  );
};

export default Servicos;