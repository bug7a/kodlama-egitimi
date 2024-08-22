/* TODO: Aşağıdaki kod çalışmıyor. Programlamada hata yok gibi. nesnenin style left değeri güncellenmiyor. ama func düzgün çalışıyor

zemin.olustur(7)
zemin.nesneEkle("robot", 2)
zemin.nesneEkle("kilitli", 5)


robot.ilerle()

*/

var Coding1 = function(){};

Coding1.dontUseAnimationEngine = 0;
//Coding1.infoMode = 0; //0:manuel 1:show energy 2:key |||

Coding1.optionShowRobotEnergy = 0;
Coding1.optionShowKeyCount = 0;

Coding1.groundL1 = [];
Coding1.groundL2 = [];
Coding1.groundL3 = [];

Coding1.robotElementID = "";
Coding1.robotElement = "";

Coding1.robotPosition = 0;
Coding1.robotEnergy = 0;
Coding1.robotKeyCount = 0;
Coding1.robotDirection = "right";
Coding1.robotEnergySpending = 5;
Coding1.groundMaxPosition = 0;
Coding1.groundMinPosition = 0;

Coding1.htmlModel = `<div id="game-container{{id}}" style="position: relative;height: 200px;width:310px;zoom:1.0;">
                            
                        <div id="game-ground-l0-{{id}}" style="position:absolute;top:-25px;height: 100%; width: 100%;"></div>

                        <div id="game-ground-l1-{{id}}" style="position:absolute;top:-25px;height: 100%; width: 100%;"></div>

                        <div id="game-ground-l2-{{id}}" style="position:absolute;top:-25px;height: 100%; width: 100%;"></div>

                        <div id="game-ground-l3-{{id}}" style="position:absolute;top:-25px;height: 100%; width: 100%;"></div>
                    
                    </div>`;

Coding1.groundHtmlModel = `<div id="game-ground{{number}}-{{id}}"  style="position:absolute;left:70px;top:0px;"><img src="../img/coding1/ground-icon.png" width="100" height="200" />
<div class="item-mini-info" style="bottom:40px;margin-left:-16px;opacity:0.6;">{{info-text}}</div>
</div>`;

Coding1.itemHtmlModel = `<div id="game-item{{number}}-{{level}}-{{id}}" style="position:absolute;left:{{item-x}}px;top:0px;" class="{{item-class}}"><img src="../img/coding1/{{image-name}}" width="100" height="200" />
<div id="{{info-id}}" class="item-mini-info" style="bottom:{{info-bottom}};margin-left:{{info-margin}}">{{info-text}}</div></div>`;

Coding1.init = function(){
    
    //Coding.cleanScreen();
    Coding1.optionShowRobotEnergy = 0;
    Coding1.optionShowKeyCount = 0;
    
}

//verileri sıfırla
Coding1.resetAllVariables = function(){
    
    //Dizileri resetle
    Coding1.groundL1 = [];
    Coding1.groundL2 = [];
    Coding1.groundL3 = [];
    
    Coding1.robotElementID = "";
    Coding1.robotElement = "";
    
    Coding1.robotPosition = 0;
    Coding1.robotEnergy = 0;
    Coding1.robotKeyCount = 0;
    Coding1.robotDirection = "right";
    Coding1.robotEnergySpending = 5;
    Coding1.groundMaxPosition = 0;
    Coding1.groundMinPosition = 1;
    
};

Coding1.updateVariables = function(){
    
robot.konum = Coding1.robotPosition;
robot.enerji = Coding1.robotEnergy; //energyStatus
robot.anahtar = Coding1.robotKeyCount; //keyCount
    
if(Coding1.robotDirection == "right"){
    robot.yon = "sağ";
}else if(Coding1.robotDirection == "left"){
    robot.yon = "sol";
}
    
robot.enerjiHarcama = Coding1.robotEnergySpending;
zemin.ilkKonum = Coding1.groundMinPosition;
zemin.sonKonum = Coding1.groundMaxPosition;
    
};

//Bir pozisyonda objenin olup olmadığını kontrol et
Coding1.checkObject = function($position, $objectType){
    
    $position = Coding1.correctPosition($position);
    
    if($position != 0){
    
        var _level = "L1";
        var _arrayIndex = $position - 1;

        switch($objectType){
            case "finish":
                _level = "L1";
                break;
            case "locked":
                _level = "L2";
                break;
            case "key":
                _level = "L3";
                break;
            case "energy":
                _level = "L3";
                break;
               }

        if(Coding1["ground"+_level][_arrayIndex]){
           if(Coding1["ground"+_level][_arrayIndex].type == $objectType){
                return 1;
           }else{
               return 0;
           }
       }else{
           return 0;
       }
        
    }else{
        //print("Konum geçerli değil!", "alert");
        return 0;
    }
    
};

