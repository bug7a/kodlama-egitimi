/*

- kod çalıştırıldığında, çalıştır butonu çarpı iconu olsun. Bu durumdayken, 
editöre giriş yapılır ve enter tuşuna basılırsa, kod yeniden çalıştırıldın (live preview gibi)
eğer çarpı tuşuna basar ise, tekrar playe dönüşsün. Ve son çalışmış hali ile kalsın.


*/

// TODO: başka bir dosyaya eklenecek.
var loop;

// basic.js tarafından, içerik yüklendiğinde çağırılır.
var start = function() {
    
    console.log("-start()")
    
    // startFirst();
    
    // TODO: bunu kontrol et bu kod burda doğru mu? burası kaç kere çağırılıyor.
    //İlk yüklendiğinde kodu çalıştır.
    // Coding.runCodeAndRefresh();
    
    // Sayfa yüklendikten 90ms sonra, kodu çalıştır.
    setTimeout(function(){ 

        Coding.runCode("1", 0);

    }, 250);
    
}

// before basic.js example code run
var starting = ``;

// after basic.js example code run
var started = ``;

// when pressed stop code button.
var finished = ``;

// Ekran temizlendikten sonra, page nesnesine box nesnesi eklenir.
// basic.js için ilk ayarların yapılması
var startFirst = function() {
    
    try {
        
        //TODO: setLoopTİmer(1000) çalıştırılması gerekiyor.
        
        console.log("-firstStart()")
        
        // print kodunu değiştir.
        print = basicPrint;

        // v1.6.2 için storage kodunu değiştir.
        //storage.setItem = storage.save;
        //storage.getItem = storage.load;
        // storage.save = basic.storage.save;
        // storage.load = basic.storage.load;
        // storage.remove = basic.storage.remove;
                
        //page._zoom = App.screenRatio;
        
        selectBox({"element":document.getElementById("coding-game-box1")});
        
        page = createBox();
        that.border = 0;
        that.width = 600;
        that.height = parseInt(document.getElementById("coding-screen" + Coding.currentEditorNumber).style.height);
        that.color = document.getElementById("coding-screen" + Coding.currentEditorNumber).style.backgroundColor;
        // Bu kare seçildiğinde, satranç ve yılan oyununda küçük bir hata oluşuyor. satranç: ilk kare taşın üstünde çıkıyor. yılan: geç hareket etmeye başlıyor.
        selectBox(page);
        // Kapatıldığında ise, hizalama .center() kodları çalışmıyor. çözüm, geçici nesneye bu özellikleri atamak.
        basic_selectedBox.width = that.width;
        basic_selectedBox.height = that.height;
        // Belki contElementi kullanan birşey olabilir.
        basic_selectedBox.contElement = basic_selectedBox.element;
        
        //document.getElementById("coding-screen" + $editorNumber).style.height = $height;
        //Coding.setScreenHeight("1", page.height + "px");
        
    } catch(e) {}
    
}

var Coding = function(){};

//çalışma opsiyonlarını tut
Coding.options = {};
Coding.options.fullScreenMode = 0;
Coding.options.isBasicUI = 0; 
Coding.options.resetButtonEnabled = 0;
//Coding.options.autoSave = 0;
Coding.options.saveButtonEnabled = 0;
Coding.options.saveAsButtonEnabled = 0;

Coding.isRunning = 0;


//Kodu çalıştırılan editor numarası
Coding.currentEditorNumber = "";
Coding.currentModeID = "0"; //0(console), 1(coding1), 2(coding2)

/*
Coding.animationList = [];
Coding.animationListCount = 0;
Coding.animationEngineIsRunning = 0;
*/

//Eğer 1 ise mini keyboard dan butona tıklandığında 1 seferlik keyboard u kapatma.
Coding.miniKeyboardBtnPressed = 0;

Coding.statusEvent = document.createEvent("Event");

Coding.init = function() {
    
    //mini klavyeyi html e insert et.
    document.body.innerHTML += App.generate_miniKeyBoardHTMLModel();
    //document.body.innerHTML += Coding.soundModel;
    
    //sayfadaki küçük klavenin zoomu standart olsun.
    var keyboardElement = document.getElementById('keyboard-box');
    if(keyboardElement) {
        if (App.os == "android") {
            keyboardElement.style.zoom = (0.70 / App.screenRatio);
        } else if (App.os == "ios") {
            keyboardElement.style.zoom = 1;
        } else {
            keyboardElement.style.zoom = (0.70 / App.screenRatio);
        }
    }
    
};

