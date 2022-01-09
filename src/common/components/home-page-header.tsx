/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {};
type State = {
  search: String
};

class HomePageHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.textInputView}>
          <Icon name="search" size={30} color="#900" />
          <TextInput
            placeholder={'Search'}
            onChangeText={(text: string) => { this.setState({ search: text }); }}
            style={styles.textView}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 35,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  textInputView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  textView: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default HomePageHeader;
