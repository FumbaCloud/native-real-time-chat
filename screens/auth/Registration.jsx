import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";

import Input from "../../components/Input";
import useStore from "../../hooks/useStore";

const Registration = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {auth, setUser} = useStore();

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={{width: '85%'}}>
                <Input
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    onSubmitEditing={() => console.log('next')}
                />
                <Input
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={createUser}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 14}}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 5}}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{color: '#7289da', fontWeight: '600', fontSize: 14}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1e2124",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
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

export default Registration;