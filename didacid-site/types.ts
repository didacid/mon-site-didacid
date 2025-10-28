export interface User {
  name: string;
  isSubscribed: boolean;
  hasActiveTicket: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
  startPremiumSession: (name: string) => void;
  endPremiumSession: () => void;
}

// FIX: The `UserPlan` type was missing. It has been added to be used for differentiating between free and premium AI services.
export type UserPlan = 'free' | 'premium';

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}