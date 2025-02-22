const Images = () => {
    const images = [
      { front: "/images/vscode.jpeg", back: "Frequent" },
      { front: "/images/java.png", back: "Frequent" },
      { front: "/images/bootstrap.jpeg", back: "Frequent" },
      { front: "/images/mybatis.jpeg", back: "Frequent" },
      { front: "/images/ec2.png", back: "Frequent" },
      { front: "/images/springboot.png", back: "Frequent" },
      { front: "/images/react.png", back: "Frequent" },
      { front: "/images/ssl.png", back: "Frequent" },
      { front: "/images/oracle.png", back: "Frequent" },
      { front: "/images/dbeaver.png", back: "Frequent" },
      { front: "/images/netlify.png", back: "Frequent" },
      { front: "/images/route53.webp", back: "Frequent" },
      { front: "/images/S3.png", back: "Frequent" },
      { front: "/images/ubuntu.png", back: "Frequent" },
      { front: "/images/gitaction.png", back: "Frequent" },
      { front: "/images/jQuery.png", back: "Knowledge" },
      { front: "/images/mysql.png", back: "Knowledge" },
      { front: "/images/awsrds.png", back: "Knowledge" },
      { front: "/images/jmeter.png", back: "Knowledge" },
      // { front: "/images/redis.png", back: "Learning" },
      { front: "/images/kubernetes.webp", back: "Learning" },
      { front: "/images/docker.png", back: "Learning" },
      { front: "/images/k6.png", back: "Learning" },
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
              <a href={img.link} target="_blank" rel="noreferrer">
                <p>{img.back}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Images;