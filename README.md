<img alt="Youtube" src="https://img.shields.io/badge/YouTube Clone%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>

# Youtube Clone Use React.js

_Youtube API를 활용 (비디오 리스트, 검색, 채널 정보, 리스트 재출력, 키워드)_

Demo Link ⇒ https://inusneo.github.io/React-youtube/

---

## 📋 목차

1. [목표](#1-)
2. [기술 스택](#2-기술-스택)
3. [About Project](#4-About-Project)
4. [아키텍쳐](#5-아키텍쳐)
5. [프로젝트를 통해 배운 점](#6-프로젝트를-통해-배운-점)
6. [개선할 점](#7-개선할-점)

## 1. 목표

- SPA 목적에 맞는 심플한 사이트 만들기
- React.js 활용 능력 향상
- API 활용 능력 향상

## 2. 기술 스택

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" /> <img src="https://img.shields.io/badge/PostCSS-eeeeee?style=for-the-badge&logo=postcss&logoColor=red"/>

## 3. About Project

### 🪐 메인 페이지

![main]

- Youtube Api(video, channel)를 활용하여 가장 인기 있는 동영상의 썸네일, 채널(채널 이름, 썸네일, 조회수 등), 제목 등을 표시합니다.

### 🔎 검색 기능

![image]()

- Youtube API를 사용하여 목록에 있는 동영상을 검색창에 입력한 키워드에 알맞는 동영상으로 변경하여 표시합니다.

### 🩻 상세 페이지

![image]()

- 클릭한 콘텐츠의 비디오 플레이어, 상세 설명 등을 보여주는 비디오 상세 페이지 입니다.

### 🎩 핫 키워드 리스트 출력 / 돌아가기 기능

- 인기, 실시간, 음악 등 미리 정의해 놓은 키워드 리스트를 보여줍니다.
- 로고를  클릭하면 처음에 출력했던 동영상 리스트를 다시 보여줍니다.

## 4. 아키텍쳐

<img width="239" alt="youtube_folder" src="https://user-images.githubusercontent.com/77533627/202387577-bcf6e9bd-3e27-4cc8-a9c7-9fb3240b7bab.png">

    1. Component 구성
        - Header(로고, 검색 기능)
        - video_list(비디오 목록의 틀)
        - video_item(비디오에 관한 썸네일, 채널 정보 등을 보여줌)
        - video_detail(비디오를 선택 했을 때 상세 내용을 보여줌)

    2. Service 구성
        - youtube.js(유튜브 API를 활용하는 js 파일로 Most Popular, search, channel, Live Video)
        - .env를 활용하여 API_KEY 보호

    3. 메인 페이지 구성
        - useEffect()를 활용하여 처음 페이지가 렌더링 될 때 가장 인기있는 비디오 목록
          리스트를 가져옵니다.
        - useState()를 활용하여 Youtube Api로 부터 받아온 메타 데이터를 저장하고 해당
          데이터를 video_list, video_item 컴포넌트로 전달합니다.

    4. 검색 기능 구성
        - 검색 창(input)에 원하는 키워드(Text)를 입력한 후, 검색 or Enter를 누르면 App 컴포넌트에 있는
          state가 변경되어 다시 비디오 목록을 렌더링 합니다.

    5. 비디오 상세 페이지 구성
        - 비디오를 클릭하게 되면 비디오 마다 가지고 있는 고유한 uuid를 활용하여 해당 비디오에
          맞는 state로 변경합니다.
        - state를 통해 iframe, 상세 설명 등을 보여줍니다.

## 5. 프로젝트를 통해 배운 점

    - state와 props의 개념과 활용 방법
    - React Hook를 활용하는 방법
    - Post Css를 활용하는 방법
    - Postman을 활용하여 API를 쉽게 사용하는 방법
    - Axios를 활용하는 방법
    - Youtube API의 다양한 활용 방법

## 6. 개선할 점

    - 추후 스켈레톤 UI적용하여 사용자가 로딩중인것을 인지할 수 있도록 개선
