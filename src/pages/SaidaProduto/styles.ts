import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        flexGrow: 1, 
        padding: 25, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    header: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 30, 
        gap: 12,
        width: '100%', 
    },
    headerTitle: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#111',
        flexShrink: 1, 
    },
    form: { 
        width: '100%', 
        marginBottom: 20 
    },
    label: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        color: '#333', 
        marginBottom: 5, 
        marginTop: 15 
    },
    pickerBox: { 
        width: '100%', 
        height: 48, 
        borderWidth: 1, 
        borderColor: '#ddd', 
        borderRadius: 8, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        backgroundColor: '#f9f9f9' 
    },
    pickerText: { 
        color: '#666', 
        fontSize: 14 
    },
    button: { 
        width: '100%', 
        height: 50, 
        backgroundColor: '#D9534F', 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 10 
    },
    buttonText: { 
        color: '#FFF', 
        fontSize: 16, 
        fontWeight: 'bold' 
    }
});