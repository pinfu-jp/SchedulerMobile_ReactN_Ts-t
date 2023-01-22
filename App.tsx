/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState, useMemo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { DefineLogFilePath, LogMode, WriteLog } from './src/lib/WriteLog';

import {ViewChanger, ViewMode} from "./src/view/ViewChanger"
import { GetDocumentDirPath } from "./src/lib/SystemFile";

const LOG_FILE_NAME = "app.log"

DefineLogFilePath(`${GetDocumentDirPath()}/${LOG_FILE_NAME}`)

// アプリ本体
const App = () => {

	const isDarkMode = useMemo(() => {	
		return useColorScheme() === 'dark'
	}, [])

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const [viewMode, setViewMode] = useState(ViewMode.InputSchedule)

	WriteLog(`App レンダリング viewMode:${viewMode}`, LogMode.d)

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
			barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={backgroundStyle}>
				<ViewChanger mode={viewMode}/>	
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
