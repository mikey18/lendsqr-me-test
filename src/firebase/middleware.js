import analytics from '@react-native-firebase/analytics';

const firebaseMiddleware = (store) => (next) => async (action) => {
    // Log screen change events
    if (action.type === 'SCREEN_CHANGE') {
        await analytics().logEvent('screen_change', {
            screen_name: action.payload.screenName,
        });
    }

    // Log user activity events
    if (action.type === 'USER_ACTIVITY') {
        await analytics().logEvent('user_activity', {
            activity: action.payload.activity,
        });
    }

    return next(action); // Pass action to the next middleware/reducer
};

export default firebaseMiddleware;
