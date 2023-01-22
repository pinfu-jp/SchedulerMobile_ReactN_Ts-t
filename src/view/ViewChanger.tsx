import React, { Component, useState } from 'react';
// import { useRouter } from "next/router";

import {ScheduledEditView} from "./ScheduleEditView"

import { WriteLog, LogMode } from '../lib/WriteLog';
import { ScheduleListView } from './ScheduleListView';
// import { randomUUID } from 'crypto';

export enum ViewMode {
	InputSchedule,
	ScheduleList,
	Setting
}

export const ViewChanger = (props:any) => {

	const [_viewKind, setViewKind] = useState(1)

//	const router = useRouter()
	// const uuid = randomUUID
	const uuid = "aaa"

	WriteLog(`ViewChanger レンダリング viewKind:${_viewKind}`, LogMode.d)

	var content = <p>Empty</p> 
	if (props.mode == ViewMode.InputSchedule) {
		content = <ScheduledEditView dataUUID={uuid}/>
	} else if (props.mode == ViewMode.ScheduleList) {
		content = <ScheduleListView currentDataUUID={uuid}/>
	}

	return content
}