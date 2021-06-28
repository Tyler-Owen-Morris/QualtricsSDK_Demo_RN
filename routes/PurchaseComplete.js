import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Qualtrics from 'react-native-qualtrics';

const PurchaseComplete = props => {
  useEffect(() => {
    Qualtrics.setString('curr_nav', 'purchasecomplete');
  }, []);

  setTimeout(() => {
    Qualtrics.evaluateIntercept('SI_6Ap5eF2xn85t75c', async resp => {
      if (resp.passed) {
        var intercept = await Qualtrics.displayIntercept('SI_6Ap5eF2xn85t75c');
      } else {
        console.log('purchase intercept failed:', resp);
      }
    });
  }, 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for your purchase!</Text>
      <View style={styles.button}>
        <Button
          title="< Back to Purchase"
          onPress={() => {
            props.navigation.navigate('Purchase');
          }}
        />
        <Button
          title="< Back Home"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 30,
  },
  button: {
    marginTop: 30,
    // backgroundColor: 'yellow',
  },
});

export default PurchaseComplete;
