import { useEffect, useRef } from 'react';

const Lightbox = ({ imagem, alt, onFechar }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  const fechar = () => {
    dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onFechar}
      onClick={(e) => {
        if (e.target === dialogRef.current) fechar();
      }}
      className="m-auto max-h-[90vh] max-w-[90vw] overflow-visible bg-transparent p-0 backdrop:bg-black/80"
    >
      <img src={imagem} alt={alt} className="max-h-[85vh] w-auto rounded" />
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