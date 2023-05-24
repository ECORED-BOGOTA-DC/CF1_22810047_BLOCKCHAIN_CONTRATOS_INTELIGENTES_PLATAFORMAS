<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema distribuido y red extendida
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Los contratos inteligentes operan sobre las redes de #[em blockchain], por ende, heredan uno de sus principios que es la descentralización y aquí se puede tener presente que cualquier persona que lo requiera, y que cuente con los conocimientos básicos de programación, puede crear un contrato inteligente para interactuar con las DApps y otros contratos inteligentes existentes en las redes, permitiendo descentralizar la gestión y mantenimiento de los mismos.
        p.mb-0 A continuación, se repasan algunos principios básicos del #[em blockchain] y cómo los heredan los contratos inteligentes.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")
    

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Conceptos, clasificación
    
    p Recuerde que los sistemas distribuidos son sistemas cuyos componentes #[em hardware] y #[em software] están en computadoras conectadas en red, se comunican y coordinan sus acciones mediante el paso de mensajes para el logro de un objetivo. Se establece la comunicación mediante un protocolo preestablecido.
    p Su clasificación puede ser consultada en el siguiente recurso educativo:

    .row.justify-content-center.mb-5
      .col-lg-10
        TabsB.color-secundario.mb-5
          .BG06.p-4.p-md-5(titulo="DAO (Organizaciones Autónomas Descentralizadas)" :icono="require('@/assets/curso/tema3/img02.png')")
            .row.justify-content-center
              .col-lg-8.mb-lg-0.order-lg-1.order-2
                .h4 DAO (Organizaciones Autónomas Descentralizadas)
                p Son sistemas programados que representan organizaciones y que estas operan de forma autónoma.
                p.mb-0 Estas DAO no cuentan con un ente que las dirija; pero comparten intereses y objetivos similares, y así es como se ve una organización verdaderamente descentralizada.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img06.png")
          .BG06.p-4.p-md-5(titulo="Oráculo" :icono="require('@/assets/curso/tema3/img03.png')")
            .row.justify-content-center
              .col-lg-8.mb-lg-0.order-lg-1.order-2
                .h4 Oráculo
                p.mb-0 Son instrumentos que permiten actualizar estados internos de un contrato inteligente a través de información del exterior (comúnmente APIs), por ejemplo, obtener la cotización de una acción o divisa o si un paquete ha sido enviado por la empresa de transporte.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img07.png")
          .BG06.p-4.p-md-5(titulo="Red P2P" :icono="require('@/assets/curso/tema3/img04.png')")
            .row.justify-content-center
              .col-lg-8.mb-lg-0.order-lg-1.order-2
                .h4 Red P2P
                p.mb-0 Red de dispositivos en los cuales cada una de las computadoras, dispositivos móvil IoT, entre otros, se convierten en un nodo capaz de interactuar con otros miembros de la red directamente para ofrecer y consumir servicios de una red de #[em blockchain].
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img08.png")
          .BG06.p-4.p-md-5(titulo="Nodos y roles" :icono="require('@/assets/curso/tema3/img05.png')")
            .row.justify-content-center
              .col-lg-8.mb-lg-0.order-lg-1.order-2
                .h4 Nodos y roles
                p.mb-0 Los nodos de una red P2P cuentan con diferentes roles dependiendo de las funciones a realizar. Cada nodo posee una colección de funciones para enrutamiento, base de datos de #[em blockchain], minería y servicios de billetera. Un nodo completo incluye cuatro funciones como se observa en la figura.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img09.svg")

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Sistemas sin intermediarios

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Un contrato inteligente busca no depender de una autoridad central, los contratos inteligentes se ejecutan sin intermediarios. En otras palabras, no hay lugar a situaciones como tener que apretar un botón, tomar una decisión, equivocarse o que alguna de las partes cambie de opinión en el último momento. Si las condiciones del contrato se cumplen, entonces, este se ejecuta gracias al procesamiento de datos de forma distribuida.
        p La seguridad y fiabilidad que esto aporta a acuerdos entre partes simplemente no tiene comparación con los métodos tradicionales.
        p.mb-0 Por ejemplo, un contrato civil puede haber sido firmado por dos o más partes e incluso regulado ante notario; pero, existe la posibilidad de que no se lleve a cabo. Un contrato inteligente no puede no cumplirse, eliminando el error humano.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img10.jpg")

    .row.justify-content-center.mb-4
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 Con todo lo anterior se han podido reconocer algunos conceptos y fundamentos importantes para iniciar el proceso de construcción de un contrato inteligente, se invita a continuar estudiando los componentes técnicos que le permitirán plasmar, diseñar, construir y desplegar un contrato inteligente en una red de #[em blockchain].


</template>

<script>
export default {
  name: 'Tema3',
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
