import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
        <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
        }}
      />
        <Tabs.Screen
        name="solde"
        options={{
          title: 'Solde',
        }}
      />
    </Tabs>
  );
}
