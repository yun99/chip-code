
1.属性的简洁表示法;
【注】简写的对象方法不能用作构造函数，会报错
2.属性名表达式
【注】属性名表达式与简洁表示法
3.方法的 name 属性
4.属性的可枚举性和遍历
    4.1可枚举性
    对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor
    for...in循环：只遍历对象自身的和继承的可枚举的属性。
    Object.keys()：返回对象自身的所有可枚举的属性的键名。
    JSON.stringify()：只序列化对象自身的可枚举的属性。
    Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
【注】ES6 规定，所有 Class 的原型的方法都是不可枚举的

Object.keys(obj)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertySymbols(obj)
Reflect.ownKeys(obj)

5.super 关键字
this关键字总是指向函数所在的当前对象，supe指向当前对象的原型对象；

6.对象的扩展运算符
解构赋值
解构赋值必须是最后一个参数，否则会报错。
解构赋值的拷贝是浅拷贝
不能复制继承自原型对象的属性