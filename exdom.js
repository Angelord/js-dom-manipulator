
var exdom = function(pattern) {

    var all = document.getElementsByTagName("*");
    return new ExdomElement( [ document ] );
    
    return get(pattern);

    function get(pattern) {
        var patternRef = pattern ? pattern.trim() : "*";

        if(patternRef == "*") {
            return all();
        }

        if(patternRef[0] == "#") {
            var elId = patternRef.substring(1);
            return id(elId);
        }

        if(substring.contains(".")) {

        }
    }

    function all() {
        var all = document.getElementsByTagName("*");
        return new ExdomElement(all);
    };

    function id(elId) {
        var elWithId = document.getElementById(id);
        return new ExdomElement( [elWithId] );
    } 

    function getByClassName() {

    }
};

function ExdomElement(elements) {

    var elementsRef = elements ? elements : [ ];

    this.all = function() {
        var allElements = [];

        CollectionUtil.forEach(elementsRef, function(element) {
            allElements.pushArray(element.getElementsByTagName("*"));
        });

        return new ExdomElement(allElements);
    }

    this.id = function(idName) {
        for(var i = 0; i < elementsRef.length; i++) {
            var element = elementsRef[i].getElementById(idName);
            if(element) {
                return new ExdomElement( [element] );
            }
        }
    }

    this.setClass = function(name) {
        CollectionUtil.forEach(elementsRef, function(element) {
            element.className = name;
        });

        return this;
    }
}

