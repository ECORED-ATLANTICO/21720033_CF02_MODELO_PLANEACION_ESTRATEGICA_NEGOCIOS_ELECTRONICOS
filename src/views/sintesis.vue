<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Aplicación de la estrategia en negocios electrónicos permite al aprendiz comprender y aplicar estrategias en negocios digitales, abordando categorías de <em>e-commerce</em>, diseño de estrategias, generación de valor agregado y formulación de planes estratégicos y de acción en <em>marketing</em> digital. Durante el proceso formativo, se integran competencias en el manejo de presupuestos, cronogramas, indicadores, herramientas, control, seguimiento y evaluación, así como el análisis del entorno mediante herramientas, orientando la toma de decisiones estratégicas y fortaleciendo la competitividad y sostenibilidad de los negocios electrónicos en entornos digitales.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Aplicación de la estrategia en negocios electrónicos permite al aprendiz comprender y aplicar estrategias en negocios digitales, abordando categorías de ecommerce, diseño de estrategias, generación de valor agregado y formulación de planes estratégicos y de acción en marketing digital. Durante el proceso formativo, se integran competencias en el manejo de presupuestos, cronogramas, indicadores, herramientas, control, seguimiento y evaluación, así como el análisis del entorno mediante herramientas, orientando la toma de decisiones estratégicas y fortaleciendo la competitividad y sostenibilidad de los negocios electrónicos en entornos digitales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
