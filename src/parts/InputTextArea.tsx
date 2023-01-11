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

	const inputEvent = useTextInputEvent('InputTextArea', props.text, props.onEnd)
	
	WriteLog(`InputTextArea レンダリング text:${inputEvent._text}`, LogMode.d)

	return (
		<View>
			<Text>{props.title}</Text>
			<TextInput style={props.style}	{...inputEvent}/>
		</View>
	)
}