//robot oyunu ekranının kalıbını yapıştır.
Coding1.prepareScreenFirst = function($editorNumber){
    
    //Oyun modunu robot olarak düzenle
    Coding.currentModeID = "1";
    
    Coding1.resetAllVariables();
    
    var newHtmlModel = Coding1.htmlModel;
    
    do {
      
        newHtmlModel = newHtmlModel.replace("{{id}}", $editorNumber);
        
    }
    while (newHtmlModel.search("{{id}}") != -1);
    
    document.getElementById("coding-game-box" + $editorNumber).innerHTML = newHtmlModel;
    
};

Coding1.changeRobotImage = function($direction){
    
    //var robotElement = document.getElementById(Coding1.robotElementID);
    Coding1.robotElement.children[0].setAttribute( 'src', '../img/coding1/robot-'+$direction+'-icon.png' );
    
};

Coding1.moveRobotTo = function($direction){

    /*
    var _objectArrivedEvent = document.createEvent("Event");
    _objectArrivedEvent.initEvent("objectArrived",true,true);

    _objectArrivedEvent.objectID = $element.getAttribute('id');
    */
    
    $delayTime = 20;
    //$delayTime = 50;
    
    var _number = 0;
    var _startPX = 0;
    var _styleTitle = "";
    var _styleDirection = 1;
    
    console.log("moveRobotTo- yon: "+$direction+" - robotElementID:"+ Coding1.robotElementID);
    
    //var $element = document.getElementById(Coding1.robotElementID);
     var $element = Coding1.robotElement;
    
    //$element.style.left = $startX + "px";
    
    switch($direction){
        case "right":
            _startPX = parseInt($element.style.left.substr(0, $element.style.left.length - 2));
            _styleTitle = "left";
            _styleDirection = 1;
            break;
        case "left":
            _startPX = parseInt($element.style.left.substr(0, $element.style.left.length - 2));
            _styleTitle = "left";
            _styleDirection = -1;
            break;
    }
    
    //console.log("robot start x: " + _startPX);
    
    //$direction parametresi yanlış girilmiş
    if(_styleTitle != ""){

        var _myInterval = setInterval(function(){

            _number++;
            _number++;
            //_number++;
            //_number++;
            //_number++;

            //yapılması gereken işler
            $element.style[_styleTitle] = (_startPX + (_number * _styleDirection)) + "px";

            //animasyon sonlandı
            if(_number >= 70){
                
                //document.dispatchEvent(_objectArrivedEvent);
                Coding.animationEngineNext();
                
                clearInterval(_myInterval);

            }

        }, $delayTime);

    }

};

Coding1.isRobotExist = function(){
    
    if(Coding1.robotElementID){
        return 1;
    }else{
        print("Robot nesnesi mevcut değil.", "alert");
        return 0;
    }
    
};

Coding1.calculateNextPosition = function(){
        
        var _nextPosition = 0;
        
        if(Coding1.robotDirection == "right"){
            _nextPosition = Coding1.robotPosition + 1;
        }else if(Coding1.robotDirection == "left"){
            _nextPosition = Coding1.robotPosition - 1;
        }
        
        return _nextPosition;
        
    };

//Böyle bir position var mı?
Coding1.correctPosition = function($position){
    
    $position = parseInt($position);
  
    if($position >= Coding1.groundMinPosition && $position <= Coding1.groundMaxPosition){
        
        return $position;
        
    }else{
        
        return 0;
        
    }
    
};


//Bu olmasın öteki daha esnek. kullanıcı kendi programlasın bu alanı
Coding1.setInfoMode = function($modeNum){
    /*
    if(!$modeNum) $modeNum = 0;
    Coding1.infoMode = $modeNum;
    */
    
};

// -- TÜRKÇE KODLAR --

var ground = function(){};
var zemin = function(){};

zemin.ilkKonum = 0;
zemin.sonKonum = 0;

