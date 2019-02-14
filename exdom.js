
var exdom = function(pattern) {

    var all = document.getElementsByTagName("*");
    return new ExdomElement( [ document ] ).children();
};

function ExdomElement(elements) {

    var elementsRef = elements ? elements : [ ];

    this.exists = function() {
        return elementsRef.length != 0;
    }

    this.children = function() {
        var allElements = [];

        CollectionUtil.forEach(elementsRef, function(element) {
            allElements.pushArray(element.getElementsByTagName("*"));
        });

        return new ExdomElement(allElements);
    }

    this.id = function(idName) {
        var filtered = CollectionUtil.filter(elementsRef, (element) => {
            return element.id == idName;
        });

        return new ExdomElement(filtered);
    }

    this.tag = function(tagName) {
        if(!tagName) { return this; }

        var tagNameRef = tagName.toUpperCase();

        var filtered = CollectionUtil.filter(elementsRef, (element) => {
            return element.tagName == tagNameRef;
        });

        return new ExdomElement(filtered);
    }

    this.class = function(className) {
        if(!className) { return this; }

        var filtered = CollectionUtil.filter(elementsRef, (element) => {
            return element.className == className;
        });

        return new ExdomElement(filtered);
    }

    this.remove = function() {
        elementsRef.forEach(element => {
            if(element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    }

    this.setClass = function(className) {
        elementsRef.forEach(element => {
            element.className = className;
        });
        
        return this;
    }
}

