//keyboard html model
Coding.miniKeyBoardHTMLModel = `<div id="keyboard-box" class="keyboard-box" style="display:none;">
            <div style="position:relative;height: 50px;width:910px;display:inline-block;">    
                <div onmousedown="Coding.insertAtCursor('   ');" onclick="Coding.focusEditor();" class="keyboard-btn">tab</div>
                <div onmousedown="Coding.insertAtCursor('(');" onclick="Coding.focusEditor();" class="keyboard-btn">(</div>
                <div onmousedown="Coding.insertAtCursor(')');" onclick="Coding.focusEditor();" class="keyboard-btn">)</div>
                <div onmousedown="Coding.insertAtCursor('quot');" onclick="Coding.focusEditor();" class="keyboard-btn">"</div>
                <div onmousedown="Coding.insertAtCursor(',');" onclick="Coding.focusEditor();" class="keyboard-btn">,</div>
                <div onmousedown="Coding.insertAtCursor('{');" onclick="Coding.focusEditor();" class="keyboard-btn">{</div>
                <div onmousedown="Coding.insertAtCursor('}');" onclick="Coding.focusEditor();" class="keyboard-btn">}</div>
                <div onmousedown="Coding.insertAtCursor('.');" onclick="Coding.focusEditor();" class="keyboard-btn">.</div>
                <div onmousedown="Coding.insertAtCursor('=');" onclick="Coding.focusEditor();" class="keyboard-btn">=</div>
                <div onmousedown="Coding.insertAtCursor('+');" onclick="Coding.focusEditor();" class="keyboard-btn">+</div>
                <div onmousedown="Coding.insertAtCursor('-');" onclick="Coding.focusEditor();" class="keyboard-btn">-</div>
                <div onmousedown="Coding.insertAtCursor('*');" onclick="Coding.focusEditor();" class="keyboard-btn">*</div>
                <div onmousedown="Coding.insertAtCursor('/');" onclick="Coding.focusEditor();" class="keyboard-btn">/</div>
                <div onmousedown="Coding.insertAtCursor('>');" onclick="Coding.focusEditor();" class="keyboard-btn">&#62;</div>
                <div onmousedown="Coding.insertAtCursor('<');" onclick="Coding.focusEditor();" class="keyboard-btn">&#60;</div>
                <div onmousedown="Coding.insertAtCursor(';');" onclick="Coding.focusEditor();" class="keyboard-btn">;</div>
                <div onmousedown="Coding.insertAtCursor('[');" onclick="Coding.focusEditor();" class="keyboard-btn">[</div>
                <div onmousedown="Coding.insertAtCursor(']');" onclick="Coding.focusEditor();" class="keyboard-btn">]</div>
                <div onmousedown="Coding.insertAtCursor('%');" onclick="Coding.focusEditor();" class="keyboard-btn">%</div>
                <div onmousedown="Coding.insertAtCursor('?');" onclick="Coding.focusEditor();" class="keyboard-btn">?</div>
                <div onmousedown="Coding.insertAtCursor('apos');" onclick="Coding.focusEditor();" class="keyboard-btn">'</div>
                <div onmousedown="Coding.insertAtCursor(':');" onclick="Coding.focusEditor();" class="keyboard-btn">:</div>
                </div>
                
                <!-- ADD BUTTON -->
                <!-- <div style="position:fixed;background-color:#141414;bottom:0px;left:0px;width:80px;height:60px;"></div> -->

                <div id="coding-add-btn-alert" style="position:fixed;left:calc(50% - 165px);bottom:108px;z-index:999;display:none;"><img src="../img/coding/coding-add-btn-alert.png" width="330" /></div>

                <div id="coding-add-btn" onmousedown="Coding.openSnippetWindow();" onclick="Coding.focusEditor();" class="coding-add-btn" style="position: fixed;left:calc(50% - 30px);bottom:45px;z-index:999;display:block;"><img src="../img/coding/coding-add-btn.png" width="60" height="60" /></div>

                <!-- CURSOR MOVE BUTTONS -->
                <div id="cursor-btn-group" style="position:fixed;display:block;width:170px;height:55px;bottom:55px;left:calc(50% - 85px);z-index:998;">

                    <div onmousedown="Coding.moveCursorLeft();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;left:0px;"><img src="../img/coding/coding-moveleft-btn.png" width="50" /></div>

                    <div onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;right:0px;"><img src="../img/coding/coding-moveright-btn.png" width="50" /></div>

                </div>

                <!-- KEYBOARD BACKGROUND -->
                <div id="keyboard-background" style="position:fixed;display:block;width:100%;height:30px;bottom:64px;left:0px;"><img src="../img/coding/keyboard-background.png" width="100%" height="30" /></div>

                <!-- add button end -->

            </div>

            <!-- keyboard end -->

            <!-- code list SNIPPET MODULE START -->
                
                <div id="keyboard-code-list" style="position:fixed;top:0px;left:0px;height:100%;width:100%;z-index:1000000;display:none;">

                    <!-- CLOSE BUTTON -->
                    <div id="coding-addclose-btn" onclick="Coding.focusEditor();" onmousedown="Coding.closeSnippetWindow();"  style="position: fixed;left:calc(50% - 20px);display:block;z-index:1000001;bottom:20px;"><img src="../img/coding/coding-addclose-btn.png" width="40" height="40" /></div>
                    <!-- code button end -->

                    <style>
                        .snippet-item { position:relative; margin-left: 0px; margin-top: 2px; margin-bottom: 2px; }
                    </style>

                    <div id="snippet-box" style="position:relative;max-width:760px;width:calc(100% - 40px);height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;">

                        <!-- <p style="color:#141414;">Kod listesi</p> -->
                        <!-- CODE SNIPPETS -->                        
                        
                    </div>
                    
                </div>
                <!-- code list end -->

                <!-- CURSOR DRAGGER
                <div id="coding-cursor-dragger" onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;z-index:999999;top:100px;left:100px;"><img src="../img/coding/cursor-dragger.png" width="40" /></div> -->

`;


