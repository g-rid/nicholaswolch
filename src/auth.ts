import { ref } from 'vue';
import { auth } from './firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth';

const user = ref<User | null>(null);

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

const isAuthenticated = () => user.value !== null;

const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Sign in error:', error);
  }
};

const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
  }
};

export { user, isAuthenticated, signIn, signOut };
