type User = {
    id: number;
    name: string;
    email?: string;
}

type UsersDict = {
    [key: User['id']]: User;
}

function getUserEmail(id: number, users: UsersDict): string | undefined {
    return users[id]?.email;
}