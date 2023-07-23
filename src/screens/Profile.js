import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground
        source={require('../image/bg.jpg')}
        resizeMode="contain"
        style={{
          width: '100%',
          height: 240,
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            height: 400,
            backgroundColor: 'white',
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              alignItems: 'center',
            }}>
            <Image
              source={require('../image/user.jpg')}
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                borderWidth: 5,
                borderColor: 'white',
                margin: 10,
              }}
            />
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Deni Zainuri.A
              </Text>
              <Text style={{marginLeft: 10}}>Administrasi Bisnis</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 60,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>3.407k</Text>
              <Text>followers</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>87</Text>
              <Text>following</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>2.3jt</Text>
              <Text>likes</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
                width: 120,
                height: 35,
                backgroundColor: 'green',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://instagram.com/shedulur_kopi?igshid=MjEwN2IyYWYwYw==',
                )
              }>
              <Text style={{color: 'white', fontWeight: 'bold'}}>follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 120,
                height: 35,
                backgroundColor: 'green',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => Linking.openURL('https://wa.me/6281807082663')}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>chat me</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 20}}>
              Photos
            </Text>
            <ScrollView horizontal={true}>
              <Image
                source={require('../image/photo1.jpg')}
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginRight: 10,
                }}
              />
              <Image
                source={require('../image/photo2.jpg')}
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
              <Image
                source={require('../image/photo1.jpg')}
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
              <Image
                source={require('../image/photo2.jpg')}
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
              <Image
                source={require('../image/photo1.jpg')}
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Profile;
