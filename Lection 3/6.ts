const enum UserRole1 {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

const enum AccountStatus1 {
    Active =  'Active',
    Suspended = 'Suspended',
    Banned = 'Banned',
}


function checkPermissions(role: UserRole1, status: AccountStatus1): boolean {
    return role !== UserRole1.Viewer && status !== AccountStatus1.Banned;
}

// В итоговом JavaScript-коде const enum не попадает вообще.
// Все обращения к его членам заменяются (инлайнятся) на соответствующие литеральные значения на этапе компиляции.