//Oyun ekranında istenilen sayıda platform oluştur ve dizileri düzenle.
ground.create = function($groundCount, $showNumbers){
    
    if($groundCount > 40) $groundCount = 40;
    
    //eğer seçili bir editör var ise devam et.
    if(Coding.currentEditorNumber){
        
        //Coding1.init();
        
        //Ekranı temizle ve devam et.
        Coding1.prepareScreenFirst(Coding.currentEditorNumber);
    
    //eğer daha önce ekleme yapılmış ise
    /*
    if(Coding1.groundL1.length > 0){
        //temizle ve yeniden ekleme yap
        document.getElementById("game-ground-l1-" + Coding.currentEditorNumber).innerHTML = "";
    }*/
        
        Coding1.groundMaxPosition = $groundCount;
        if ($groundCount > 0) Coding1.groundMinPosition = 1;
        Coding1.updateVariables();
    
        for(var i = 1; i <= $groundCount; i++) {

            var newHtmlModel = Coding1.groundHtmlModel;

            newHtmlModel = newHtmlModel.replace("{{number}}", i);
            newHtmlModel = newHtmlModel.replace("{{id}}", Coding.currentEditorNumber);
            
            if($showNumbers == 1) {
                newHtmlModel = newHtmlModel.replace("{{info-text}}", i);
            }else{
                newHtmlModel = newHtmlModel.replace("{{info-text}}", "");   
            }

            document.getElementById("game-ground-l0-" + Coding.currentEditorNumber).innerHTML += newHtmlModel;

            var newItemElement = document.getElementById("game-ground" + i + "-" + Coding.currentEditorNumber);

            newItemElement.style.left = ((i - 1) * 70) + "px";

            Coding1.groundL1.push({});
            Coding1.groundL2.push({});
            Coding1.groundL3.push({});
            
            //eklenen zemine göre genişliği yeniden düzenle
            document.getElementById("game-container" + Coding.currentEditorNumber).style.width = ((i * 70)+30) + "px";
            
        }
        
        var zoomNumber = 520 / (($groundCount * 70)+30);
        if(zoomNumber > 1.5) zoomNumber = 1.5;
        document.getElementById("game-container" + Coding.currentEditorNumber).style.zoom = zoomNumber;
        
        console.log("game zoom: " + zoomNumber);
        
    }
    
}; zemin.olustur = ground.create;

