import { useState, useEffect } from 'react';

/**
 * Hook para efecto de typing animation
 * @param {string[]} words - Array de palabras/frases a alternar
 * @param {number} typingSpeed - Velocidad de escritura en ms
 * @param {number} deletingSpeed - Velocidad de borrado en ms
 * @param {number} pauseTime - Pausa entre palabras en ms
 */
export function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Escribiendo
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          // Palabra completa, esperar antes de borrar
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        // Borrando
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          // Completamente borrado, pasar a la siguiente palabra
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