Coding.runCodeAndRefresh = function() {
    
    try {
        
        cleanScreen();
        cleanConsole();
        
        var _pageHeight = page.height;

        var content = eval("editor" + Coding.currentEditorNumber + ".getValue();");
        var runFunctionStr;


        if (content.search("var loop") != -1) {
            content = content.replace("var loop", "var loop2");
            runFunctionStr = "function() { ;startFirst();" + starting + " " + content + " ;loop = loop2;setLoopTimer(1000);start(); " + started + " }";
        } else {
            runFunctionStr = "function() { ;startFirst();" + starting + " " + content + " ;start(); " + started + " }";
        }
        
        if (content.search("var start") != -1) {
            
            eval("var runFunction = " + runFunctionStr);
            runFunction();
            
        } else {
            
            print("start() fonksiyonu bulunamadı.")
            
        }

        if (_pageHeight != page.height) {
            
            document.getElementById("coding-screen" + Coding.currentEditorNumber).style.height = page.height + "px";
            
        }
        
    } catch(e) {
        
        print("Error: " + e.message);
        
    }
    
    
}

Coding.runCode = function($editorNumber, $withAnimation = 1) {
    
    if (Coding.isRunning == 0) {
        
        Coding.isRunning = 1;
        Coding.changeRunButton($editorNumber, "refresh");

        //Coding.resetAll();
        //Hangi editörün seçildiğini belirle ve başla
        Coding.currentEditorNumber = $editorNumber;
        console.log("Coding.currentEditorNumber: "+$editorNumber);

        Coding.getOptions();

        //uygulamayı resetle ve çalıştırmaya hazır hale getir.
        Coding.statusEvent.initEvent("onGameStarting",true,true);
        Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
        document.dispatchEvent(Coding.statusEvent); 

        //kodları çalıştırmadan önce animasyona bir boş kayıt ekle
        //Coding.animationSleep(10);

        Coding.runCodeAndRefresh();

        //start();
        // TODO: deneme
        //runFunction.start();

        var screenY = document.getElementById('coding-box'+$editorNumber).offsetTop;
        screenY = App.screenRatio * screenY;

        //cod çalıştırıldığında div e yönel
        if ($withAnimation == 1) {
            window.scrollTo({
              top: screenY,
              behavior: 'smooth',
            });
        }
        
        //Uygulama kodları çalıştırıldıktan sonra.
        Coding.statusEvent.initEvent("onGameStarted",true,true);
        Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
        document.dispatchEvent(Coding.statusEvent);
        
    } else {
        
        Coding.isRunning = 0;
        Coding.changeRunButton($editorNumber, "play");
        
        //uygulamayı resetle ve çalıştırmaya hazır hale getir.
        Coding.statusEvent.initEvent("onGameFinished",true,true);
        Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
        document.dispatchEvent(Coding.statusEvent); 
        
    }
            
    };

Coding.createNewEditorHTML = function($editorNumber){
    
    Coding.getOptions($editorNumber);
    
    var newEditorHTMLModel = Coding.editorHTMLModel;
    
    do {
      
        newEditorHTMLModel = newEditorHTMLModel.replace("{{id}}", $editorNumber);
        
    }
    while (newEditorHTMLModel.search("{{id}}") != -1);
    
    //basit mod açık ise etiketleri göster
    if(Coding.options.isBasicUI == "0"){
        newEditorHTMLModel = newEditorHTMLModel.replace("{{basicUI}}", "none");
        newEditorHTMLModel = newEditorHTMLModel.replace("{{basicUI}}", "none");
    }else{
        newEditorHTMLModel = newEditorHTMLModel.replace("{{basicUI}}", "block");
        newEditorHTMLModel = newEditorHTMLModel.replace("{{basicUI}}", "block");
    }
    
    if (Coding.options.saveButtonEnabled == "0"){
        
        newEditorHTMLModel = newEditorHTMLModel.replace("{{save-btn-display}}", "none");
        
    } else {
        
        //coding-save-btn
        newEditorHTMLModel = newEditorHTMLModel.replace("{{save-btn-display}}", "inline-block");
        newEditorHTMLModel = newEditorHTMLModel.replace("{{save-btn-path}}", Coding.options.saveButtonEnabled);
        
    }
    
    document.getElementById("editor-cont" + $editorNumber).innerHTML = newEditorHTMLModel;
    
    //Çalıştırma butonunu aktif et
    Coding.changeRunButton($editorNumber,"play");
    
};

