//keyboard html model
// Coding.miniKeyBoardHTMLModel = App.generate_miniKeyBoardHTMLModel();
/*
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

                    </style>

                    <!-- old code <div id="snippet-box" style="position:relative;max-width:760px;width:calc(100% - 40px);height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;"> -->

                    <div id="snippet-box" style="position:relative;width:560px;height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;">

                        <!-- <p style="color:#141414;">Kod listesi</p> -->
                        <!-- CODE SNIPPETS -->                        
                        
                    </div>
                    
                </div>
                <!-- code list end -->

                <!-- CURSOR DRAGGER
                <div id="coding-cursor-dragger" onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;z-index:999999;top:100px;left:100px;"><img src="../img/coding/cursor-dragger.png" width="40" /></div> -->

`;
*/

//Bu örnek olarak değişkene aktarılmıştır. Uygulama içinde kullanılmıyor.
Coding.snippetItemModel = `<div id="snippet004" class="snippet-item" style="display:none;">
                
                <div id="snippet004-code" style="display:none;">yaz(mesaj)
            </div>
                <div class="snippet-box yellow">
                    <div onmousedown="otherAlert();" onclick="otherAlert();" class="snippet-item-main-btn"></div>
                    <div class="snippet-item-title">yaz(mesaj)</div>
                    <div style="display:block;">
                        <div onclick="extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
                    </div>
                    <div style="display:none;">
                        <div class="snippet-item-desc">ekranda bilgi gösterilmesini sağlayan fonksiyon.</div>
                        <div class="snippet-item-code">yaz("merhaba dünya")<br />
                        &emsp;yaz("merhaba dünya")</div>
                        <div onclick="extendSnippetItem(this, 0);" class="snippet-item-extend-upbtn"></div>
                    </div>
                </div>
                
            </div>
`;

Coding.extendSnippetItem = function($itemElement ,$extend) {
           
            //test
           if($extend){
               $itemElement.parentNode.style.display = "none";
               $itemElement.parentNode.nextElementSibling.style.display = "block";
           }else{
               $itemElement.parentNode.style.display = "none";
               $itemElement.parentNode.previousElementSibling.style.display = "block";
           }
        }

/*
Coding.createDefaultItem = function($id, $title, $desc, $code, $sample) {
    
}

Coding.snippetCodingCodeList = [{ID:'001', Type:'none'},
                                {ID:'004', Type:'default', Title:'yaz(mesaj)', Desc:'ekranda bilgi gösterilmesini sağlayan fonksiyon.', Sample:'yaz("merhaba dünya")'},
                               {ID:'008', Type:'default', Title:'yaz'}];
*/

