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
import { useTextInputEvent } from './Hooks/TextInputHooks';

export interface InputDateAreaProps {
    date?: Date;
	title: string;
	style: StyleProp<TextStyle>;
	onEnd: (date: Date) => void	
}

// 日付入力欄
export const InputDateArea = (props: InputDateAreaProps) => {

	const {_text, onTouchEnd, onChangeText, onEndEditing} = useTextInputEvent('InputDateArea', String(props.date))

	const [_date, setDate] = useState(props.date)

	WriteLog(`InputDateArea レンダリング date:${_date}`, LogMode.d)

	const onPressBtn1 = (event: GestureResponderEvent) => {
		WriteLog(`InputDateArea onPressBtn id:${event.nativeEvent.identifier}`, LogMode.d)
	}

	return (
		<View>
			<Text>{props.title}</Text>
			<TextInput
				style={props.style}
				value={_text}
				onTouchEnd={onTouchEnd}
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
