

//GETTING ELEMENTS
// exdom()                                  //Returns all elements
// exdom().tag("p");                        //Returns all paragraphs
// exdom().tag("p").class("special");       //Returns all paragraphs with class 'special'
// exdom().id("someId");                    //Returns element with id 'someId'
// if(exdom().id("someId").exists()) {}     //Returns true if an element with id 'someId' exists


//SETTING PROPERTIES
// exdom().id("test").setId("newId").setClass("someClass");    //Change id of element with id 'test' to 'newId' and its class to 'someClass'
// exdom().tag("div").setClass("specialDiv");                  //Set class of divs to 'specialDiv'


//ADDING CHILDREN
// exdom().id("someId").prependHtml("<p>Prepended paragraph</p>");
// exdom().id("someId").appendHtml("<p>Appended paragraph</p>");
// exdom().id("someId").appendNode("p").setText("Newly created");   //Creates a paragraph with text 'Newly created' as child of element with id 'someId'
// exdom().id("someId").prependNode("p").setText("Prepended");     //Same but added as first child


//SELECTION
// exdom().id("someId").parent();                  //Get the parent node of element with id 'someId'
// exdom().id("someId").children();                //Get the children of element with id 'someId'
// exdom().id("someId").firstChild();              //Get the next sibling
// exdom().id("someId").prevSibling();             //Get the previous sibling
// exdom().id("someId").nextSibling();             //Get the next sibling


//REMOVAL
// exdom().remove();                            //Remove all elements
// exdom().tag("p").class("special").remove();  //Remove paragraphs with class 'special'
// exdom().id("someId").remove();               //Remove element with id 'someId'  