Coding.snippetCodingIDListC = [];
Coding.snippetCodingIDListBasic = ["110", "108", "111", "113", "109", "114", "101", "103", "102", "104", "115", "106", "105", "107", "112", "120", "121", "125", "122", "123", "124", "125", "126", "127", "128", "129"];
Coding.snippetCodingIDList = ["110", "108", "111", "113", "109", "114", "101", "103", "102", "104", "115", "106", "105", "107", "112", "120", "121", "125", "122", "123", "124", "125", "126", "127", "128", "129"];
Coding.snippetCodingHTMLModel = `

<div id="snippet110" class="snippet-item" style="display:none;">   
    <div id="snippet110-code" style="display:none;">print(mesaj)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('110');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">print(mesaj)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Ekranda veya konsolda bilgi gösterilmesini sağlar.</div>
            <div class="snippet-item-code">// Ekrana, bir yazı yazdır.<br>print("Merhaba Dünya")</div>
        </div>
    </div>
</div>

<div id="snippet108" class="snippet-item" style="display:none;">   
    <div id="snippet108-code" style="display:none;">random(ilkSayi, ikinciSayi)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('108');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">random(ilkSayi, ikinciSayi) Cevap: Rasgele sayı</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Verilen aralıkta, rasgele bir tam sayı üretir.</div>
            <div class="snippet-item-code">// 0 ile 6 arası, rasgele bir sayı üret ve değişkene aktar.<br />
                        var rasgeleSayi = random(0, 6)
                        </div>
        </div>
    </div>
</div>

<div id="snippet111" class="snippet-item" style="display:none;">   
    <div id="snippet111-code" style="display:none;">page.color</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('111');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">page.color</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Sayfanın, arka plan rengi.</div>
            <div class="snippet-item-code">// Arka plan rengini portakal kırmızısı olarak değiştir.<br>
            page.color = "orangered"</div>
        </div>
    </div>
</div>

<div id="snippet113" class="snippet-item" style="display:none;">   
    <div id="snippet113-code" style="display:none;">createLabel()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('113');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">createLabel() Cevap: Etiket nesnesi</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Yeni bir etiket nesnesi oluşturur.</div>
            <div class="snippet-item-code">// Etiket nesnesi oluştur ve değişkene aktar.<br />
                        var etiket1 = createLabel()</div>
        </div>
    </div>
</div>

<div id="snippet109" class="snippet-item" style="display:none;">   
    <div id="snippet109-code" style="display:none;">createTextBox()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('109');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">createTextBox() Cevap: Metin kutusu nesnesi</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Yeni bir metin kutusu nesnesi oluşturur.</div>
            <div class="snippet-item-code">// Metin kutusu nesnesi oluştur ve değişkene aktar.<br />
                        var metinKutusu1 = createTextBox()</div>
        </div>
    </div>
</div>

<div id="snippet114" class="snippet-item" style="display:none;">   
    <div id="snippet114-code" style="display:none;">createButton()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('114');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">createButton() Cevap: Düğme nesnesi</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Yeni bir düğme nesnesi oluşturur.</div>
            <div class="snippet-item-code">// Düğme nesnesi oluştur ve değişkene aktar.<br />
                        var dugme1 = createButton()</div>
        </div>
    </div>
</div>

<div id="snippet101" class="snippet-item" style="display:none;">   
    <div id="snippet101-code" style="display:none;">createImage()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('101');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">createImage() Cevap: Resim nesnesi</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Yeni bir resim nesnesi oluşturur.</div>
            <div class="snippet-item-code">// Resim nesnesi oluştur ve değişkene aktar.<br />
                        var resim1 = createImage()</div>
        </div>
    </div>
</div>

<div id="snippet103" class="snippet-item" style="display:none;">   
    <div id="snippet103-code" style="display:none;">createBox()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('103');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">createBox() Cevap: Kutu nesnesi</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Yeni bir kutu nesnesi oluşturur.</div>
            <div class="snippet-item-code">// Kutu nesnesi oluştur ve değişkene aktar.<br />
                        var kutu1 = createBox()</div>
        </div>
    </div>
</div>

<div id="snippet102" class="snippet-item" style="display:none;">   
    <div id="snippet102-code" style="display:none;">.left</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('102');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.left</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, sola olan mesafesi.</div>
            <div class="snippet-item-code">// Mesafeyi 20px (piksel) olarak belirle.<br />
                        that.left = 20<br><br>
                        // Nesneyi yatay olarak, ortaya konumlandır.<br />
                        that.left = (page.width - that.width) / 2</div>
        </div>
    </div>
</div>

<div id="snippet104" class="snippet-item" style="display:none;">   
    <div id="snippet104-code" style="display:none;">.top</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('104');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.top</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, yukarıya olan mesafesi.</div>
            <div class="snippet-item-code">// mesafeyi 20px (piksel) olarak belirle.<br />
                        that.top = 20</div>
        </div>
    </div>
</div>

<div id="snippet115" class="snippet-item" style="display:none;">   
    <div id="snippet115-code" style="display:none;">.width</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('115');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.width</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin genişliği.</div>
            <div class="snippet-item-code">// Genişliği 200px (piksel) olarak belirle.<br />
                        that.width = 200<br><br>
                        // Genişliği 20px (piksel) azalt.<br />
                        that.rotate -= 20</div>
        </div>
    </div>
</div>

<div id="snippet106" class="snippet-item" style="display:none;">   
    <div id="snippet106-code" style="display:none;">.height</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('106');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.height</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin yüksekliği.</div>
            <div class="snippet-item-code">// Yüksekliği 50px (piksel) olarak belirle.<br />
                        that.width = 50</div>
        </div>
    </div>
</div>

<div id="snippet105" class="snippet-item" style="display:none;">   
    <div id="snippet105-code" style="display:none;">.color</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('105');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.color</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, arka plan rengi.</div>
            <div class="snippet-item-code">// Rengi, deniz yeşili olarak belirle.<br />
                        that.color = "seagreen"<br><br>
                        // Nesneyi, şeffaf olarak boya.<br />
                        that.color = "transparent"</div>
        </div>
    </div>
</div>

<div id="snippet107" class="snippet-item" style="display:none;">   
    <div id="snippet107-code" style="display:none;">.text</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('107');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.text</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, görünen metni.</div>
            <div class="snippet-item-code">// Metni düzenle.<br />
                        that.text = "Yeni Metin"<br><br>
                        // Metin boş olarak belirle.<br />
                        that.text = ""</div>
        </div>
    </div>
</div>

<div id="snippet112" class="snippet-item" style="display:none;">   
    <div id="snippet112-code" style="display:none;">.textColor</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('112');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.textColor</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Görünen metnin rengi.</div>
            <div class="snippet-item-code">// Rengi, beyaz olarak belirle.<br />
                        that.textColor = "white"</div>
        </div>
    </div>
</div>
    
<div id="snippet120" class="snippet-item" style="display:none;">   
    <div id="snippet120-code" style="display:none;">.fontSize</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('120');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.fontSize</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Görünen metnin, yazı boyutu.</div>
            <div class="snippet-item-code">// Yazı boyutunu 25px (piksel) olarak belirle.<br />
                        that.fontSize = 25</div>
        </div>
    </div>
</div>
    
<div id="snippet121" class="snippet-item" style="display:none;">   
    <div id="snippet121-code" style="display:none;">.border</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('121');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.border</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, kenarlık kalınlığı.</div>
            <div class="snippet-item-code">// Kenarlık kalınlığını 3px (piksel) olarak belirle.<br />
                        that.border = 3<br><br>
                        // Kenarlık olmasın.<br />
                        that.border = 0</div>
        </div>
    </div>
</div>
    
<div id="snippet125" class="snippet-item" style="display:none;">   
    <div id="snippet125-code" style="display:none;">.borderColor</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('125');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.borderColor</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, kenarlık rengi.</div>
            <div class="snippet-item-code">// Kenarlık rengini, çelik mavisi olarak belirle.<br />
                        that.borderColor = "steelblue"</div>
        </div>
    </div>
</div>
    
<div id="snippet122" class="snippet-item" style="display:none;">   
    <div id="snippet122-code" style="display:none;">.round</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('122');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.round</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, köşelerinin yuvarlaklığı.</div>
            <div class="snippet-item-code">// Köşeleri 8px (piksel) kadar yuvarlat.<br />
                        that.round = 8<br><br>
                        // Köşeler düz olsun.<br />
                        that.round = 0</div>
        </div>
    </div>
</div>
    
<div id="snippet123" class="snippet-item" style="display:none;">   
    <div id="snippet123-code" style="display:none;">.rotate</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('123');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.rotate</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin açısı.</div>
            <div class="snippet-item-code">// Açıyı, 90 derece olarak belirle.<br />
                        that.rotate = 90<br><br>
                        // Açıyı, 10 derece arttır.<br />
                        that.rotate += 10</div>
        </div>
    </div>
</div>
    
<div id="snippet124" class="snippet-item" style="display:none;">   
    <div id="snippet124-code" style="display:none;">.visible</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('124');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.visible</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin görünürlüğü.</div>
            <div class="snippet-item-code">// Nesneyi göster.<br />
                        that.visible = 1<br><br>
                        // Nesneyi gizle.<br />
                        that.visible = 0</div>
        </div>
    </div>
</div>

<div id="snippet125" class="snippet-item" style="display:none;">   
    <!--
    <div id="snippet125-code" style="display:none;">.opacity</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('125');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.opacity</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesnenin, şeffaf olmayışı.</div>
            <div class="snippet-item-code">// %50 şeffaflaştır.<br />
                        that.opacity = 0.5<br><br>
                        // Görünür (Şeffaf değil).<br />
                        that.opacity = 1.0<br><br>
                        // Görünmez (Tamamen şeffaf).<br />
                        that.opacity = 0.0</div>
        </div>
    </div>
    -->
</div>

<div id="snippet129" class="snippet-item" style="display:none;">   
    <div id="snippet129-code" style="display:none;">.load(dosya)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('129');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.load(dosya)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Bir resim dosyasını, resim nesnesinin içine yükler.</div>
            <div class="snippet-item-code">// resimler klasöründeki, resim1.png dosyasını yükle.<br />
                        that.load("resimler/resim1.png")</div>
        </div>
    </div>
</div>
    
<div id="snippet126" class="snippet-item" style="display:none;">   
    <div id="snippet126-code" style="display:none;">.onClick(fonksiyon)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('126');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.onClick(fonksiyon)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Nesneye basıldığında, çalışacak fonksiyonu belirler.</div>
            <div class="snippet-item-code">// Basıldığında, dugmeyeBasildi() fonksiyonu çalışsın.<br />
                        that.onClick(dugmeyeBasildi)</div>
        </div>
    </div>
</div>

<div id="snippet128" class="snippet-item" style="display:none;">   
    <div id="snippet128-code" style="display:none;">.onChange(fonksiyon)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('128');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">.onChange(fonksiyon)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Metin kutusu nesnesinin, içeriği değiştiğinde çalışacak fonksiyonu belirler.</div>
            <div class="snippet-item-code">// İçerik değiştiğinde, icerikDegisti() fonksiyonu çalışsın.<br />
                        that.onChange(icerikDegisti)</div>
        </div>
    </div>
</div>
    
    
<div id="snippet127" class="snippet-item" style="display:none;">   
    <div id="snippet127-code" style="display:none;">setLoopTimer(milisaniye)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('127');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">setLoopTimer(milisaniye)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">loop() fonksiyonunun, çalışma aralığını belirler.</div>
            <div class="snippet-item-code">// Her saniyede bir tekar çalışsın. (1000ms)<br />
                        setLoopTimer(1000)</div>
        </div>
    </div>
</div>

`;

