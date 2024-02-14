import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  test('отображается кнопка, которая вызывает метод test', async () => {
    const wrapper = mount(HelloWorld)
    
    // Проверяем, что кнопка отображается
    const button = wrapper.find('.generation')
    expect(button.exists()).toBe(true)

    // Нажимаем на кнопку
    await button.trigger('click')

    // Проверяем, что свойство showbutton изменилось на false
    expect(wrapper.vm.showbutton).toBe(false)

    // Проверяем, что метод test1 был вызван
    expect(wrapper.vm.test1).toHaveBeenCalled()
  })
})