Coding.snippetCodingIDListC = [];
Coding.snippetCodingIDList = ["001", "002", "003", "004", "008", "006", "007"];
Coding.snippetCodingHTMLModel = `

<div id="snippet001" class="snippet-item" style="display:none;">
<!--
    <div onmousedown="Coding.snippetItemOnMouseDown('001a');" onclick="Coding.snippetItemOnMouseUp();" style="position:absolute;top:20px;right:calc(30px + 10%);width:10%;height:100px;background-color:;"></div>
    <div onmousedown="Coding.snippetItemOnMouseDown('001b');" onclick="Coding.snippetItemOnMouseUp();" style="position:absolute;top:20px;right:20px;width:10%;height:100px;background-color:;"></div>
    <div id="snippet001a-code" style="display:none;">var degiskenAdi = "metin"
</div>
    <div id="snippet001b-code" style="display:none;">var degiskenAdi = 10
</div>
    <img src="../img/coding/code/001.png" width="100%" />
-->
</div>

<div id="snippet002" class="snippet-item" style="display:none;">
<!--
    <div onmousedown="Coding.snippetItemOnMouseDown('002a');" onclick="Coding.snippetItemOnMouseUp();" style="position:absolute;top:20px;right:calc(30px + 10%);width:10%;height:100px;background-color:;"></div>
    <div onmousedown="Coding.snippetItemOnMouseDown('002b');" onclick="Coding.snippetItemOnMouseUp();" style="position:absolute;top:20px;right:20px;width:10%;height:100px;background-color:;"></div>
    <div id="snippet002a-code" style="display:none;">if (  ) {
    
}</div>
    <div id="snippet002b-code" style="display:none;">if (  ) {
    
} else {
    
}</div>
    <img src="../img/coding/code/002.png" width="100%" />
-->
</div>

<div id="snippet003" class="snippet-item" style="display:none;">
<!--
    <div onmousedown="Coding.snippetItemOnMouseDown('003a');" onclick="Coding.snippetItemOnMouseUp();" style="position:absolute;top:20px;right:calc(30px + 10%);width:10%;height:100px;background-color:;"></div>
    <div onmousedown="Coding.snippetItemOnMouseDown('003b');" onclick="Coding.snippetItemOnMouseUp();" style="position:absolute;top:20px;right:20px;width:10%;height:100px;background-color:;"></div>
    <div id="snippet003a-code" style="display:none;">for (var i = 1; i &lt;= 10; i++) {
    
}</div>
    <div id="snippet003b-code" style="display:none;">for (var i = 1; i &lt;= 10; i++) {
    for (var k = 1; k &lt;= 10; k++) {
        
    }
}</div>
    <img src="../img/coding/code/003.png" width="100%" />
-->
</div>

<div id="snippet004" onmousedown="Coding.snippetItemOnMouseDown('004');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet004-code" style="display:none;">yaz(mesaj)
</div>
    <img src="../img/coding/code/004.png" width="100%" />
</div>

<div id="snippet008" onmousedown="Coding.snippetItemOnMouseDown('008');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet008-code" style="display:none;">bilgiDuzenle(mesaj)
</div>
    <img src="../img/coding/code/008.png" width="100%" />
</div>

<div id="snippet006" onmousedown="Coding.snippetItemOnMouseDown('006');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet006-code" style="display:none;">bekle(milisaniye)
</div>
    <img src="../img/coding/code/006.png" width="100%" />
</div>

<div id="snippet007" onmousedown="Coding.snippetItemOnMouseDown('007');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet007-code" style="display:none;">zarAt(maksimumNumara)
</div>
    <img src="../img/coding/code/007.png" width="100%" />
</div>

`;

