import type { TypeProjectDetail } from '@src/types/types';
import { useIsMobile } from '@src/hook/useIsMobile';
import styled from 'styled-components';

const DetailList = ({ work, result, performance }: TypeProjectDetail) => {
  const isMobile = useIsMobile();
  return (
    <Container isMobile={isMobile}>
      <div className="contentWrapper">
        <h3 className="title">작업 내용</h3>
        <p className="contentItem">{work}</p>
      </div>
      {result && (
        <div className="contentWrapper">
          <h4 className="title">결과</h4>
          <ul className="content">
            {result.map((resultItem, index) => (
              <li className="contentItem" key={index}>
                {resultItem}
              </li>
            ))}
          </ul>
        </div>
      )}
      {performance && (
        <div className="contentWrapper">
          <h4 className="title">성과 🎊</h4>
          <ul className="content">
            {performance.map((performanceItem, index) => (
              <li className="contentItem" key={index}>
                {performanceItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default DetailList;

const Container = styled.div<{ isMobile: boolean }>`
  margin: 1rem 0;
  .title {
    font-size: 1.3em;
    margin: 0.3em 0;
  }
  .content {
    margin-bottom: 1.5rem;
  }

  .contentWrapper {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .contentItem {
    padding: 4px 0;
    margin-left: 8px;
  }
`;
