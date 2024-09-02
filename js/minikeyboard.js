//keyboard html model
// Coding.miniKeyBoardHTMLModel = App.generate_miniKeyBoardHTMLModel();

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

Coding.snippetCodingIDListC = []; //control komutları listesi olabilir.
Coding.snippetCodingIDList = ["001", "002", "003", "004", "008", "006", "007"]; //normal kullanılan komut listesi
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

<div id="snippet004" class="snippet-item" style="display:none;">   
    <div id="snippet004-code" style="display:none;">yaz(mesaj)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('004');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">yaz(mesaj)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">ekranda bilgi gösterilmesini sağlayan fonksiyon.</div>
            <div class="snippet-item-code">yaz("merhaba dünya")</div>
        </div>
    </div>
</div>

<div id="snippet008" class="snippet-item" style="display:none;">   
    <div id="snippet008-code" style="display:none;">bilgiDuzenle(mesaj)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('008');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">bilgiDuzenle(mesaj)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">ekranın sağ üst köşesindeki bilgi alanını düzenleyen fonksiyon.</div>
            <div class="snippet-item-code">bilgiDuzenle("Anahtar: 2")</div>
        </div>
    </div>
</div>

<div id="snippet006" class="snippet-item" style="display:none;">   
    <div id="snippet006-code" style="display:none;">bekle(milisaniye)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('006');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">bekle(milisaniye)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">kod akışını belli bir süre duraklatan fonksiyon.</div>
            <!-- <div class="snippet-item-code">bilgiDuzenle("Anahtar: 2")</div> -->
        </div>
    </div>
</div>

<div id="snippet007" class="snippet-item" style="display:none;">   
    <div id="snippet007-code" style="display:none;">zarAt(maksimumNumara)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('007');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">zarAt(maksimumNumara) cevap:rasgele bir numara</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">bir ile verilen parametre arasında rasgele bir numarayı cevap veren fonksiyon.</div>
            <!-- <div class="snippet-item-code">bilgiDuzenle("Anahtar: 2")</div> -->
        </div>
    </div>
</div>

<div id="snippet010" class="snippet-item" style="display:none;">   
    <div id="snippet010-code" style="display:none;">print(mesaj)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('010');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">print(mesaj)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Ekranda veya konsolda bilgi gösterilmesini sağlar.</div>
            <div class="snippet-item-code">print("Merhaba Dünya")</div>
        </div>
    </div>
</div>

<div id="snippet011" class="snippet-item" style="display:none;">   
    <div id="snippet011-code" style="display:none;">num(metin)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('011');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">num(metin)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Metin tipindeki bilgiyi, sayı tipine çevirir.</div>
            <!-- <div class="snippet-item-code">num("5")</div> -->
        </div>
    </div>
</div>

<div id="snippet012" class="snippet-item" style="display:none;">   
    <div id="snippet012-code" style="display:none;">str(sayi)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('012');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">str(sayi)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">Sayı tipindeki bilgiyi, metin tipine çevirir.</div>
            <!-- <div class="snippet-item-code">num("5")</div> -->
        </div>
    </div>
</div>

<div id="snippet013" class="snippet-item" style="display:none;">   
    <div id="snippet013-code" style="display:none;">random(sayi1, sayi2)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('013');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">random(sayi1, sayi2)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">İki sayı arasında, rasgele bir sayı üretir.</div>
            <div class="snippet-item-code">random(0, 8)</div>
        </div>
    </div>
</div>

`;

Coding.snippetCoding1IDListC = [];
Coding.snippetCoding1IDList = ["110", "108", "111", "112", "109", "101", "103", "102", "104", "106", "105", "107", "113", "114", "115"];
Coding.snippetCoding1HTMLModel = `

<!-- CODING 1 ROBOT -->

