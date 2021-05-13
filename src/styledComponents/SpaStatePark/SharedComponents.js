import styled from "styled-components";

const ListContainer = styled.div`
  border-left: 1px solid #680727;
  padding-left: 20px;
  @media screen and (max-width: 1020px) {
    margin: 0 auto;
    width: 95%;
  }
`;

const ListHeader = styled.h4`
  text-transform: uppercase;
  font-size: 1.6rem;
  color: #5e3743;
  letter-spacing: 1px;
  margin: 0;
  margin-top: 32px;
  margin-bottom: 23px;
  padding: 0;
`;

const ListSubHeader = styled.p`
  font-size: 1.4rem;
  color: #333;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #333;
`;

const Item = styled.li`
  display: flex;
`;

const ItemText = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const LastItemText = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Arrow = styled.i`
  display: inline-block;
  border: solid black;
  border-width: 0 3px 3px 0;
  padding: 3px;
  transform: rotate(-45deg);
  margin-right: 20px;
`;

export default {
  ListContainer,
  ListHeader,
  ListSubHeader,
  List,
  Item,
  ItemText,
  Arrow,
  LastItemText,
};
