import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const BoutonAdd = ({ toDo, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(toDo.id)}>
      <Text></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 14,
      paddingVertical: 16,
      backgroundColor: 'white',
      marginVertical: 5,
      borderRadius: 30,
    },
    text: {
      flexDirection: 'row',
    },
  });

export default BoutonAdd;

