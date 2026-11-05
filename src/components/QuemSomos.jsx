import artesao640 from '../assets/artesao-640.webp';
import artesao1200 from '../assets/artesao-1200.webp';
const QuemSomos = () => {
  return (
    <section id="quem-somos" className="scroll-mt-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-16 md:pt-10 md:pb-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Quem Somos</h2>
            <p className="mt-6 text-lg text-gray-700">Há 10 anos no mercado, a Marmosul transforma pedras em detalhes que valorizam cada espaço da sua casa ou do seu trabalho. Somos especialistas em projetos personalizados de mármore e granito para diversos ambientes.</p>
          </div>
          <img src={artesao1200} srcSet={`${artesao640} 640w, ${artesao1200} 1200w`} sizes="(min-width: 768px) 50vw, 100vw" width="1200" height="900" loading="lazy" alt="Oficina da Marmosul com máquina de corte de pedra" className="w-full aspect-[4/3] object-cover rounded" />
        </div>
    </section>
  );
};

export default QuemSomos;