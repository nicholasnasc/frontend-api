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
      { name: 'Java', src: '/images/java.png', url: 'https://sendpost.io' },
      { name: 'Ruby', src: '/images/ruby.png', url: 'https://amazon.in' },
      { name: 'Rust', src: '/images/rust.png', url: 'https://get.interviewready.io' },
      { name: 'PHP', src: '/images/php.png', url: 'https://crio.do' },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      { name: 'Varun Jain', designation: 'Founder, SendX & SendPost', image: '/images/varun.jpeg', linkedin: 'https://www.linkedin.com/in/varun-jain-582b0215/', content: 'Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user\'s perspective.' },
      { name: 'Gaurav Sen', designation: 'Founder, InterviewReady', image: '/images/gaurav.jpeg', linkedin: 'https://www.linkedin.com/in/gkcs/', content: 'Karn is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. At InterviewReady, Karn exceeded our expectations. If you are considering working with him: congratulations, you are going to have a great time!' },
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
      download: 'download',
      nav: {
        home: 'Início',
        blog: 'Blog',
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
        description: 'Um serviço feito para hospedar todos os seus aplicativos com certificados TLS gratuitos, CDN global, proteção contra DDoS e implantações automáticas com Git.',
        words: ['Commit Archives', 'Status', 'Restart', 'TOR Checker', 'Domain Checker', 'Whois Checker', 'Email Validator'],
      },
      api: {
        header: 'API Requests',
        subtext: 'Lista de APIs disponíveis'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'DisCloud - API',
        subtext: 'Gerencie Dados, Processos, Sistemas e integre com todas as suas Aplicações.'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
