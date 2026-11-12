import { useState, useRef, useEffect } from 'react';

const Lightbox = ({ imagem, imagens, alt, titulo, onFechar }) => {
  const dialogRef = useRef(null);
  const [indice, setIndice] = useState(0);
  const lista = imagens ?? [imagem];

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  const fechar = () => {
    dialogRef.current.close();
  };

  const proxima = () => setIndice((i) => (i + 1) % lista.length);
  const anterior = () => setIndice((i) => (i - 1 + lista.length) % lista.length);

  return (
    <dialog
      ref={dialogRef}
      onClose={onFechar}
      onClick={(e) => {
        if (e.target === dialogRef.current) fechar();
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') proxima();
        else if (e.key === 'ArrowLeft') anterior();
      }}
      className="m-auto max-h-[90vh] max-w-[90vw] overflow-visible bg-transparent p-0 backdrop:bg-black/80"
    >
      {lista.length > 1 && (
        <>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs uppercase tracking-[0.45em] text-dourado">{titulo}</p>
            <p aria-live="polite" className="text-sm tracking-[0.2em] text-white">
              <span className="text-dourado">{String(indice + 1).padStart(2, '0')}</span> / {String(lista.length).padStart(2, '0')}
            </p>
          </div>
          <button
        type="button"
            onClick={anterior}
            aria-label="Foto anterior"
            className="z-10 bg-black/40 md:bg-transparent absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-dourado/60 text-2xl text-dourado transition-colors hover:bg-dourado hover:text-gray-900 left-2 md:-left-16"
      >
            ‹
      </button>
          <button
            type="button"
            onClick={proxima}
            aria-label="Próxima foto"
            className="z-10 bg-black/40 md:bg-transparent absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-dourado/60 text-2xl text-dourado transition-colors hover:bg-dourado hover:text-gray-900 right-2 md:-right-16"
          >
            ›
          </button>
        </>
      )}
      <div className="relative pb-2 pl-2">
        <div
          className="pointer-events-none absolute top-2 right-2 bottom-0 left-0 border border-dourado/70"
          aria-hidden="true"
        />
        <img
          src={lista[indice]}
          key={indice}
          alt={alt}
          className="relative max-h-[70vh] w-auto rounded motion-safe:animate-surgir"
        />
      </div>
      {lista.length > 1 && (
        <div className="mt-3 hidden justify-center gap-2 sm:flex">
          {lista.map((url, i) => (
      <button
              key={i}
        type="button"
              onClick={() => setIndice(i)}
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === indice}
              className={`border transition-opacity ${i === indice ? 'border-dourado opacity-100' : 'border-transparent opacity-40 hover:opacity-80'}`}
      >
              <img src={url} alt="" loading="lazy" className="h-10 w-14 object-cover" />
      </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar imagem ampliada"
        className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-white text-xl font-bold text-gray-900 shadow"
      >
        ✕
      </button>
    </dialog>
  );
};

export default Lightbox;