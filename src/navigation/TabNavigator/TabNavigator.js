import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '../../views/profile';
import Footer from '../../components/footer';
import ForYouScreen from '../../views/forYou';
import ExploreScreen from '../../views/explore';
import ValletScreen from '../../views/vallet';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <Footer {...props} />}>
      <Tab.Screen name="ForYouScreen" component={ForYouScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
      <Tab.Screen name="ValletScreen" component={ValletScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
