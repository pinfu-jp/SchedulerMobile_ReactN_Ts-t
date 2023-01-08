import React, { useMemo, useState } from 'react';

import {
  View,
  Button,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputEndEditingEventData,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
} from 'react-native';
import { LogMode, WriteLog } from '../lib/WriteLog';

export interface InputDateAreaProps {
    date?: Date;
	title: string;
	style: StyleProp<TextStyle>;
	onEnd: (date: Date) => void	
}

// 日付入力欄
export const InputDateArea = (props: InputDateAreaProps) => {

	const [_date, setDate] = useState(props.date)

	const [_text, setText] = React.useState(String(props.date));

	WriteLog(`InputDateArea レンダリング date:${_date}`, LogMode.d)

	const onKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
		const key = event.nativeEvent.key
		WriteLog(`InputDateArea onKeyPress key:${key}`, LogMode.d)
	}

	const onChangeText = (text:string) => {
		WriteLog(`InputDateArea onChangeText text:${text}`, LogMode.d)
		setText(text)
	}

	const onEndEditing = (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
		WriteLog(`InputDateArea onEndEditing text:${event.nativeEvent.text}`, LogMode.d)
		// TODO: 入力値を得たい
		props.onEnd(new Date)
	}

	const onPressBtn1 = (event: GestureResponderEvent) => {
		WriteLog(`InputDateArea onPressBtn id:${event.nativeEvent.identifier}`, LogMode.d)
	}

	return (
		<View>
			<Text>{props.title}</Text>
			<TextInput
				style={props.style}
				value={_text}
				onKeyPress={onKeyPress}
				onChangeText={onChangeText}
				onEndEditing={onEndEditing}
			/>
			<Button
				title="1"
				color="#841584"
				onPress={onPressBtn1}
			/>
		</View>
	)
}
