import logo from '../assets/chuncodinglogo.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import styles from './Footer.module.css';
import Container from './Container';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.links}>
          <li>춘코딩 소개</li>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
        </ul>
        <ul className={styles.info}>
          <li>(주)춘코딩</li>
          <li>대표 | 오소현 </li>
          <li>개인정보보호책임자 | 오소현 </li>
          <li>대표 번호 | 010-6775-6976 </li>
          <li>주소 | 서울특별시 성동구 왕십리로 241 서울숲더샵 103동 23??호 </li>
        </ul>
        <div className={styles.icons}>
          <img src={logo} alt="codethat" />
          <div className={styles.sns}>
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
