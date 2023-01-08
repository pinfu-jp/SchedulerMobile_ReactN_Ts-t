import React, { useMemo, useState } from 'react';

import {
	Button,
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
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

	const onPressEnterBtn = (event: GestureResponderEvent) => {
		WriteLog(`ScheduledEditView onPressBtn id:${event.nativeEvent.identifier}`, LogMode.d)
	}


	return (
		<SafeAreaView style={styles.container}>
			<TitleArea title={"スケジュール入力"}>				
			</TitleArea>
			<InputDateArea
				title={"日付"} 
				date={scheData.date}
				style={styles.input} 
				onEnd={didEndDate}
			/>
			<InputTextArea 
				title={"内容"}
				text={scheData.comment} 
				style={styles.input} 
				onEnd={didEndComment}
			/>
			<Button
				title="登録"
				color="#841500"
				onPress={onPressEnterBtn}
			/>
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
  
