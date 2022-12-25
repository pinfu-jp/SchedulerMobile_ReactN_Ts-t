import * as reactFs from 'react-native-fs';

// ドキュメントディレクトリを取得
export const GetDocumentDirPath = () => {
	return  reactFs.DocumentDirectoryPath;
}