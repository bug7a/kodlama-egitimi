var Page = function () {};

//App.js içerisinden sayfa yüklendiğinde otomatik çalıştırılıyor.
Page.init = function () {

    //App.makePageFit("game");

};

Page.codingInit = function ($e) {

    console.log("Page.codingInit: " + $e.editorNumber);
    Coding.currentEditorNumber = $e.editorNumber;

    switch ($e.editorNumber) {

        case "1":

            //TODO: en fazla 8 kare olsun.

            let groundMax = random(4, 12);
            let lockedSide = random(2); //1:sol, 2:sağ
            let lockedArea = parseInt(groundMax / 2);

            // sadece 1 tane finish alanı
            let totalFinish = 1;
            let totalLocked = 0;

            // en fazla 2 tane kilitli alan, hiç olmayabilir ama lockedArea 2 ise 1 den fazla olamaz.
            if (lockedArea <= 2) {
                totalLocked = random(0, 1);
            } else {
                totalLocked = random(0, 2);
            }

            // en az kilitli alan kadar anahtar olacak. en fazla 4 anahtar.
            let totalKey = random(totalLocked, totalLocked + 1);

            Coding1.dontUseAnimationEngine = 1;
            Coding1.init();

            zemin.olustur(groundMax);

            let putLockers = 0;
            let putKeys = 0;

            let tryCount = 0;

            // finish ve kilitli alanları yerşeltir.
            while (putLockers == 0) {

                let randomCoor

                // hedef solda
                if (lockedSide == 1) {

                    randomCoor = random(1, lockedArea);

                } else {

                    randomCoor = random(lockedArea + 1, zemin.sonKonum);

                }

                if (kilitAra(randomCoor) == 0 && hedefAra(randomCoor) == 0) {
                    if (random(2) == 2) {
                        if (totalFinish > 0) {
                            zemin.nesneEkle("finish", randomCoor);
                            totalFinish--;
                        }
                    } else {
                        if (totalLocked > 0) {
                            zemin.nesneEkle("locked", randomCoor);
                            totalLocked--;
                        }

                    }
                }

                if (totalLocked <= 0 && totalFinish <= 0) {
                    putLockers = 1;
                }

                tryCount++;

                if (tryCount > 500) {
                    putLockers = 1;
                }

            }

            tryCount = 0;

            // anahtarları yerleştir
            while (putKeys == 0) {

                let randomCoor

                // hedef solda
                if (lockedSide == 2) {

                    randomCoor = random(1, lockedArea);

                } else {

                    randomCoor = random(lockedArea + 1, zemin.sonKonum);

                }

                console.log("tt " + randomCoor);

                if (anahtarAra(randomCoor) == 0) {
                    if (totalKey > 0) {
                        zemin.nesneEkle("key", randomCoor);
                        totalKey--;
                    }
                }

                if (totalKey <= 0) {
                    putKeys = 1;
                }

                tryCount++;

                if (tryCount > 500) {
                    putKeys = 1;
                }

            }

            //robotu konumlandır.
            let randomCoor

            // hedef solda
            if (lockedSide == 2) {

                randomCoor = random(1, lockedArea);

            } else {

                randomCoor = random(lockedArea + 1, zemin.sonKonum);

            }

            zemin.nesneEkle("robot", randomCoor, 100, "");

            if (random(2) == 2) {
                robot.geriDon();
            }

            //zemin.nesneEkle("tree", 1);
            //zemin.nesneEkle("finish", 5);
            //zemin.nesneEkle("key", 2);
            //zemin.nesneEkle("locked", 4);
            //zemin.nesneEkle("energy", 2);
            //zemin.nesneEkle("robot", 1, 100, "");
            //zemin.nesneEkle("tree", 6);
            //zemin.nesneEkle("tree", 7);

            for (var i = 1; i <= groundMax; i++) {
                if (random(2) == 2) {
                    zemin.nesneEkle("tree", i);
                }
            }

            break;
        case "2":

            break;

    }

};

Page.codingFinished = function ($e) {

    console.log("Page.codingFinished: " + $e.editorNumber);

    switch ($e.editorNumber) {

        case "1":

            break;
        case "2":

            break;

    }

};

let Coding = {
    currentEditorNumber: 1
};

//animasyon listesine yeni bir komut ekler
Coding.animationEngineAdd = function ($code) {

    try {
        eval($code);
    } catch (e) {
        //alert(e.message, "error", 1);
    }

};

Coding.animationEngineNext = function () {
    //ahh buğra neler yapmışsın böyle :)
};

// -- ROBOT --

//page1 ve page2
let p1, p2, p3;
let lockButtons = 0;

