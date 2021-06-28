import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PurchaseComplete from './PurchaseComplete';
import Qualtrics from 'react-native-qualtrics';

const Purchase = ({navigation}) => {
  const [pVal, changePVal] = useState(null);

  function updatePval(event) {
    //console.log('event:', event);
    if (event == '$') {
      changePVal(null);
      return;
    }
    var s = event.replace(/[^\d.-]/g, '');
    changePVal('$' + s);
  }

  function MakePurchase(data) {
    Qualtrics.setString('purchase_code', 'ASDF1234');
    if (pVal == '' || pVal == null || pVal == '$') {
      Qualtrics.setNumber('purchase_value', 0);
    } else {
      Qualtrics.setNumber(
        'purchase_value',
        parseFloat(pVal.replace(/[^\d.-]/g, '')),
      );
    }
    setTimeout(() => {
      navigation.navigate('PurchaseComplete', {pval: pVal});
    }, 1000);
  }

  useEffect(() => {
    Qualtrics.setString('curr_nav', 'purchase');

    setTimeout(() => {
      Qualtrics.evaluateIntercept('SI_50vKxvWcvTgmUJg', async res => {
        if (res.passed) {
          var inter = await Qualtrics.displayIntercept('SI_50vKxvWcvTgmUJg');
          console.log('inter:', inter);
        } else {
          console.log('intercept failed...');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Purchase Screen</Text> */}
      <TextInput
        name="Purchase value"
        style={styles.input}
        onChangeText={val => updatePval(val)}
        value={pVal}
        placeholder="cost of purchase"
        keyboardType="numeric"
      />
      <View style={styles.submit}>
        <Button
          title="Make Purchase"
          onPress={e => {
            MakePurchase(e);
          }}
          style={styles.subButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    fontSize: 37,
    marginTop: 80,
  },
  submit: {
    justifyContent: 'flex-end',
    //backgroundColor: 'aqua',
    marginTop: 200,
  },
  subButton: {
    fontSize: 57,
    backgroundColor: 'blue',
  },
});

export default Purchase;
