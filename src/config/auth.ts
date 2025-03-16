export interface User {
  id: string;
  name: string;
  email: string;
  role: "candidate" | "recruiter";
  avatar: string;
}

export const DEMO_ACCOUNTS = {
  candidate: {
    email: "demo@candidate.com",
    password: "demo123",
    user: {
      id: "1",
      name: "John Doe",
      email: "demo@candidate.com",
      role: "candidate" as const,
      avatar: "/avatars/user.jpg",
    },
  },
  recruiter: {
    email: "demo@recruiter.com",
    password: "demo123",
    user: {
      id: "2",
      name: "Jane Smith",
      email: "demo@recruiter.com",
      role: "recruiter" as const,
      avatar: "/avatars/recruiter.jpg",
    },
  },
};

export function validateLogin(email: string, password: string): User | null {
  // Check candidate credentials
  if (
    email === DEMO_ACCOUNTS.candidate.email &&
    password === DEMO_ACCOUNTS.candidate.password
  ) {
    return DEMO_ACCOUNTS.candidate.user;
  }

  // Check recruiter credentials
  if (
    email === DEMO_ACCOUNTS.recruiter.email &&
    password === DEMO_ACCOUNTS.recruiter.password
  ) {
    return DEMO_ACCOUNTS.recruiter.user;
  }

  return null;
}