//zemin.nesneEkle bir nesnenin üzerine başkası eklenebiliyor.
ground.putObject = function($type, $position, $value, $label){
    
    console.log("putObject- type:"+$type+" position:"+$position+" value:"+$value);
    
    //eğer zemin oluşturulmuş ve istenen konum zeminde var ise
    if ($position >= Coding1.groundMinPosition && $position <= Coding1.groundMaxPosition && Coding1.groundMaxPosition > 0)
    if (Coding.currentEditorNumber){
        
    //if(Coding1.groundL1.length <= $position){ };
    
    //eğer daha önce ekleme yapılmış ise
    /*
    if(Coding1.groundL1.length > 0){
        //temizle ve yeniden ekleme yap
        document.getElementById("game-ground-l1-" + Coding.currentEditorNumber).innerHTML = "";
    }*/
        
        
        var newHtmlModel = Coding1.itemHtmlModel;
        var canIAddObject = 1;
        
        if(!$label) $label = "";
        
        var itemLevel = "l1";
        var itemImageName = "";
        var itemClass = "";
        var itemArrayNumber = $position - 1;
        var itemID = "";
        var itemType = "";
        
        var infoText = "";
        var infoBottom = "150px";
        var infoMargin  = "0px";
        
        switch($type){
                
            case "tree":
            case "ağaç":
                
                itemLevel = "l1";
                itemType = "tree";
                itemImageName = "tree-icon.png";
                itemClass = "default-class";
                itemID = "game-item" + $position + "-" + itemLevel + "-" + Coding.currentEditorNumber;
                
                if(Coding1.groundL1[itemArrayNumber].type){
                    canIAddObject = 0;
                }else{
                    Coding1.groundL1[itemArrayNumber].type = "tree";
                    Coding1.groundL1[itemArrayNumber].ID = itemID;
                }
                
                break;
                
            case "key":
            case "anahtar":
                
                itemLevel = "l3";
                itemType = "key";
                itemImageName = "key-icon.png";
                itemClass = "pulsate-bck";
                itemID = "game-item" + $position + "-" + itemLevel + "-" + Coding.currentEditorNumber;
                infoText = $label;
                infoBottom = "100px";
                infoMargin = "-10px;";

                if(Coding1.groundL3[itemArrayNumber].type){
                    canIAddObject = 0;
                }else{
                    
                    if(!$value) $value = 1;
                    
                    Coding1.groundL3[itemArrayNumber].type = "key";
                    Coding1.groundL3[itemArrayNumber].ID = itemID;
                    Coding1.groundL3[itemArrayNumber].value = $value;
                }
                
                break;
            
            case "energy":
            case "enerji":
                
                itemLevel = "l3";
                itemType = "energy";
                itemImageName = "energy-icon.png";
                itemClass = "pulsate-bck";
                itemID = "game-item" + $position + "-" + itemLevel + "-" + Coding.currentEditorNumber;
                infoText = $label;
                infoBottom = "100px";
                infoMargin = "-10px;";
                
                if(Coding1.groundL3[itemArrayNumber].type){
                    canIAddObject = 0;
                }else{
                    
                    if(!$value) $value = 40;
                    if(!infoText) infoText = "+" + $value;
                    
                    Coding1.groundL3[itemArrayNumber].type = "energy";
                    Coding1.groundL3[itemArrayNumber].ID = itemID;
                    Coding1.groundL3[itemArrayNumber].value = $value;
                }
                
                break;
                
            case "finish":
            case "hedef":
                
                itemLevel = "l1";
                itemType = "finish";
                itemImageName = "exit-icon.png";
                itemClass = "default-class";
                itemID = "game-item" + $position + "-" + itemLevel + "-" + Coding.currentEditorNumber;
                infoText = $label;
                infoBottom = "120px";

                if(Coding1.groundL1[itemArrayNumber].type){
                    canIAddObject = 0;
                }else{
                    Coding1.groundL1[itemArrayNumber].type = "finish";
                    Coding1.groundL1[itemArrayNumber].ID = itemID;
                }
                
                break;
            
            case "locked":
            case "kilitli":
                
                itemLevel = "l2";
                itemType = "locked";
                itemImageName = "gate-locked-icon.png";
                itemClass = "default-class";
                itemID = "game-item" + $position + "-" + itemLevel + "-" + Coding.currentEditorNumber;
                infoText = $label;
                infoBottom = "120px";
                
                if(Coding1.groundL2[itemArrayNumber].type){
                    canIAddObject = 0;
                }else{
                    Coding1.groundL2[itemArrayNumber].type = "locked";
                    Coding1.groundL2[itemArrayNumber].ID = itemID;
                }
                
                break;
                
            case "robot":
                
                itemLevel = "l2";
                itemType = "robot";
                itemImageName = "robot-right-icon.png";
                itemClass = "default-class";
                itemID = "game-item" + $position + "-" + itemLevel + "-" + Coding.currentEditorNumber;
                infoText = $label;
                infoBottom = "135px";
                infoMargin = "5px;";
                
                if(Coding1.groundL2[itemArrayNumber].type){
                    canIAddObject = 0;
                }else{
                
                    //bir ekrana iki robot eklenemez
                    if(Coding1.robotElementID != ""){
                        canIAddObject = 0;
                    }else{

                        if(!$value) $value = 100;

                        Coding1.groundL2[itemArrayNumber].type = "robot";
                        Coding1.groundL2[itemArrayNumber].ID = itemID;

                        Coding1.robotElementID = itemID;
                        Coding1.robotEnergy = $value;
                        //robotun ilk koordinatını kaydet
                        Coding1.robotPosition = parseInt($position);
                        Coding1.updateVariables();
                    }

                }

                
                
                break;
                
        }
        
        //eval("var currentItem = Coding1.ground" + itemLevel.toUpperCase() + "[" + itemArrayNumber + "];");
        
        if(canIAddObject == 1){
        
            newHtmlModel = newHtmlModel.replace("{{number}}", $position);
            newHtmlModel = newHtmlModel.replace("{{id}}", Coding.currentEditorNumber);
            newHtmlModel = newHtmlModel.replace("{{level}}", itemLevel);
            newHtmlModel = newHtmlModel.replace("{{image-name}}", itemImageName);
            newHtmlModel = newHtmlModel.replace("{{item-class}}", itemClass);
            newHtmlModel = newHtmlModel.replace("{{item-x}}", (itemArrayNumber * 70));
            newHtmlModel = newHtmlModel.replace("{{info-id}}", itemID + "info");
            newHtmlModel = newHtmlModel.replace("{{info-text}}", infoText);
            newHtmlModel = newHtmlModel.replace("{{info-bottom}}", infoBottom);
            newHtmlModel = newHtmlModel.replace("{{info-margin}}", infoMargin);

            document.getElementById("game-ground-" + itemLevel + "-" + Coding.currentEditorNumber).innerHTML += newHtmlModel;

            if($type == "robot"){
                
                Coding1.robotElement = document.getElementById(itemID);
                
                if(Coding1.optionShowRobotEnergy){
                    robot.setInfo("%" + Coding1.robotEnergy);
                }
                
                if(Coding1.optionShowKeyCount) {
                    editInfo("Anahtar: " + Coding1.robotKeyCount, 1);
                }
                
            }
            
            //console.log("putObject+ type:"+itemType+"("+itemID+") editorNumber:"+Coding.currentEditorNumber);
            
        }else{
            
            console.log("nesne eklenemedi");
            //print("nesne eklenemedi.", "alert");
            
        }

    }
    
}; zemin.nesneEkle = ground.putObject;

