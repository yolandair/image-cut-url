## 全站公共图片裁切组建

### 安装

`npm install '@buss/image-cut-url';`


### 引入方法

### 普通引入方式

```
<script type="text/javascript" src="http://n3.static.pg0.cn/fp/image-cut-url/dist/image-cut-url.js">
```
### CMD

```
var ImageCutURL = require('@buss/image-cut-url');
```
### ES6

```
import ImageCutURL from '@buss/image-cut-url';
```

### AMD
```
require(['@buss/image-cut-url'], function(ImageCutURL){


})
```

## 调用方式
```
ImageCutURL.init('http://n6.map.pg0.cn/T10FbgB_ET1RCvBVdK','80', '100', '3');
//第一个参数是要转换的图片的地址，第二个参数是宽度，第三个参数是高度，第四个参数是裁切的类型
ImageCutURL.init([image.key, image.sourceAPI],'80', '100', 3);
//另外一种传参数的方式，第一个参数一个数组，数组的第一个值是key，第二个值是sourceAPI，其余的和上面的类似
```


