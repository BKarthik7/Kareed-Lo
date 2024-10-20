import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcons(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}){
  return <FontAwesome {...props} size={24} style={{ color: '#1BC464'}}/>;
}

const TabsLayout = () => {
  return <SafeAreaView edges={['top']}style={styles.safeArea}>
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#1BC464",
      tabBarInactiveTintColor: "grey",
      tabBarLabelStyle: { fontSize: 16 },
      tabBarStyle: { 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      headerShown: false,
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Shop',
        tabBarIcon(props) {
          return <TabBarIcons {...props} name="shopping-cart" />;
        },
      }} />
      <Tabs.Screen name="orders" options={{
        title: 'Orders',
        tabBarIcon(props) {
          return <TabBarIcons {...props} name="book" />;
        },
      }} />
    </Tabs>
  </SafeAreaView>
}

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});