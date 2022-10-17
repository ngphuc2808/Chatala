import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`overflow-y-scroll mt-2.5 pr-1`}

  &::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded-[10px]`}
  }

  &::-webkit-scrollbar {
    ${tw`w-[5px]`}
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-light rounded-[50px]`}
  }
`