# Set up for nativescript-vue

<!-- TERMINALうごかなくなったら、ctrl+C -->

はじめはターミナルで

## install nativescript

https://nativescript-vue.org/en/docs/getting-started/installation/
`npm install -g nativescript`

## create new project

https://nativescript-vue.org/en/docs/getting-started/quick-start/
`ns create <project-name> --vue # add --ts if you'd like to scaffold a project with TypeScript`

ここから VSCode 上で、作ったファイルを開いた状態で

```
cd <project-name>
npm install
ns run
```

# macOS + Android

https://docs.nativescript.org/environment-setup.html#macos-android
sudo をつけないと、`error: cannot open .git/FETCH_HEAD: Permission denied` になる
`sudo git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshall`
とても時間がかかるが、辛抱強く待つ。やらないと永遠に git が clone だぞ、ホニャホニャとで続けて、先に進めない

```
brew tap AdoptOpenJDK/openjdk
brew install --cask adoptopenjdk15
```

`brew install --cash adoptopenjdk15`でエラーになる場合

```
Error: Download failed on Cask 'adoptopenjdk15' with message: No such file or directory @ dir_s_rmdir - /usr/local/var/homebrew/locks/0e366ed7d2f446b4147b7d3d5e56c8f73f5d80f8b52b5e9831e68029090ff5a5--OpenJDK15U-jdk_x64_mac_hotspot_15.0.2_7.pkg.incomplete.lock
```

↓（代替案｝adoptopenjdk の公式サイトより、.pkg ダウンロード、インストール
https://adoptopenjdk.net/index.html?variant=openjdk15&jvmVariant=hotspot
で、OpenJDK15 をダウンロード、インストールする

## Android Studio 関連

https://developer.android.com/studio
Android Studio をダウンロードして、インストールする

## .zprofile の記述変更

`.zprofile`（Finder から直接開いて）に、もともと書いてあるものは消して、以下コピペ

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## nativescript 入れる

npm install -g nativescript

## できてるかチェック

ns doctor android

## Component @nativescript/android is not installed.でる場合

チェック１
JDK 自体がそもそも入ってないっぽいなら、ここの「Install the Coding Pack for Java」でインストール
https://code.visualstudio.com/docs/java/java-tutorial

チェック２
ns doctor android すると途中で homebrew が permission denied だよと泣く場合
[ここ](https://stackoverflow.com/questions/16432071/how-to-fix-homebrew-permissions)の Big Sur 以降のやり方で

```
$ sudo chown -R $(whoami) $(brew --prefix)/*
```

その後もう一度`ns doctor android`やると homebrew のところでつまらなくなった。super user のパスワードが聞かれるようになった。

チェック３
`tns platform add android`してみる

`ns doctor android`で、問題がないか確認

# macOS + iOS

## X code 確認

Open XCode › Preferences › Locations and make sure Command Line Tools is set

## Ruby いれる

brew install ruby@2.7
brew link ruby@2.7
