import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export function TabBottomMenu({ selectedTabName, onPress }) {
    function getTextStyle(tabName) {
        return {
            fontWeight: "bold",
            color: tabName === selectedTabName ? "#2F76E5" : "black",
        };
    }
    
        
    return (
        <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={() => onPress("all")}>
                <Text style={getTextStyle("all")}>All (0)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={() => onPress("inProgress")}>
                <Text style={getTextStyle("inProgress")}>In progress (0)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={() => onPress("done")}>
                <Text style={getTextStyle("done")}>Done (0)</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TabBottomMenu;