import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35,
        gap: 12,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111111',
    },
    form: {
        width: '100%',
        marginBottom: 20,
    },
    boxBottom: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        width: '100%',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E5AA8',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5.0,
        elevation: 6,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});