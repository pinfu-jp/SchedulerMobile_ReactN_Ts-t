import { StyleProp, Text, TextStyle, View } from "react-native"


export interface TitleAreaProps {
	title: string;
	style: StyleProp<TextStyle>;
}


export const TitleArea = (props: any) => {
	return (
		<View>
	    	<Text style={props.style}>
				{props.title}
      		</Text>
		</View>
	)	
}
