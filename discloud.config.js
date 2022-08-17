// Carregar arquivos em static/ Portanto, qualquer arquivo static/file.pdf -> /file.pdf é acessível na raiz

export default {
  name: 'DisCloud API Status',
  domain: 'nick.discloud.app', // Não colocar: https://
  image: '/images/discloud-logo.png',
  email: 'support@discloudbot.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'nick.discloud.app',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: '' // default: https://plausible.io
  },
  // Habilite se quiser comentários e curtidas nas postagens
  firebase: {
    enabled: false
  },
  social: {
    github: 'discloud',
    linkedin: 'discloud',
    facebook: 'discloudbot',
    twitter: 'discloudbot',
    instagram: 'discloudbot',
    codestats: '' // https://codestats.net
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://discloud.app'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: false,
    pdfUrl: '/' // Adicione o sobre nós na raíz da pasta static
  },
  uses: {
    enabled: false,
    meta: [
      {title: 'Sistema Operacional', value: 'Linux Unbuntu'},
      {title: 'RAM', value: '128 GB 3600 MHz DDR4'},
      {title: 'Processador', value: 'Ryzen 7 3700x 8/16'},
      {title: 'Armazenamento', value: 'SSD Nvme. 2TB'},
      {title: 'Linguagem', value: 'JavaScript, TypeScript'},
      {title: 'Hospedagem', value: 'Sites, Bots & Banco de Dados'}
    ]
  },
  workedAt: {
    // Adicione logos estáticas no máximo 3/4
    enabled: true,
    meta: [
      { name: 'Java', src: '/images/java.png', url: 'https://docs.oracle.com/en/java/' },
      { name: 'Ruby', src: '/images/ruby.png', url: 'https://ruby-doc.org/' },
      { name: 'Rust', src: '/images/rust.png', url: 'https://www.rust-lang.org/learn' },
      { name: 'PHP', src: '/images/php.png', url: 'https://www.php.net/docs.php' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: 'Nome1', designation: 'Cargo', image: 'link da imagem de perfil', linkedin: 'link da mensagem', content: 'mensagem' },
      { name: 'Nome2', designation: 'Cargo', image: 'link da imagem de perfil', linkedin: 'link da mensagem', content: 'mensagem' },
    ]
  },
  loadingIndicator: {
    name: 'cube-grid'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    pt_BR: {
      download: 'Baixar',
      nav: {
        home: 'Início',
        blog: 'Notícias',
        projects: 'Projetos',
        system: 'Sistema',
        about: 'Sobre Nós',
        buyMeACoffee: 'Seja Doador',
        signIn: 'Login',
        signOut: 'Sair'
      },
      hero: {
        about: 'Sobre Nós',
        content: 'Conteúdos',
        friendlyNeighborhood: 'DISCLOUD ─ API',
        description: 'Um serviço feito para gerenciar suas aplicações de um jeito fácil, prático e veloz. Gerencie tudo de um só lugar da forma que preferir! Com a nossa API, você poderá automatizar e interagir com as principais funcionalidades que temos a oferecer!',
        words: ['Commit Archives', 'Status', 'Restart', 'TOR Checker', 'Domain Checker', 'Whois Checker', 'Email Validator'],
      },
      api: {
        header: 'API Requests',
        subtext: 'Lista de APIs disponíveis'
      },
      blog: {
        header: 'Notícias',
        subtext: 'Fique por dentro de todas as atualizações da nossa API.'
      },
      recentBlog: {
        header: 'Notícias',
        subtext: 'Automatize seus serviços com a nossa API'
      },
      uses: {
        header: '',
        subtext: ''
      },
      projects: {
        header: 'DisCloud - API',
        subtext: 'Gerencie Dados, Processos, Sistemas e integre com todas as suas Aplicações.'
      },
      recommendations: {
        header: 'FeedBack',
        subtext: 'pessoas que utilizam nossos serviços'
      }
    },
  en_US: {
  download: 'Download'
}
  }
}
