import marmore from '../assets/marmore-dourado.webp';
import { WHATSAPP_URL } from '../data/contato';

const Hero = () => {
  return (
    <section id="inicio" className="relative isolate min-h-svh overflow-hidden scroll-mt-24">
      <div aria-hidden="true" className="marmore-parallax absolute inset-x-0 top-0 -z-10 h-[120%] bg-repeat" style={{ backgroundImage: `url(${marmore})`, backgroundSize: '512px' }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/40" />
      <div className="mx-auto grid min-h-svh max-w-6xl content-center items-center gap-12 px-4 pt-28 pb-16 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-vermelho motion-safe:animate-surgir">Seja bem-vindo à</p>
          <h1 className="mt-3 font-bold uppercase leading-none text-gray-900">
            <span className="block text-5xl md:text-7xl lg:text-8xl motion-safe:animate-surgir [animation-delay:150ms]">Marmo<span className="text-vermelho">sul</span></span>
            <span className="mt-3 block text-3xl font-light tracking-[0.5em] md:text-5xl lg:text-6xl motion-safe:animate-espacar [animation-delay:300ms]">Pelotas</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 motion-safe:animate-surgir [animation-delay:450ms]">Transformamos espaços com elegância. Somos especialistas em projetos personalizados de mármore e granito para diversos ambientes.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-azul/40 bg-white/30 px-8 py-3 font-semibold text-azul backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors hover:bg-azul hover:text-white motion-safe:animate-surgir [animation-delay:600ms]">
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-white/50 motion-safe:group-hover:animate-brilho" />
            Fale com um especialista
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="mt-10 flex gap-10 border-t border-dourado pt-6 motion-safe:animate-surgir [animation-delay:750ms]">
            <div>
              <p className="text-3xl text-azul">10+</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">anos</p>
            </div>
            <div>
              <p className="text-3xl text-azul">500+</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">projetos</p>
            </div>
            <div>
              <p className="text-3xl text-azul">RS</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">Pelotas</p>
            </div>
          </div>
        </div>
        <div className="relative pb-4 pl-4">
          <div aria-hidden="true" className="absolute top-4 right-4 bottom-0 left-0 rounded border border-dourado motion-safe:animate-moldura [animation-delay:500ms]" />
          <img
            src="/fachada-1200.webp"
            srcSet="/fachada-640.webp 640w, /fachada-800.webp 800w, /fachada-1200.webp 1200w"
            sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
            width="1200"
            height="670"
            alt="Fachada da Marmosul Pelotas com o portão aberto mostrando a oficina"
            fetchPriority="high"
            className="relative h-auto w-full rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;