
var minLength = 50;
var maxLength = 180;
var venusReg = getRegExp('//(p0|p1|p2|osp|img).meituan.net');
var venusGifReg = getRegExp('//(p0|p1|p2|osp|img).meituan.net/[0-9].[0-9]');
var changeVenusStr = getRegExp('//(p0|p1|p2|osp|img).meituan.net/', 'g');
var imgReg = getRegExp('.(gif|jpg|jpeg|png|GIF|JPG|PNG)');
var isGifReg = getRegExp('.(gif|GIF)');
var httpReg = getRegExp('^http:', 'i');
var defaultSrc = 'https://p0.meituan.net/mallimages/11a2db776e3d83d0f2be72d2a8e4ffcd9552.png';

var isVenus = function isVenus(src) {
  return venusReg.test(src);
};

var isGif = function isGif(src) {
  return isGifReg.test(src);
};

var isVenusGif = function isVenusGif(src) {
  return venusGifReg.test(src);
};

var createVenusGif = function createVenusGif(src, width, height) {
  // 生成压缩gif图
  return src.replace(changeVenusStr, function (str) {
    return str + width + '.' + height + '/';
  });
};

var parseLenStr = function parseLenStr(numStr, deviceW, radix) {
  if (!radix) radix = 0;
  var newStr = '' + numStr;

  if (newStr.lastIndexOf('px') === -1 && newStr.lastIndexOf('rpx') === -1) {
    return 0;
  }

  var n = 1; // if (newStr.lastIndexOf('px') !== -1 && newStr.lastIndexOf('rpx') === -1) {
  //     n = 2;
  // }

  if (newStr.lastIndexOf('rpx') !== -1) {
    if (deviceW > 0) {
      n = deviceW / 750;
    }
  } else {
    //TODO 历史逻辑, 以后会删除
    if (newStr.lastIndexOf('px') !== -1) {
      n = 2;
    }
  } // var parsed = parseInt(numStr, radix || 0) * n;


  var parsed = parseFloat(parseInt(numStr, radix || 0) * n).toFixed(0);
  if (isNaN(parsed)) return 0;
  return parsed;
};

var getDefaultQuality = function getDefaultQuality(deviceGrading) {
  var result = 75;

  if (deviceGrading === 0) {
    result = 40;
  }

  if (deviceGrading === 1) {
    result = 45;
  }

  return result;
};

var getPNGDefaultQuality = function getPNGDefaultQuality(deviceGrading) {
  var result = 85;

  if (deviceGrading === 0) {
    result = 50;
  }

  if (deviceGrading === 1) {
    result = 55;
  }

  return result;
};