ground.removeObjectByID = function($elementID){
    
    console.log("removeObject- elementID:"+$elementID);
    
    if(Coding1.dontUseAnimationEngine == 0){
    
        Coding.animationEngineAdd('document.getElementById("'+$elementID+'").style.display = "none";Coding.animationShortSleep();');
        
    }else{
        
        document.getElementById($elementID).style.display = "none";
        
    }
    
}; zemin.nesneSil = ground.removeObjectByID;

var robot = function(){};

robot.konum = 0;
robot.enerji = 0;
robot.anahtar = 0;
robot.yon = "sağ";
robot.enerjiHarcama = 10;

//robot bir adım ilerlet
robot.move = function(){
    
    if(Coding1.isRobotExist()){
    
        var _nextPosition = robot.canMove();

        //Robotun yolu açık hareket edebilir.
        if(_nextPosition > 0){

            Coding1.robotPosition = _nextPosition;
            Coding1.robotEnergy -= Coding1.robotEnergySpending;
            Coding1.updateVariables();
            
            Coding.animationEngineAdd('Coding1.moveRobotTo("' + Coding1.robotDirection + '");');
            
            if(Coding1.optionShowRobotEnergy){
                robot.setInfo("%" + Coding1.robotEnergy);
            }
            
            //if(Coding1.infoMode == 1){
            //robot.setInfo("%"+Coding1.robotEnergy);
            //Coding.animationEngineAdd('robot.setInfo("%"+"'+Coding1.robotEnergy+'");');
            //}

        }else{

            if(_nextPosition == -4){
                print("Hareket edecek enerjim kalmadı.", "alert");
            }else{
                if(Coding1.robotDirection == "right"){
                    print("Sağa doğru daha fazla hareket edemiyorum.", "alert");
                }else if(Coding1.robotDirection == "left"){
                    print("Sola doğru daha fazla hareket edemiyorum.", "alert");    
                }
            }

        }
        
    }
    
};robot.ilerle = robot.move;

robot.setInfo = function($message){
    
    if(Coding1.isRobotExist()){
    
        try {
            if(!$message) $message = "";

            //var _infoElement = document.getElementById(Coding1.robotElementID + "info");

            if(Coding1.dontUseAnimationEngine == 0){

                Coding.animationEngineAdd('document.getElementById("'+Coding1.robotElementID+'" + "info").innerHTML = "'+$message+'";Coding.animationShortSleep();');

            }else{

                document.getElementById(Coding1.robotElementID + "info").innerHTML = $message;

            }
        } catch (e) {
            //Catch Statement
        }
        
    }
    
}; robot.bilgiDuzenle = robot.setInfo;

//robot ilerleyebilir mi?
robot.canMove = function(){
    
    var _nextPosition = Coding1.calculateNextPosition();
    
    if(_nextPosition < Coding1.groundMinPosition){
        return -1;
    }
    
    if(_nextPosition > Coding1.groundMaxPosition){
        return -2;
    }
    
    if(checkLocked(_nextPosition) == 1){
        return -3;
    }
    
    var _energy = Coding1.robotEnergy - Coding1.robotEnergySpending;
    
    if(_energy < 0){
        return -4;
    }
    
    return _nextPosition;
    
};

robot.turnBack = function(){
    
    if(Coding1.isRobotExist()){
    
    if(Coding1.robotDirection == "right"){
        
        robot.turnLeft();
        
    }else if(Coding1.robotDirection == "left"){
        
      robot.turnRight();
        
     }
        
    }
    
};robot.geriDon = robot.turnBack;

