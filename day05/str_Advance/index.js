const coffee = "americano"

//문자열 검색
coffee.indexOf("cano")  //몇 번째인지 알려줌 결과: [number]
coffee.includes("cano") //포함하는지 알려줌 결과: [boolean]
coffee.startsWith("am") //무엇으로 시작하는지 알려줌 결과: [boolean]

//문자열변환
coffee.toUpperCase()    //대문자화 결과: [String]
coffee.toLowerCase()    //소문자화 결과: [String]

//문자열 추출
coffee.slice(0,5)       //0~4번째까지 자르기 결과: [String]
coffee.substring(0,5)   //0~4번째까지 문자열 반환 결과: [String]

//문자열 분할 및 결합
coffee.split("i")       //i기준으로 ["amer","cano"] 배열 반환 결과: [array]
coffee.concat("latte")  //americanolatte 문자열 결합 결과: [String]

//문자열 치환
coffee.replace("cano","latte") //amerilatte 문자 치환 결과: [String]
coffee.trim()           //좌우 공백 제거 결과:[string]
