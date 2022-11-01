import React, { createContext } from 'react';
import {IStateUser} from '../src/types/types';


const MyContext = createContext({} as IStateUser);
export default MyContext;