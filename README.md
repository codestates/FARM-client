## 🖋 프로젝트 소개
* LOGO

![image](https://user-images.githubusercontent.com/77093944/116818411-2181af00-aba6-11eb-920f-afa0a41edcd6.png)
* 프로젝트 컨셉
  * 농부 감성을 가미한 프로젝트 협업 툴
  * 농사게임인 스타듀밸리와 가상오피스 툴인 게더타운의 아기자기한 감성에 영감을 받아 비즈니스 협업 툴인 트렐로에 적용!
  * 프로젝트 관리 및 To-Do List 매핑 컨셉

    프로젝트 관리 | FARM
    -- | --
    프로젝트 | 농장
    팀원 | 농부
    To-Do List | 농작물 씨앗
    작업완료 List | 곳간
    * 농작물 씨앗을 각 농부들에게 분배하고 농부들이 자기 일을 끝내면 수확하기 기능으로 곳간으로 보내보세요!
  * 딱딱한 비즈니스 툴에서 벗어나 기분 좋고 효율적으로 협업해 보세유

***

## 🖋 팀 소개
### 팀 이름 : SweatGuys (열심히 땀흘리며 살아온 네 명의 남자들)
### 팀원 소개
### 류제천: Front-End, 팀장
![](https://img.shields.io/badge/%EB%A5%98%EC%A0%9C%EC%B2%9C-FRONT--END-orange?link=http://left&link=https://github.com/rjc1704?style=for-the-badge&logo=github)
* Position : Front-End
* Stack : React-Hooks, redux-persist
* Contributions :
  * Basic
    1. 팀 Task 관리
    2. 회의록 관리 및 Wiki 관리
  * Front
    1. 로그인 페이지
    2. 회원 가입 페이지
    3. FarmPage 농부 리스트 출력 기능
    4. FarmPage 농부 추가 기능

### 김영윤: Front-End
![](https://img.shields.io/badge/%EA%B9%80%EC%98%81%EC%9C%A4-FRONT--END-blue?link=http://left&link=https://github.com/youngyounkim?style=for-the-badge&logo=github)
* Position : Front-End
* Stack : React-Hooks, react-beautiful-dnd
* Contributions :
  * Front
    1. 마이 페이지
    2. FarmPage Crops 추가 기능
    3. FarmPage Seeds 추가 기능
    4. Drag & Drop

### 김대성: Back-End
![](https://img.shields.io/badge/%EA%B9%80%EB%8C%80%EC%84%B1-FULL--STACK-lightgreen?link=http://left&link=https://github.com/daeseongkim05?style=for-the-badge&logo=github)
* Position : Back-End -> Front-End
* Stack : NODE js, EXPRESS, MYSql, Sequelize, React-Hooks
* Contributions :
  * Back
    1. users 엔드포인트 구현
    2. crop 엔드포인트 구현
    3. storage 엔드포인트 구현
    4. API 문서 작성
  * Front
    1. 랜딩 페이지
    2. Farmpage Seed 삭제 기능


### 김민석: Back-End
![](https://img.shields.io/badge/%EA%B9%80%EB%AF%BC%EC%84%9D-FULL--STACK-yellow?link=http://left&link=https://github.com/vagabondms?style=for-the-badge&logo=github)
* Position : Back-End -> Front-End
* Stack : NODE js, EXPRESS, MYSql, Sequelize, React-Hooks
* Contributions :
  * Back
    1. farm 엔드포인트 구현
    2. seed 엔드포인트 구현
    3. 데이터베이스 스키마 작성
    4. AWS 배포
  * Front
    1. Farmpage Crop 이름 업데이트 기능

***
## 🖋 프로젝트 기획
## Requirements
### Bare Minimum
> 0. 랜딩 페이지 구현
* 프로젝트 컨셉 간략한 소개
* 로그인 및 회원가입 페이지로 이동할 수 있도록 버튼 구현
> 1. 로그인/로그아웃
* 일반로그인
* 로그아웃 구현
> 2. 회원가입
* 유효성검사 적용
> 3. 마이페이지
* 프로젝트 리스트 현황
* 프로젝트 생성
* 내 정보 조회
> 4. 농장/곳간페이지
* 농작물 종류(할일 카테고리) 및 씨앗(할일) 추가 / 농작물 종류명 수정 / 농작물 씨앗 삭제 : CRUD 구현
* 새 농부 초대
* Drag & Drop 구현으로 씨앗(할일)을 농부에게 할당
* 농부 To-Do List창에 있는 농작물에 마우스오버하면 "수확하기" 버튼 나오기
* "수확하기" 버튼 누르면 곳간으로 이동시키기

### Advanced
> 1. 로그인
* 소셜로그인
* 비회원로그인
> 2. 마이페이지
* 내 정보 수정(비밀번호 재설정) / 탈퇴
> 3. 농장/곳간 페이지
* Drag&Drop시 효과음 설정
* 프로젝트 세부 정보 수정 / 삭제
* 태스크(농작물)별 기한 적용 (타이머 적용)
* 프로젝트 생성한 지(농사) 몇 일차인지 표기
* 완료리스트(곳간)에 유저(농부)별 수확한 작물 리스트들 조회 기능 및 누적 개수
* 각 목표(농작물)의 세부 할일의 난이도는 농작물 개수 (1~5개)로 평가.

## Wireframe
* 로그인/회원가입 페이지 : 하나의 페이지에서 로그인과 회원가입 컴포넌트 표현
![image](https://user-images.githubusercontent.com/77093944/117180138-d3231900-ae0e-11eb-92e4-658bd40c56f8.png)

* 마이페이지 : 유저(농부)의 이름과 이메일을 확인하고 프로젝트(농장)를 생성하고 프로젝트 리스트들을 확인하는 페이지
![image](https://user-images.githubusercontent.com/77093944/117180454-272dfd80-ae0f-11eb-8917-df1c58dd3680.png)

* 농장 페이지 : 씨앗 모음소에서 각 농부에게 농작물별(카테고리) 씨앗(할일)을 할당하고, 각 농부(유저)들은 일이 끝나면 수확해서 곳간으로 보내는 페이지
![image](https://user-images.githubusercontent.com/77093944/117181302-09ad6380-ae10-11eb-8879-134aec148528.png)

## Flow Charts
![image](https://user-images.githubusercontent.com/77093944/117295019-4cbe1400-aeae-11eb-9d37-8809f74da80c.png)


### 전체
![스크린샷 2021-04-28 오후 3 33 55](https://user-images.githubusercontent.com/54937901/116357320-5523a880-a837-11eb-81e7-75b6f4fcbeed.png)
### 로그인 & 회원가입
![스크린샷 2021-04-27 오후 9 22 22](https://user-images.githubusercontent.com/77093944/116339212-fdc21000-a817-11eb-98eb-f8f46acdd1b4.png)
### 상단 네비게이션 바
![스크린샷 2021-04-27 오후 9 23 01](https://user-images.githubusercontent.com/77093944/116339215-ff8bd380-a817-11eb-82fc-48ebf8f51045.png)
### 마이페이지
![스크린샷 2021-04-27 오후 9 25 28](https://user-images.githubusercontent.com/77093944/116339219-00246a00-a818-11eb-8000-23203f55964f.png)
### 농장페이지
![스크린샷 2021-04-28 오후 3 28 19](https://user-images.githubusercontent.com/54937901/116356751-a7b09500-a836-11eb-9086-8671b4eb8a25.png)
![스크린샷 2021-04-28 오후 3 28 26](https://user-images.githubusercontent.com/54937901/116356748-a717fe80-a836-11eb-9ca6-6075494e222a.png)
![스크린샷 2021-04-28 오후 3 28 34](https://user-images.githubusercontent.com/54937901/116356745-a67f6800-a836-11eb-83e9-f8bce38295f8.png)
![스크린샷 2021-04-28 오후 3 29 06](https://user-images.githubusercontent.com/54937901/116356741-a4b5a480-a836-11eb-9300-2ead29084339.png)

## DB Schema
* users - 유저들의 데이터 (이름, 비밀번호, 패스워드)
* farms - 농장(앱 내 협업 공간) 데이터
* crops - 작물(협업 공간 내의 작업 주제) 데이터
* seeds - 씨앗(작업 주제 내부 세부 주제) 데이터
* kinds - 작물 구분을 위한 과일 아이콘 데이터

<img width="1427" alt="스크린샷 2021-05-06 오전 9 36 07" src="https://user-images.githubusercontent.com/77534023/117226098-d5a56300-ae4e-11eb-809e-6d2882b0ffc1.png">

## 🖋 프로젝트 결과물

## API 문서
* 링크 : [Farm Web API](https://farm-2.gitbook.io/farm-web-api/)
* PDF 파일 : [Farm Web API.pdf](https://github.com/codestates/FARM-client/files/6431043/Farm.Web.API.pdf)

### API 설계
* User, Farm, Crop, Seed, Storage의 다섯가지 분기로 나누어 전송
* GET, POST, PUT, DELETE 의 CRUD를 모두 구현

### API 상세

* User

|METHOD|ENDPOINT|USAGE|
|------|--------|----------|
|GET|/users/info|Get User Information|
|GET|/users/farminfo|Get User's Farm Info|
|GET|/users/signout|Log out|
|POST|/users/signin|Log In|
|POST|/users/signup|Sign Up|

* Farm

|METHOD|ENDPOINT|USAGE|
|------|--------|----------|
|GET|/farm/userinfo|Get Farm's User Info|
|POST|/farm/create|Create New Farm|
|POST|/farm/invite|Invite New Member to the Farm|

* Crop

|METHOD|ENDPOINT|USAGE|
|------|--------|----------|
|GET|/crop/info/:farmid|Get Farm's Crop List|
|POST|/crop/create|Create New Crop
|GET|/crop/kinds|Get All Kinds List
|PUT|/crop/update|Update Crop's Name

* Seed

|METHOD|ENDPOINT|USAGE|
|------|--------|----------|
|GET|/seed/info/:farmid|Get User's Seed List
|POST|/seed/create|Create New Seed
|POST|/seed/assign|Assign Seed
|POST|/seed/harvest|Harvest Seed
|DELETE|/seed/delete|Delete Seed

* Storage

|METHOD|ENDPOINT|USAGE|
|------|--------|----------|
|GET|/storage/info|Get Storage's Seed List

## Final App View
### 랜딩 페이지
![랜딩페이지](https://user-images.githubusercontent.com/77534023/117255144-42872000-ae84-11eb-8c21-acfd8a4c93c7.gif)
### 로그인&회원가입
![로그인 회원가입](https://user-images.githubusercontent.com/77534023/117255156-49ae2e00-ae84-11eb-8f76-7ba2eb9ad5f0.gif)
### 마이페이지
![마이페이지](https://user-images.githubusercontent.com/77534023/117255158-49ae2e00-ae84-11eb-8efd-442cfe74fdf6.gif)
### 농장 - 작물 추가 및 씨앗 추가
![팜페이지](https://user-images.githubusercontent.com/77534023/117255161-4adf5b00-ae84-11eb-9b40-3d1a091cdd8e.gif)
### 곳간
![곳간](https://user-images.githubusercontent.com/77534023/117255166-4b77f180-ae84-11eb-9740-ca4f33c2a32a.gif)

## 배포 Link
https://farmworks.site
***
