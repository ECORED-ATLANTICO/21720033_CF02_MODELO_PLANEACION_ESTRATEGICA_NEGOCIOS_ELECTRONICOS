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
        p.mb-0 El plan de acción en marketing digital traduce la estrategia definida en actividades concretas y medibles, estableciendo responsables, recursos, tiempos, indicadores y herramientas. Su correcta implementación asegura que cada acción contribuya al logro de los objetivos estratégicos, optimizando la inversión digital y permitiendo ajustes oportunos según los resultados obtenidos.

    .tarjeta.color-secundario-cv.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
      p.mb-0 Este plan integra los elementos fundamentales: presupuesto, cronograma, indicadores, herramientas, control, seguimiento y evaluación, garantizando que las estrategias digitales se ejecuten de manera coordinada y eficiente.

    Separador
    
    .bg_img_7.mb-3

      #t_5_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.1.	Presupuesto
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
        .col-md-10.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_4.png', class="img-fluid") 
      
      .titulo-sexto.color-primario(data-aos="zoom-in-right")
        h5 Tabla 3.
        |  Presupuesto estimado para acciones de marketing digital    
      .tabla-a.mb-5(data-aos="flip-left")
        table
          caption 
            p Nota. Sena, (2026).
          thead
            tr
              th.col-auto.col-lg-7 Área de competencia 
              th.col-auto.col-lg-auto Gasto estimado
          tbody
            tr
              td.text-start Marketing digital (campañas pagadas, publicidad y social ads).
              td.text-start $ 50.000.000
            tr
              td.text-start Desarrollo y optimización web/app.
              td.text-start $ 20.000.000
            tr
              td.text-start Logística digital (entregas, envíos y gestión de pedidos).
              td.text-start $ 30.000.000
            tr
              td.text-start Atención al cliente digital (soporte, chatbots y CRM).
              td.text-start $ 15.000.000
      
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
      .h2(data-aos="fade-right") 5.2.	Cronograma
    .mb-0 

    Separador
  
    #t_5_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.3.	Indicadores
    .mb-0 

    Separador
  
    #t_5_4.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.4.	Herramientas
    .mb-0

    Separador
  
    #t_5_5.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.5.	Control
    .mb-0

    Separador
  
    #t_5_6.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.6.	Seguimiento
    .mb-0

    Separador
  
    #t_5_7.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.7.	Evaluación
    .mb-0

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
