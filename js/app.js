
var storage = window.localStorage;
//var value = storage.getItem(key); // Pass a key name to get its value.
//storage.setItem(key, value) // Pass a key name and its value to add or update that key.
//storage.removeItem(key) // Pass a key name to remove that key from storage.

var App = {};

App.os = "web"; //android, web
App.screenRatio = 1;

//cordova fonksiyonları
App.cordovaInitialize = function() {
        
    document.addEventListener('deviceready', App.cordovaOnDeviceReady.bind(this), false);    
        
    if(App.mobileAndTabletCheck()){
        
        //mobile
        
    }else{
        
        window.onload = App.init;
        //window.addEventListener("load", App.init, false);
    }
        
};
    
//cordova fonksiyonları
App.cordovaOnDeviceReady = function() {
    App.cordovaReceivedEvent('deviceready');
};
    
//cordova fonksiyonları
App.cordovaReceivedEvent = function(id) {
    App.init(); //Cihaz hazır olduğunda çalıştıralacak bizim yazdığımız ilk fonksiyon.
};

    //Uygulama açıldığında çalışacak ilk fonksiyon
    App.init = function(){

    // ###UYGULAMA İÇİ SATIN ALMA###Basic usage, register callbacks first 

        
    
    // ###UYGULAMA İÇİ SATIN ALMA END###
    
    Page.init();
    
};

App.checkConnection = function() {
    
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Bilinmiyor';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'Kablosuz internet';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.CELL]     = 'Telefon';
    states[Connection.NONE]     = 'Ağ bağlantısı yok';
    
    /*
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    */

    return states[networkState];
}


//Mobile phone check
App.mobileAndTabletCheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    
    var _hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
    
    function _hex(x) {
        return isNaN(x) ? "00" : _hexDigits[(x - x % 16) / 16] + _hexDigits[x % 16];
    }
    
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    
    return "#" + _hex(rgb[1]) + _hex(rgb[2]) + _hex(rgb[3]);
    
};

//resize the page
App.makePageFit = function ($pageGroupID, $editorIDList) {
    
    App.setLastPageURL(window.location.href.toString());
                
    try {
        
    var _w;
    
    //TODO: ekran çözünürlüğünü screen.width den almalı.
    if(App.os == "web"){ 
        _w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }else if(App.os == "android") {
        _w = screen.width;
    }else{
        _w = screen.width;
    }
    //var _w = screen.width;
    
    var screenWidth = _w;
    
    //TODO: 800px orjinal haline geri getir.
    var contentDefaultWidth = 600;
    var contentMaxWidth = 848; //800, 848, 960

    if(screenWidth > contentMaxWidth) {
        screenWidth = contentMaxWidth;
        
        //eğer ana sayfada ise ve ekran çok küçükse daha küçük göster
        if($pageGroupID == "index") { screenWidth = contentDefaultWidth; }
    }

    var screenRatio = screenWidth / contentDefaultWidth;
    //screenRatio = 0.5;
    document.body.style.zoom = screenRatio; //screenRatio
    
    App.screenRatio = screenRatio;

    document.getElementById("app-cont").style.display = "block";

    switch($pageGroupID){
        case "index":
            document.body.style.backgroundColor = "#F6F6F6";
            break;
        case "lessons":
            document.body.style.backgroundColor = "#141414";
            break;
        case "lesson":
            document.body.style.backgroundColor = "#141414";
            break;
        case "exercises":
            document.body.style.backgroundColor = "#141414";
            break;
        case "exercise":
            document.body.style.backgroundColor = "#141414";
            break;
        case "samples":
            document.body.style.backgroundColor = "#141414";
            break;
        case "sample":
            document.body.style.backgroundColor = "#000000";
            break;
        case "project":
            document.body.style.backgroundColor = "#000000";
            break;
        default:
            document.body.style.backgroundColor = "#141414";
    }
    
    //sayfasaki tüm coding box ların zoom unu orjinal boyutuna getir.
        /*
    if($editorIDList){
        
        for(var i = 0; i < $editorIDList.length; i++ ){
                document.getElementById("editor"+$editorIDList[i]).style.zoom = (1 / screenRatio);
                
            }
        }
    
    document.getElementById('keyboard-box').style.zoom = (1 / screenRatio);
    */
    
    //document.getElementById('keyboard-box').style.width = (560 * screenRatio) + "px";
        
    }catch($err){ }

};

