<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Categorías de negocios electrónicos
 
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_1.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .tarjeta.color-primario-v.p-3.rounded-4.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0  Los negocios electrónicos se pueden clasificar según el tipo de transacción y los actores implicados, lo que permite a las organizaciones seleccionar el modelo más adecuado, optimizar recursos y diseñar estrategias efectivas. Cada categoría define la forma en que se gestionan las operaciones, se establecen relaciones comerciales y se entrega valor al cliente.
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_2.svg', class="img-fluid")

    .bg_img_1.mb-3

      .tarjeta.tarjeta--gris.p-4
        PasosB.pasos-b--letras.color-acento-botones(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0(titulo="")
            .col-12.col-lg-6.order-2.order-lg-1
              h5.mb-3 <em>Business to business</em> (B2B)
              p.mb-3 La compañía proveedora ofrece productos o servicios que facilitan la operación de otra empresa. Esto exige sistemas de gestión integrados, tecnología eficiente y atención personalizada, dado que la relación comercial se centra en la confianza y la continuidad de negocios.
              p.mb-0 #[b Ejemplo:] Alibaba conecta fabricantes y distribuidores globales, ofreciendo compras por volumen, logística optimizada y herramientas de análisis de mercado que apoyan decisiones estratégicas.
            .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_4.png', class="img-fluid")
          .row.justify-content-center.align-items-center.mb-0(titulo="")
            .col-12.col-lg-6.order-2.order-lg-1
              h5.mb-3 <em>Business to consumer</em> (B2C)
              p.mb-3 Se basa en que las empresas venden directamente a los consumidores finales. El enfoque principal es la experiencia de compra, la facilidad de navegación y la satisfacción del cliente, promoviendo la fidelización a través de plataformas digitales confiables.
              p.mb-0 #[b Ejemplo:] Amazon, combina recomendaciones personalizadas, envío rápido y una interfaz intuitiva para mantener la lealtad de los usuarios.
            .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_5.png', class="img-fluid")
          .row.justify-content-center.align-items-center.mb-0(titulo="")
            .col-12.col-lg-6.order-2.order-lg-1
              h5.mb-3 <em>Consumer to consumer</em> (C2C)
              p.mb-3 Permite a los consumidores intercambiar productos o servicios entre sí mediante plataformas que aseguran pagos seguros y reputación confiable. Este tipo de negocio requiere mecanismos que garanticen la seguridad de la transacción y la resolución de conflictos.
              p.mb-0 #[b Ejemplo:] Mercado Libre facilita que los usuarios compren y vendan productos, implementando sistemas de calificación de vendedores y políticas de protección al comprador.
            .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_6.png', class="img-fluid")
          .row.justify-content-center.align-items-center.mb-0(titulo="")
            .col-12.col-lg-6.order-2.order-lg-1
              h5.mb-3 <em>Consumer to business</em> (C2B)
              p.mb-3 Demuestra como los consumidores generan valor para la empresa mediante servicios, contenido o productos digitales. Este modelo permite a las empresas externalizar creatividad o conocimientos especializados, aprovechando el talento del consumidor.
              p.mb-0 #[b Ejemplo:] Shutterstock, permite que diseñadores y fotógrafos vendan imágenes y recursos digitales a empresas, ayudando a estas últimas a obtener material creativo sin generar internamente el contenido.
            .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_7.png', class="img-fluid")
          .row.justify-content-center.align-items-center.mb-0(titulo="")
            .col-12.col-lg-6.order-2.order-lg-1
              h5.mb-3 <em>Business to government</em> (B2G)
              p.mb-3 Consiste en que empresas privadas vendan productos o servicios al sector público, cumpliendo regulaciones, licitaciones y estándares de calidad. La transparencia y la trazabilidad son esenciales para mantener contratos y relaciones con entidades gubernamentales.
              p.mb-0 #[b Ejemplo:] SAP suministra <em>software</em> ERP y soluciones de gestión a gobiernos y organismos públicos, optimizando procesos administrativos y asegurando cumplimiento normativo.
            .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_8.png', class="img-fluid")
    br
    br
    br
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_9.svg', class="img-fluid p-3")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 La siguiente tabla presenta un resumen de las principales categorías de negocios electrónicos, describiendo sus características fundamentales y proporcionando ejemplos de empresas que representan cada modelo. Este esquema permite visualizar de manera rápida y práctica cómo se diferencian los tipos de interacción entre empresas, consumidores y gobiernos en el entorno digital.

    .bg_img_2.mb-3

      .titulo-sexto.color-primario(data-aos="zoom-in-right")
        h5 Tabla 1.
        |  Resumen de categorías de negocios electrónicos       
      .tabla-a.mb-5(data-aos="flip-left")
        table
          caption 
            p <b>Nota.</b> Adaptado de Kotler y Keller (2021), Laudon y Laudon (2020), David (2020) y ProColombia (2023).
          thead
            tr
              th.col-auto.col-lg-2 Categoría
              th.col-auto.col-lg-auto Descripción
              th.col-auto.col-lg-3 Ejemplo de empresa 
          tbody
            tr
              td.text-start B2B.
              td.text-start Transacciones entre empresas, enfocadas en suministro corporativo.
              td.text-start Alibaba.
            tr
              td.text-start B2C.
              td.text-start Venta directa al consumidor final, centrada en experiencia de usuario.
              td.text-start Amazon.
            tr
              td.text-start C2C.
              td.text-start Intercambio de productos o servicios entre consumidores.
              td.text-start Mercado Libre.
            tr
              td.text-start C2B.
              td.text-start Consumidor aporta servicios o contenido a la empresa.
              td.text-start Shutterstock.
            tr
              td.text-start B2G.
              td.text-start Empresa provee bienes o servicios al gobierno.
              td.text-start SAP.
       
       
      .cita-decorada.mb-5
        blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2.d-none.d-lg-block 
              figure
                img(src='@/assets/curso/tema1/img_11.png', class="cita-decorada__imagen-flotante-2")
            .col-12.col-lg-10
              p.cita-decorada__texto.mb-2.p-3 #[b Reflexión:] conocer y comprender las categorías de negocios electrónicos no solo permite a las empresas seleccionar el modelo de negocio más adecuado, sino que también constituye un elemento estratégico para optimizar recursos, definir procesos internos y enfocar los esfuerzos comerciales de manera eficiente. Esta comprensión facilita la identificación de oportunidades y amenazas en el mercado digital, permite adaptar las estrategias de venta y comunicación a las características específicas de los clientes, y potencia la capacidad de la organización para generar valor agregado de manera sostenida. 
            
      p.mb-0(data-aos="zoom-in-right") Al comprender el tipo de interacción que se establece con los distintos actores —ya sean consumidores, otras empresas o entidades gubernamentales—, las organizaciones pueden diseñar modelos de relación más efectivos, fortalecer la confianza y fidelización de los clientes, y mantenerse competitivas en un entorno digital en constante evolución. En síntesis, el conocimiento profundo de las categorías de negocios electrónicos se convierte en un pilar para la toma de decisiones estratégicas, la innovación en productos y servicios, y el crecimiento sostenido de la empresa en mercados digitales complejos y dinámicos.
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
