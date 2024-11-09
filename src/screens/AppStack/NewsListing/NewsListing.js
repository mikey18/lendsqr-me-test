import {
    StyleSheet,
    View,
    Text,
    Pressable,
    ActivityIndicator,
    FlatList,
    Image,
} from 'react-native';
import { storage } from '../../../storage/appstorage';
import { useEffect, useState } from 'react';
import {
    backgroundColor,
    font,
    primaryColor,
    textColor,
} from '../../../styles/globalstyles';
import News from './News';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/authSlice';
import axios from 'axios';
import { setNews } from '../../../store/newsSlice';
import { dat } from './data';
import crashlytics from '@react-native-firebase/crashlytics';
import remoteConfig from '@react-native-firebase/remote-config';
import perf from '@react-native-firebase/perf';

const NewsListing = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.news.data);
    const userData = useSelector((state) => state.auth.userData);
    const [welcomeText, setWelcomeText] = useState('Hi');

    useEffect(() => {
        remoteConfig()
            .setConfigSettings({
                minimumFetchIntervalMillis: 0,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then((fetchedRemotely) => {
                if (fetchedRemotely) {
                    console.log('Configs were retrieved from Firebase');
                } else {
                    console.log('Configs were already up to date');
                }
                const text = remoteConfig().getValue('gretting').asString();
                setWelcomeText(text);
            })
            .catch((error) =>
                console.error('Error fetching remote config:', error),
            );
    }, []);

    // useEffect(() => {
    //     const fetch_news_from_api = async () => {
    //         try {
    //             const response = await axios.get(
    //                 'https://real-time-news-data.p.rapidapi.com/top-headlines?limit=50&country=US&lang=en',
    //                 {
    //                     headers: {
    //                         'x-rapidapi-host':
    //                             'real-time-news-data.p.rapidapi.com',
    //                         'x-rapidapi-key':
    //                             'f512b94653mshc88716c4903d7cap1285c8jsn85392892e029',
    //                     },
    //                 },
    //             );
    //             if (response.status === 200) {
    //                 dispatch(setNews(response.data.data));
    //                 setLoading(false);
    //             }
    //         } catch (error) {
    //             console.log('Error fetching news:', error.message);
    //         }
    //     };

    //     if (data === null) {
    //         fetch_news_from_api();
    //     }
    // }, [data]);

    useEffect(() => {
        const run = async () => {
            const trace = await perf().newTrace('setNews_dispatch_trace');
            trace.start();
            setTimeout(async () => {
                dispatch(setNews(dat));
                setLoading(false);
                await trace.stop();
            }, 1000);
        };

        run();
    }, []);

    const log_out = () => {
        storage.delete('auth');
        dispatch(logout());
        dispatch(setNews(null));
    };
    const throwError = () => {
        const error = new Error(
            'This is a runtime error triggered by the throw error button!',
        );
        crashlytics().recordError(error);
        throw error;
    };

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.avatar}>
                    <Image
                        style={styles.avatar_img}
                        source={{ uri: userData.user.photo }}
                    />
                    <Text style={styles.header}>
                        {welcomeText}, {userData.user.givenName}
                    </Text>
                </View>

                <Pressable onPress={throwError} style={styles.logOut}>
                    <Text style={styles.logOutText}>Throw Error</Text>
                </Pressable>
                <Pressable onPress={log_out} style={styles.logOut}>
                    <Text style={styles.logOutText}>Log out</Text>
                </Pressable>
            </View>

            {loading ? (
                <View style={styles.loaderView}>
                    <ActivityIndicator color={primaryColor} />
                </View>
            ) : (
                <FlatList
                    data={data}
                    style={styles.newsView}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <News data={item} navigation={navigation} />;
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: backgroundColor,
    },
    nav: {
        padding: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    avatar_img: {
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    header: {
        fontFamily: font,
        fontSize: 20,
        textAlignVertical: 'center',
    },
    logOut: {
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 8,
    },
    logOutText: {
        fontFamily: font,
        color: textColor,
        fontSize: 11,
    },
    loaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsView: {
        // gap: 50
    },
});

export default NewsListing;
