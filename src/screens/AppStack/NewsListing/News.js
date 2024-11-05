import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {
    backgroundColor,
    font,
    fontMedium,
} from '../../../styles/globalstyles';

const News = ({ data, navigation }) => {
    const date = new Date(data.published_datetime_utc).toLocaleDateString(
        'en-GB',
    );

    const go_to_details = () => {
        navigation.navigate('NewsDetails', data);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={go_to_details}>
            <Image source={{ uri: data.photo_url }} style={styles.image} />
            <View style={styles.body}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <View style={styles.topic_date}>
                <View style={styles.topicParent}>
                    <Image
                        source={{ uri: data.source_favicon_url }}
                        style={styles.topicImage}
                    />
                    <Text style={styles.topic}>{data.source_name}</Text>
                </View>

                <Text style={styles.date}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: 'lightgrey',
        gap: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: backgroundColor,
    },
    image: {
        width: '100%',
        height: '200',
        objectFit: 'cover',
        borderRadius: 25,
        width: '95%',
        margin: 'auto',
    },
    body: {
        // paddingTop: 10,
        // paddingBottom: 10,
    },
    title: {
        fontFamily: fontMedium,
        width: '95%',
        margin: 'auto',
    },
    topic_date: {
        flexDirection: 'row',
        width: '95%',
        margin: 'auto',
        justifyContent: 'space-between',
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
});

export default News;
