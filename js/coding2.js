

var Coding2 = function(){};

Coding2.dontUseAnimationEngine = 0;

Coding2.maxX = 0;
Coding2.maxY = 0;

Coding2.itemColorList = {};

Coding2.htmlModel = `<div id="mycanvas{{id}}" width="600" height="{{height}}" style="position:relative;height: 200px;width:310px;"></div>`;
Coding2.itemModel = `<div id="mycanvas{{id}}-{{x}}-{{y}}" class="draw-area-item" style="top:{{top}}px;left:{{left}}px;"></div>`;

Coding2.init = function($showNumbers){
    
    //Oyun modunu kare boyama olarak düzenle
    Coding.currentModeID = "2";
    
    //eğer seçili bir editör var ise devam et.
    if(Coding.currentEditorNumber){
        
        Coding2.cleanScreen();
        
    }
}

Coding2.prepareScreenFirst = function($editorNumber){
    
    //Coding1.resetAllVariables();
    
    var newHtmlModel = Coding2.htmlModel;
    
    var screenHeight = document.getElementById("coding-screen"+$editorNumber).style.height;

    newHtmlModel = newHtmlModel.replace("{{id}}", $editorNumber);
    newHtmlModel = newHtmlModel.replace("{{height}}", screenHeight);
    
    document.getElementById("coding-game-box" + $editorNumber).innerHTML = newHtmlModel;
    
};

Coding2.setItemColorList = function($x, $y, $rgb){
    
    Coding2.itemColorList["mycanvas"+Coding.currentEditorNumber+"-" + $x + "-" + $y] = $rgb;
    
}

Coding2.getItemColorList = function($x, $y){
    
    console.log(Coding2.itemColorList["mycanvas"+Coding.currentEditorNumber+"-" + $x + "-" + $y]);
    
    return Coding2.itemColorList["mycanvas"+Coding.currentEditorNumber+"-" + $x + "-" + $y];
    
}

Coding2.createScreen = function($width, $height){
    
        var codingContID = "coding-game-box" + Coding.currentEditorNumber;
        var codingContElement = document.getElementById(codingContID);
        
        //Eğer daha önce tahta oluşturulmamış ise
        if(codingContElement.innerHTML == ""){
        
            //Ekranı temizle ve devam et.
            Coding2.prepareScreenFirst(Coding.currentEditorNumber);

            var canvasElement = document.getElementById("mycanvas"+Coding.currentEditorNumber);

            var screenHeight;

            if($height) { 
                Coding2.maxY = $height; 
            } else { 
                screenHeight = document.getElementById("coding-screen"+Coding.currentEditorNumber).style.height;
                screenHeight = parseInt(screenHeight.substr(0, screenHeight.length - 2));

                Coding2.maxY = parseInt(screenHeight / 10);
            }

            if($width) { 
                Coding2.maxX = $width; 
            } else { 
                Coding2.maxX = 60; 
            }

            var innerHTML = "";

            for(var i = 0; i<= Coding2.maxX; i++){
                for(var k = 0; k <= Coding2.maxY; k++){

                    var newItemModel = Coding2.itemModel;

                    newItemModel = newItemModel.replace("{{id}}", Coding.currentEditorNumber);
                    newItemModel = newItemModel.replace("{{x}}", i);
                    newItemModel = newItemModel.replace("{{y}}", k);
                    newItemModel = newItemModel.replace("{{left}}", i*10);
                    newItemModel = newItemModel.replace("{{top}}", k*10);
                    
                    Coding2.setItemColorList(i, k, "#FFFFFF");

                    innerHTML += newItemModel;

                }
            }

            canvasElement.innerHTML = innerHTML;
            canvasElement.style.width = (Coding2.maxX * 10) + "px";
            canvasElement.style.height = (Coding2.maxY * 10) + "px";
            
            canvasElement.setAttribute("var-maxx", Coding2.maxX);
            canvasElement.setAttribute("var-maxy", Coding2.maxY);

            // x koordinatı title sayıları oluştur
            for(var i = 1; i <= Coding2.maxX; i++){

                var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+i+"-0");
                newItemElement.style.backgroundColor = "#141414";
                Coding2.setItemColorList(i, 0, "#141414");
                newItemElement.style.color = "#FFFFFF";
                newItemElement.innerHTML = i;
                
            }

            // y koordinatı title sayıları oluştur
            for(var k = 1; k <= Coding2.maxY; k++){
                
                var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-0-"+k);
                newItemElement.style.backgroundColor = "#141414";
                Coding2.setItemColorList(0, k, "#141414");
                newItemElement.style.color = "#FFFFFF";
                newItemElement.innerHTML = k;
                
            }
        
        }
    
}; var kareleriOlustur = Coding2.createScreen;

