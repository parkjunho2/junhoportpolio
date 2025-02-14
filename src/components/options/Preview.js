
const Preview=()=>{

    document.addEventListener('mouseover', (event) => {
        const target = event.target;
     const link = target.closest('#menu li>a')|| target.closest('#link-a');
     if (link) {
       const url = link.href; // 대상 URL
       if (!url) return;
   
           // 기존에 열린 모달 제거
           const existingModal = document.getElementById('preview-modal');
           if (existingModal) {
               existingModal.remove();
           }
           
           // 모달 생성
           const previewModal = document.createElement('div');
           previewModal.id = 'preview-modal'; // 중복 생성을 막기 위해 ID 부여
           previewModal.classList.add('preview-modal');  // CSS 클래스 추가
   
           // 로딩 아이콘 추가 (스타일은 CSS에서 정의)
           const loadingIcon = document.createElement('div');
           loadingIcon.className = 'loading-icon'; // 로딩 아이콘에 해당하는 CSS 클래스 추가
           previewModal.appendChild(loadingIcon);
   
           // iframe으로 페이지 미리보기
           const iframe = document.createElement('iframe');
           iframe.src = url; // URL을 iframe src로 지정
           iframe.classList.add('iframe'); // iframe 스타일 적용
           iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms'); // 보안 설정
   
           // iframe 로드 완료 시 로딩 아이콘 제거
           iframe.onload = () => {
               loadingIcon.style.display = 'none'; // 로딩 아이콘 숨기기
           };
   
           // iframe을 모달에 추가
           previewModal.appendChild(iframe);
           document.body.appendChild(previewModal);
   
           // 마우스 오른쪽에 따라다니도록 위치 업데이트
           const updateModalPosition = (e) => {
               const windowWidth = window.innerWidth;
               const windowHeight = window.innerHeight;
               const modalWidth = previewModal.offsetWidth;
               const modalHeight = previewModal.offsetHeight;
   
               let leftPosition = e.clientX + 20; // 오른쪽에 띄우는 기본 위치
               let topPosition = e.clientY + 20;  // 아래쪽에 띄우는 기본 위치
   
               // 오른쪽 공간이 부족한 경우 왼쪽으로
               if (leftPosition + modalWidth > windowWidth) {
                   leftPosition = e.clientX - modalWidth - 20; // 왼쪽에 띄움
               }
   
               // 아래쪽 공간이 부족한 경우 위로
               if (topPosition + modalHeight > windowHeight) {
                   topPosition = e.clientY - modalHeight - 20; // 위로 띄움
               }
   
               // 위치 설정
               previewModal.style.top = `${topPosition + window.scrollY}px`; // 스크롤 위치 고려
               previewModal.style.left = `${leftPosition + window.scrollX}px`; // 스크롤 위치 고려
           };
   
           document.addEventListener('mousemove', updateModalPosition);
           document.addEventListener('scroll', updateModalPosition); // 스크롤시에도 위치 업데이트
   
           // 마우스를 떼면 모달 제거
           target.addEventListener('mouseout', () => {
               previewModal.remove();
               document.removeEventListener('mousemove', updateModalPosition);
               document.removeEventListener('scroll', updateModalPosition); // 이벤트 제거
           });
       }
   });
    return(
        <>
        
        </>
    )
}
export default Preview;
