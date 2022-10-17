import Image from 'next/image';
import * as S from './ChatPreviewItem.styled';
import { VscHubot } from 'react-icons/vsc';

interface IChatPreviewItem {
  avatar?: string;
  bgColor?: string;
  msg: string;
  name?: string;
  id: number;
  setSelected: (id: number) => void;
  onClick: () => void;
}

const ChatPreviewItem = ({
  avatar,
  msg,
  name = 'Chat Bot',
  bgColor,
  id,
  setSelected,
  onClick,
}: IChatPreviewItem) => {
  return (
    <S.ChatPreviewItem bgColor={bgColor} Id={id} onClick={onClick}>
      <S.Wrapper onClick={() => setSelected(id)}>
        {avatar ? (
          <S.ChatAvatar>
            <Image
              src={avatar}
              alt='avatar'
              layout='fill'
              objectFit='contain'
            />
          </S.ChatAvatar>
        ) : (
          <VscHubot size={55} />
        )}
        <S.Content>
          <S.Name>{name}</S.Name>
          <S.Msg>{msg}</S.Msg>
        </S.Content>
      </S.Wrapper>
    </S.ChatPreviewItem>
  );
};

export default ChatPreviewItem;
