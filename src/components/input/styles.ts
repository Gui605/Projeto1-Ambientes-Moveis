import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
        position: 'relative',
    },
    titleContainer: {
        position: 'absolute',
        top: -10,
        left: 20,
        backgroundColor: themas.Colors.secondary,
        paddingHorizontal: 6,
        zIndex: 2,
    },
    titleText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#1E5AA8',
    },
    boxInput: {
        width: '100%',
        height: 54,
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: '#1E5AA8',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        backgroundColor: themas.Colors.secondary,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#333333',
    },
    iconLeft: {
        marginRight: 10,
    }
});