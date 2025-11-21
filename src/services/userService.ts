import { User } from '../types/user';

// Mock user data
let currentUser: User = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john.doe@example.com',
};

export const getUserProfile = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...currentUser }); // Return a copy to prevent direct modification
    }, 500);
  });
};

export const updateUserProfile = (updatedUser: Partial<User>): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (updatedUser.email && !updatedUser.email.includes('@')) {
        reject(new Error('Invalid email format'));
        return;
      }
      currentUser = { ...currentUser, ...updatedUser };
      resolve({ ...currentUser });
    }, 500);
  });
};