robot.turnRight = function(){
    
    if(Coding1.isRobotExist()){
    
    Coding1.robotDirection = "right";
    Coding1.updateVariables();
    
    if(Coding1.dontUseAnimationEngine == 0){
    
        Coding.animationSleep(250);
        Coding.animationEngineAdd('Coding1.changeRobotImage("right");Coding.animationShortSleep();');
        Coding.animationSleep(250);
        
    }else{
        
        Coding1.changeRobotImage("right");
        
    }
        
    }
    
};
robot.sagDon = robot.turnRight;

robot.turnLeft = function(){
    
    if(Coding1.isRobotExist()){
    
    Coding1.robotDirection = "left";
    Coding1.updateVariables();
    
    if(Coding1.dontUseAnimationEngine == 0){
    
        Coding.animationSleep(250);
        Coding.animationEngineAdd('Coding1.changeRobotImage("left");Coding.animationShortSleep();');
        Coding.animationSleep(250);
        
    }else{
        
        Coding1.changeRobotImage("left");
        
    }
    
    }
        
};
robot.solaDon = robot.turnLeft;

//Anahtarı al
robot.takeKey = function(){
    
    if(Coding1.isRobotExist()){
    
    if(checkKey(Coding1.robotPosition) == 1){
        
        sound("key");
        
        var _arrayIndex = Coding1.robotPosition-1;
        ground.removeObjectByID(Coding1.groundL3[_arrayIndex].ID);
        //değişkenlerden anahtarı temizle
        Coding1.groundL3[_arrayIndex] = {};
        
        Coding1.robotKeyCount += 1;
        Coding1.updateVariables();
        
        if(Coding1.optionShowKeyCount) {
            editInfo("Anahtar: " + Coding1.robotKeyCount);
        }
        
    }else{
        print('Almamı istediğiniz anahtarı bulamadım.', 'alert');
    }
        
    }
    
};robot.anahtarAl = robot.takeKey;

//use key
robot.useKey = function(){
    
    if(Coding1.isRobotExist()){
    
    var _nextPosition = Coding1.calculateNextPosition();
    
    if(checkLocked(_nextPosition) == 1){
        
        var _arrayIndex = _nextPosition - 1;
        
        ground.removeObjectByID(Coding1.groundL2[_arrayIndex].ID);
        Coding1.groundL2[_arrayIndex] = {};
        
        //anahtarlardan bir eksilt
        Coding1.robotKeyCount -= 1;
        Coding1.updateVariables();
        
        if(Coding1.optionShowKeyCount) {
            editInfo("Anahtar: " + Coding1.robotKeyCount);
        }
        
    }else{
        print('Açmak istediğiniz kilidi bulamadım.', 'alert');
    }
        
    }
    
};robot.anahtarKullan = robot.useKey;

robot.takeEnergy = function(){
    
    if(Coding1.isRobotExist()){
    
    if(checkEnergy(Coding1.robotPosition) == 1){
        
        sound("key");
        
        var _arrayIndex = Coding1.robotPosition-1;
        ground.removeObjectByID(Coding1.groundL3[_arrayIndex].ID);
        
        //robotun enerjisine ekle
        Coding1.robotEnergy += parseInt(Coding1.groundL3[_arrayIndex].value);
        if (Coding1.robotEnergy > 100) {
            print('Bataryam %100 doldu, +' + (Coding1.robotEnergy - 100) + ' enerjiyi alamadım.', 'alert');
            Coding1.robotEnergy = 100; 
        }
        Coding1.updateVariables();
        
        if(Coding1.optionShowRobotEnergy){
            robot.setInfo("%" + Coding1.robotEnergy);
        }
        
        //değişkenlerden anahtarı temizle
        Coding1.groundL3[_arrayIndex] = {};
        
    }else{
        print('Almamı istediğiniz enerjiyi bulamadım.', 'alert');
    }
        
    }
    
};robot.enerjiAl = robot.takeEnergy;


//konumda hedefi tespit et
checkFinish = function($position){
    return Coding1.checkObject($position, "finish");
    
};
var hedefAra = checkFinish;

//konumda hedefi tespit et
checkKey = function($position){
    return Coding1.checkObject($position, "key");
    
};
var anahtarAra = checkKey;

//hedefte enerji ara
checkEnergy = function($position){
    return Coding1.checkObject($position, "energy");
    
};
var enerjiAra = checkEnergy;

//hedefte kilit ara
checkLocked = function($position){
    return Coding1.checkObject($position, "locked");
    
};
var kilitAra = checkLocked;