var transformSrc = function transformSrc(src, conf, useWebpUrl, deviceW, deviceGrading) {
  var enableClip = true;

  if (!src || !imgReg.test(src) || src === defaultSrc) {
    // console.log(`当传递的图片错误时，使用默认的logo图片。大C2忽略了100*100的UI规范@杨小芳`);
    return {
      url: defaultSrc
    };
  }

  var newUrl = src.trim().replace(httpReg, 'https:');

  if (!isVenus(newUrl) || // 非 venus
  newUrl.indexOf('.webp') > -1 || // 已经是 webp
  isGif(newUrl) && isVenusGif(newUrl) || // 是gif图，并且为venus gif格式图
  // newUrl.lastIndexOf('.gif') !== -1 || // gif 图
  newUrl.indexOf('@') > -1 // 已裁剪
  ) {
    return {
      url: newUrl,
      progressiveUrl: newUrl
    };
  }

  var progressiveUrl = newUrl;
  useWebpUrl = conf.useWebp === false ? false : useWebpUrl;
  var width = conf.width || 0;
  var height = conf.height || 0;
  var quality = conf.quality || 0;
  var watermark = conf.watermark || 0;
  var minify = conf.minify || 0; // @750w_750h_10m

  var w = parseLenStr(width, deviceW);
  var h = parseLenStr(height, deviceW);
  var isProgressive = conf.isProgressive;
  var progressiveWith = conf.progressiveWith || 0;
  var progressiveHeight = conf.progressiveHeight || 0;
  var pw = isProgressive ? parseLenStr(progressiveWith, deviceW) : 0;
  var ph = isProgressive ? parseLenStr(progressiveHeight, deviceW) : 0;
  var DEFAULT_QUALITY = getDefaultQuality(deviceGrading) || 75;
  var PNG_DEFAULT_QUALITY = getPNGDefaultQuality(deviceGrading) || 85;

  if (isGif(newUrl)) {
    if (w > 0 && w < 700 && h > 0 && h < 700) {
      // w h > 700 会比原gif图还要大
      newUrl = createVenusGif(newUrl, w, h);
      return {
        url: newUrl,
        progressiveUrl: newUrl
      };
    } else {
      return {
        url: newUrl,
        progressiveUrl: newUrl
      };
    }
  }

  if (enableClip && (w || quality || minify || watermark)) {
    newUrl += '@';
    progressiveUrl += '@';

    if (w) {
      newUrl += w + 'w';
      progressiveUrl += pw ? pw + 'w' : parseInt(w / 7.5) + 'w';

      if (h) {
        newUrl += '_' + h + 'h';
        progressiveUrl += '_' + (ph ? ph + 'h' : parseInt(h / 7.5) + 'h');
      }

      newUrl += '_1e_1l';
      progressiveUrl += '_1e_1l';
    }

    if (quality) {
      newUrl += '_' + quality + 'Q';
      progressiveUrl += '_' + parseInt(quality / 1.6) + 'Q';
    } else if (newUrl.indexOf('.png') > -1) {
      newUrl += '_' + PNG_DEFAULT_QUALITY + 'Q';
      progressiveUrl += '_' + PNG_DEFAULT_QUALITY + 'Q';
    } else {
      newUrl += '_' + DEFAULT_QUALITY + 'Q';
      progressiveUrl += '_' + DEFAULT_QUALITY + 'Q';
    }

    if (minify) {
      newUrl += '_' + minify + 'm';
      progressiveUrl += '_' + parseInt(minify * 7.5) + 'm';
    }

    if (watermark) {
      newUrl += '|' + watermark;
      progressiveUrl += '|' + watermark;
    }
  }

  if (useWebpUrl) {
    newUrl += '.webp';
    progressiveUrl += '.webp';
  } // console.log('webp url是：${newUrl}', { ...conf, enableClip, enableWebp, useWebpUrl });
  // real-img


  return {
    url: newUrl,
    progressiveUrl: progressiveUrl
  };
}; // 是否开启image标签的webp属性


var openWebpAttr = function openWebpAttr(src, useWebpUrl) {
  if (!src || !imgReg.test(src) || src === defaultSrc) {
    return false;
  }

  var newUrl = src.trim().replace(httpReg, 'https:');

  if (!isVenus(newUrl) || // 非 venus
  newUrl.indexOf('.webp') > -1 || // 已经是 webp
  newUrl.lastIndexOf('.gif') !== -1 || // gif 图
  newUrl.indexOf('@') > -1 // 已裁剪
  ) {
    return newUrl.indexOf('.webp') > -1 && useWebpUrl;
  }

  return useWebpUrl;
};

var getPlaceHolderSize = function getPlaceHolderSize(conf) {
  var width = conf.width || 0;
  var height = conf.height || 0;
  var w = parseLenStr(width, 0);
  var h = parseLenStr(height, 0);
  var placeHolderSize = Math.min(w, h) / 2;

  if (placeHolderSize < minLength) {
    placeHolderSize = 0;
  }

  if (placeHolderSize > maxLength) {
    placeHolderSize = maxLength;
  }

  return placeHolderSize;
};

module.exports = {
  transformSrc: transformSrc,
  getPlaceHolderSize: getPlaceHolderSize,
  openWebpAttr: openWebpAttr
};