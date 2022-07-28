import styled from 'styled-components';
import OutLink from '../../assets/icons/external_link.svg';
import Github from '../../assets/icons/github.svg';
import type { TypeToyProject } from '@src/types/types';
import { useIsMobile } from '@src/hook/useIsMobile';
import Image from 'next/image';

const ImageCard = ({ title, language, description, image, github, homepage }: TypeToyProject) => {
  const isMobile = useIsMobile();
  return (
    <Container isMobile={isMobile}>
      <div className="inner">
        <div className="imageWrapper">
          <Image
            className="projectImage"
            width={200}
            height={100}
            layout="responsive"
            objectFit="cover"
            src={`/site/${image}.png`}
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="cardTitleWrapper">
          <h3 className="cardTitle">{title}</h3>
        </div>
        <p className="cardDesc">{description}</p>
        <div className="cardBottom">
          <div className="lang">
            <ul>
              {language.map((lang, index) => {
                return <li key={index}>{lang}</li>;
              })}
            </ul>
          </div>
          <div className="link">
            {homepage && (
              <a target="_blank" rel="noopener noreferrer" href={homepage} className="outlink">
                <OutLink width={24} height={24} />
              </a>
            )}
            {github && (
              <a target="_blank" rel="noopener noreferrer" href={github}>
                <Github />
              </a>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageCard;

const Container = styled.li<{ isMobile: boolean }>`
  width: 100%;
  margin: 8px auto;

  .inner {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    padding: ${({ isMobile }) => (isMobile ? '1rem 1rem' : '2rem 1.75rem')};
    border: 1px solid var(--main);
    border-radius: 0.75rem;
    background-color: #ffffff;
  }

  .imageWrapper {
    margin-bottom: 16px;
  }

  .projectImage {
    border-radius: 10px;
  }

  .cardTitleWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cardTitle {
    color: var(--main);
    font-size: 20px;
    margin-bottom: 4px;
    font-weight: bold;
  }

  .cardDesc {
    color: var(--main2);
    font-size: 14px;
    margin-bottom: 8px;
  }

  .lang {
    margin-top: 16px;
  }

  .lang ul {
    display: flex;
    flex-wrap: wrap;
  }

  .lang li {
    color: var(--gray);
    font-size: 12px;
    margin-right: 15px;
  }

  .link {
    text-align: ${({ isMobile }) => (isMobile ? 'center' : 'inherit')};
    margin-top: ${({ isMobile }) => (isMobile ? '10px' : 0)};
  }

  .cardBottom {
    display: ${({ isMobile }) => (isMobile ? 'block' : 'flex')};
    align-items: center;
    justify-content: space-between;
  }

  .outlink {
    margin-right: 16px;
  }

  svg {
    &:hover {
      fill: var(--main);
    }
  }
`;
