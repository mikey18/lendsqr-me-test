import {
    StyleSheet,
    View,
    Text,
    Pressable,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import { storage } from '../../../storage/appstorage';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthenticationContext';
import {
    backgroundColor,
    font,
    primaryColor,
    textColor,
} from '../../../styles/globalstyles';
import News from './News';
import axios from 'axios';
import { dat } from './data';

const NewsListing = ({ navigation }) => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(dat);

    // useEffect(() => {
    //     const fetch_news_from_api = async () => {
    //         const response = await axios.get(
    //             'https://real-time-news-data.p.rapidapi.com/top-headlines?limit=50&country=US&lang=en',
    //             {
    //                 headers: {
    //                     'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
    //                     'x-rapidapi-key':
    //                         'f512b94653mshc88716c4903d7cap1285c8jsn85392892e029',
    //                 },
    //             },
    //         );
    //         if (response.status === 200) {
    //             setData(response.data.data);
    //             setLoading(false);
    //         }
    //     };

    //     if (data === null) {
    //         fetch_news_from_api();
    //     }
    // }, [data]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const log_out = () => {
        storage.delete('auth');
        setIsAuthenticated(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Text style={styles.header}>FP News</Text>

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
                        return (
                            <News
                                data={item}
                                navigation={navigation}
                            />
                        );
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
    header: {
        fontFamily: font,
        fontSize: 20,
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
