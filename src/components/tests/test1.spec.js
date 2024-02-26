import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld';
import { expect } from 'chai';

describe('HelloWorld', () => {
  it('отображается кнопка, которая вызывает метод test', () => {
    const wrapper = shallowMount(HelloWorld)
    
    // Проверяем, что кнопка отображается
    const button = wrapper.find('.generation')
    expect(button.exists()).toBe(true)

    // Нажимаем на кнопку
    button.trigger('click')

    // Проверяем, что свойство showbutton изменилось на false
    expect(wrapper.vm.showbutton).toBe(false)

    // Проверяем, что метод test1 был вызван
    expect(wrapper.vm.test1).toHaveBeenCalled()
  })
})
