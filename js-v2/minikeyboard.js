const miniKeyboard = {};

// app.os 
// app.CONTENT_WIDTH
miniKeyboard.me;
miniKeyboard.keyList = [
    "tab", "(", ")", '"', ",", "{", "}", ".", "=", "+", "-", "*", "/", ">", "<", ";", "[", "]", "%", "?", "'", ":"
];

miniKeyboard.create = function() {

    // BOX: Taşıyıcı kutu
    var object = cbox(0, 0, (app.CONTENT_WIDTH), 120);
    that.bottom = 0;
    that.color = "transparent";
    that.center("left");

    // BOX: Harf butonlarının taşıyıcı yatak kaydırmalı kutusu.
    object.keyboard = cbox(0, 0, object.width, 60);
    that.bottom = 0;
    that.color = "#141414";
    that.scrollX = 1;
    that.element.style.whiteSpace = "nowrap";
    that.space = 0;
    // that.round = 4;

    // Karakter butonlarını oluştur.
    for (var i = 0; i < miniKeyboard.keyList.length; i++) {

        // LABEL: Her bir harf butonu
        const key = miniKeyboard.keyList[i];
        object.keyboard["lblbtnKey" + i] = clbl(0, 0, "auto", "auto");
        that.text = key;
        //that.color = "#141414";
        that.color = "transparent";
        that.textColor = "white";
        that.fontSize = 29;
        that.minimal = 1;
        that.spaceY = 10;
        that.spaceX = 10;
        
        that.clickable = 1;
        // that.element.classList.add("motion-zoomOnMouseOver-forKeyboard");
        that.element.style.position = "relative";
        that.element.style.display = "inline-block";
        that.element.style.marginRight = "4px";
        that.onClick(miniKeyboard.onKeyClick);

        if (i == 0) {
            that.element.style.marginLeft = "20px";
        }

        if (i == (miniKeyboard.keyList.length - 1)) {
            that.element.style.marginRight = "20px";
        }

    }

    // IMAGE: Ekleme ve imleç kaydırma butonlarının arka plan resmi
    object.imgBack = cimg(0, 0, object.width, 30);
    that.load("../img/coding/keyboard-background.png");
    that.bottom = object.keyboard.height - 2;

    object.imgbtnCodeList = cimg(0, 0, 60, 60);
    that.load("../img/coding/coding-add-btn.png");
    that.center("left");
    that.bottom = object.imgBack.bottom;
    that.onClick(usableCodesDialog.create);

    object.imgbtnRight = cimg(0, 0, 50, 50);
    that.load("../img/coding/coding-moveright-btn.png");
    that.center("left");
    that.left += 60;
    that.bottom = object.imgbtnCodeList.bottom;

    object.imgbtnLeft = cimg(0, 0, 50, 50);
    that.load("../img/coding/coding-moveleft-btn.png");
    that.center("left");
    that.left -= 60;
    that.bottom = object.imgbtnCodeList.bottom;

    // alert for first time.
    // "../img/coding/coding-add-btn-alert.png"

    makeBasicObject(object);

    miniKeyboard.me = object;

}

miniKeyboard.onKeyClick = function() {

}

miniKeyboard.insertChar = function() {

}

// codeSelection
// usableCodesArea
// codeSelectionDialog
// usableCodesDialog

//miniKeyboard.create();
//miniKeyboard.create(app.os, app.CONTENT_WIDTH);
//miniKeyboard.onKeyClick(coding.insertCharToEditor); // bu uygundur.

miniKeyboard.remove = function() {

    miniKeyboard.me.remove();

}

const usableCodesDialog = {};

usableCodesDialog.me = undefined;
usableCodesDialog.imgbtnClose = undefined;
usableCodesDialog.codeList = [];

usableCodesDialog.create = function() {

    // BOX: Kullanılabilen kod diyaloğu taşıyıcı kutu
    usableCodesDialog.me = cbox(0, 0, app.CONTENT_WIDTH, page.height);
    that.color = "white";
    that.scrollY = 1;
    that.element.style.padding = "20px";
    that.element.style.paddingTop = "40px";
    that.element.style.paddingBottom = "80px";
    that.center("left");

    for (var i = 0; i < 10; i++) {

        usableCodesDialog.me.html += usableCodesDialog.createItemElementString(
            "004",
            "yellow",
            "print(mesaj)&#13;",
            "print(mesaj)",
            "Konsola bir mesaj yazılmasını sağlar.",
            "print(\"merhaba dünya\")"
        );
        
    }

    // IMAGE: Kullanılabilen kod diyaloğunu kapatma butonu.
    usableCodesDialog.imgbtnClose = cimg(0, 0, 50, 50);
    that.load("../img/coding/coding-addclose-btn.png");
    that.bottom = 30;
    that.center("left")
    that.onClick(usableCodesDialog.remove);

}

// $backColor: yellow (for function), grey (for variable)
usableCodesDialog.createItemElementString = function($id, $backColor, $codeString, $title, $description, $sampleCode) {

    var item = usableCodesDialog.itemElementModel;

    item = item.replace("{{id}}", $id);
    item = item.replace("{{id}}", $id);
    item = item.replace("{{id}}", $id);
    item = item.replace("{{back-color}}", $backColor);
    item = item.replace("{{code-string}}", $codeString);
    item = item.replace("{{title}}", $title);
    item = item.replace("{{description}}", $description);
    item = item.replace("{{sample-code}}", $sampleCode);

    return item;

}

// itemElementModel
usableCodesDialog.itemElementModel = `
<div id="snippet{{id}}" class="snippet-item" style="display:block;">   
    <div id="snippet{{id}}-code" style="display:none;">{{code-string}}</div>
    <div class="snippet-box {{back-color}}">
        <div onmousedown="Coding.snippetItemOnMouseDown('{{id}}');" onclick="Coding.snippetItemOnMouseUp();" class="snippet-item-main-btn"></div>
        <div class="snippet-item-title">{{title}}</div>
        <div style="display:block;">
            <div onclick="usableCodesDialog.openItemDescription(this, 1);" class="snippet-item-extend-downbtn"></div>
        </div>
        <div style="display:none;">
            <div class="snippet-item-desc">{{description}}</div>
            <div class="snippet-item-code">{{sample-code}}</div>
        </div>
    </div>
</div>
`;

usableCodesDialog.openItemDescription = function($itemElement, $extend) {
           
   if($extend){
       $itemElement.parentNode.style.display = "none";
       $itemElement.parentNode.nextElementSibling.style.display = "block";
   }else{
       $itemElement.parentNode.style.display = "none";
       $itemElement.parentNode.previousElementSibling.style.display = "block";
   }
   
}

usableCodesDialog.remove = function() {

    usableCodesDialog.me.remove();
    usableCodesDialog.imgbtnClose.remove();

}

