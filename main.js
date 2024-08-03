// 5. 금액을 입력하면 환전이 된다.그걸로
// 6. 드롭다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전됨
// 7. 숫자를 한국어로 읽어주기
// 8. 밑에거 바꿔도 위에 적용 되게


let currencyRatio = {
  USD:{
    USD:1,
    KRW:1373.86,
    VND:25219.50,
    unit:"달러"
  },
  KRW:{
    KRW:1,
    USD:0.00073,
    VND:18.36,
    unit:"원"
  },
  VND:{
    VND:1,
    USD:0.00004,
    KRW:0.054,
    unit:"동"
  }
}

let fromCurrency = 'USD'
let toCurrency = 'USD'

document.querySelectorAll('#from-currency-list a').forEach(menu=>menu.addEventListener("click",function(){
  //버튼 가져와서 클릭한 메뉴의 값을 텍스트를 교체
  document.getElementById("from-button").textContent = this.textContent;

  //클릭한 메뉴의 값을 변수에 저장해두기
  fromCurrency = this.textContent;

  //리스트에서 선택한 화폐 단위로 바꿔주기
  document.getElementById("from-unit").textContent = currencyRatio[fromCurrency].unit;

  //리스트에서 화폐 하나 선택하면 리스트 닫기

  //버튼 누를 때 마다도 환전 최신화
  convertTo();
}))

document.querySelectorAll('#to-currency-list a').forEach(menu=>menu.addEventListener("click",function(){
  //버튼 가져와서 클릭한 메뉴의 값을 텍스트를 교체
  document.getElementById("to-button").textContent = this.textContent;

  //클릭한 메뉴의 값을 변수에 저장해두기
  toCurrency = this.textContent;

   //리스트에서 선택한 화폐 단위로 바꿔주기
  document.getElementById("to-unit").textContent = currencyRatio[toCurrency].unit;

  //리스트에서 화폐 하나 선택하면 리스트 닫기

  //버튼 누를 때 마다도 환전 최신화
  convert();
}))


function convert(){
  //1. base금액
  //2. 어떤 화폐인지
  //3. 돈 * 환율 = 환전금액
  let amount = document.getElementById("from-input").value;
  
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  console.log(convertedAmount);

  document.getElementById("to-input").value = convertedAmount;
}