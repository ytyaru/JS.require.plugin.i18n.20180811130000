require.config({
    paths: {
//        "require.text": "js/lib/require/plugin/text",
        "require.i18n": "js/lib/require/plugin/i18n",
    }
});
//requirejs(['js/app/main.js']);
/*
require(['require.text!txt/hello.md'], function (txt) {
    console.log(txt);
    alert(txt);
});
*/
require(["require.i18n!nls/wording"], function (wording) {
    console.log("navigator.languages: ", navigator.languages);
    console.log("navigator.language", navigator.language);
    console.log("navigator.userLanguage", navigator.userLanguage);
    console.log(wording);
    console.log(wording.Hello);
    alert(wording.Hello);    
    requirejs(['js/app/main.js']);
});
