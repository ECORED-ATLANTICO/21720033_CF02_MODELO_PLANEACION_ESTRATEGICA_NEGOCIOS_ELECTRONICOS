<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de acción 

    Separador

    #t_5_1.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.1.	Presupuesto
    .mb-0 

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
