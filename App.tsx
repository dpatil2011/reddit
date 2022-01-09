/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import Header from './src/common/components/home-page-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconShare from 'react-native-vector-icons/EvilIcons';
import IconMessage from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {material} from 'react-native-typography';
import {Styles} from './src/styles/home-page-styles';

type State = {
  list: any;
  isLoading: boolean;
  isRefresh: boolean;
};
type Props = {};
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false,
      isRefresh: false,
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    try {
      this.setState({isLoading: true});
      fetch('https://www.reddit.com/.json')
        .then(response => response.json())
        .then(data =>
          this.setState({list: data.data, isLoading: false, isRefresh: false}),
        );
    } catch (error) {}
  };
  render() {
    const {list, isLoading} = this.state;
    const renderItem = ({item}: any) => (
      <View style={Styles.cardView}>
        <View style={Styles.flexRow}>
          <View>
            <Text style={material.body1}>
              {item.data.subreddit_name_prefixed}
            </Text>
            <Text style={material.caption}>
              {`Posted by ${item.data.author_fullname}`}
            </Text>
          </View>
        </View>
        <Text style={material.title}>{item.data.title}</Text>
        <View style={Styles.paddingVertical}>
          {item.data.thumbnail &&
            item.data.thumbnail !== 'default' &&
            item.data.thumbnail !== 'self' && (
              <Image
                source={{
                  uri: item.data.thumbnail,
                }}
                style={(Styles.image, {height: item.data.thumbnail_height})}
              />
            )}
        </View>
        <View style={Styles.cardBottomView}>
          <View style={Styles.IconView}>
            <Icon name="arrow-up" size={25} color="#bfbaba" />
            <Text style={[Styles.marginHorizontal, material.body1]}>
              {item.data.ups - item.data.downs}
            </Text>
            <Icon name="arrow-down" size={25} color="#bfbaba" />
          </View>
          <View style={Styles.IconView}>
            <IconMessage name="message-square" size={25} color="#bfbaba" />
            <Text style={material.body1}>{item.data.num_comments}</Text>
          </View>
          <View style={Styles.IconView}>
            <IconShare name="share-google" size={25} color="#bfbaba" />
            <Text style={material.body1}>Share</Text>
          </View>
          <View style={Styles.IconView}>
            <IconAntDesign name="medicinebox" size={25} color="#bfbaba" />
          </View>
        </View>
      </View>
    );
    return (
      <SafeAreaView style={Styles.container}>
        <Header />
        {isLoading ? (
          <View style={Styles.spinnerView}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={list.children}
            renderItem={renderItem}
            refreshing={this.state.isRefresh}
            contentContainerStyle={Styles.listContainer}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => {
              return <View style={Styles.itemSaprater} />;
            }}
            onRefresh={() => {
              this.getData();
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default App;
