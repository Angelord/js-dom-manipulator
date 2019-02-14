




// exdom().remove(); //Wipe the file
// exdom().tag("p").setClass("mainParagraph"); 
exdom().id("test").setClass("specialDiv");
exdom().tag("p").class("specialPar").setClass("notSpecialPar");

exdom().id("test").setId("newId");
exdom().id("newId").prepend("<p>Prepended paragraph</p>");
exdom().id("newId").append("<p>Appended paragraph</p>");