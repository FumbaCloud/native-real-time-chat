import {View, StyleSheet} from "react-native";
import React, {useCallback, useState} from "react";
import {GiftedChat} from 'react-native-gifted-chat';

const ResetPassword = () => {
    const [messages, setMessages] = useState([]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={styles.container}>
            <GiftedChat
                user={{_id: 1}}
                messages={messages}
                onSend={messages => onSend(messages)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#1e2124",
    },
    button: {
        backgroundColor: '#7289da',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
});

export default ResetPassword;