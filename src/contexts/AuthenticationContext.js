import { createContext, useCallback, useEffect, useState } from 'react';
import { storage } from '../storage/appstorage';

export const AuthContext = createContext();

const AuthenticationContext = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const logout = () => {
        setIsAuthenticated(false);
    };
    const set_token = useCallback(async () => {
        const auth = storage.getBoolean('auth');
        if (auth) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    });
    useEffect(() => {
        set_token();
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationContext;