App.stopYoutubeVideos = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video ) {
        video.pause();
    }
};

//TODO: about sayfasındaki linkleri bununla yönlendir
App.gotoURL = function($url){
    
    try {
        navigator.notification.confirm(
            'Bu web sitesini açmak istiyor musunuz?', 
            function($buttonIndex) {
                if($buttonIndex == 1){

                    if(App.mobileAndTabletCheck()){
                        window.location.href = $url;
                    }else{
                        window.open($url, '_blank');
                    }
                    //window.open($url, '_blank');

                } else {

                }
            },            
            'Bilgi',           
            ['Web Sitesini Aç','İptal']
        );
    } catch (e) {
        
        //window.location.href = $url;
        window.open($url, '_blank');
        
    }
    
}

App.gotoHomePage = function() {
    
    //storage.setItem("global-last-url", "pages/home.html");
    //go to
    window.location.href = '../pages/home.html';
    
};

App.gotoLastPage = function() {
    
    var _lastURL = storage.getItem("global-last-url");
    
    //alert(_lastURL);
    
    if(_lastURL) {
        //if(_lastURL.search("index.html") == -1){
            //go to
            window.location.href = _lastURL;
        //}
    }else{
        
        window.location.href = 'pages/home.html';
        
        //App.gotoHomePage();
    }
  
};

App.setLastPageURL = function($url) {
    storage.setItem("global-last-url", $url);
}

//sayfada yapılan skoru kaydet
App.setPageScore = function($pageID, $value){
    
    storage.setItem("score-"+$pageID, $value);
    
};

//sayfada yapılan skoru al
App.getPageScore = function($pageID){
    
    return storage.getItem("score-"+$pageID);
    
};

//toplam yapılan skoru hesapla
App.getTotalScore = function(){
  
    var totalScore = 0;
    
    //lessons
    for(var i = 1; i <= 6; i++){
        
        var score = App.getPageScore("lesson"+i);
        
        if(score){
            score = parseInt(score);
            
            if(score > 0){
                //totalScore += score;
                totalScore += i;
            }
            
        }
        
    }
    
    //exercise1
    for (var i = 1; i<= 40; i++) {
        
        var score = App.getPageScore("e1-" + i);
        
        if(score){
            score = parseInt(score);
            
            if(score > 0){
                //totalScore += score;
                totalScore += i;
            }
            
        }
        
    }
    
    return totalScore;
    
};


//Kodu başlat
App.cordovaInitialize();

/*

// ###UYGULAMA İÇİ SATIN ALMA###Basic usage, register callbacks first 
var service = Cocoon.InApp;

service.on("purchase", {
    start: function(productId) {
        console.log("purchase started " + productId);
    },
    error: function(productId, error) {
        console.log("purchase failed " + productId + " error: " + JSON.stringify(error));
    },
    complete: function(purchase) {
        console.log("purchase completed " + JSON.stringify(purchase));
    }
});

// Service initialization
service.initialize({
        autofinish: true
    }, function(error){

    }
); 

//END

service.fetchProducts(productIds, function(products, error){
    //Fetch products from the server
});   

service.getProducts(); //Local cached products

service.purchase(productId, 1, function(error) { // Optional sugar callback
    //purchase product
});

service.consume(productId, 3, function(error) {
    //consume product
});

service.isPurchased(productId); //check if a product is purchased
service.stockOfProduct(productId); //check available stock of consumable products

service.setValidationHandler(function(receipt, productId, completion){
     //Custom server validation code
     completion(true); //call completion function with true param if validation succeeds
});

service.setLudeiServerValidationHandler(); //validate using Ludei's Cloud server

*/