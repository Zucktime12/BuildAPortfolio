export const smoothScrollWithOffset = (id: string, offset: number = 50) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -offset;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };