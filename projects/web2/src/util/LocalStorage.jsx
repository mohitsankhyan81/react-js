const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Update",
        description: "Update the dashboard UI components",
        date: "2025-11-29",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve issue with password validation",
        date: "2025-11-20",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate the new payment API",
        date: "2025-11-15",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Landing Page",
        description: "Develop the hero section and features section",
        date: "2025-11-30",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Indexing",
        description: "Improve SQL performance using indexes",
        date: "2025-11-22",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "JWT Setup",
        description: "Configure JWT auth for the new module",
        date: "2025-11-10",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "SEO Optimization",
        description: "Add meta tags and improve page SEO",
        date: "2025-12-01",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Content Upload",
        description: "Upload product descriptions",
        date: "2025-11-25",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email Automation",
        description: "Fix SMTP email automation",
        date: "2025-11-18",
        category: "Automation"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Testing Checkout Flow",
        description: "Perform test cases on checkout flow",
        date: "2025-11-29",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Unit Tests",
        description: "Add unit tests for user module",
        date: "2025-11-21",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server Migration",
        description: "Migrate app to new AWS server",
        date: "2025-11-12",
        category: "DevOps"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social Media Campaign",
        description: "Plan marketing posts for next week",
        date: "2025-12-02",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Ad Banner Design",
        description: "Create banner for Diwali sale",
        date: "2025-11-24",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Video Editing",
        description: "Edit product promo video",
        date: "2025-11-14",
        category: "Media"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const employees=localStorage.getItem('employees')
  const admin=localStorage.getItem('admin')


  return {employees,admin}
}
