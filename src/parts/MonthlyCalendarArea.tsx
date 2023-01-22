import React, { useMemo, useState } from 'react';

import {
  View,
  Text,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LogMode, WriteLog } from '../lib/WriteLog';

export interface MonthlyCalendarAreaProps {
    currentDate: Date;
	onSelect: (date: Date) => void	
	style: StyleProp<TextStyle>;
}

// 月次カレンダー欄
export const MonthlyCalendarArea = (props: MonthlyCalendarAreaProps) => {

	const [_date, setDate] = useState(props.currentDate)

	WriteLog(`MonthlyCalendarArea レンダリング date:${_date}`, LogMode.d)

	const onPressBtn1 = (event: GestureResponderEvent) => {
		WriteLog(`InputDateArea onPressBtn id:${event.nativeEvent.identifier}`, LogMode.d)
	}

	const title = (_date) ? `${_date?.getMonth()}月` : ""
	const lastDay = (_date) ? getLastDayOfMonth(_date) : 0

	return (
		<View>
			<Text>{title}</Text>
			{renderButtons(lastDay, props.style)}
		</View>
	)
}

const renderButtons = (dayNum:number, style:StyleProp<TextStyle>) => {
	const buttons = [];
	for( let i = 1; i <= dayNum; i++) {
	   buttons.push(
		<TouchableOpacity>
			<Text>
				{i}
			</Text>
		  {/* <Image
			// style={}
			// source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
		  /> */}
		</TouchableOpacity>
	  )
	}
	return buttons;
}

/////----

// 最後の日
const getLastDayOfMonth = (date:Date) => {
	return new Date(date.getFullYear(), date.getMonth(), 0).getDay()
}

// うるう年判定
const isLeapYear = (date: Date) => {
	return new Date(date.getFullYear(), 2, 0).getDay() === 29
}
