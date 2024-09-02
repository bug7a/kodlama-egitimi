var storage = window.localStorage;
//var value = storage.getItem(key); // Pass a key name to get its value.
//storage.setItem(key, value) // Pass a key name and its value to add or update that key.
//storage.removeItem(key) // Pass a key name to remove that key from storage.

var App = {};

// otomatik düzenleniyor. cordova.platformId
App.os = "electron"; //android, ios, electron
App.screenRatio = 1;
App.isCordovaExist = 0;

//cordova fonksiyonları
App.cordovaInitialize = function () {

    if (typeof cordova !== "undefined") {
        App.isCordovaExist = 1;
        document.addEventListener('deviceready', App.cordovaOnDeviceReady.bind(this), false);
    }else {
        window.onload = App.init;
    }

};

//cordova fonksiyonları
App.cordovaOnDeviceReady = function () {
    App.cordovaReceivedEvent('deviceready');
};

//cordova fonksiyonları
App.cordovaReceivedEvent = function (id) {
    
    // console.log("cordova.platformId: " + cordova.platformId);
    App.os = App.isCordovaExist ? cordova.platformId : App.os;
    
    //StatusBar.hide();
    //StatusBar.overlaysWebView(false);

    switch (App.os) {
        case "android":
            break;
        case "ios":
            StatusBar.styleDefault();
            //Keyboard.automaticScrollToTopOnHiding = true;
            break;
    }
    
    App.init(); //Cihaz hazır olduğunda çalıştıralacak bizim yazdığımız ilk fonksiyon.
};

//Uygulama açıldığında çalışacak ilk fonksiyon
App.init = function () {

    App.insertDiv_gotoPageLoading();

    //App.checkUsableTime();
    //App.countUsedTime();

    Page.init();
    
};

