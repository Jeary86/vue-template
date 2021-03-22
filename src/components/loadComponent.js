import Vue from 'vue'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const requireComponent = require.context(
  '.',
  true,
  /\.vue$/
  //找到components文件夹下以.vue命名的文件
)

/* components下无目录 */
// requireComponent.keys().forEach(fileName => {
//   const componentConfig = requireComponent(fileName)
//
//   const componentName = capitalizeFirstLetter(
//     fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
//     //因为得到的filename格式是: './dataList.vue', 所以这里我们去掉头和尾，只保留真正的文件名
//   )
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })

/* components下有目录 */
requireComponent.keys().forEach(fileName => {
  const componetConfig = requireComponent(fileName)
  let a = fileName.lastIndexOf('/')
  fileName = '.' + fileName.slice(a)
  const componetName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )
  Vue.component(componetName, componetConfig.default || componetConfig)
})
