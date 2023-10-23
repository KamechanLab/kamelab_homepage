<!-- メモ vscodeはCtrl+Shift+Vでプレビュー -->

# kamelab_homepage について

このリポジトリは、沖縄高専亀濱研究室のホームページを作るためのものです。

※これからいろいろ運用のルールなどを追記していく予定です

ルールも、手探りでいろいろ変えながら試していきます

## 開発をするための準備！

### 1. gitのインストール

https://qiita.com/T-H9703EnAc/items/4fbe6593d42f9a844b1c を見ながらgitのインストールと設定を行ってください

### 2. リポジトリのクローン

Git Bash を立ち上げて、以下のコマンドを実行してください

~~~
git clone https://github.com/KamechanLab/kamelab_homepage.git
~~~

※ajimaだとうまくいかないかも

これで準備完了です！

## 開発の進め方！

### 1. プルする

開発をするための準備をした人は、自分のPCのどこかに「kamelab_homepage」という名前のフォルダがあるはずです。Git Bashを開いて、kamelab_homepage直下で以下のコマンドを実行して、リポジトリの最新の状態を自分のPCに持ってきましょう！

~~~
git pull
~~~

### 2. 開発する

いい感じに開発しましょう！

### 3. コミットする

kamelab_homepage直下で以下のコマンドを実行します

~~~
git add .
git commit -m "コミットメッセージ"
git push
~~~

コミットメッセージは、何を変更したのかを書きましょう！

例）main.cssを変えて、亀ちゃんの名前をいい感じに四角で囲った

### 4. ページを確認する

以下のリンクから確認できます！

https://kamechanlab.github.io/kamelab_homepage/

## tips

いろんな機能の実装が詰まってる　神

https://coco-factory.jp/ugokuweb/

Devtoolというのがデバッグにめっちゃ便利。ブラウザでF12キーを押して、

![](images/devtool.png)

赤丸で囲ったボタンを押すと、カーソル合わせたとこのmarginとかがどうなってるのかが一目でわかる
