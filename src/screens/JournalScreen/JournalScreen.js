import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";

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
      <HeadingText style={styles.itemSubtitle}>Symptoms</HeadingText>
      <View style={styles.journalItemList}>
        {item.symptoms.map((s) => (
          <BodyText key={s} style={styles.journalItemListItem}>
            {s}
          </BodyText>
        ))}
      </View>
      <HeadingText
        style={{ ...styles.itemSubtitle, backgroundColor: "#5ad673" }}
      >
        Diary
      </HeadingText>
      <View style={styles.journalItemList}>
        <BodyText style={styles.journalItemListItem}>
          I’m a little tired from a long day, and I have some back pain. It was
          nice to talk to you too! I’m excited to see my progress over the next
          couple months!
        </BodyText>
      </View>
      <HeadingText
        style={{ ...styles.itemSubtitle, backgroundColor: "#fa98ed" }}
      >
        Mood
      </HeadingText>
      <View style={styles.journalItemList}>
        <BodyText style={styles.journalItemListItem}>
          Alright - I woke up with some pain but I’m happy to go on a walk with
          my dog in a couple minutes.
        </BodyText>
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
    {
      symptoms: [
        "Tremors",
        "Difficulty falling/staying asleep",
        "Anxious/irritable",
      ],
    },
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
