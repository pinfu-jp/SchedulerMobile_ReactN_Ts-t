import React, { useMemo, useState } from 'react';

import {
	Button,
	GestureResponderEvent,
	SafeAreaView,
	StyleSheet,
} from 'react-native';

import { LogMode, WriteLog } from '../lib/WriteLog';

import { ScheduleData } from '../data/ScheduleData';
import { TitleArea } from '../parts/TitleArea';
import { MonthlyCalendarArea } from '../parts/MonthlyCalendarArea';
import { useScheCommentArea, useScheDateArea } from './Hooks/ScheduledEditHooks';

export interface ScheduleListViewProps {
	currentDataUUID:string
}


// スケジュール一覧画面
export const ScheduleListView = (props: ScheduleListViewProps) => {

	WriteLog(`ScheduleListView レンダリング currentDataUUID:${props.currentDataUUID}`, LogMode.d)

	const [uuid, setUuid] = useState(props.currentDataUUID)

	const scheData = useMemo(() => {
		return new ScheduleData(props.currentDataUUID)
	}, [props.currentDataUUID])

	const onPressEnterBtn = (event: GestureResponderEvent) => {
		WriteLog(`ScheduledEditView onPressBtn id:${event.nativeEvent.identifier}`, LogMode.d)
	}

	const date = useScheDateArea(scheData, styles.input)
	const comment = useScheCommentArea(scheData, styles.input)

	const onSelectDate = (date:Date) => {

	}

	const currentDate = new Date()

	return (
		<SafeAreaView style={styles.container}>
			<TitleArea title={"スケジュール一覧"} style={styles.titleText}/>
			<MonthlyCalendarArea currentDate={currentDate} style={undefined} onSelect={onSelectDate}/>
			<Button
				title="登録"
				color="#841500"
				onPress={onPressEnterBtn}
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
  
