export type messageSendType = {
  roomId: string;
  senderId: string;
  msg: string;
  files: File[];
  unSend: boolean;
};

export type messageType = {
  roomId: string;
  fromSender: boolean;
  msg: string;
  files: { name: string; url: string; type: string }[];
  unSend: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type roomInfo = {
  roomName: string;
  roomAvatar: string;
  roomInfo: {
    createdAt: string;
    groupName: string;
    isGroup: boolean;
    lastMsg: string;
    updatedAt: string;
    users: RoomUser[];
    __v: number;
    _id: string;
  };
};

export type RoomUser = {
  avatar: string;
  nickName: string;
  role: boolean;
  uid: string;
  _id: string;
};

export type registerType = {
  name: string;
  phoneNumber: string;
  password: string;
};

export type FormValue = {
  name: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  phomeNumberCode: string;
};

export type FormValueLogin = {
  phoneNumber: string;
  password: string;
};


export type UserRegister = {
  name: string;
  phone: string;
  password: string;
};

export type UserLogin = {
  phone: string;
  password: string;
};