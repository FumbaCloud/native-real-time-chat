import {useState} from "react";
import {StyleSheet, TextInput} from "react-native";

const Input = (props) => {
    const [focusedColor, setFocusedColor] = useState('transparent');

    return (
        <TextInput
            style={[styles.input, {borderColor: focusedColor}]}
            onBlur={() => setFocusedColor('transparent')}
            onFocus={() => setFocusedColor('#7289da')}
            placeholderTextColor="#8d8d8d"
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#282b30",
        color: "#fff",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        borderWidth: 1,
    },
});

export default Input;