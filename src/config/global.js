export default {
  global: {
    componenteFormativo: 'Diseño de contratos inteligentes',
    descripcionCurso:
      'Mediante el presente componente se reconocerán los conceptos más importantes para el diseño y construcción de un contrato inteligente de una red de <em><b>blockchain</b></em> y los elementos necesarios para su despliegue en producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Criptografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos relacionados con la criptografía',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Llave privada (simétrica)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Llave pública (asimétrica)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Algoritmos de cifrado',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<em>Hash</em>',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contratos inteligentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición de contrato inteligente',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reglas en los contratos inteligentes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de contratos inteligentes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Interacción con otras aplicaciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistema distribuido y red extendida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos, clasificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistemas sin intermediarios',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_1_ 22810047_1.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Criptografía - cifrado',
      referencia:
        'ESET Latinoamérica. (2016). <em>Cifrado de datos: qué es y cómo puede ayudarte a proteger tu información en Internet<em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wcJBmoz6Vlk',
    },
    {
      tema: 'Documentación oficial del lenguaje de programación Solidity',
      referencia:
        'Solidity. (2022). <em>Solidity documentation. Solidity</em>.',
      tipo: 'Manual electrónico',
      link: 'https://docs.soliditylang.org/_/downloads/en/latest/pdf/',
    },
    {
      tema: 'Definición de contrato inteligente',
      referencia: 'Remix. (s.f.). <em>File explorers</em>. Remix.',
      tipo: 'Página web',
      link: 'https://remix.ethereum.org',
    },
  ],
  glosario: [
    {
      termino: 'Contrato',
      significado: 'Un conjunto de acuerdos o promesas entre agentes.',
    },
    {
      termino: 'DAO',
      significado:
        'Son sistemas programados autónomos que representan organizaciones y estas operan de forma autónoma.',
    },
    {
      termino: 'Firma digital',
      significado:
        'Protocolo criptográfico basado en criptografía de clave pública, que prueba que un objeto está en contacto activo con la clave privada; correspondiente a la firma, el objeto está activamente “firmado” con esa clave.',
    },
    {
      termino: 'Llave',
      significado:
        'Un número aleatorio extraído de un espacio de nombres tan grande que una conjetura afortunada es enormemente improbable.',
    },
    {
      termino: 'Protocolo',
      significado: 'Una secuencia de mensajes entre múltiples agentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arroyo, D., Díaz, J. y Hernández, L. (2019). Blockchain. Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111431',
    },
    {
      referencia:
        'Fuentes, E. (2022). Contratos inteligentes: un análisis teórico desde la autonomía privada en el ordenamiento jurídico colombiano. Editorial Unimagdalena.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/214513',
    },
    {
      referencia:
        'MinTIC. (2022). Guía de referencia de blockchain para la adopción e implementación de proyectos en el Estado colombiano. MinTIC.',
      link: 'https://gobiernodigital.mintic.gov.co/692/articles-161810_pdf.pdf',
    },
    {
      referencia: 'Solidity. (2022). Solidity documentation. Solidity.',
      link: 'https://docs.soliditylang.org/_/downloads/en/latest/pdf/',
    },
    {
      referencia:
        'Tudela, L. (2019). Arquitectura blockchain para la securización de dispositivos IOT mediante smart contracts.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal Gutiérrez',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Liliana Victoria Morales Gualdron',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca, Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Norte de Santander. Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodóloga para la formación virtual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego ',
          cargo: 'Validación de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Castaño Pérez Leyson Fabian',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