// ana sayfa muziği 1 kere çal ve sus.
let musicPlayed = 0;

let gameScore = 0;

//var myAudio = new Audio("../sound/music1.mp3");
//myAudio.muted = true;
//myAudio.autoplay = true;
//myAudio.load();

// İlk çalışan fonksiyon; herşey yüklendiğinde, otomatik çalıştırılır.
let start = function () {

    //var sndMusic = new Sound();
    //sndMusic.load("../sound/music1.mp3");
    //sndMusic.element.muted = true;
    //sndMusic.element.autoplay = true;
    //sndMusic.element.load();
    //sndMusic.element.play();

    mainBox.backgroundColor = "#FFFFFF";

    setLoopTimer(15);

    mainBox.zoom = 1;
    mainBox.fit(600, 850);

    window.localStorage.setItem("global-last-url", window.location.href.toString());

    gameScore = window.localStorage.getItem("game-robot-score-count") || 0;

    p1 = new Box(0, 0); //antiZoom(mainBox.height)
    p1.width = 600;
    p1.element.style.height = "100%";
    p1.element.style.height = p1.element.offsetHeight + "px";
    p1.center(mainBox, "left");
    createPage1();

    p2 = new Box(0, 0); //600, antiZoom(mainBox.height)
    p2.width = 600;
    p2.element.style.height = p1.element.offsetHeight + "px";
    p2.center(mainBox, "left");
    createPage2();

    //p2.visible = 1;

    //createNewGame();
    //updateVars();


    p3 = new Box(0, 0); // 600, antiZoom(mainBox.height)
    p3.width = 600;
    p3.element.style.height = p1.element.offsetHeight + "px";
    p3.center(mainBox, "left");
    createPage3();


    print = function ($msg, $type) {
        p2.lblError.text = $msg;
        if ($msg) {
            p2.sndAlert.play();
        }
    }

}

// Her saniye çalışan fonksiyon.
let loop = function () {

    // ilk ekrandaki objelerin hareketi
    if (p1.visible == 1) {

        for (var i = 1; i <= 16; i++) {

            var objName = "bck" + i;

            p1[objName].rotate += p1[objName].value;
            p1[objName].top -= p1[objName].value;

            if (p1[objName].top < -100) {
                p1[objName].top = p1.height + 100;
            }

        }


        if (musicPlayed == 0) {
            // TODO: açılış müziği aç.
            p1.sndMusic.play();
        }

        if (!p1.sndMusic.paused) {
            musicPlayed = 1;
        }


    }

    // güneşin hareketi
    if (p2.imgSun.visible == 1 && p2.visible == 1) {
        p2.imgSun.value += 1;
        if (p2.imgSun.value > 100) {
            p2.imgSun.left += 1;
            p2.imgSun.value = 0;
            if (p2.imgSun.left > p2.width) {
                p2.imgSun.left = -1 * p2.imgSun.width;
            }
        }
        p2.imgSun.rotate = p2.imgSun.rotate + 0.2;
    }

    // ayın hareketi
    if (p2.imgMoon.visible == 1 && p2.visible == 1) {
        p2.imgMoon.value += 1;
        if (p2.imgMoon.value > 100) {
            p2.imgMoon.left += 1;
            p2.imgMoon.value = 0;
            if (p2.imgMoon.left > p2.width) {
                p2.imgMoon.left = -1 * p2.imgMoon.width;
            }
        }
    }

}

let createNewGame = function () {

    Page.codingInit({
        editorNumber: '1'
    });
    p2.lblCode.text = "";
    p2.lblError.text = "";
    updateVars();

}

