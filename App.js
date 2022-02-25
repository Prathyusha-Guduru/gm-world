import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
    console.log("wgwrg");
    console.log(require("./assets/icon.png"));
    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={1}>
                Open up App.js to start working on your app! Making this long
                long long long so that you know might be a good typing practise
                tooooo LOL GM BRO
            </Text>
            {/* <Image
                source={{
                    width: 200,
                    height: 400,
                    uri: "https://raw.githubusercontent.com/OMAS-Technocraft/frontend-assets/main/account.png?token=GHSAT0AAAAAABNL7VSVULAR6FYKOHIKBBRAYQX3VLQ",
                }}
            /> */}
            {/* <Image source={require("./icon.png")} /> */}
            <Image style={styles.img} source={require("./icon.png")} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        // alignItems: "center",
        // justifyContent: "center",
    },
    img: {
        height: "400px",
        width: "400px",
    },
});
