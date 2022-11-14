import ChatArea from '../src/components/Home/ChatArea';
import * as S from '../src/components/Home/Home.styled';
import SideBar from '../src/components/Home/SideBar';
import TopBar from '../src/components/Home/TopBar';
import Welcome from '../src/components/Home/Welcome';
import { useGlobalContext } from '../src/contexts/globalContext';
import { useRouter, withRouter } from "next/router";
import { useEffect } from "react";
import { RoomApi } from '../src/services/api/room';

const Home = () => {
  const context = useGlobalContext();

  const getRoomData = async () => {
    try {
      const rooms = await RoomApi.getRoomList();
      context.setRoomList(rooms.result)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRoomData();
  }, []);

  return (
    <>
      <S.HomeContainer>
        <TopBar />
        <S.Wrapper>
          <SideBar />
          {context.roomChoosen ? <ChatArea /> : <Welcome />}
        </S.Wrapper>
      </S.HomeContainer>
    </>
  );
};

export default withRouter(Home);
