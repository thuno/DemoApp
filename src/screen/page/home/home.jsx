import { Text, View } from "react-native"
import { FButton, useDesignTokens } from "wini-mobile-component"

export const HomePage = () => {
    const { colors, textStyles, setTheme } = useDesignTokens()
    return <View style={{ width: '100%', height: '100%', backgroundColor: colors["neutral-background-color-absolute"] }}>
        <Text style={textStyles["heading-1"]}>HomePage</Text>
        <FButton 
            label="Change Theme"
            onPress={() => setTheme(th => th === 'light' ? 'dark' : 'light')}
        />
    </View>
}