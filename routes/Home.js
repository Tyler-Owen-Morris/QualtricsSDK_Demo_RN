import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Qualtrics from 'react-native-qualtrics';

const Home = ({navigation}) => {
  const [myToggle, setMyToggle] = useState(true);
  const [var1, setVar1] = useState('FOO');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    Qualtrics.setString('curr_nav', 'home');
  }, []);

  useEffect(async () => {
    Qualtrics.evaluateIntercept('SI_ea0qgumTndfKlDw', async res => {
      if (res.passed) {
        console.log('result:', res);
        var inter = await Qualtrics.displayIntercept('SI_ea0qgumTndfKlDw');
        console.log('inter:', inter);
      } else {
        console.log('intercept failed...');
      }
    });
  }, [myToggle]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              margin: 5,
              marginTop: 10,
              fontSize: 16,
            }}>
            Current Value: {var1}
          </Text>
          <Button
            title="Evaluate FOO/BAR Intercept"
            onPress={() => setMyToggle(!myToggle)}
          />
          <Button
            title="Set Variable to FOO"
            onPress={e => {
              console.log('click!');
              setVar1('FOO');
              Qualtrics.setString('var1', 'FOO');
            }}
          />
          <Button
            title="Set Variable to BAR"
            onPress={e => {
              console.log('click!');
              setVar1('BAR');
              Qualtrics.setString('var1', 'BAR');
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.navButton}>
        <Button
          title="Navigate to Purchase Demo >"
          onPress={() => {
            console.log('goto purchase!');
            navigation.navigate('Purchase');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  navButton: {
    marginTop: 100,
  },
});

export default Home;
