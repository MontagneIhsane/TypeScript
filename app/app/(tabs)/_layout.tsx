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
        name="matchs"
        options={{
          title: 'Match',
        }}
      />
        <Tabs.Screen
        name="player"
        options={{
          title: 'Player',
        }}
      />
    </Tabs>
  );
}
