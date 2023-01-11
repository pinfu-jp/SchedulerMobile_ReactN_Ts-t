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
import { useScheCommentArea, useScheDateArea } from './Hooks/ScheduledEditHooks';

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

	const onPressEnterBtn = (event: GestureResponderEvent) => {
		WriteLog(`ScheduledEditView onPressBtn id:${event.nativeEvent.identifier}`, LogMode.d)
	}

	const date = useScheDateArea(scheData, styles.input)
	const comment = useScheCommentArea(scheData, styles.input)

	return (
		<SafeAreaView style={styles.container}>
			<TitleArea title={"スケジュール入力"} style={styles.titleText}/>				
			{date.inputArea}
			{comment.inputArea}
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
  
