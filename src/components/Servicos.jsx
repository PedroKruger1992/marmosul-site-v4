import { servicos } from '../data/servicos';

const Servicos = () => {
  return (
    <section id="servicos" className="scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900">Nossos Serviços</h2>
        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {servicos.map((servico) => (
            <li key={servico.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <article className="h-full overflow-hidden rounded bg-white shadow-md">
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{servico.titulo}</h3>
                  <p className="mt-2 text-gray-700">{servico.texto}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Servicos;