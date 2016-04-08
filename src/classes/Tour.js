/**
 * @name Tour class
 * @description representing a tour between two Nodes
 * @version 2
 */

function Tour(){
  this.distance = false;
  this.nodes0 = nodeMap.nodes.slice(0); // make a copy of all nodes tp prevent an empty node array in nodeMap [clone array]
  this.nodes = [];
  this.drawTour = false;

  this.findTour = function(){
    var numberOfNodes = this.nodes0.length;
    for (var i = 0; i < numberOfNodes; i++) {
      var random = this.getRandomNumber(0, this.nodes0.length - 1);
      this.nodes[i] = this.nodes0[random];

      // remove array items
      this.nodes0.splice(random, 1);
    }

    this.estimateDistance();
  };

  this.estimateDistance = function(){
    if(this.distance === false){
      for (var i = 0; i < this.nodes.length -1; i++) {
        var deltaX = this.nodes[i+1].x - this.nodes[i].x;
        var deltaY = this.nodes[i+1].y - this.nodes[i].y;

        this.distance += Math.round(Math.sqrt(deltaX * deltaX + deltaY * deltaY));

        if(this.drawTour) {
          this.draw(i);
        }

      }
    }

    return this.distance;
  };

  this.draw = function(bestTour){
    for (var i = 0; i < this.nodes.length -1; i++) {
      var startX = this.nodes[i+1].x;
      var stopX = this.nodes[i].x;
      var startY = this.nodes[i+1].y;
      var stopY = this.nodes[i].y;

      nodeMap.canvas.beginPath();
      nodeMap.canvas.moveTo(startX, startY);
      nodeMap.canvas.lineTo(stopX, stopY);

      if(bestTour){
        nodeMap.canvas.strokeStyle = 'rgba(255,0,0,0.4)';
        nodeMap.canvas.fillStyle = 'rgba(255,0,0,0.4)';
        nodeMap.canvas.lineWidth = 5;
      }else{
        nodeMap.canvas.strokeStyle = 'rgba(0,0,0,0.2)';
        nodeMap.canvas.fillStyle = 'rgba(0,0,0,0.2)';
      }
      nodeMap.canvas.stroke();
    }

    this.drawTour = true;
  }

  this.mutate = function(){
    var tour = new Tour();
    tour.nodes = this.nodes.slice(0); // clone nodes array

    var r1 = this.getRandomNumber(0, tour.nodes.length -1);
    var r2 = this.getRandomNumber(0, tour.nodes.length -1);

    var node = tour.nodes[r1];
    tour.nodes[r1] = tour.nodes[r2];
    tour.nodes[r2] = node;

    tour.estimateDistance();

    return tour;
  };

  this.getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


}
