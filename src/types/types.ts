export interface IUser {
    email: string;
    password: string;
    id: number;
  
    
}

export interface IStateUser extends IUser {
  setEmail: (email: string) => string;
    setPassword: (password: string) => string;
    type: "user"
 }

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}