Coding2.cleanScreen = function(){
    
    var codingContID = "coding-game-box" + Coding.currentEditorNumber;
    var codingContElement = document.getElementById(codingContID);
    
    if(codingContElement.innerHTML != ""){
        
        var canvasElement = document.getElementById("mycanvas"+Coding.currentEditorNumber);
        
        Coding2.maxX = parseInt(canvasElement.getAttribute("var-maxx"));
        Coding2.maxY = parseInt(canvasElement.getAttribute("var-maxy"));

        //clean scene
        for(var i = 1; i<= Coding2.maxX; i++){
            for(var k = 1; k <= Coding2.maxY; k++){

                var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+i+"-"+k);
                newItemElement.style.backgroundColor = "#FFFFFF";
                Coding2.setItemColorList(i, k, "#FFFFFF");

            }
        }
        
    }
    
}

Coding2.closeAnimation = function() {
    
    Coding2.dontUseAnimationEngine = 1;
    
}; 
var animasyonKapat = Coding2.closeAnimation;

Coding2.openAnimation = function() {
    
    Coding2.dontUseAnimationEngine = 0;
    
}; 
var animasyonAc = Coding2.openAnimation;

Coding2.fillItem = function($x, $y, $color){
    
    //if (Coding2.maxX != 0 || Coding2.maxY != 0) {

        var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+$x+"-"+$y);
        newItemElement.style.backgroundColor = $color;
        
    //}
    
}

var kareBoya = function($x, $y, $color){
    
    if($color != null) {
        $color = Coding2.getColorRGB($color);
    }else{
        $color = "#000000";
    }
    
    if($x < 0) $x = 1;
    if($x > Coding2.maxX) $x = Coding2.maxX;
    if($y < 0) $y = 1;
    if($y > Coding2.maxY) $y = Coding2.maxY;
    
    if(Coding2.dontUseAnimationEngine == 1){
        
        Coding2.fillItem($x, $y, $color);
        Coding2.setItemColorList($x, $y, $color);
        
    }else{
        
        Coding.animationEngineAdd('Coding2.fillItem('+$x+', '+$y+', "'+$color+'");Coding.animationShortSleep();');
        Coding2.setItemColorList($x, $y, $color);
        
    }
    
};

var kareTemizle = function($x, $y){
    
    kareBoya($x, $y, "beyaz");
    
};

var kareNeRenk = function($x, $y){
    
    var colorName = "#FFFFFF";
    
    //var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+$x+"-"+$y);
    //colorHex = rgb2hex(newItemElement.style.backgroundColor);
    //colorName = Coding2.getColorName(colorHex.toUpperCase());
    
    colorName = Coding2.getColorName(Coding2.getItemColorList($x, $y));
    
    console.log(colorName);
    
    return colorName;
    
};


var tumKareleriTemizle = function(){
    
    Coding2.cleanScreen();
    
};

var cizgiSakla = function(){
    
    var codingContID = "coding-game-box" + Coding.currentEditorNumber;
    var codingContElement = document.getElementById(codingContID);
    
    if(codingContElement.innerHTML != ""){
        
        var canvasElement = document.getElementById("mycanvas"+Coding.currentEditorNumber);
        
        Coding2.maxX = parseInt(canvasElement.getAttribute("var-maxx"));
        Coding2.maxY = parseInt(canvasElement.getAttribute("var-maxy"));

        //clean scene
        for(var i = 0; i<= Coding2.maxX; i++){
            for(var k = 0; k <= Coding2.maxY; k++){

                var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+i+"-"+k);
                newItemElement.style.border = "0px";
                //Coding2.setItemColorList(i, k, "#FFFFFF");

            }
        }
        
    }
    
};

var cizgiGoster = function(){
    
};

