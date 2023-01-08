import React, { useMemo, useState } from 'react';

import {
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputEndEditingEventData,
} from 'react-native';

import { LogMode, WriteLog } from '../lib/WriteLog';

import {InputTextArea} from '../parts/InputTextArea'
import {InputDateArea} from '../parts/InputDateArea'
import { ScheduleData } from '../data/ScheduleData';

export interface ScheduledEditViewProps {
	dataUUID:string
}


// スケジュール入力画面
export const ScheduledEditView = (props: ScheduledEditViewProps) => {

	WriteLog(`ScheduledEditVie レンダリング dataUUID:${props.dataUUID}`, LogMode.d)

	const [uuid, setUuid] = useState(props.dataUUID)

	const scheData = useMemo(() => {
		return new ScheduleData(props.dataUUID)
	}, [props.dataUUID])

	const didEndDate = (date: Date) => {
		scheData.date = date
	}

	const didEndComment = (text:string) => {
		scheData.comment = text
	}

	return (
		<SafeAreaView style={styles.container}>
			<TitleArea title={"スケジュール入力"}>				
			</TitleArea>
			<InputDateArea caption={"日付"} date={scheData.date} style={styles.input} onEnd={didEndDate}/>
			<InputTextArea caption={"内容"} text={scheData.comment} style={styles.input} onEnd={didEndComment}/>
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
			<Text>{props.caption}</Text>
			{/* <button title='1' onClick={props.onClick}></button> */}
			<Button
				onPress={props.onClick}
				title="1"
				color="#841584"
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
  
