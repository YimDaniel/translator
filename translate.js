/* TEK version 1.1.0 */

let arr_alphabet = new Array(26); // 알파벳 배열
let hangul = 'ㅐ,ㅂ,ㅋ,ㄷ,ㅔ,ㅍ,ㄱ,ㅎ,ㅣ,ㅈ,ㅋ,ㄹ,ㅁ,ㄴ,ㅏ,ㅍ,ㅋ,ㄹ,ㅆ,ㅌ,ㅓ,ㅂ,ㅜ,ㅋㅅ,ㅏㅣ,ㅈ';
let arr_korean = hangul.split(','); // 한글 배열
let arr_output = new Array(); // 출력값 배열
let before = document.querySelector('#before'); // 1번째 area
let after = document.querySelector('#after'); // 2번째 area

// 아스키코드 이용해서 알파벳 배열 만들기
for(let i = 0; i < arr_alphabet.length; i++) {
  arr_alphabet[i] = String.fromCharCode(i+97);
}
// Translate 버튼 누르면 실행되는 함수(번역 기능)
function translator() {
  let areaValue = document.querySelector('#before').value // 왼쪽 Area값
  if(areaValue) {
    let arr_areaValue = areaValue.split(/| |\n/); // 왼쪽 값을 배열에 넣기
    console.log (arr_areaValue);
    let result = ''; // 결과 값(string)
    /* 왼쪽 값(arr_areaValue)과 알파벳 배열(arr_alphabet)을 비교 후 같다면,
      인덱스를 활용해서 알파벳배열인덱스와 같은 인덱스의 한글배열(arr_korean)값을
      출력값 배열(arr_output)에 넣는 반복문 */
    for(let i = 0; i < arr_areaValue.length; i++) {
      for (let j = 0; j < arr_alphabet.length; j++) {
        if(arr_areaValue[i] == " ") {
          arr_output[i] = " ";
        } else if(arr_areaValue[i] == "\n") {
          arr_output[i] = "\n";
        } else if (arr_areaValue[i] == arr_alphabet[j]) {
          arr_output[i] = arr_korean[j];
        } else {
          after.value = 'ERROR';
        }
       }
    }
    // 출력값 배열의 값들을 result라는 변수에 넣어주기.(,를 없애기 위함.)
    for(k = 0; k < arr_output.length; k++) {
      if(arr_output[k] == " ") {
        result += arr_output[k]
      } else if(arr_output[k] == "\n") {
        result += arr_output[k]
      } else {
        result += arr_output[k].toString().replace(',', '');
      }
    }
    // 오른쪽 Area에 번역한 결과값 출력하기.
    after.value = result;
    // 출력값 배열 초기화.(안하면 이전 값보다 길이가 작을 경우 뒤에 값 반복 출력)
    arr_output = [];
  } else {
    /* areaValue가 없이 Translate버튼을 누를 경우
      error문구 띄워주기. */
    after.value = 'EMPTY LEFT AREA';
  }
}

// Clear 버튼 누르면 양쪽 Area를 비워주는 함수
function clear_area() {
  before.value = '';
  after.value = '';
}