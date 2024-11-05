import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
} from 'react-native';
import { font, fontMedium } from '../../styles/globalstyles';
import Icon from 'react-native-vector-icons/AntDesign';

const NewsDetails = ({ route, navigation }) => {
    const {
        photo_url,
        title,
        snippet,
        source_favicon_url,
        source_name,
        published_datetime_utc,
    } = route.params;

    const date = new Date(published_datetime_utc).toLocaleDateString('en-GB');

    const back = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: photo_url }} style={styles.image} />
                    <Pressable style={styles.back} onPress={back}>
                        <Icon name={'arrowleft'} size={20} color="black" />
                    </Pressable>
                </View>
                <View style={styles.content}>
                    <View style={styles.topic_date}>
                        <View style={styles.topicParent}>
                            <Image
                                source={{ uri: source_favicon_url }}
                                style={styles.topicImage}
                            />
                            <Text style={styles.topic}>{source_name}</Text>
                        </View>

                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.body}>{snippet}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        height: '300',
    },
    back: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 5,
        left: 5,
        padding: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '95%',
        margin: 'auto',
    },
    topic_date: {
        flexDirection: 'row',
        width: '95%',
        margin: 'auto',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    topicParent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    topicImage: {
        width: 20,
        height: 20,
    },
    topic: {
        fontFamily: font,
        fontSize: 12,
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    date: {
        fontFamily: font,
        fontSize: 12,
    },
    title: {
        fontFamily: fontMedium,
        fontSize: 20,
    },
    body: {
        fontFamily: font,
        marginTop: 30,
    },
});

export default NewsDetails;
