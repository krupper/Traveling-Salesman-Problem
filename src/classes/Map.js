/**
 * @name Map class
 * @description representing the map that containing the nodes
 */

function Map(){
  this.canvasObject = document.getElementById('canvas');
  this.canvas = this.canvasObject.getContext('2d');
  this.amountOfNodes = 20;
  this.nodes = [];

  this.generateNodes = function(){
    for (var i = 0; i < this.amountOfNodes; i++) {
      var node = new Node(this.canvas);
      node.setPosition(i);
      this.nodes.push(node);
    }
  };

  this.isPositionOccupied = function(x, y){
    var status = false;
    for (var i = 0; i < this.nodes.length; i++) {
      var radius = this.nodes[i].radius;
      var nodeX = this.nodes[i].x;
      var nodeY = this.nodes[i].y;
      var margin = 20;

      if(x >= (nodeX - (radius + margin)) && x <= (nodeX + (radius + margin)) && y >= (nodeY - (radius + margin)) && y <= (nodeY + (radius + margin))) {
        status = true;
      }
    }

    return status;
  }

}
