import {createContext} from "react";
import {UserSession} from "./types";

export const UserContext = createContext<UserSession | null>(null);