Coding.snippetCoding1IDListC = [];
Coding.snippetCoding1IDList = ["110", "108", "111", "112", "109", "101", "103", "102", "104", "106", "105", "107", "113", "114", "115"];
Coding.snippetCoding1HTMLModel = `

<!-- CODING 1 ROBOT -->

<div id="snippet110" onmousedown="Coding.snippetItemOnMouseDown('110');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet110-code" style="display:none;">robot.konum</div>
    <img src="../img/coding1/code/110.png" width="100%" />
</div>

<div id="snippet108" onmousedown="Coding.snippetItemOnMouseDown('108');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet108-code" style="display:none;">robot.yon</div>
    <img src="../img/coding1/code/108.png" width="100%" />
</div>

<div id="snippet111" onmousedown="Coding.snippetItemOnMouseDown('111');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet111-code" style="display:none;">robot.enerji</div>
    <img src="../img/coding1/code/111.png" width="100%" />
</div>

<div id="snippet113" onmousedown="Coding.snippetItemOnMouseDown('113');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet113-code" style="display:none;">zemin.ilkKonum</div>
    <img src="../img/coding1/code/113.png" width="100%" />
</div>

<div id="snippet109" onmousedown="Coding.snippetItemOnMouseDown('109');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet109-code" style="display:none;">zemin.sonKonum</div>
    <img src="../img/coding1/code/109.png" width="100%" />
</div>

<div id="snippet114" onmousedown="Coding.snippetItemOnMouseDown('114');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet114-code" style="display:none;">robot.anahtar</div>
    <img src="../img/coding1/code/114.png" width="100%" />
</div>

<div id="snippet101" onmousedown="Coding.snippetItemOnMouseDown('101');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet101-code" style="display:none;">robot.ilerle()
</div>
    <img src="../img/coding1/code/101.png" width="100%" />
</div>

<div id="snippet103" onmousedown="Coding.snippetItemOnMouseDown('103');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet103-code" style="display:none;">robot.geriDon()
</div>
    <img src="../img/coding1/code/103.png" width="100%" />
</div>

<div id="snippet102" onmousedown="Coding.snippetItemOnMouseDown('102');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet102-code" style="display:none;">robot.anahtarAl()
</div>
    <img src="../img/coding1/code/102.png" width="100%" />
</div>

<div id="snippet104" onmousedown="Coding.snippetItemOnMouseDown('104');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet104-code" style="display:none;">robot.anahtarKullan()
</div>
    <img src="../img/coding1/code/104.png" width="100%" />
</div>

<div id="snippet115" onmousedown="Coding.snippetItemOnMouseDown('115');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet115-code" style="display:none;">robot.enerjiAl()
</div>
    <img src="../img/coding1/code/115.png" width="100%" />
</div>

<div id="snippet106" onmousedown="Coding.snippetItemOnMouseDown('106');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet106-code" style="display:none;">anahtarAra(konum)</div>
    <img src="../img/coding1/code/106.png" width="100%" />
</div>

<div id="snippet105" onmousedown="Coding.snippetItemOnMouseDown('105');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet105-code" style="display:none;">enerjiAra(konum)</div>
    <img src="../img/coding1/code/105.png" width="100%" />
</div>

<div id="snippet107" onmousedown="Coding.snippetItemOnMouseDown('107');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet107-code" style="display:none;">kilitAra(konum)</div>
    <img src="../img/coding1/code/107.png" width="100%" />
</div>

<div id="snippet112" onmousedown="Coding.snippetItemOnMouseDown('112');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet112-code" style="display:none;">robot.bilgiDuzenle(mesaj)
</div>
    <img src="../img/coding1/code/112.png" width="100%" />
</div>

`;

