(function(){
  'use strict';

  class ObserveDom {
    constructor() {
    }

    observeDom(selector) {
      let target = document.querySelector(selector);

      console.log('prepare to observe.....');

      // オブザーバインスタンスを作成
      const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
              console.log(mutation);
          });
      });

      // オブザーバの設定
      const config = {
          characterData: true,
          subtree: true,
          characterDataOldValue: true,
          characterData: true
      };

      // 対象ノードとオブザーバの設定を渡す
      observer.observe(target, config);

      console.log('observe start !!!');
    }
  }

  class GetRule {
    constructor() {
    }
    /*
    placeholder() {
      let a = `curl -X POST
        -c cookie.txt
        --data-urlencode 'email=analytics-common@sprocket.bz'
        --data-urlencode 'password=Ms(rJuX1_Mg?986^'
        http://api.v2.sprocket.bz/auth/login`;
      $.get(a)
      .done(function( data ) {
        log(data);
      });
    }
    test(){
      var request = require('request');

      var options = {
          url: 'http://api.v2.sprocket.bz/auth/login',
          method: 'POST',
          password: 'password=Ms(rJuX1_Mg?986^'
      };

      function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
          console.log(response);
      }

      request(options, callback);
    }
    */
  }
  const main = new ObserveDom();
  main.observeDom('body');

})();
