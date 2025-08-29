const UserRole = {
  Admin: 'Admin',
  Editor: 'Editor',
  Viewer: 'Viewer',
} as const;

const AccountStatus = {
  Active: 'Active',
  Suspended: 'Suspended',
  Banned: 'Banned',
} as const;

const AllRolesAndStatuses = {
  ...UserRole,
  ...AccountStatus,
} as const;

type RoleOrStatus =
  (typeof AllRolesAndStatuses)[keyof typeof AllRolesAndStatuses];

function getAccessLevel(value: RoleOrStatus): string {
  if (
    value === AllRolesAndStatuses.Admin ||
    value === AllRolesAndStatuses.Active
  ) {
    return 'Full access';
  } else if (value === AllRolesAndStatuses.Editor) {
    return 'Limited access';
  } else {
    return 'No access';
  }
}
