---
title: macOS Catalinaからのセットアップ
date: "2019-10-19"
path: "/how-to-setup"
author: "otemomi"
tags: ["diary", "memo"]
coverImage: "../images/react.png"
---

## アプデに失敗
先日macOS Catalinaにウッキウッキでアプデをしたら残り9分で止まってしまいました。一日放置したけど結局何も変わらず、強制終了したらやっぱり起動せず😢初期化してTimeMachineから復元しようと思いましたが、こちらも途中で止まってしまいました。  
ということで一から構築しているので今後のことを考えて各種セットアップの方法を残しておくことにします😠

## ターミナルを使ってすること
### Homebrewのインストール
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Gitのインストール
```
$ brew install git
$ git --version
```
Gitをインストールしてバージョンを確認する。
```
git version 2.21.0 (Apple Git-122)
```
最初から入っている古いバージョンが読み込まれているので、さっきインストールした方にパスを通す。
```
$ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
```
これで多分大丈夫。
```
$ source .bash_profile
```
.bash_profileファイルを再読み込みしてバーションを確認して変わってればOK。

### Nodeのインストール
まずはnodebrewをインストールします。
```
$ brew install nodebrew
```
インストールできたら
```
$ nodebrew ls-remote
```
インストール可能なバージョンを確認してとりあえず最新版を入れておく。
```
$ nodebrew install-binary latest
```
上記コマンドでエラーが出たので
```
$ mkdir -p ~/.nodebrew/src
```
ディレクトリを作ります。  
無事インストールできたらバーションを確認。
```
$ nodebrew ls
```
その後使用するバージョンを指定する。
```
$ nodebrew use v12.12.0
```
最後にパスを通して終了。
```
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
```
```
$ source .bash_profile
```
こちらも.bash_profileファイルを再読み込みしてNode.jsのバーション確認できればOK。

### yarnのインストール
```
$ brew install yarn
```
とりあえず入れてみた。

### GatsbyJSのインストール
```
# npmの場合
npm install --global gatsby-cli
# yarnの場合？
yarn global add gatsby-cli
```
```
gatsby new blog https://github.com/otemomi/blog
```
なんかエラー出てるけどとりあえずまた更新できそうです。  
ただ`yarn develop`が使えない🤪

あとはGitの設定しないといけない気もしますが、とりあえずまた明日😟