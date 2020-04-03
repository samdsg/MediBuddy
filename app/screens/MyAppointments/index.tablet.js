import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import MyAppointments from './index.mobile';
import AppointmentDetail from 'app/screens/AppointmentDetail';
import Calendar from 'app/screens/Calendar';

import styles from './styles';

export default function Appointments({ navigation }) {
  const onClick = () => navigation.navigate('AppointmentDetail');
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <MyAppointments />
      <AppointmentDetail />
      <Calendar />
    </View>
  );
}