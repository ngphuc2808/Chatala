import styled from 'styled-components';
import tw from 'twin.macro';
import { VscHubot } from 'react-icons/vsc';

export const ChatAvatarWrapper = styled.div`
  ${tw`relative`}
`;

export const ChatAvatar = styled.figure`
  ${tw`relative w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0`}
  border: 1px solid gray;
`;

export const ChatStatus = styled.span<{ status: number }>`
  ${tw`absolute w-[13px] h-[13px] rounded-full right-[1px] bottom-[1px]`}
  ${({ status }) => (status === 1 ? tw`bg-green-400` : tw`bg-gray-400`)}
  border: 1px solid white;
`;

export const ChatBotAvatar = styled(VscHubot)`
  ${tw`text-black text-[55px]`}
`;

export const Content = styled.div`
  ${tw`flex-grow ml-3.5 overflow-hidden`}
`;

export const Name = styled.div`
  ${tw`font-semibold text-black text-[16px] text-left`}
`;

export const Msg = styled.div`
  ${tw`text-[14px] w-full text-left overflow-hidden whitespace-nowrap`}
  text-overflow: ellipsis;
`;

export const Wrapper = styled.div`
  ${tw`flex px-3 py-2.5 items-center relative w-full`}
`;

export const ChatPreviewItem = styled.div<{ active?: boolean; Id?: number }>`
  ${tw`flex items-center relative hover:cursor-pointer hover:bg-dark rounded-[20px]`}
  ${({ active }) => active && tw`bg-darker`}
  ${({ Id }) => (Id !== -2 ? tw`my-1` : tw`bg-dark`)}
`;
