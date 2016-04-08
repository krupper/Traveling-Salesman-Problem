/**
 * @name implementation of the TSP
 * @description first implementation of the Traveling Salesman Problem
 */

function TSP_v1(){
  this.numberOfTours = 50;
  this.generations = 1000;
  this.tours = [];

  this.findBestTour = function(){
    for (var i = 0; i < this.numberOfTours; i++) {
      this.tours[i] = new Tour();
      this.tours[i].drawTour = false;
      this.tours[i].findTour();
    }

    for (var j = 0; j < this.generations; j++) {
      // sort the tours according their distance
      this.tours.sort(function(a, b){
       return a.distance-b.distance
      });

      // the worst 20% of the tours die
      for (var i = 0; i < this.tours.length / 5; i++) { // 1/5 = 20%
        this.tours[this.tours.length - 1 - i] = this.tours[this.getRandomNumber(0, (this.tours.length * 4 / 5) - 1)].mutate(); // 4/5 = 80%
        //this.tours[this.tours.length - 1 - i] = this.tours[this.getRandomNumber(0, (this.tours.length * 4 / 5) - 1)].mutate();  // dynmic adjustment
      }

      // ToDo: recombination
    }

    // draw all tours
    for (var key in this.tours) {
      if (this.tours.hasOwnProperty(key)) {
        this.tours[key].draw();
      }
    }

    // sort the tours according their distance
    this.tours.sort(function(a, b){
     return a.distance-b.distance
    });

    // draw best tour
    console.log('best tour');
    console.log(this.tours[0]);
    this.tours[0].draw(true);

    console.log('-----------');

    // draw the nodes
    for (var key in this.tours[0].nodes) {
      if (this.tours[0].nodes.hasOwnProperty(key)) {
        this.tours[0].nodes[key].draw();
      }
    }


    // Debug
    for (var key in this.tours) {
      if (this.tours.hasOwnProperty(key)) {
        //this.tours[key].draw();
        console.log(this.tours[key]);
      }
    }
    //console.log(this.tours);
  };

  this.getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

}
