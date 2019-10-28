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

  class dispacher {
    run() {
      const insertElement = new insertElement();
      insertElement.dispatch();
      console.log('insertElement');
    }
  }

  //const main = new insertElement();
  //main.dispatcher().dispach();

})();
