$(function(){
  window.nodeMap = new Map();
  nodeMap.generateNodes();

  /*var tour1 = new Tour();
  tour1.drawTour = true;
  tour1.findTour();

  var tour2 = new Tour();
  tour1.drawTour = false;
  tour2.findTour();*/

  window.TSP_v1 = new TSP_v1();
  TSP_v1.findBestTour();
});
