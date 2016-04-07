$(function(){
  window.nodeMap = new Map();
  nodeMap.generateNodes();

  var tour1 = new Tour();
  tour1.drawTour = true;
  tour1.findTour();

  var tour2 = new Tour();
  tour2.findTour();

  console.log(tour1);
  console.log(tour2);

  window.TSP_v1 = new TSP_v1();
  TSP_v1.findBestTour();
});
