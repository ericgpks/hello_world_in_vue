### テンプレート構文
HTMLを書いているのではなく、テンプレート構文を書いている  
それをVue.jsが読み込んでいる

el構文：  
二重中括弧：dataの中のプロパティをそのまま書く。中にJSの構文をそのまま書ける。メソッドを呼び出すことができる。単一の式だけを書く。  
this：Vueインスタンス内で自分のインスタンス内にあるプロパティにアクセスするときに `this` をつける。テンプレートでは `this` はつけない。  

ディレクティブ(属性)： `v-` で始まる記法。  
v-once: 1度だけ描画させたいものにつける  
v-html: htmlを組み立てる。クロスサイトスクリプティングという脆弱性を生む可能性がある。信頼のあるコンテンツを表示する。  
v-bind:タグの属性に対してプロパティを表示させる。：だけで使える。  
v-on:引数にDOMのイベント(clickなど)を渡す。=のあとに処理を書く。  
methods: 関数を保持するブロック。  
イベントオブジェクト：イベントの情報が入ったオブジェクト。  
イベント修飾子：Vueが提供しているコモンなイベント。  
キー修飾子：キーボード操作に対するDOMイベント。  
省略記法：v-bindは：、v-onは＠
v-mode: 双方向データバインディングを実装する（双方向とはテンプレートとVueインスタンス）
computed: 動的なプロパティを使う時に用いるもの。プロパティのように扱う。
dataはプレーンな値を扱うもの

### 進捗
25まで