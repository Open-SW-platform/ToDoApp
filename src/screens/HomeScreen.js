//홈(메인) 화면
import React, {useState} from 'react';
import { StatusBar, Text, View, TextInput, ScrollView,Alert, Modal, StyleSheet, Pressable } from 'react-native';
import {viewStyles, textStyles, barStyles} from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import SelectDropdown from 'react-native-select-dropdown';
import AddTaskButton from '../components/AddTaskButton';
import Memo from '../components/Memo';
import TodolistInput from '../components/TodolistInput';

export default function HomeScreen() {
Alert, Modal, StyleSheet, Text, Pressable, View
  const [newTask, setNewTask] = useState('');
  const sortMenu = ["Due date", "Added date"]; // 드롭다운 메뉴 항목
  const [modalVisible, setModalVisible] = useState(false); // 태스크 추가하는 창을 띄우고 있는지 여부

  
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
    
    <Modal // Task 추가할때 띄우는 창.
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
      
          <View style={modalstyles.modalView}>
          <View style={viewStyles.settingGroup}>
          
          <IconButton type={images.check} onPressOut={() => setModalVisible(!modalVisible)} />
          <IconButton type={images.trash} onPressOut={() => alert('delete')}/>
          <IconButton type={images.cancle} onPressOut={() => setModalVisible(!modalVisible)}/>
          </View>
          <TodolistInput/>
          <ScrollView style={{width:'100%',marginLeft:30,}}>
            <Text style={modalstyles.modalText}>Note</Text>
            <Memo/>
            <Text style={modalstyles.modalText}>Due date : 12-25</Text>
           </ScrollView>
          </View>
      </Modal>
    
     
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

      <View style={viewStyles.AddTaskButtonView}>
      <AddTaskButton text="+" onPress={() => setModalVisible(true)}  />
    
    </View>

     

    </View>
  </View>
);
}

const modalstyles = StyleSheet.create({
  
  modalView: {
    marginTop: 250,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '70%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 10,
    textAlign: 'left',
  
  },
  top : {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent : 'flex-end',
    alignItems : 'center',

  },
 
});