import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    display: {
        width: Dimensions.get('window').width,
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#808080',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 70,
        color: "#fff"
    }
})

export default props => (
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </View>
)