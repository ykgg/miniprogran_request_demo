// import * http from "./http.js";
var http = require("./http.js");

var baseURL = "http://192.168.175.145:8080/ai-api"; //your base url


//购物车列表
function getCartList() {
  return http.GET(baseURL + "/cart/list", {
    width: 200,
    height: 200,
    mode: 0
  });
}

//加入购物车
function postAddToCart(data) {
  return http.POST(baseURL + "/cart", data);
}

function postCartList(data) {
  return http.POST(baseURL + "/cart/list", data);
}
//删除商品
function deleteCart(cartid) {
  return http.DELETE(baseURL + "/cart?cartid=" + cartid);
}




module.exports = {
  baseURL,
  getCartList,
  postAddToCart,
  postCartList,
  deleteCart,
  


};