Coding.saveCode = function($editorNumber, $savePath) {
    
    try {
        
        if ($savePath) {
    
            eval("var myeditor = editor" + $editorNumber + ";");
            
            storage.setItem($savePath, JSON.stringify(myeditor.getValue()));
            
            //Eğer buton açık ise
            if(Coding.options.saveButtonEnabled){
               
                var btnAlert = document.getElementById("coding-btn-alert" + $editorNumber);
                btnAlert.innerHTML = "Algoritma kaydedildi.";
                btnAlert.style.display = "inline-block";
               
                setTimeout(function(){ btnAlert.style.display = "none"; }, 2000);
               
           }
            
        }
        
    } catch (e) {
        
        print(e.message, "error", 1);
        
    }
    
};


Coding.createNewEditor = function($editorNumber){
    
    eval("var myeditor = editor" + $editorNumber + ";");
    
    myeditor.setTheme("ace/theme/twilight");
    //myeditor.setTheme("ace/theme/chrome");
    //myeditor.setTheme("ace/theme/solarized_light");
    //ace/theme/solarized_light
    //ace/theme/solarized_dark
    myeditor.session.setMode("ace/mode/javascript");
    myeditor.setOption("minLines", 8);
    myeditor.setOption("maxLines", 1000);
    myeditor.renderer.setShowGutter(false);
    //Coding.editorInit(editor1, "1");
    
   //editoru zoomunu geri al
    document.getElementById("editor"+$editorNumber).style.zoom = (1 / App.screenRatio);
    
    var editorCloseMobileMenu = function() {
        
        var editorElement = document.getElementById("editor" + $editorNumber);
        var cursorElement = editorElement.getElementsByClassName("ace_mobile-menu");

        if(cursorElement[0]) {
            cursorElement[0].style.display = "none";
        }
        
    }
    
    //document.getElementById("editor"+$editorNumber).onclick = function() {
        
        //console.log("on click");
        //myeditor.alignCursors();
        
    //}
    
    myeditor.on("focus", function() {
        
        console.log("focus");

            //Eğer farklı editörün play butonuna basılır veya editoru seçilir ise
            if(Coding.currentEditorNumber != $editorNumber){

                //Eğer daha önce başka editör çalışıyor ise
                if(Coding.currentEditorNumber){

                    //Eğer animation engine çalışmıyor ise hazırla
                    //Önceki editörü kapat ve verileri temizle
                    //refreshCodingClass();
                    Coding.runCodeRefreshCodingClass();

                }

            }

        Coding.currentEditorNumber = $editorNumber;
        
        Coding.getOptions();
        
        if(!myeditor.getReadOnly()){
            document.getElementById('keyboard-box').style.display = "block";

            myeditor.selected = Coding.currentEditorNumber;
            
            if(!storage.getItem("alert-coding-add-btn")){
                document.getElementById('coding-add-btn-alert').style.display = "block";
            }
            
            //setTimeout(function(){ Coding.refreshCursorDraggerCoordinates(); }, 1500); 
            /*
            var editorElement = document.getElementById("editor" + Coding.currentEditorNumber);
            var cursorElement = editorElement.getElementsByClassName("ace_mobile-menu");
            
            if(cursorElement[0]) {
                cursorElement[0].style.display = "none";
            }*/
            
            /* NEW 
            if (Coding.options.resetButtonEnabled == 1) {
                //document.getElementById('coding-reset-btn'+$editorNumber).style.display = "block";
                Coding.resetButtonRefresh($editorNumber);
            } */
            
            editorCloseMobileMenu();
            
            }
    });
    
    myeditor.on("blur", function() {
        
        console.log("blur");
        
        Coding.currentEditorNumber = $editorNumber;
        
        if(Coding.miniKeyboardBtnPressed == 0){
            document.getElementById('keyboard-box').style.display = "none";

            myeditor.selected = 0
            if (App.os == "ios") {
                //scrolu geri getir. Editör düzenlenirken scroll kilitleniyor.
                document.body.style.overflowY = "scroll";
            }
            
            /* NEW 
            if (Coding.options.resetButtonEnabled == 1) {
                //document.getElementById('coding-reset-btn'+$editorNumber).style.display = "none";
                Coding.resetButtonRefresh($editorNumber);
            } */
            
        }else{
            Coding.miniKeyboardBtnPressed = 0;
        }
    });
    
    myeditor.on("change", function() {
        
        console.log("change");
        
        /* NEW */
        if (Coding.options.resetButtonEnabled == 1) {
            //document.getElementById('coding-reset-btn'+$editorNumber).style.display = "block";
            Coding.resetButtonRefresh($editorNumber);
        }
        
        // Eğer çalışır durumda ise, kodu yenile.
        if (Coding.isRunning == 1) {
            Coding.runCodeAndRefresh();
        }
        
        //Coding.currentEditorNumber = $editorNumber;
        editorCloseMobileMenu();
        
    });
    
    myeditor.selection.on("changeCursor", function() {
        
        console.log("changeCursor");
        //myeditor.focus();
        //myeditor.alignCursors()
        //myeditor.updateSelectionMarkers()

        // editor.getCursorPosition()

        
        
        //Coding.currentEditorNumber = $editorNumber;
        editorCloseMobileMenu();
        
    });
    
    myeditor.selection.on("changeSelection", function() {
        
        console.log("changeSelection");
        //myeditor.focus();
        
        
        //Coding.currentEditorNumber = $editorNumber;
        editorCloseMobileMenu();
        
    });
    
    /*
    var input = document.getElementsByClassName("ace_text-input")[0];

    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (Coding.isRunning == 1) {
            //Coding.runCodeAndRefresh();
        }
      }
    });
    */
    
     // ios için, kod yazarken editörü sabitleme.
     var editorElement = document.getElementById("editor" + $editorNumber);
     var editorTop = editorElement.getBoundingClientRect().top;
     setInterval(function() {
 
         // Yazı yazarken, yazılan satırı yukarıdan 100px aşağıda tut.
         if (App.os == "ios") {
             if (myeditor.selected == Coding.currentEditorNumber) {
                 //scrollu kullanamasın
                 document.body.style.overflowY = "hidden";
                 // Editöre metin girişi yaparken, kod yazılan satırı sabit tut.
                 // Yukarıdan, 100px aşağıda.
                 var cursorPosition = myeditor.getCursorPosition();
                 var cursorPixelPosition = myeditor.renderer.$cursorLayer.getPixelPosition(cursorPosition, 0);
                 window.scrollTo({
                     top: editorTop + cursorPixelPosition.top - 150
                 });
                 // ... editördeki menüyü kapalı tut.
                 var cursorElement = editorElement.getElementsByClassName("ace_mobile-menu");
                 if(cursorElement[0]) {
                     cursorElement[0].style.display = "none";
                 }
             }
         }
 
     }, 10);
    
    //editor1.setValue(Coding.getCodeFromDivID("code-example1"));
    //editor1.gotoLine(1);
    
};

