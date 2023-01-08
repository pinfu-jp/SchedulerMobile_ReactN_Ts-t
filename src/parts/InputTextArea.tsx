import React, { useMemo, useState } from 'react';

import {
  View,
  TextInput,
  Text,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputEndEditingEventData,
  TextStyle,
  StyleProp,
} from 'react-native';
import { LogMode, WriteLog } from '../lib/WriteLog';

export interface InputTextAreaProps {
    text?: string;
	title: string;
	style: StyleProp<TextStyle>;
	onEnd: (text: string) => void	
}


// テキスト入力欄
export const InputTextArea = (props: InputTextAreaProps) => {

	const [_text, setText] = React.useState(props.text);

	WriteLog(`InputTextArea レンダリング text:${_text}`, LogMode.d)

	const onKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
		const key = event.nativeEvent.key
		WriteLog(`InputTextArea onKeyPress key:${key}`, LogMode.d)
	}

	const onChangeText = (text:string) => {
		WriteLog(`InputTextArea onChangeText text:${text}`, LogMode.d)
		setText(text)
	}

	const onEndEditing = (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
		WriteLog(`InputTextArea onEndEditing text:${event.nativeEvent.text}`, LogMode.d)
		// TODO: 入力値を得たい
		props.onEnd(event.nativeEvent.text)
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
		</View>
	)
}
