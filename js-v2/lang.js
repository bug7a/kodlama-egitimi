const lang = function(text, textId) {

    var answer = text;

    if (lang.getSelectedLanguageId() != lang.DEFAULT_LANGUAGE_ID) {
        answer = lang.getTextById(textId);
    }

    return answer;

};

// 1: Türkçe, 2: English
lang.DEFAULT_LANGUAGE_ID = 1;

lang.getSelectedLanguageId = function() {

    return app.langId;

};

lang.getTextById = function(textId) {

};
