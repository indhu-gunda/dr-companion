import React from "react";
import { View, Dimensions, Text } from "react-native";
import styles from "./styles";
import { BarChart, ContributionGraph } from "react-native-chart-kit";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";
import TextContainer from "../../components/TextContainer";
import { ScrollView } from "react-native-gesture-handler";

export default function ChartsScreen(props) {
  const symptomsData = {
    labels: ["Anxiety", "Difficulty Sleeping", "Tremor"], // optional
    datasets: [{data: [0.1, 0.6, 0.95]}],
  };

  const painData = [
    { date: "2020-07-02", count: 1 },
    { date: "2020-07-03", count: 2 },
    { date: "2020-07-04", count: 3 },
    { date: "2020-07-05", count: 4 },
    { date: "2020-07-06", count: 5 },
    { date: "2020-07-30", count: 2 },
    { date: "2020-07-31", count: 3 },
    { date: "2020-09-01", count: 2 },
    { date: "2020-09-02", count: 4 },
    { date: "2020-08-05", count: 2 },
    { date: "2020-07-30", count: 4 },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(240, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView>
      <TextContainer>
        <HeadingText style={styles.title}>Good morning, Diane!</HeadingText>
        {/* <BodyText> Here are your symptom summaries:</BodyText> */}
      </TextContainer>

      <TextContainer>
        <HeadingText style={styles.subtitle}>Daily Pain Intensity</HeadingText>
      </TextContainer>
      <ContributionGraph
        values={painData}
        endDate={new Date("2020-09-20")}
        numDays={105}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
      />

      <TextContainer>
        <HeadingText style={styles.subtitle}>Most Frequent Symptoms</HeadingText>
      </TextContainer>
      <BarChart
        data={symptomsData}
        width={Dimensions.get("window").width}
        height={220}
        fromZero={true}
        showValuesOnTopOfBars={true}
        chartConfig={{
          ...chartConfig,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        hideLegend={true}
      />
    </ScrollView>
  );
}
