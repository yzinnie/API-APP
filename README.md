```
  느릿느릿 🐢 초기 작업 중 🗜️
```


###  API랑 친해지기 🐈

### 1. openweathermap
##### 현재 위치의 날씨를 표시한다. 저번 프로젝트에 사용했더니 제일 익숙해서(?) 헤매지 않고 시도해 볼 수 있었다. BUT 난 여러 지역을 표시하고 싶다.. 해보자해보자... 

<img src='https://github.com/yzinnie/API-APP/assets/126447980/dc78ee19-59cb-4cbb-8ce2-a97500ccf24f' width=400px/>

#### 제공하는 아이콘을 사용했다.
```
  <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
```




### 2. kakao maps
##### 카카오지도를 띄우는 api! 다양한 예제들을 올려주셨다. 재밌어보인다!
<img src='https://github.com/yzinnie/API-APP/assets/126447980/1e09b111-d188-4efc-a9c6-787598faa6d5' width=400px/>

###### 너무 자세한 위치라 지도 확대 레벨을 좀 줄였다🙀

##### kakao-maps-sdk를 npm으로 설치하고, import 후에 사용 가능하다.
##### return문 안에 <Map/ >를 사용하고, 그 안에  <MapMarker/ > 같은 기능을 사용할 수 있다.
##### GeoLocation를 사용하거나, 정해진 위치를 사용할 수 있다. 카카오에서 올려준 코드를 참고하여 현재위치를 가져오는 코드를 사용했다.
```
 useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);
```


