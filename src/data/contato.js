// TODO: confirmar o número do WhatsApp com o cliente antes de publicar
export const WHATSAPP_NUMERO = '555332732106';
export const WHATSAPP_MENSAGEM = 'Olá! Vim pelo site e gostaria de um orçamento.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;