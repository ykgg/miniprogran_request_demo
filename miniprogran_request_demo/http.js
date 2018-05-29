import Promise from "./promise.js";

function wxPromisify(fn) {
  return function(obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function(res) {
        //成功
        resolve(res);
      };
      obj.fail = function(res) {
        //失败
        reject(res);
      };
      fn(obj);
    });
  };
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};
/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
  var getRequest = wxPromisify(wx.request);
  return getRequest({
    url: url,
    method: "GET",
    data: data,
    header: {
      "content-Type": "application/json;charset=utf-8",
      cid: 0,
      versionCode: 100
    }
  });
}
/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data, header = {}) {
  var postRequest = wxPromisify(wx.request);

  header["content-type"] = "application/json";
  header.cid = 0;
  header.versionCode = 100;

  console.log(`header:${JSON.stringify(header)}`);
  return postRequest({
    url: url,
    method: "POST",
    data: data,
    header
  });
}

function deleteRequest(url, data) {
  var getRequest = wxPromisify(wx.request);

  return getRequest({
    url: url,
    method: "DELETE",
    data: data,
    header: {
      "Content-Type": "image/png;application/json",
      cid: 0,
      versionCode: 100
    }
  });
}

module.exports = {
  POST: postRequest,
  GET: getRequest,
  DELETE: deleteRequest
};
