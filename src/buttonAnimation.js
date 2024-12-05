import { gsap } from 'gsap';

export const buttonHoverAnimation = () => {
  const animateIn = () => {
    gsap.to('.button-small', {
      duration: 0.6,
      backgroundColor: '#fff',
      color: '#57378b',
      borderColor: '#57378b',
      clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
      boxShadow: 'none',
      paddingLeft: '24px',
      paddingRight: '12px',
    });
  };

  const animateOut = () => {
    gsap.to('.button-small', {
      duration: 0.6,
      backgroundColor: '#57378b',
      color: 'white',
      borderColor: '#57378b',
      clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)',
      boxShadow: 'none',
      paddingLeft: '12px',
      paddingRight: '24px',
    });
  };

  return { animateIn, animateOut };
};