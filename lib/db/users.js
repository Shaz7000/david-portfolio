// Mock users — passwords are plaintext for demo only.
export const usersDB = [
  {
    id: "u-field-1",
    name: "Alex Field",
    email: "alex@stmary.health",
    password: "demo",
    role: "field_engineer",
    orgId: "org-stmary",
  },
  {
    id: "u-expert-1",
    name: "Sam Expert",
    email: "sam@hq.health",
    password: "demo",
    role: "expert_engineer",
    orgId: "org-stmary",
  },
  {
    id: "u-admin-1",
    name: "Morgan Admin",
    email: "morgan@stmary.health",
    password: "demo",
    role: "admin",
    orgId: "org-stmary",
  },
];

export function findUserByEmail(email) {
  return usersDB.find((u) => u.email.toLowerCase() === email.toLowerCase());
}
