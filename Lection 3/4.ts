interface User2 {
  data: {
    name: string;
    age: number;
  };
  name: this['data']['name'];
  age: this['data']['age'];
}

export {};
