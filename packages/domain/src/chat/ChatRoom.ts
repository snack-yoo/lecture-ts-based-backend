export interface ChatRoom {
    id: string;
    title: string;
    type: ChatRoomType;
    offset: number;
}

export enum ChatRoomType {
    Self= 'Self',
    Direct= 'Direct',
    Group= 'Group',
}

