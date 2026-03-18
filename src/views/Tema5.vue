<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de acción 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema5/img_1.png')
      .bloque-texto-t__texto.col-9.mb-0.p-4
        p.mb-0 El plan de acción en <em>marketing</em> digital traduce la estrategia definida en actividades concretas y medibles, estableciendo responsables, recursos, tiempos, indicadores y herramientas. Su correcta implementación asegura que cada acción contribuya al logro de los objetivos estratégicos, optimizando la inversión digital y permitiendo ajustes oportunos según los resultados obtenidos.

    .tarjeta.color-secundario-cv.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
      p.mb-0 Este plan integra los elementos fundamentales: presupuesto, cronograma, indicadores, herramientas, control, seguimiento y evaluación, garantizando que las estrategias digitales se ejecuten de manera coordinada y eficiente.

    Separador
    
    .bg_img_7.mb-3

      #t_5_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.1 Presupuesto
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El presupuesto digital asigna recursos económicos a cada área del plan, priorizando aquellas acciones que generen mayor impacto en la estrategia. Una planificación financiera detallada evita sobrecostos, permite anticipar necesidades y optimiza el retorno de la inversión (ROI).
          .tarjeta.color-primario-v.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_3.svg', class="img-fluid p-3")
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 En la siguiente tabla se presenta la distribución del presupuesto por áreas de competencia, detallando los recursos asignados a cada componente clave del negocio digital. Esta organización permite visualizar las prioridades estratégicas y facilita la gestión eficiente de la inversión.
        .col-10.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_4.png', class="img-fluid") 
      
      .titulo-sexto.color-primario(data-aos="zoom-in-right")
        h5 Tabla 3.
        |  Presupuesto estimado para acciones de <em>marketing</em> digital    
      .tabla-a.mb-5(data-aos="flip-left")
        table
          caption 
            p <b>Nota.</b> Sena, (2026).
          thead
            tr
              th.col-auto.col-lg-7 Área de competencia 
              th.col-auto.col-lg-auto Gasto estimado
          tbody
            tr
              td.text-start <em>Marketing</em> digital (campañas pagadas, publicidad y <em>social ads</em>).
              td.text-start $50.000.000
            tr
              td.text-start Desarrollo y optimización web / app.
              td.text-start $20.000.000
            tr
              td.text-start Logística digital (entregas, envíos y gestión de pedidos).
              td.text-start $30.000.000
            tr
              td.text-start Atención al cliente digital (soporte, <em>chatbots</em> y CRM).
              td.text-start $15.000.000
      
    .cita-decorada.mb-3
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
        .row.justify-content-center.align-items-center
          .col-2.col-lg-2.d-none.d-lg-block 
            figure
              img(src='@/assets/curso/tema5/img_5.png', class="cita-decorada__imagen-flotante-6")
          .col-12.col-lg-10
            p.cita-decorada__texto.mb-2.p-3 La planificación detallada del presupuesto digital asegura que cada acción cuente con los recursos necesarios para su correcta ejecución, evitando desviaciones financieras y optimizando la asignación de fondos. Además, permite priorizar inversiones en las áreas de mayor impacto, garantizar la sostenibilidad de las campañas digitales y mejorar la eficiencia en la gestión de los activos digitales de la empresa.

    Separador

    #t_5_2.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.2 Cronograma
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_7.png', class="img-fluid") 
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3(data-aos="zoom-in-right") El cronograma de ejecución organiza temporalmente cada acción, asignando responsables y plazos, lo que garantiza eficiencia, coordinación y seguimiento oportuno. La visualización de actividades en el tiempo permite priorizar tareas críticas y anticipar posibles cuellos de botella. 
        .tarjeta.color-secundario-cv.p-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 En la siguiente tabla se organiza el cronograma de ejecución digital, asignando responsables y tiempos para garantizar una implementación ordenada y oportuna de las acciones estratégicas.
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema5/img_8.svg', class="img-fluid")
    
    .titulo-sexto.color-primario(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Cronograma de ejecución digital   
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Sena, (2026).
        thead
          tr
            th.col-2.col-lg-2 Actividad
            th.col-2.col-lg-2 Responsable
            th.col-lg-auto Mes 1
            th.col-lg-auto Mes 2
            th.col-lg-auto Mes 3
            th.col-lg-auto Mes 4
            th.col-lg-auto Mes 5
            th.col-lg-auto Mes 6
        tbody
          tr
            td.text-start Optimización SEO.
            td.text-start Especialista SEO.
            td.bg-table-01
            td.bg-table-01
            td.bg-table-01
            td.bg-table-01
            td.bg-table-01
            td.bg-table-01
          tr
            td.text-start <em>Email marketing</em>.
            td.text-start Coordinador de <em>marketing</em>.
            td
            td.bg-table-02
            td
            td.bg-table-02
            td
            td.bg-table-02
          tr
            td.text-start Mejora UX del sitio web.
            td.text-start Diseñador UX/UI.
            td.bg-table-03
            td.bg-table-03
            td
            td
            td.bg-table-03
            td.bg-table-03
          tr
            td.text-start Capacitación del equipo.
            td.text-start Líder de proyectos.
            td
            td.bg-table-04
            td.bg-table-04
            td
            td.bg-table-04
            td

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_9.svg', class="img-fluid p-3")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 Contar con un cronograma detallado brinda al equipo de <em>marketing</em> digital una guía clara sobre la secuencia y los tiempos de ejecución de cada actividad, facilitando la coordinación de recursos y responsabilidades. Esto asegura que las estrategias se implementen de manera oportuna y eficiente, minimizando retrasos, redundancias y conflictos entre tareas, al tiempo que permite anticipar posibles cuellos de botella y optimizar el rendimiento del plan de acción digital.

    Separador
  
    #t_5_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.3 Indicadores
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") Los indicadores de desempeño clave son métricas que permiten medir el impacto de cada acción digital sobre los objetivos estratégicos, facilitando la toma de decisiones basada en datos.
        .tarjeta.color-primario-v.p-4.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema5/img_10.png', class="img-fluid")
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 Los KPI (Indicadores Clave de Desempeño) son métricas estratégicas que permiten a las organizaciones medir de manera objetiva el efecto de sus acciones en entornos digitales. Estos indicadores convierten datos en información práctica, apoyando la toma de decisiones, la optimización de recursos y la evaluación de resultados frente a los objetivos planteados. Los KPI ayudan a determinar si las campañas digitales cumplen con los objetivos de captación, retención y fidelización de clientes, así como con metas de visibilidad y rentabilidad.
      .col-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_11.png', class="img-fluid") 
    
    .tarjeta.color-secundario-cv.p-3.rounded-4.mb-4
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
          p.mb-0 Seleccionar los indicadores correctos es esencial, ya que cada KPI debe reflejar aspectos específicos del desempeño digital, como la eficiencia de la conversión de visitantes en clientes, la interacción y compromiso con la marca, el tráfico generado por distintas fuentes, la satisfacción de los usuarios y la rentabilidad de las campañas. Asimismo, permiten detectar desviaciones, priorizar mejoras y ajustar estrategias en tiempo real, fortaleciendo el ciclo de mejora continua y garantizando que los esfuerzos digitales se traduzcan en resultados medibles y sostenibles.
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_12.svg', class="img-fluid")

    p.mb-5(data-aos="zoom-in-right") La siguiente tabla presenta los principales tipos de KPI utilizados en <em>marketing</em> digital, su propósito, ejemplos de medición y el beneficio que aportan a la toma de decisiones estratégicas.

    .titulo-sexto.color-primario(data-aos="zoom-in-right")
      h5 Tabla 5.
      |  Tipos de KPI en <em>marketing</em> digital   
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Adaptada de Kotler y Keller (2021), David (2020), Laudon y Laudon (2020) y ProColombia (2023).
        thead
          tr
            th.col-auto.col-lg-2 Tipo de KPI
            th.col-auto.col-lg-auto Propósito principal
            th.col-auto.col-lg-3 Ejemplos de medición
            th.col-auto.col-lg-3 Beneficio principal
        tbody
          tr
            td.text-start Conversión.
            td.text-start Evaluar la efectividad en transformar visitantes en clientes o <em>leads</em>.
            td.text-start Porcentaje de finalización de compra, registros en formularios.
            td.text-start Permite medir el éxito de las campañas y procesos de venta.
          tr
            td.text-start Retención.
            td.text-start Mantener y fidelizar a los clientes existentes.
            td.text-start Porcentaje de clientes recurrentes, tasa de abandono.
            td.text-start Ayuda a identificar oportunidades para reforzar la lealtad.
          tr
            td.text-start <em>Engagement.</em>
            td.text-start Medir el nivel de interacción y compromiso con la marca.
            td.text-start Comentarios, compartidos, tiempo promedio en página.
            td.text-start Indica relevancia del contenido y conexión con la audiencia.
          tr
            td.text-start Tráfico web.
            td.text-start Analizar la cantidad y calidad de visitantes.
            td.text-start Visitantes únicos, fuentes de tráfico, páginas más visitadas.
            td.text-start Evalúa el alcance y la eficacia de estrategias digitales.
          tr
            td.text-start ROI digital.
            td.text-start Determinar la rentabilidad de campañas y acciones digitales.
            td.text-start Retorno sobre inversión, costo por adquisición de clientes.
            td.text-start Optimiza la asignación de recursos y prioriza acciones efectivas.
          tr
            td.text-start Experiencia del usuario.
            td.text-start Evaluar la facilidad de uso y satisfacción en plataformas digitales.
            td.text-start Tasa de abandono, tiempo en sitio, retroalimentación directa.
            td.text-start Mejora la navegación, la conversión y la satisfacción del cliente.

    .tarjeta.color-primario-v.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
      p.mb-0 La implementación de KPI adecuados no solo permite medir resultados, sino que también proporciona una visión clara del desempeño global del <em>marketing</em> digital, facilitando la toma de decisiones estratégicas basadas en evidencia y promoviendo la eficiencia en la gestión de recursos.

    Separador
  
    #t_5_4.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.4 Herramientas
    .mb-0
        
    .bg_img_8.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") Las herramientas digitales en <em>marketing</em> son recursos esenciales que permiten a las empresas implementar, supervisar y evaluar sus estrategias de <em>marketing online</em> de manera eficiente. Estas plataformas facilitan la automatización de procesos, la recopilación y análisis de datos, y la toma de decisiones basadas en información objetiva. Al integrar herramientas adecuadas en la estrategia digital, las organizaciones pueden mejorar la efectividad de sus campañas, optimizar recursos, identificar oportunidades de mejora y generar reportes precisos que apoyen la gestión estratégica del <em>marketing</em>.
          .tarjeta.color-secundario-cv.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_14.svg', class="img-fluid p-3")
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 La selección de herramientas debe considerar la funcionalidad específica que aporta a cada etapa del proceso digital, desde la captación de tráfico y generación de <em>leads</em>, hasta la fidelización de clientes y el análisis del rendimiento de campañas. Contar con un ecosistema digital integrado garantiza que todas las acciones estén alineadas con los objetivos de la empresa y que los resultados sean medibles y escalables.
        .col-10.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_15.png', class="img-fluid") 

      p.mb-3(data-aos="zoom-in-right") A continuación, se muestran las diferentes  herramientas digitales claves utilizadas en <em>marketing</em> digital, destacando su función principal y su aporte a la gestión, análisis y optimización de las estrategias digitales.

      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-4.mb-lg-0.mb-3(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema5/img_16.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta.color-primario-cv.w-100.d-flex.flex-column.p-0.overflow-hidden
                .d-flex.justify-content-center.align-items-center.p-4.tarjeta--fondo-con--colo-blanco.mb-3
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img_17.svg', class="img-fluid" style="max-height: 75px; object-fit: contain;")
                .p-4
                  h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3 Google Analytics
                  p.mb-0 Monitoreo de tráfico web, comportamiento de usuarios y conversiones.
              .tarjeta.color-primario-cv.w-100.d-flex.flex-column.p-0.overflow-hidden
                .d-flex.justify-content-center.align-items-center.p-4.tarjeta--fondo-con--colo-blanco.mb-3
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img_18.svg', class="img-fluid" style="max-height: 100px; object-fit: contain;")
                .p-4
                  h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3 HubSpot
                  p.mb-0 Gestión de relaciones con clientes (CRM) y automatización de campañas de <em>marketing</em>.
              .tarjeta.color-primario-cv.w-100.d-flex.flex-column.p-0.overflow-hidden
                .d-flex.justify-content-center.align-items-center.p-4.tarjeta--fondo-con--color-adicional-3.mb-3
                  figure.mb-3
                    img(src='@/assets/curso/tema5/img_19.svg', class="img-fluid" style="max-height: 100px; object-fit: contain;")
                .p-4
                  h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3 Ahrefs
                  p.mb-0 Optimización SEO, análisis de palabras clave y seguimiento de la competencia.
              .tarjeta.color-primario-cv.w-100.d-flex.flex-column.p-0.overflow-hidden
                .d-flex.justify-content-center.align-items-center.p-4.tarjeta--fondo-con--colo-blanco.mb-3
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img_20.svg', class="img-fluid mt-1" style="max-height: 75px; object-fit: contain;")
                .p-4
                  h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3 Wix <em>e-commerce</em>
                  p.mb-0 Plataforma integral para la creación y gestión de tiendas virtuales.
              .tarjeta.color-primario-cv.w-100.d-flex.flex-column.p-0.overflow-hidden
                .d-flex.justify-content-center.align-items-center.p-4.tarjeta--fondo-con--colo-blanco.mb-3
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img_21.svg', class="img-fluid mb-3 mt-3" style="max-height: 100px; object-fit: contain;")
                .p-4
                  h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3 Hootsuite
                  p.mb-0 Gestión y programación de publicaciones en redes sociales, análisis de <em>engagement</em>.
              .tarjeta.color-primario-cv.w-100.d-flex.flex-column.p-0.overflow-hidden
                .d-flex.justify-content-center.align-items-center.p-4.tarjeta--fondo-con--colo-blanco.mb-3
                  figure.mb-0
                    img(src='@/assets/curso/tema5/img_22.svg', class="img-fluid mt-2" style="max-height: 100px; object-fit: contain;")
                .p-4
                  h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3 Mailchimp
                  p.mb-0 Automatización de email <em>marketing</em>, segmentación de audiencias y análisis de campañas.

    .cita-decorada.mb-3
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
        .row.justify-content-center.align-items-center
          .col-2.col-lg-2.d-none.d-lg-block 
            figure
              img(src='@/assets/curso/tema5/img_23.png', class="cita-decorada__imagen-flotante-6")
          .col-12.col-lg-10
            p.cita-decorada__texto.mb-2.p-3 La correcta selección e implementación de herramientas digitales no solo facilita la ejecución de estrategias, sino que también permite automatizar tareas repetitivas, centralizar la información y generar <em>insights</em> valiosos para optimizar decisiones. Al contar con un conjunto de herramientas integradas, las empresas pueden medir el rendimiento en tiempo real, ajustar campañas rápidamente y maximizar el retorno de inversión en <em>marketing</em> digital, fortaleciendo la competitividad y la capacidad de respuesta en entornos digitales, pues son altamente cambiantes.

    Separador
  
    #t_5_5.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.5 Control
    .mb-0
        
    .bg_img_9.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El control en el plan de acción de <em>marketing</em> digital permite verificar que las actividades se ejecuten conforme a lo planificado, asegurando el uso adecuado de los recursos y la alineación con los objetivos estratégicos definidos por la organización.
          .tarjeta.color-secundario-cv.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_26.svg', class="img-fluid")
              .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
                p.mb-0 A continuación, describe los principales elementos de control aplicados en el <em>marketing</em> digital, especificando su finalidad, frecuencia de aplicación y responsables, con el fin de asegurar el cumplimiento de los objetivos y la correcta ejecución de las estrategias digitales.
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_27.png', class="img-fluid") 

      .row.justify-content-center.align-items-strat.mb-5
        .col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema5/img_28.png', class="img-fluid")
        .col-12.col-lg-9.order-2.order-lg-1.mb-3
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-acento-contenido-cv")
            .row.justify-content-center.align-items-center.mb-0(titulo="Control presupuestal")
              .col-12.col-lg-9.order-2.order-lg-1
                p.mb-0 Revisión del uso eficiente de los recursos financieros asignados a las acciones digitales.
                p.mb-0 #[b Frecuencia:] mensual.
                p.mb-0 #[b Responsable:] coordinador de <em>marketing</em> digital.
              .col-lg-2.d-lg-block.d-none.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_29.svg', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0(titulo="Control de campañas")
              .col-12.col-lg-9.order-2.order-lg-1
                p.mb-0 Análisis del desempeño de campañas frente a los objetivos establecidos.
                p.mb-0 #[b Frecuencia:] quincenal.
                p.mb-0 #[b Responsable:] analista de <em>marketing</em> digital.
              .col-lg-2.d-lg-block.d-none.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_30.svg', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0(titulo="Control de contenidos")
              .col-12.col-lg-9.order-2.order-lg-1
                p.mb-0 Verificación de calidad, coherencia y alineación estratégica del contenido publicado.
                p.mb-0 #[b Frecuencia:] mensual.
                p.mb-0 #[b Responsable:] gestor de contenidos.
              .col-lg-2.d-lg-block.d-none.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_31.svg', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0(titulo="Control de plataformas")
              .col-12.col-lg-9.order-2.order-lg-1
                p.mb-0 Supervisión del correcto funcionamiento de canales y herramientas digitales.
                p.mb-0 #[b Frecuencia:] permanente.
                p.mb-0 #[b Responsable:] equipo técnico.
              .col-lg-2.d-lg-block.d-none.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_32.svg', class="img-fluid")
           
      p.mb-5(data-aos="zoom-in-right") El control sistemático permite identificar desviaciones de manera oportuna, aplicar acciones correctivas y garantizar que la estrategia digital se mantenga enfocada en el logro de resultados medibles.

    Separador
  
    #t_5_6.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.6.	Seguimiento
    .mb-0

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_33.svg', class="img-fluid p-3")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 El seguimiento consiste en el monitoreo continuo del avance de las acciones digitales, facilitando el análisis del desempeño, la detección de tendencias y la toma de decisiones basada en datos reales. Un seguimiento constante permite ajustar las tácticas digitales en tiempo real, optimizar el rendimiento de las campañas y fortalecer la eficiencia operativa del plan de acción. En la siguiente tabla se muestra seguimiento dirigido a las acciones antes mencionadas.

    .titulo-sexto.color-primario(data-aos="zoom-in-right")
      h5 Tabla 6.
      |  Seguimiento de acciones del <em>marketing</em> digital  
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Adaptada de Laudon y Laudon (2020) y ProColombia (2023).
        thead
          tr
            th.col-auto.col-lg-2 Acción estratégica
            th.col-auto.col-lg-auto Indicador asociado
            th.col-auto.col-lg-3 Herramienta de seguimiento
            th.col-auto.col-lg-3 Periodicidad
        tbody
          tr
            td.text-start Optimización SEO.
            td.text-start Tráfico orgánico.
            td.text-start Google Analytics.
            td.text-start Mensual.
          tr
            td.text-start <em>Email marketing</em>.
            td.text-start Tasa de apertura y clics.
            td.text-start HubSpot.
            td.text-start Quincenal.
          tr
            td.text-start Mejora de UX.
            td.text-start Tiempo de permanencia en el sitio.
            td.text-start Google Analytics.
            td.text-start Mensual
          tr
            td.text-start Redes sociales.
            td.text-start Nivel de interacción.
            td.text-start Métricas de la plataforma.
            td.text-start Semanal.

    Separador
  
    #t_5_7.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.7.	Evaluación
    .mb-0

    .tarjeta.color-secundario-cv.p-3.rounded-4.mb-4
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
          p.mb-0 La evaluación analiza de forma integral los resultados obtenidos al finalizar el plan de acción, comparándolos con los objetivos propuestos para determinar el impacto real de las estrategias implementadas. La siguiente tabla resume la evaluación del plan de acción digital a partir de los resultados obtenidos y su nivel de cumplimiento.
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_34.svg', class="img-fluid")

    .titulo-sexto.color-primario(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Evaluación del plan de acción digital
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Adaptada de Kotler y Keller (2021) y David (2020).
        thead
          tr
            th.col-auto.col-lg-auto Criterio de evaluación
            th.col-auto.col-lg-auto Indicador
            th.col-auto.col-lg-auto Resultado esperado
            th.col-auto.col-lg-auto Nivel de cumplimiento
        tbody
          tr
            td.text-start Efectividad.
            td.text-start Incremento de ventas digitales.
            td.text-start ≥ 15 %.
            td.text-start Alto / medio / bajo.
          tr
            td.text-start Eficiencia.
            td.text-start Relación costo–beneficio.
            td.text-start Optimización del presupuesto.
            td.text-start Alto / medio / bajo.
          tr
            td.text-start Impacto.
            td.text-start Fidelización de clientes.
            td.text-start Aumento de recurrencia.
            td.text-start Alto / medio / bajo.
          tr
            td.text-start Mejora continua.
            td.text-start Ajustes estratégicos aplicados.
            td.text-start Lecciones aprendidas.
            td.text-start Alto / medio / bajo.
          
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-7
        .tarjeta.color-primario.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-10.col-md-8.col-lg-5.col-xl-5.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema5/img_35.png", class="img-fluid w-100")
            .col-12.col-md-12.col-lg-7.col-xl-7.mb-lg-0
              h2.mb-2 Pódcast
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="<h5 class='mb-0'>Charlas que venden</h5> Plan de acción y gestión en <em>marketin</em> digital"
                :audio="require('@/assets/curso/tema4/img_13.svg')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-primario-o.rounded-3.overflow-hidden
          .row.align-items-center.mb-0
            .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-0
                img(src="@/assets/curso/tema5/img_36.png")
            .col-12.col-md-8.col-lg-10.p-4
              .row.justify-content-between.align-items-center.g-3
                .col-12.col-sm
                  p.mb-0.fw-bold.text-white Ir a los siguientes <em>links</em> con la temática del diseño de un plan estratégico de <em>marketing</em> digital aplicado a negocios electrónicos, incluyendo pasos clave y buenas prácticas y aprender a identificar y aplicar indicadores clave de desempeño (KPI) para medir y evaluar estrategias en negocios electrónicos:
                .col-12.col-sm-auto.pe-4
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=sAvopikTTWE" target="_blank")
                    span Enlace
                    i.fas.fa-link.ms-2
                  br
                  br
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=EoGf5vgy1EM" target="_blank")
                    span Enlace
                    i.fas.fa-link.ms-2
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