Coding.setSnippetIDList = function($editorNumber, $list){
    
    var boxElement = document.getElementById("editor-cont" + $editorNumber);
    boxElement.setAttribute("snippet-id-list", JSON.stringify($list));
    
}

Coding.getSnippetIDList = function(){
    
    var boxElement = document.getElementById("editor-cont" + Coding.currentEditorNumber); //coding-box
    var list = boxElement.getAttribute("snippet-id-list");
    
    list = JSON.parse(list);
    
    return list;
    
}

Coding.setOption = function($editorNumber, $variable, $value) {
    
    var boxElement = document.getElementById("editor-cont" + $editorNumber);
    boxElement.setAttribute($variable, $value);
    
    Coding.options[$variable] = $value;
    
}

Coding.getOptions = function($editorNumber){
    
    if(!$editorNumber) $editorNumber = Coding.currentEditorNumber;
    
    var boxElement = document.getElementById("editor-cont" + $editorNumber);
    
    Coding.options.fullScreenMode = boxElement.getAttribute("fullScreenMode");
    Coding.options.isBasicUI = boxElement.getAttribute("isBasicUI");
    Coding.options.resetButtonEnabled = boxElement.getAttribute("resetButtonEnabled");
    //Coding.options.autoSave = boxElement.getAttribute("autoSave");
    Coding.options.saveButtonEnabled = boxElement.getAttribute("saveButtonEnabled");
    Coding.options.saveAsButtonEnabled = boxElement.getAttribute("saveAsButtonEnabled");
    
    if (!Coding.options.fullScreenMode) Coding.options.fullScreenMode = 0;
    if (!Coding.options.isBasicUI) Coding.options.isBasicUI = 0;
    if (!Coding.options.resetButtonEnabled) Coding.options.resetButtonEnabled = 0;
    //if (!Coding.options.autoSave) Coding.options.autoSave = 0;
    if (!Coding.options.saveButtonEnabled) Coding.options.saveButtonEnabled = 0;
    if (!Coding.options.saveAsButtonEnabled) Coding.options.saveAsButtonEnabled = 0;
    
}

