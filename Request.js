(function(){
  'use strict';

  class Request {

    get() {
      var url; // リクエスト先URL
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onreadystatechange = function () {
          if (request.readyState != 4) {
              // リクエスト中
          } else if (request.status != 200) {
              // 失敗
          } else {
              // 取得成功
              // var result = request.responseText;
              console.log(request);
          }
      };
      request.send(null);
    }

    post() {
      var url; // リクエスト先URL
      var data; // 送信データ ('param=value&...')
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = function () {
          if (request.readyState != 4) {
              // リクエスト中
          } else if (request.status != 200) {
              // 失敗
          } else {
              // 送信成功
              // var result = request.responseText;
              console.log(request);
          }
      };
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      request.send(data);
    }

    dispatch(selector) {
      this.buildElement();
    }
  }

  const main = new Request();
  main.dispatch();
  console.log('insertElement');
})();
