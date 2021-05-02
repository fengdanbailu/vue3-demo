/*
 * @Author: gm.chen
 * @Date: 2021-05-02 23:22:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-02 23:27:18
 * @Description: file content
 * @FilePath: /vue3-demo/tests/Test.spec.ts
 */
import { mount } from '@vue/test-utils'
import Test from '../src/views/Test.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
