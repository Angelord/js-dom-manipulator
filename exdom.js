
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
        if(elementsRef.length == 0) { return this; }  

        var parent = elementsRef[0].parentNode;
        return new ExdomElement( [parent] );
    }

    this.prevSibling = function() {
        if(elementsRef.length == 0) { return this; }

        var prev = elementsRef[0].previousSibling;
        return new ExdomElement( [prev] );
    }

    this.nextSibling = function() {
        if(elementsRef.length == 0) { return this; }

        var next = elementsRef[0].nextSibling;
        return new ExdomElement( [next] );
    }

    this.children = function() {
        var allElements = [];

        CollectionUtil.forEach(elementsRef, function(element) {
            allElements.pushArray(element.getElementsByTagName("*"));
        });

        return new ExdomElement(allElements);
    }

    this.firstChild = function() {
        if(elementsRef.length == 0) { return this; } 

        var first = elementsRef[0].firstChild;
        return new ExdomElement( [first] );
    }

    this.lastChild = function() {
        if(elementsRef.length == 0) { return this; }

        var last = elementsRef[0].lastChild;
        return new ExdomElement( [last] );
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

    this.appendNode = function(tag) {
        if(!tag || elementsRef.length == 0) { return this; }
        var tagRef = tag.toUpperCase();

        var newChild = document.createElement(tagRef);
        var appended = elementsRef[0].appendChild(newChild);

        return new ExdomElement( [appended] );
    }

    this.prependNode = function(tag) {
        if(!tag || elementsRef.length == 0) { return this; }
        var tagRef = tag.toUpperCase();

        var newChild = document.createElement(tagRef);
        var appended = elementsRef[0].insertBefore(newChild, elementsRef[0].firstChild);

        return new ExdomElement( [appended] );
    }

    this.appendHtml = function(text) {
        if(!text) { return; }

        elementsRef.forEach(element => {
            element.innerHTML += text;
        });

        return this;
    }

    this.prependHtml = function(text) {
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

