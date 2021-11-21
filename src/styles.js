import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent:'flex-start',
  },
  settingView: { //설정 상단바 스타일
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  settingGroup:{ //search/trash/dot 아이콘 버튼 정렬
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  goalView: { //목표 작성 스타일
    flex: 0.7,
    borderWidth: 1,
    padding: 3,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'green',
  },
  todolistView: { //투두리스트 전체 스타일
    margin: 5,
    flex: 5,
    backgroundColor: 'blue',
  },
  sortMenuView:{ //드롭다운(sort관련) 버튼 정렬
    marginLeft: 'auto',
  },
  categoryView:{ //투두리스트 카테고리 스타일
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  listView:{ //투두리스트 항목 스타일
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingBar: { //설정 상단바 스타일
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  }
});

export const textStyles = StyleSheet.create({ //text관련 설정
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: theme.main,
    alignItems: 'flex-start',
    marginTop: 0,
    marginLeft: 0,
  },
  contents: {
    flex: 1,
    fontSize: 15,
    color: 'black',
  },
  menu: {
    fontSize: 15,
    color: 'black',
  },
  list:{
    fontSize: 15,
    color: 'black',
  },
});


export const barStyles = StyleSheet.create({
  statusBar: {
    backgroundColor: theme.background,
  },
});
