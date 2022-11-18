import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineX, HiPencil } from 'react-icons/hi';
import { UserAvatar, UserName } from '../../../../utils/dataConfig';

import * as S from './UserInfo.styled';
import SettingInfo from '../SettingInfo';
import { formatDate } from '../../../Global/ProcessFunctions';

interface IUserInfo {
  phoneNumber: string;
  avatar: string;
  banner: string;
  name: string;
  gender: string;
  dob: string;
  setUserInfoModal: (userInfo: boolean) => void;
}

const UserInfo = ({
  phoneNumber,
  avatar,
  banner,
  name,
  gender,
  dob,
  setUserInfoModal,
}: IUserInfo) => {
  const [editInfo, setEditInfo] = useState(false);
  const [seeAvatar, setSeeAvatar] = useState(false);
  return (
    <>
      {seeAvatar && (
        <S.ModalAvatar>
          <S.ModalOverlay onClick={() => setSeeAvatar(false)} />
          <S.ModalAvatarBody>
            <S.Figure>
              <Image src={UserAvatar} layout='fill' objectFit='contain' />
            </S.Figure>
          </S.ModalAvatarBody>
        </S.ModalAvatar>
      )}
      <S.Modal>
        <S.ModalOverlay onClick={() => setUserInfoModal(false)} />
        <S.ModalBody>
          <S.Header>
            <S.Title>
              Account information
              <HiOutlineX onClick={() => setUserInfoModal(false)} />
            </S.Title>
            <S.Banner>
              <Image src={avatar} layout='fill' objectFit='cover' />
            </S.Banner>
            <S.Avatar onClick={() => setSeeAvatar(true)}>
              <Image src={banner} layout='fill' objectFit='contain' />
            </S.Avatar>
          </S.Header>
          <S.Content>
            <S.Description>
              <span>Phone</span>
              <span>Fullname</span>
              <span>Gender</span>
              <span>Date of Birth</span>
            </S.Description>
            <S.Info>
              <span>{phoneNumber}</span>
              <span>{name}</span>
              <span>{gender}</span>
              <span>{formatDate(dob)}</span>
            </S.Info>
          </S.Content>
          <S.Button>
            <HiPencil />
            <span onClick={() => setEditInfo(true)}>Update information</span>
          </S.Button>
          {editInfo && (
            <SettingInfo
              name={name}
              gender={gender}
              dob={dob}
              avatar={avatar}
              setEditInfo={setEditInfo}
            />
          )}
        </S.ModalBody>
      </S.Modal>
    </>
  );
};

export default UserInfo;