let createPage1 = function () {

    selectBox(p1);

    p1.border = 0;
    //p1.backgroundColor = "gold";
    p1.element.style.backgroundImage = "radial-gradient(yellow, gold, gold)";
    p1.element.style.borderBottom = "2px solid gold";
    
    // arka planda hareket eden nesneleri oluştur.
    for (var i = 1; i <= 16; i++) {

        var rNum = 0.3 + num(random(100) / 100);
        var objName = "bck" + i;
        p1[objName] = new Image();

        if (i <= 8) {
            p1[objName].load("robot/key-icon.webp");
            p1[objName].width = 93 * rNum;
            p1[objName].height = 93 * rNum;
        } else {
            p1[objName].load("robot/lock-icon.webp");
            p1[objName].width = 75 * rNum;
            p1[objName].height = 99 * rNum;
        }

        p1[objName].value = random(4);
        p1[objName].opacity = num(random(20) / 100);
        p1[objName].left = random(p1.width);
        p1[objName].top = random(p1.height);


    }

    p1.imgBack = new Image(-30, 0, 345, 585);

    //if (random(2) == 2) {
    p1.imgBack.load("robot/robot-background.webp");
    //} else {
    //p1.imgBack.load("robot/robot2-background.webp");
    //}


    p1.imgBack.top = p1.height - p1.imgBack.height + 30;
    p1.imgBack.element.setAttribute('class', 'pulsate-bck');


    p1.lblTitle = new Label(0, 100, 600);
    p1.lblTitle.text = "<b>ROBOT</b>";
    p1.lblTitle.textAlign = "center";
    p1.lblTitle.textSize = 30;
    p1.lblTitle.textColor = "tomato";
    p1.lblTitle.element.style.opacity = 0.8;

    p1.lblDesc = new Label(0, 100, 600);
    p1.lblDesc.text = "<b>Robotun, hedefe ulaşmasını sağlayın.</b><br>";
    p1.lblDesc.text += "Düğmeleri kullanarak, robotu kontrol edebilirsiniz.<br>";

    p1.lblDesc.top = p1.lblTitle.top + p1.lblTitle.height + 10;
    p1.lblDesc.textAlign = "center";
    p1.lblDesc.textSize = 20;
    p1.lblDesc.textColor = "#333";
    p1.lblDesc.element.style.opacity = 0.8;

    p1.imgStart = new Image(0, 0, 140, 65);
    p1.imgStart.load("robot/start-btn.webp");

    p1.imgStart.top = p1.lblDesc.top + p1.lblDesc.height + 40;
    p1.imgStart.left = (p1.width - p1.imgStart.width) / 2;

    p1.imgStart.addEventListener("click", function () {
        p2.visible = 1;
        p1.visible = 0;

        // muzik çalıyor ise durdur.
        musicPlayed = 0;
        p1.sndMusic.stop();

        createNewGame();
    });

    p1.imgClose = new Image(530, 20, 50, 50);
    p1.imgClose.load("robot/close-btn.webp");
    p1.imgClose.addEventListener("click", function () {

        //uygulamadan çık.
        window.location.href = '../pages/games.htm';

    });

    p1.lblScore = new Label();
    that.text = "";
    that.textAlign = "right";
    that.aline(p1, "bottom", -50 - that.height);
    that.left = 290;

    showScore();

    p1.sndMusic = new Sound();
    p1.sndMusic.load("../sound/music1.mp3");
    //p1.sndMusic.loop = 1;

    //p1.sndMusic.element.load();
    //p1.sndMusic.element.play();

    setTimeout(function () {
        //document.getElementById("game-music").play();
        //myAudio.play();
        //p1.sndMusic.play();
    }, 1000);

    //p1.html += 	'<ul class="bg-bubbles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>';

    selectBox(mainBox);


}

