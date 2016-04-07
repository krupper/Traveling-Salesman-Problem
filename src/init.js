$(function(){
  window.nodeMap = new Map();
  nodeMap.generateNodes();

  var nodes = nodeMap.nodes;
  var numberOfTours = 50;


  var tour = new Tour(nodeMap.nodes[0], nodeMap.nodes[1]);
  tour.estimateDistance();
});
