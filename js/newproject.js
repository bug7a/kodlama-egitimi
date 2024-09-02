var NewProject = function() {};
            
NewProject.projectCount = 0;
NewProject.projectList = [];
NewProject.projectListItemModel = {"ID":"0", "editorVersion":"1", "type":"c1v2", "title":"Project name", "createdDateStr":"", "openedDateInt":0, "p1":"", "p2":"", "p3":"" };

NewProject.statusEvent = document.createEvent("Event");

NewProject.init = function() {

    NewProject.loadData();
    
    var htmlModel = NewProject.dialogHTMLModel;
    document.body.innerHTML += htmlModel;

};

NewProject.reset = function() {
    
    NewProject.projectCount = 0;
    NewProject.projectList = [];
    NewProject.saveData();
    
}

NewProject.loadData = function() {

    NewProject.projectCount = JSON.parse(storage.getItem("project-count"));
    NewProject.projectList = JSON.parse(storage.getItem("project-list"));

    if(!NewProject.projectCount) NewProject.projectCount = 0;
    if(!NewProject.projectList) NewProject.projectList = [];

};

NewProject.saveData = function() {

    storage.setItem("project-count", JSON.stringify(NewProject.projectCount));
    storage.setItem("project-list", JSON.stringify(NewProject.projectList));

};

NewProject.sortData = function() {
  
    //NewProject.projectList.sort();
    NewProject.projectList.sort(function(a, b) {
    return parseFloat(b.openedDateInt) - parseFloat(a.openedDateInt);
});
    
};