let createPage2 = function () {

    //let backColors = ["#EE7553", "seagreen", "IndianRed", "Teal", "SteelBlue"];

    selectBox(p2);
    p2.visible = 0;
    p2.border = 0;

    p2.imgSun = new Image();
    p2.imgSun.load("robot/sun.png")
    p2.imgSun.top = 50;
    p2.imgSun.left = random(p2.width);
    p2.imgSun.width = 80;
    p2.imgSun.height = 80;
    p2.imgSun.value = 0;

    p2.imgMoon = new Image();
    p2.imgMoon.load("robot/moon.png")
    p2.imgMoon.top = 65;
    p2.imgMoon.left = random(p2.width);
    p2.imgMoon.value = 0;

    //p2.backgroundColor = "seagreen";
    let backColorNum = random(2);
    let lblErrorTextColor = "";
    if (backColorNum == 1) {
        p2.element.style.backgroundImage = "radial-gradient(#EE7553, IndianRed)";
        lblErrorTextColor = "gold";
        p2.imgSun.visible = 1;
        p2.imgMoon.visible = 0;
    } else if (backColorNum == 2) {
        p2.element.style.backgroundImage = "radial-gradient(Teal, seagreen)";
        lblErrorTextColor = "gold";
        p2.imgSun.visible = 0;
        p2.imgMoon.visible = 1;
    } else {
        //p2.element.style.backgroundImage = "radial-gradient(DodgerBlue, SteelBlue)";
        //p2.element.style.backgroundImage = "radial-gradient(GoldenRod , DarkGoldenRod)";
        p2.element.style.backgroundImage = "radial-gradient(DeepPink, MediumVioletRed)";
        lblErrorTextColor = "gold";
    }

    p2.sndKey = new Sound();
    p2.sndKey.load("../sound/key.wav");
    p2.sndAlert = new Sound();
    p2.sndAlert.load("../sound/bip.wav");
    p2.sndDoor = new Sound();
    p2.sndDoor.load("../sound/open-door.wav");
    p2.sndSuccess = new Sound();
    p2.sndSuccess.load("../sound/success2.wav");

    p2.boxGame = new Box(0, 0, 600, 450);
    p2.boxGame.backgroundColor = "transparent";
    p2.boxGame.border = 0;
    p2.boxGame.html = "<div id='coding-game-box1' class='coding-game-box'></div>";

    p2.imgTable = new Image(0, 0, 263, 235);
    p2.imgTable.load("robot/vars-table-img.webp");
    p2.imgTable.top = p2.height - p2.imgTable.height - 250;
    p2.imgTable.left = p2.width - p2.imgTable.width - 25;

    p2.var1 = new Label(p2.imgTable.left, p2.imgTable.top, 100);
    p2.var1.left += 140;
    p2.var1.top += 110;
    p2.var1.text = '';
    p2.var1.textAlign = "center";

    p2.var2 = new Label(p2.imgTable.left, p2.imgTable.top, 100);
    p2.var2.left += 140;
    p2.var2.top += 149;
    p2.var2.text = '';
    p2.var2.textAlign = "center";

    p2.var3 = new Label(p2.imgTable.left, p2.imgTable.top, 100);
    p2.var3.left += 140;
    p2.var3.top += 188;
    p2.var3.text = '';
    p2.var3.textAlign = "center";

    //TODO: yon değişkeni içeriği tırnak içinde bilgi versin "sağ" gibi.

    for (var i = 1; i <= 4; i++) {

        let btn = "btn" + i;

        p2[btn] = new Image(0, 0, 133, 107);
        p2[btn].load("robot/btn" + i + ".webp");
        p2[btn].top = p2.height - p2[btn].height - 100;
        p2[btn].left = 25 + ((p2[btn].width + 6) * (i - 1));
        p2[btn].value = i;
        p2[btn].addEventListener("click", actionButtonClicked);

        let btnc = "btn" + i + "-clicked";

        p2[btnc] = new Image(0, 0, 133, 107);
        p2[btnc].load("robot/btn" + i + "-clicked.webp");
        p2[btnc].top = p2[btn].top;
        p2[btnc].left = p2[btn].left;
        p2[btnc].visible = 0;
    }

    p2.lblCode = new Label(25, 0, 300);
    p2.lblCode.text = "";
    p2.lblCode.textSize = 20;
    p2.lblCode.textColor = "white";
    p2.lblCode.element.style.fontFamily = "Verdana";
    p2.lblCode.element.style.opacity = 0.8;

    p2.lblError = new Label(0, 0, 600);
    p2.lblError.text = "";
    p2.lblError.textSize = 20;
    p2.lblError.textColor = lblErrorTextColor;
    p2.lblError.textAlign = "center";
    p2.lblError.element.style.opacity = 0.8;
    //alert(p2.lblError.height);
    p2.lblError.top = p2.height - p2.lblError.height - 80; //30


    /*
    <div id="coding-screen{{id}}" class="coding-screen" style="background-color:#EE7553;height:300px;">
            <div id="coding-game-box{{id}}" class="coding-game-box"></div>
    */

    p2.imgClose = new Image(530, 20, 50, 50);
    p2.imgClose.load("robot/close-btn2.webp");
    p2.imgClose.addEventListener("click", function () {
        p2.visible = 0;
        p1.visible = 1;
    });

    selectBox(mainBox);

}

