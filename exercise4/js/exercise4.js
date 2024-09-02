var Exercise = function(){};

Exercise.nextPage = "../pages/home.html";

Exercise.init = function() {
    
    Exercise.exID = "e4";
    Exercise.exPageID = parseInt(document.getElementById("ex-page-number").getAttribute("id-num"));
    Exercise.codeSavePath = "code-" + Exercise.exID + "-" + Exercise.exPageID;
    
    //if (Exercise.exPageID == 100) {
    //son sayfa
    //} else {
    var _nextPage = Exercise.exPageID + 1;
    Exercise.nextPage = Exercise.exID + "-" + _nextPage + ".htm";
    //}
    
    var htmlModel = Exercise.panelsHTMLModel.replace("{{link}}", Exercise.nextPage);
    document.body.innerHTML += htmlModel;
    
    //Exercise.showSuccessWindow();
    
};

Exercise.gotoYouTubeURL = function($url){
    
    //Eğer video izlmeye çalışır ise kodu kaydet.
    Coding.saveCode("1", Exercise.codeSavePath);
    
    App.gotoYouTubeURL($url);
    
}

// Ex4 için çözümü gösterme butonu
Exercise.showAnswer = function() {

    var answerElement = document.getElementById("answer-box");
    var answerButtonElement = document.getElementById("answer-button");
    if (answerElement.style.display == "none") {
        answerElement.style.display = "block";
        answerButtonElement.innerHTML = "ÇÖZÜM"

        var screenY = answerElement.offsetTop;
        screenY = App.screenRatio * screenY;

        //cod çalıştırıldığında div e yönel
        window.scrollTo({
          top: screenY,
          behavior: 'smooth',
        });


    } else {
        answerElement.style.display = "none";
        answerButtonElement.innerHTML = "ÇÖZÜMÜ GÖSTER"
    }
}

Exercise.createStandartEditor = function($editorID){
    
    // Parametreler:
    // $editorID, her zaman 1 sayfada tek ediyor olur.
    
    // $isEducation: eğitim: 1 veya soru: 0
    // eğitim için, kaydet yok, reset butonu aktif.
    // soru için, kaydet butonu olacak, sayfanın en altında "sıfırla" butonu olacak.
    
    if(!$editorID) $editorID = "1";
  
    //Coding.setOption($editorID, "isBasicUI", 1);
    Coding.setOption($editorID, "fullScreenMode", 0);
    Coding.setOption($editorID, "resetButtonEnabled", 0);
    Coding.setOption($editorID, "saveButtonEnabled", Exercise.codeSavePath);
    Coding.createNewEditorHTML($editorID);
    Coding.setScreenColor($editorID, "#40A5AF"); //4A90E2
    Coding.setScreenHeight($editorID, "340px");
    editor1 = ace.edit("editor" + $editorID);
    //editor1.setReadOnly(true);
    Coding.createNewEditor($editorID);
    
    //editor1.setTheme("ace/theme/solarized_dark");
    //myeditor.setTheme("ace/theme/chrome");
    //ace/theme/solarized_light
    //ace/theme/solarized_dark
    
    // Sadece her sayfaya sıfırla tuşu ekle en altta ortalanmış metin.
    //Exercise.insertResetCode();
    
    Coding.insertCodeToEditor($editorID, Coding.getCodeFromDivID("code-example1"), Exercise.codeSavePath);
    
    
    
};

Exercise.createAnswerEditor = function($editorID, $answerID) {

    // DENEME
    var _editor = ace.edit($editorID);
    
    _editor.setTheme("ace/theme/twilight");
    _editor.session.setMode("ace/mode/javascript");
    _editor.setOption("minLines", 8);
    _editor.setOption("maxLines", 500);
    _editor.renderer.setShowGutter(false);
    _editor.setReadOnly(true);
    _editor.setValue(Coding.getCodeFromDivID($answerID));
    _editor.gotoLine(1);
    //editoru zoomunu geri al
    document.getElementById($editorID).style.zoom = (1 / App.screenRatio);

    return _editor;

}

