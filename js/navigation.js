// Smooth Page Transitions with Navigation
function smoothNavigate(url) {
  // Add exit animation
  document.body.classList.add('page-exit');
  
  // Wait for animation to complete
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}

// Swipe Navigation for Mobile
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

const pageOrder = [
  'index.html',
  'thankyou.html',
  'date.html',
  'food.html',
  'dessert.html',
  'activities.html',
  'lastpage.html'
];

function getCurrentPageIndex() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  return pageOrder.indexOf(currentPage);
}

function handleSwipe() {
  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = touchEndY - touchStartY;
  const minSwipeDistance = 50;
  
  // Only trigger if horizontal swipe is greater than vertical
  if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
    const currentIndex = getCurrentPageIndex();
    
    // Swipe left - go to next page
    if (swipeDistanceX < -minSwipeDistance && currentIndex < pageOrder.length - 1) {
      smoothNavigate(pageOrder[currentIndex + 1]);
    }
    
    // Swipe right - go to previous page (only after thankyou.html)
    if (swipeDistanceX > minSwipeDistance && currentIndex > 2) {
      smoothNavigate(pageOrder[currentIndex - 1]);
    }
  }
}

// Add touch event listeners
document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

// Add keyboard navigation
document.addEventListener('keydown', e => {
  const currentIndex = getCurrentPageIndex();
  
  if (e.key === 'ArrowRight' && currentIndex < pageOrder.length - 1) {
    smoothNavigate(pageOrder[currentIndex + 1]);
  }
  
  if (e.key === 'ArrowLeft' && currentIndex > 2) {
    smoothNavigate(pageOrder[currentIndex - 1]);
  }
});

// Override all link clicks to use smooth transition
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href$=".html"], button[onclick*="location.href"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.href || this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      
      if (href && href.endsWith('.html')) {
        e.preventDefault();
        smoothNavigate(href);
      }
    });
  });
});
