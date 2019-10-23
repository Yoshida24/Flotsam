(function(){
  'use strict';

  class insertElement {

    buildElement() {
      var div = document.createElement('div');
      div.textContent = 'hoge';

      //最後の子要素として追加
      document.body.appendChild(div);
    }

    dispatch(selector) {
      this.buildElement();
    }
  }
  const main = new insertElement();
  main.dispatch();
  console.log('insertElement');
})();
