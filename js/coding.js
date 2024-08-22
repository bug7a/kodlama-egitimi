/*

Coding.setOption("1", "isBasicUI", 1);
Coding.setOption("1", "fullScreenMode", 1);
Coding.setOption("1", "resetButtonEnabled", 1);

Coding.createNewEditorHTML("1");

//Coding.showEditorButtons("1",["add"]);
Coding.setScreenColor("1", "#EE7553");
Coding.setScreenHeight("1", "340px");
//Coding.changeRunButton("1","play");
editor1 = ace.edit("editor1");
//editor1.setReadOnly(true);
Coding.createNewEditor("1");
//Coding.setSnippetIDList("1", ["101"]); //"004", 
Coding.setSnippetIDList("1", Coding.snippetCodingIDList.concat(Coding.snippetCoding1IDList));
Coding.insertCodeToEditor("1", Coding.getCodeFromDivID("code-example1"));

*/


var Coding = function(){};

//çalışma opsiyonlarını tut
Coding.options = {};
Coding.options.fullScreenMode = 0;
Coding.options.isBasicUI = 0; 
Coding.options.resetButtonEnabled = 0;
//Coding.options.autoSave = 0;
Coding.options.saveButtonEnabled = 0;
Coding.options.saveAsButtonEnabled = 0;

/*
Coding.optionsOnCreate = {};
Coding.optionsOnCreate.editorTheme = "black";
Coding.optionsOnCreate.language = "tr";
*/

//Kodu çalıştırılan editor numarası
Coding.currentEditorNumber = "";
Coding.currentModeID = "0"; //0(console), 1(coding1), 2(coding2)
Coding.firstCodeString = "";

Coding.animationList = [];
Coding.animationListCount = 0;
Coding.animationEngineIsRunning = 0;

//Coding.isRunning = "0"; //ready, running, paused

//Eğer 1 ise mini keyboard dan butona tıklandığında 1 seferlik keyboard u kapatma.
Coding.miniKeyboardBtnPressed = 0;

Coding.statusEvent = document.createEvent("Event");
//Coding.statusEvent.initEvent("objectArrived",true,true);
//Coding.statusEvent.objectID = 1;
//document.dispatchEvent(Coding.statusEvent);

Coding.init = function() {
    
    //mini klavyeyi html e insert et.
    document.body.innerHTML += Coding.miniKeyBoardHTMLModel;
    document.body.innerHTML += Coding.soundModel;
    
    //sayfadaki küçük klavenin zoomu standart olsun.
    var keyboardElement = document.getElementById('keyboard-box');
    if(keyboardElement) {
        keyboardElement.style.zoom = (0.70 / App.screenRatio);
    }
    
    //document.getElementById("coding-cursor-dragger").style.zoom = (1 / App.screenRatio);
    
    //dragger zoom ayarla
    
    Sound.init();
    //MiniKeyBoard.init();
    //document.getElementById('keyboard-box').style.zoom = (1 / App.screenRatio);
    
};

Coding.resetAll = function(){
    
    Coding.animationList = [];
    Coding.animationListCount = 0;
    
    //Coding.options.isBasicUI = 0;
    //Coding.options.fullScreenMode = 1;
    //Coding.options.language = "tr";
    //Coding.options.editorTheme = "black";
    
}

/*
Coding.resetOptions = function() {
    
    Coding.options = {};
    Coding.options.fullScreenMode = 0;
    Coding.options.isBasicUI = 0;
    
}*/

//Animasyon listesindeki bir sonraki kodu çalıştırır.
Coding.animationEngineNext = function(){
    
    if(Coding.animationEngineIsRunning == "1"){
    
        //eğer yapılacak iş var ise
        if(Coding.animationList.length > 0){

            if(Coding.animationListCount < Coding.animationList.length){
                
                //Coding.statusEvent.initEvent("onAnimationTurnStartedRealTime",true,true);
                //Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
                //document.dispatchEvent(Coding.statusEvent);
                
                //do the job9
                console.log("animation engine next: " + (Coding.animationListCount+1) + "/" + Coding.animationList.length);
                //console.log("code: "+Coding.animationList[Coding.animationListCount]);

                try {
                    eval(Coding.animationList[Coding.animationListCount]);
                } catch (e) {
                    print(e.message, "error", 1);
                    //Coding.animationEngineNext();
                }
                Coding.animationListCount++;
                
                //Coding.statusEvent.initEvent("onAnimationTurnEnded",true,true);
                //Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
                //document.dispatchEvent(Coding.statusEvent);

               } else {

                   console.log("-- animation engine finished --");
                   Coding.animationEngineIsRunning = "2"; //stoped
                   Coding.changeRunButton(Coding.currentEditorNumber, "refresh");
                   
                   Coding.statusEvent.initEvent("onGameFinished",true,true);
                   Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
                   document.dispatchEvent(Coding.statusEvent);

               }

        }
        
    }
    
};