Coding.snippetCoding2IDListC = [];
Coding.snippetCoding2IDList = ["201","202","203","204","205","206"];
Coding.snippetCoding2HTMLModel = `

<!-- CODING 2 - KARE BOYAMA -->

<div id="snippet202" onmousedown="Coding.snippetItemOnMouseDown('202');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet202-code" style="display:none;">kareBoya(x, y)
</div>
    <img src="../img/coding2/code/202-kare-boya.png" width="100%" />
</div>

<div id="snippet203" onmousedown="Coding.snippetItemOnMouseDown('203');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet203-code" style="display:none;">kareBoya(x, y, renk)
</div>
    <img src="../img/coding2/code/203-kare-boya-renk.png" width="100%" />
</div>

<div id="snippet204" onmousedown="Coding.snippetItemOnMouseDown('204');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet204-code" style="display:none;">kareTemizle(x, y)
</div>
    <img src="../img/coding2/code/204-kare-temizle.png" width="100%" />
</div>

<div id="snippet205" onmousedown="Coding.snippetItemOnMouseDown('205');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet205-code" style="display:none;">tumKareleriTemizle()
</div>
    <img src="../img/coding2/code/205-tum-kareleri-temizle.png" width="100%" />
</div>

<div id="snippet206" onmousedown="Coding.snippetItemOnMouseDown('206');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item" style="display:none;">
    <div id="snippet206-code" style="display:none;">kareNeRenk(x, y)</div>
    <img src="../img/coding2/code/206-kare-ne-renk.png" width="100%" />
</div>

<div id="snippet201" class="snippet-item" style="display:none;">
    <img src="../img/coding2/code/201-color-table.png" width="100%" />
</div>

<!-- CODING 2 - KARE BOYAMA END -->

`;

Coding.snippetItemOnMouseDown = function($codeID){
    
    var _code = document.getElementById("snippet"+$codeID+"-code").innerHTML;
  
    Coding.insertAtCursor(_code);
    Coding.closeSnippetWindow();
    
};

Coding.snippetItemOnMouseUp = function(){
    
    Coding.focusEditor();
    
};
/*
Coding.showSnippetsInList = function($idList){
    
}*/

Coding.setSnippetDisplay = function($snippetIDList){

    if($snippetIDList != undefined){
        
        for(var i=0;i<$snippetIDList.length;i++){
            document.getElementById("snippet"+$snippetIDList[i]).style.display = "block";
        }
        
    }
    
}

Coding.openSnippetWindow = function(){
    
    //Coding.miniKeyboardBtnPressed = 1;
    
    //alert-coding-add-btn
    storage.setItem("alert-coding-add-btn", "1");
    document.getElementById("coding-add-btn-alert").style.display = "none";
    
    document.body.style.overflowY = "hidden";
    
    document.getElementById("snippet-box").innerHTML = Coding.snippetCodingHTMLModel + Coding.snippetCoding1HTMLModel + Coding.snippetCoding2HTMLModel;
    
    Coding.setSnippetDisplay(Coding.getSnippetIDList());
    //Coding.setSnippetDisplay(Coding.snippetCodingIDList.concat(Coding.snippetCoding1IDList, Coding.snippetCoding2IDList));
    
    //Coding.showSnippetsInList();
    
    document.getElementById("keyboard-code-list").style.display = "block";
    
    //Coding.focusEditor();
    
};

Coding.closeSnippetWindow = function(){
    
    //Coding.miniKeyboardBtnPressed = 1;
    
    document.body.style.overflowY = "scroll";
    
    document.getElementById("keyboard-code-list").style.display = "none";
    
    document.getElementById("snippet-box").innerHTML = "";
    
    Coding.focusEditor();
    
};