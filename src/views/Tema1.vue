<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Categorías de negocios electrónicos
 
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_1.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .tarjeta.color-primario-v.p-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0  Los negocios electrónicos se pueden clasificar según el tipo de transacción y los actores implicados, lo que permite a las organizaciones seleccionar el modelo más adecuado, optimizar recursos y diseñar estrategias efectivas. Cada categoría define la forma en que se gestionan las operaciones, se establecen relaciones comerciales y se entrega valor al cliente.
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_2.svg', class="img-fluid")

    .bg_img_1.mb-3

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

          .row(titulo="")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p This 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
