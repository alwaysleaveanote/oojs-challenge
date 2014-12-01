/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */


//Practice with classical
function Rectangle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
        canvasCtx.stroke();
    }
}



Rectangle.prototype = new Shape();

registerClassicalShape('Rectangle', Rectangle);


//Practice with prototypal
function createRectangle2(left, top, width, height, stylesMap) {
    var Rectangle2 = createShape(left, top, width, height, stylesMap);
    console.log(Rectangle2);

    Rectangle2.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
        canvasCtx.stroke();
    }

    return Rectangle2;
}


registerPrototypalShape('Rectangle2', createRectangle2);

//Creating circle class
//Assuming width = height
function Circle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    console.log(this);

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left + this.width/2, this.top + this.height/2, 
            this.width/2, 0, 2 * Math.PI);
        canvasCtx.fill();
    }
}



Circle.prototype = new Shape();

registerClassicalShape('Circle', Circle);


//My own class
function MyClass(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    console.log(this);

    this.renderShape = function(canvasCtx) {
        canvasCtx.fillStyle='rgb(0,0,0)';
        canvasCtx.beginPath();
        canvasCtx.arc(this.left + 12, this.top - this.height/2, 
            this.width/4 + 29, 0, 2 * Math.PI);
        canvasCtx.fill();

        canvasCtx.fillStyle='rgb(150,150,150)';
        canvasCtx.beginPath();
        canvasCtx.arc(this.left - this.width/2 - 2, this.top - this.height/2, 
            this.width/2, 0, 2 * Math.PI);
        canvasCtx.fill();

        canvasCtx.beginPath();
        canvasCtx.arc(this.left + 32, this.top - this.height/2, 
            this.width/2, 0, 2 * Math.PI);
        canvasCtx.fill();
        
        canvasCtx.fillText('Wee!', this.left, this.top);
    }
}



MyClass.prototype = new Shape();

registerClassicalShape('MyClass', MyClass);
