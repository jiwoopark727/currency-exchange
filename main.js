// 남은 작업들 
// 환율 정보 api로 가져와서 해보기
// 숫자 4자리식 끊어서 읽어주기

//환율 정보들
let currencyRatio = {
  미국USD:{
    미국USD:1,
    한국KRW:1373.86,
    베트남VND:25219.50,
    유럽EUR:0.92,
    일본JPY:146.60,
    unit:"달러"
  },
  한국KRW:{
    한국KRW:1,
    미국USD:0.00073,
    베트남VND:18.36,
    유럽EUR:0.00067,
    일본JPY:0.11,
    unit:"원"
  },
  베트남VND:{
    베트남VND:1,
    미국USD:0.00004,
    한국KRW:0.054,
    유럽EUR:0.000036,
    일본JPY:0.0058,
    unit:"동"
  },
  유럽EUR:{
    미국USD:1.09,
    한국KRW:1483.20,
    베트남VND:27528.68,
    유럽EUR:1,
    일본JPY:160.03,
    unit:"유로"
  },
  일본JPY:{
    미국USD:0.0068,
    한국KRW:9.26,
    베트남VND:172.03,
    유럽EUR:0.0062,
    일본JPY:1,
    unit:"옌"
  },
}

let fromCurrency = '미국USD'
let toCurrency = '한국KRW'


//나라 선택 버튼 클릭시 드롭다운 리스트 출현
document.getElementById('from-button').addEventListener('click',function(){
  document.getElementById('from-currency-list').style.display = "block";
})

document.getElementById('to-button').addEventListener('click',function(){
  document.getElementById('to-currency-list').style.display = "block";
})



document.querySelectorAll('#from-currency-list a').forEach(menu=>menu.addEventListener("click",function(){

  document.getElementById("from-button").textContent = this.textContent; //버튼 가져와서 클릭한 메뉴의 값을 텍스트를 교체

  fromCurrency = this.textContent;   //클릭한 메뉴의 값을 변수에 저장해두기

  document.getElementById("from-display").textContent =  currencyRatio[fromCurrency].unit;   //리스트에서 선택한 화폐 단위로 밑에 읽어주는 부분

  document.getElementById('from-currency-list').style.display = "none";   //리스트에서 화폐 하나 선택하면 리스트 닫기

  convert();    //버튼 누를 때 마다도 환전 최신화
  convertReverse();     //아래 수정해도 위에 환전 최신화
}))

document.querySelectorAll('#to-currency-list a').forEach(menu=>menu.addEventListener("click",function(){

  document.getElementById("to-button").textContent = this.textContent;    //버튼 가져와서 클릭한 메뉴의 값을 텍스트를 교체

  toCurrency = this.textContent;    //클릭한 메뉴의 값을 변수에 저장해두기

  document.getElementById("to-display").textContent =  currencyRatio[toCurrency].unit;    //리스트에서 선택한 화폐 단위로 밑에 읽어주는 부분

  document.getElementById('to-currency-list').style.display = "none";   //리스트에서 화폐 하나 선택하면 리스트 닫기

  convert();    //버튼 누를 때 마다도 환전 최신화
  convertReverse();     //아래 수정해도 위에 환전 최신화
}))

//디폴트값 1 인풋 입력창 포커스될 때 지우기
function clearInput(input) {
  if (input.value === '1') {
      input.value = '';
  }
}

//환전 계산 함수 위->아래
function convert(){
  //환전 알고리즘
  //1. base금액
  //2. 어떤 화폐인지
  //3. 돈 * 환율 = 환전금액
  let amount = document.getElementById("from-input").value;
  document.getElementById("from-display").textContent = amount;

  let convertedAmount = (amount * currencyRatio[fromCurrency][toCurrency]).toFixed(2);

  document.getElementById("to-input").value = convertedAmount;

  //입력 금액과 환전 금액 읽어주기
  document.getElementById("to-display").textContent = numberToKorean(convertedAmount) + ' ' + currencyRatio[toCurrency].unit;
  document.getElementById("from-display").textContent = numberToKorean(amount) + ' ' + currencyRatio[fromCurrency].unit;
}

//환전 계산 함수(역) 아래->위
function convertReverse(){
  //환전 알고리즘
  //1. base금액
  //2. 어떤 화폐인지
  //3. 돈 * 환율 = 환전금액
  let amount = document.getElementById("to-input").value;
  document.getElementById("to-display").textContent = amount;

  let convertedAmount = (amount * currencyRatio[toCurrency][fromCurrency]).toFixed(2);

  document.getElementById("from-input").value = convertedAmount;


  //입력 금액과 환전 금액 읽어주기
  document.getElementById("to-display").textContent = numberToKorean(amount) + ' ' + currencyRatio[toCurrency].unit;
  document.getElementById("from-display").textContent = numberToKorean(convertedAmount) + ' ' + currencyRatio[fromCurrency].unit;
}


// //4자리씩 한글로 읽어주고 1000단위에 콤마 찍어주는 함수
function numberFormat(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberToKorean(number){
  var inputNumber  = number < 0 ? false : number;
  var unitWords    = ['', '만', '억', '조', '경', '해', '자'];
  var splitUnit    = 10000;
  var splitCount   = unitWords.length;
  var resultArray  = [];
  var resultString = '';

  for (var i = 0; i < splitCount; i++){
      var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0){
          resultArray[i] = unitResult;
      }
  }

  for (var i = 0; i < resultArray.length; i++){
      if(!resultArray[i]) continue;
      resultString = String(numberFormat(resultArray[i])) + unitWords[i] + resultString;
  }

  return resultString;
}
