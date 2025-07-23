import { useRef } from "react"
import { Text, View } from "react-native"
import { WBottomSheet, WButton, WButtonVariant, Winicon, useDesignTokens, Link, showBottomSheet, WCheckbox, useTranslation, showDialog, ComponentStatus, WImage } from "wini-mobile-component"
import { PagePath } from "../router"

export const HomePage = () => {
    const bottomSheetRef = useRef(null)
    const { colors, textStyles, setTheme } = useDesignTokens()
    const { i18n } = useTranslation()

    return <View style={{ width: '100%', height: '100%', backgroundColor: colors["neutral-background-color-absolute"] }}>
        <WBottomSheet ref={bottomSheetRef} />
        <Text style={textStyles["heading-1"]}>HomePage</Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
            <WButton
                label="Change Theme"
                onPress={() => setTheme(th => th === 'light' ? 'dark' : 'light')}
                style={[WButtonVariant.dahsed, WButtonVariant.size32, { flex: 1 }]}
            />
            <WButton
                prefix={<Winicon src={i18n.language === "vi" ? "color/flags/vietnam" : "color/flags/england"} />}
                label={i18n.language === "vi" ? i18n.t("vietnamese") : i18n.t("english")}
                onPress={() => i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi")}
                style={[WButtonVariant.ghost, WButtonVariant.size32, { flex: 1 }]}
            />
        </View>
        <Link screen={PagePath.login} style={{ margin: 16, textDecorationLine: "underline", alignItems: "center", gap: 8, flexDirection: "row", display: "flex" }}>
            <Text style={textStyles["button-text-1"]}>{i18n.t("to")} {i18n.t("login")} page</Text>
            <Winicon src="outline/arrows/arrow-right" color={colors["primary-color-main"]} />
        </Link>
        <WButton
            label={"show bottom sheet"}
            onPress={() => {
                showBottomSheet({
                    ref: bottomSheetRef,
                    title: "Bottom Sheet",
                    enableDismiss: true,
                    children: <View style={{ padding: 16 }}>
                        <Text>Bottom Sheet hehe</Text>
                    </View>
                })
            }}
            style={[WButtonVariant.infor, WButtonVariant.size40]}
        />
        <WCheckbox style={{ margin: 16 }} size={32} />
        <WButton
            label={"show dialog"}
            onPress={() => {
                showDialog({
                    status: ComponentStatus.WARNING,
                    title: "Đây là dialog",
                    content: "Dialog content",
                })
            }}
            style={[WButtonVariant.warning, WButtonVariant.size40]}
        />
        <WImage
            style={{ aspectRatio: 4 / 3 }}
            uri="https://dev.wini.vn/api/file/img/c6f1e7ebd34449bda0a61ceba0407de3"
        />
    </View>
}
