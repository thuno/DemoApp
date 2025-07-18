import { Text, View } from "react-native"
import { useDesignTokens } from "wini-mobile-component"

export const LoginPage = () => {
    const { colors, textStyles } = useDesignTokens()
    return <View style={{ width: '100%', height: '100%', backgroundColor: colors["neutral-background-color-absolute"] }}>
        <Text style={textStyles["heading-1"]}>LoginPage</Text>
    </View>
}