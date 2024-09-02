/*
        
Matematik Yarışı

İki arabanın, bir sokak boyunca yarıştığı bir oyun.

Aracınızın ilerlemesi, matematik işlemlerini hızlı çözebilmenize bağlı. Yarış başlasın mı?

--

TODO:

- Başlangıç ekranındaki ayarlar, kaydedilecek. data nesnesini geliştir.

--

- İşlem alanında, 3, 2, 1, Başla yazdıktan sonra. İlk işlem gösterilsin.

Hafıza

Kodlama yaparken; hafızamızın güçlü olması çok önemli.

Değişken ve fonksiyonlara, ne işe yaradıklarını belirten güzel isimler vermeli ve tüm bu isimleri hatırlayabilmeliyiz.

Değişken ve fonksiyonlara verdiğimiz tüm isimleri hatırlamak, yazdığımız kod üzerindeki hakimiyetimizi arttıracaktır.

Hadi biraz hafızamızı güçlendirelim.

*/

var Page = {}
Page.init = function() {}

// Ortam ile yukarıya olan boşluk.
var TOP_SPACE = -100;

// Animasyon hızları.
var START_PAGE_LOOP_TIME = 15; // 18
var PAGE1_LOOP_TIME = 80;

// Sayfa değişkenleri.
var startPage, p1;

// Araba değişkenleri.
var car1;
var car1Fuel = 0;
var car2;

// Oyun alanını oluşturan kutular.
var boxes = {};

// Soru kutusu
var boxQuestion;
var lblQuestion;
// Oyun bitti ve yeni oyun kutusu
var boxGameFinished;

// Oyunun bitmesine kalan soru sayısı.
var questionLeft = 3
var winnerCar = ""
var gameStarted = 0;

var numberLimitsForLength = [9, 99, 999];
var mathSigns = ["+", "-", "*", "/"]

var number1Length = 1;
var number2Length = 1;

var number1 = 0;
var number2 = 0;
var mathSign = "";
var numberResult = 0;
var questionText = "";

var shownResult = "???"

var totalSolvedProblem;

// Starting timers
var countDownInt;
var countDownNum;


// Ses değişkenleri.
var sndTrue, sndFalse, sndFinish, sndGameMusic, sndSettingButton;

// İlk çalışan fonksiyon; herşey yüklendiğinde, otomatik çalıştırılır.
var start = function() {

    try {
        
        
        //data.save("matematik-yarisi-number1", arrTest);
        //var arrTest2 = data.load("matematik-yarisi-number1");
        

        page.color = "white";

        setAutoAdd(0);

        //repeatEvery
        setLoopTimer(START_PAGE_LOOP_TIME);

        page.zoom = 1;
        // İçeriği sığdır. İçeriğim: 600, Sığdıralacak Maksimum genislik: 450
        // TODO: 450 maksimum genişliği, yayınlamadan önce 850 yap.
        page.fit(600, 850);
        //page.fit()
        //page.fit(600, 850);

        window.localStorage.setItem("global-last-url", window.location.href.toString());

        //gameScore = window.localStorage.getItem("game-robot-score-count") || 0;

        sndTrue = new Sound();
        that.load("../sound/connected.wav");
        sndFinish = new Sound();
        that.load("../sound/success2.wav");
        sndFalse = new Sound();
        that.load("../sound/bip.wav");
        //sndGameMusic = new Sound();
        //that.load("../sound/music2.mp3");


        // Oyun oynama sayfası.
        p1 = new Box(0, 0);
        p1.visible = 0;
        p1.width = 600;
        p1.height = page.height;
        p1.center("left");
        createPage1();



        // Oyun ayarları sayfası (ilk sayfa)
        startPage = new Box(0, 0);
        startPage.visible = 0;
        startPage.width = p1.width;
        startPage.height = p1.height;
        startPage.left = p1.left;
        createStartPage();

        // TODO: TEST
        //p1.visible = 1;
        //startPage.visible = 0;

    } catch (e) {

        alert(e.message);

    }

}

