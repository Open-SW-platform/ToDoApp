import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent:'flex-start',
  },
  settingView: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  settingGroup:{
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  goalView: {
    flex: 0.7,
    borderWidth: 1,
    padding: 3,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'green',
  },
  todolistView: {
    margin: 5,
    flex: 5,
    backgroundColor: 'blue',
  },
  sortMenuView:{
    marginLeft: 'auto',
  },
  categoryView:{
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  listView:{
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabView: {
    flexDirection: 'row',
    flex: 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export const textStyles = StyleSheet.create({
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