<div id="snippet110" class="snippet-item" style="display:none;">   
    <div id="snippet110-code" style="display:none;">robot.konum</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('110');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.konum</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, zemin üzerindeki konumunu taşıyan değişken.</div>
            <div class="snippet-item-code">if (robot.konum == 1) {<br />
                        &emsp;//robot yolun başında<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet108" class="snippet-item" style="display:none;">   
    <div id="snippet108-code" style="display:none;">robot.yon</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('108');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.yon</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun yönünü taşıyan değişken. içeriği; "sağ" veya "sol" olabilir.</div>
            <div class="snippet-item-code">if (robot.yon == "sağ") {<br />
                        &emsp;//robotun yönü sağa doğru bakıyor<br />
                        } else if (robot.yon == "sol") {<br />
                        &emsp;//robotun yönü sola doğru bakıyor<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet111" class="snippet-item" style="display:none;">   
    <div id="snippet111-code" style="display:none;">robot.enerji</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('111');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.enerji</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, mevcut enerjisini yüzde olarak taşıyan değişken.</div>
            <div class="snippet-item-code">if (robot.enerji < 50) {<br />
                        &emsp;//robotun enerjisi %50 den az<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet113" class="snippet-item" style="display:none;">   
    <div id="snippet113-code" style="display:none;">zemin.ilkKonum</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('113');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">zemin.ilkKonum</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">zeminin ilk konumunu taşıyan değişken. içeriği; 1'dir.</div>
            <div class="snippet-item-code">if (robot.konum == zemin.ilkKonum) {<br />
                        &emsp;//robot yolun başında<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet109" class="snippet-item" style="display:none;">   
    <div id="snippet109-code" style="display:none;">zemin.sonKonum</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('109');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">zemin.sonKonum</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">zeminin uzunluğunu taşıyan değişken.</div>
            <div class="snippet-item-code">if (robot.konum == zemin.sonKonum) {<br />
                        &emsp;//robot yolun sonunda<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet114" class="snippet-item" style="display:none;">   
    <div id="snippet114-code" style="display:none;">robot.anahtar</div>
    <div class="snippet-box grey">
        <div onmousedown="Coding.snippetItemOnMouseDown('114');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.anahtar</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun taşıdığı anahtar sayısını taşıyan değişken.</div>
            <div class="snippet-item-code">if (robot.anahtar > 0) {<br />
                        &emsp;//robotun anahtarı var<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet101" class="snippet-item" style="display:none;">   
    <div id="snippet101-code" style="display:none;">robot.ilerle()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('101');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.ilerle()</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, zemin üzerinde bir birim ilerlemesini sağlayan fonksiyon.</div>
        </div>
    </div>
</div>

<div id="snippet103" class="snippet-item" style="display:none;">   
    <div id="snippet103-code" style="display:none;">robot.geriDon()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('103');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.geriDon()</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, diğer yöne (sağa veya sola) doğru bakmasını sağlayan fonksiyon.</div>
        </div>
    </div>
</div>

<div id="snippet102" class="snippet-item" style="display:none;">   
    <div id="snippet102-code" style="display:none;">robot.anahtarAl()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('102');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.anahtarAl()</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, bulunduğu konumdaki anahtarı almasını sağlayan fonksiyon.</div>
            <div class="snippet-item-code">//eğer robotun konumunda anahtar var ise<br />
                        if (anahtarAra(robot.konum) == 1) {<br />
                        &emsp;robot.anahtarAl()<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet104" class="snippet-item" style="display:none;">   
    <div id="snippet104-code" style="display:none;">robot.anahtarKullan()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('104');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.anahtarKullan()</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, önünde kilitli bir alan var ise, anahtarı kullanarak orayı açmayı  sağlayan fonksiyon.</div>
        </div>
    </div>
</div>

<div id="snippet115" class="snippet-item" style="display:none;">   
    <div id="snippet115-code" style="display:none;">robot.enerjiAl()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('115');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.enerjiAl()</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun, bulunduğu konumdaki enerjiyi almasını sağlayan fonksiyon.</div>
            <div class="snippet-item-code">//eğer robotun konumunda enerji var ise<br />
                        if (enerjiAra(robot.konum) == 1) {<br />
                        &emsp;robot.enerjiAl()<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet106" class="snippet-item" style="display:none;">   
    <div id="snippet106-code" style="display:none;">anahtarAra(konum)</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('106');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">anahtarAra(konum)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">verilen konumda anahtar var ise 1, yok ise 0 cevabını veren fonksiyon.</div>
            <div class="snippet-item-code">if (anahtarAra(robot.konum) == 1) {<br />
                        &emsp;//robotun bulunduğu konumda anahtar var.<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet105" class="snippet-item" style="display:none;">   
    <div id="snippet105-code" style="display:none;">enerjiAra(konum)</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('105');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">enerjiAra(konum)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">verilen konumda enerji var ise 1, yok ise 0 cevabını veren fonksiyon.</div>
            <div class="snippet-item-code">if (enerjiAra(robot.konum) == 1) {<br />
                        &emsp;//robotun bulunduğu konumda enerji var.<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet107" class="snippet-item" style="display:none;">   
    <div id="snippet107-code" style="display:none;">kilitAra(konum)</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('107');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">kilitAra(konum)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">verilen konumda kilitli alan var ise 1, yok ise 0 cevabını veren fonksiyon.</div>
            <div class="snippet-item-code">if (kilitAra(konum) == 1) {<br />
                        &emsp;//verilen konumda kilitli alan var.<br />
                        }</div>
        </div>
    </div>
</div>

<div id="snippet112" class="snippet-item" style="display:none;">   
    <div id="snippet112-code" style="display:none;">robot.bilgiDuzenle(mesaj)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('112');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">robot.bilgiDuzenle(mesaj)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">robotun üzerindeki küçük bilgi kutusunu düzenleyen fonksiyon.</div>
            <div class="snippet-item-code">robot.bilgiDuzenle("robot")</div>
        </div>
    </div>
</div>

`;

Coding.snippetCoding2IDListC = [];
Coding.snippetCoding2IDList = ["201","202","203","204","205","206"];
Coding.snippetCoding2HTMLModel = `

<!-- CODING 2 - KARE BOYAMA -->

<div id="snippet202" class="snippet-item" style="display:none;">   
    <div id="snippet202-code" style="display:none;">kareBoya(x, y)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('202');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">kareBoya(x, y)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">koordinatları verilen kareyi siyah renk ile boyayan fonksiyon.</div>
            <!-- <div class="snippet-item-code">bilgiDuzenle("Anahtar: 2")</div> -->
        </div>
    </div>
</div>

<div id="snippet203" class="snippet-item" style="display:none;">   
    <div id="snippet203-code" style="display:none;">kareBoya(x, y, renk)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('203');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">kareBoya(x, y, renk)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">koordinatları verilen kareyi, verilen renk ile boyayan fonksiyon.<br />(kullanılabilen renkler için renk tablosuna bakınız.)</div>
            <div class="snippet-item-code">kareBoya(3, 3, "kırmızı")<!--<br /><br />//veya renk numarası ile<br />kareBoya(3, 3, 2)--></div>
        </div>
    </div>
</div>

<div id="snippet204" class="snippet-item" style="display:none;">   
    <div id="snippet204-code" style="display:none;">kareTemizle(x, y)
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('204');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">kareTemizle(x, y)</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">koordinatları verilen kareyi beyaz renk ile boyayan, temizleyen fonksiyon.</div>
            <!-- <div class="snippet-item-code">kareBoya(3, 3, "kırmızı")</div> -->
        </div>
    </div>
</div>

<div id="snippet205" class="snippet-item" style="display:none;">   
    <div id="snippet205-code" style="display:none;">tumKareleriTemizle()
</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('205');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">tumKareleriTemizle()</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">alandaki tüm kareleri beyaz renk ile boyayan, temizleyen fonksiyon.</div>
            <!-- <div class="snippet-item-code">kareBoya(3, 3, "kırmızı")</div> -->
        </div>
    </div>
</div>

<div id="snippet206" class="snippet-item" style="display:none;">   
    <div id="snippet206-code" style="display:none;">kareNeRenk(x, y)</div>
    <div class="snippet-box yellow">
        <div onmousedown="Coding.snippetItemOnMouseDown('206');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">kareNeRenk(x, y) cevap: renk ismi</div>
        <div style="display:block;">
            <div onclick="Coding.extendSnippetItem(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">koordinatları verilen karenin, boyalı olduğu renk ismini cevap veren fonksiyon. (renk ismi: "yeşil", "mavi", "mor", "pembe" vb.)</div>
            <div class="snippet-item-code">if (kareNeRenk(2, 3) == "kırmızı") {<br />
            &emsp;//koordinatları x: 2, y: 3 olan kare kırmızı renkte.<br />
}</div>
        </div>
    </div>
</div>

<div id="snippet201" class="snippet-item" style="display:none;">
    <img src="../img/coding2/code/201-color-table.webp" width="100%" />
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
        
        //eğer cod listesi 7 den küçük ise; kodların açıklamalarını da göster.
        if($snippetIDList.length <= 6) {
            var codeList = document.getElementsByClassName("snippet-item-extend-downbtn");
            for(var i = 0; i < codeList.length; i++) {
                Coding.extendSnippetItem(codeList[i], 1);
            }
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

Coding.closeSnippetWindow = function() {
    
    //Coding.miniKeyboardBtnPressed = 1;
    
    document.body.style.overflowY = "scroll";
    
    document.getElementById("keyboard-code-list").style.display = "none";
    
    document.getElementById("snippet-box").innerHTML = "";
    
    Coding.focusEditor();
    
};