// Her saniye çalışan fonksiyon.
var loop = function() {

    // Başlangıç ekranındkai objelerin hareketi
    if (startPage.visible == 1) {

        for (var i = 1; i <= 6; i++) {

            var objName = "bck" + i;

            startPage[objName].rotate += startPage[objName].value;
            startPage[objName].top -= startPage[objName].value;

            if (startPage[objName].top < -150) {
                startPage[objName].top = p1.height + 100;
            }

        }

    }

    // Arabaların ilerlemesi
    if (p1.visible == 1) {

        if (car1.left < 440 && car1Fuel > 0) {

            if (car1Fuel > 150) {

                car1.top += 4;
                car1.left += 8;
                car1Fuel -= 8;

            } else if (car1Fuel > 80) {

                car1.top += 3;
                car1.left += 6;
                car1Fuel -= 6;

            } else if (car1Fuel > 30) {

                car1.top += 2;
                car1.left += 4;
                car1Fuel -= 4;

            } else {

                car1.top += 1;
                car1.left += 2;
                car1Fuel -= 2;

            }

        }

        // Araba bitişe ulaştı.
        if (car1.left >= 440) {
            
            if (boxGameFinished.visible == 0) {
                
                console.log("car1 winnerCar:" + winnerCar);
            
                

                // Araba ilk ulaşan
                if (winnerCar == "" || winnerCar == "car1") {
                    winnerCar = "car1"
                    sndFinish.play();
                    boxGameFinished.lbl_title.text = "Tebrikler"
                    boxGameFinished.lbl_desc.text = "Rakibini geride bırakarak,<br>birinci oldun."
                    boxGameFinished.visible = 1

                } else {
                    boxGameFinished.lbl_title.text = "Tamamladın"
                    boxGameFinished.lbl_desc.text = "Bir sonraki yarış için,<br>iyi bir antreman oldu."
                    boxGameFinished.visible = 1

                }
                
            }

        }

        if (car2.left < 413) {

            if (gameStarted == 1 || winnerCar == "car1" || car1.left > -10) {

                if (random(3) == 1) {
                    car2.top += 1;
                    car2.left += 2;
                }

                if (random(3) == 1) {
                    car2.top += 1;
                    car2.left += 2;
                }

            }

        } else {

             console.log("car2 winnerCar:" + winnerCar);

            if (winnerCar == "") {
                winnerCar = "car2"
            }

        }

    }

}

var openPage1 = function() {

    //sndGameMusic.stop();
    //sndSettingButton.play();
    setLoopTimer(PAGE1_LOOP_TIME);
    startPage.visible = 0;
    p1.visible = 1;
    startNewGame();
    
}

var closePage1 = function() {

    setLoopTimer(START_PAGE_LOOP_TIME);
    //sndGameMusic.play();
    // Sayfa kapatılır ise geri sayımı durdur.
    clearInterval(countDownInt);
    p1.visible = 0;
    startPage.visible = 1;

}

// Yeni bir oyun başlat.
var startNewGame = function() {
    
    gameStarted = 0;
    questionLeft = 2;
    winnerCar = "";

    car1Fuel = 0;

    car1.top = 257 + TOP_SPACE;
    car1.left = -10;
    car2.top = 268 + TOP_SPACE;
    car2.left = -37;

    boxGameFinished.visible = 0;
    
    countDownNum = 3;
    
    lblQuestion.text = countDownNum;
    countDownNum--;

    countDownInt = setInterval(function() {

        if (countDownNum > -1) {
            if (countDownNum != 0) {
                lblQuestion.text = countDownNum;
            } else {
                lblQuestion.text = "Başla";
            }
            countDownNum--;

        } else {

            clearInterval(countDownInt);

            // 3 soru sorulacak.
            // 3, 2, 1, soru görünecek.
            gameStarted = 1;
            createQuestion();
        }

    }, 1000);



}

