import React, {useState} from 'react';
import { StatusBar, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {viewStyles, textStyles, buttonStyle, barStyles} from './styles'
import Input from './components/Input';
import { images } from './images';
import IconButton from './components/IconButton';
import SelectDropdown from 'react-native-select-dropdown';
import TabBar from 'react-native-nav-tabbar';

export default function App() {

    const [newTask, setNewTask] = useState('');
    const sortMenu = ["Due date", "Added date"];

  return (
    <View style={viewStyles.container}>
      <StatusBar barStyle="light-content" style={barStyles.statusBar} />
      <View style={viewStyles.settingView}>
        <IconButton type={images.menu} />
        <Text>  8.30 Monday </Text>
        <IconButton type={images.dropDown} />
        <View style={viewStyles.settingGroup}>
          <IconButton type={images.search} />
          <IconButton type={images.trash} />
          <IconButton type={images.dot} />
        </View>
      </View>
      <View style={viewStyles.goalView}>
        <TextInput
          style={{ padding: 10, fontSize: 20 }}
          placeholder="TODAY'S GOAL" />
      </View>
      <View style={viewStyles.todolistView}>
        <View style = {viewStyles.sortMenuView}>
        <SelectDropdown 
          data={sortMenu}
          buttonStyle = {[
            {
              margin: 8,
              borderWidth: 1,
              borderRadius: 3,
              width: 120,
              height: 35,
            }
          ]}
          buttonTextStyle= {[
            {
              fontSize: 15,
            }
          ]}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          } }
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        </View>
        <ScrollView>
        <View style={viewStyles.categoryView}>
          <IconButton type={images.tag} />
          <Text style={textStyles.contents}> My Category </Text>
        </View>
        <View style={viewStyles.listView}>
          <IconButton type={images.checked} />
          <Text style={textStyles.contents}>Do my assignment</Text>
        </View>
        </ScrollView>
      </View>
      <View style={viewStyles.tabView}>
      <TabBar>
      <TabBar.Item
        icon={require('../assets/checked_box.png')}
        selectedIcon={require('../assets/checked_box.png')}
        title="To do"
      >
      <View>
        <Text style={{fontSize: 10}}>Todo</Text>
      </View>
      </TabBar.Item>
      <TabBar.Item>
        <View>
            <Text style={{fontSize: 10}}>Add list</Text>
        </View>
    </TabBar.Item>
      <TabBar.Item
        icon={require('../assets/achieve_icon.png')}
        selectedIcon={require('../assets/achieve_icon.png')}
        title="Achieve"
      >
      <View>
        <Text style={{fontSize: 10}}>Achievement</Text>
      </View>
      </TabBar.Item>
    </TabBar>
    </View>
  </View>
  );
}