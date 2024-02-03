import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld'

describe('Component', () => {
    it('вызов test при клике на кнопку', async () => {
      const wrapper = shallowMount(HelloWorld)
      const spy = jest.spyOn(wrapper.vm, 'test1')

       // найдем кнопку и кликнем на нее
    const button = wrapper.find('.generation')
    await button.trigger('click')
    // убеждаемся, что метод test1 был вызван
    expect(spy).toHaveBeenCalled()
  })
})