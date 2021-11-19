//홈(메인) 화면
import React, {useState} from 'react';
import { StatusBar, Text, View, TextInput, ScrollView } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import SelectDropdown from 'react-native-select-dropdown';

export default function HomeScreen() {

  const [newTask, setNewTask] = useState('');
  const sortMenu = ["Due date", "Added date"]; // 드롭다운 메뉴 항목

return (
  <View style={viewStyles.container}>
    <StatusBar barStyle="light-content" style={barStyles.statusBar} />
    <View style={viewStyles.settingView}/**설정상단바 - 우선은 날짜 부분을 8.30로 통일했으나 추후 수정해야함*/ >
      <IconButton type={images.menu} />
      <Text>  8.30 Monday </Text>
      <IconButton type={images.dropDown} />
      <View style={viewStyles.settingGroup}>
        <IconButton type={images.search} />
        <IconButton type={images.trash} />
        <IconButton type={images.dot} />
      </View>
    </View>
    <View style={viewStyles.goalView}/** 목표 작성부분*/>
      <TextInput
        style={{ padding: 10, fontSize: 20 }}
        placeholder="TODAY'S GOAL" />
    </View>
    <View style={viewStyles.todolistView}>
      <View style = {viewStyles.sortMenuView}>
      <SelectDropdown  //드롭다운 관련 설정 코드
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
      <View style={viewStyles.categoryView}/** 투두리스트 카테고리 - 여기부분 scrollView로 scroll가능*/>
        <IconButton type={images.tag} />
        <Text style={textStyles.contents}> My Category </Text>
      </View>
      <View style={viewStyles.listView}/** 투두리스트 항목 */>
        <IconButton type={images.checked} />
        <Text style={textStyles.contents}>Do my assignment</Text>
      </View>
      </ScrollView>
    </View>
  </View>
);
}