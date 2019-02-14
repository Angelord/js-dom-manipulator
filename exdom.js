
var exdom = function(pattern) {

    var all = document.getElementsByTagName("*");
    return new ExdomElement( [ document ] );
};

function ExdomElement(elements) {

    var elementsRef = elements ? elements : [ ];

    this.exists = function() {
        return elementsRef.length != 0;
    }

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
        return new ExdomElement();
    }

    this.remove = function() {
        elementsRef.forEach(element => {
            if(element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    }

    this.setClass = function(className) {
        CollectionUtil.forEach(elementsRef, function(element) {
            element.className = className;
        });

        return this;
    }
}

