import styled from 'styled-components';
import AppLayout from '@src/components/AppLayout';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <AppLayout>
      <NotFoundPageStyle>
        <h1>404</h1>
        <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
        <p>
          방문하시려는 페이지의 주소가 잘못 입력되었거나 페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수
          없습니다. 입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </p>
        <Link href={'/'}>
          <a className="homeButton">GO TO HOME</a>
        </Link>
      </NotFoundPageStyle>
    </AppLayout>
  );
};

export default NotFoundPage;

const NotFoundPageStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--main);
    font-size: clamp(25px, 6vw, 50px);
    margin-bottom: 2rem;
  }

  h2 {
    font-size: clamp(15px, 2vw, 20px);
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    margin-bottom: 1rem;
  }

  .homeButton {
    color: var(--main);
    font-size: clamp(15px, 2vw, 20px);
  }
`;
