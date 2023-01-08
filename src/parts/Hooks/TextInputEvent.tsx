import React from "react";
import { GestureResponderEvent, NativeSyntheticEvent, TextInputEndEditingEventData, TextInputKeyPressEventData } from "react-native";
import { LogMode, WriteLog } from "../../lib/WriteLog";


// TextInputイベント カスタムフック
export const useTextInputEvent = (id:String, text?:string, onEnd?:(text:string) => void) => {

	const [_text, setText] = React.useState(text);

	const onTouchEnd = (event: GestureResponderEvent) => {
		WriteLog(`TextInput onTouchEnd id:${id}`, LogMode.d)		
	}

	const onKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
		const key = event.nativeEvent.key
		WriteLog(`TextInput onKeyPress id:${id} key:${key}`, LogMode.d)
	}

	const onChangeText = (text:string) => {
		WriteLog(`TextInput onChangeText id:${id} text:${text}`, LogMode.d)
		setText(text)
	}

	const onEndEditing = (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
		WriteLog(`TextInput onEndEditing id:${id} text:${event.nativeEvent.text}`, LogMode.d)
		// TODO: 入力値を得たい
		if (onEnd)
			onEnd(event.nativeEvent.text)
	}

	return {_text, onTouchEnd, onKeyPress, onChangeText, onEndEditing}
}
