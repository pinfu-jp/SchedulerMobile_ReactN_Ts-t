import React, { useState } from 'react';

import {
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { LogMode, WriteLog } from '../lib/WriteLog';


// スケジュール入力画面
export const ScheduledEditView = (props: any) => {

	WriteLog(`ScheduledEditVie レンダリング `, LogMode.d)

	return (
		<SafeAreaView style={styles.container}>
			<TitleArea title={"スケジュール入力"}>				
			</TitleArea>
			<DateInput date={props.date}>
			</DateInput>
			<InputText text={props.comment}>
			</InputText>
		</SafeAreaView>
	)
}

const TitleArea = (props: any) => {

	return (
		<SafeAreaView>
	    	<Text style={styles.titleText}>
				{props.title}
      		</Text>
		</SafeAreaView>
	)	
}

// 日付入力欄
const DateInput = (props: any) => {

	const [_date, setDate] = useState(props.date)

	WriteLog(`DateInput レンダリング date:${_date}`, LogMode.d)

	return (
		<SafeAreaView>
		</SafeAreaView>
	)
}

// テキスト入力欄
const InputText = (props: any) => {

	const [_text, setText] = React.useState(props.text);

	WriteLog(`InputText レンダリング text:${_text}`, LogMode.d)

	return (
		<SafeAreaView>
			<TextInput
				style={styles.input}
				value={_text}
				onChangeText={setText}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ECF0F1'
	},
	buttonsContainer: {
		padding: 10
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
		textStyle: {
		textAlign: 'center',
		marginBottom: 8
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold"
	}
});
  
