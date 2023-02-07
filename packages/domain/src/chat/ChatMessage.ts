export interface ChatMessage {
    id: string;
    registrationTime: number;
    modificationTime: number;
    offset: number;
    //
    message: string;
    type: ChatMessageType;
    //
    senderId: string;
    chatRoomId: string;
}

export enum ChatMessageType {
    PlainText = 'PlainText',
    File = 'File',
    Photo = 'Photo',
    Video = 'Video',
    Voice = 'Voice'
}