Coding.setScreenColor = function($editorNumber, $color){
    
    document.getElementById("coding-screen" + $editorNumber).style.backgroundColor = $color;
    
};

Coding.setScreenHeight = function($editorNumber, $height){
    
    document.getElementById("coding-screen" + $editorNumber).style.height = $height;
    
};

//KULLANILMIYOR
/*
Coding.showEditorButtons = function($editorNumber, $buttonNameList){
    
    for(var i = 0; i <= $buttonNameList.length - 1; i++){
        
        switch($buttonNameList[i]){
        
               case "add":
                document.getElementById("coding-add-btn" + $editorNumber).style.display = "block"; 
               break;
                
               default:    
        } //switch
    } //fors
};

Coding.hideEditorButtons = function($editorNumber, $buttonNameList){
    
};
*/


Coding.changeRunButton = function($editorNumber, $buttonType){
    
    var runBtnElement = document.getElementById("coding-run-btn" + $editorNumber);
    
    switch($buttonType){
        case "play":
            
            if(Coding.options.isBasicUI == "0"){
                
                runBtnElement.innerHTML = '<img src="../img/coding/coding-run-btn.png" width="60" height="60" />';
                runBtnElement.style.top = "-23px";
                //runBtnElement.style.top = "-10px";
                
            }else{
                    
                runBtnElement.innerHTML = '<img src="../img/coding/coding-run-btn1.png" width="165" height="43" />';
                //runBtnElement.style.top = "-12px";
                runBtnElement.style.top = "-12px";
                    
            }
            break;
        case "basic":
            runBtnElement.innerHTML = '<img src="../img/coding/coding-run-btn1.png" width="165" height="43" />';
            runBtnElement.style.top = "-12px";
            break;
        case "cantpress":
            runBtnElement.innerHTML = '<img src="../img/coding/coding-running-btn.png" width="60" height="60" />';
            runBtnElement.style.top = "-23px";
            //runBtnElement.style.top = "-10px";
            break;
        case "running":
            //running full screen çalışacak
            runBtnElement.innerHTML = '<img src="../img/coding/coding-running-btn.png" width="60" height="60" />';
            runBtnElement.style.top = "-23px";
            //runBtnElement.style.top = "-10px";
            
            if(Coding.options.fullScreenMode == 1){
                document.getElementById("coding-screen" + $editorNumber).className = "coding-screen-running";
                

                //full screen scrollu kullanamasın
                document.body.style.overflowY = "hidden";
            }
            
            //coding-screen-running
            
            break;
        case "refresh":
            
            if(Coding.options.isBasicUI == "0") {
                
                runBtnElement.innerHTML = '<img src="../img/coding/coding-break-btn.png" width="60" height="60" />';
                runBtnElement.style.top = "-23px";
                //runBtnElement.style.top = "-10px";
                
                }else{
                    
                runBtnElement.innerHTML = '<img src="../img/coding/coding-refresh-btn1.png" width="165" height="43" />';
                runBtnElement.style.top = "-12px";   
                    
            }
            
            if(Coding.options.fullScreenMode == 1){
                
                setTimeout(function(){
                    document.getElementById("coding-screen" + $editorNumber).className = "coding-screen";
                    //scrolu geri getir
                    document.body.style.overflowY = "scroll";
                }, 1500);
                
            }
            
            break;
    };
    
}

