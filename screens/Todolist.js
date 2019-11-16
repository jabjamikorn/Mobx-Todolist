import React, { Component } from 'react'
import { Text, View, StyleSheet,TextInput } from 'react-native'

//mobx
// import { Provider as MobxProvider } from 'mobx-react/native'
import { observer } from "mobx-react"

export default class Todolist extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Background: {
        backgroundColor: "#2425",
    }
})

