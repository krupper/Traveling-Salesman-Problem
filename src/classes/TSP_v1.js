/**
 * @name implementation of the TSP
 * @description first implementation of the Traveling Salesman Problem
 */

function TSP_v1(){
  this.numberOfTours = 50;
  this.tours = [];

  this.findBestTour = function(){
    for (var i = 0; i < this.numberOfTours; i++) {
      this.tours[i] = new Tour();
      this.tours[i].drawTour = true;
      this.tours[i].findTour();
    }

    console.log(this.tours);
  };

}
