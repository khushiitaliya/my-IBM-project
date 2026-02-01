let length;
let width;
let hight;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
hight = parseFloat(document.getElementById('hight').value);

 
let area = length * width * hight;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
