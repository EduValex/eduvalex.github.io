import { useState, useEffect, useRef } from 'react';

/**
 * Componente de imagen con lazy loading y placeholder
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases CSS adicionales
 * @param {string} placeholderColor - Color del placeholder (opcional)
 */
export function LazyImage({ src, alt, className = '', placeholderColor = 'bg-slate-200 dark:bg-slate-700', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentImg = imgRef.current;
    if (!currentImg) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '50px',
      }
    );

    observer.observe(currentImg);

    return () => {
      observer.unobserve(currentImg);
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder con skeleton loading */}
      {!isLoaded && (
        <div className={`absolute inset-0 skeleton ${placeholderColor}`} />
      )}
      
      {/* Imagen real (solo se carga cuando está en viewport) */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}
