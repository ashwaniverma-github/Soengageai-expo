import { View , Text , StyleSheet} from "react-native";

export default function Index(){
    return (
        <View style={styles.container}>
            <Text  >
                Welcome to Soengageai
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center'
    }
})