/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Qualtrics from 'react-native-qualtrics';
import Home from './routes/Home';
import Purchase from './routes/Purchase';
import PurchaseComplete from './routes/PurchaseComplete';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// const App: () => Node = () => {
//   const [myToggle, setMyToggle] = useState(true);
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   // Only initilize the data one time when the app loads for SDK and config variables
//   useEffect(() => {
//     Qualtrics.initializeProject(
//       'walkersandbox',
//       'ZN_9XhdWiyfHvNt0ai',
//       result => {
//         console.log('resul:', result);
//       },
//     );

//     // Set string parameters using this key-value pair functionality
//     Qualtrics.setString('RN_proj', 'QRN17');

//     // This is a fancy way of matching the Qualtrics DateTime format using JS
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;
//     Qualtrics.setDateTime(today);
//   }, []);

//   // This function will evaluate the intercept evertime the "evaluate intercept" button is pressed in UI
//   useEffect(async () => {
//     Qualtrics.evaluateIntercept('SI_ea0qgumTndfKlDw', async res => {
//       if (res.passed) {
//         console.log('result:', res);
//         var inter = await Qualtrics.displayIntercept('SI_ea0qgumTndfKlDw');
//         console.log('inter:', inter);
//       } else {
//         console.log('intercept failed...');
//       }
//     });
//     Qualtrics.evaluateIntercept('SI_6Ap5eF2xn85t75c', async resp => {
//       if (resp.passsed) {
//         var intercept = await Qualtrics.displayIntercept('SI_6Ap5eF2xn85t75c');
//       }
//     });
//   }, [myToggle]);

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Button
//             title="Evaluate Intercept"
//             onPress={() => setMyToggle(!myToggle)}
//           />
//           <Button
//             title="Set Project to QRN19"
//             onPress={e => {
//               console.log('click!');
//               Qualtrics.setString('RN_proj', 'QRN19');
//             }}
//           />
//           <Button
//             title="Set Project to QRN17"
//             onPress={e => {
//               console.log('click!');
//               Qualtrics.setString('RN_proj', 'QRN17');
//             }}
//           />
//           {/* <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits- like this edit.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section> */}
//           {/* <LearnMoreLinks /> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

const Stack = createStackNavigator();
const App = props => {
  // Only initilize the data one time when the app loads for SDK and config variables
  useEffect(() => {
    Qualtrics.initializeProject(
      'walkersandbox',
      'ZN_9XhdWiyfHvNt0ai',
      result => {
        console.log('resul:', result);
      },
    );
    Qualtrics.setString('var1', 'FOO');

    // This is a fancy way of matching the Qualtrics DateTime format using JS
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    Qualtrics.setDateTime(today);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Purchase" component={Purchase} />
          <Stack.Screen name="PurchaseComplete" component={PurchaseComplete} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
});

export default App;
