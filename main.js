// 7. 숫자를 한국어로 읽어주기
// 8. 밑에거 바꿔도 위에 적용 되게


//환율 정보들
let currencyRatio = {
  USD:{
    USD:1,
    KRW:1373.86,
    VND:25219.50,
    EUR:0.92,
    JPY:146.60,
    GBP:0.78,
    CNY:7.16,
    unit:"달러"
  },
  KRW:{
    KRW:1,
    USD:0.00073,
    VND:18.36,
    EUR:0.00067,
    JPY:0.11,
    GBP:0.000575,
    CNY:0.0053,
    unit:"원"
  },
  VND:{
    VND:1,
    USD:0.00004,
    KRW:0.054,
    EUR:0.000036,
    JPY:0.0058,
    GBP:0.000031,
    CNY:0.00028,
    unit:"동"
  },
  EUR:{
    USD:1.09,
    KRW:1483.20,
    VND:27528.68,
    EUR:1,
    JPY:160.03,
    GBP:0.85,
    CNY:7.82,
    unit:"유로"
  },
  JPY:{
    USD:0.0068,
    KRW:9.26,
    VND:172.03,
    EUR:0.0062,
    JPY:1,
    GBP:0.0053,
    CNY:0.049,
    unit:"옌"
  },
  GBP:{
    USD:1.28,
    KRW:1739.15,
    VND:32294.77,
    EUR:1.17,
    JPY:187.86,
    GBP:1,
    CNY:9.17,
    unit:"파운드"
  },
  CNY:{
    USD:0.14,
    KRW:189.71,
    VND:3522.39,
    EUR:0.13,
    JPY:20.48,
    GBP:0.11,
    CNY:1,
    unit:"위안"
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