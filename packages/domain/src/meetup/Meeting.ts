export interface Meeting {
    id: string,
    status: MeetingStatus,
    time: number,
    duration: number,
    title: string,
    isOnline: boolean;
    place: string;
}

export enum MeetingStatus {
    Planned = 'Planned',
    InProgress = 'InProgress',
    Done = 'Done',
    Canceled = 'Canceled',
}