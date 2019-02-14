
var exdom = function(pattern) {

    var patternRef = pattern ? pattern.trim() : "*";

    if(patternRef == "*") {
        var all = document.getElementsByTagName("*");
        return new ExdomElement(all);
    }



    function ExdomElement(elements) {

        var elementsRef = elements ? elements : [ ];
    
        this.setClass = function(name) {
            CollectionUtil.forEach(elementsRef, function(element) {
                element.className = name;
            });

            return this;
        }
    }
};

