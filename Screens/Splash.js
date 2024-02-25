import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Login');
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.innerwrapper}>
                <Image
                    source={require('../assets/SadapayIcon.png')}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7b66',
    },
    innerwrapper: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    image: {
        width: 180,
        height: 180,
    },
});

export default Splash;
