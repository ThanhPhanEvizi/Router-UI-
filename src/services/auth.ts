import STORAGE_KEYS from "../constants/storage-keys";

export const saveUserRole = async (role: string) => {
  localStorage.setItem(STORAGE_KEYS.ROLE, role);
};

export const getUserCredentialFromStorage = () => {
  const role = localStorage.getItem(STORAGE_KEYS.ROLE);
  return role;
};