Coding.snippetItemOnMouseDown = function($codeID) {
    
    var _code = document.getElementById("snippet"+$codeID+"-code").innerHTML;
  
    Coding.insertAtCursor(_code);
    Coding.closeSnippetWindow();
    
};

Coding.snippetItemOnMouseUp = function() {
    
    Coding.focusEditor();
    
};
/*
Coding.showSnippetsInList = function($idList){
    
}*/

Coding.setSnippetDisplay = function($snippetIDList) {

    if($snippetIDList != undefined){
        
        for(var i=0;i<$snippetIDList.length;i++){
            document.getElementById("snippet"+$snippetIDList[i]).style.display = "block";
        }
        
        //eğer cod listesi 7 den küçük ise; kodların açıklamalarını da göster.
        if($snippetIDList.length <= 6) {
            var codeList = document.getElementsByClassName("snippet-item-extend-downbtn");
            for(var i = 0; i < codeList.length; i++) {
                Coding.extendSnippetItem(codeList[i], 1);
            }
        }
        
    }
    
}

Coding.openSnippetWindow = function() {
    
    //Coding.miniKeyboardBtnPressed = 1;
    
    //alert-coding-add-btn
    storage.setItem("alert-coding-add-btn", "1");
    document.getElementById("coding-add-btn-alert").style.display = "none";
    
    document.body.style.overflowY = "hidden";
    
    document.getElementById("snippet-box").innerHTML = Coding.snippetCodingHTMLModel;
    
    Coding.setSnippetDisplay(Coding.getSnippetIDList());
    //Coding.setSnippetDisplay(Coding.snippetCodingIDList.concat(Coding.snippetCoding1IDList, Coding.snippetCoding2IDList));
    
    //Coding.showSnippetsInList();
    
    document.getElementById("keyboard-code-list").style.display = "block";
    
    //Coding.focusEditor();
    
};

Coding.closeSnippetWindow = function() {
    
    //Coding.miniKeyboardBtnPressed = 1;
    
    document.body.style.overflowY = "scroll";
    
    document.getElementById("keyboard-code-list").style.display = "none";
    
    document.getElementById("snippet-box").innerHTML = "";
    
    Coding.focusEditor();
    
};