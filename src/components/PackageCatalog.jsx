import React, { useState } from 'react';
import { MapPin, Check } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function PackageCatalog() {
  const [activeTab, setActiveTab] = useState('all');

  const packagesList = [
    {
      id: 1,
      category: 'migratorio',
      city: 'Madrid',
      country: 'España',
      title: 'Paquete Migratorio Madrid Premium',
      badge: 'El Más Solicitado',
      isFeatured: true,
      gsPrice: 8750000,
      usdPrice: 1180,
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=800&auto=format&fit=crop',
      features: [
        'Pasaje Aéreo Asunción — Madrid (Ida/Vuelta o Solo Ida)',
        'Maleta en bodega (23kg) + Equipaje de mano',
        'Seguro Médico Internacional obligatorio (Schengen)',
        'Reserva y comprobante de hotel/alojamiento inicial',
        'Asesoría continua previa y durante tu llegada'
      ]
    },
    {
      id: 2,
      category: 'migratorio',
      city: 'Barcelona',
      country: 'España',
      title: 'Paquete Barcelona & Cataluña',
      badge: 'Alta Demanda',
      isFeatured: false,
      gsPrice: 8950000,
      usdPrice: 1210,
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800&auto=format&fit=crop',
      features: [
        'Vuelo Asunción — Barcelona con conexiones optimizadas',
        'Equipaje de bodega 23kg garantizado',
        'Seguro Médico Schengen con cobertura médica completa',
        'Documentación y reservas de apoyo migratorio',
        'Orientación directa antes de embarcar'
      ]
    },
    {
      id: 3,
      category: 'migratorio',
      city: 'Valencia / Alicante',
      country: 'España',
      title: 'Paquete Costa Mediterránea',
      badge: 'Familiar',
      isFeatured: false,
      gsPrice: 8600000,
      usdPrice: 1160,
      image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=800&auto=format&fit=crop',
      features: [
        'Vuelo con conexión óptima hacia Valencia o Alicante',
        'Equipaje completo en bodega incluido',
        'Asistencia médica internacional de viaje',
        'Comprobante de alojamiento para ingreso',
        'Asesoría para traslados terrestres'
      ]
    },
    {
      id: 4,
      category: 'vuelo',
      city: 'Madrid / Barcelona',
      country: 'España',
      title: 'Solo Pasaje Aéreo Confirmado',
      badge: 'Tarifa Aérea',
      isFeatured: false,
      gsPrice: 6500000,
      usdPrice: 880,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
      features: [
        'Boleto aéreo con aerolíneas de primer nivel',
        'Equipaje de mano y maleta en bodega incluidos',
        'Emisión oficial e inmediata con código de reserva',
        'Opción de financiación en cuotas semanales',
        'Flexibilidad en fechas según disponibilidad'
      ]
    },
    {
      id: 5,
      category: 'seguro',
      city: 'Toda Europa',
      country: 'Espacio Schengen',
      title: 'Seguro Médico Schengen Obligatorio',
      badge: 'Requisito',
      isFeatured: false,
      gsPrice: 950000,
      usdPrice: 130,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
      features: [
        'Cobertura mínima de €30.000 exigida por la UE',
        'Válido para los 29 países del espacio Schengen',
        'Asistencia médica, hospitalización y repatriación',
        'Certificado en español e inglés listo para presentar',
        'Activación inmediata sin deducibles'
      ]
    },
    {
      id: 6,
      category: 'migratorio',
      city: 'Málaga / Sevilla',
      country: 'España',
      title: 'Paquete Andalucía & Sur de España',
      badge: 'Económico',
      isFeatured: false,
      gsPrice: 8800000,
      usdPrice: 1190,
      image: 'https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=800&auto=format&fit=crop',
      features: [
        'Vuelo Asunción con escala hacia el sur español',
        'Equipaje despachado en bodega sin costos extra',
        'Seguro médico y asistencia integral',
        'Acompañamiento en el itinerario de viaje',
        'Planes de pago flexibles adaptados'
      ]
    }
  ];

  const filteredPackages = activeTab === 'all' 
    ? packagesList 
    : packagesList.filter(p => p.category === activeTab);

  const formatGs = (val) => {
    return 'Gs. ' + val.toLocaleString('es-PY');
  };

  return (
    <section id="paquetes" className="py-16 md:py-24 bg-page relative border-t border-border">
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14 flex flex-col items-center reveal">
          <span className="eyebrow-label">
            Destinos Destacados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Paquetes Migratorios <span className="text-brand-blue">& Vuelos</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto font-normal">
            Todos nuestros paquetes cuentan con opción de financiación en cuotas semanales, quincenales o mensuales.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12 reveal delay-100">
          {[
            { id: 'all', label: 'Todos los Paquetes' },
            { id: 'migratorio', label: 'Paquetes Migratorios' },
            { id: 'vuelo', label: 'Solo Vuelos' },
            { id: 'seguro', label: 'Seguro Schengen' }
          ].map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 border-2 cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-1 hover:scale-[1.02] active:scale-[0.98] ${
                activeTab === tab.id
                  ? 'bg-brand-blue text-white border-brand-blue font-semibold shadow-sm'
                  : 'bg-card text-secondary border-border hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Packages Grid with Smooth Category Transition */}
        <div 
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-tab-fade"
        >
          {filteredPackages.map((pkg) => {
            const whatsappText = `Hola%20Travel%20Check,%20deseo%20más%20información%20y%20cotización%20del%20${encodeURIComponent(pkg.title)}`;
            const waUrl = `https://wa.me/595985212187?text=${whatsappText}`;

            return (
              <div 
                key={pkg.id} 
                className="bg-card border border-border overflow-hidden flex flex-col justify-between hover-lift group"
              >
                <div>
                  {/* Card Image with subtle Brand Blue overlay for consistency */}
                  <div className="relative h-44 w-full overflow-hidden bg-subtle">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover img-subtle-zoom group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Consistent blue overlay across all destination photography */}
                    <div className="absolute inset-0 bg-[#0038A8]/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-black/25" />
                    
                    {/* Badge: Solid red only for featured, neutral for rest */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase ${
                        pkg.isFeatured
                          ? 'bg-brand-red text-white border border-brand-red'
                          : 'bg-card text-secondary border border-border'
                      }`}>
                        {pkg.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-white text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-red" />
                      <span>{pkg.city}, {pkg.country}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3.5">
                    <h3 className="text-base font-semibold text-primary group-hover:text-brand-blue transition-colors">
                      {pkg.title}
                    </h3>

                    {/* Features List - Unified to Brand Blue */}
                    <ul className="space-y-1.5 text-xs text-secondary">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer & Pricing */}
                <div className="p-5 pt-0">
                  <div className="pt-3.5 border-t border-border flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] text-muted">Precio de contado</p>
                      <p className="text-base font-semibold text-brand-red">{formatGs(pkg.gsPrice)}</p>
                      <p className="text-[10px] text-muted">~${pkg.usdPrice} USD</p>
                    </div>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp text-xs font-medium py-2 px-3.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
