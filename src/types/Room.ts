import { UserType } from './User';

export interface Room {
  room: string;
  Receiver: UserType;
  content: string;
  createdAt: Date;
}
