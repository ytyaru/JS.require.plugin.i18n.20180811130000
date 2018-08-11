# このソフトウェアについて

　[require.js](http://requirejs.org/)のプラグイン[i18n](https://requirejs.org/docs/download.html#i18n)で国際化する方法。[demo](https://ytyaru.github.io/JS.require.plugin.i18n.20180811130000)

# コード

app.js
```javascript
require.config({
    paths: {
        "require.i18n": "js/lib/require/plugin/i18n",
    }
});
require(["require.i18n!nls/wording"], function (wording) {
    alert(wording.Hello);
});
```

nls/wording.js
```javascript
define({
    "root": {
        "Hello": "Hello",
    },    
    "ja": true, // 日本語
    "zh": true, // 中国語
});
```

nls/ja/wording.js
```javascript
define({
    "Hello": "こんにちは",
});
```

nls/zh/wording.js
```javascript
define({
    "Hello": "你好",
});
```

表示される言語は以下の値により自動で決まる。

* navigator.languages
* navigator.userLanguage
* navigator.userLanguage

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56

# ライセンス

　このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

　使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
[require domReady](https://github.com/requirejs/domReady)|[MIT](https://opensource.org/licenses/MIT)|[
Copyright jQuery Foundation and other contributors](https://github.com/requirejs/domReady/blob/master/LICENSE)
[require text](https://github.com/requirejs/text)|[MIT](https://opensource.org/licenses/MIT)|[
Copyright jQuery Foundation and other contributors](https://github.com/requirejs/text/blob/master/LICENSE)
[require i18n](https://github.com/requirejs/i18n)|[MIT](https://opensource.org/licenses/MIT)|[
Copyright jQuery Foundation and other contributors](https://github.com/requirejs/i18n/blob/master/LICENSE)

