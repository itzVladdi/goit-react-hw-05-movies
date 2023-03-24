import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  min-width: 100%;
  min-height: 450px;
  overflow-x: auto;
  background-color: #e47d5520;
`;
export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 200px;
  max-height: 410px;
  background-color: #f8ded4;
  border-radius: 6px;
`;
export const PhotoWrapper = styled.div`
  width: 100%;
`;
export const ActorName = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;
export const CharacterName = styled.p`
  text-align: center;
  padding: 0;
  margin: 0;
  font-weight: 500;
`;
