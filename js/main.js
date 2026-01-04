/*
 * B.E.T. Plumbing LLC - Main JavaScript
 * Global Functionality
 */

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

if (mobileMenuToggle && navMenu && navOverlay) {
  // Toggle menu on button click
  mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when overlay is clicked
  navOverlay.addEventListener('click', function() {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navMenuLinks = document.querySelectorAll('.nav-menu a');

navMenuLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Sticky Header on Scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 10) {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop;
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Phone Click Tracking (for analytics integration)
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Track phone click event
    // When analytics is set up, add tracking code here
    console.log('Phone call initiated:', this.href);
  });
});

// Form Submission Tracking
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    // Track form submission event
    // When analytics is set up, add tracking code here
    console.log('Form submitted:', this.id || this.className);
  });
});

// Auto-hide sticky mobile button on scroll down, show on scroll up
let stickyBtnLastScroll = 0;
const stickyCallBtn = document.querySelector('.sticky-call-btn');

if (stickyCallBtn) {
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Don't hide in the first 100px
    if (currentScroll < 100) {
      stickyCallBtn.style.transform = 'translateX(-50%) translateY(0)';
      stickyCallBtn.style.opacity = '1';
      return;
    }
    
    // Hide on scroll down, show on scroll up
    if (currentScroll > stickyBtnLastScroll) {
      // Scrolling down
      stickyCallBtn.style.transform = 'translateX(-50%) translateY(120px)';
      stickyCallBtn.style.opacity = '0';
    } else {
      // Scrolling up
      stickyCallBtn.style.transform = 'translateX(-50%) translateY(0)';
      stickyCallBtn.style.opacity = '1';
    }
    
    stickyBtnLastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });
}

// Add transition to sticky button
if (stickyCallBtn) {
  stickyCallBtn.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
}

// Lazy Load Images (simple implementation)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });
  
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Function to inject icons from the icon library
function injectIcons() {
  const iconElements = document.querySelectorAll('[data-icon]');
  iconElements.forEach(el => {
    const iconName = el.getAttribute('data-icon');
    if (typeof getIcon === 'function') {
      const iconHtml = getIcon(iconName);
      if (iconHtml) {
        el.innerHTML = iconHtml;
      }
    }
  });
}

// Call inject icons
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectIcons);
} else {
  injectIcons();
}

// Console message for developer
console.log('B.E.T. Plumbing LLC - Website loaded successfully');
console.log('For more information, visit our website or call (412) 733-6355');