// Bir matematik sorusu oluştur.
var createQuestion = function() {

    number1 = random(0, numberLimitsForLength[number1Length - 1]);
    number2 = random(0, numberLimitsForLength[number2Length - 1]);

    var selectedMathSignIndex = random(0, mathSigns.length - 1);
    mathSign = mathSigns[selectedMathSignIndex];

    switch (mathSign) {
        case "+":
            numberResult = number1 + number2;
            break;
        case "-":
            numberResult = number1 - number2;
            break;
        case "*":
            numberResult = number1 * number2;
            break;
        case "/":

            // number1 her zaman büyük olan sayı olsun.
            if (number1 < number2) {
                var _tempNumber = number1;
                number1 = number2;
                number2 = _tempNumber;
            }

            // Bölme işleminde her iki sayıda sıfır olamaz.
            if (number2 == 0) {
                number2++;
            }

            if (number1 == 0) {
                number1++;
            }

            // her zaman birbirine tam bölünebilen iki sayı olmalı.
            numberResult = parseInt(number1 / number2);
            number1 = numberResult * number2;
            break;
    }

    questionText = number1 + " " + mathSign + " " + number2 + " = ";

    // sayı - ile başlıyor ise, ekle ama cevapı + olarak iste.
    if (numberResult < 0) {
        questionText += "-";
        numberResult *= -1;
    }

    // metin olarak kullan
    numberResult = str(numberResult);

    shownResult = "";

    for (var i = 0; i < numberResult.length; i++) {
        shownResult += "?";
    }

    lblQuestion.text = questionText + shownResult;

}

// Bir sayıya basıldı
var addOneCharOfAnswer = function($clickedObject) {
    
    
    if (gameStarted == 1) {

    // Örnek: numberResult: 123, shownResult: 1??, basılan sayı: 2
    // Basılan sayıyı karşılaştır, doğru ise soru işaretini güncelle. 

    for (var i = 0; i < shownResult.length; i++) {

        if (shownResult[i] == "?") {
            if (numberResult[i] == $clickedObject.value) {
                // Doğru sayı
                var _tempShownResult = "";

                for (var j = 0; j < shownResult.length; j++) {

                    if (j == i) {
                        _tempShownResult += $clickedObject.value;

                    } else {
                        _tempShownResult += shownResult[j];

                    }

                }

                shownResult = _tempShownResult;

                break;

            } else {
                // Yanlış sayı
                // Uyarı sesi çıkar.
                sndFalse.play();
                break;

            }
        }

    }

    lblQuestion.text = questionText + shownResult;

    if (shownResult == numberResult) {
        //TODO: kazandı. bir sonraki soruya geçebilir.
        sndTrue.play();
        
        var _totalSolverProblem = data.load("matematik-yarisi-totalSolvedProblem") || 0;
        _totalSolverProblem++;
        data.save("matematik-yarisi-totalSolvedProblem", _totalSolverProblem);
        
        totalSolvedProblem.text = "Toplam " + _totalSolverProblem + " matematik sorusu çözüldü.";

        car1Fuel += 150;

        if (questionLeft > 0) {
            questionLeft--;
            createQuestion();

        } else {
            lblQuestion.text = "...";
            gameStarted = 0;
        }

    }
        
    }

    //alert($clickedObject.value);

}

