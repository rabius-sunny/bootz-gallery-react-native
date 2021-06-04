import { BlurView } from 'expo-blur'
import React from 'react'
import { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, Dimensions, Modal } from 'react-native'


export default ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [isSigned, setIsSigned] = useState(false)
    const [isDone, setIsDone] = useState(false)

    return (
        <View style={styles.row}>
            <StatusBar backgroundColor="#03256c" />
            <SafeAreaView>
                <View style={styles.formContainer}>
                    {!isSigned && <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        placeholder="Enter your name"
                        clearButtonMode="while-editing"
                    />}
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        clearButtonMode="while-editing"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        placeholder={isSigned ? 'Enter Your Password' : 'Enter New Password'}
                        clearButtonMode="while-editing"
                        textContentType={"password"}
                    />
                    {!isSigned && <TextInput
                        style={styles.input}
                        onChangeText={setState}
                        placeholder="Enter your State"
                        clearButtonMode="while-editing"
                    />}
                    {!isSigned && <TextInput
                        style={styles.input}
                        onChangeText={setZip}
                        placeholder="Enter your ZIP"
                        clearButtonMode="while-editing"
                        textContentType="postalCode"
                    />}
                    <TouchableOpacity onPress={() => setIsDone(true)} style={styles.btn}><Text style={{ textAlign: 'center', color: 'wheat', marginVertical: 10 }}>Sign Up Now</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsSigned(!isSigned)}><Text style={{ textAlign: 'center', color: 'wheat', marginVertical: 10 }}>{isSigned ? 'New User? Sign up' : 'Already have? Sign In'}</Text></TouchableOpacity>
                </View>

                {
                    isDone &&
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={isDone}
                    >
                        <BlurView
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            blurType="light"
                            blurAmount={20}
                            reducedTransparencyFallbackColor="white"
                        >
                            <TouchableOpacity
                                style={styles.absolute}
                                onPress={() => navigation.push("Home")}
                            >
                            </TouchableOpacity>
                            <View style={styles.modal}>
                                <Text style={styles.modalText}>Thank you for you order. We'll reach you shortly</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.push("Home")}
                                    style={{marginTop: 10, borderRadius: 5, backgroundColor: 'royalblue', paddingHorizontal: 20, paddingVertical: 10, textAlign: 'center' }}
                                >
                                    <Text style={{color: 'white'}}>Ok, go home</Text>
                                </TouchableOpacity>
                            </View>
                        </BlurView>

                    </Modal>
                }

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03256c'
    },
    formContainer: {
        backgroundColor: 'royalblue',
        padding: 30,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: '#343434'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#dfeeea',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: Dimensions.get('window').width * 0.65
    },
    btn: {
        borderWidth: 1,
        backgroundColor: '#03256c',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    modal: {
        height: 200,
        width: Dimensions.get('window').width * 0.60,
        backgroundColor: 'white',
        borderColor: 'royalblue',
        borderWidth: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'royalblue',
        paddingHorizontal: 20,
    }

})
