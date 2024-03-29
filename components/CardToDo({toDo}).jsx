import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CardToDo = ({ toDo, onPress, onLongPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(toDo.id)}  onLongPress={() => onLongPress(toDo.id)}>
      <Text style={[styles.text, toDo.isCompleted && { textDecorationLine: "line-through" }]}>{toDo.title}</Text>
      {toDo.isCompleted && <Image source={require("../assets/img/check.png")} style={{ height: 30, width: 30, resizeMode: "contain" }} />}
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
    borderRadius: 8,
    elevation: 3,
  },
  text: {
    flexDirection: 'row',
  },
});

export default CardToDo;