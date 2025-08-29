interface User1 {
  id: number;
  name: string;
}

interface User1 {
  email?: string;
  logIn: () => void;
}

const user: User1 = {
  id: 0,
  name: 'John',
  email: 'john@yandex.ru',
  logIn: () => {},
};

function print(user: User1): void {
  console.log(user);
  user.logIn();
}

print(user);
