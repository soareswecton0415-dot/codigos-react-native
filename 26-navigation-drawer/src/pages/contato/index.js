import React from "react";
import { View, Text, Button } from 'react-native';

import { useNavigation } from "@react-navigation/native";

export default function Contato(){

    const navigation = useNavigation();

    function handleHome(){
    navigation.navigate('HomeStack', {screen : 'Home'});
    }

    return(
        <View>
            <Text>Página de contatos</Text>
            <Button title="Voltar para a Home" onPress={handleHome} />
        </View>
    )
}