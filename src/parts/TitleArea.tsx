import { StyleProp, Text, TextStyle, View } from "react-native"


export interface TitleAreaProps {
	title: string;
	style: StyleProp<TextStyle>;
}


export const TitleArea = (props: TitleAreaProps) => {
	return (
		<View>
	    	<Text style={props.style}>
				{props.title}
      		</Text>
		</View>
	)	
}
