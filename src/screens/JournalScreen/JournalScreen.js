import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  itemSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: "#34b1eb",
    color: "white",
    overflow: "hidden",
  },
  journalItemList: {
    marginTop: 10,
    marginBottom: 15,
  },
  journalItemListItem: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 20,
  },
});

const JournalItem = (item) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemSubtitle}>Symptoms</Text>
      <View style={styles.journalItemList}>
        {item.symptoms.map((s) => (
          <Text key={s} style={styles.journalItemListItem}>
            {s}
          </Text>
        ))}
      </View>
      <Text style={{ ...styles.itemSubtitle, backgroundColor: "#5ad673" }}>
        Diary
      </Text>
      <View style={styles.journalItemList}>
        {item.symptoms.map((s) => (
          <Text key={s} style={styles.journalItemListItem}>
            {s}
          </Text>
        ))}
      </View>
      <Text style={{ ...styles.itemSubtitle, backgroundColor: "#fa98ed" }}>
        Mood
      </Text>
      <View style={styles.journalItemList}>
        <Text style={styles.journalItemListItem}>GOOD</Text>
      </View>
    </View>
  );
};

const JournalEmptyItem = () => {
  return (
    <View>
      <Text>This is empty date!</Text>
    </View>
  );
};

export default function JournalScreen(props) {
  const items = {};
  for (let i = 1; i < 31; i += 1) {
    items[`2020-09-${String(i).padStart(2, "0")}`] = [];
  }
  items["2020-09-04"] = [
    { symptoms: ["balance problems", "shuffling", "nausea"] },
  ];
  return (
    <Agenda
      selected={"2020-09-04"}
      // loadItemsForMonth={}
      items={items}
      renderItem={JournalItem}
      // renderEmptyDate={JournalEmptyItem}
      renderEmptyData={() => (
        <View>
          <Text>empty</Text>
        </View>
      )}
    />
  );
}
