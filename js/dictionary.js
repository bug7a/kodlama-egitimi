var words = [
    ["hello", "merhaba"],
    ["welcome", "hoşgeldiniz"],
    ["start", "başlat, başlatmak"],
    ["create", "oluştur, oluşturmak"],
    ["left", "sol"],
    ["right", "sağ"],
    ["top", "üst"],
    ["bottom", "alt"],
    ["width", "genişlik"],
    ["height", "yükseklik"],
    ["pixel (px)", "piksel, görüntü elemanı"],
    ["text", "metin"],
    ["color", "renk"],
    ["page", "sayfa"],
    ["label", "etiket"],
    ["text box", "metin kutusu"],
    ["title", "başlık"],
    ["button", "buton, düğme"],
    ["image", "görüntü, resim"],
    ["box", "kutu"],
    ["on", "üzerinde, üstünde, esnasında"],
    ["change", "değiştir, değiştirmek"],
    ["changed", "değişti"],
    ["click", "tıkla, tıklamak"],
    ["clicked", "tıklandı"],
    ["on click", "tıklama esnasında"],
    ["load", "yükle, yüklemek"],
    ["loaded", "yüklendi"],
    ["loading", "yükleniyor"],
    ["loop", "döngü"],
    ["print", "yazdır, yazdırmak"],
    ["function", "fonksiyon, işlev"],
    ["visible", "görünür, görülebilen"],
    ["border", "sınır, kenar"],
    ["round", "yuvarlak"],
    ["rotate", "döndür, döndürmek"],
    ["opacity", "şeffaf olmayış, saydam olmayış"],
    ["align", "hizala, hizalamak"],
    ["aline", "dizilmek"],
    ["center", "merkez, orta"],
    ["font", "yazı tipi"],
    ["size", "boyut, büyüklük"],
    ["delete", "sil, silmek"],
    ["deleted", "silindi"],
    ["if", "eğer, ise"],
    ["else", "başka, yoksa, aksi halde"],
    ["break", "kır, kırmak"],
    ["random", "rasgele"],
    ["background", "arka plan"],
    ["new", "yeni"],
    ["add", "ekle, eklemek"],
    ["event", "olay, durum"],
    ["listen", "dinle, dinlemek"],
    ["listener", "dinleyici"],
    ["set", "ayarlamak"],
    ["get", "almak, elde etmek"],
    ["my", "benim"],
    ["shape", "şekil"],
    ["variable (var)", "değişken"],
    ["string (str)", "metin tipinde değişken, karakter dizisi"],
    ["number (num)", "numara, sayı"],
    ["integer", "tam sayı tipinde değişken"],
    ["float", "ondalıklı sayı tipinde değişken"],
    ["array", "dizi tipinde değişken"],
    ["object", "nesne"],
    ["object-based", "nesne tabanlı"],
    ["that", "o, şu"],
    ["default", "varsayılan"],
    ["white", "beyaz"],
    ["gray, grey", "gri"],
    ["black", "siyah"],
    ["red", "kırmızı"],
    ["green", "yeşil"],
    ["blue", "mavi"],
    ["orange", "turuncu, portakal"],
    ["yellow", "sarı"],
    ["pink", "pembe"],
    ["purple", "mor"],
    ["brown", "kahverengi"],
    ["dark", "koyu, karanlık"],
    ["light", "ışık, aydınlık, hafif, açık"],
    ["darkblue", "koyu mavi, lacivert"],
    ["lightblue", "açık mavi"],
    ["transparent", "şeffaf"],
    ["zero", "sıfır"],
    ["one", "bir"],
    ["two", "iki"],
    ["three", "üç"],
    ["four", "dört"],
    ["five", "beş"],
    ["six", "altı"],
    ["seven", "yedi"],
    ["eight", "sekiz"],
    ["nine", "dokuz"],
    ["ten", "on (sayı olarak)"],
    ["clock", "saat"],
    ["wall clock", "duvar saati"],
    ["hour", "saat (sa)"],
    ["one hour", "bir saat (zaman birimi)"],
    ["two hours", "iki saat (zaman birimi)"],
    ["minute", "dakika"],
    ["second", "saniye"],
    ["milisecond", "milisaniye"],
    ["time", "zaman, süre"],
    ["timer", "zamanlayıcı"],
    ["error", "hata, yanlış"],
    ["alert", "uyarı, uyarmak, alarm"],
    ["message", "mesaj"],
    ["open", "aç, açık"],
    ["folder", "klasör"],
    ["file", "dosya"],
    ["files", "dosyalar"],
    ["run", "çalıştırmak, koşmak"],
    ["debug", "hata ayıklama"],
    ["code", "kod"],
    ["coding", "kodlama"],
    ["name", "isim, ad"],
    ["rename", "yeniden adlandır"],
    ["automatic (auto)", "otomatik"],
    ["cut", "kesim, kesmek"],
    ["copy", "kopya, kopyasını çıkarmak"],
    ["paste", "yapıştır, yapıştırmak"],
    ["find", "bulmak"],
    ["replace", "yerine koymak"],
    ["undo", "geri alma"],
    ["save", "kaydet, kayıt etmek"],
    ["select", "seç, şeçmek"],
    ["go", "git, gitmek"],
    ["refresh", "yenile, yenilemek"],
    ["value", "değer"]
    
];

