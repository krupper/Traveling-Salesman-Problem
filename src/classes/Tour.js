/**
 * @name Tour class
 * @description representing a tour between two Nodes
 */

function Tour(node1, node2){
  this.node1 = node1;
  this.node2 = node2;
  this.distance = 0;

  this.estimateDistance = function(){
    var distance = this.distance;
    if(distance != 0){
      var deltaX = Math.abs(this.node1.x - this.node2.x);
      var deltaY = Math.abs(this.node1.y - this.node2.y);

      var distance = Math.round(Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)));
    }

    return distance;
  };

  this.print = function(){

  };

}
