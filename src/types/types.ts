export interface IUser {
    email: string ;
    password: string ;
    id: number;
    
      setEmail: (email: string) => string;
        setPassword: (password: string) => string;
    
}

export interface IStateUser extends IUser {
    setNewUser: {
      email: string ;
      password: string ;

    }
    type: "user"
 }

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}