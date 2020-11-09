// import Mock from 'mockjs' // 引入mockjs
 
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
 
// let data = [] // 用于接受生成数据的数组
// let size = [
//   '300x250', '250x250', '240x400', '336x280', 
//   '180x150', '720x300', '468x60', '234x60', 
//   '88x31', '120x90', '120x60', '120x240', 
//   '125x125', '728x90', '160x600', '120x600', 
//   '300x600'
// ] // 定义随机值
// for(let i = 0; i < 6; i ++) { // 可自定义生成的个数
//   let template = {
//     'Boolean': Random.boolean, // 可以生成基本数据类型
//     'Price': Random.float(10, 100, 0, 3), // 生成10到100之间的浮点数,小数点后尾数为0到3位
//     'Natural': Random.natural(100, 200), // 生成100到200之间自然数,当做ID
//     'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
//     'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
//     'Image': Random.image(size.Random, '#5E5E5E ', '商家调研'), // Random.size表示将从size数据中任选一个数据
//     'Color': Random.color(), // 生成一个颜色随机值
//     'Paragraph':Random.paragraph(1, 2), //生成2至5个句子的文本
//     'Name': Random.name(), // 生成姓名
//     'Url': Random.url(), // 生成web地址
//     'Address': Random.province() // 生成地址
//   }
//   data.push(template)
// }
 
// Mock.mock('/data/index', 'get', data) // 根据数据模板生成模拟数据