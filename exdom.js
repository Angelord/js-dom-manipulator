
var exdom = function(pattern) {

    var all = document.getElementsByTagName("*");
    return new ExdomElement( [ document ] ).children();
};

var createElement = function() {

}

function ExdomElement(elements) {

    var elementsRef = elements ? elements : [ ];

    this.exists = function() {
        return elementsRef.length != 0;
    }

    this.parent = function() {
        if(elementsRef.length > 0) {
            var parent = elementsRef[0].parentNode;
            return new ExdomElement( [parent] );
        }
        return this;
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

    this.class = function(className) {
        if(!className) { return this; }

        var filtered = CollectionUtil.filter(elementsRef, (element) => {
            return element.className == className;
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

    this.setId = function(idName) {
        var idRef = idName ? idName : "";

        elementsRef.forEach(element => {
            element.id = idRef;
        });

        return this;
    }

    this.setClass = function(className) {
        var classRef = className ? className : "";

        elementsRef.forEach(element => {
            element.className = classRef;
        });
        
        return this;
    }

    this.setTag = function(tagName) {
        var tagRef = tagName ? tagName.toUpperCase() : "";

        elementsRef.forEach(element => {
            element.tagName = tagRef;
        }); 

        return this;
    }

    this.append = function(text) {
        if(!text) { return; }

        elementsRef.forEach(element => {
            element.innerHTML += text;
        });

        return this;
    }

    this.prepend = function(text) {
        if(!text) { return; }

        elementsRef.forEach(element => {
            element.innerHTML = text + element.innerHTML;
        }); 

        return this;
    }

    this.getInnerHtml = function() {
        return elementsRef.length > 0 ? elementsRef[0].innerHTML : "";
    }

    this.setInnerHtml = function(html) {
        var htmlRef = html ? htmlRef : "";

        elementsRef.forEach(element => {
            element.innerHTML = htmlRef;
        });

        return this;
    }

    this.getText = function() {
        return elementsRef.length > 0 ? elementsRef[0].textContent : "";
    }

    this.setText = function(text) {
        var textRef = text ? text : "";

        elementsRef.forEach(element => {
            element.textContent = textRef;
        });

        return this;
    }

    this.remove = function() {

        elementsRef.forEach(element => {
            if(element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    }
}

