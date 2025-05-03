type Employee = {
    id: number,
    department: string
}

type Manager = {
    teamSize: number,
    role: string
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    id: 0,
    department: 'it',
    teamSize: 5,
    role: 'Architect'
}