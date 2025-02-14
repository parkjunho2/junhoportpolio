
const Element=()=>{
    let highlightElements = [];
    let inputBox;
    let isActive = false;
    let scrollTimeout;
    let hoverTimeout;
    let lastInputTime = 0;
    let lastFocusedIndex = -1; // 마지막 포커스 인덱스 추가
    
    function getAllFocusableElements() {
      return Array.from(document.querySelectorAll(`
        a[href], button, input, modal, cur,
        textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]),
        details, iframe, object, embed, area[href], audio[controls], video[controls],
        summary, .list-group-item, .list, a[data-href], a[data-toggle], .Panel, .cursor, .main-more
      `)).filter(el => !el.hasAttribute('hidden') && el.offsetParent !== null);
    }
    
    function assignNumbersToElements() {
      document.querySelectorAll('.highlight-label').forEach(label => label.remove());
    
      highlightElements = getAllFocusableElements();
      highlightElements.forEach((el, index) => {
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;
    
        if (!el.hasAttribute('tabindex')) {
          el.setAttribute('tabindex', '0');
        }
    
        const rect = el.getBoundingClientRect();
        const label = document.createElement('span');
        label.innerText = index + 1;
        label.className = 'highlight-label';
        label.style.position = 'absolute';
        label.style.top = `${rect.top + window.scrollY}px`;
        label.style.left = `${rect.left + window.scrollX}px`;
        label.style.backgroundColor = 'white';
        label.style.color = 'black';
        label.style.zIndex = 9007199254740991;
        label.style.padding = '1px 2px';
        label.style.fontSize = '10px';
        label.style.borderRadius = '3px';
        document.body.appendChild(label);
        el.dataset.highlightId = index + 1;
      });
    }
    
    function createInputBox() {
      if (inputBox) return;
    
      inputBox = document.createElement('input');
      inputBox.type = 'search';
      inputBox.placeholder = '"→" "Num" "←"';
      inputBox.style.textAlign = 'center';
      inputBox.style.position = 'fixed';
      inputBox.style.bottom = '5px';
      inputBox.style.left = '5px';
      inputBox.style.zIndex = 9999;
      inputBox.style.padding = '2px';
      inputBox.style.fontSize = '10px';
      inputBox.style.border = '1px solid gray';
      inputBox.style.width = '10em';
      document.body.appendChild(inputBox);
    
      inputBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const number = parseInt(inputBox.value, 10);
          const elementToFocus = highlightElements.find(el => el.dataset.highlightId === number);
          if (elementToFocus) {
            elementToFocus.focus();
            elementToFocus.click();
            lastFocusedIndex = highlightElements.indexOf(elementToFocus); // 포커스 위치 저장
          }
          deactivateExtension();
        } else {
          clearTimeout(hoverTimeout);
          lastInputTime = Date.now(); // 마지막 입력 시간을 기록
    
          if (inputBox) {
            hoverTimeout = setTimeout(() => {
              const number = parseInt(inputBox.value, 10);
              const elementToHover = highlightElements.find(el => el.dataset.highlightId === number);
              if (elementToHover) {
                simulateMouseOver(elementToHover);
              }
            }, 500);
          }
    
          // 예시: lastInputTime을 활용하여 일정 시간 후 입력이 없으면 자동으로 확장 종료
          const timeSinceLastInput = Date.now() - lastInputTime;
          if (timeSinceLastInput > 5000) { // 5초 이상 입력이 없으면 자동으로 비활성화
            deactivateExtension();
          }
        }
      });
    }
    
    function simulateMouseOver(element) {
      const mouseOverEvent = new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
        view: window
      });
    
      element.dispatchEvent(mouseOverEvent);
      setTimeout(() => {
        deactivateExtension();
        initializeExtension();
      }, 500);
    }
    
    function deactivateExtension() {
      document.querySelectorAll('.highlight-label').forEach(label => label.remove());
      document.querySelectorAll('.hover').forEach(el => el.classList.remove('hover'));
      if (inputBox) {
        inputBox.remove();
        inputBox = null;
      }
      isActive = false;
    }
    
    function initializeExtension() {
      if (isActive) {
        deactivateExtension();
      } else {
        assignNumbersToElements();
        createInputBox();
        inputBox.focus();
        isActive = true;
      }
    }
    
    document.addEventListener('keydown', (event) => {
      if (isActive) {
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          window.scrollBy(0, -700); // ↑ 위로 스크롤
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          window.scrollBy(0, 700); // ↓ 아래로 스크롤
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          focusElementByIndex(lastFocusedIndex + 1); // 👉 오른쪽: 다음 요소로 이동
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          focusElementByIndex(lastFocusedIndex - 1); // 👈 왼쪽: 이전 요소로 이동
        } else if (event.key === 'Enter') {
          deactivateExtension();
        }
      }
    });
    
    function focusElementByIndex(index) {
      if (index >= 0 && index < highlightElements.length) {
        const elementToFocus = highlightElements[index];
        if (elementToFocus) {
          elementToFocus.focus();
          lastFocusedIndex = index; // 현재 포커스 위치 저장
        }
      }
    }
    
    document.addEventListener('keydown', (event) => {
      // `Option + Tab`(⌥ + Tab) 눌렀을 때만 실행
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        if (isActive) {
          deactivateExtension();
        } else {
          initializeExtension();
        }
      }
    });
    
    document.addEventListener('click', (event) => {
      if (isActive && !inputBox.contains(event.target)) {
        deactivateExtension();
      }
    });
    
    document.addEventListener('scroll', () => {
      if (isActive) {
        deactivateExtension();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          initializeExtension();
        }, 200);
      }
    });
    
    document.addEventListener('DOMContentLoaded', () => {
      const mainInput = document.querySelector('input#query');
      if (mainInput) {
        mainInput.blur();
    
        const observer = new MutationObserver(() => {
          if (document.activeElement === mainInput) {
            mainInput.blur();
          }
        });
    
        observer.observe(document.body, { childList: true, subtree: true });
      }
    
      const inputs = document.querySelectorAll('input');
      inputs.forEach((input) => {
        input.addEventListener('focus', (e) => {
          e.stopPropagation();
        });
      });
    });
    
    return(<>
    
    </>)
}
export default Element;