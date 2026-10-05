const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;

    pages.forEach((page, index) => {
      page.style.zIndex = totalPages - index;

      page.addEventListener('click', () => {
        if (!page.classList.contains('flipped')) {
          page.classList.add('flipped');
          setTimeout(() => {
            page.style.zIndex = index + 1;
          }, 300);
        } else {
          page.classList.remove('flipped');
          setTimeout(() => {
            page.style.zIndex = totalPages - index;
          }, 300);
        }
      });
    });