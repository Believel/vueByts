import { DirectiveBinding } from 'vue/types/options';
const bindOutside = (e: MouseEvent, el: HTMLElement,  binding: DirectiveBinding) => {
  if (e.target === el || el.contains((e.target) as Node)) {
    return;
  }
  // 点击非自己或者不是自己的儿子就关闭元素
  binding.value();
};
export default {
  clickOutside: {
    inserted(el: HTMLElement, binding: DirectiveBinding) {
      document.addEventListener('click', function(e: MouseEvent) {
        bindOutside(e as MouseEvent, el as HTMLElement, binding as DirectiveBinding);
      });
    },
    unbind(el: HTMLElement, binding: DirectiveBinding) {
      document.removeEventListener('click', function(e: MouseEvent) {
        bindOutside(e as MouseEvent, el as HTMLElement,  binding as DirectiveBinding);
      });
    }
  }
};