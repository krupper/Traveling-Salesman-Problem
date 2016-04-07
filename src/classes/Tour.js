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
          var startX = this.nodes[i+1].x;
          var stopX = this.nodes[i].x;
          var startY = this.nodes[i+1].y;
          var stopY = this.nodes[i].y;

          nodeMap.canvas.beginPath();
          nodeMap.canvas.moveTo(startX, startY);
          nodeMap.canvas.lineTo(stopX, stopY);
          nodeMap.canvas.stroke();
        }

      }
    }

    return this.distance;
}

  this.getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


}
