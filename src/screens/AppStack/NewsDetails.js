import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const NewsDetails = ({ route, navigation }) => {
    const { photo_url, title } = route.params;

    const back = () => {
        navigation.goback();
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: photo_url }} style={styles.image} />
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>
            <Text>{title}</Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: '300',
    }
});

export default NewsDetails;
