export default function RoleGate({ role, userRole, children }) {
  const allowed = Array.isArray(role) ? role.includes(userRole) : role === userRole;
  if (!allowed) return null;
  return children;
}
