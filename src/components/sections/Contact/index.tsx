import styled from 'styled-components';
import Section from '..';
import Button from '@src/components/Button';

const Contact = () => {
  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      alert('복사되었습니다.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Section title="Contact Me" id="contact">
      <InnerWrapper>
        <p>더 궁금하신 것이 있으신가요?</p>
        <p>아래 메일로 연락주세요.</p>
        <div className="buttonWrapper">
          <Button label="EMAIL" onClick={() => handleCopyEmail('uhgenie7@gmail.com')} />
        </div>
      </InnerWrapper>
    </Section>
  );
};

export default Contact;

const InnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .buttonWrapper {
    margin-top: 16px;
  }
`;