let createPage3 = function () {

    selectBox(p3);

    p3.visible = 0;
    p3.border = 0;

    p3.backgroundColor = "rgba(0, 0, 0, 0.85)";

    /*
    p3.imgDialog = new Image(0, 0, 348, 223);
    p3.imgDialog.load("robot/info.webp")
    p3.imgDialog.top = (p3.height - p3.imgDialog.height) / 2;
    p3.imgDialog.left = (p3.width - p3.imgDialog.width) / 2;
    */

    p3.boxDialog = new Box(0, 0, 480, 240);
    //p3.boxDialog.backgroundColor = "white";
    p3.boxDialog.backgroundColor = "seagreen";
    p3.boxDialog.border = 0;
    p3.boxDialog.round = 13;
    p3.boxDialog.center(p3);

    selectBox(p3.boxDialog);

    p3.lblTitle = new Label(0, 38, 480);
    p3.lblTitle.text = "<span style='font-size:25px;'>Tebrikler!</span><br>";
    p3.lblTitle.text += "<span style='font-size:20px;opacity:0.85;'>Bu görevi tamamlamayı başardınız.</span>"
    p3.lblTitle.textAlign = "center";
    p3.lblTitle.textColor = "white";
    p3.lblTitle.textSize = 22;


    p3.btnOkay = new Button();
    p3.btnOkay.text = "<span>YENİ GÖREV</span>";
    p3.btnOkay.width = 160;
    p3.btnOkay.backgroundColor = "lightgray";
    //p3.btnOkay.backgroundColor = "seagreen";
    p3.btnOkay.element.style.borderRadius = "8px";
    p3.btnOkay.center(p3.boxDialog);
    p3.btnOkay.top += 29;
    p3.btnOkay.addEventListener("click", function () {
        //p1.visible = 1;
        p1.visible = 0;
        p2.visible = 1;
        p3.visible = 0;
        createNewGame();
    });

    p3.lblAlert = new Label(0, 0, 480);
    p3.lblAlert.text = "<span style='opacity:0.6;'>Not: Bu oyunun sonu yoktur.</span>";
    p3.lblAlert.textAlign = "center";
    p3.lblAlert.top = 180;
    p3.lblAlert.textSize = 16;
    p3.lblAlert.textColor = "white";

    /*
    p3.imgDialog.addEventListener("click", function() {
        //p1.visible = 1;
        p1.visible = 0;
        p2.visible = 1;
        p3.visible = 0;
        createNewGame();
    })
    */

    selectBox(mainBox);

}

let actionButtonClicked = function (btn) {

    if (lockButtons == 0) {
        addNewCode(btn.value);
        selectBtn(btn.value);
    }
}

let addNewCode = function ($num) {

    if (p2.lblCode.text == "") {
        p2.lblCode.text = "<b>KODLAR</b>";
    }

    print("");
    Coding1.robotEnergy = 100;

    switch ($num) {
        case 1:
            p2.lblCode.text += "<br>robot.ilerle()";
            robot.ilerle();
            break;
        case 2:
            p2.lblCode.text += "<br>robot.geriDon()";
            robot.geriDon();
            break;
        case 3:
            p2.lblCode.text += "<br>robot.anahtarAl()";
            if (anahtarAra(robot.konum) == 1) {
                p2.sndKey.play();
            }
            robot.anahtarAl();
            //TODO: eğer anahtar var ise yoksa hata mesajı ver.
            break;
        case 4:
            p2.lblCode.text += "<br>robot.anahtarKullan()";

            // kapı var ise ses çal
            let robotYon = (robot.yon == "sağ") ? 1 : -1;
            if (kilitAra(robot.konum + robotYon) == 1) {
                p2.sndDoor.play();
            }

            robot.anahtarKullan();
            //TODO: eğer kilitli alan var ise ve anahtar var ise hata mesajı ver.
            //TODO: hata mesajı 4 sn sonra otomatik kaybolsun.
            break;
    }

    updateVars();
    isFinished();
    p2.lblCode.top = p2.height - p2.lblCode.height - 250;

}

let selectBtn = function ($num) {

    // Parametres:
    // 0: butonları normal haline çevir.
    // 1, 2, 3, 4: numaralı butonu seç, diğerlerini şeffaf yap.

    lockButtons = 1;

    for (var i = 1; i <= 4; i++) {

        let btn = "btn" + i;
        let btnc = "btn" + i + "-clicked";

        if ($num == 0) {
            p2[btn].element.style.opacity = 1;
            p2[btnc].visible = 0;

        } else {
            if ($num == i) {
                p2[btn].element.style.opacity = 1;
                p2[btnc].visible = 1;

            } else {
                p2[btn].element.style.opacity = 0.4;
                p2[btnc].visible = 0;

            }

        }

    }

    if ($num > 0) {
        setTimeout(function () {
            selectBtn(0);
            lockButtons = 0;
        }, 2000);
    }

}

let updateVars = function () {

    p2.var1.text = robot.konum;
    p2.var2.text = robot.anahtar;
    p2.var3.text = '"' + robot.yon + '"';

}

let isFinished = function () {

    if (hedefAra(robot.konum) == 1) {

        setTimeout(function () {
            p3.visible = 1;
            p2.sndSuccess.play();

            gameScore++;
            window.localStorage.setItem("game-robot-score-count", gameScore);
            showScore();

        }, 2000);

    }

}

sound = function ($ses) {
    // coding1.js hata vermesin diye boş fonksiyon eklendi.
}

let showScore = function () {
    if (gameScore) {
        p1.lblScore.text = "Tamamlanan Görev: " + gameScore;
    }
}