NewProject.openNewDialog = function($editorVersion, $type) {
    
    NewProject.projectListItemModel.editorVersion = $editorVersion;
    NewProject.projectListItemModel.type = $type;
    
    document.getElementById("newproject-window-background").style.display = "flex";
    document.getElementById("newproject-new-dialog-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 10);

};

NewProject.openDeleteDialog = function($projectID) {
    
    /*
    NewProject.projectListItemModel.editorVersion = $editorVersion;
    NewProject.projectListItemModel.type = $type;
    */
    
    var _projectIndex = -1;
    
    for (var i = 0; i <= NewProject.projectList.length - 1; i++) {
        if (NewProject.projectList[i].ID == $projectID) {
            _projectIndex = i;
            break;
        }
    }
    
    document.getElementById("deleteproject-dialog-ok-btn").setAttribute("deleted-project-id", $projectID);
    document.getElementById("deleted-project-name").innerHTML = NewProject.projectList[_projectIndex].title;
    
    document.getElementById("newproject-window-background").style.display = "flex";
    document.getElementById("newproject-delete-dialog-window").style.display = "block";
    setTimeout(function(){ document.body.style.overflowY = "hidden"; }, 10);

};

NewProject.closeNewDialog = function() {
    
    document.getElementById("newproject-window-background").style.display = "none";
    document.getElementById("newproject-new-dialog-window").style.display = "none";
    document.getElementById("project-name-text").value = "";
    document.body.style.overflowY = "scroll";

};

NewProject.closeDeleteDialog = function() {
    
    document.getElementById("newproject-window-background").style.display = "none";
    document.getElementById("newproject-delete-dialog-window").style.display = "none";
    document.body.style.overflowY = "scroll";

};

NewProject.createNew = function($projectName, $editorVersion, $type) {
    
        var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    
        //önceden işlenmiş olmalı
        if($editorVersion) { NewProject.projectListItemModel.editorVersion = $editorVersion; }
        if($type) { NewProject.projectListItemModel.type = $type; }
    
        NewProject.projectListItemModel.title = $projectName;
        NewProject.projectListItemModel.openedDateInt = Date.now();
    
        var newDate = new Date();
        var dateStr = newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear();
        NewProject.projectListItemModel.createdDateStr = dateStr;
    
        NewProject.projectCount++;
        NewProject.projectListItemModel.ID = NewProject.projectCount;
        NewProject.projectList.unshift(NewProject.projectListItemModel);
        NewProject.saveData();
    
        return NewProject.projectListItemModel.ID;

};

NewProject.deleteProject = function($projectID) {
    
    var _projectIndex = -1;
    
    for (var i = 0; i <= NewProject.projectList.length - 1; i++) {
        if (NewProject.projectList[i].ID == $projectID) {
            _projectIndex = i;
            break;
        }
    }
    
    if(_projectIndex >= 0) {
        
        storage.removeItem("project-" + NewProject.projectList[_projectIndex].ID);
        NewProject.projectList.splice(_projectIndex, 1);
        NewProject.saveData();
        
        NewProject.statusEvent.initEvent("onProjectDeleted",true,true);
        NewProject.statusEvent.projectID = $projectID;
        document.dispatchEvent(NewProject.statusEvent);   

    }
    
}

NewProject.openProject = function($projectID){
    
    var _projectIndex = -1;
    
    for (var i = 0; i <= NewProject.projectList.length - 1; i++) {
        if (NewProject.projectList[i].ID == $projectID) {
            _projectIndex = i;
            break;
        }
    }
    
    if (_projectIndex != -1) {
        
        var _projectType = NewProject.projectList[_projectIndex].type;
        storage.setItem("selected-project-item", JSON.stringify(NewProject.projectList[_projectIndex]));
        
        NewProject.projectList[i].openedDateInt = Date.now();
        NewProject.sortData();
        NewProject.saveData();
        
        storage.setItem("selected-samples-page-id", "2");
        window.location.href = '../samples/aproject-' + _projectType + '.htm';
        
    }

}

NewProject.dialogInputOnChange = function($value) {
    
    //TODO: girilebilecek karakterler listesi olmalı ve onlar kontrol edilmeli. ilk karakter boşluk olmamalı
    
    //alert(document.getElementById("project-name-text").value);
    
    //document.getElementById("project-name-text").value = $value.replace();
    
    var format = `[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]`;
    
    //ilk karakter boşluk olamaz
    if($value == " ") $value = "";
    
    for (var i = 0; i <= format.length - 1; i++) {
        $value = $value.replace(format.charAt(i), "");
    }
    
    document.getElementById("project-name-text").value = $value;
    
    if($value.length >= 3) {
        
        document.getElementById("newproject-dialog-ok-btn").style.opacity = 0;
        
    }else{
        document.getElementById("newproject-dialog-ok-btn").style.opacity = 0.8;
    }
    
    
}

NewProject.dialogOkBtnClicked = function(){
    
    var _value = document.getElementById("project-name-text").value;
    
    if(_value.length >= 3) {
    
        NewProject.openProject(NewProject.createNew(_value));
        NewProject.closeNewDialog();
        
    }
    
}

NewProject.dialogHTMLModel = `
<div id="newproject-window-background" class="colored-background" style="position:fixed;display:none;justify-content:center;align-items:center;height:100%;width:600px;top:0px;background-color:rgba(0, 0, 0, 0.9);z-index:1001;">

        <div id="newproject-new-dialog-window" style="position:relative;display:none;">

            <img src="../img/newproject/new-project-win.png" width="348" />

            <div style="position:absolute;top:74px;left:29px;"><input oninput="NewProject.dialogInputOnChange(this.value)" type="text" name="project-name-text" id="project-name-text" class="transparent-input" minlength="3" maxlength="22" value="" style="width:290px;height:36px;" pattern="[A-Za-z0-9]" autofocus></div>

            <div id="newproject-dialog-ok-btn" onclick="NewProject.dialogOkBtnClicked();" style="position:absolute;top:162px;left:220px;width:109px;height:40px;background-color:#F6F6F6;opacity:0.8;"></div>

            <div id="newproject-dialog-cancel-btn" onclick="NewProject.closeNewDialog();"  style="position:absolute;top:162px;left:110px;width:105px;height:40px;"></div>

        </div>

        <div id="newproject-delete-dialog-window" style="position:relative;display:none;">

            <img src="../img/newproject/delete-project-win.png" width="348" />

            <div id="deleted-project-alert" style="position:absolute;display:block;height:67px;width:280px;top:88px;left:34px;font-familiy:roboto;text-align: center;font-size:16px;">"<span id="deleted-project-name"></span>" projesini silmek istiyor musunuz?</div>

            <div id="deleteproject-dialog-ok-btn" deleted-project-id="0" onclick="NewProject.deleteProject(parseInt(this.getAttribute('deleted-project-id')));NewProject.closeDeleteDialog();" style="position:absolute;top:162px;left:220px;width:109px;height:40px;background-color:#F6F6F6;opacity:0;"></div>

            <div id="deleteproject-dialog-cancel-btn" onclick="NewProject.closeDeleteDialog();"  style="position:absolute;top:162px;left:110px;width:105px;height:40px;"></div>

        </div>

</div>`;