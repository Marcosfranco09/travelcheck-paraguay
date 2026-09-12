import React, { useState } from 'react';
import { Calendar, Clock, CreditCard, Sparkles, Check, ShieldCheck, Lock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function PaymentSimulator() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [frequency, setFrequency] = useState('semanal'); // 'semanal', 'quincenal', 'mensual'
  const [months, setMonths] = useState(6);

  const packages = [
    {
      id: 0,
      title: 'Paquete Madrid Completo',
      tag: 'Más Solicitado',
      isFeatured: true,
      gsPrice: 8750000,
      usdPrice: 1180,
      includes: ['Pasaje Aéreo', 'Maleta 23kg', 'Seguro Schengen', 'Alojamiento Inicial']
    },
    {
      id: 1,
      title: 'Paquete Barcelona & Cataluña',
      tag: 'Destino Frecuente',
      isFeatured: false,
      gsPrice: 8950000,
      usdPrice: 1210,
      includes: ['Pasaje Asunción-Barcelona', 'Equipaje Bodega', 'Seguro de Viaje', 'Orientación']
    },
    {
      id: 2,
      title: 'Paquete Valencia / Mediterráneo',
      tag: 'Plan Económico',
      isFeatured: false,
      gsPrice: 8600000,
      usdPrice: 1160,
      includes: ['Vuelo Internacional', 'Equipaje Completo', 'Asistencia Médica', 'Reserva Hotel']
    },
    {
      id: 3,
      title: 'Solo Pasaje Aéreo Asunción — Madrid',
      tag: 'Básico',
      isFeatured: false,
      gsPrice: 6500000,
      usdPrice: 880,
      includes: ['Boleto Confirmado', 'Equipaje 23kg', 'Emisión Inmediata']
    }
  ];

  const currentPkg = packages[selectedPackage];

  // Calculations
  const getInstallmentsCount = () => {
    switch (frequency) {
      case 'semanal': return months * 4;
      case 'quincenal': return months * 2;
      case 'mensual': return months;
      default: return months * 4;
    }
  };

  const totalPayments = getInstallmentsCount();
  const installmentGs = Math.round(currentPkg.gsPrice / totalPayments);
  const installmentUsd = Math.round(currentPkg.usdPrice / totalPayments);

  const formatGs = (val) => {
    return 'Gs. ' + val.toLocaleString('es-PY');
  };

  const whatsappMessage = `Hola Travel Check, estuve calculando mi plan de pago en la web.%0A%0A*Paquete:* ${encodeURIComponent(currentPkg.title)}%0A*Frecuencia:* ${frequency.toUpperCase()}%0A*Plazo:* ${months} meses (${totalPayments} cuotas)%0A*Cuota estimada:* ${formatGs(installmentGs)} /cuota.%0A%0A¿Me podrían dar más detalles para iniciar?`;
  const whatsappUrl = `https://wa.me/595985212187?text=${whatsappMessage}`;

  return (
    <section id="simulador" className="py-16 md:py-24 bg-page relative border-t border-border">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16 flex flex-col items-center reveal">
          <span className="eyebrow-label">
            Financiación Transparente
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Simula tu Plan de Pago <span className="text-brand-blue">en Cuotas</span>
          </h2>
          
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto font-normal">
            Calcula exactamente cuánto abonarías por semana, quincena o mes. Sin comisiones sorpresa ni cargos ocultos.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch reveal delay-100">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 bg-card border border-border p-6 sm:p-8 space-y-7 flex flex-col justify-between hover:border-border-strong transition-colors duration-200">
            
            {/* Step 1: Select Package */}
            <div className="space-y-3.5">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-blue text-white text-xs flex items-center justify-center font-medium">1</span>
                <span>Selecciona el Paquete</span>
              </label>

              <div className="grid gap-2.5">
                {packages.map((pkg, idx) => {
                  const isSelected = selectedPackage === idx;
                  return (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setSelectedPackage(idx)}
                      className={`w-full text-left p-3.5 transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 border-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-1 hover:translate-x-1 active:scale-[0.99] ${
                        isSelected
                          ? 'bg-blue-50/70 dark:bg-subtle border-brand-blue shadow-sm'
                          : 'bg-card border-border hover:border-brand-blue/60'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm sm:text-base ${isSelected ? 'font-semibold text-brand-blue' : 'font-medium text-primary'}`}>
                            {pkg.title}
                          </span>
                          {/* Badges: Red filled for featured, high-contrast outline for regular */}
                          <span className={`text-[10px] px-2 py-0.5 font-medium ${
                            pkg.isFeatured 
                              ? 'bg-brand-red text-white' 
                              : isSelected
                                ? 'border border-brand-blue/40 text-brand-blue bg-white dark:bg-card'
                                : 'border border-border text-secondary bg-subtle'
                          }`}>
                            {pkg.tag}
                          </span>
                        </div>
                        <p className="text-xs text-muted">
                          {pkg.includes.join(' • ')}
                        </p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <p className={`text-sm ${isSelected ? 'font-bold text-brand-blue' : 'font-semibold text-primary'}`}>
                          {formatGs(pkg.gsPrice)}
                        </p>
                        <p className="text-[11px] text-muted">~${pkg.usdPrice} USD</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Payment Frequency */}
            <div className="space-y-3.5 pt-1">
              <label className="text-xs font-semibold text-secondary uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-blue text-white text-xs flex items-center justify-center font-medium">2</span>
                <span>Frecuencia de Pago</span>
              </label>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'semanal', label: 'Semanal', desc: 'Cuotas más bajas' },
                  { id: 'quincenal', label: 'Quincenal', desc: 'Ideal quincenas' },
                  { id: 'mensual', label: 'Mensual', desc: 'Plan tradicional' }
                ].map((f) => (
                  <button
                    type="button"
                    key={f.id}
                    onClick={() => setFrequency(f.id)}
                    className={`p-3 border-2 text-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-1 hover:scale-[1.02] active:scale-[0.98] ${
                      frequency === f.id
                        ? 'bg-brand-blue text-white border-brand-blue font-semibold shadow-sm'
                        : 'bg-card border-border text-primary hover:border-brand-blue hover:text-brand-blue active:bg-subtle'
                    }`}
                  >
                    <p className={`text-xs sm:text-sm font-medium ${frequency === f.id ? 'text-white' : 'text-primary'}`}>
                      {f.label}
                    </p>
                    <p className={`text-[10px] mt-0.5 ${frequency === f.id ? 'text-white/80' : 'text-muted'}`}>
                      {f.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Duration Slider */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-secondary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 bg-brand-blue text-white text-xs flex items-center justify-center font-medium">3</span>
                  <span>Plazo de Ahorro: <strong>{months} Meses</strong></span>
                </label>
                <span className="installments-total">
                  {totalPayments} cuotas en total
                </span>
              </div>

              {/* Redesigned Custom Slider */}
              <div className="slider-container">
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="slider-native"
                  aria-label="Plazo en meses"
                />
                <div className="slider-track">
                  <div 
                    className="slider-fill" 
                    style={{ width: `${((months - 2) / 10) * 100}%` }} 
                  />
                  <div 
                    className="slider-thumb" 
                    style={{ left: `${((months - 2) / 10) * 100}%` }} 
                  />
                </div>
              </div>

              {/* Month Labels */}
              <div className="flex justify-between px-0.5">
                <span className="slider-label">
                  2 meses <span className="qualifier">· rápido</span>
                </span>
                <span className="slider-label recommended">
                  6 meses <span className="qualifier">· recomendado</span>
                </span>
                <span className="slider-label">
                  12 meses <span className="qualifier">· cómodo</span>
                </span>
              </div>
            </div>

          </div>

          {/* Results Summary Column (Right) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-card p-6 sm:p-8 border border-border relative flex flex-col justify-between h-full space-y-6">
              
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">
                    Estimación de tu Cuota
                  </p>
                  <h3 className="text-lg font-semibold text-primary">{currentPkg.title}</h3>
                </div>

                {/* Big Price Display (in Brand Red as requested) */}
                <div className="p-6 bg-subtle border border-border text-center space-y-2">
                  <p className="text-xs text-muted uppercase tracking-wider">Monto por cuota estimada</p>
                  
                  {/* Red price accent */}
                  <p className="text-3xl sm:text-4xl font-bold text-brand-red tracking-tight">
                    {formatGs(installmentGs)}
                  </p>
                  
                  <p className="text-xs text-secondary">
                    por cuota <strong className="text-primary capitalize">{frequency}</strong> (~${installmentUsd} USD)
                  </p>

                  <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted border-t border-border mt-3">
                    <Clock className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Total de {totalPayments} entregas para completar tu plan</span>
                  </div>
                </div>

                {/* Included Perks Summary */}
                <div className="space-y-2.5">
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">
                    Beneficios del plan:
                  </p>
                  <ul className="space-y-2 text-xs text-secondary">
                    {currentPkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Precio congelado en guaraníes sin variaciones</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* WhatsApp Action Button & Trust Badge */}
              <div className="pt-4 space-y-3 mt-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full py-3.5 text-center justify-center font-medium text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Solicitar este Plan por WhatsApp</span>
                </a>

                {/* Trust Badge (Affirm/Uplift Pattern as requested) */}
                <div className="p-2.5 bg-subtle border border-border text-center flex items-center justify-center gap-2 text-[11px] text-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                  <span>Pagos transparentes • Sin cargos ocultos • Respaldo directo</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