Coding.createScreen = function() {
    
};

Coding.runCodeRefreshCodingClass = function() {

    //her çalımadan sonra refresh edildiğinde konsolu temizle
    cleanConsole();

    //tekrar çalıştır butonunu aktif et
    Coding.changeRunButton(Coding.currentEditorNumber, "play");
    
    //uygulamayı resetle ve çalıştırmaya hazır hale getir.
    Coding.statusEvent.initEvent("onGameRefreshed",true,true);
    Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
    document.dispatchEvent(Coding.statusEvent);

};


Coding.getCodeFromDivID = function($divID){
    
    var xcode = document.getElementById($divID).innerHTML;
    
    do { xcode = xcode.replace("&lt;", "<"); } while (xcode.search("&lt;") != -1);
    do { xcode = xcode.replace("&gt;", ">"); } while (xcode.search("&gt;") != -1);
    
    return xcode;
    
};

Coding.insertAtCursor = function($string) {
    
    eval("var myeditor = editor" + Coding.currentEditorNumber + ";");
    
    Coding.miniKeyboardBtnPressed = 1;
    
    //her karakter eklendiğinde yine kod alanını seç
    //eval("editor" + Coding.currentEditorNumber + ".focus();");
    //myeditor.focus();
    
    switch($string){
        case "quot":
            $string = '"';
            myeditor.insert($string);
            //eval("editor" + Coding.currentEditorNumber + ".insert('" + $string + "');");
            break;
        case "apos":
            $string = "'";
            myeditor.insert($string);
            //eval("editor" + Coding.currentEditorNumber + '.insert("' + "'" + '");');
            break;
        case "var":
            //$string = 'var variableName = "text";';
            //myeditor.insert(Coding.getCodeFromDivID("var-example"));
            break;
        case "if":
            $string = "if(  ){ }else if(  ){ } else { };";
            //eval("editor" + Coding.currentEditorNumber + ".insert('" + $string + "');");
            //myeditor.insert(Coding.getCodeFromDivID("if-example"));
            break;
        case "for":
            $string = "for( var i = 0; i <= 10; i++ ) {  };";
            //myeditor.insert(Coding.getCodeFromDivID("for-example"));
            break;
        default:
            //eval("editor" + Coding.currentEditorNumber + ".insert('" + $string + "');");
            myeditor.insert($string);
    }
    
    myeditor.focus();
        
};

Coding.focusEditor = function(){
    eval("editor" + Coding.currentEditorNumber + ".focus();");
};

Coding.moveCursorRight = function() {
    
    Coding.miniKeyboardBtnPressed = 1;
  
    eval("editor" + Coding.currentEditorNumber + ".navigateRight();");
    //Coding.focusEditor();
    
};

Coding.moveCursorLeft = function() {
    
    Coding.miniKeyboardBtnPressed = 1;
  
    eval("editor" + Coding.currentEditorNumber + ".navigateLeft();");
    //Coding.focusEditor();
    
};

Coding.refreshCursorDraggerCoordinates = function() {
    
}

Coding.insertCodeToEditor = function($editorNumber, $code, $savePath){
    
    //Eğer daha önce kaydedilmiş bir algoritma var ise onu kullan
    var _code = JSON.parse(storage.getItem($savePath));
    if(_code) $code = _code;
    
    eval("var myeditor = editor" + $editorNumber + ";");
    
    if($code) {
    
        myeditor.setValue($code);
        myeditor.gotoLine(1);    

        var codingBoxElement = document.getElementById("editor-cont" + $editorNumber);
        codingBoxElement.setAttribute("code-before-edited", $code);

        if (Coding.options.resetButtonEnabled == 1) {
            //document.getElementById('coding-reset-btn'+$editorNumber).style.display = "block";
            Coding.resetButtonRefresh($editorNumber);
        }
        
    }
    
};

