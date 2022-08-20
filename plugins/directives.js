import Vue from 'vue';

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // aqui eu verifico que o clique estava fora do el e seus filhos
      if (!(el === event.target || el.contains(event.target))) {
      // e se sim, chame o método fornecido no valor do atributo
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});
