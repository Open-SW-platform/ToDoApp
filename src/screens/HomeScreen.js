//홈(메인) 화면
import React, {useState} from 'react';
import { StatusBar, Text, View, TextInput, ScrollView,Alert, Modal, StyleSheet, Pressable } from 'react-native';
import {viewStyles, textStyles, barStyles,modalstyles} from '../styles'
import { images } from '../images';
import IconButton from '../components/IconButton';
import CircleButton from '../components/CircleButton';
import Memo from '../components/Memo';
import TodolistInput from '../components/TodolistInput';
import Today from '../components/Today'
import ThemeSelector from '../components/ThemeSelector';

export default function HomeScreen() {
Alert, Modal, StyleSheet, Text, Pressable, View
  const [newTask, setNewTask] = useState('');
  
  const [modalVisible, setModalVisible] = useState(false); // 태스크 세부사항창을 띄우고 있는지 여부
  const [themeVisible, setThemeVisible] = useState(false); // theme 변경 창을 띄우고 있는지 여부
  const [DeleteMode, setDeleteMode] = useState(false); //삭제모드인지 여부.
  var TopBar;

  const openTheme = ()=>{
    setThemeVisible(!themeVisible);
  }

  if (DeleteMode){ //삭제모드라면 -> 상단바부분을 삭제부분으로 변경.
    TopBar=<View style={viewStyles.settingView} >
    <IconButton type={images.back}  onPressOut={() => setDeleteMode(!DeleteMode)}/>
    <Text>  Delete </Text>
    <View style={viewStyles.settingGroup}>
      <IconButton type={images.unchecked} />
      <IconButton type={images.trash} />
    </View>
  </View>
    
  }
  else { // 삭제모드가 아니라면 -> 일반 상단바 보여줌
    TopBar=
    <View style={viewStyles.settingView} > 
      <Today/>
      <View style={viewStyles.settingGroup}>
        <IconButton type={images.search} />
       
        <IconButton type={images.dot} />
      </View>
    </View>

  }
  
return (
  <View style={viewStyles.container}>
    <StatusBar barStyle="light-content" style={barStyles.statusBar} />
    {TopBar} 
    <ThemeSelector themeVisible={themeVisible} setThemeVisible={setThemeVisible} // 테마선택창
    /> 
    <Modal // Task 클릭시 띄우는 세부사항 창. 
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
     
      <CircleButton color='white' onPress={openTheme}  />
     
    </View>

    

     

    </View>
  </View>
);
};
