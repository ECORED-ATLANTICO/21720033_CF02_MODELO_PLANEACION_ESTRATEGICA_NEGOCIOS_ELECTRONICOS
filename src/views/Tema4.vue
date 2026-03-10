<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan estratégico en <em>marketing</em> digital

    .tarjeta--bg-img.color-secundario-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema4/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 El plan estratégico de marketing digital es una guía que permite a las empresas definir su rumbo, objetivos y acciones en entornos digitales, optimizando recursos y asegurando resultados medibles. Integra misión, visión, objetivos y estrategias, garantizando coherencia y competitividad en el mercado online.

    .bg_img_7.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema4/img_3.svg', class="img-fluid")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 La misión digital establece el propósito de la empresa en el ámbito online y cómo genera valor para los clientes, orientando la estrategia hacia metas concretas. La visión digital señala la posición futura deseada, indicando hacia dónde se dirige la empresa y cómo quiere ser percibida por clientes y competidores, guiando las decisiones estratégicas.
          .cita-decorada.mb-3
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
              .row.justify-content-center.align-items-center
                .col-2.col-lg-2.d-none.d-lg-block 
                  figure
                    img(src='@/assets/curso/tema4/img_4.png', class="cita-decorada__imagen-flotante-5")
                .col-12.col-lg-10
                  p.cita-decorada__texto.mb-2.p-3 Wix tiene como misión digital: empoderar a las personas y empresas para crear su presencia digital de manera sencilla y efectiva. Como visión digital busca: ser la plataforma líder que permita a cualquier usuario construir un negocio digital completo sin necesidad de conocimientos técnicos avanzados.
          p.mb-3(data-aos="zoom-in-right") Contar con misión y visión claras en marketing digital permite alinear todos los esfuerzos, garantizando coherencia estratégica y una identidad digital sólida que fortalezca la relación con los clientes.
          p.mb-0(data-aos="zoom-in-right") Los objetivos en marketing digital deben ser SMART, asegurando que sean:
        .col-md-10.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema4/img_6.png', class="img-fluid") 
     
      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-4.mb-lg-0.mb-3(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema4/img_7.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-2.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3.m-3 Específicos
                .tarjeta--slider__content.text-center Definen claramente lo que se pretende lograr. 
              .tarjeta--color-white.h-100
                .tarjeta--02
                h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3.m-3.mt-0 Medibles
                .tarjeta--slider__content.text-center Permiten cuantificar el progreso y resultados.
              .tarjeta--color-white.h-100
                .tarjeta--03
                h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3.m-3.mt-0 Alcanzables
                .tarjeta--slider__content.text-center Realistas según los recursos de la empresa.
              .tarjeta--color-white.h-100
                .tarjeta--04
                h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3.m-3.mt-0 Relevantes
                .tarjeta--slider__content.text-center Contribuyen a la misión y visión de la empresa.
              .tarjeta--color-white.h-100
                .tarjeta--05
                h6.text-white.text-center.bg-color-primario-o.text-center.fw-bold.p-3.m-3.mt-0 Temporales
                .tarjeta--slider__content.text-center Con un plazo definido para su cumplimiento.
             
    .titulo-sexto.color-primario(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Ejemplos de objetivos SMART en marketing digital   
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptada de Chaffey y Ellis-Chadwick (2022).
        thead
          tr
            th.col-auto.col-lg-3 Objetivo
            th.col-auto.col-lg-2 Específico
            th.col-auto.col-lg-2 Medible
            th.col-auto.col-lg-auto Alcanzable
            th.col-auto.col-lg-auto Relevante
            th.col-auto.col-lg-2 Temporal
        tbody
          tr
            td.text-start Mejorar conversión en tienda online.
            td.text-start Incrementar ventas B2C mediante la página web.
            td.text-start Incremento del 15 % en conversiones.
            td Sí
            td Sí
            td 12 meses.
          tr
            td.text-start Fidelizar clientes digitales.
            td.text-start Incrementar clientes recurrentes.
            td.text-start Aumento del 10 %.
            td Sí
            td Sí
            td 6 meses.
          tr
            td.text-start Aumentar tráfico orgánico.
            td.text-start Mejorar posicionamiento SEO del blog.
            td.text-start 30,000 visitas mensuales.
            td Sí
            td Sí
            td 12 meses.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
        .tarjeta.color-secundario-cv.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid p-3")
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 Definir objetivos SMART permite monitorear avances, identificar desviaciones y tomar decisiones correctivas, asegurando que la estrategia digital genere resultados tangibles.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-7
        .tarjeta.color-primario.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-md-12.col-lg-5.col-xl-5.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema4/img_14.png", class="img-fluid w-100")
            .col-12.col-md-12.col-lg-7.col-xl-7.mb-lg-0
              h2.mb-2 Pódcast
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="<h5 class='mb-0'>Charlas que venden</h5> Plan estratégico de marketing digital"
                :audio="require('@/assets/curso/tema4/img_13.svg')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


</template>

<script>
export default {
  name: 'Tema4',
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
