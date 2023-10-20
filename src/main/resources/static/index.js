const lampTypeInput = document.getElementById('lamp-type');
const lampPowerInput = document.getElementById('lamp-power');
const lampLedsInput = document.getElementById('lamp-leds');
const lampManufacturerInput = document.getElementById('lamp-manufacturer');
const addLampBtn = document.getElementById('add-lamp');
const main = document.getElementById('main');

async function getLamps() {
  const response = await fetch('/api/lamps');
  if (response.ok) {
    const lamps = await response.json();
    updateDOM(lamps);
  }
}

function updateDOM(lamps) {
  main.innerHTML = '<h2>Lamp List</h2>';

  lamps.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('lamp');
    element.innerHTML = `
            <strong>${item.type}</strong>: Power = ${item.power} Watts; LEDs = ${item.leds}; Manufacturer = ${item.manufacturer}
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>`;
    main.appendChild(element);

    const editButton = element.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editLamp(element, item);
    });

    const deleteButton = element.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      deleteLamp(item.id);
    });
  });
}

async function addLamp() {
  const type = lampTypeInput.value;
  const power = parseFloat(lampPowerInput.value);
  const leds = parseInt(lampLedsInput.value);
  const manufacturer = lampManufacturerInput.value;

  if (!isNaN(power) && !isNaN(leds) && type && manufacturer) {
    const newLamp = { type, power, leds, manufacturer };

    const response = await fetch('/api/lamps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLamp),
    });
    console.log(response)
    if (response.ok) {
      const lamps = await response.json();
      updateDOM(lamps);
      lampTypeInput.value = '';
      lampPowerInput.value = '';
      lampLedsInput.value = '';
      lampManufacturerInput.value = '';
    } else {
      alert('Invalid input. Please provide valid lamp details.');
    }
  }
}

function editLamp(lampElement, lampData) {
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
  lampElement.appendChild(document.createTextNode('Type: '));
  lampElement.appendChild(editTypeInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(document.createTextNode('Power (Watts): '));
  lampElement.appendChild(editPowerInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(document.createTextNode('Number of LEDs: '));
  lampElement.appendChild(editLedsInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(document.createTextNode('Manufacturer: '));
  lampElement.appendChild(editManufacturerInput);
  lampElement.appendChild(document.createElement('br'));
  lampElement.appendChild(saveButton);

  saveButton.addEventListener('click', async () => {
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

    const updatedLamp = {
      id: lampData.id,
      type: updatedType,
      power: updatedPower,
      leds: updatedLeds,
      manufacturer: updatedManufacturer,
    };

    try {
      const response = await fetch(`/api/lamps/${lampData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLamp),
      });

      if (response.ok) {
        getLamps();
      } else {
        alert('Failed to update lamp. Please try again.');
      }
    } catch (error) {
      console.error('Error updating lamp:', error);
      alert('An error occurred while updating the lamp. Please try again.');
    }
  });
}

function deleteLamp(id) {
  const confirmDelete = confirm('Are you sure you want to delete this lamp?');

  if (confirmDelete) {
    fetch(`/api/lamps/${id}`, {
      method: 'DELETE',
    })
        .then(response => {
          if (response.ok) {
            getLamps();
          } else {
            alert('Failed to delete the lamp. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error deleting lamp:', error);
          alert('An error occurred while deleting the lamp. Please try again.');
        });
  }
}

window.onload = () => {
  getLamps();
  addLampBtn.addEventListener('click', addLamp);
};