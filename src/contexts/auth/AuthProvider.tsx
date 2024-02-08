import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const refreshToken = async () => {
            if (user) {
                try {
                    const response = await api.refreshToken();
                    if (response.data) {
                        setUser({ ...response.data });
                    } else {
                        setUser(null);
                    }
                } catch(err: any) {
                    setUser(null);
                }
            }
        }

        const persistence = async () => {
            if (!user) {
                try {
                    const response = await api.refreshToken();
                    if (response.data) {
                        setUser({ ...response.data });
                    }
                } catch(err: any) {
                    setUser(null);
                }
            }
        }
        
        const refreshInterval = setInterval(async () => {
            refreshToken();
        }, 4 * 60 * 1000);

        persistence();

        return () => {
            clearInterval(refreshInterval);
        }
    }, [api]);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        console.log(data);
        if (data) {
            setUser({ ...data });
            return true
        }

        setUser(null);
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        await api.logout();
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}