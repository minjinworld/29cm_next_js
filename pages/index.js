import { useRef, useState } from 'react';
import Card from './Card';

const App = ({ selectedCategory }) => {
  // 그리고 index.js에서 selectedCategory라는 이름으로 props 받아옴
  // 전역 상태로 관리된 selectedCategory 값을 **다른 컴포넌트(App 컴포넌트)**에서 필터링에 사용하기 위함

  // 각각의 카드에 맞는 데이터를 배열로 정의
  const [cardData, setCardData] = useState([
    {
      imgSrc: "https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg?width=400",
      brandName: "프리츠한센",
      productName: "프리츠한센 - IKEBANA SMALL(BRASS)",
      price: "178,000",
      discount: "8%",
      discountPrice: "163,760",
      likes: "10,642",
      reviews: "201",

      category: "홈데코"
    },
    {
      imgSrc: "https://img.29cm.co.kr/item/202405/11ef11f00240d0cc892bedfd915221d1.jpg?width=400",
      brandName: "리히르",
      productName: "LHR-T-03 Ivory/Yellow (주문제작상품)",
      price: "950,000",
      discount: "5%",
      discountPrice: "902,500",
      likes: "1032",
      reviews: "150",

      category: "가구"
    },
    {
      imgSrc: "https://img.29cm.co.kr/item/202403/11eee2a5ea13c82682f27532668945d8.png?width=400",
      brandName: "다이노탱",
      productName: "Quokka in School Figure Pen",
      price: "7,000",
      discount: "10%",
      discountPrice: "7,000",
      likes: "8,347",
      reviews: "125",

      category: "아트"
    }
  ]);

    // 추가할 카드 데이터 배열로 정의
  const additionalData = [
    {
      imgSrc: "https://img.29cm.co.kr/item/202308/11ee3019ce051828a5cafd48217214f3.jpg?width=400",
      brandName: "리히르",
      productName: "소파체어 리히르_LHR-C-03 Navy",
      price: "680,000",
      discount: "5%",
      discountPrice: "646,000",
      likes: "640",
      reviews: "20",

      category: "가구"
    },
    {
      imgSrc: "https://img.29cm.co.kr/next-product/2023/01/04/fd590e2b68114bafa833607afce1b3d0_20230104223415.jpg?width=400",
      brandName: "에프에프 컬렉티브",
      productName: "[29CM 단독] Spiral Floor Lamp (Black / White)",
      price: "440,000",
      discount: "25%",
      discountPrice: "330,000",
      likes: "3712",
      reviews: "49",

      category: "조명"
    },
    {
      imgSrc: "https://img.29cm.co.kr/next-product/2023/07/27/c7b1848961e946efb01de0c0731370f8_20230727162853.png?width=400",
      brandName: "리튼",
      productName: "[29CM단독] 블루베리 모자이크 도어 매트 (50x70)",
      price: "52,000",
      discount: "0%",
      discountPrice: "52,000",
      likes: "4576",
      reviews: "459",

      category: "홈데코"
    },
    {
      imgSrc: "https://img.29cm.co.kr/next-product/2020/08/06/ac0a1f8071bd43b2a442103925b6cb5d_20200806165437.png?width=400",
      brandName: "아티쉬",
      productName: "[모빌] 미래 자연 Futura Natura / 플렌스테드 모빌(Flensted Mobiles",
      price: "83,000",
      likes: "2,878",
      reviews: "36",

    category: "홈데코"
    },
    {
      imgSrc: "https://img.29cm.co.kr/item/202402/11eecb9a03efe7acb238fb8b76536cad.jpg?width=400",
      brandName: "잭슨카멜레온",
      productName: "Ink Sofa Table",
      price: "979,000",
      likes: "491",
      reviews: "1",

      category: "가구"
    },
    {
      imgSrc: "https://img.29cm.co.kr/item/202312/11ee9322ebb850b98a7f9f31055ef7b3.png?width=400",
      brandName: "다이노탱",
      productName: "Touch the Quokka",
      price: "979,000",
      likes: "5,511",
      reviews: "221",

      category: "아트"
    },

  ];
  // ---------------------------------------------------------------
  


  const [index, setIndex] = useState(0); // 추가되는 이미지와 데이터를 관리하는 인덱스 상태

  // 이미지 1개씩 추가
  // const addImage = () => {
  //   if (index < additionalImages.length) {
  //     // 이 조건이 없으면, index가 배열의 길이를 넘어서도 계속 증가하면서 이미 배열에 존재하지 않는 요소를 추가하려고 시도해서 오류를 발생시킬 수 있음
  //     setImgSrc([...imgSrc, additionalImages[index]]);
  //     //복사를 해주고 배열에 담아 놓은 순서대로 호출되도록 처리하기
  //     setCardData([...cardData, additionalData[index]]);
  //     setIndex(index + 1); // 인덱스를 1씩 증가시킴
  //   }
  // };

  // ----------------------------------------------------------

  const bottomRef = useRef(null); // 최하단 객체 생성시 이벤트를 위한 useRef
  // useRef : 일반적으로 특정 DOM을 지정하여 해당 속성값을 파악하거나 변경시키는 용도
  // useState : 컴포넌트 내의 변수값을 조회, 수정하는 방법으로도 사용
  // 초기 렌더링 시점에 참조할 DOM 요소가 아직 생성되지 않았기 때문에 null 값을 기존값 생성

  // 이미지 3개씩 추가
  const addImage = () => {
    if (index < additionalData.length) {
      const nextIndex = index + 3;
      setCardData([...cardData, ...additionalData.slice(index, nextIndex)]);
      // slice 사용: slice() 메서드를 사용해 index부터 nextIndex - 1까지의 요소를 추출하므로, 여기서는 3개의 데이터를 가져와 cardData에 추가

      setIndex(nextIndex); // 인덱스를 3씩 증가


      setTimeout(() => {
        // 새 요소가 추가된 후 하단으로 스크롤
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        // ?. (optional chaining 옵셔널 체이닝)연산자는 current가 null이나 undefined일 때 접근할 수 있게해줌
        // bottomRef.current가 존재할 때만 뒤의 .scrollIntoView()[특정요소에 스크롤 자동 조정]를 실행
      }, 100);

    }

  };

  // 선택된 카테고리로 필터링
  // selectedCategory 값에 따라 cardData 배열을 필터링하여 새로운 배열을 생성하는 로직(삼항연산자)
  const filteredData =
    selectedCategory === "전체"
      // selectedCategory가 "전체"인지 확인하고
      ? cardData
      // 조건이 참인 경우, cardData를 필터링하지 않고 그대로 보여줌
      : cardData.filter((data) => data.category === selectedCategory);
      // 조건이 거짓일 경우, cardData를 필터링
      // filter 메서드를 사용하여 cardData 배열에서 category가 selectedCategory와 일치하는 항목만 남김

  return (
    <>
      <div className="flex_box flex-wrap">
        {/* {cardData.map((data, index) => (
          <Card
            key={index} // 각 카드에 고유한 key 부여
            imgSrc={data.imgSrc}
            brandName={data.brandName}
            productName={data.productName}
            price={data.price}
            discount={data.discount}
            discountPrice={data.discountPrice}
            likes={data.likes}
            reviews={data.reviews}
          />
        ))} */}

        
        {/* 필터링을 하기 위해 설정해준 filteredData 를 cardData 에서 대체 */}
        {filteredData.map((data, index) => (
          <Card
            key={index} // 각 카드에 고유한 key 부여
            imgSrc={data.imgSrc}
            brandName={data.brandName}
            productName={data.productName}
            price={data.price}
            discount={data.discount}
            discountPrice={data.discountPrice}
            likes={data.likes}
            reviews={data.reviews}
          />
        ))}

        {/* 빈 div에 bottomRef 추가하여 스크롤될 위치를 지정 */}
        <div ref={bottomRef}></div>
      </div>
      <button className="addbtn text-[#333] text-[20px] font-[800] w-[200px] h-[50px] rounded-[8px] border border-solid border-[#333] flex justify-center items-center mx-auto mb-[50px] mt-[50px]" onClick={addImage}>더보기</button>
    </>
  );
};

export default App;