var koordinatSakla = function(){
    
    var canvasElement = document.getElementById("mycanvas"+Coding.currentEditorNumber);
    
    canvasElement.style.marginLeft = "-20px";
    canvasElement.style.marginTop = "-20px";
    
    for(var i = 0; i <= Coding2.maxX; i++){

        var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+i+"-0");
        newItemElement.style.display = "none";

    }

    for(var k = 1; k <= Coding2.maxY; k++){

        var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-0-"+k);
        newItemElement.style.display = "none";

    }
    
};

var koordinatGoster = function(){
    
    var canvasElement = document.getElementById("mycanvas"+Coding.currentEditorNumber);
    
    canvasElement.style.marginLeft = "0px";
    canvasElement.style.marginTop = "0px";
    
    for(var i = 0; i <= Coding2.maxX; i++){

        var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-"+i+"-0");
        newItemElement.style.display = "block";

    }

    for(var k = 1; k <= Coding2.maxY; k++){

        var newItemElement = document.getElementById("mycanvas"+Coding.currentEditorNumber+"-0-"+k);
        newItemElement.style.display = "block";

    }
    
};

var buyut = function($zoom) {
    
    document.getElementById("mycanvas"+Coding.currentEditorNumber).style.zoom = $zoom;
    
};

Coding2.getColorName = function($rgb){
    
    var colorName = "";
    
    switch($rgb){
            
        case "#FFFFFF":
        case 0:
            
            colorName = "beyaz";
            
        break;
            
        case "#000000":
        case 1:
            
            colorName = "siyah";
        
        break;
            
        case "#D0021B":
        case 2:
            
            colorName = "kırmızı";
            
        break;
            
        case "#417505":
        case 3:
            
            colorName = "yeşil";
        
        break;
        
        case "#4A90E2":
        case 4:
            
            colorName = "mavi";
        
        break;
            
        case "#F8E71C":
        case 5:
            
            colorName = "sarı";
        
        break;
            
        case "#E63C7E":
        case 6:
            
            colorName = "pembe";
        
        break;
            
        case "#004678":
        case 7:
            
            colorName = "lacivert";
        
        break;
            
        case "#AA5E9A":
        case 8:
            
            colorName = "mor";
        
        break;
            
        case "#B7B7B7":
        case 9:
            
            colorName = "gri";
        
        break;
            
        case "#8B572A":
        case 10:
            
            colorName = "kahverengi";
        
        break;
            
        case "#EE7553":
        case 11:
            
            colorName = "turuncu";
        
        break;
            
        default:
            
        colorName = "beyaz";
            
        break;
        
    }
    
    return colorName;
    
}

Coding2.getColorRGB = function($color){
    
    var colorCode = "";
    
    switch($color){
            
        case "Beyaz":
        case "beyaz":
        case 0:
            
            colorCode = "#FFFFFF";
            
        break;
            
        case "Siyah":
        case "siyah":
        case 1:
            
            colorCode = "#000000";
        
        break;
            
        case "Kırmızı":
        case "kırmızı":
        case 2:
            
            colorCode = "#D0021B";
            
        break;
            
        case "Yeşil":
        case "yeşil":
        case 3:
            
            colorCode = "#417505";
        
        break;
        
        case "Mavi":
        case "mavi":
        case 4:
            
            colorCode = "#4A90E2";
        
        break;
            
        case "Sarı":
        case "sarı":
        case 5:
            
            colorCode = "#F8E71C";
        
        break;
            
        case "Pembe":
        case "pembe":
        case 6:
            
            colorCode = "#E63C7E";
        
        break;
            
        case "Lacivert":
        case "lacivert":
        case 7:
            
            colorCode = "#004678";
        
        break;
            
        case "Mor":
        case "mor":
        case 8:
            
            colorCode = "#AA5E9A";
        
        break;
            
        case "Gri":
        case "gri":
        case 9:
            
            colorCode = "#B7B7B7";
        
        break;
            
        case "Kahverengi":
        case "kahverengi":
        case 10:
            
            colorCode = "#8B572A";
        
        break;
            
        case "Turuncu":
        case "turuncu":
        case 11:
            
            colorCode = "#EE7553";
        
        break;
            
        default:
            
        colorCode = "#FFFFFF";
        break;
        
    }
    
    return colorCode;
    
};