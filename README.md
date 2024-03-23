
<div align="center">
<h4>산 check 하러 가자 ! </h4> 

<img src="https://github.com/yzinnie/SAN-CHECK/assets/126447980/dd4fcec2-00e5-4a01-bc2f-e8b8e50cc8eb" width="200" />
</div>

<h4>배포 주소</h4>
https://san-check.web.app/

<br>

<h2> 🐈 프로젝트 소개</h2>
<h5>산책 만족도를 위해 항상 체크하는 것들을 한 번에 할 수 있어요!</h5>

<h5>지금의 날씨와 미세먼지는 어떤지 확인하고, 오늘의 산책 코스를 미리 정하고 나가볼까요?</h5>
<h5>다른 견주들이 올려준 정보 공유성 블로그 글을 확인할 수 있어요! 👀</h5>
<h5>챙겨야 하는 산책 준비물이나, 나가서 사와야 하는 간식 등등.. 뭐든지 적을 수 있는 체크리스트까지 🐾 </h5>
<br>
<h2> 😺 화면 구성</h2>

| 시작 페이지 | 메인 페이지 | 정보 글 페이지 | 체크리스트 |
| --- | --- | --- | --- |
| <img src="https://github.com/yzinnie/SAN-CHECK/assets/126447980/74137ea0-696b-4059-bb2e-dd9251bfc343" width="500" /> | <img src="https://github.com/yzinnie/SAN-CHECK/assets/126447980/dcd7dfaa-5daa-433e-aa9b-04f3f26c1c02" width="500" /> |  <img src="https://github.com/yzinnie/SAN-CHECK/assets/126447980/4cc083d3-4c06-46eb-8096-c86bfead2542" width="500" /> | ![image](https://github.com/yzinnie/SAN-CHECK/assets/126447980/4f178b00-475e-4e16-b9a7-c1b3bf7bf8c5) |
<br>

<h2> API </h2>

 #### openweathermap
- https://openweathermap.org/api
- 현재 위치의 날씨
- 날씨 아이콘 사용

#### kakao
- https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide
- https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-district
- ✳ REST API 
- 행정구역 정보 (좌표변환)
- 블로그 글 검색기능 
- ✳ MAP API 
- 현재 위치
- MAP component
- 깃발 아이콘 사용

#### 한국환경공단 (미세먼지)
- https://www.data.go.kr/index.do
- 현재 위치의 미세먼지 정보
<br>
 <h2> 🐶 Stacks </h2>
 
 #### Environment
 <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
 
 #### Config
 <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
 
 #### Development
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  
####  Library
 <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> 
 
#### Test & deploy
   <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"> 

---

<h4>Getting started</h4>

```
npm install
npm start
```

---
<h4>deploy error</h4>

- [ ] API - CORS ERROR
- 네이버 API 사용시 발생하는 에러
- CORS ? Cross-Origin Resource Sharing - 다른 출처 (protocol, host, port번호가 다른 경우) 오류 발생
- 프론트에서 해결하기 - 라이브러리 사용 (http-proxy-middleware) 또는 json 파일에 proxy 설정 <-- 모두 개발환경에서만 정상작동
- 배포 환경에서 에러 해결 실패
- 결론은 다른 API를 사용했음

- [x] Mixed Content
-  배포된 https에 암호화 되지 않은 http사이트(미먼API)에서 요청을 보냄
- URL을 수정하면서 해결 완료
- 배포 에러 해결

##### error note <br/> https://www.notion.so/yyjh222/SAN-CHECK-7f7bf17ec21641469f3942ad3ee4b576
