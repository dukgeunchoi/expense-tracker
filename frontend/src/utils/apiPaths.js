export const baseUrl = "http://localhost:3000";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/signup",
    GET_USER_INFO: "/api/auth/info",
  },
  INCOME: {
    GET_INCOMES: "/api/income",
    ADD_INCOME: "/api/income/add",
    DELETE_INCOME: (incomeId) => `/api/income/delete/${incomeId}`,
    UPDATE_INCOME: (incomeId) => `/api/income/update/${incomeId}`,
    DOWNLOAD_INCOME_EXCEL: "/api/income/download",
  },
  EXPENSE: {
    GET_EXPENSES: "/api/expense",
    ADD_EXPENSE: "/api/expense/add",
    DELETE_EXPENSE: (expenseId) => `/api/expense/delete/${expenseId}`,
    UPDATE_EXPENSE: (expenseId) => `/api/expense/update/${expenseId}`,
    DOWNLOAD_EXPENSE_EXCEL: "/api/expense/download",
  },
  IMAGE: {
    UPLOAD: "/api/auth/upload-image",
  },
};
