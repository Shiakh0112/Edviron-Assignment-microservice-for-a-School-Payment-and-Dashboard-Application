export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://edviron-assignment-microservice-for-a.onrender.com';

export const PAYMENT_STATUS = {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
};

export const PAYMENT_MODES = {
  UPI: 'upi',
  CARD: 'card',
  NETBANKING: 'netbanking',
  WALLET: 'wallet',
};
