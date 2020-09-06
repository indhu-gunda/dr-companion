import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export default StyleSheet.create({
    label: {
        backgroundColor: "lightgrey",
        borderRadius: 5,
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 12,
        marginRight: 8,
        marginTop: 5,
        marginBottom: 5
    },
    editButton: {
        backgroundColor: COLORS.blue,
        marginTop: 24,
        marginBottom: 40,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        width: 100,
        borderRadius: 24,
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
        marginBottom: 12
    },
})