var Exercise1 = function(){};

Exercise1.nextPage = "../pages/home.html";

Exercise1.init = function() {
    
    Exercise1.exID = "e1";
    Exercise1.exPageID = parseInt(document.getElementById("ex-page-number").innerHTML);
    Exercise1.codeSavePath = "code-" + Exercise1.exID + "-" + Exercise1.exPageID;
    
    //if (Exercise1.exPageID == 100) {
    //son sayfa
    //} else {
    var _nextPage = Exercise1.exPageID + 1;
    Exercise1.nextPage = Exercise1.exID + "-" + _nextPage + ".htm";
    //}
    
    var htmlModel = Exercise1.panelsHTMLModel.replace("{{link}}", Exercise1.nextPage);
    document.body.innerHTML += htmlModel;
    
    //Exercise1.showSuccessWindow();
    
};

Exercise1.gotoYouTubeURL = function($url){
    
    //Eğer video izlmeye çalışır ise kodu kaydet.
    Coding.saveCode("1", Exercise1.codeSavePath);
    
    App.gotoYouTubeURL($url);
    
}

Exercise1.createStandartEditor = function($editorID){
    
    if(!$editorID) $editorID = "1";
  
    //Coding.setOption($editorID, "isBasicUI", 1);
    Coding.setOption($editorID, "fullScreenMode", 1);
    Coding.setOption($editorID, "resetButtonEnabled", 0);
    Coding.setOption($editorID, "saveButtonEnabled", Exercise1.codeSavePath);
    Coding.createNewEditorHTML($editorID);
    Coding.setScreenColor($editorID, "#EE7553");
    Coding.setScreenHeight($editorID, "340px");
    editor1 = ace.edit("editor" + $editorID);
    //editor1.setReadOnly(true);
    Coding.createNewEditor($editorID);
    
    Coding.insertCodeToEditor($editorID, Coding.getCodeFromDivID("code-example1"), Exercise1.codeSavePath);
    
};

Exercise1.showSuccessWindow = function() {
    
    Sound.play("success");
    document.getElementById("window-background").style.display = "flex";
    document.getElementById("success-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 1510);
    
};

Exercise1.showFinishedWindow = function() {
    
    Sound.play("success");
    document.getElementById("window-background").style.display = "flex";
    document.getElementById("finished-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 1510);
    
};

Exercise1.showFailWindow = function() {
    
    document.getElementById("window-background").style.display = "flex";
    document.getElementById("fail-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 1510);
    
};

Exercise1.closeWindow = function() {
    
    document.getElementById("window-background").style.display = "none";
    document.getElementById("success-window").style.display = "none";
    document.getElementById("fail-window").style.display = "none";
    document.body.style.overflowY = "scroll";
    
};

Exercise1.openTip = function($tipID) {
    
    document.getElementById($tipID + "-btn").style.display = "none";
    document.getElementById($tipID + "-text").style.display = "block";
    
}

Exercise1.panelsHTMLModel = `
<div id="window-background" class="colored-background" style="position:fixed;display:none;justify-content:center;align-items:center;height:100%;width:600px;top:0px;background-color:rgba(0, 0, 0, 0.9);z-index:1001;">
                
        <div id="success-window" style="position:relative;display:none;">
            <img src="../img/exercise1/success-info.png" width="348" />
            <a href="{{link}}"><div style="position:absolute;top:162px;left:100px;width:140px;height:40px;"></div></a>
            <div onclick="Exercise1.closeWindow();" style="position:absolute;top:10px;right:10px;width:60px;height:60px;"></div>
        </div>

        <div id="finished-window" style="position:relative;display:none;">
            <img src="../img/exercise1/last-info.png" width="348" />
            <!--<a href="../pages/exercises.htm"><div style="position:absolute;top:162px;left:100px;width:140px;height:40px;"></div></a>-->
            <a href="../pages/exercises.htm"><div onclick="Exercise1.closeWindow();" style="position:absolute;top:10px;right:10px;width:60px;height:60px;"></div></a>
        </div>

        <div id="fail-window" style="position:relative;display:none;">
            <img src="../img/exercise1/fail-info.png" width="348" />
            <div onclick="Exercise1.closeWindow();" style="position:absolute;top:162px;left:120px;width:120px;height:40px;"></div>
        </div>

</div>`;