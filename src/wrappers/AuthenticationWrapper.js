import { useCallback, useEffect } from 'react';
import { storage } from '../storage/appstorage';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, setUserData } from '../store/authSlice';

const AuthenticationWrapper = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const set_token = useCallback(async () => {
        const auth = storage.getBoolean('auth');
        if (auth) {
            const user_data = JSON.parse(storage.getString('userData'));
            dispatch(setUserData(user_data));
            dispatch(login());
        } else {
            dispatch(logout());
        }
    });
    useEffect(() => {
        if (isAuthenticated === null) {
            set_token();
        }
    }, [isAuthenticated]);

    return <>{children}</>;
};

export default AuthenticationWrapper;
