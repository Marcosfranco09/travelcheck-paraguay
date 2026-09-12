import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    'Quiero cotizar un paquete a España',
    'Deseo información sobre cuotas semanales',
    '¿Qué seguro médico internacional ofrecen?',
    'Quiero hablar con un asesor'
  ];

  const handleSend = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/595985212187?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Pop-over Chat Drawer with Entrance & Exit Animation */}
      <div className={`absolute bottom-16 sm:bottom-18 right-0 w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] p-5 border border-border bg-card space-y-4 transition-all duration-300 ease-out origin-bottom-right shadow-2xl ${
        isOpen 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 bg-whatsapp flex items-center justify-center text-white">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 border border-card" />
            </div>
            <div>
              <p className="font-semibold text-primary text-xs sm:text-sm">Travel Check Paraguay</p>
              <p className="text-[10px] text-muted font-medium">Asesoría directa • En línea</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-muted hover:text-primary hover:bg-subtle hover:scale-110 transition-all cursor-pointer"
            aria-label="Cerrar chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Welcome Text */}
        <div className="p-3 bg-subtle border border-border text-xs text-secondary space-y-1">
          <p className="font-medium text-primary">¡Hola!</p>
          <p>¿En qué podemos ayudarte para planificar tu viaje o paquete migratorio a España?</p>
        </div>

        {/* Quick Choice Buttons */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">Opciones rápidas:</p>
          {quickOptions.map((opt, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleSend(opt)}
              className="w-full p-2.5 bg-subtle hover:bg-card hover:border-whatsapp hover:translate-x-1 focus:bg-card focus:border-whatsapp focus:outline-none focus-visible:outline-2 focus-visible:outline-whatsapp border border-border text-left text-xs text-secondary hover:text-primary transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <span>{opt}</span>
              <Send className="w-3 h-3 text-whatsapp opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Direct Button */}
        <button
          type="button"
          onClick={() => handleSend('Hola Travel Check, quisiera recibir asesoramiento personalizado.')}
          className="btn btn-whatsapp w-full py-2.5 text-xs justify-center font-medium"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
          <span>Iniciar Chat Libre en WhatsApp</span>
        </button>
      </div>

      {/* Bottom Row: Tooltip Pill + Floating Action Button */}
      <div className="flex items-center gap-2.5">
        
        {/* Subtle Invitation Pill (Desktop only, visible when chat is closed) */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-card border border-border py-2 px-3.5 shadow-md hover:border-whatsapp transition-all duration-200 cursor-pointer group text-left"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-secondary group-hover:text-primary transition-colors">
              ¿Dudas? <strong className="text-primary font-semibold">Chatea con nosotros</strong>
            </span>
          </button>
        )}

        {/* Main Floating Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-whatsapp text-white hover:bg-emerald-500 hover:scale-105 active:scale-95 shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/35 focus:outline-none focus-visible:outline-2 focus-visible:outline-whatsapp focus-visible:outline-offset-2 transition-all duration-200 flex items-center justify-center cursor-pointer border border-whatsapp relative"
          aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
          title={isOpen ? 'Cerrar chat' : 'Contactar por WhatsApp'}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200" />
          ) : (
            <>
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-card"></span>
              </span>
            </>
          )}
        </button>

      </div>

    </div>
  );
}
