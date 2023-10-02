class Lamp {
    constructor(type, power, leds, manufacturer) {
      this.type = type;
      this.power = power;
      this.leds = leds;
      this.manufacturer = manufacturer;
    }
  }
  
  const main = document.getElementById('main');
  const addLampBtn = document.getElementById('add-lamp');
  const sortBtn = document.getElementById('sort');
  const lampTypeInput = document.getElementById('lamp-type');
  const lampPowerInput = document.getElementById('lamp-power');
  const lampLedsInput = document.getElementById('lamp-leds');
  const lampManufacturerInput = document.getElementById('lamp-manufacturer');
  const searchInput = document.getElementById('search');
  
  let data = [];
  
  function updateDOM(providedData = data) {
    main.innerHTML = '<h2>Lamp List</h2>';
  
    providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('lamp');
      element.innerHTML = `<strong>${item.type}</strong> - Power: ${item.power} Watts, LEDs: ${item.leds}, Manufacturer: ${item.manufacturer}`;
      main.appendChild(element);
    });
  }
  
  function sortByPower() {
    data.sort((a, b) => a.power - b.power);
    updateDOM();
  }
  
  function addLamp() {
    const type = lampTypeInput.value;
    const power = parseFloat(lampPowerInput.value);
    const leds = parseInt(lampLedsInput.value);
    const manufacturer = lampManufacturerInput.value;
  
    if (!isNaN(power) && !isNaN(leds) && type && manufacturer) {
      const newLamp = new Lamp(type, power, leds, manufacturer);
      data.push(newLamp);
      updateDOM();
  
      lampTypeInput.value = '';
      lampPowerInput.value = '';
      lampLedsInput.value = '';
      lampManufacturerInput.value = '';
    } else {
      alert('Invalid input. Please provide valid lamp details.');
    }
  }
  
  function searchLamp() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredLamps = data.filter(lamp =>
      lamp.type.toLowerCase().includes(searchTerm)
    );
    updateDOM(filteredLamps);
  }
  
  addLampBtn.addEventListener('click', addLamp);
  sortBtn.addEventListener('click', sortByPower);
  searchInput.addEventListener('input', searchLamp);
  
  updateDOM();
  