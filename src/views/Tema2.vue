<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contratos Inteligentes
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Han surgido con la aparición del #[em blockchain] a mediados de los años 90, cuando el criptólogo Nick Szabo buscó cómo proporcionar mecanismos que permitieran el comercio electrónico adaptándose a los nuevos retos bajo la red de #[em blockchain], a partir de ese momento han surgido iniciativas sobre cómo garantizar el desarrollo de estas actividades con la seguridad y confiabilidad necesaria y que brinde la confianza al usuario, de esta forma surgen los contratos inteligentes, los cuales permitieron programar técnicamente la lógica y controles necesarios para garantizar la seguridad y confidencialidad de la información.
        p.mb-0 A continuación, va a conocer un poco sobre qué son los contratos inteligentes y cómo se puede determinar las características para su construcción.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img01.png")
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Definición de contrato inteligente
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p #[em Smart contract] como su nombre lo indica, son contratos iguales a los contratos ordinarios en donde se requería participar presencialmente, firmar y/o sellar, pero ahora se cuenta con un mecanismo y agilidad que permite establecer acciones para una transacción sin estar presente, bajo algunos controles y a un bajo costo de transacción. Para la creación de un contrato inteligente se hace uso de lenguajes de programación sobre los cuales se programan las reglas, condiciones y flujo de información para finalmente registrar dicha información sobre una red de #[em blockchain].
        p.mb-0 El término #[em smart contract] está asociado a contratos automatizados, lo cual es correcto; pero, vale la pena aclarar que, si bien los orígenes del término y las intenciones de quien lo acuñó por primera vez quizás se centraron en permitir contratos automatizados, la implementación final sobre una red de #[em blockchain] los ubica más próximos a programas de computación de uso más o menos genérico, con la posibilidad de acceder a dinero (#[em token's]) y con algunas restricciones y costos de ejecución.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img02.png")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5
          span Cómo funcionan los contratos inteligentes
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img03.svg")
          figcaption Nota. <a style="font-weight: 400">Adaptado de Los 5 Beneficios de los #[em SMART CONTRACT] (Morant, s.f.).</a>

    .BGIMG02.px-md-5.px-4.py-4.mb-4(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-4.col-8
          img(src="@/assets/curso/tema2/img04.png")
        .col-lg-8
          p Es así como se ha favorecido la inclusión de estos contratos inteligentes dentro de aplicaciones y soluciones de comercio electrónico basadas en #[em blockchain] para facilitar diferentes actividades como se puede ver a continuación:
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img05.png')
              .h4.text-center.font-primary Gobierno y administraciones públicas
              p.mb-0 Seguridad en los registros y trazabilidad en las operaciones.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img06.png')
              .h4.text-center.font-primary Mercados inmobiliarios
              p.mb-0 Transparencia e inmutabilidad, además de agilidad en los negocios.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img07.png')
              .h4.text-center.font-primary Transporte
              p.mb-0 Eficacia, seguridad en inmutabilidad de los datos.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img08.png')
              .h4.text-center.font-primary Automóvil
              p.mb-0 Recordación de deudas, hasta autos que se manejan solos.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img09.png')
              .h4.text-center.font-primary Salud
              p.mb-0 Minimizar la complejidad de los métodos tradicionales.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img10.png')
              .h4.text-center.font-primary Auditoría
              p.mb-0 Campo especializado a nivel profesional, que va en aumento.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img11.png')
              .h4.text-center.font-primary Compañías de seguros
              p.mb-0 Reducción de costos, garantías de seguridad.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img12.png')
              .h4.text-center.font-primary Banca
              p.mb-0 Capacidad de autoejecutar acciones, reducción de intermediarios.
            .BGR03.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/img13.png')
              .h4.text-center.font-primary Notariado y Registro
              p.mb-0 Permite proteger al ciudadano, agiliza la certificación, y disminuye la demora en el trámite.

    p.mb-5 Si se realiza una comparación con los contratos tradicionales se puede ver una marcada diferencia que invita a estudiar la posibilidad de adopción de esta tecnología, en la siguiente figura podrá encontrar un paralelo que permite identificar la gran diferencia de los tipos de contratos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 6
          span Comparación de contratos tradicionales vs. contratos inteligentes
        figure.mb-4(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img14.svg")
          figcaption Nota. <a style="font-weight: 400">Adaptado de What are #[em Smart Contracts]. How Ethereum #[em Smart Contract Work] (Edureka, s.f.).</a>
        .cajon.color-secundario.p-4
          .row.justify-content-center(data-aos="flip-up")
            .col-lg-2.col-4
              img(src="@/assets/curso/tema2/img15.png")
            .col-lg-9
              p Como se indicó anteriormente para la construcción de un contrato inteligente se debe hacer uso de lenguajes de programación, entre los más reconocidos y utilizados actualmente está Solidity, de este lenguaje de programación se puede encontrar en su documentación oficial (2022):
              p.mb-0 Solidity es un lenguaje de alto nivel orientado a contratos. Su sintaxis es similar a la de JavaScript y está enfocado específicamente a la máquina virtual de Etehreum (EVM). Además, está tipado de manera estática y acepta entre otras cosas, herencias, librerías y tipos complejos definidos por el usuario.

    .BGIMG02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img16.jpg")
        .col-lg-7(data-aos="fade-left")
          p Puede ver a continuación un ejemplo de un contrato inteligente programado en Solidity, el cual imprime la cadena de texto “¡Hola mundo!”
          .BGRS04.p-2
            .h4.text-center.mb-0 Hola mundo en lenguaje de programación Solidity
          .BGRS03.p-4.mb-4
            .row.justify-content-center
              .col-lg-10
                p.mb-2 contract HolaMundo {
                p.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;event Escribir(string out);
                p.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;function() {
                p.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir("¡Hola mundo!");
                p.mb-2 &nbsp;&nbsp;&nbsp;&nbsp;}
                p.mb-0 }
        .col-lg-10
          p De acuerdo con lo anterior, se puede determinar que este lenguaje presenta una sintaxis amigable, con una curva de aprendizaje moderadamente compleja y que soporta el paradigma de la programación orientada a objetos, lo que permitirá reducir y reutilizar el código existente.

          .row.justify-content-center.mb-4(data-aos="flip-up")
            .tarjeta.color-secundario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-4.col-sm-3.col-lg-2.px-4
                  img.w-75(src="@/assets/curso/tema2/img17.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Solidity
                      p.mb-0 Puede conocer más sobre este lenguaje de programación en su sitio web oficial, al cual puede acceder mediante este enlace.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://solidity-es.readthedocs.io/es/latest/" target="_blank")
                        span(style="color: #000; font-weight: 400") Ir a sitio web
                        i.fas.fa-link(style="color: #000")           
          
    p.mb-5 También existen alternativas para usuarios no técnicos o aquellos que no manejan lenguajes de programación, que les ayudan a construir una lógica del contrato inteligente apoyado en una interfaz de bloques, lo que permite comprender lo que se está programando, y que posteriormente se puede exportar para complementar y publicar, una de estas plataformas es <a style="color: #8628A5" href="https://etherscripter.com" target="_blank">https://etherscripter.com</a>, como se puede apreciar en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 7
          span Editor visual de contratos inteligentes EtherScripter
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img18.png")
          figcaption Nota. <a style="font-weight: 400">tomado de EtherScripter - Visual smart-contract builder for Ethereum</a>

    p Esta plataforma basada en bloques permite arrastrar bloques con enganches similares a un rompecabezas y a medida que los enganchamos cada parte sirve como condicional lógico, repeticiones, y todo lo necesario para poder generar un contrato inteligente básico.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Reglas en contratos inteligentes

    p Sin duda, como en cualquier proceso de construcción de un programa o un proyecto de diseño de aplicaciones, este debe de cumplir con algunas fases y reglas que garantizan que al final del proceso, el contrato inteligente realice lo que se necesita sin errores, así las cosas, se va a enumerar algunas recomendaciones y reglas que se deben de tener presente en el momento de construir un contrato inteligente, como se muestra a continuación:

    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center
        .col-lg-6(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img19.png')

            .BGRB03.p-3(x="50%" y="32%" numero="1")
              .h5.font-primary.mb-2 Planificación
              p Es necesario conocer las necesidades que debe solucionar un contrato inteligente, determinando los recursos, lógica del programa, entradas de información, salidas de información, así como aplicaciones con las que debe interactuar e intercambiar información.
            .BGRB03.p-3(x="62.5%" y="36%" numero="2")
              .h5.font-primary.mb-2 Conocer los recursos disponibles y las DApps
              p El incursionar en la tecnología #[em blockchain] lleva a estudiar y explorar las Dapps, las cuales están conformadas por contratos inteligentes, estas corren sobre una red de #[em blockchain], así como diferentes recursos ya creados de las que puede hacer uso libremente.
            .BGRB03.p-3(x="70%" y="47%" numero="3")
              .h5.font-primary.mb-2 Construir el contrato con el lenguaje adecuado
              p Estudiar y conocer un lenguaje de programación especializado en la creación de contratos inteligentes como, por ejemplo, Solidity y su entorno de desarrollo Remix permitirá crear, testear y prepararse para desplegar sobre una red de producción de contratos inteligentes.
            .BGRB03.p-3(x="67.5%" y="61%" numero="4")
              .h5.font-primary.mb-2 Libre de interrupciones
              p La codificación del contrato inteligente debe involucrar buenas prácticas de programación y debe garantizar estar libre de interrupciones que puedan poner en riesgo el normal funcionamiento del contrato inteligente y generar interrupción del servicio y/o pérdida de información.
            .BGRB03.p-3(x="57%" y="70%" numero="5")
              .h5.font-primary.mb-2 Seguridad
              p Su codificación debe incorporar controles de seguridad que garantice que solo los sistemas o interesados puedan hacer uso del contrato inteligente.
            .BGRB03.p-3(x="43.5%" y="70%" numero="6")
              .h5.font-primary.mb-2 Sin intermediarios
              p Un principio de los contratos inteligentes es que estos no deberían depender de un intermediario y deben tener la capacidad de operar sin la participación, ni aprobación de un tercero.
            .BGRB03.p-3(x="32.5%" y="61%" numero="7")
              .h5.font-primary.mb-2 Rapidez
              p El contrato debe ser creado para ejecutarse de manera rápida, dado que este puede ejecutarse en múltiples instancias a la vez.
            .BGRB03.p-3(x="30.5%" y="47%" numero="8")
              .h5.font-primary.mb-2 Costo de ejecución mínimo
              p El contrato inteligente deberá ejecutarse y funcionar sobre redes de #[em blockchain], las cuales requieren de un recurso económico (#[em tokens]) para pagar el uso de la red, así que se recomienda garantizar un consumo mínimo y sin gastar grandes cantidades de recursos.
            .BGRB03.p-3(x="37%" y="36%" numero="9")
              .h5.font-primary.mb-2 Libre de errores
              p Se recomienda realizar una depuración o auditoría que verifique que el código del contrato inteligente no genere errores que pueda causar inconvenientes con la información transferida.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-5
              img(src="@/assets/curso/tema2/img17.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Remix
                  p.mb-0 Estas son algunas reglas y recomendaciones mínimas que deben de tenerse presente en el momento de crear un contrato inteligente. Si desea conocer algo más sobre Solidity y su entorno de desarrollo remix, puede acceder mediante este enlace.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://remix.ethereum.org" target="_blank")
                    span(style="color: #000; font-weight: 400") Ir a sitio web
                    i.fas.fa-link(style="color: #000") 
    
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Tipos de contratos inteligentes

    .row.justify-content-center.mb-4
      .col-lg-4.col-8(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img20.png")
      .col-lg-8(data-aos="fade-left")
        p Teniendo en cuenta que el contrato inteligente es un código que permite la ejecución automatizada de las prestaciones pactadas dentro de las herramientas que ofrece la tecnología #[em blockchain] y el auge que han venido adquiriendo en los últimos tiempos, en la actualidad existe una gran variedad de tipos de contratos inteligentes, entre los más importantes se destacan los siguientes:
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Contratos inteligentes legales") Este tipo de contrato inteligente se encarga de verificar el funcionamiento de cualquier transacción, como contratación de productos, servicios, depósitos en garantía, compras y ventas, préstamos, entre otros.
          p.text-small(numero="2" titulo="Contratos inteligentes contables") Las organizaciones autónomas descentralizadas mejor conocidas como DAO se encargan de realizar seguimientos a las interacciones financieras, y gracias a la tecnología #[em blockchain] que las componen son ideales para evitar falsificaciones. Por ende, estas se definen por acuerdos codificados a través de contratos inteligentes de naturaleza contable.
          p.text-small(numero="3" titulo="Contratos inteligentes lógicos de aplicación") Este tipo de contrato inteligente opera en conjunto con otros de su clase y con programas automatizados, todo con el propósito de validar y facilitar la interacción entre dispositivos. Estos mayormente son comandados por un programa de gestión.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Interacción con otras aplicaciones
    
    .BG05.p-4.mb-5(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img17.png")
            .col
              .row.justify-content-between.align-items-center
                .col-lg-4.mb-4.mb-sm-0
                  p.mb-0 Estos son los proyectos de cada uno de los ecosistemas revisados anteriormente, los cuales puede consultar en los siguientes enlaces a su disposición:
                .col-lg-8
                  .row.justify-content-center
                    .col-lg.col-4
                      figure.mb-3
                        img.ms-3.w-75(src="@/assets/curso/tema2/img26.png")
                      .h4.text-center.text-white.mb-0 <a href="https://bitcoin.org/" target="_blank">Bitcoin</a>
                    .col-lg.col-4
                      figure.mb-3
                        img.ms-3.w-75(src="@/assets/curso/tema2/img27.png")
                      .h4.text-center.text-white.mb-0 <a href="https://ethereum.org/" target="_blank">Ethereum</a>
                    .col-lg.col-4
                      figure.mb-3
                        img.ms-3.w-75(src="@/assets/curso/tema2/img28.png")
                      .h4.text-center.text-white.mb-0 <a href="https://solana.com/" target="_blank">Solana</a>
                    .col-lg.col-4
                      figure.mb-3
                        img.ms-3.w-75(src="@/assets/curso/tema2/img29.png")
                      .h4.text-center.text-white.mb-0 <a href="https://cardano.org/" target="_blank">Cardano</a>
                    .col-lg.col-4
                      figure.mb-3
                        img.ms-3.w-75(src="@/assets/curso/tema2/img30.png")
                      .h4.text-center.text-white.mb-0 <a href="https://polkadot.network/" target="_blank">Polkadot </a>
    
    p Existen muchos más proyectos con infinidad de propuestas para aplicar en el mundo del #[em blockchain], cerca de 10.000 proyectos activos y con infinidad de propuestas y aplicaciones con las cuales se puede implementar con contratos inteligentes, se invita a estudiarlos y tomar su propia decisión sobre con cuál trabajar en sus necesidades.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Ecosistema bitcoin',
        texto:
          'Este proyecto apalancado en proyectos denominados <em>Parachains</em> buscan brindar soluciones de diferentes tipos, en la siguiente figura puede consultar el ecosistema propuesto.',
        imagen: require('@/assets/curso/tema2/img21.jpg'),
      },
      {
        titulo: 'Ecosistema Ethereum',
        texto:
          'Este proyecto es uno de los proyectos iniciales, y que estableció el punto de partida para los nuevos ecosistemas, cuenta con grandes soluciones para <em> wallets</em>, finanzas descentralizadas, mercados descentralizados, juegos, NFT, entre otros. En la siguiente figura puede observar el ecosistema de proyectos que depende de Ethereum:',
        imagen: require('@/assets/curso/tema2/img22.jpg'),
      },
      {
        titulo: 'Ecosistema Solana',
        texto:
          'Proyecto <em>blockchain</em> que busca aprovechar al máximo los NFT y contratos inteligentes, se puede observar el ecosistema de soluciones integradas en la siguiente figura:',
        imagen: require('@/assets/curso/tema2/img23.jpg'),
      },
      {
        titulo: 'Ecosistema Cardano',
        texto:
          'Este proyecto promete ser una plataforma para contratos inteligentes y su integración con grandes soluciones.',
        imagen: require('@/assets/curso/tema2/img24.jpg'),
      },
      {
        titulo: 'Ecosistema Polkadot',
        texto:
          'Este proyecto apalancado en proyectos denominados <em>Parachains</em> buscan brindar soluciones de diferentes tipos, en la siguiente figura puede consultar el ecosistema propuesto.',
        imagen: require('@/assets/curso/tema2/img25.jpg'),
      },
    ],
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
