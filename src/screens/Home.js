import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: '#b38867',
              fontSize: 16,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            Menu
          </Text>
          <Image
            source={require('../image/user.jpg')}
            style={{borderRadius: 50, width: 50, height: 50}}
          />
        </View>
        <View style={{alignItems: 'center', width: '100vw', marginTop: 10}}>
          <TextInput
            style={{
              height: 40,
              width: 360,
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
              paddingHorizontal: 20,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#efc3a4',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../image/all.png')}
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
            <Text style={{color: '#b38867', fontWeight: 'bold', marginTop: 5}}>
              All
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#ddbc95',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../image/capucino.png')}
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
            <Text style={{color: '#b38867', fontWeight: 'bold', marginTop: 5}}>
              Cappucino
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#daccba',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../image/snack.png')}
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
            <Text style={{color: '#b38867', fontWeight: 'bold', marginTop: 5}}>
              Snack
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#b38867',
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 30,
            marginBottom: 5,
          }}>
          Promotion
        </Text>
        <View
          style={{
            width: '100vw',
            height: 200,
            alignItems: 'center',
          }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 200,
              width: '100vw',
            }}>
            <Image
              source={require('../image/banner1.jpg')}
              resizeMode="contain"
              style={{
                width: 350,
                height: 200,
                backgroundColor: 'blue',
                borderRadius: 20,
                marginHorizontal: 5,
              }}
            />
            <Image
              source={require('../image/banner2.png')}
              resizeMode="contain"
              style={{
                width: 350,
                height: 200,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}
            />
            <Image
              source={require('../image/banner3.jpg')}
              resizeMode="contain"
              style={{
                width: 350,
                height: 200,
                backgroundColor: 'blue',
                borderRadius: 20,
                marginHorizontal: 10,
              }}
            />
          </ScrollView>
        </View>
        <Text
          style={{
            color: '#b38867',
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 5,
          }}>
          Popular
        </Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../image/cream-boba.jpg')}
                style={{
                  width: 175,
                  height: 100,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}></Image>
              <Text style={{color: '#b3886c', fontWeight: 'bold'}}>
                Cream Boba
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../image/coffee-latee.jpg')}
                style={{
                  width: 175,
                  height: 100,
                  backgroundColor: 'red',
                  borderRadius: 10,
                }}></Image>
              <Text style={{color: '#b3886c', fontWeight: 'bold'}}>
                Coffe Latee
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
