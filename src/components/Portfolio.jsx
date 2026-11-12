import { useState } from 'react';
import Lightbox from './Lightbox';
import { projetos } from '../data/portfolio';
import marmore from '../assets/marmore-fundo.webp';

function Portfolio() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section id="portfolio" className="relative isolate scroll-mt-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-repeat" style={{ backgroundImage: `url(${marmore})`, backgroundSize: '512px' }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/60" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-vermelho">Nossos trabalhos</p>
            <h2 className="mt-3 text-4xl font-bold uppercase text-gray-900 md:text-5xl">Portf<span className="text-vermelho">ólio</span></h2>
          </div>
          <p className="max-w-md border-l border-dourado pl-4 leading-relaxed text-gray-600">Explore nossos projetos. Somos especialistas em criar soluções personalizadas em mármore e granito para os mais variados ambientes.</p>
        </div>
        <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2 md:pb-16">
          {projetos.map((projeto, i) => (
            <li key={projeto.id} className={i % 2 === 1 ? 'md:translate-y-16' : ''}>
              <p className="mb-3 text-3xl font-light text-dourado">{projeto.numero}</p>
              <button type="button" onClick={() => setSelecionado(projeto)} aria-label={`Ver fotos do Projeto ${projeto.numero}`} className="group relative block w-full cursor-pointer pb-4 pl-4 text-left">
                <span aria-hidden="true" className="absolute top-4 right-4 bottom-0 left-0 border border-dourado transition-transform duration-500 motion-safe:group-hover:-translate-x-2 motion-safe:group-hover:translate-y-2" />
                <span className="relative block overflow-hidden">
                  <img src={projeto.capa} alt="" width="960" height="1200" loading="lazy" className="block aspect-[4/5] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
                  <span className="absolute inset-0 flex items-center justify-center bg-azul/55 text-xs uppercase tracking-[0.35em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">Ver projeto</span>
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-white/30 motion-safe:group-hover:animate-brilho" />
                </span>
              </button>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-azul">Projeto {projeto.numero}</span>
                <span className="text-xs tracking-widest text-gray-500">{projeto.fotos.length} fotos</span>
              </div>
            </li>
          ))}
        </ul>
        {selecionado && <Lightbox imagens={selecionado.fotos} alt={`Foto do Projeto ${selecionado.numero}`} titulo={`Projeto ${selecionado.numero}`} onFechar={() => setSelecionado(null)} />}
      </div>
    </section>
  );
}

export default Portfolio;