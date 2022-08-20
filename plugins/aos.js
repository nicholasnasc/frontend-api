import Vue from 'vue'

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(AOS.init({
    // Configurações globais:
    disable: false, // aceita os seguintes valores: 'phone', 'tablet', 'mobile', boolean, expression ou function
    startEvent: 'DOMContentLoaded', // nome do evento despachado no documento, que o AOS deve inicializar
    initClassName: 'aos-init', // classe aplicada após a inicialização
    animatedClassName: 'aos-animate', // aula aplicada em animação
    useClassNames: false, // se true, adicionará conteúdo de `data-aos` como classes na rolagem
    disableMutationObserver: false, // desativa as detecções de mutações automáticas (avançado)
    debounceDelay: 50, // o atraso no debounce usado ao redimensionar a janela (avançado)
    throttleDelay: 99, // o atraso no acelerador usado ao rolar a página (avançado)


    // Configurações que podem ser substituídas por elemento, por atributos `data-aos-*`:
    offset: 120, // deslocamento (em px) do ponto de disparo original
    delay: 0, // valores de 0 a 3000, com passo de 50ms
    duration: 400, // valores de 0 a 3000, com passo de 50ms
    easing: 'ease', // easing padrão para animações AOS
    once: false, // se a animação deve acontecer apenas uma vez - enquanto rola para baixo
    mirror: false, // se os elementos devem animar enquanto passam por eles
    anchorPlacement: 'top-bottom', // define qual posição do elemento em relação à janela deve acionar a animação

  }));
