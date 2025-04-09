// Class that handles running/walking pace calculations
// Takes time (hours, minutes, seconds) and distance (kilometers)
// and calculates the speed in km/h
class inputData {
  constructor(h,min,sec,km) {
    this.h = h;          
    this.min = min;      
    this.sec = sec;
    this.km = km;         
  };

  // Calculates the speed in km/h based on time and distance
  calcKmhPace() {
    var tunnit = parseInt(this.h)+(parseInt(this.min)*60+parseInt(this.sec))/3600;
    var tulos = this.km/tunnit;
    tulos = tulos.toFixed(2);
    return tulos;
  };
};

const result = (hours, minutes, seconds, kilometers) => {
  // Create new object and calculate pace
  let tulos = new inputData(hours, minutes, seconds, kilometers).calcKmhPace();

  // Update the results element with calculated pace
  document.getElementById('results').innerHTML = 
      `<p>Vauhti: ${tulos} km/h</p>`;
};