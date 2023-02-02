import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({

    container: { backgroundColor: Colors.tabBg, flex: 1, justifyContent: "center", alignItems: "center" },

    searchContainer: { backgroundColor: 'rgba(0,0,0,.3)', borderWidth: 1, borderColor: Colors.white, color: Colors.white, paddingHorizontal: 25, marginTop: 10, paddingVertical: 10, borderRadius: 10, },
    
    inputContainer: { height: 50, backgroundColor: Colors.white, justifyContent: 'space-evenly', alignItems: 'center', width: '70%', borderRadius: 15, flexDirection: 'row', },
    
    heading: { fontSize: 25, position: 'absolute', zIndex: 2, top: '10%', width: "60%", fontWeight: '600', color: Colors.white, textAlign: 'center' },
    
    bgImg: { height: "100%", width: "100%", position: "absolute", zIndex: -2, opacity: .5 },
    
    searchText: { color: Colors.white, fontSize: 20 },
});