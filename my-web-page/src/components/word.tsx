import { useEffect, useRef } from "react";

function Word() {

    const dev = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const textContainer = dev.current
        const words = ["DEVELOPER", "ENGINEER"];
      
        if (textContainer) {
          let wordIndex = 0;
          let charIndex = 0;
          let isDeleting = false;
      
          function typeText() {
            const currentWord = words[wordIndex];
            const currentText = currentWord.slice(0, charIndex);
      
            if (textContainer) {
              textContainer.textContent = currentText;
            }
      
            if (!isDeleting) {
              charIndex++;
            } else {
              charIndex--;
            }
      
            if (charIndex > currentWord.length) {
              isDeleting = true;
            }
      
            if (charIndex === 0 && isDeleting) {
              isDeleting = false;
              wordIndex = (wordIndex + 1) % words.length;
            }
          }
      
          setInterval(typeText, 150);
        }
        return () => {
       
        };
      }, []);
    
  
    return (
      <>
        <div style={{
            color: "var(--main-color)"
        }} ref={dev}>DEVELOPER</div>
      </>
    )
  }

  export default Word;