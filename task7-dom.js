//parentElement
var i=document.querySelector(".title").parentElement;

i.style.backgroundColor="green";

//children
var children=document.getElementById("items").children;

//lastelementchild
var y=document.getElementById("items").lastElementChild;
y.textContent="lastchild4";
y.style.backgroundColor="#7e7eb1";

//firstelementchild

var y3=document.getElementById("items").firstElementChild;
y3.style.backgroundColor="yellow";


//nextelementsibling
var i=document.getElementById("list-group-item").nextElementSibling;
i.style.backgroundColor="red";

//previouselementsibling
var a=document.getElementById("pre").previousElementSibling;
a. innerText=" Item3 & previous element sibling";
a.style.backgroundColor="#e5b72c";


// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


var newDiv1 =  document.createElement('div');

// Create text node
var newDivText1 = document.createTextNode('Hello World');
// Add text to div
newDiv1.appendChild(newDivText1);

var target=document.getElementById("items");

target.insertBefore(newDiv1, target.children[0]);
newDiv1.style.fontSize = '30px';
