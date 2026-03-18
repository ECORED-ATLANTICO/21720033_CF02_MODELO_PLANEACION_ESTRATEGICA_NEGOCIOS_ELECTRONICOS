export default {
  global: {
    Name: 'Aplicación de la estrategia en negocios electrónicos',
    Description:
      'Este componente formativo orienta al aprendiz en la aplicación de estrategias en negocios electrónicos, abordando las categorías del <em>e-commerce</em>, el diseño de estrategias digitales, la generación de valor agregado y la formulación de un plan estratégico y de acción con enfoque en <em>marketing</em> digital y toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        numero: '1',
        titulo: 'Categorías de negocios electrónicos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de estrategias <em>e-commerce</em>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de valor agregado para negocios electrónicos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan estratégico en <em>marketing</em> digital',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Presupuesto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Cronograma',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Indicadores',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Herramientas',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Control',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Seguimiento',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Evaluación',
            hash: 't_5_7',
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
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_21720033_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
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
      tema: 'Diseño de estrategias e commerce',
      referencia:
        'Cyberclick • <em>Marketing</em> Digital. (2024, 16 de abril). <em>Qué es un ecommerce y cómo funciona guía 2026</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c6Grr8r5j5g',
    },
    {
      tema: 'Plan estratégico en <em>marketing</em> digital',
      referencia:
        'Marketing Digital Pro. (2024, 3 de enero). <em>El plan de marketing en el comercio electrónico</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sAvopikTTWE',
    },
    {
      tema: 'Plan de acción',
      referencia:
        'Garcia Sabater, J. J. (2013, 29 de mayo). <em>Indicadores KPI (Key Performance Indicators)</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EoGf5vgy1EM',
    },
  ],
  glosario: [
    {
      termino: 'Análisis estratégico',
      significado:
        'Proceso mediante el cual se evalúa el entorno interno y externo del negocio electrónico para apoyar la toma de decisiones y la formulación de estrategias.',
    },

    {
      termino: 'Canales digitales',
      significado:
        'Medios tecnológicos utilizados para la comunicación, promoción y comercialización de productos o servicios en entornos virtuales.',
    },

    {
      termino: 'Categorías de negocios electrónicos',
      significado:
        'Clasificación de los modelos de negocio digitales según su relación comercial, como <em>b2b</em>, <em>b2c</em>, <em>c2c</em> y <em>c2b</em>.',
    },

    {
      termino: 'Control estratégico',
      significado:
        'Actividad que permite verificar el cumplimiento de los objetivos y acciones definidas en el plan estratégico y el plan de acción.',
    },

    {
      termino: 'Cronograma',
      significado:
        'Herramienta de planificación que organiza las actividades del plan de acción en un periodo de tiempo determinado.',
    },

    {
      termino: '<em>E-commerce</em>',
      significado:
        'Modalidad de negocio electrónico orientada a la compra y venta de productos o servicios a través de plataformas digitales.',
    },

    {
      termino: 'Estrategia digital',
      significado:
        'Conjunto de acciones planificadas que utilizan medios y canales digitales para alcanzar objetivos comerciales y de <em>marketing</em>.',
    },

    {
      termino: 'Estrategias <em>e-commerce</em>',
      significado:
        'Acciones orientadas a optimizar la comercialización digital mediante plataformas de <em>e-commerce</em>.',
    },

    {
      termino: 'Evaluación',
      significado:
        'Proceso sistemático de análisis de los resultados obtenidos frente a los objetivos propuestos en el plan estratégico del negocio electrónico.',
    },

    {
      termino: 'Herramientas digitales',
      significado:
        'Aplicaciones y recursos tecnológicos utilizados para apoyar la ejecución, el control y la evaluación de estrategias en negocios electrónicos.',
    },

    {
      termino: 'Indicadores',
      significado:
        'Medidas cuantitativas o cualitativas que permiten evaluar el desempeño y la efectividad de las estrategias implementadas.',
    },

    {
      termino: '<em>Marketing</em> digital',
      significado:
        'Conjunto de estrategias y herramientas orientadas a la promoción de productos o servicios en entornos digitales.',
    },

    {
      termino: 'Modelo de negocio electrónico',
      significado:
        'Forma en que una organización crea, entrega y captura valor mediante el uso de plataformas y tecnologías digitales.',
    },

    {
      termino: 'Negocios electrónicos',
      significado:
        'Actividades comerciales y operativas que se desarrollan mediante el uso de internet y tecnologías digitales.',
    },

    {
      termino: 'Plan de acción',
      significado:
        'Documento que detalla las actividades, recursos, responsables y tiempos necesarios para ejecutar la estrategia del negocio electrónico.',
    },

    {
      termino: 'Plan estratégico',
      significado:
        'Instrumento de planificación que define objetivos, estrategias y lineamientos para orientar la gestión del negocio electrónico.',
    },

    {
      termino: 'Presupuesto',
      significado:
        'Estimación de los recursos financieros necesarios para la ejecución de las estrategias y acciones definidas.',
    },

    {
      termino: 'Seguimiento',
      significado:
        'Proceso continuo de revisión del avance de las acciones establecidas en el plan de acción.',
    },

    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso mediante el cual se seleccionan alternativas estratégicas para alcanzar los objetivos del negocio electrónico.',
    },

    {
      termino: 'Valor agregado',
      significado:
        'Elemento diferenciador que incrementa la percepción de valor del cliente en un negocio electrónico.',
    },
  ],
  referencias: [
    {
      referencia:
        'David, F. R. (2020). <em>Conceptos de administración estratégica</em> (16.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2021). <em>Dirección de marketing</em> (16.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Laudon, K. C., & Laudon, J. P. (2020). <em>Sistemas de información gerencial: administración de la empresa digital</em> (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones - MinTIC. (2019). <em>Libro blanco del comercio electrónico en Colombia</em>.',
      link:
        'https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf',
    },
    {
      referencia:
        'Porter, M. E. (2008). <em>Ventaja competitiva: creación y sostenimiento de un desempeño superior</em>. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. C. (2019). <em>Comercio electrónico: fundamentos, modelos y aplicaciones</em>. Universidad Cooperativa de Colombia.',
      link:
        'https://repository.ucc.edu.co/server/api/core/bitstreams/693b8bdc-9024-429c-8182-37a4416d2c47/content',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
