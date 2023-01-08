import React, { useMemo, useState } from 'react';

import {
  View,
  TextInput,
  Text,
  TextStyle,
  StyleProp,
} from 'react-native';
import { LogMode, WriteLog } from '../lib/WriteLog';
import { useTextInputEvent } from './Hooks/TextInputHooks';

export interface InputTextAreaProps {
    text?: string;
	title: string;
	style: StyleProp<TextStyle>;
	onEnd: (text: string) => void	
}



// テキスト入力欄
export const InputTextArea = (props: InputTextAreaProps) => {

	const {_text, onTouchEnd, onKeyPress, onChangeText, onEndEditing} = useTextInputEvent('InputTextArea', props.text, props.onEnd)
	
	WriteLog(`InputTextArea レンダリング text:${_text}`, LogMode.d)

	return (
		<View>
			<Text>{props.title}</Text>
			<TextInput
				style={props.style}
				value={_text}
				onTouchEnd={onTouchEnd}
				onKeyPress={onKeyPress}
				onChangeText={onChangeText}
				onEndEditing={onEndEditing}
			/>
		</View>
	)
}