Coding.resetButtonRefresh = function($editorNumber){
    
    eval("var myeditor = editor" + $editorNumber + ";");
    
    var codingBoxElement = document.getElementById("editor-cont" + $editorNumber);
    var code = codingBoxElement.getAttribute("code-before-edited");
    
    var editorCode = myeditor.getValue();

    if(editorCode != code) {
        document.getElementById("coding-reseta-btn" + $editorNumber).style.display = "inline-block";
    }else{
        document.getElementById("coding-reseta-btn" + $editorNumber).style.display = "none";
    }
    
}

Coding.resetCodeOnEditor = function($editorNumber){
    
    try {
        navigator.notification.confirm(
            'Yaptığınız tüm değişiklikleri temizlemek istiyor musunuz?', 
            function($buttonIndex){
                if($buttonIndex == 1){

                    var codingBoxElement = document.getElementById("editor-cont" + $editorNumber);
                    var code = codingBoxElement.getAttribute("code-before-edited");

                    Coding.insertCodeToEditor($editorNumber, code);
                    Coding.resetButtonRefresh($editorNumber);
                    

                }else{

                }
            },            
            'Uyarı',           
            ['Temizle','İptal']
        );
    } catch (e) {
        var codingBoxElement = document.getElementById("editor-cont" + $editorNumber);
        var code = codingBoxElement.getAttribute("code-before-edited");
    
        Coding.insertCodeToEditor($editorNumber, code);
        Coding.resetButtonRefresh($editorNumber);
    }
    
};

/* STANDART CODES */

var basicPrint = function($message) {
    
    var $type = "black";
    
    if(!$message && $message != 0) $message = "";
    
    if($type == "hata") $type = "error";
    if($type == "uyarı") $type = "alert";
    
    var codingConsoleDiv = "coding-console-box" + Coding.currentEditorNumber;
    
    switch($type){
        case "error":
            $message = '<span style="color:#D0021B;text-shadow: 0 0 0px #000000;"><span class="coding-console-bold">HATA:</span> ' + $message + '</span>';
            break;
        case "alert":
            $message = '<span style="color:yellow;"><span class="coding-console-bold">UYARI:</span> ' + $message + '</span>';
            break;
        case "black":
            $message = '<span style="color:#605A4A;font-size:16px;opacity:0.8;text-shadow:none;">' + $message + '</span>';
            break;
    }
    
    try {
        
        document.getElementById(codingConsoleDiv).innerHTML += $message + '<br />';
        
    } catch (e) {
        
        // do nothing
        
    }
    
    
    
};

//print
var yaz = function() {
    print("Konsola mesaj yazdırmak için print(mesaj) fonksiyonunu kullanın.")
};
var ekranaYaz = print;


Coding.cleanScreen = function(){
    
    //Coding.currentEditorNumber
    
    var codingConsoleDiv = "coding-game-box" + Coding.currentEditorNumber;
    document.getElementById(codingConsoleDiv).innerHTML = "";
    
    cleanConsole();
    
}; var cleanScreen = Coding.cleanScreen;

//Consolu temizle
var cleanConsole = function(){
    
    var codingConsoleDiv = "coding-console-box" + Coding.currentEditorNumber;
    
    document.getElementById(codingConsoleDiv).innerHTML = "";
    
    var codingInfoDiv = "coding-info" + Coding.currentEditorNumber;
    
    document.getElementById(codingInfoDiv).innerHTML = "";
    
};

//oyun ekranını html olarak sıfırlar ve consoldaki tüm yazıları siler.
var ekranTemizle = function(){
    
    Coding.cleanScreen();
    
}

var editInfo = function($message, $withOutAnimation) {
    
    var codingInfoDiv = "coding-info" + Coding.currentEditorNumber;
    
    if(!$withOutAnimation){
        Coding.animationEngineAdd("document.getElementById('"+codingInfoDiv+"').innerHTML = '"+$message+"';Coding.animationShortSleep();");
    }else{
        document.getElementById(codingInfoDiv).innerHTML = $message;
    }
    
};var bilgiDuzenle = editInfo;

var changeScreenColor = function($color){
    
    Coding.setScreenColor(Coding.currentEditorNumber, $color);
    
};

var changeScreenHeight = function($height){
    
    Coding.setScreenHeight(Coding.currentEditorNumber, $height);
    
};

