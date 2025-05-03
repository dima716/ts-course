type Person = [name: string, age: number, email?: string];

function greet([name, age, email]: Person): string {
    return `Привет, ${name}! Тебе ${age} лет.${email != null ? ` Контакты ${email}` : ''}`;
}