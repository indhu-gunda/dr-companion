import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextContainer from "../../components/TextContainer";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";
import { COLORS } from "../../colors";

const Label = ({ children }) => {
  return <View style={styles.label}>{children}</View>;
};

export default function HomeScreen(props) {
  const [conversationTime, setConversationTime] = useState(new Date());
  const [email, setEmail] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  // const [entities, setEntities] = useState([]);

  // const entityRef = firebase.firestore().collection('entities')
  // const userID = props.extraData.id

  // useEffect(() => {
  //     entityRef
  //         .where("authorID", "==", userID)
  //         .orderBy('createdAt', 'desc')
  //         .onSnapshot(
  //             querySnapshot => {
  //                 const newEntities = []
  //                 querySnapshot.forEach(doc => {
  //                     const entity = doc.data()
  //                     entity.id = doc.id
  //                     newEntities.push(entity)
  //                 });
  //                 setEntities(newEntities)
  //             },
  //             error => {
  //                 console.log(error)
  //             }
  //         )
  // }, [])

  // const onFooterLinkPress = () => {
  //   firebase.auth().signOut().then(function() {
  //     // Sign-out successful.
  //     props.navigation.navigate('Login')
  //   }).catch(function(error) {
  //     // An error happened.
  //     console.log(error);
  //   });
  // }

  // const renderEntity = ({item, index}) => {
  //     return (
  //         <View style={styles.entityContainer}>
  //             <Text style={styles.entityText}>
  //                 {index}. {item.text}
  //             </Text>
  //         </View>
  //     )
  // }

  return (
    <ScrollView>
      <TextContainer>
        <HeadingText>Current Diagnoses</HeadingText>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Label>
            <BodyText>Hypertension</BodyText>
          </Label>
          <Label>
            <BodyText>Arthritis</BodyText>
          </Label>
          <Label>
            <BodyText>Parkinson's</BodyText>
          </Label>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <BodyText style={{ textAlign: "center", color: "white" }}>
            Edit
          </BodyText>
        </TouchableOpacity>
        <HeadingText>Daily Conversation Time</HeadingText>
        <BodyText style={{ fontSize: 32, textAlign: "center" }}>
          {conversationTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </BodyText>
        <DateTimePicker
          testID="dateTimePicker"
          value={conversationTime}
          mode={"time"}
          is24Hour={true}
          display="default"
          style={{marginBottom: 24}}
          onChange={(e, date) => setConversationTime(new Date(date))}
        />
        <HeadingText>Share Report</HeadingText>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </TextContainer>
      {inputFocused && <View style={{ height: 350 }}/>}
    </ScrollView>
  );
}
