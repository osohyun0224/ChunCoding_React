# REACT_ChunCoding_오픈소스개발도구와활용_기말프로젝트
"시민들을 위한 무료 코딩 수업을 한눈에 확인하는 웹사이트, 우리는 춘코딩입니다."

### 1. 프로젝트 개요
코딩의 중요성은 날이 갈수록 강조된다. 지난 2018년부터 2015 개정 교육과정에 따라 엔트리가 교육용 코딩 언어로 채택되어, 전국의 초·중학교 학생들을 대상으로 한 
소프트웨어 교육을 시작했다. 이처럼 소프트웨어 교육은 이제 의무화가 된 세상이다. 또한 요즘 모든 시대가 모바일 및 웹서비스로 삶의 모든 것을 함께하는 시대가 되어 모든 분야에 소프트웨어가 필수고, 개발자의 필요성도 날이 갈수록 증가하는 추세이다. 이처럼 세상은 소프트웨어에 주목했고, 사람들의 소프트웨어 교육 수요도 증가하고 있다. 사설 코딩 교육 플랫폼들처럼 지역 코딩 교육수업들을 한 웹사이트에서 확인이 가능하고 그 자리에서 수강신청까지 할 수 있다면, 그만큼 진입 장벽이 낮아 많은 수강생
이 유입될 것이다. 따라서 지역 시민들의 정보화 교육 수준이 높아질 것이라고 기대한다. 이에 따라 본 보고서에는 웹사이트를 활용하여 춘천시에서 진행되는 모든 정보화 교육에 대한 수업정보를 제공하고 원하는 수업을 자신의 위시리스트에 담아 수강신청까지 할 수 있게 하며 웹사이트 유저들과 커뮤니티 게시판 활성화를 통해 원하는 
정보를 서로 주고받을 수 있게 하는 웹사이트를 REACT 라이브러리를 이용해 제작하였다.

### 2. 개발 목적
춘천시의 코딩 교육 수업 현황을 알아보니 지역 시민을 위한 좋은 수업들이 많았지
만 시민들이 어떻게 신청을 하는지, 그리고 해당 수업이 있는지를 잘 모르시는 시민 
분들이 많았다. 이러한 문제를 해소하고 더 많은 춘천 시민들이 편리하게 코딩 교육
을 받게 해드리고 싶어 해당 프로젝트를 기획하게 되었다. 따라서 우리가 본 보고서에 제작한 시스템은 춘천시 코딩교육의 모든 정보를 제공
할 뿐만 아니라, 원하는 강좌 자신의 위시리스트에 담기, 유저들과의 커뮤니티 게시판 
활성화를 통해 원하는 정보를 서로 주고받을 수 있는 웹사이트를 개발하고자한다.

### 3. 웹사이트 구성 화면
#### (1) 홈 화면
웹사이트 첫 화면이다.

![image](https://user-images.githubusercontent.com/53892427/230782972-a6af9aeb-e401-4279-80a3-f75ef9f7a43d.png)

#### (2) 수업 강좌 화면
웹사이트 사용자가 춘천시에서 운영되는 모든 정보화 교육 강좌를 한 사이트에서 정보를 얻을 수 있도록 구현하였다.

![image](https://user-images.githubusercontent.com/53892427/230782989-fdf1309f-fd49-40c3-9f7b-2f3e7565cb63.png)

수업강좌 화면에 검색 기능을 추가하여 사용자들이 자신이 원하는 과목을 직접 검색하여 많은 수강 정보들 사이에서 찾아낼 수 있도록 구현하였다.

![image](https://user-images.githubusercontent.com/53892427/230783133-23dc038d-8b58-4a0b-a7ad-dfac07efe61e.png)

#### (3) 자세한 강좌 정보 안내 화면
원하는 강좌를 찾아(예시-리액트) 들어온 화면이다. 수강 강좌에 대한 정보가 적혀 있으며, 개발자의 해당 강의에 대한 평도 함께 볼 수 있다. 가운데의 [+수업 담기] 버튼을 누르면, 사용자의 위시리스트에 해당 강의가 
담기도록 한다.

![image](https://user-images.githubusercontent.com/53892427/230783171-39fb4cb3-1ab7-4ee8-986f-d61844c8ff39.png)

#### (4) 위시 리스트 화면
 자신의 위시리스트에 담긴 강좌들을 확인 할 수 있다. 사용자들은 강의 내용을 확
인하면서 수업을 담으면 자신의 위시리스트로 해당 강좌가 이동해 자동으로 수강신
청이 가능하게끔 구현을 한 것이다. 

![image](https://user-images.githubusercontent.com/53892427/230783187-027daa60-d4e0-4363-80fc-b785969c1ee9.png)


#### (5) 커뮤니티
 창 중간에는 커뮤니티의 간단한 개발자의 
소개와, 검색으로 질문을 찾을 수 있도록 검색 기능을 넣었고, 아래에는 사용자들의 
질문들이 질문의 제목과 사용자들의 개인 프로필 사진이 박스로 보이게끔 구현하였
다. 질문이 생성될수록 검색 창 아래에 “총 N개의 질문”에서 N의 숫자가 질문글 개
수의 맞춰서 보이도록 구현하였다.

![image](https://user-images.githubusercontent.com/53892427/230783219-ddcbbc02-d712-4753-892a-d06a0b1a1994.png)

질문의 
키워드를 입력하고 검색하면 그림처럼 해당 키워드가 들어간 질문들이 검색되어서 
사용자가 원하는 정보를 다른 유저들의 답변을 기다리지 않고도 알 수 있도록 
구현하였다.

![image](https://user-images.githubusercontent.com/53892427/230783231-95911ac0-b4ae-458b-930a-5cb7b2aabcfe.png)

궁금한 
질문 박스를 클릭해 들어가면 질문의 제목과 내용을 확인할 수 있고, 사용자 정보도 
우측에서 확인 할 수 있다. 

![image](https://user-images.githubusercontent.com/53892427/230783237-d25f84ae-fc13-4326-b150-7adc66d73da6.png)


#### (6) 개발자 정보 안내
![image](https://user-images.githubusercontent.com/53892427/230783278-a538096d-b2d6-45bf-bac2-aec21e918698.png)

### 4. 프로그램 구조도 설명
![image](https://user-images.githubusercontent.com/53892427/230783312-9da6ba49-2850-4ad1-aaf9-77db7533236b.png)
![image](https://user-images.githubusercontent.com/53892427/230783328-ff68b5e9-5a7a-49bb-9340-336871dafdf5.png)


### 5. 개발 일정표
![image](https://user-images.githubusercontent.com/53892427/230783382-14fddf84-4368-4d97-b636-a08c8fa2e47c.png)






