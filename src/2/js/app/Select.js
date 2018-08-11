define(function(require){
    return class Select {
        constructor() {
            this._selectId = "Languages";
            this._LoadLangCodes();
        }
        _LoadLangCodes() {
            require(["nls/wording"], (wording)=>{
                // 言語コード一覧
                const langs = Object.keys(wording).filter(n => n !== "root");
                langs.sort();
                console.log("言語コード一覧生成: ", langs);
                // <select>生成
                const select = this._CreateSelect();
                langs.forEach((element, index, array)=>{
                    select.appendChild(this._CreateOption(element));
                });
                console.log("selectタグ生成: ", select);
                // イベントリスナー
//                const self = this; // addEventListener("",function(){もしここで本クラスのinstanceが必要なら変数selfに退避しておく。thisはselectにしたいから})
                select.addEventListener("change", function(){
                    console.log("select lang: ", this.options[this.selectedIndex].value);
                    require(["require.i18n!nls/"+ this.options[this.selectedIndex].value +"/wording"], function (wording) {
                        console.log(wording);
                        console.log(wording.Hello);
                        alert(wording.Hello);    
                    });

                });
                console.log("selectイベント設定: ", select);
                document.body.appendChild(select);
                console.log("selectをbodyに追加: ", document.body);
            });
        }
        _CreateSelect() {
            const s = document.createElement("select");
            s.setAttribute("id", this._selectId);
            return s;
        }
        _CreateOption(langCode) {
            const o = document.createElement("option");
            o.innerText = langCode;
            o.setAttribute("value", langCode);
            return o;
        }
    }
});
