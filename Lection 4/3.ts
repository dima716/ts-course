interface NotificationStrategy {
  notify(notification: string): void;
}

class Email implements NotificationStrategy {
  notify(notification: string) {
    console.log(`${notification} is send via email`);
  }
}

class Sms implements NotificationStrategy {
  notify(notification: string) {
    console.log(`${notification} is send via sms`);
  }
}

class Push implements NotificationStrategy {
  notify(notification: string) {
    console.log(`${notification} is send via push`);
  }
}

class NotificationService {
  #strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.#strategy = strategy;
  }

  setStrategy(strategy: NotificationStrategy) {
    this.#strategy = strategy;
  }

  notify(message: string | null) {
    if (message == null) {
      throw new Error('message is empty');
    }

    this.#strategy.notify(message);
  }
}

const notificationService = new NotificationService(new Email());
notificationService.notify('hello!');
notificationService.setStrategy(new Sms());
notificationService.notify('hello!');
notificationService.setStrategy(new Push());
notificationService.notify('hello!');

export {};