var createPage1 = function() {

    selectBox(p1);

    p1.border = 0;
    //p1.backgroundColor = "gold";
    p1.element.style.backgroundImage = "radial-gradient(Teal, seagreen)";

    //var back2 = new Image(0, 0, 600, 896);
    //back2.load("matematik-yarisi/back2.png");

    //var back1 = new Image(0, 0, 600, 896);
    //back1.load("matematik-yarisi/back1.png");

    // Koordinat sistemi karelerini oluştur.
    for (var y = 0; y <= 15; y++) {
        for (var x = 0; x <= 10; x++) {

            var boxGrid = new Box(0, 0, 128, 64);
            // 64 x 128
            var topCount = y - 1;
            var leftCount = x - 1;
            that.top = (64 * topCount) + (leftCount * 32) + TOP_SPACE;
            that.left = (64 * leftCount);
            that.border = 0;
            that.color = "transparent";
            that.borderColor = "white";
            that.opacity = 0.4;

            var boxKey = x + "-" + y;
            boxes[boxKey] = boxGrid;

        }
    }

    // ROAD TOP
    createRoad(5, 1, "road_end_NW");
    createRoad(4, 2, "road_straight_NW");
    createRoad(3, 3, "road_crossing_NW");

    // ROAD LEFT
    createRoad(0, 4, "road_drivewaySingle_NE");
    createRoad(1, 4, "road_crossing_NE");
    createRoad(2, 4, "road_intersectionLine_NE");
    createRoad(3, 4, "road_crossing_NE");
    createRoad(4, 4, "road_drivewaySingle_NE");
    createRoad(5, 4, "road_straight_NE");
    createRoad(6, 4, "road_drivewaySingle_NE");
    createRoad(7, 4, "road_straight_NE");
    createRoad(8, 4, "road_straight_NE");
    createRoad(9, 4, "road_straight_NE");
    createRoad(10, 4, "road_straight_NE");

    // Gardens
    createObject(boxes["0-0"].left - 30, boxes["0-0"].top + 7, 512, 512, "fence_wide_NE");
    createObject(boxes["4-0"].left, boxes["4-0"].top, 512, 512, "fence_large_NE");

    // Houses
    createHouse(1, 2, "house_type08_NW");
    createHouse(2, 2, "house_type11_NE");
    createHouse(6, 2, "house_type18_NE");
    createHouse(8, 2, "house_type13_NE");

    //lights
    createObject(-160, 14 + TOP_SPACE, 512, 512, "light_curved_NE");
    createObject(-30, 80 + TOP_SPACE, 512, 512, "light_curved_NE");
    createObject(130, 160 + TOP_SPACE, 512, 512, "light_curved_NE");
    createObject(300, 245 + TOP_SPACE, 512, 512, "light_curved_NE");

    //trees
    createObject(-120, 10 + TOP_SPACE, 512, 512, "tree_large_NE");
    createObject(-110, 7 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(-135, 8 + TOP_SPACE, 512, 512, "tree_small_NE");

    createObject(50, 30 + TOP_SPACE, 512, 512, "tree_large_NE");
    createObject(45, 35 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(130, -50 + TOP_SPACE, 512, 512, "tree_small_NE");

    createObject(0, -60 + TOP_SPACE, 512, 512, "tree_large_NE");

    // Bitişteki kırmızı çizgi
    var boxFinish = new Box(420, 390, 70, 70);
    that.color = "transparent";
    that.border = 0;
    that.element.style.borderBottom = "2px solid tomato";
    that.rotate = -30;
    that.opacity = 0.8;

    // Oyuncunun arabası
    car1 = new Image(0, 0, 128, 128);
    car1.load("matematik-yarisi/car/sedanSports_SE.png");
    // car1 başlangıç: -10 x 257
    car1.top = 257 + TOP_SPACE;
    car1.left = -10;

    // Rakibin arabası
    car2 = new Image(0, 0, 128, 128);
    car2.load("matematik-yarisi/car/hatchbackSports_SE.png");
    // car2 başlangıç: -37 x 268
    car2.top = 268 + TOP_SPACE;
    car2.left = -37;

    // trees (DOWN)
    createObject(-20, 190 + TOP_SPACE, 512, 512, "tree_large_NE");
    createObject(0, 207 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(-35, 208 + TOP_SPACE, 512, 512, "tree_small_NE");

    createObject(-175, 100 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(-230, 120 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(145, 290 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(0, 308 + TOP_SPACE, 512, 512, "tree_small_NE");
    createObject(175, 150 + TOP_SPACE, 512, 512, "tree_small_NE");

    // Yoldaki, engeller.
    createObject(64, -35 + TOP_SPACE, 512, 512, "construction_barrier_NW");
    createObject(-100, 45 + TOP_SPACE, 512, 512, "construction_pylon_SE");
    createObject(-82, 54 + TOP_SPACE, 512, 512, "construction_pylon_SE");

    // Alt button paneli
    var buttonsStartLeft = 10;
    var buttonsStartTop = 110;

    var boxButtons = new Box(0, p1.height - 330, 415, 276);
    that.round = 24;
    that.border = 0;
    that.color = "rgba(0, 0, 0, 0.5)";
    that.center("left");

    selectBox(that);

    lblQuestion = new Label(0, 20);
    that.width = boxButtons.width;
    //that.height = boxQuestion.height;
    that.fontSize = 46;
    that.text = "";
    that.textAlign = "center";
    that.textColor = "white";

    // Kontrol butonları
    for (var y = 1; y <= 2; y++) {
        for (var x = 1; x <= 5; x++) {

            var btnText = x + ((y - 1) * 5);
            var btnLeft = buttonsStartLeft + ((x - 1) * 80);
            var btnTop = buttonsStartTop + ((y - 1) * 80);

            if (btnText == 10) {
                btnText = 0;
            }

            createButtons(btnText, btnLeft, btnTop);

        }
    }

    selectBox(p1); //page di değiştirdim.

    // Oyun bitti ve yeni oyun kutusu
    boxGameFinished = new Box(boxButtons.left, boxButtons.top, boxButtons.width, boxButtons.height)
    that.visible = 0
    that.round = 24;
    that.border = 0;
    //that.opacity = 0.9
    that.color = "orangered";

    selectBox(that);

    // TEBRİKLER ARKA PLAN RESMİ
    boxGameFinished.img_win_background = new Image()
    that.load("matematik-yarisi/win.svg")
    that.width = 200
    that.height = 200
    that.left = -95
    that.top = 20
    that.opacity = 0.2


    // TEBRİKLER TİTLE
    boxGameFinished.lbl_title = new Label(0, 40);
    that.width = boxGameFinished.width;
    that.fontSize = 30;
    that.text = ""
    //that.text = "Tebrikler";
    that.textAlign = "center";
    that.textColor = "#141414";

    // TEBRİKLER DESCRİPTİON
    boxGameFinished.lbl_desc = new Label(0, 90);
    that.width = boxGameFinished.width;
    that.fontSize = 23
    that.text = ""
    //that.text = "Rakibini geride bırakarak,<br>birinci oldun."
    that.textAlign = "center";
    that.textColor = "#141414";
    that.opacity = 0.8;

    // TEBRİKLER NEW GAME BUTTON
    boxGameFinished.btn_new_game = new Button(0, 0)
    that.bottom = 40
    that.width = 190
    that.height = 60
    that.minimal = 1
    that.text = "YENİ YARIŞ"
    that.textColor = "white"
    that.color = "#141414"
    that.opacity = 0.9
    that.fontSize = 25
    that.round = 20
    that.center("left")
    that.onClick(startNewGame);

    selectBox(p1); // page
    
    // Kapatma tuşu
    var _closebtn = new Image(520, 30, 50, 50);
    that.load("matematik-yarisi/close-btn2.webp");
    that.onClick(closePage1);
    
    totalSolvedProblem = new Label();
    that.width = 600;
    that.bottom = 20;
    that.text = "Toplam " + (data.load("matematik-yarisi-totalSolvedProblem") || 0) + " matematik sorusu çözüldü.";
    that.fontSize = 14;
    that.textAlign = "center";
    that.textColor = "white";
    that.opacity = 0.4;
    
    selectBox(page);
    

}

var createHouse = function(x, y, key) {

    var house = new Image(0, 0, 512, 512);
    var housePositionKey = x + "-" + y;

    house.load("matematik-yarisi/house/" + key + ".png");

    house.top = boxes[housePositionKey].top - 155;
    house.left = boxes[housePositionKey].left - 192;

    return house;

}

var createRoad = function(x, y, key) {

    var road = new Image(0, 0, 512, 512);
    var roadPositionKey = x + "-" + y;

    road.load("matematik-yarisi/road/" + key + ".png");
    road.top = boxes[roadPositionKey].top - 155;
    road.left = boxes[roadPositionKey].left - 192;

    return road;

}

var createObject = function(left = 0, top = 0, width = 512, height = 512, key) {

    var object = new Image(left, top, width, height);
    object.load("matematik-yarisi/object/" + key + ".png");

    return object;

}

var createButtons = function(btnText, btnLeft, btnTop) {

    var _exSelectedBox = getSelectedBox();

    var boxButton = new Box(btnLeft, btnTop, 75, 75);
    //that.backgroundColor = "rgba(255, 255, 255, 0.9)";
    that.color = "tomato";
    that.round = 24;
    that.border = 0;
    that.value = btnText;

    that.onClick(addOneCharOfAnswer);

    selectBox(boxButton);
    var lblButton = new Label(0, 9, 75);
    that.text = btnText;
    that.fontSize = 40;
    //that.textColor = "tomato"
    that.textColor = "white"
    that.textAlign = "center";

    selectBox(_exSelectedBox);

}

// -- PAGE 2 --

var createStartPage = function() {

    selectBox(startPage);

    // Sayfa ayarları
    startPage.border = 0;
    startPage.element.style.backgroundImage = "radial-gradient(Teal, seagreen)";
    startPage.scrollY = 1;



    //p1.visible = 0;
    //setLoopTimer(15);

    var animationChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"];

    var boxAnimationContainer = new Box(0, 0, startPage.width, startPage.height);
    boxAnimationContainer.color = "transparent";
    boxAnimationContainer.border = 0;

    selectBox(boxAnimationContainer);

    // arka planda hareket eden nesneleri oluştur.
    for (var i = 1; i <= 6; i++) {

        var rNum = 0.3 + num(random(100) / 100);
        var objName = "bck" + i;
        startPage[objName] = new Box();

        startPage[objName].width = 120 * rNum; //93
        startPage[objName].height = 120 * rNum; //93
        startPage[objName].height += 50;
        startPage[objName].color = "transparent";
        startPage[objName].lblText = new Label();
        startPage[objName].lblText.text = animationChars[random(0, animationChars.length - 1)];
        startPage[objName].lblText.fontSize = startPage[objName].height - 30;
        startPage[objName].lblText.width = startPage[objName].width;
        startPage[objName].lblText.textAlign = "center";
        startPage[objName].lblText.top = -20;
        startPage[objName].lblText.textColor = "white";
        startPage[objName].add(startPage[objName].lblText);
        //startPage[objName].lblText.center(startPage[objName]);

        startPage[objName].value = random(4);
        startPage[objName].opacity = num(random(20) / 100);
        startPage[objName].left = random(p1.width);
        startPage[objName].top = random(p1.height);

    }

    selectBox(startPage);

    new Image(520, 30, 50, 50);
    that.load("matematik-yarisi/close-btn2.webp");
    that.onClick(function() {
        go("../pages/games.htm");
    });

    // Oyun logosu
    startPage.imgLogo = new Image(0, 0, 600, 260);
    that.load("matematik-yarisi/math-race-logo.png");
    //startPage.add(that);

    /* Sayılar kaç basamaklı olsun? Ayarları */
    startPage.boxSetting1 = new Box(20, 283, 560, 220);
    that.border = 0;
    that.color = "transparent";

    selectBox(that);

    var setting1Refresh = function() {
        
        data.save("matematik-yarisi-number1Length", number1Length);
        data.save("matematik-yarisi-number2Length", number2Length);

        if (number1Length == 1) {
            startPage.btn1.load("matematik-yarisi/ui/btn-min-disable.svg");
            startPage.btn2.load("matematik-yarisi/ui/btn-plus.svg");
            startPage.number1.load("matematik-yarisi/ui/num-1.png");

        } else if (number1Length == 2) {
            startPage.btn1.load("matematik-yarisi/ui/btn-min.svg");
            startPage.btn2.load("matematik-yarisi/ui/btn-plus.svg");
            startPage.number1.load("matematik-yarisi/ui/num-2.png");

        } else if (number1Length == 3) {
            startPage.btn1.load("matematik-yarisi/ui/btn-min.svg");
            startPage.btn2.load("matematik-yarisi/ui/btn-plus-disable.svg");
            startPage.number1.load("matematik-yarisi/ui/num-3.png");

        }

        if (number2Length == 1) {
            startPage.btn3.load("matematik-yarisi/ui/btn-min-disable.svg");
            startPage.btn4.load("matematik-yarisi/ui/btn-plus.svg");
            startPage.number2.load("matematik-yarisi/ui/num-1.png");

        } else if (number2Length == 2) {
            startPage.btn3.load("matematik-yarisi/ui/btn-min.svg");
            startPage.btn4.load("matematik-yarisi/ui/btn-plus-disable.svg");
            startPage.number2.load("matematik-yarisi/ui/num-2.png");

        }

    }

    sndSettingButton = new Sound();
    that.load("../sound/bubble.wav");

    startPage.imgSettingBackground1 = new Image(0, 0, 560, 220);
    that.load("matematik-yarisi/ui/back-setting1.png");

    startPage.btn1 = new Image(26, 108, 88, 91); //88, 91
    that.load("matematik-yarisi/ui/btn-min.svg");
    startPage.btn1.onClick(function() {

        if (number1Length > 1) {
            number1Length--;
            sndSettingButton.play();
            setting1Refresh();
        }

    });

    startPage.number1 = new Image(0, 0, 33, 56);
    that.load("matematik-yarisi/ui/num-3.png");
    that.aline(startPage.btn1, "right", 10);
    that.top += 16;

    startPage.btn2 = new Image(26, 108, 88, 91);
    that.load("matematik-yarisi/ui/btn-plus-disable.svg");
    that.aline(startPage.number1, "right", 10)
    that.top -= 16;
    startPage.btn2.onClick(function() {

        if (number1Length < 3) {
            number1Length++;
            sndSettingButton.play();
            setting1Refresh();
        }

    });

    startPage.btn3 = new Image(307, 108, 88, 91);
    that.load("matematik-yarisi/ui/btn-min-disable.svg");
    that.onClick(function() {

        if (number2Length > 1) {
            number2Length--;
            sndSettingButton.play();
            setting1Refresh();
        }

    });

    startPage.number2 = new Image(0, 0, 33, 56);
    that.load("matematik-yarisi/ui/num-1.png");
    that.aline(startPage.btn3, "right", 10);
    that.top += 16;

    startPage.btn4 = new Image(26, 108, 88, 91);
    that.load("matematik-yarisi/ui/btn-plus.svg");
    that.aline(startPage.number2, "right", 10)
    that.top -= 16;
    that.onClick(function() {

        if (number2Length < 2) {
            number2Length++;
            sndSettingButton.play();
            setting1Refresh();
        }

    });
    
    
    number1Length = data.load("matematik-yarisi-number1Length") || 1;
    number2Length = data.load("matematik-yarisi-number2Length") || 1;

    setting1Refresh();

    /* END boxSetting1 */

    /* setting 2 */

    selectBox(startPage);

    startPage.boxSetting2 = new Box(0, 0, 560, 239);
    that.border = 0;
    that.color = "transparent";
    //that.top = 550;
    //that.left = 20;
    that.aline(startPage.boxSetting1, "bottom", 30);

    selectBox(startPage.boxSetting2);

    startPage.imgSetting2Background = new Image(0, 0);
    that.autoSize = 4;
    that.load("matematik-yarisi/ui/back-setting2.png");
    //that.aline(startPage.imgSetting1);

    var createMathSignsArray = function() {

        var newArray = [];

        if (startPage.s2B1.value == 1) {
            newArray.push("+");
        }

        if (startPage.s2B2.value == 1) {
            newArray.push("-");
        }

        if (startPage.s2B3.value == 1) {
            newArray.push("*");
        }

        if (startPage.s2B4.value == 1) {
            newArray.push("/");
        }

        mathSigns = newArray;

    }

    var setting2ButtonsOnClicked = function(myImage, btnNumber) {

        if (myImage.value == 1 && mathSigns.length < 2) {

            // En az bir işlem seçili olmalı.
            sndFalse.play();

        } else {

            if (myImage.value == 1) {
                myImage.load("matematik-yarisi/ui/s2-b" + btnNumber + "-unse.svg");
                myImage.value = 0;

            } else {
                myImage.load("matematik-yarisi/ui/s2-b" + btnNumber + ".svg");
                myImage.value = 1;

            }

            sndSettingButton.play();
            createMathSignsArray();

        }

    }
    
    //data.save("matematik-yarisi-s2B1Value", 1);
    //data.save("matematik-yarisi-s2B2Value", 1);
    //data.save("matematik-yarisi-s2B3Value", 1);
    //data.save("matematik-yarisi-s2B4Value", 1);

    startPage.s2B1 = new Image(30, 112); //88, 91
    that.autoSize = 1;
    that.value = data.load("matematik-yarisi-s2B1Value");
    if (that.value == undefined) { that.value = 1 }
    var _imageType = (that.value == 1) ? "" : "-unse";
    that.load("matematik-yarisi/ui/s2-b1" + _imageType + ".svg");
    that.onClick(function(myImage) {
        
        setting2ButtonsOnClicked(myImage, 1);
        data.save("matematik-yarisi-s2B1Value", myImage.value || 0);

    });

    startPage.s2B2 = new Image(164, 112); //88, 91
    that.autoSize = 1;
    //that.load("matematik-yarisi/ui/s2-b2-unse.svg");
    that.value = data.load("matematik-yarisi-s2B2Value") || 0;
    var _imageType = (that.value == 1) ? "" : "-unse";
    that.load("matematik-yarisi/ui/s2-b2" + _imageType + ".svg");
    that.onClick(function(myImage) {

        setting2ButtonsOnClicked(myImage, 2);
        data.save("matematik-yarisi-s2B2Value", myImage.value || 0);

    });

    startPage.s2B3 = new Image(298, 112); //88, 91
    that.autoSize = 1;
    //that.load("matematik-yarisi/ui/s2-b3-unse.svg");
    that.value = data.load("matematik-yarisi-s2B3Value") || 0;
    var _imageType = (that.value == 1) ? "" : "-unse";
    that.load("matematik-yarisi/ui/s2-b3" + _imageType + ".svg");
    that.onClick(function(myImage) {

        setting2ButtonsOnClicked(myImage, 3);
        data.save("matematik-yarisi-s2B3Value", myImage.value || 0);

    });

    startPage.s2B4 = new Image(432, 112); //88, 91
    that.autoSize = 1;
    //that.load("matematik-yarisi/ui/s2-b4-unse.svg");
    that.value = data.load("matematik-yarisi-s2B4Value") || 0;
    var _imageType = (that.value == 1) ? "" : "-unse";
    that.load("matematik-yarisi/ui/s2-b4" + _imageType + ".svg");
    that.onClick(function(myImage) {

        setting2ButtonsOnClicked(myImage, 4);
        data.save("matematik-yarisi-s2B4Value", myImage.value || 0);

    });
    
    createMathSignsArray();

    selectBox(startPage);

    startPage.imgStartButton = new Image(0, 0, 228, 91);
    that.load("matematik-yarisi/ui/start-button.svg");
    that.center("left");
    that.top = startPage.boxSetting2.top + startPage.boxSetting2.height + 120;
    that.onLoad(function(pImage) {

    });
    that.onClick(openPage1);

    startPage.imgStartButtonDesc = new Image(0, 0, 513, 54);
    that.load("matematik-yarisi/ui/start-button-desc.svg");
    that.aline(startPage.imgStartButton, "top", 20);
    that.center("left");
    //that.center(startPage, "left");
    //that.top = startPage.boxSetting2.top + startPage.boxSetting2.height + 100;
    that.onLoad(function(pImage) {
        //alert(pImage.width);
        //alert(pImage.height);
    });


    startPage.boxBottomSpace = new Box();
    that.aline(startPage.imgStartButton, "bottom", 10);
    that.height = 40;
    that.color = "transparent";
    that.border = 0;

    startPage.visible = 1;


}

var createNumberCount = function() {

    var boxCont = createBox();
    that.width = 180;
    that.height = 50;
    that.color = "transparent";
    that.border = 0;

    selectBox(boxCont);

    boxCont.btn1 = createButton();
    that.text = "+";
    that.width = 50;
    that.right = 0;
    that.element.style.borderRadius = "13px";
    that.element.style.fontFamily = "arial";
    that.element.style.fontSize = "40px";
    that.color = DEFAULT.WARNING_COLOR;

    boxCont.btn2 = createButton();
    that.text = "-";
    that.width = 50;
    that.element.style.borderRadius = "13px";
    that.element.style.fontFamily = "arial";
    that.element.style.fontSize = "40px";
    that.color = DEFAULT.WARNING_COLOR;

    boxCont.number = new Label(0, 4);
    that.text = "0";
    that.width = boxCont.width;
    that.textAlign = "center";
    that.fontSize = 30;

    that = boxCont;

    return boxCont;

}