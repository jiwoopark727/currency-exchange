//3. 환율정보 들고오기
// 4. 아이템 선택하면 그걸로 바뀌기
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
}))

document.querySelectorAll('#to-currency-list a').forEach(menu=>menu.addEventListener("click",function(){
  //버튼 가져와서 클릭한 메뉴의 값을 텍스트를 교체
  document.getElementById("to-button").textContent = this.textContent;

  //클릭한 메뉴의 값을 변수에 저장해두기
  fromCurrency = this.textContent;
}))