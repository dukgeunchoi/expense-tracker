export const baseUrl = "http://localhost:3000";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/signup",
    GET_USER_INFO: "/api/auth/info",
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
  },
};
