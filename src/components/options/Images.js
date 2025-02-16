const Images = () => {
    const images = [
      { front: "/images/erdsemi.png", back: "ERD 다이어그램" },
      { front: "favicon.png", back: "이건 파비콘!" },
      { front: "favicon.png", back: "설명 추가 가능!" },
      { front: "favicon.png", back: "마우스를 올려봐!" },
      { front: "favicon.png", back: "React 프로젝트" },
      { front: "favicon.png", back: "이미지 대신 글씨" },
      { front: "favicon.png", back: "뒤집으면 보임!" },
      { front: "favicon.png", back: "커스텀 가능!" },
      { front: "favicon.png", back: "디자인 수정 가능" },
      { front: "favicon.png", back: "굿!" },
    ];
  
    return (
      <div className="image-container">
        {images.map((img, index) => (
          <div key={index} className="flip-box">
            <div className="flip-inner">
              {/* 앞면 (이미지) */}
              <div className="flip-front">
                <img src={img.front} alt="Front" />
              </div>
              {/* 뒷면 (글씨) */}
              <div className="flip-back">
                <p>{img.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Images;