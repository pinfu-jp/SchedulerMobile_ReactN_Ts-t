import React, { useState } from 'react';

import {
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {ScheduledEditView} from "./ScheduleEditView"

import { WriteLog, LogMode } from '../lib/WriteLog';

export enum ViewMode {
	InputSchedule,
	ScheduleList
}

export const ViewChanger = (props:any) => {

	const [_viewKind, setViewKind] = useState(1)

	WriteLog(`ViewChanger レンダリング viewKind:${_viewKind}`, LogMode.d)

	if (props.mode == ViewMode.InputSchedule) {
		return <ScheduledEditView></ScheduledEditView>
	} else {
		return <p>Empty</p>
	}
}