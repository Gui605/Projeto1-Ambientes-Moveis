import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        flexGrow: 1, 
        padding: 20, 
        backgroundColor: '#F5F6FA' 
    },
    header: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 25, 
        gap: 12 
    },
    headerTitle: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#111' 
    },
    card: { 
        backgroundColor: '#FFF', 
        padding: 16, 
        borderRadius: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 12, 
        elevation: 2 
    },
    productName: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    productQty: { 
        fontSize: 14, 
        color: '#666', 
        marginTop: 4 
    },
    badge: { 
        paddingHorizontal: 10, 
        paddingVertical: 6, 
        borderRadius: 6 
    },
    badgeText: { 
        fontSize: 12, 
        fontWeight: 'bold' 
    }
});