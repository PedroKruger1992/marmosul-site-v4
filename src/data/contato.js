// TODO: confirmar o número do WhatsApp com o cliente antes de publicar
export const WHATSAPP_NUMERO = '555332732106';
export const WHATSAPP_MENSAGEM = 'Olá! Vim pelo site e gostaria de um orçamento.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
export const TELEFONE = '(53) 3273-2106';
export const TELEFONE_LINK = 'tel:+555332732106';

export const EMAIL = 'marmosul@hotmail.com.br';
export const EMAIL_LINK = `mailto:${EMAIL}`;

export const ENDERECO = 'Rua Daniel Capdeboscq, 98 · Três Vendas, Pelotas - RS';
const ENDERECO_BUSCA = encodeURIComponent('Rua Daniel Capdeboscq, 98, Pelotas - RS');
export const MAPA_EMBED = `https://www.google.com/maps?q=${ENDERECO_BUSCA}&output=embed`;
export const MAPA_LINK = `https://www.google.com/maps/search/?api=1&query=${ENDERECO_BUSCA}`;

export const HORARIO = 'Seg a sex · 08:00–12:00 e 13:30–18:30';

// TODO: pedir ao cliente os links das redes sociais
export const FACEBOOK_URL = '#';
export const INSTAGRAM_URL = '#';

export const RAZAO_SOCIAL = 'Amaral e Kruger Marmoraria Ltda';
export const CNPJ = '38.407.831/0001-55';