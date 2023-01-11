import { useMemo } from "react"
import { StyleProp, TextStyle } from "react-native"
import { ScheduleData } from "../../data/ScheduleData"
import { InputDateArea } from "../../parts/InputDateArea"
import { InputTextArea } from "../../parts/InputTextArea"


export const useScheDateArea = (scheData:ScheduleData, style: StyleProp<TextStyle>) => {

	const didEndDate = (date: Date) => {
		scheData.date = date
	}

	const inputArea = useMemo(() => {
		return (
			<InputDateArea
				title={"日付"} 
				date={scheData.date}
				style={style} 
				onEnd={didEndDate}
			/>
		)
	}, [scheData.date])

	return {inputArea}
}

export const useScheCommentArea = (scheData:ScheduleData, style:StyleProp<TextStyle>) => {

	const didEndComment = (text:string) => {
		scheData.comment = text
	}

	const inputArea = useMemo(() => {
		return (
			<InputTextArea 
				title={"内容"}
				text={scheData.comment} 
				style={style} 
				onEnd={didEndComment}
			/>
		)		
	}, [scheData.comment])

	return {inputArea}
}