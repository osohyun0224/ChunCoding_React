import Button from '../components/Button';
import Container from '../components/Container';
import Lined from '../components/Lined';
import styles from './HomePage.module.css';
import landingImg from '../assets/hallym.svg';

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <Lined>그대가 코딩에 관심이 있는 춘천시민이라면,</Lined>
            <br />
            <strong>춘코딩</strong>
          </h1>
          <p className={styles.description}>
            5천명의 춘천시민들이 선택한 춘천시 코딩 정보 웹사이트, 우리는 춘코딩입니다!
            <br />
            지금 함께 춘코딩과 코딩 공부 시작해보실래요?
          </p>
          <div>
            <Button>지금 시작하기</Button>
          </div>
        </div>
        <div className={styles.figure}>
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
