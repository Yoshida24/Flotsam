(function(){
  'use strict';

  class Request {

    get(url) {
      let request = new XMLHttpRequest();
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
              console.log(request.response);
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
  }

  class Dispacher {
    dispatch() {
      const request = new Request();
      // let result = request.get('http://nn-hokuson.hatenablog.com/');

      // 住所を取得する日本郵政のAPI
      request.get('http://zipcloud.ibsnet.co.jp/api/search?zipcode=2500011');
      console.log('dispacher runnded');
    }
  }

  const main = new Dispacher();
  main.dispatch();
})();
