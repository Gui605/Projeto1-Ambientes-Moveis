import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    boxTop: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    boxMid: {
        width: '100%',
        marginBottom: 20,
    },
    titleInput: {
        marginLeft: 5,
        color: themas.Colors.gray,
        marginTop: 15,
        fontSize: 14,
    },
    BoxInput: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: themas.Colors.lightGray,
        borderColor: themas.Colors.lightGray,
    },
    Input: {
        height: '100%',
        width: '90%',
        fontSize: 16,
    },
    boxBottom: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.Colors.primary,
        borderRadius: 40,
        elevation: 5,
    },
    textButton: {
        fontSize: 18,
        color: themas.Colors.secondary,
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 15,
        color: themas.Colors.gray,
        textAlign: 'center',
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        marginBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        color: '#333',
    }
});