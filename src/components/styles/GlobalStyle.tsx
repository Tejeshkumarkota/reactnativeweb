import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    topnavbar: {
        backgroundColor: 'white',
        // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
        position: 'sticky',
        zIndex: 10002,
        top: '-2px',
        left: 0,
        right: 0,
    },
    cardheader: {
        padding: 0,
        marginBottom: 'inherit',
    },
    bodytag: {
        fontFamily: 'Poppins, sans-serif',
        overflowX: 'hidden',
        color: '#000',
        backgroundColor: '#fff'
    },
    htmltag: {
        backgroundColor: '#fff'
    },
    availablebadge: {
        position: 'absolute',
        right: 0,
        padding: '5px',
        backgroundColor: '#fff',
        fontSize: 12,
        fontWeight: 500,
        borderBottomLeftRadius: 6,
        zIndex: 2,
    },
    propertyCardBody: {
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingLeft: '12px',
        paddingRight: '12px',
        marginTop: 'inherit',
    },
    propertycardinner: {
        backgroundColor: 'white',
        height: '100%',
        // transform: [
        //     { scale: 0.9 },
        // ],
    },
    propertytitle: {
        maxWidth: '100%',
        // borderBottomWidth: 1,
        // borderBottomStyle: 'solid',
        // borderBottomColor: 'rgb(230, 230, 230)',
        paddingBottom: 4,
    },
    propertyprice: {
        paddingTop: 5,
    },
    propfeatures: {
        alignItems: 'center',
        padding: 0,
    },
    bedItem: {
        paddingLeft: 0,
    },
    arabicbutton: {
        backgroundColor: 'white',
    },
    logomain: {
        backgroundColor: 'white',
    },
    button_hover: {
        backgroundColor: 'white',
    },
    // 'propertycardmain:hover': {
    //     backgroundColor: 'red',
    // }
})