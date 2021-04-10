import React from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';

import styles, {colors} from './styles';

const smallDevice = Dimensions.get('window').height < 600;
const Footer = (props) => {
  const {navigation, state} = props;
  const currentView = state.routes[state.index].name;

  const navigateAndChangeCurrent = (nav) => {
    console.log(nav);
    navigation.navigate(nav);
  };

  return (
    <View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={() => navigateAndChangeCurrent('ExploreScreen')}
          style={styles.footerTouchable}>
          <Image
            style={styles.footerButton}
            source={
              currentView === 'ExploreScreen'
                ? require('../../assets/footerHomeActive.png')
                : require('../../assets/footerHome.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerTouchable}
          onPress={() => navigateAndChangeCurrent('ForYouScreen')}>
          <Image
            style={styles.footerButton}
            source={
              currentView === 'ForYouScreen'
                ? require('../../assets/footerSearchActive.png')
                : require('../../assets/footerSearch.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateAndChangeCurrent('ValletScreen')}
          style={styles.footerTouchable}>
          <Image
            style={styles.footerButton}
            source={
              currentView === 'ValletScreen'
                ? require('../../assets/footerTicketActive.png')
                : require('../../assets/footerTicket.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateAndChangeCurrent('ProfileScreen')}
          style={styles.footerTouchable}>
          <Image
            style={styles.footerButton}
            source={
              currentView === 'ProfileScreen'
                ? require('../../assets/footerProfileActive.png')
                : require('../../assets/footerProfile.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
