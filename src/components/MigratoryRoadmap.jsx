import React from 'react';
import { Compass, CalendarCheck, ShieldCheck, HeartHandshake, Check } from 'lucide-react';

export default function MigratoryRoadmap() {
  const steps = [
    {
      number: '01',
      title: 'Asesoramiento Inicial & Planificación',
      icon: Compass,
      badge: 'Paso 1',
      description: 'Conversamos sobre tus metas de viaje (turismo, trabajo, proyecto migratorio). Evaluamos las fechas ideales y el destino en España o Europa.'
    },
    {
      number: '02',
      title: 'Plan de Pago Adaptado a tu Bolsillo',
      icon: CalendarCheck,
      badge: 'Paso 2',
      description: 'Establecemos tu esquema de cuotas semanales, quincenales o mensuales. Empiezas con una entrega accesible sin comprometer tu presupuesto.'
    },
    {
      number: '03',
      title: 'Documentación & Emisión Oficial',
      icon: ShieldCheck,
      badge: 'Paso 3',
      description: 'Emitimos tus boletos aéreos confirmados, seguro de asistencia médica obligatorio y la documentación necesaria para un ingreso seguro.'
    },
    {
      number: '04',
      title: 'Vuelo & Acompañamiento 24/7',
      icon: HeartHandshake,
      badge: 'Paso 4',
      description: 'Te guiamos en el aeropuerto de Asunción y nos mantenemos conectados durante tus conexiones y al aterrizar en España. ¡Nunca viajas solo!'
    }
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-page relative border-t border-border">
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16 flex flex-col items-center reveal">
          <span className="eyebrow-label">
            Proceso Transparente
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Tu Ruta Migratoria <span className="text-brand-blue">Paso a Paso</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto font-normal">
            Así es como te acompañamos desde tu primera consulta en Asunción hasta tu llegada y estadía en España o Europa.
          </p>
        </div>

        {/* Roadmap Grid (Animates as a single block) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal delay-100">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-card border border-border p-6 flex flex-col justify-between space-y-5 hover-lift group"
              >
                <div className="space-y-4">
                  
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-subtle border border-border text-secondary group-hover:border-brand-blue/40 transition-colors">
                      {step.badge}
                    </span>
                    <span className="text-xl font-semibold text-muted font-mono group-hover:text-brand-blue transition-colors duration-200">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Box (Unified Brand Blue) */}
                  <div className="w-10 h-10 bg-subtle border border-border text-brand-blue flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue/10 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-semibold text-primary group-hover:text-brand-blue transition-colors duration-200">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border flex items-center gap-2 text-xs text-muted">
                  <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Acompañamiento garantizado</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
