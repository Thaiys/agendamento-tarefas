import { View, Text, StyleSheet} from 'react-native';
import TarefaItem from './TarefaItem';

export default function Home() {
    return (
        <View style= {styles.container}>
            <View style= {styles.cabecalho}>
                <Text style= {styles.titulo}> ABRIL / 2025</Text>
                <View style= {styles.icone}></View>
            </View>
            <View style={styles.body}>
                <TarefaItem/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    titulo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    icone:{
        backgroundColor:'gray',
        width:30,
        height:30,
        borderRadius: 15,
        position: 'absolute',
        right:15
    }
});