import { servicos } from '../data/servicos';
import { useState } from 'react';
import Lightbox from './Lightbox';

const Servicos = () => {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section id="servicos" className="scroll-mt-24 bg-[#faf8f4]">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-vermelho">O que fazemos</p>
          <h2 className="mt-3 text-4xl font-bold uppercase text-gray-900 md:text-5xl">Nossos <span className="text-vermelho">Serviços</span></h2>
          <div aria-hidden="true" className="mx-auto mt-4 h-px w-10 bg-dourado" />
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {servicos.map((servico, i) => (
            <li key={servico.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <article className="group">
                <button type="button" onClick={() => setSelecionado(servico)} aria-label={`Ampliar foto de ${servico.titulo}`} className="relative overflow-hidden block w-full cursor-zoom-in">
                  <img
                    src={servico.imagem}
                    alt={servico.titulo}
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-azul/55 text-xs uppercase tracking-[0.35em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">Ampliar</span>
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-white/30 motion-safe:group-hover:animate-brilho" />
                </button>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-xl font-light text-dourado">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-azul">{servico.titulo}</h3>
                </div>
                <div aria-hidden="true" className="my-3 h-px w-full origin-left scale-x-[0.15] bg-dourado transition-transform duration-500 group-hover:scale-x-100" />
                <p className="text-sm leading-relaxed text-gray-600">{servico.texto}</p>
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