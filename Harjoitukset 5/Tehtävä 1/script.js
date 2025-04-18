function getHouses() {
  return fetch('housesData.json').then(response => response.json());
};

function renderHouses() {
  let housediv = document.getElementById("houses");

  getHouses().then(houses => {        
    houses.forEach(house => {        
      let housecontainer = document.createElement('div');
      housecontainer.className = 'houseContainer';

      let image = document.createElement('img');
      image.src = house.image;
      image.className = 'houseImage';

      let header = document.createElement('p');
      header.className = 'header';
      header.innerHTML = house.address;

      let area = document.createElement('p');
      area.className = 'text';
      area.innerHTML = house.size + 'm2';

      let text = document.createElement('p');
      text.className = 'text';
      text.innerHTML = house.text;

      let price = document.createElement('p');
      price.className = 'text';
      price.innerHTML = house.price + '€';

      housecontainer.appendChild(image);
      housecontainer.appendChild(header);
      housecontainer.appendChild(area);
      housecontainer.appendChild(text);
      housecontainer.appendChild(price);
      housediv.appendChild(housecontainer);
    });
  });
};

renderHouses()