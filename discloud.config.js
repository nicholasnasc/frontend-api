export default {
  name: 'DisCloud.app',
  domain: 'api.discloud.app',
  image: '/images/discloud-hero.png',
  email: 'support@discloudbot.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'nick.discloud.app',
    trackLocalhost: false,
    apiHost: ''
  },
  // Habilite se quiser comentários e curtidas nas postagens
  firebase: {
    enabled: false
  },
  social: {
    github: 'discloud',
    linkedin: 'pedroricardor',
    facebook: 'discloudbot',
    twitter: 'discloudbot',
    instagram: 'discloudbot',
    codestats: ''
  },
  buyMeACoffee: {
    enabled: false,
    url: ''
  },
  projects: {
    enabled: false,
  },
  api: {
    enabled: true,
  },
  resume: {
    enabled: false,
    pdfUrl: ''
  },
  uses: {
    enabled: false,
    meta: [
      {title: '', value: ''},
    ]
  },
  workedAt: {
    enabled: true,
    meta: [
      { name: 'Ruby', src: '/images/lang/ruby.png', url: 'api/languages' },
      { name: 'Java', src: '/images/lang/java.png', url: 'api/languages' },
      { name: 'PHP', src: '/images/lang/php.png', url: 'api/languages' },
      { name: 'Rust', src: '/images/lang/rust.png', url: 'api/languages' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: '', designation: '', image: '', linkedin: '', content: ''},
      { name: '', designation: '', image: '', linkedin: '', content: '' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
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
        api: 'API',
        dashboard: 'Dashboard',
        server: 'Servidor', 
      },
      hero: {
        about: 'Sobre Nós',
        content: 'Projetos',
        text: 'DISCLOUD ─ API',
        description: 'Gerencie seus serviços de um jeito fácil, prático e veloz, com a nossa API você poderá automatizar e interagir com as principais funcionalidades que temos a oferecer, com a API da DisCloud você tem suporte para as melhores rotas de desenvolvimento que a sua aplicação precisa!',
        words: ['Commit', 'Start', 'Stop', 'Restart', 'Upconfig', 'Logs', 'Status', 'Apt', 'AutoRestart', 'Backup', 'RamEdit', 'Mod', 'RemoverApp', 'Version', 'UserInfo', 'SubDominio', 'CustomDomain', 'Git'],
      },
      api: {
        header: 'DisCloud › API',
        subtext: 'Com a nossa API, você poderá automatizar e interagir com as principais funcionalidades que temos a oferecer!'
      },
      recentapi: {
        header: 'API',
        subtext: 'Crie, remova, consulte, ative e desative suas aplicações com total segurança.'
      },
    }
  }
}
