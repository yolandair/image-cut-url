//获取图片裁切URL liuying 2017-12-12
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory();
  } else {
    // 浏览器全局变量(root 即 window)
    root.ImageCutURL = factory();
  }
}(this, function () {
  //图片裁切 liuying 2017-12-12
  var ImageCutURL = {
    getRandomImageURL: function (key, type) {//取随机图片的地址
      var map = {
        "v0": ["http://n1.image.pg0.cn/",
          "http://n2.image.pg0.cn/", "http://n3.image.pg0.cn/",
          "http://n4.image.pg0.cn/", "http://n5.image.pg0.cn/",
          "http://n6.image.pg0.cn/"],
        "v1": ["http://n1.image.pg0.cn/",
          "http://n2.image.pg0.cn/", "http://n3.image.pg0.cn/",
          "http://n4.image.pg0.cn/", "http://n5.image.pg0.cn/",
          "http://n6.image.pg0.cn/"],
        "v2": ["http://n5.map.pg0.cn/",
          "http://n6.map.pg0.cn/"],
        "vc": ["http://n1.convert.pg0.cn/convert/","http://n2.convert.pg0.cn/convert/",
          "http://n3.convert.pg0.cn/convert/","http://n4.convert.pg0.cn/convert/",
          "http://n5.convert.pg0.cn/convert/"]
      };
      var arr = map["v0"];
      if (type) {
        arr = map["v" + type];
      }
      return arr[Math.floor(Math.random() * arr.length)] + key;
    },
    getSearchImageURL: function (imgURL, width, height, type) {//搜索那边的图片需要传入图片URL，宽度（值，如200），高度（值如200）和裁切类型（如3）
      var resultURL = imgURL;

      if (!width && !height) return resultURL + '.jpg';

      resultURL += width ? '-' + width : '-1000';
      resultURL += height ? '-' + height : '-1000';
      resultURL += type ? '-' + type : '';
      resultURL += '.jpg';

      return resultURL;
    },

    getCmsImageURL: function (imgURL, width, height) { //搜索那边的图片只需要传入图片URL，图片宽和图片高
      var resultURL;
      resultURL = imgURL + '?enable=' //enable和cut是默认加的
      if (width) {//如果有宽，传入宽
        resultURL += '&w=' + width;
      }
      if (height) {//如果如果有高，传入高
        resultURL += '&h=' + height;
      }
      resultURL += '&cut=';
      return resultURL;
    },

    init: function (imageURL, width, height, type) {//imageURL可以传入具体的URL也可以传入[key,type]这个数组},type是搜索图片裁切的参数
      var T = this;
      var imgURL,
        searchImgReg = /^http:\/\/[a-z]\d\.(map|news|image)\.pg0\.cn/ig,//搜索那边的图片格式 http://nx.(map,news,image).pg0.cn
        cmsfileReg = imageURL.indexOf("cmsfile"),  //以下三种方式判断cms的图片
        cmsvideoReg = imageURL.indexOf("cmsvideo"),
        cmsOutReg = imageURL.indexOf("daguan");

      if (typeof imageURL == 'object') {//如果传入的是对象则是那种key,type取随机参数的URL
        imgURL = T.getRandomImageURL(imageURL[0], imageURL[1] || "0");
      } else {//如果传入的是普通的URL，则直接是普通的URL
        imgURL = imageURL;
      }

      if (searchImgReg.test(imgURL)) {//如果是搜索的图片，在下面还可以添加其他的正则匹配
        return T.getSearchImageURL(imgURL, width, height, type);
      }
      if (cmsfileReg > 0 || cmsvideoReg > 0 || cmsOutReg > 0) {//cms的图片不需要穿最后一个参数
        return T.getCmsImageURL(imgURL, width, height);
      }
      return imageURL;//如果都不是之上的裁切方式则直接返回原来的URL就可以
    }
  }
  return ImageCutURL;
}))
