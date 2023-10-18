const main = document.getElementById('main');
const lampTypeInput = document.getElementById('lamp-type');
const lampPowerInput = document.getElementById('lamp-power');
const lampLedsInput = document.getElementById('lamp-leds');
const lampManufacturerInput = document.getElementById('lamp-manufacturer');
const addLampBtn = document.getElementById('add-lamp');
const sortBtn = document.getElementById('sort');
const countLedsBtn = document.getElementById('count-leds');
const searchInput = document.getElementById('search');
const deleteLampBtn = document.getElementById('delete-lamp');

let information = [
  { type: 'Rpink', power: 10, leds: 15, manufacturer: 'Promin' },
  { type: 'Miwa', power: 25, leds: 0, manufacturer: 'Brille' },
  { type: 'Amor', power: 50, leds: 5, manufacturer: 'Iskra' }
];

function updateDOM(providedData = information) {
  main.innerHTML = '<h2>Lamp List</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('lamp');
    element.innerHTML = `
      <strong>${item.type}</strong>: Power = ${item.power} Watts; LEDs = ${item.leds}; Manufacturer = ${item.manufacturer}
      <button class="edit-button">Edit</button>`;
    main.appendChild(element);
    
    const editButton = element.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editLamp(element, item);
    });
  });
}

function addLamp() {
  const type = lampTypeInput.value;
  const power = parseFloat(lampPowerInput.value);
  const leds = parseInt(lampLedsInput.value);
  const manufacturer = lampManufacturerInput.value;

  if (!isNaN(power) && !isNaN(leds) && type && manufacturer) {
    const newLamp = { type, power, leds, manufacturer };
    information.push(newLamp);
    updateDOM();

    lampTypeInput.value = '';
    lampPowerInput.value = '';
    lampLedsInput.value = '';
    lampManufacturerInput.value = '';
  } else {
    alert('Invalid input. Please provide valid lamp details.');
  }
}

function sortByPower() {
  const searchTerm = searchInput.value.toLowerCase();

  information.sort((a, b) => a.power - b.power);

  const filteredLamps = information.filter(lamp =>
    lamp.type.toLowerCase().includes(searchTerm)
  );

  updateDOM(filteredLamps);
}

function countLeds() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredLamps = information.filter(lamp =>
    lamp.type.toLowerCase().includes(searchTerm)
  );

  const totalLeds = filteredLamps.reduce((total, lamp) => total + lamp.leds, 0);
  const resultElement = document.getElementById('total-leds-result');

  if (resultElement) {
    resultElement.textContent = `Total LEDs: ${totalLeds}`;
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'total-leds-result';
    newElement.textContent = `Total LEDs: ${totalLeds}`;

    main.appendChild(newElement);
  }
}

countLedsBtn.addEventListener('click', countLeds);

function searchLamp() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredLamps = information.filter(lamp =>
    lamp.type.toLowerCase().includes(searchTerm)
  );
  updateDOM(filteredLamps);
}

function editLamp(lampElement, lampData, fieldToEdit) {
  const typeLabel = document.createElement('label');
  typeLabel.textContent = 'Type: ';
  
  const powerLabel = document.createElement('label');
  powerLabel.textContent = 'Power (Watts): ';
  
  const ledsLabel = document.createElement('label');
  ledsLabel.textContent = 'Number of LEDs: ';
  
  const manufacturerLabel = document.createElement('label');
  manufacturerLabel.textContent = 'Manufacturer: ';

  const editTypeInput = document.createElement('input');
  editTypeInput.type = 'text';
  editTypeInput.value = lampData.type;

  const editPowerInput = document.createElement('input');
  editPowerInput.type = 'number';
  editPowerInput.value = lampData.power;
  editPowerInput.min = 0;

  const editLedsInput = document.createElement('input');
  editLedsInput.type = 'number';
  editLedsInput.value = lampData.leds;
  editLedsInput.min = 0;

  const editManufacturerInput = document.createElement('input');
  editManufacturerInput.type = 'text';
  editManufacturerInput.value = lampData.manufacturer;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';

  lampElement.innerHTML = '';
  lampElement.appendChild(typeLabel);
  lampElement.appendChild(editTypeInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(powerLabel);
  lampElement.appendChild(editPowerInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(ledsLabel);
  lampElement.appendChild(editLedsInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(manufacturerLabel);
  lampElement.appendChild(editManufacturerInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(saveButton);

  saveButton.addEventListener('click', () => {
    const updatedType = editTypeInput.value;
    const updatedPower = parseFloat(editPowerInput.value);
    const updatedLeds = parseInt(editLedsInput.value);
    const updatedManufacturer = editManufacturerInput.value;

    if (updatedType === '' || isNaN(updatedPower) || isNaN(updatedLeds) || updatedManufacturer === '') {
      alert('Enter all fields');
      return;
    }

    if (updatedPower < 0 || updatedLeds < 0) {
      alert('Power and LEDs cannot be less than 0');
      return;
    }

    lampData.type = updatedType;
    lampData.power = updatedPower;
    lampData.leds = updatedLeds;
    lampData.manufacturer = updatedManufacturer;

    updateDOM();
  });

  if (fieldToEdit) {
    fieldToEdit.textContent = `Editing: ${fieldToEdit.id}`;
  }
}

addLampBtn.addEventListener('click', addLamp);
sortBtn.addEventListener('click', sortByPower);
searchInput.addEventListener('input', searchLamp);

updateDOM();

deleteLampBtn.addEventListener('click', deleteLamp);

function deleteLamp() {
  const lampId = prompt('Enter the ID of the lamp to delete:');
  if (lampId === null) return; 
  const parsedLampId = parseInt(lampId);
  if (!isNaN(parsedLampId)) {
    fetch(`/api/lamps/${parsedLampId}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((message) => {
        alert(message);
        updateDOM();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to delete lamp.');
      });
  } else {
    alert('Invalid input. Please enter a valid lamp ID.');
  }
}
