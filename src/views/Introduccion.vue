<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.mb-3
      .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid") 
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") Los negocios electrónicos se han consolidado como un elemento estratégico para las organizaciones, al permitir el desarrollo de modelos de negocio basados en el uso de tecnologías digitales y plataformas en línea. A través del e-commerce y el <em>marketing</em> digital, las empresas fortalecen su posicionamiento, generan valor agregado y mejoran la toma de decisiones en entornos altamente competitivos.
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.cita-decorada__texto.mb-2.p-3 Este componente formativo tiene como propósito orientar al aprendiz en la aplicación de estrategias en negocios electrónicos, abordando las diferentes categorías de los negocios digitales y el diseño de estrategias e-commerce acordes con las políticas organizacionales. Asimismo, se analizan acciones orientadas a la creación de valor agregado y a la formulación de estrategias de <em>marketing</em> digital como parte del plan estratégico del negocio <em>online</em>.
              .col-2.col-lg-2.d-none.d-lg-block 
                figure
                  img(src='@/assets/curso/introduccion/img_3.png', class="cita-decorada__imagen-flotante-1")
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_4.svg', class="img-fluid p-3")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 Durante el desarrollo del componente, el aprendiz adquirirá herramientas para estructurar un plan estratégico y un plan de acción que integre presupuesto, cronograma, indicadores, herramientas, control, seguimiento y evaluación. Estos elementos permitirán fortalecer la gestión de proyectos de negocio electrónico, garantizando coherencia entre la estrategia digital, los objetivos organizacionales y las decisiones comerciales.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Aplicación de la estrategia en negocios electrónicos

</template>

<script>
export default {
  name: 'Introduccion',
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
