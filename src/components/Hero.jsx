import React from 'react';
import fachada640 from '../assets/fachada-640.webp';
import fachada1200 from '../assets/fachada-1200.webp';
import { WHATSAPP_URL } from '../data/contato';

const Hero = () => {
  return (
    <section id="inicio" className="scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-lg font-semibold uppercase tracking-wide text-vermelho">Seja bem-vindo à</p>
          <h1 className="mt-2 text-5xl md:text-7xl font-bold uppercase leading-tight text-gray-900">Marmosul Pelotas</h1>
          <p className="mt-6 text-lg text-gray-700">Transformamos espaços com elegância. Somos especialistas em projetos personalizados de mármore e granito para diversos ambientes.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded bg-azul px-8 py-3 font-semibold text-white transition-colors hover:bg-vermelho">Fale com um especialista</a>
        </div>
        <img
          src={fachada1200}
          srcSet={`${fachada640} 640w, ${fachada1200} 1200w`}
          sizes="(min-width: 768px) 50vw, 100vw"
          width="1200"
          height="670"
          alt="Fachada da Marmosul Pelotas com o portão aberto mostrando a oficina"
          fetchPriority="high"
          className="w-full h-auto rounded"
        />
      </div>
    </section>
  );
};

export default Hero;