//animasyon listesine yeni bir komut ekler
Coding.animationEngineAdd = function($code){
    
    Coding.animationList.push($code);
    
    //console.log("code added: " + $code);
    
    //Eğer animasyon çalışıyor ise birşey yapma
    if(Coding.animationEngineIsRunning == "1"){
        
    }else if(Coding.animationEngineIsRunning == "0"){
        
        //animasyonu çalıştır
        Coding.animationEngineIsRunning = "1";
        Coding.changeRunButton(Coding.currentEditorNumber, "running");
        Coding.animationEngineNext();
        
        Coding.statusEvent.initEvent("codingStarted",true,true);
        Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
        document.dispatchEvent(Coding.statusEvent);
        
    }
    
};

//animasyonu belli bir zaman için duraksatır
Coding.animationSleep = function($time) {
    
    Coding.animationEngineAdd("setTimeout(function(){ Coding.animationEngineNext(); }, "+$time+");");
    
};

//çok kısa bir ara ver ve devam et.
Coding.animationShortSleep = function(){
    
    setTimeout(function(){ Coding.animationEngineNext(); }, 1);
    
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
    myeditor.session.setMode("ace/mode/javascript");
    myeditor.setOption("minLines", 8);
    myeditor.setOption("maxLines", 500);
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
    
    myeditor.on("focus", function() {

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
        
        Coding.currentEditorNumber = $editorNumber;
        
        if(Coding.miniKeyboardBtnPressed == 0){
            document.getElementById('keyboard-box').style.display = "none";
            
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
        
        /* NEW */
        if (Coding.options.resetButtonEnabled == 1) {
            //document.getElementById('coding-reset-btn'+$editorNumber).style.display = "block";
            Coding.resetButtonRefresh($editorNumber);
        }
        
        //Coding.currentEditorNumber = $editorNumber;
        editorCloseMobileMenu();
        
    });
    
    myeditor.selection.on("changeCursor", function() {
        
        //Coding.currentEditorNumber = $editorNumber;
        editorCloseMobileMenu();
        
    });
    
    myeditor.selection.on("changeSelection", function() {
        
        //Coding.currentEditorNumber = $editorNumber;
        editorCloseMobileMenu();
        
    });

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
            
            if(Coding.options.isBasicUI == "0"){
                
                runBtnElement.innerHTML = '<img src="../img/coding/coding-refresh-btn.png" width="60" height="60" />';
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

    //oyun ekranını da temizle (modulun kendisi yapıyor artık)
    //cleanScreen();

    //değişkenleri sıfırla
    Coding.resetAll();

    //tekrar çalıştır butonunu aktif et
    Coding.changeRunButton(Coding.currentEditorNumber, "play");

    Coding.animationEngineIsRunning = "0";
    //Coding.animationEngineAdd("setTimeout(function(){ Coding.animationEngineNext(); }, "+$time+");");

    //uygulamayı resetle ve çalıştırmaya hazır hale getir.
    Coding.statusEvent.initEvent("onGameRefreshed",true,true);
    Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
    document.dispatchEvent(Coding.statusEvent);

};

Coding.runCode = function($editorNumber) {
    
    //animation engine çalışıyorken başka bir kod çalıştırma
    if(Coding.animationEngineIsRunning != "1"){
        
            //KULLANILMIYOR ###
            var refreshCodingClass = function() {

                //her çalımadan sonra refresh edildiğinde konsolu temizle
                cleanConsole();

                //oyun ekranını da temizle (modulun kendisi yapıyor artık)
                //cleanScreen();

                //değişkenleri sıfırla
                Coding.resetAll();

                //tekrar çalıştır butonunu aktif et
                Coding.changeRunButton(Coding.currentEditorNumber, "play");

                Coding.animationEngineIsRunning = "0";
                //Coding.animationEngineAdd("setTimeout(function(){ Coding.animationEngineNext(); }, "+$time+");");

                //uygulamayı resetle ve çalıştırmaya hazır hale getir.
                Coding.statusEvent.initEvent("onGameRefreshed",true,true);
                Coding.statusEvent.editorNumber = Coding.currentEditorNumber;
                document.dispatchEvent(Coding.statusEvent);

            };

            //Eğer farklı editörün play butonuna basılır ise
            if(Coding.currentEditorNumber != $editorNumber){

                //Eğer daha önce başka editör çalışıyor ise
                if(Coding.currentEditorNumber){

                    //Eğer animation engine çalışmıyor ise hazırla
                    //Önceki editörü kapat ve verileri temizle
                    //refreshCodingClass();
                    Coding.runCodeRefreshCodingClass();

                }

            }

            //Herşey sıfırlanmış ve kod çalıştırmaya hazır.
            if(Coding.animationEngineIsRunning == "0"){

                try{

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
                    Coding.animationSleep(10);

                    var content = eval("editor" + Coding.currentEditorNumber + ".getValue();");
                    var runFunctionStr = "function() { " + content + " }";
                    eval("var runFunction = " + runFunctionStr); 
                    runFunction();

                    var screenY = document.getElementById('coding-box'+$editorNumber).offsetTop;
                    screenY = App.screenRatio * screenY;

                    //cod çalıştırıldığında div e yönel
                    window.scrollTo({
                      top: screenY,
                      behavior: 'smooth',
                    });

                }catch($err){

                    print($err.message, "error", 1);
                    //Hata oluştu tam ekrandan çık sayfayı yenilemsi için butonları aç
                    Coding.animationEngineIsRunning = "2"; //stoped
                    Coding.changeRunButton(Coding.currentEditorNumber, "refresh");

                }

            } else if(Coding.animationEngineIsRunning == "2"){

                //Animasyon bitti ve butona basıldığında sahne yenilensin. refresh
                //refreshCodingClass();
                Coding.runCodeRefreshCodingClass();

            }
        
        }
            
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
    
    /*
    
    var htmlModel = `<div id="coding-cursor-dragger" onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;z-index:999999;top:35px;left:-20px;animation:none !important;"><img src="../img/coding/cursor-dragger.png" width="40" /></div>`;
    
    eval("var myeditor = editor" + Coding.currentEditorNumber + ";");
    
    //eval("var myeditor = editor" + Coding.currentEditorNumber + ";");
    var editorElement = document.getElementById("editor" + Coding.currentEditorNumber);
    //var cursorElement = editorElement.getElementsByClassName("ace_cursor");
    var cursorLayerElement = editorElement.getElementsByClassName("ace_cursor");
    
    //alert(cursorLayerElement[0].innerHTML);
    
    cursorLayerElement[0].innerHTML += htmlModel;
    
    var cursorRow = myeditor.getCursorPosition().row;
    var cursorColumn = myeditor.getCursorPosition().column;
    
    cursorColumn = cursorColumn * 10;
    cursorRow = cursorRow * 25;
    //cursorRow = cursorRow * 10;
    //cursorRow = cursorRow * 10;
    
    
    var topSpace = document.getElementById('coding-box'+Coding.currentEditorNumber).offsetTop;
    topSpace += document.getElementById('editor-box'+Coding.currentEditorNumber).offsetTop;
    
    var leftSpace = document.getElementById('app-cont').offsetLeft;
    
    //alert(document.getElementById('coding-box'+Coding.currentEditorNumber).offsetTop);
    
    var cursorDraggerElement = document.getElementById("coding-cursor-dragger");
    
    //cursorDraggerElement.style.top = ((topSpace + cursorRow) + 35 ) + "px";
    //cursorDraggerElement.style.left = ((leftSpace + cursorColumn) - 11) + "px";
    
    */
    
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

//print
var print = function($message, $type, $withOutAnimation) {
    
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
            $message = '<span style="color:black;">' + $message + '</span>';
            break;
    }
    
    if(!$withOutAnimation){
        Coding.animationEngineAdd("document.getElementById('"+codingConsoleDiv+"').innerHTML += '"+$message+"'+'<br />';Coding.animationShortSleep();");
    }else{
        document.getElementById(codingConsoleDiv).innerHTML += $message + '<br />';
    }
    
};
var yaz = print;
var ekranaYaz = print;

/*
var ekranaYaz = function($message, $type) {
    print($message, $type);
};*/


Coding.cleanScreen = function(){
    
    //Coding.currentEditorNumber
    
    var codingConsoleDiv = "coding-game-box" + Coding.currentEditorNumber;
    document.getElementById(codingConsoleDiv).innerHTML = "";
  
    /*
    switch(Coding.currentModeID){
        case "0":
            //boş console modu
            var codingConsoleDiv = "coding-game-box" + Coding.currentEditorNumber;
            document.getElementById(codingConsoleDiv).innerHTML = "";
            break;
        case "1":
            //robot modu
            var codingConsoleDiv = "coding-game-box" + Coding.currentEditorNumber;
            document.getElementById(codingConsoleDiv).innerHTML = "";
            break;
        case "2":
            break;
           }
       */
    
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

var sleep = function($time){
    
    Coding.animationSleep($time);
    
};var bekle = sleep;

//rasgele bir sayı üret
var zarAt = function($maximum){
    
    //$maximum--;
  
    var mynum = parseInt(Math.random()*$maximum);
    
    mynum++;
    
    return mynum;
    
};

/*

changeScreenColor
changeScreenSize
changeFontSize
changeFontColor
print

*/

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
                
                <div id="coding-btngroup{{id}}" class="coding-btngroup">
                
                    <!-- buttons -->
                    <div id="coding-save-btn{{id}}" onclick="Coding.saveCode('{{id}}', '{{save-btn-path}}');" class = "coding-btn" style="display:{{save-btn-display}};" >Kaydet</div>

                    <div id="coding-reseta-btn{{id}}" onclick="Coding.resetCodeOnEditor('{{id}}');" class = "coding-btn" style="display:none;" >İlk Haline Çevir<!--Değişiklikleri Geri Al--></div>

                    <div id="coding-btn-alert{{id}}" class = "coding-btn" style="background-color:#F6F6F6;border:0px;display:none;font-family: roboto-lightitalic;color:#9B9B9B;" >Algoritma kaydedildi.</div>
                    
                    <div id="coding-saveas-btn{{id}}" onclick="storage.setItem('test1', 'veri kaydedildi.');" class = "coding-btn" style="display:none;" >Farklı Kaydet</div>
                    
                    <span id="coding-btn-linea{{id}}" style="display:none;">|</span>

                    <div id="coding-btn-back{{id}}" onclick="storage.setItem('test1', 'veri kaydedildi.');" class = "coding-btn" style="display:none;" >Sıfırla</div>

                    <div id="coding-btn-reback{{id}}" onclick="storage.setItem('test1', 'veri kaydedildi.');" class = "coding-btn" style="display:none;" >İleri al</div>

                    <!-- RUN BUTTON -->
                    <div id="coding-run-btn{{id}}" onclick="Coding.runCode('{{id}}');" class="coding-run-btn"><img src="../img/coding/coding-run-btn.png" width="60" height="60" /></div>

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



Coding.soundModel = `<audio id="key-sound">
          <source src="../sound/key.wav" type="audio/wav">
          Your browser does not support the audio element.
        </audio>
        
        <audio id="eat-sound">
          <source src="../sound/eat.wav" type="audio/wav">
        </audio>
        
        <audio id="hurt-sound">
          <source src="../sound/hurt.mp3" type="audio/mpeg">
        </audio>
        
        <audio id="attack-sound">
          <source src="../sound/bip.wav" type="audio/wav">
        </audio>

        <audio id="success-sound">
          <source src="../sound/success.mp3" type="audio/mpeg">
        </audio>
`;


function Sound() {};

Sound.keySoundElement = "";
Sound.hurtSoundElement = "";
Sound.eatSoundElement = "";
Sound.attackSoundElement = "";
Sound.successSoundElement = "";

Sound.SOUND_NAMES = {};
Sound.SOUND_NAMES.KEY = "key";
Sound.SOUND_NAMES.HURT = "hurt";
Sound.SOUND_NAMES.EAT = "eat";
Sound.SOUND_NAMES.ATTACK = "attack";
Sound.SOUND_NAMES.SUCCESS = "success";

//Başlangıçta çalışacak fonksiyon
Sound.init = function(){
    
    Sound.keySoundElement = document.getElementById("key-sound");
    Sound.hurtSoundElement = document.getElementById("hurt-sound");
    Sound.eatSoundElement = document.getElementById("eat-sound");
    Sound.attackSoundElement = document.getElementById("attack-sound");
    Sound.successSoundElement = document.getElementById("success-sound");
    
};

Sound.play = function($soundName) {
    
    switch($soundName){
        
        case "key":
            Sound.keySoundElement.play();
            break;
            
        case "hurt":
            Sound.hurtSoundElement.play();
            break;
            
        case "eat":
            Sound.eatSoundElement.play();
            break;
            
        case "bip":
            Sound.attackSoundElement.play();
            break;
            
        case "success":
            Sound.successSoundElement.play();
            break;
        
    }
    
};

//animasyon için kullanılan ses çıkarma
var sound = function($soundName, $withOutAnimation){
  
    if(!$withOutAnimation){
        
        Coding.animationEngineAdd("Sound.play('"+$soundName+"');Coding.animationShortSleep();");
        
    }else{
        
        Sound.play($soundName);
        
    }
    
};

var tamEkranGoster = function() {
  
    Coding.setOption(Coding.currentEditorNumber, "fullScreenMode", 1);
    
};