var dictionaryAppElement = ""
            
var txtSearch = ""
var imgSearchTitle = ""
var lblSearchAlert = ""
var boxWordTitles = ""
var boxWords = ""

var selectEnglishWords = function($words = []) {
    
    var _words = []
    
    for (var key in $words) {
        
        for (var originalkey in words) {
            
            if (words[originalkey][0].search($words[key]) != -1) {
                _words.push(words[originalkey])
                
            }
            
        }
        
    }
    
    if (_words.length > 0) {
        words = _words
        
    }
    
}

var startDictionary = function($dictionaryContainerElementID = 'dictionary-app') {
    
    // sözlüğün oluşturulacağı div elementini ayarla.
    dictionaryAppElement = document.getElementById($dictionaryContainerElementID); 
    selectBox({element:dictionaryAppElement})

    boxWordTitles = createBox()
    that.left = 0
    that.top = 0
    that.width = 560
    that.height = 41
    that.border = 0

    boxWordTitles.imgBackground = createImage()
    that.load("../img/lessons2/word-titles.svg")
    that.top = 0
    that.left = 0
    boxWordTitles.add(that)

    txtSearch = createTextBox()
    that.right = 25
    that.top = 4 //-145
    that.width = 150
    that.height = 34
    //that.title = "Ara:"
    txtSearch.onChange(refreshWordList)

    imgSearchTitle = createImage()
    that.load("../img/lessons2/search-icon.svg")
    that.width = 18
    that.height = 18
    that.aline(txtSearch, "left")
    that.top += 8
    that.right += 8
    that.opacity = 0.8

    /*
    lblSearchTitle = createLabel()
    that.text = "Ara:"
    that.width = 40
    that.textSize = 16
    //that.element.style.backgroundColor = "red"
    that.aline(txtSearch, "left", 0)
    that.top += 8
    */

    lblSearchAlert = createLabel()
    that.text = "Aradığınız kriterlere uygun bir kelime bulunamadı!"
    that.width = 560
    that.textAlign = "center"
    that.top = 60
    that.opacity = 0.95
    //that.textColor = "gold"
    that.textSize = 14

    // Tüm kelimeleri taşıyan box.
    boxWords = new Box()
    that.width = 560
    that.height = 0
    that.top = 41
    that.border = 0

    //dictionaryAppElement.style.backgroundColor = "red"

    refreshWordList()


}

// Tüm kelimeleri temizle ve arama kelimesine göre yeniden oluştur.
var refreshWordList = function() {

    // Öncekileri nesneleri
    boxWords.html = ""
    boxWords.height = 0
    dictionaryAppElement.style.height = "202px"

    // Yeni nesneleri ekle.
    var _wordCount = 0
    var _searchingKeyword = (txtSearch.text).toLowerCase()
    //var _searchingKeyword = /le/g

    for (var i = 0; i < words.length; i++) {

        var _keyword1 = words[i][0]
        var _keyword2 = words[i][1]

        if (_keyword1.search(_searchingKeyword) != -1 ||
            _keyword2.search(_searchingKeyword) != -1 || 
            _searchingKeyword == "") {

            createWord(words[i][0], words[i][1]);
            that.top = (41 * _wordCount)
            boxWords.add(that)
            boxWords.height = that.top + 41

            if ((_wordCount % 2) != 0) {
                that.imgWordBackground.opacity = 0.4
                that.color = "beige"
            }

            dictionaryAppElement.style.height = (boxWords.top + boxWords.height + 120) + "px"
            dictionaryAppElement.style.height = (boxWords.top + boxWords.height + 120) + "px"

            _wordCount++

        }

    }

    // Kelime bulunamadı, uyarı göster.
    if (_wordCount == 0) {
        lblSearchAlert.visible = 1
    } else {
        lblSearchAlert.visible = 0
    }

}

// Bir satır kelime oluştur.
var createWord = function($englishWord, $turkishWord) {

    var _boxWord  = createBox()
    that.width = 560
    that.height = 41
    that.border = 0
    that.color = "white"

    _boxWord.imgWordBackground = createImage()
    that.load("../img/lessons2/word-background.svg")
    _boxWord.add(that)

    _boxWord.englishWord = createLabel()
    that.text = $englishWord
    that.left = 20
    that.top = 8
    that.width = 168
    that.fontSize = 18
    
    _boxWord.add(that)

    _boxWord.turkishWord = createLabel()
    that.text = $turkishWord
    that.left = 220
    that.top = 8
    that.width = 325
    that.textSize = 18
    
    if ($turkishWord.length > 28) {
        that.fontSize = 17
    }
    
    _boxWord.add(that)

    that = _boxWord

    return _boxWord;

}