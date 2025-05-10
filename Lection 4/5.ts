class AccessManager {
  #employee: Employee1;

  constructor(employee: Employee1) {
    this.#employee = employee;
  }

  checkAccessLevel(resource: { accessLevel: number }) {
    return this.#employee.unsafe.accessLevel <= resource.accessLevel;
  }

  setAccessLevel(newAccessLevel: number) {
    if (newAccessLevel <= this.#employee.unsafe.accessLevel) {
      this.#employee.unsafe.accessLevel = newAccessLevel;
    }
  }
}

interface UnsafeEmployee1 {
  id: number;
  accessLevel: number;
}

class Employee1 {
  #id: number;
  #accessLevel: number;

  accessManager = new AccessManager(this);

  constructor(id: number, accessLevel: number) {
    this.#id = id;
    this.#accessLevel = accessLevel;
  }

  get unsafe(): UnsafeEmployee1 {
    return {
      id: this.#id,
      accessLevel: this.#accessLevel,
    };
  }
}
