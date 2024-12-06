import React from "react";
import { View, Text, Switch, StyleSheet, ScrollView, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const SettingsListScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  {/* For the sake of saving time, a function for individual settings will
      not be added, however it is recommended to add in the future*/}
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        <Feather name="settings" size={30} color={"#F3C86A"}/> &nbsp;
        <Text style={{color: "white"}}>Settings</Text>
      </Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>
          <Feather name="bell" size={22.5} color={"gray"}/>&nbsp;
          Enable Notifications
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>
          <Feather name="sun" size={22.5} color={"gray"}/>&nbsp;
          Light Mode
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>
          <Feather name="github" size={22.5} color={"gray"}/>&nbsp;
          Author GitHub
        </Text>
        <Pressable style={{marginRight: 7.5}}>
          <Feather name="external-link" size={25} color="gray"/>
        </Pressable>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>
          <Feather name="bell" size={22.5} color={"gray"}/>&nbsp;
          About
        </Text>
        <Pressable style={{marginRight: 7.5}}>
          <Feather name="external-link" size={25} color="gray"/>
        </Pressable>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>
          <Feather name="alert-circle" size={22.5} color={"gray"}/>&nbsp;
          Privacy Policy
        </Text>
        <Pressable style={{marginRight: 7.5}}>
          <Feather name="external-link" size={25} color="gray"/>
        </Pressable>
      </View>
      <View style={{marginTop: 120, alignItems: "center"}}>
        <Text style={{fontSize: 27.5, fontWeight: "600", color: "#2B2B2B"}}>
          recetta
        </Text>
        <Text style={{fontSize: 17.5, fontWeight: "400", color: "gray"}}>
          The recipe encyclopedia.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 50,
    backgroundColor: "#2B2B2B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    padding: 30,

    backgroundColor: "lightgray",
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
  },
  settingText: {
    fontSize: 21.5,
  },
});

export default SettingsListScreen;