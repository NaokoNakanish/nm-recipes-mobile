## Set up for nativescript-vue

<!-- うごかなくなったら、ctrl+C -->

<!-- はじめはターミナルで -->

# install nativescript

https://nativescript-vue.org/en/docs/getting-started/installation/
npm install -g nativescript

# create new project

https://nativescript-vue.org/en/docs/getting-started/quick-start/
ns create <project-name> --vue # add --ts if you'd like to scaffold a project with TypeScript

<!-- ここからVSCode上で、作ったファイルを開いた状態で -->

cd <project-name>
npm install
ns run

# macOS + Android

https://docs.nativescript.org/environment-setup.html#macos-android
// sudo をつけないと、error: cannot open .git/FETCH_HEAD: Permission denied になる
sudo git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshall

brew tap AdoptOpenJDK/openjdk

brew install --cask adoptopenjdk15

<!-- エラーになる場合
Error: Download failed on Cask 'adoptopenjdk15' with message: No such file or directory @ dir_s_rmdir - /usr/local/var/homebrew/locks/0e366ed7d2f446b4147b7d3d5e56c8f73f5d80f8b52b5e9831e68029090ff5a5--OpenJDK15U-jdk_x64_mac_hotspot_15.0.2_7.pkg.incomplete.lock
↓（代替案｝adoptopenjdkの公式サイトより、.pkgダウンロード、インストール
https://adoptopenjdk.net/index.html?variant=openjdk15&jvmVariant=hotspot
で、OpenJDK15をダウンロード、インストールする -->

https://developer.android.com/studio
Android Studio をダウンロードして、インストールする

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:\$ANDROID_HOME/platform-tools
npm install -g nativescript

ns doctor android

<!-- Component @nativescript/android is not installed.でる。。。。 -->
