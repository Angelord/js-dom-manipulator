
var exdom = function(pattern) {

    return get(pattern);

    function get(pattern) {
        var patternRef = pattern ? pattern.trim() : "*";

        if(patternRef == "*") {
            return getAll();
        }

        if(patternRef[0] == "#") {
            var id = patternRef.substring(1);
            return getById(id);
        }
    }

    function getAll() {
        var all = document.getElementsByTagName("*");
        return new ExdomElement(all);
    };

    function getById(id) {
        var elWithId = document.getElementById(id);
        return new ExdomElement( [elWithId] );
    } 
};

function ExdomElement(elements) {

    var elementsRef = elements ? elements : [ ];

    this.setClass = function(name) {
        CollectionUtil.forEach(elementsRef, function(element) {
            element.className = name;
        });

        return this;
    }
}

