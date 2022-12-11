import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import CourseItem from '../components/CourseItem';
import { getCourses } from '../api';
import styles from './CourseListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function CourseListPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const courses = getCourses(initKeyword);

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam(keyword ? { keyword } : {});
  };

  return (
    <ListPage
      variant="catalog"
      title="수업강좌"
      description="춘천에서 배울 수 있는 오프라인수업과 이 웹의 개발자가 직접 수강했던 코딩강좌를 알려드립니다! 내가 듣고 싶은 강좌가 있는지 살펴볼까요?? "
    >
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색으로 강좌 찾기"
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {courses.length}개 강좌</p>

      {initKeyword && courses.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 강좌가 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.courseList}>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
