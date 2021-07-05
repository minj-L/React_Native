//Timer_main_detail의 남은 경매시간을 보여주는 타이머

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const Timer_main_detail = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate = '2021-07-02 18:00:00';
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <CountDown
        size={15}
        until={1000}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#000'}}
        separatorStyle={{color: '#000'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginLeft: 10,
  },
});

export default Timer_main_detail;