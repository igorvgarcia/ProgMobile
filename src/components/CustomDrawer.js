import {View, Image, Text} from 'react-native'
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Olá, Fulano</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={() => {}} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer