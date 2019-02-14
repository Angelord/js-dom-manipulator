




// exdom().remove(); //Wipe the file
// exdom().tag("p").setClass("mainParagraph"); 
exdom().id("test").setClass("specialDiv");
exdom().tag("p").class("specialPar").setClass("notSpecialPar");

exdom().id("test").prepend("<p>Prepended paragraph</p>");
exdom().id("test").append("<p>Appended paragraph</p>");