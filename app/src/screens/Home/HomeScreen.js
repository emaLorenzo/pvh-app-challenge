import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import ScreenContainer from 'components/ScreenContainer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  detailButtonContainer: { marginTop: 16 },
});

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <ScreenContainer>
      <Text>Everything is configured and ready to go, start the challenge!</Text>
      <Button
        title="Detail screen"
        containerStyle={styles.detailButtonContainer}
        onPress={() => navigate('Detail')}
      />
    </ScreenContainer>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomeScreen;