Exercise.resetCode = function() {
    
    
    // SIFIRLAMA İŞLEMİ:
                    // Kodu ana kaynaktan, editöre kopyala
                    //Coding.insertCodeToEditor("1", Coding.getCodeFromDivID("code-example1"));
                    // Eğer reset button açık ise, güncelle. (BU ALIŞTIRMADA KAPALI)
                    //Coding.resetButtonRefresh("1");
                    // Sıfırlanan kodu kaydet.
                    //Coding.saveCode("1", Exercise.codeSavePath);
    

    
    
    try {
        navigator.notification.confirm(
            'Yaptığınız tüm değişiklikleri temizlemek istiyor musunuz?', 
            function($buttonIndex){
                if($buttonIndex == 1){

                    // SIFIRLAMA İŞLEMİ:
                    // Kodu ana kaynaktan, editöre kopyala
                    //Coding.insertCodeToEditor("1", //Coding.getCodeFromDivID("code-example1"));
                    // Eğer reset button açık ise, güncelle. (BU ALIŞTIRMADA KAPALI)
                    // Sıfırlanan kodu kaydet.
                    //Coding.saveCode("1", Exercise.codeSavePath);

                    eval("var myeditor = editor1;");
                    myeditor.setValue(Coding.getCodeFromDivID("code-example1"));
                    myeditor.gotoLine(1);
                    Coding.saveCode("1", Exercise.codeSavePath);
                    
                }else{

                }
            },            
            'Uyarı',           
            ['Temizle','İptal']
        );
    } catch (e) {
        alert("Bu platform, sıfırlama işlemini desteklemiyor.");
        
    }
    
};

Exercise.insertResetCode = function() {
    
    let divPageContent = document.getElementById("app-cont");
    
    let divResetButton = document.createElement("DIV");
    divResetButton.setAttribute("class", "btn-reset-code");
    divResetButton.setAttribute("onclick", "Exercise.resetCode();");
    
    divResetButton.innerHTML = "Sıfırla";
    divPageContent.appendChild(divResetButton);
    
};

Exercise.success = function() {
    
    setTimeout(function(){  
        Exercise.showSuccessWindow();
        App.setPageScore(Exercise.exID + "-" + Exercise.exPageID, 1);
        Coding.saveCode("1", Exercise.codeSavePath);
    }, 600);
    
}

Exercise.finished = function() {
    
    setTimeout(function(){  
        Exercise.showFinishedWindow();
        App.setPageScore(Exercise.exID + "-" + Exercise.exPageID, 1);
        Coding.saveCode("1", Exercise.codeSavePath);
    }, 600);
    
}

Exercise.showSuccessWindow = function() {
    
    Sound.play("success");
    document.getElementById("window-background").style.display = "flex";
    document.getElementById("success-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 10);
    
};

Exercise.showFinishedWindow = function() {
    
    Sound.play("success");
    document.getElementById("window-background").style.display = "flex";
    document.getElementById("finished-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 10);
    
};

Exercise.showFailWindow = function() {
    
    document.getElementById("window-background").style.display = "flex";
    document.getElementById("fail-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 10);
    
};

Exercise.closeWindow = function() {
    
    document.getElementById("window-background").style.display = "none";
    document.getElementById("success-window").style.display = "none";
    document.getElementById("fail-window").style.display = "none";
    document.body.style.overflowY = "scroll";
    
};

Exercise.openTip = function($tipID) {
    
    document.getElementById($tipID + "-btn").style.display = "none";
    document.getElementById($tipID + "-text").style.display = "block";
    
}

Exercise.panelsHTMLModel = `
<div id="window-background" class="colored-background" style="position:fixed;display:none;justify-content:center;align-items:center;height:100%;width:600px;top:0px;background-color:rgba(0, 0, 0, 0.9);z-index:1001;">
                
        <div id="success-window" style="position:relative;display:none;">
            <img src="../img/exercisex/success-info.webp" width="348" />
            <a href="{{link}}"><div style="position:absolute;top:162px;left:100px;width:140px;height:40px;"></div></a>
            <div onclick="Exercise.closeWindow();" style="position:absolute;top:10px;right:10px;width:60px;height:60px;"></div>
        </div>

        <div id="finished-window" style="position:relative;display:none;">
            <img src="../img/exercisex/last-info.webp" width="348" />
            <!--<a href="../pages/exercises.htm"><div style="position:absolute;top:162px;left:100px;width:140px;height:40px;"></div></a>-->
            <a href="../pages/exercises.htm"><div onclick="Exercise.closeWindow();" style="position:absolute;top:10px;right:10px;width:60px;height:60px;"></div></a>
        </div>

        <div id="fail-window" style="position:relative;display:none;">
            <img src="../img/exercisex/fail-info.webp" width="348" />
            <div onclick="Exercise.closeWindow();" style="position:absolute;top:162px;left:120px;width:120px;height:40px;"></div>
        </div>

</div>`;