var setConsoleFontSize = function($fontSize){
    document.getElementById("coding-console-box"+Coding.currentEditorNumber).style.fontSize = $fontSize+"px";
};

Coding.editorHTMLModel = `<!-- 02 -->
            
            <!-- CODING CONTAINER -->
            
            <div id="coding-box{{id}}" class="coding-box" >

                <!-- SCREEN -->
                
                <div id="coding-screen{{id}}" class="coding-screen" style="background-color:#EE7553;height:300px;">
                    
                    <div id="coding-game-box{{id}}" class="coding-game-box"></div>
                    
                    <!-- CONSOLE -->

                <div id="coding-info{{id}}" style="position:absolute;overflow: hidden;top:20px;right:20px;pointer-events:none;font-family: roboto;font-size: 18px;color:white;opacity: 0.8;"></div>
                
                <div id="coding-console{{id}}" class="coding-console">
                    <div id="coding-console-box{{id}}" class="coding-console-box"></div>
                </div>
                
                <!-- CONSOLE END -->

                <!-- BASIC INFO -->

                <div style="position:absolute;left:20px;top:5px;display:{{basicUI}};"><img src="../img/coding/screen-area.png" width="100" height="20" /></div>

                <!-- BASIC INFO END -->
                
                </div>
                    
                <!-- SCREEN END -->
                
                <!-- BUTTONS SCREEN -->
                
                <div id="coding-btngroup{{id}}" class="coding-btngroup" style="background-color:whitesmoke;border-top:1px solid #D8D8D8;">
                
                    <!-- buttons -->
                    <div id="coding-save-btn{{id}}" onclick="Coding.saveCode('{{id}}', '{{save-btn-path}}');" class = "coding-btn" style="display:{{save-btn-display}};" >Kaydet</div>

                    <div id="coding-reseta-btn{{id}}" onclick="Coding.resetCodeOnEditor('{{id}}');" class = "coding-btn" style="display:none;" >İlk Haline Çevir<!--Değişiklikleri Geri Al--></div>

                    <div id="coding-btn-alert{{id}}" class = "coding-btn" style="background-color:#F6F6F6;border:0px;display:none;font-family: roboto-lightitalic;color:#9B9B9B;" >Algoritma kaydedildi.</div>
                    
                    <div id="coding-saveas-btn{{id}}" onclick="storage.setItem('test1', 'veri kaydedildi.');" class = "coding-btn" style="display:none;" >Farklı Kaydet</div>
                    
                    <span id="coding-btn-linea{{id}}" style="display:none;">|</span>

                    <div id="coding-btn-back{{id}}" onclick="storage.setItem('test1', 'veri kaydedildi.');" class = "coding-btn" style="display:none;" >Sıfırla</div>

                    <div id="coding-btn-reback{{id}}" onclick="storage.setItem('test1', 'veri kaydedildi.');" class = "coding-btn" style="display:none;" >İleri al</div>

                    <!-- RUN BUTTON -->
                    <div id="coding-run-btn{{id}}" onclick="Coding.runCode('{{id}}');" class="coding-run-btn" ><img src="../img/coding/coding-run-btn.png" width="60" height="60" /></div>

                    <!-- BASIC INFO -->
                    <div style="position:absolute;left:20px;top:16px;display:{{basicUI}};"><img src="../img/coding/code-area.png" width="100" height="20" /></div>

                    <!-- BASIC INFO END -->
                    
                </div>
                
                <!-- BUTTONS SCREEN END -->
                
                <!-- PROGRAMING AREA -->
                
                <div id="editor-box{{id}}" class="editor-box" >
                    
                    <div id="editor{{id}}" class="editor"></div>
                    
                </div>
                
                <!-- PROGRAMING AREA END -->

<!-- RESET BUTTON -->
                <div id="coding-reset-btn{{id}}" onmousedown="Coding.resetCodeOnEditor('{{id}}');" class = "coding-reset-btn" style="display:none;" >Temizle</div> <!-- <img src="../img/coding/coding-reset-btn.png" width="40" height="40" /> 
            
            </div>
            
            <!-- CODING CONTAINER END -->
            
<!-- 02 END -->`;


var tamEkranGoster = function() {
  
    Coding.setOption(Coding.currentEditorNumber, "fullScreenMode", 1);
    
};
