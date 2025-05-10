interface Device {
  turnOn(): void;
  turnOff(): void;
  getStatus(): string;
}

class Light implements Device {
  #name: string;
  #isOn: boolean;

  constructor(name: string) {
    this.#name = name;
    this.#isOn = false;
  }

  turnOn(): void {
    this.#isOn = true;
  }

  turnOff(): void {
    this.#isOn = false;
  }

  getStatus(): string {
    return `${this.#name} is ${this.#isOn ? 'on' : 'off'}`;
  }
}

class Thermostat implements Device {
  #name: string;
  #isOn: boolean;
  #temperature: number;

  constructor(name: string, temperature: number = 22.0) {
    this.#name = name;
    this.#isOn = false;
    this.#temperature = temperature;
  }

  turnOn(): void {
    this.#isOn = true;
  }

  turnOff(): void {
    this.#isOn = false;
  }

  setTemperature(temperature: number): void {
    this.#temperature = temperature;
  }

  getStatus(): string {
    const status = this.#isOn ? 'on' : 'off';
    return `${this.#name} is ${status} at ${this.#temperature}°C`;
  }
}

class SmartHome {
  #devices: Device[];

  constructor() {
    this.#devices = [];
  }

  addDevice(device: Device): void {
    this.#devices.push(device);
  }

  turnAllOn(): void {
    this.#devices.forEach((device) => device.turnOn());
  }

  turnAllOff(): void {
    this.#devices.forEach((device) => device.turnOff());
  }

  getStatusAll(): string[] {
    return this.#devices.map((device) => device.getStatus());
  }
}

const home = new SmartHome();

const livingRoomLight = new Light('Living Room Light');
const bedroomLight = new Light('Bedroom Light');
const thermostat = new Thermostat('Main Thermostat');

home.addDevice(livingRoomLight);
home.addDevice(bedroomLight);
home.addDevice(thermostat);

home.turnAllOn();
console.log(home.getStatusAll());

home.turnAllOff();
console.log(home.getStatusAll());
