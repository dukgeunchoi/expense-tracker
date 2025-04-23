export const baseUrl = "https://expense-tracker-backend-o0j5.onrender.com";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/signup",
    GET_USER_INFO: "/api/auth/info",
    UPDATE_PROFILE: "/api/auth/update",
    CHANGE_PASSWORD: "/api/auth/change-password",
  },
  DASHBOARD: {
    GET_DATA: "/api/dashboard",
  },
  INCOME: {
    GET_INCOMES: "/api/income",
    ADD_INCOME: "/api/income/add",
    DELETE_INCOME: (incomeId) => `/api/income/delete/${incomeId}`,
    UPDATE_INCOME: (incomeId) => `/api/income/update/${incomeId}`,
  },
  EXPENSE: {
    GET_EXPENSES: "/api/expense",
    ADD_EXPENSE: "/api/expense/add",
    DELETE_EXPENSE: (expenseId) => `/api/expense/delete/${expenseId}`,
    UPDATE_EXPENSE: (expenseId) => `/api/expense/update/${expenseId}`,
  },
  IMAGE: {
    UPLOAD: "/api/auth/upload-image",
    UPDATE: "/api/auth/update-image",
  },
};