App.checkConnection = function () {

    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Bilinmiyor';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI] = 'Kablosuz internet';
    states[Connection.CELL_2G] = '2G';
    states[Connection.CELL_3G] = '3G';
    states[Connection.CELL_4G] = '4G';
    states[Connection.CELL] = 'Telefon';
    states[Connection.NONE] = 'Ağ bağlantısı yok';

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
App.mobileAndTabletCheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

//Function to convert rgb color to hex format
function rgb2hex(rgb) {

    var _hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

    function _hex(x) {
        return isNaN(x) ? "00" : _hexDigits[(x - x % 16) / 16] + _hexDigits[x % 16];
    }

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    return "#" + _hex(rgb[1]) + _hex(rgb[2]) + _hex(rgb[3]);

};

App.gotoYouTubeURL = function ($url) {

    var _message = "Bu anlatım videosunu, YouTube üzerinde açmak istiyor musunuz?";

    var _openURL = function () {

        if (App.mobileAndTabletCheck()) {
            window.location.href = $url;
        } else {
            window.open($url, '_blank');
        }

    }

    try {

        if (!storage.getItem("global-youtube-link-alert")) {

            //Video, yüklenmek için internet bağlantınızı kullanacaktır. (Bağlantınız: ' + App.checkConnection() + ')'
            navigator.notification.confirm(
                _message,
                function ($buttonIndex) {
                    if ($buttonIndex == 1) {

                        storage.setItem("global-youtube-link-alert", 1);

                        _openURL();

                    } else {

                    }
                },
                'Bilgi',
                ['Videoyu Aç', 'İptal']
            );

        } else {

            _openURL()

        }

    } catch (e) {

        //window.location.href = $url;
        window.open($url, '_blank');

    }

}

//resize the page
App.makePageFit = function ($pageGroupID, $editorIDList) {

    App.setLastPageURL(window.location.href.toString());

    try {

        var _w;

        _w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        //var _w = screen.width;

        var screenWidth = _w;

        //TODO: 800px orjinal haline geri getir.
        var contentDefaultWidth = 600;
        var contentMaxWidth = 850; //800, 848, 960, 850
        //TODO: delete this line active up line
        //var contentMaxWidth = 800;


        contentMaxWidth = App.getMaxScaledWidth();

        if (screenWidth > contentMaxWidth) {
            screenWidth = contentMaxWidth;
        }

        console.log("platform: " + App.os);
        console.log("contentMaxWidth: " + contentMaxWidth);

        var screenRatio = 0.83; //1; //screenWidth / contentDefaultWidth;
        App.screenRatio = screenRatio;

        console.log("screenRatio: " + screenRatio);

        App.setElementZoom(document.body, screenRatio);
        
        var appContElement = document.getElementById("app-cont");
        // appContElement.style.height = App.getScreenHeight() + "px";
        appContElement.style.display = "block";

        // Arka plan renkleri beyaz.
        document.body.style.backgroundColor = "#141414";

        // EK GÖREVLER:
        switch (App.os) {
            case "android":
                break;
            case "browser":
            case "electron":
            case "ios":
                break;
        }

    } catch ($err) {}

};

App.getMaxScaledWidth = function() {

    switch (App.os) {
        case "android":
            return 850;
            break;
        case "browser":
        case "electron":
            return 600;
            break;
        case "ios":
            return 600;
            break;
    }

}

App.setElementZoom = function ($element, $zoom) {

    $element.style.zoom = $zoom;

    //$element.style.transformOrigin = "top left";
    //$element.style.transform = "scale(" + $zoom + ")";

};

App.getScreenHeight = function() {

    var _h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return App.antiZoom(_h);

}

App.antiZoom = function ($value) {

    return parseInt($value * (1 / App.screenRatio));

}

App.stopYoutubeVideos = function (element) {
    var iframe = element.querySelector('iframe');
    var video = element.querySelector('video');
    if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if (video) {
        video.pause();
    }
};

//TODO: about sayfasındaki linkleri bununla yönlendir
App.gotoURL = function ($url) {

    try {
        navigator.notification.confirm(
            'Bu web sitesini açmak istiyor musunuz?',
            function ($buttonIndex) {
                if ($buttonIndex == 1) {

                    if (App.mobileAndTabletCheck()) {
                        window.location.href = $url;
                    } else {
                        window.open($url, '_blank');
                    }
                    //window.open($url, '_blank');

                } else {

                }
            },
            'Bilgi',
            ['Web Sitesini Aç', 'İptal']
        );
    } catch (e) {

        //window.location.href = $url;
        window.open($url, '_blank');

    }

}

App.gotoPage = function ($page) {

    App.show_gotoPageLoading();
    window.location.href = $page;

};

App.insertDiv_gotoPageLoading = function() {

    /*
        `<div id="goto-page-loading" class="box-goto-page-loading" style="display:none;">
            <img src="../img/loading.gif" width="450" height="300" />
        </div>`;
    */

    var htmlElement = document.createElement("div");
    htmlElement.setAttribute("id", "goto-page-loading");
    htmlElement.setAttribute("class", "box-goto-page-loading");
    htmlElement.setAttribute("style", "display:none;");

    htmlElement.innerHTML = `<img src="../img/loading.png" width="55" height="55" />`;

    var elemBody = document.getElementsByTagName("BODY")[0];
    elemBody.appendChild(htmlElement);

}

App.show_gotoPageLoading = function() {

    var divLoading = document.getElementById("goto-page-loading");
    divLoading.style.display = "flex";

}

App.hide_gotoPageLoading = function() {

    var divLoading = document.getElementById("goto-page-loading");
    divLoading.style.display = "none";

}

App.gotoHomePage = function () {

    App.show_gotoPageLoading();

    //storage.setItem("global-last-url", "pages/home.html");
    //go to
    window.location.href = '../pages/home.html';

};

App.gotoLastPage = function () {
    
    switch (App.os) {
            
        case "android":
        
            var _lastURL = storage.getItem("global-last-url");

            if (_lastURL) {
                //go to
                window.location.href = _lastURL;
            } else {
                window.location.href = 'pages/home.html';
            }
            break;
            
        case "browser":
        case "electron":
        case "ios":
            // ios ta çıkılan sayfası kaydetme.
            window.location.href = 'pages/home.html';
            break;
            
    }

};

App.setLastPageURL = function ($url) {
    storage.setItem("global-last-url", $url);
}

//sayfada yapılan skoru kaydet
App.setPageScore = function ($pageID, $value) {

    storage.setItem("score-" + $pageID, $value);

};

//sayfada yapılan skoru al
App.getPageScore = function ($pageID) {

    return storage.getItem("score-" + $pageID);

};

//toplam yapılan skoru hesapla
App.getTotalScore = function () {

    var totalScore = 0;

    //lessons
    for (var i = 1; i <= 6; i++) {

        var score = App.getPageScore("lesson" + i);

        if (score) {
            score = parseInt(score);

            if (score > 0) {
                //totalScore += score;
                totalScore += i;
            }

        }

    }

    //exercise1
    for (var i = 1; i <= 40; i++) {

        var score = App.getPageScore("e1-" + i);

        if (score) {
            score = parseInt(score);

            if (score > 0) {
                //totalScore += score;
                totalScore += i;
            }

        }

    }

    return totalScore;

};

var robinhood = function () {

    if (storage.getItem("robinhood-mode") == 1) {

        storage.setItem("robinhood-mode", 0);
        navigator.notification.alert(
            'Robin Hood modu kapatıldı.', // message
            function () {}, // callback
            'Bilgi', // title
            'Tamam' // buttonName
        );
        //alert("Robin Hood modu kapatıldı.");

    } else {

        storage.setItem("robinhood-mode", 1);
        navigator.notification.alert(
            'Robin Hood modu açıldı.', // message
            function () {}, // callback
            'Bilgi', // title
            'Tamam' // buttonName
        );
        //alert("Robin Hood modu açıldı.");

    }
}

App.generate_miniKeyBoardHTMLModel = function() {

    switch (App.os) {

        case "electron":
        case "browser":
    
        return `<div id="keyboard-box" class="keyboard-box" style="display:none;height:25px;">
        
            <!-- ADD BUTTON -->
            <!-- <div style="position:fixed;background-color:#141414;bottom:0px;left:0px;width:80px;height:60px;"></div> -->
    
            <div id="coding-add-btn-alert" style="position:fixed;left:calc(50% - 165px);bottom:73px;z-index:999;display:none;"><img src="../img/coding/coding-add-btn-alert.png" width="330" /></div>
    
            <div id="coding-add-btn" onmousedown="Coding.openSnippetWindow();" onclick="Coding.focusEditor();" class="coding-add-btn" style="position: fixed;left:calc(50% - 30px);bottom:10px;z-index:999;display:block;"><img src="../img/coding/coding-add-btn.png" width="60" height="60" /></div>
    
            <!-- CURSOR MOVE BUTTONS -->
            <div id="cursor-btn-group" style="position:fixed;display:none;width:170px;height:55px;bottom:55px;left:calc(50% - 85px);z-index:998;">
    
                <div onmousedown="Coding.moveCursorLeft();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;left:0px;"><img src="../img/coding/coding-moveleft-btn.png" width="50" /></div>
    
                <div onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;right:0px;"><img src="../img/coding/coding-moveright-btn.png" width="50" /></div>
    
            </div>
    
            <!-- KEYBOARD BACKGROUND -->
            <div id="keyboard-background" style="position:fixed;display:block;width:100%;height:30px;bottom:30px;left:0px;"><img src="../img/coding/keyboard-background.png" width="100%" height="30" /></div>
    
            <!-- add button end -->
    
        </div>
    
        <!-- keyboard end -->
    
        <!-- code list SNIPPET MODULE START -->
            
            <div id="keyboard-code-list" style="position:fixed;top:0px;left:0px;height:100%;width:100%;z-index:1000000;display:none;">
    
                <!-- CLOSE BUTTON -->
                <div id="coding-addclose-btn" onclick="Coding.focusEditor();" onmousedown="Coding.closeSnippetWindow();"  style="position: fixed;left:calc(50% - 20px);display:block;z-index:1000001;bottom:20px;"><img src="../img/coding/coding-addclose-btn.png" width="40" height="40" /></div>
                <!-- code button end -->
    
                <style>
    
                </style>
    
                <!-- old code <div id="snippet-box" style="position:relative;max-width:760px;width:calc(100% - 40px);height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;"> -->
    
                <div id="snippet-box" style="position:relative;width:560px;height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;">
    
                    <!-- <p style="color:#141414;">Kod listesi</p> -->
                    <!-- CODE SNIPPETS -->                        
                    
                </div>
                
            </div>
            <!-- code list end -->
    
            <!-- CURSOR DRAGGER
            <div id="coding-cursor-dragger" onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;z-index:999999;top:100px;left:100px;"><img src="../img/coding/cursor-dragger.png" width="40" /></div> -->
    
    `;

        break;
        
    case "android":
    
        return `<div id="keyboard-box" class="keyboard-box" style="display:none;">
        <div style="position:relative;height: 50px;width:910px;display:inline-block;">    
            <div onmousedown="Coding.insertAtCursor('   ');" onclick="Coding.focusEditor();" class="keyboard-btn">tab</div>
            <div onmousedown="Coding.insertAtCursor('(');" onclick="Coding.focusEditor();" class="keyboard-btn">(</div>
            <div onmousedown="Coding.insertAtCursor(')');" onclick="Coding.focusEditor();" class="keyboard-btn">)</div>
            <div onmousedown="Coding.insertAtCursor('quot');" onclick="Coding.focusEditor();" class="keyboard-btn">"</div>
            <div onmousedown="Coding.insertAtCursor(',');" onclick="Coding.focusEditor();" class="keyboard-btn">,</div>
            <div onmousedown="Coding.insertAtCursor('{');" onclick="Coding.focusEditor();" class="keyboard-btn">{</div>
            <div onmousedown="Coding.insertAtCursor('}');" onclick="Coding.focusEditor();" class="keyboard-btn">}</div>
            <div onmousedown="Coding.insertAtCursor('.');" onclick="Coding.focusEditor();" class="keyboard-btn">.</div>
            <div onmousedown="Coding.insertAtCursor('=');" onclick="Coding.focusEditor();" class="keyboard-btn">=</div>
            <div onmousedown="Coding.insertAtCursor('+');" onclick="Coding.focusEditor();" class="keyboard-btn">+</div>
            <div onmousedown="Coding.insertAtCursor('-');" onclick="Coding.focusEditor();" class="keyboard-btn">-</div>
            <div onmousedown="Coding.insertAtCursor('*');" onclick="Coding.focusEditor();" class="keyboard-btn">*</div>
            <div onmousedown="Coding.insertAtCursor('/');" onclick="Coding.focusEditor();" class="keyboard-btn">/</div>
            <div onmousedown="Coding.insertAtCursor('>');" onclick="Coding.focusEditor();" class="keyboard-btn">&#62;</div>
            <div onmousedown="Coding.insertAtCursor('<');" onclick="Coding.focusEditor();" class="keyboard-btn">&#60;</div>
            <div onmousedown="Coding.insertAtCursor(';');" onclick="Coding.focusEditor();" class="keyboard-btn">;</div>
            <div onmousedown="Coding.insertAtCursor('[');" onclick="Coding.focusEditor();" class="keyboard-btn">[</div>
            <div onmousedown="Coding.insertAtCursor(']');" onclick="Coding.focusEditor();" class="keyboard-btn">]</div>
            <div onmousedown="Coding.insertAtCursor('%');" onclick="Coding.focusEditor();" class="keyboard-btn">%</div>
            <div onmousedown="Coding.insertAtCursor('?');" onclick="Coding.focusEditor();" class="keyboard-btn">?</div>
            <div onmousedown="Coding.insertAtCursor('apos');" onclick="Coding.focusEditor();" class="keyboard-btn">'</div>
            <div onmousedown="Coding.insertAtCursor(':');" onclick="Coding.focusEditor();" class="keyboard-btn">:</div>
            </div>
            
            <!-- ADD BUTTON -->
            <!-- <div style="position:fixed;background-color:#141414;bottom:0px;left:0px;width:80px;height:60px;"></div> -->
    
            <div id="coding-add-btn-alert" style="position:fixed;left:calc(50% - 165px);bottom:108px;z-index:999;display:none;"><img src="../img/coding/coding-add-btn-alert.png" width="330" /></div>
    
            <div id="coding-add-btn" onmousedown="Coding.openSnippetWindow();" onclick="Coding.focusEditor();" class="coding-add-btn" style="position: fixed;left:calc(50% - 30px);bottom:45px;z-index:999;display:block;"><img src="../img/coding/coding-add-btn.png" width="60" height="60" /></div>
    
            <!-- CURSOR MOVE BUTTONS -->
            <div id="cursor-btn-group" style="position:fixed;display:block;width:170px;height:55px;bottom:55px;left:calc(50% - 85px);z-index:998;">
    
                <div onmousedown="Coding.moveCursorLeft();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;left:0px;"><img src="../img/coding/coding-moveleft-btn.png" width="50" /></div>
    
                <div onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;right:0px;"><img src="../img/coding/coding-moveright-btn.png" width="50" /></div>
    
            </div>
    
            <!-- KEYBOARD BACKGROUND -->
            <div id="keyboard-background" style="position:fixed;display:block;width:100%;height:30px;bottom:64px;left:0px;"><img src="../img/coding/keyboard-background.png" width="100%" height="30" /></div>
    
            <!-- add button end -->
    
        </div>
    
        <!-- keyboard end -->
    
        <!-- code list SNIPPET MODULE START -->
            
            <div id="keyboard-code-list" style="position:fixed;top:0px;left:0px;height:100%;width:100%;z-index:1000000;display:none;">
    
                <!-- CLOSE BUTTON -->
                <div id="coding-addclose-btn" onclick="Coding.focusEditor();" onmousedown="Coding.closeSnippetWindow();"  style="position: fixed;left:calc(50% - 20px);display:block;z-index:1000001;bottom:20px;"><img src="../img/coding/coding-addclose-btn.png" width="40" height="40" /></div>
                <!-- code button end -->
    
                <style>
    
                </style>
    
                <!-- old code <div id="snippet-box" style="position:relative;max-width:760px;width:calc(100% - 40px);height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;"> -->
    
                <div id="snippet-box" style="position:relative;width:560px;height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;">
    
                    <!-- <p style="color:#141414;">Kod listesi</p> -->
                    <!-- CODE SNIPPETS -->                        
                    
                </div>
                
            </div>
            <!-- code list end -->
    
            <!-- CURSOR DRAGGER
            <div id="coding-cursor-dragger" onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;z-index:999999;top:100px;left:100px;"><img src="../img/coding/cursor-dragger.png" width="40" /></div> -->
    
    `;

        break;

            case "ios":
            
                return `<div id="keyboard-box" class="keyboard-box" style="display:none;background-color:transparent;height:120px;border-top: solid 0px black;bottom:0px;">
        
                <div id="coding-btn-group-background" style="position:fixed;left:0px;width:100%;height: 62px;bottom:0px;display:block;background-color:#141414;"></div>
        
        <div style="position:relative;height: 50px;width:910px;display:inline-block;margin-top:62px;">    
            <div onmousedown="Coding.insertAtCursor('   ');" onclick="Coding.focusEditor();" class="keyboard-btn">tab</div>
            <div onmousedown="Coding.insertAtCursor('(');" onclick="Coding.focusEditor();" class="keyboard-btn">(</div>
            <div onmousedown="Coding.insertAtCursor(')');" onclick="Coding.focusEditor();" class="keyboard-btn">)</div>
            <div onmousedown="Coding.insertAtCursor('quot');" onclick="Coding.focusEditor();" class="keyboard-btn">"</div>
            <div onmousedown="Coding.insertAtCursor(',');" onclick="Coding.focusEditor();" class="keyboard-btn">,</div>
            <div onmousedown="Coding.insertAtCursor('{');" onclick="Coding.focusEditor();" class="keyboard-btn">{</div>
            <div onmousedown="Coding.insertAtCursor('}');" onclick="Coding.focusEditor();" class="keyboard-btn">}</div>
            <div onmousedown="Coding.insertAtCursor('.');" onclick="Coding.focusEditor();" class="keyboard-btn">.</div>
            <div onmousedown="Coding.insertAtCursor('=');" onclick="Coding.focusEditor();" class="keyboard-btn">=</div>
            <div onmousedown="Coding.insertAtCursor('+');" onclick="Coding.focusEditor();" class="keyboard-btn">+</div>
            <div onmousedown="Coding.insertAtCursor('-');" onclick="Coding.focusEditor();" class="keyboard-btn">-</div>
            <div onmousedown="Coding.insertAtCursor('*');" onclick="Coding.focusEditor();" class="keyboard-btn">*</div>
            <div onmousedown="Coding.insertAtCursor('/');" onclick="Coding.focusEditor();" class="keyboard-btn">/</div>
            <div onmousedown="Coding.insertAtCursor('>');" onclick="Coding.focusEditor();" class="keyboard-btn">&#62;</div>
            <div onmousedown="Coding.insertAtCursor('<');" onclick="Coding.focusEditor();" class="keyboard-btn">&#60;</div>
            <div onmousedown="Coding.insertAtCursor(';');" onclick="Coding.focusEditor();" class="keyboard-btn">;</div>
            <div onmousedown="Coding.insertAtCursor('[');" onclick="Coding.focusEditor();" class="keyboard-btn">[</div>
            <div onmousedown="Coding.insertAtCursor(']');" onclick="Coding.focusEditor();" class="keyboard-btn">]</div>
            <div onmousedown="Coding.insertAtCursor('%');" onclick="Coding.focusEditor();" class="keyboard-btn">%</div>
            <div onmousedown="Coding.insertAtCursor('?');" onclick="Coding.focusEditor();" class="keyboard-btn">?</div>
            <div onmousedown="Coding.insertAtCursor('apos');" onclick="Coding.focusEditor();" class="keyboard-btn">'</div>
            <div onmousedown="Coding.insertAtCursor(':');" onclick="Coding.focusEditor();" class="keyboard-btn">:</div>
            </div>
            
            <!-- ADD BUTTON -->
            <!-- <div style="position:fixed;background-color:#141414;bottom:0px;left:0px;width:80px;height:60px;"></div> -->
    
            <div id="coding-add-btn-alert" style="position:fixed;left:calc(50% - 165px);bottom:108px;z-index:999;display:none;"><img src="../img/coding/coding-add-btn-alert.png" width="330" /></div>
    
            <div id="coding-add-btn" onmousedown="Coding.openSnippetWindow();" onclick="Coding.focusEditor();" class="coding-add-btn" style="position: fixed;left:calc(50% - 30px);bottom:45px;z-index:999;display:block;"><img src="../img/coding/coding-add-btn.png" width="60" height="60" /></div>
    
            <!-- CURSOR MOVE BUTTONS -->
            <div id="cursor-btn-group" style="position:fixed;display:block;width:170px;height:55px;bottom:55px;left:calc(50% - 85px);z-index:998;">
    
                <div onmousedown="Coding.moveCursorLeft();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;left:0px;"><img src="../img/coding/coding-moveleft-btn.png" width="50" /></div>
    
                <div onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;top:0px;right:0px;"><img src="../img/coding/coding-moveright-btn.png" width="50" /></div>
    
            </div>

            <div id="keyboard-close-btn" onclick="Coding.closeNativeKeyboard();"  style="position: fixed;left:calc(50% + 170px);bottom:50px;z-index:999;display:block;"><img src="../img/coding/coding-keyboardclose-btn.png" width="50" /></div>
    
            <!-- KEYBOARD BACKGROUND -->
            <div id="keyboard-background" style="position:fixed;display:block;width:100%;height:30px;bottom:64px;left:0px;"><img src="../img/coding/keyboard-background.png" width="100%" height="30" /></div>
    
            <!-- add button end -->
    
        </div>
    
        <!-- keyboard end -->
    
        <!-- code list SNIPPET MODULE START -->
            
            <div id="keyboard-code-list" style="position:fixed;top:0px;left:0px;height:100%;width:100%;z-index:1000000;display:none;">
    
                <!-- CLOSE BUTTON -->
                <div id="coding-addclose-btn" onclick="Coding.focusEditor();" onmousedown="Coding.closeSnippetWindow();"  style="position: fixed;left:calc(50% - 20px);display:block;z-index:1000001;bottom:20px;"><img src="../img/coding/coding-addclose-btn.png" width="40" height="40" /></div>
                <!-- code button end -->
    
                <style>
    
                </style>
    
                <!-- old code <div id="snippet-box" style="position:relative;max-width:760px;width:calc(100% - 40px);height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;"> -->
    
                <div id="snippet-box" style="position:relative;width:560px;height:calc(100% - 75px) !important;margin:0px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;background-color:white;overflow-y:overlay;padding-top:35px;padding-bottom:50px;">
    
                    <!-- <p style="color:#141414;">Kod listesi</p> -->
                    <!-- CODE SNIPPETS -->                        
                    
                </div>
                
            </div>
            <!-- code list end -->
    
            <!-- CURSOR DRAGGER
            <div id="coding-cursor-dragger" onmousedown="Coding.moveCursorRight();" onclick="Coding.focusEditor();"  style="position:absolute;z-index:999999;top:100px;left:100px;"><img src="../img/coding/cursor-dragger.png" width="40" /></div> -->
    
    `;
        
                break;
    
    }

}

App.checkUsableTime = function() {

    // ilk açılış için verilen kullanım süresi: 240 dakika.
    if (storage.getItem("usable-time") == null) {
        storage.setItem("usable-time", 180 * 60)

        /* Store açıklamasına yazıldığı için gerek yok.
        navigator.notification.alert(
            'Ücretsiz kullanım süreniz (3 Saat) tanımlanmıştır.',  // message
            function() {  },     // callback
            'Bilgilendirme',     // title
            'Tamam'              // buttonName
        );
        */

    }

    var usableTime = storage.getItem("usable-time")

    if (usableTime <= 0) {

        // FOR TEST:
        //storage.setItem("usable-time", 240)

        // goto you have to buy time page first and,
        // goto buy time page.  
        if ((window.location.href).indexOf('buy-time.htm') == -1) {
            if ((window.location.href).indexOf('time-up.htm') == -1) {
                App.gotoPage("../pages/time-up.htm")
            }
        }
    }

}

App.countUsedTime = function() {

     // Hakkında sayfasında, zamanı düşürme.
    if ((window.location.href).indexOf('about.htm') == -1) {

    // Süre satın alma sayfasında, zamanı düşürme.
    if ((window.location.href).indexOf('buy-time.htm') == -1) {

        setInterval(function () {

            var usableTime = storage.getItem("usable-time")
            if (parseInt(usableTime) > 0) {
                var _usableTime = parseInt(usableTime) - 1
                storage.setItem("usable-time", _usableTime)
                // console.log(_usableTime)
            }
            

            /*
            if(!isNaN(usableTime)) {
                if (usableTime > 0) {

                    var _usableTime = parseInt(usableTime) - 1
                    if (_usableTime >= 0) {

                        storage.setItem("usable-time", _usableTime)
                    }
                    usableTime = storage.getItem("usable-time")

                    if (usableTime >= 0) {
                    } else {

                        // Eğer kaydetme sırasında bir hata oluşmuş ise,
                        // İşlemi tekrar yap ve değişkeni manuel olarak değiştir.
                        storage.setItem("usable-time", _usableTime)
                        usableTime = _usableTime
                    }

                    // FOR TEST:
                    console.log(usableTime)
                }
            }
            */

        }, 1000); // 60000

    }

    }

}

App.formatUsableTime = function() {

    var usableTime = storage.getItem("usable-time")

    var _usableTime = parseInt(usableTime / 60)

    var hours = parseInt(_usableTime / 60)
    var minutes = _usableTime % 60

    /*
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    */

    return (hours + "sa " + minutes + "dk")

}

App.sendCoupon = function() {

    var couponCode = document.getElementById("coupon-name-text").value;

    if (couponCode == "kupon64") {

        App.addTime(3840 * 60)
        document.getElementById("coupon-name-text").value = "";

    }

}

App.addTime = function($time = 0) {

    var usableTime = storage.getItem("usable-time")
    var _usableTime = parseInt(usableTime) + $time
    storage.setItem("usable-time", _usableTime)

    /*
    if(usableTime == null) {
        usableTime = 0
    }

    if(!isNaN(usableTime)) {
    } else {
        usableTime = 0
    }

    var _usableTime = parseInt(usableTime) + $time
    if (_usableTime >= 0) {

        storage.setItem("usable-time", _usableTime)
    }
    usableTime = storage.getItem("usable-time")

    if (usableTime >= 0) {
    } else {

        // Eğer kaydetme sırasında bir hata oluşmuş ise,
        // İşlemi tekrar yap ve değişkeni manuel olarak değiştir.
        storage.setItem("usable-time", _usableTime)
        usableTime = _usableTime
    }
    */

    //document.getElementById("div-usable-time").innerHTML = App.formatUsableTime()

    navigator.notification.alert(
        'Mevcut kullanım süreniz güncellenmiştir.',  // message
        function() {  },     // callback
        'Kullanım Paketleri',            // title
        'Tamam'              // buttonName
    );

}

App.showAllPage = function() {
    /*
    App.show_gotoPageLoading();
    document.getElementById("app-cont").style.visibility = "visible";
    setTimeout(function() {
        App.hide_gotoPageLoading();
    }, 400)
    */
}

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
