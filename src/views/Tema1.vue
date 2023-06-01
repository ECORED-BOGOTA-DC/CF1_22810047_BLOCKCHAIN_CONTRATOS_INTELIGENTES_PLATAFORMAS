<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Criptografía
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Son métodos y mecanismos para mantener segura la información, haciendo uso de técnicas, algoritmos y códigos que procesan un dato entrante, limitando la lectura o interpretación por un tercero no autorizado.
        p.mb-0 Teniendo en cuenta que el #[em blockchain] es una red segura y cifrada que almacena la información en bloques, el hecho de necesitar interactuar con esta información obliga a mantener canales como mecanismos de operación seguros implementados en los contratos inteligentes, que en primer lugar logren interactuar con los protocolos nativos de la red, así como garantizar la seguridad de la información intercambiada.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.png") 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Definición

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.png')})`}" data-aos="fade-right"
          )
          .bloque-texto-g__texto.py-md-5.py-4.px-4(data-aos="fade-left")
            p.mb-0 El #[em blockchain] es una estructura de datos que almacena información en bloques a los cuales puede agregarse información denominada metainformación, además cuenta con su propio #[em hash] y el #[em hash] del bloque inmediatamente anterior, lo que permite mantener una estrecha relación con otros bloques de una red sosteniendo una relación y línea temporal.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Conceptos relacionados con la criptografía
    
    p En relación con la criptografía son varios los términos de uso que se encuentran asociados, a continuación, podrá relacionar aquellos indispensables para entender mejor este concepto:
  
    .BGIMG02.px-md-5.px-4.py-4.mb-4(data-aos="fade-right")
      TabsA.color-primario.mb-5
        .BGR01.p-4(titulo="Cifrado")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              h4 Cifrado
              p De acuerdo con WeLiveSecurity (2021), el cifrado es “el proceso mediante el cual se codifica algo de modo que no resulte fácil de entender para quienes no tienen acceso autorizado”, también es necesario conocer sobre los procesos de criptografía mediante los cuales se aplican métodos de cifrado a una información para ser transmitida, estos procesos tienen como objetivos:
              ul.lista-ul--color
                li
                  i.fas.fa-play(style="color: #8628A5; font-size: x-small")
                  | Garantizar la privacidad y confidencialidad, de tal manera que únicamente el destinatario interesado pueda leerla.
                li
                  i.fas.fa-play(style="color: #8628A5; font-size: x-small")
                  | Integridad, evitando que esta sea modificada sin autorización.
                li
                  i.fas.fa-play(style="color: #8628A5; font-size: x-small")
                  | Autenticación, garantizando que solo se pueda interpretar por los interesados.
                li
                  i.fas.fa-play(style="color: #8628A5; font-size: x-small")
                  | No repudio, para evitar que se niegue que alguno de los interesados ha podido accederla.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img03.png")
        .BGR01.p-4(titulo="Autenticidad")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              h4 Autenticidad
              p.mb-0 Garantiza la legitimidad de la fuente de la transmisión o información; se busca garantizar que el emisor de un mensaje es quien dice ser.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img04.png")
        .BGR01.p-4(titulo="Integridad")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              h4 Integridad
              p.mb-0 Garantiza la persistencia y completitud de los datos o información transmitidos, garantizando que un documento no ha sido modificado por ningún agente externo a la comunicación.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img05.png")
        .BGR01.p-4(titulo="No repudio")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              h4 No repudio
              p.mb-0 Un emisor de un mensaje no puede negar haberlo enviado. En otras palabras, evita el rechazo interesado de los mensajes por parte de los comunicantes.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img06.png")
        .BGR01.p-4(titulo="Firma digital")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2
              h4 Firma digital
              p Es un mecanismo que permite al receptor de un mensaje garantizar que el origen es auténtico, así mismo, se puede comprobar si un mensaje ha sido modificado o se conserva intacto. Aquí están las dos fases para la realización de la firma digital:
              ul.lista-ul--color
                li
                  i.fas.fa-play(style="color: #8628A5; font-size: x-small")
                  p.mb-0 <a style="color: #8628A5; font-weight: 900">Proceso de firma:</a> el emisor cifra los datos con la clave privada y los manda al receptor.
                li
                  i.fas.fa-play(style="color: #8628A5; font-size: x-small")
                  p.mb-0 <a style="color: #8628A5; font-weight: 900">Verificar la firma:</a> el receptor descifra los datos usando la clave pública del emisor y comprueba que la información coincide con los datos originales (si coincide es que no se ha modificado).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img07.png") 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-4
              img(src="@/assets/curso/tema1/img08.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Cifrado de datos
                  p.mb-0 Puede conocer más sobre el proceso de cifrado en el siguiente video de la empresa ESET Latinoamérica titulado Cifrado de datos: qué es y cómo puede ayudarte a proteger tu información en Internet.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=wcJBmoz6Vlk&ab_channel=ESETLatinoam%C3%A9rica" target="_blank")
                    span(style="color: #000; font-weight: 400") Ver video
                    i.fas.fa-link(style="color: #000") 

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Llave privada (simétrica)

    p La criptografía basada en llave privada o también conocida como criptografía simétrica consta de una sola clave en el proceso, esta clave se utiliza tanto para el cifrado como para el proceso de descifrado, como se puede apreciar en la Figura 1.

    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 1
            span Criptografía de llave privada / simétrica
          figure
            img(src="@/assets/curso/tema1/img09.svg")
            figcaption Nota. <a style="font-weight: 400">Adaptado de la Oficina de Seguridad del Internauta (osi.es)</a> <a style="color: #8628A5" href="https://www.osi.es/sites/default/files/images/concienciacion/c9-img-blog-criptografia.png" target="_blank">https://www.osi.es/sites/default/files/images/concienciacion/c9-img-blog-criptografia.png</a>
    
    p Este tipo de criptografía cuenta con ciertas desventajas, entre las cuales se puede identificar que el hecho de usar una misma clave genera problemas con las transferencias de información segura en el momento de compartir sus claves.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Llave pública (asimétrica)

    p La criptografía de llave pública, también conocida como asimétrica utiliza 2 claves, las cuales son: llave pública utilizada para el proceso de cifrado y la llave privada que es utilizada para el proceso de descifrado y la cual es compartida con el receptor de la información, tal como se presenta en la figura No 2.

    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            span Criptografía de llave pública / asimétrica
          figure
            img(src="@/assets/curso/tema1/img10.svg")
            figcaption Nota. <a style="font-weight: 400">Adaptado de la Oficina de Seguridad del Internauta (osi.es)</a> <a style="color: #8628A5" href="https://www.osi.es/sites/default/files/images/concienciacion/c9-img-blog-criptografia.png" target="_blank">https://www.osi.es/sites/default/files/images/concienciacion/c9-img-blog-criptografia.png</a>

    p Las 2 claves son generadas con algoritmos diferentes, lo que dificulta obtener la llave privada a partir de la llave pública.
    p Este tipo de criptografía es muy útil cuando se requiere firmar documentos o compartir información sensible.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Algoritmos de cifrado 

    p.mb-5 Como pudo observar anteriormente, existen 2 tipos de criptografía, la llave privada (simétrica) y llave pública (asimétrica), para lo cual se puede observar algunos de los siguientes algoritmos para cada uno de estos tipos de criptografía:

    .mb-4
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Llave privada (simétrica)
    
    p Los algoritmos utilizados en este tipo de criptografía al contar con una misma clave tanto para el cifrado como para el descifrado cuentan con un factor importante que es su rapidez, la cual puede ser aprovechada por la nueva tecnología y realizar este proceso de manera inmediata
    .h4.text-center.mb-5 Existen 2 algoritmos muy utilizados en este tipo de criptografía, que se presentan a continuación:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Algoritmos de la llave privada (simétrica)
        figure
          img(src="@/assets/curso/tema1/img11.svg")
    
    .h4.text-center.mb-5 Ahora se procederá a realizar una explicación de estos algoritmos:

    LineaTiempoD.color-secundario.mb-5(data-aos="flip-up")
      .row.p-4(numero="1" titulo="AES (Advanced Encryption Standard)")
        p Este algoritmo reemplazó al algoritmo DES y se utiliza comúnmente en canales y protocolos seguros como TLS, FTPES, VPS, entre otros. Además, puede ser aprovechado tanto por #[em software] como por #[em hardware]; este es un algoritmo de cifrado por bloques, cada bloque cuenta con un tamaño fijo de 128 bits, su longitud de la clave puede ser variable entre 128, 192 y 256 bits.
        p AES cuenta con diferentes modos de cifrado o manera de gestionar sus bloques, cada uno de ellos operando de manera diferente, entre los cuales se encuentra la siguiente distribución, como se aprecia en el recurso educativo a continuación:
        .row.justify-content-center.mb-4
          .col-lg-9
            ImagenInfograficaB.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img12.png')

              div(x="8.5%" y="30.5%" tooltip="CBC (Cipher-block chaining)" numero="1")
                .h5.mb-2 CBC (Cipher-Block Chaining)
                p Trabaja con una función hash para comprobar la autenticidad de la información, con este modo de cifrado a cada bloque de texto sin formato se le aplica una operación XOR con el bloque de cifrado anterior, cada bloque cifrado es dependiente de lo procesado hasta ese punto. Para realizar esta opción XOR con el primer bloque de texto se hace uso de un vector de inicialización IV. Este modo de cifrado se realiza de forma secuencial, no permite ser tratado de forma paralela para aumentar el rendimiento en el cifrado/descifrado de los datos.
                img(src="@/assets/curso/tema1/img16.svg")
              div(x="93%" y="30.5%" tooltip="OFB (Output feedback)" numero="2")
                .h5.mb-2 OFB (Output Feedback)
                p Utiliza una clave secreta para crear un bloque seudo-aleatorio al que se le aplica la operación XOR con el texto sin formato para cifrar el texto, también requiere de un vector de inicialización único para cada mensaje, no se puede paralelizar.
                img(src="@/assets/curso/tema1/img17.svg")
              div(x="90%" y="85%" tooltip="CFB (Cipher feedback)" numero="3")
                .h5.mb-2 CFB (Cipher Feedback)
                p Funciona similar al OFB, a diferencia que para producir el #[em keystream] cifra el último bloque de cifrado, en lugar del último bloque del #[em keystream] como hace OFB, no se puede paralelizar el cifrado, aunque el descifrado sí.
                img(src="@/assets/curso/tema1/img18.svg")
              div(x="8.5%" y="85%" tooltip="GCM (Galois/Counter Mode)" numero="4")
                .h5.mb-2 GCM (Galois/Counter Mode)
                p Considerado uno de los mejores por su seguridad y velocidad, permite procesar en paralelo y es compatible con procesadores AES-NI para acelerar el rendimiento en cifrado/descifrado de información. Este modo de cifrado es AEAD, además de cifrar información es capaz de autenticarla y comprobar la integridad de la misma para garantizar que no se ha modificado. Puede aceptar también vectores de inicialización aleatorios.
                img(src="@/assets/curso/tema1/img19.svg")

        p AES es uno de los algoritmos más utilizados actualmente; pero el modo más recomendado es AES-GCM ya que incorpora AEAD
      .row.p-4(numero="2" titulo="ChaCha20")
        p Este algoritmo soporta claves de 128 y 256 bits y de alta velocidad, a diferencia de AES que es un cifrado por bloques, este es un cifrado de flujo, presenta características similares a su predecesor Salsa20; pero con una función primitiva de 12 o 20 rondas distintas. Ver figura.
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span Algoritmo de cifrado ChaCha20
        figure
          img(src="@/assets/curso/tema1/img13.svg")
          figcaption.text-center Nota. <a style="font-weight: 400">Tomado de  A lightweight security scheme for advanced metering infrastructures in smart grid (researchgate.net)</a>
      
    .mb-4
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Llave pública (asimétrica)

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Los algoritmos utilizados en esta criptografía asimétrica están basados en funciones matemáticas, lo que dificulta su descifrado, además de contar con 2 claves como se vio anteriormente, estas 2 claves tienen funciones primordiales como cifrar información, asegurar la integridad del dato y garantizar la autenticidad del emisor.
        .cajon.color-acento-contenido.p-4
          p Las funciones matemáticas utilizadas están dadas por una estructura definida de acuerdo con la función que se realice, por ejemplo:
          .row.justify-content-center
            .col-lg-11
              ul.lista-ul--color
                li
                  i.fas.fa-cube(style="color: #FFD800;")
                  | Mensaje + clave pública = mensaje cifrado
                li
                  i.fas.fa-cube(style="color: #FFD800;")
                  | Mensaje encriptado + clave privada = mensaje descifrado
                li
                  i.fas.fa-cube(style="color: #FFD800;")
                  | Mensaje + clave privada = mensaje firmado
                li
                  i.fas.fa-cube(style="color: #FFD800;")
                  | Mensaje firmado + clave pública = autenticación
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img14.svg')
    
    .h4.text-center En el siguiente recurso educativo encontrará algunos algoritmos propios para el cifrado y descifrado de información:

    .BGIMG02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-10
          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img15.png')

            div(x="22.5%" y="32%" tooltip="Algoritmo Diffie-Hellman" numero="1")
              .h5.mb-2 Algoritmo Diffie-Hellman
              p Este más que un algoritmo es un protocolo de establecimiento de claves, utilizado para generar una clave privada en ambos extremos de un canal de comunicación inseguro. Es utilizado para obtener una clave privada con la que posteriormente se cifrará la información junto con un algoritmo de cifrado simétrico. El punto fuerte de este algoritmo es que su seguridad radica en la dificultad de calcular el logaritmo discreto de números grandes (Diffie-Hellmann también permite el uso de curvas elípticas).
              img(src='@/assets/curso/tema1/img20.svg')
            div(x="77.5%" y="32%" tooltip="Algoritmo RSA" numero="2")
              .h5.mb-2 Algoritmo RSA
              p Se basa en la pareja de claves, la pública y la privada. Su seguridad radica en el problema de la factorización de números enteros muy grandes, y en el problema RSA, porque descifrar por completo un texto cifrado con RSA no es posible actualmente, aunque sí un descifrado parcial. Algunas características muy importantes de RSA es la longitud de clave, actualmente como mínimo se debe utilizar una longitud de 2048 bits, aunque es recomendable que sea de 4096 bits o superior para tener una mayor seguridad.
              img(src='@/assets/curso/tema1/img21.svg')
            div(x="50.5%" y="67.5%" tooltip="Algoritmo DSA" numero="3")
              .h5.mb-2 Algoritmo DSA
              p Este algoritmo requiere de mucho más tiempo de cómputo que RSA al igualdad de #[em hardware]. Es utilizado como algoritmo de firma digital, lo que lo convierte en un estándar, DSA no cifra datos, solamente se utiliza como firma digital. Este algoritmo se utiliza ampliamente en las conexiones SSH para comprobar la firma digital de los clientes, además, existe una variante de DSA basada en curvas elípticas (ECDSA), y está disponible en todas las librerías criptográficas actuales como #[em OpenSSL, GnuTLS o LibreSSL]. Otra característica de DSA es la longitud de clave, la mínima longitud de clave es de 512 bits, aunque lo más habitual es usar 1024 bits.
              img(src='@/assets/curso/tema1/img22.svg')
          p Estos algoritmos de cifrado pueden ser utilizados en diferentes modelos y lógicas de negocio de los contratos inteligentes que necesite diseñar, basta con identificar claramente los sistemas con los cuales se requiere interactuar y sobre cuáles componentes para tomar la decisión de uso.

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 #[em Hash]

    p Es el resultado de generar un valor de longitud fija, a partir del cifrado de un dato sin formato con la ayuda de una función o algoritmo criptográfico; este proceso por lo general es irreversible.
    p.mb-5 Puede observar un ejemplo en la tabla No. 1, en la que se ha generado la función #[em hash] de los algoritmos MD5 y SHA1 sobre un trozo de información, obteniendo el resultado #[em hash], además puede realizar estos ejercicios de prueba y validación en sitios públicos como <a style="color: #8628A5" href="http://www.sha1-online.com/" target="_blank">http://www.sha1-online.com/</a> o <a style="color: #8628A5" href="https://www.md5hashgenerator.com/" target="_blank">https://www.md5hashgenerator.com/</a> entre otros, y si se requiere integrar sobre algún sistema de información o programa, basta con revisar la documentación del mismo para su adopción.
 
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1
          span Ejemplo de generación de #[em hash]

        .tabla-b.color-acento-contenido.mb-4(data-aos="zoom-in")
          table
            thead
              tr
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px; border: 1px solid #E1E1E1").text-center INFORMACIÓN
                th(style="background-color: #DEFAFD; width: 30%; font-size: 18px; border: 1px solid #E1E1E1").text-center FUNCIÓN
                th(style="background-color: #DEFAFD; width: 40%; font-size: 18px; border: 1px solid #E1E1E1").text-center SALIDA
            tbody
              tr
                th.text-center(style="background-color: #F6FEFF; border: 1px solid #E1E1E1" rowspan="2") Saludos desde el complementario de #[em blockchain]: contratos inteligentes
                td(style="background-color: #FFF; border: 1px solid #E1E1E1") MD5 #[em Hash]
                td(style="background-color: #FFF; border: 1px solid #E1E1E1") c2010e3db97c16402d7150cf2eae8591
              tr
                td(style="background-color: #FFF; border: 1px solid #E1E1E1") SHA1 #[em Hash]
                td(style="background-color: #FFF; border: 1px solid #E1E1E1") 16c1ffb640cbddc213dfefe4ce8ef34627bd3c3d

        p Los valores resultantes del #[em hash] son muy comunes para almacenar información sensible como, por ejemplo, contraseñas, métodos de pago, entre otros.

        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p.mb-0 Como se ha visto, la tecnología #[em blockchain] incorpora componentes seguros que garantizan la gestión y salvaguarda de la información, haciendo uso de métodos y algoritmos criptográficos, los cuales se convierten en un componente fundamental. Se invita a continuar conociendo más sobre este concepto, ya que deberá ser incluido en el proceso de construcción de los contratos inteligentes.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
