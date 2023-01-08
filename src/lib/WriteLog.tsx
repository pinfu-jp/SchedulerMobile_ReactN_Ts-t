// import fs from "fs";		// react-native で構築すると node.js の fs は直接は使えないのかな
import * as reactFs from 'react-native-fs';
import moment from "moment";
import { useMemo } from 'react';

const MAX_LOG_FILE_SIZE_MB = 1024

export enum LogMode {
	d = 'debug',
	i = 'info',
	w = 'warning',
	e = 'error'
}

// TODO: カスタムフックでログ機能を提供したい！

const useWriteLog = (path: string) => {

	const _path = useMemo(() => {

	}, [path])
}


// グローバル変数　ログファイルパス
var g_logFilePath: string = ""

// ログファイルのパス定義
export const DefineLogFilePath = (path: string) => {
	console.debug(`logfilePath:${path}`)
	g_logFilePath = path
}

// ログ出力
export const WriteLog = (comment:string | null, mode: LogMode = LogMode.i) => {

	let dateText = moment(new Date()).format('YYYY.MM.DD HH:mm:ss')
	
	// コンソールへ書き込み
	_printConsole(mode, `${dateText} ${comment}`)

	if (mode == LogMode.d) {
		// TODO: リリース時はログファイルには出力しない
	}

	// ログファイルへ書き込み
	_writeLogfile(g_logFilePath, `${dateText} [${mode}] ${comment}`, MAX_LOG_FILE_SIZE_MB)
}

const _printConsole = (mode:LogMode, text:string) => {

	switch(mode) {
		case LogMode.d:
			console.debug(text)
			break
		case LogMode.i:
			console.info(text)
			break
		case LogMode.w:
			console.warn(text)
			break
		case LogMode.e:
			console.error(text)
			break		
	}
}

const _writeLogfile = (path: string, text:string, maxsizemb: number) => {

	if (g_logFilePath.length == 0) {
		console.warn("ログファイルパスが定義されていません")
		return;
	}

	reactFs.writeFile(path, text, `utf8`).then(res => {
		// 書き込み成功		
		reactFs.stat(path).then(status => {
			if (status.size > maxsizemb * 1024) {
				console.debug(`${path} のサイズが大きいので調整 size:${status.size}`)
				// 古い行を削除するか、リネームして残すか（その場合は一定の古いファイルは消す）			
			}	
		})
	}).catch(err => {
		console.error(err)		
	});
}