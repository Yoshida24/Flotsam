(function(){
    console.log('start');

    // 対象とするノードを取得
    const target = document.querySelector('body');

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
})();
