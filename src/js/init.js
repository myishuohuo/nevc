import conf from '../../config/remoteHost';

// setHost
export default function setHost(conf) {
  // 是否是生产环境
  if (process.env.NODE_ENV === 'production') {
    // if (location.protocol === 'http:') {
    //   window.location.href = 'https://' + window.location.href.substr(7)
    // }
  // 是否有缓存
    if (!sessionStorage.host) {
    // 是否是外部设置
      if (process.env.HOST_ENV) {
        sessionStorage.host = process.env.HOST_ENV;
      } else {
        sessionStorage.host = conf.prod;
      }
    } else {
      sessionStorage.host = conf.prod;
    }
  } else if (process.env.HOST_ENV) {
    sessionStorage.host = process.env.HOST_ENV;
  } else {
    sessionStorage.host = conf.dev;
  }
  window.host = sessionStorage.host;
  window.imgUrl = conf.imgUrl;
}

setHost(conf);
