import React, { useState } from 'react';
// import { useRouter } from "next/router";

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
// import { randomUUID } from 'crypto';

export enum ViewMode {
	InputSchedule,
	ScheduleList
}

export const ViewChanger = (props:any) => {

	const [_viewKind, setViewKind] = useState(1)

//	const router = useRouter()
	// const uuid = randomUUID
	const uuid = "aaa"

	WriteLog(`ViewChanger レンダリング viewKind:${_viewKind}`, LogMode.d)

	if (props.mode == ViewMode.InputSchedule) {
		return <ScheduledEditView dataUUID={uuid}/>
	} else {
		return <p>Empty</p>
	}
}