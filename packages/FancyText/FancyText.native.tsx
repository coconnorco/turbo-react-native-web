import * as React from "react";
import {StyleSheet, Text,} from "react-native";
import { FancyProps } from "./type";

export function FancyText({ text }: FancyProps) {
    return (
            <Text style={styles.text}>I am NATIVE!!! {text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});
