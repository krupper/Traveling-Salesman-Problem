/**
 * @name Node class
 * @description representing a simple Node
 */

function Node(canvas){
  this.canvas = canvas;
  this.x = false;
  this.y = false;
  this.name = false;
  this.radius = 20;
  this.color = '#FF0000';
  this.id = false;

  this.getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.setPosition = function(name){
    var canvasWidth = this.canvas.canvas.clientWidth;
    var canvasHeight = this.canvas.canvas.clientHeight;


    while (true) {
      this.x = this.getRandomNumber((this.radius * 2), canvasWidth - (this.radius * 2));
      this.y = this.getRandomNumber((this.radius * 2), canvasHeight - (this.radius * 2));
      if(!nodeMap.isPositionOccupied(this.x, this.y)){
        break;
      }
    }

    this.name = 'node: ' + name;
    this.id = name;
  };

  this.draw = function(){
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.canvas.fillStyle = this.color;
    this.canvas.fill();

    this.canvas.font = '15pt Arial';
    this.canvas.fillStyle = '#000';
    this.canvas.textAlign = 'center';
    this.canvas.fillText(this.id, this.x, this.y+7);
  };
}
