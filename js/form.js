/*
 * B.E.T. Plumbing LLC - Contact Form Handling
 */

// Get form elements
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous error states
    const formGroups = this.querySelectorAll('.form-group');
    formGroups.forEach(group => group.classList.remove('error'));
    
    let isValid = true;
    
    // Validate Name
    const nameField = this.querySelector('#name');
    if (!nameField.value.trim()) {
      showError(nameField, 'Please enter your name');
      isValid = false;
    }
    
    // Validate Phone
    const phoneField = this.querySelector('#phone');
    if (!phoneField.value.trim()) {
      showError(phoneField, 'Please enter your phone number');
      isValid = false;
    } else if (!validatePhone(phoneField.value)) {
      showError(phoneField, 'Please enter a valid phone number');
      isValid = false;
    }
    
    // Validate Email
    const emailField = this.querySelector('#email');
    if (!emailField.value.trim()) {
      showError(emailField, 'Please enter your email address');
      isValid = false;
    } else if (!validateEmail(emailField.value)) {
      showError(emailField, 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate Service
    const serviceField = this.querySelector('#service');
    if (!serviceField.value) {
      showError(serviceField, 'Pleaseselect a service');
      isValid = false;
    }
    
    // Validate Message
    const messageField = this.querySelector('#message');
    if (!messageField.value.trim()) {
      showError(messageField, 'Please enter a message');
      isValid = false;
    }
    
    if (isValid) {
      // In a production environment, this would submit to a backend API
      // For now, we'll show a success message
      
      // Get form data
      const formData = {
        name: nameField.value,
        phone: phoneField.value,
        email: emailField.value,
        address: this.querySelector('#address').value,
        service: serviceField.value,
        message: messageField.value
      };
      
      console.log('Form submitted with data:', formData);
      
      // Show success message
      showSuccessMessage();
      
      // Reset form
      contactForm.reset();
      
      // In production, you would integrate with email service or backend:
      // Example: submitToBackend(formData);
    }
  });
}

// Helper function to show error
function showError(field, message) {
  const formGroup = field.closest('.form-group');
  formGroup.classList.add('error');
  
  const errorElement = formGroup.querySelector('.form-error');
  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Phone validation (basic US phone number)
function validatePhone(phone) {
  const re = /^[\d\s\-\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Show success message
function showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.className = 'fixed top-0 left-0 right-0 z-50 p-4';
  successDiv.innerHTML = `
    <div class="container">
      <div style="background-color: #10b981; color: white; padding: 1rem 1.5rem; border-radius: 0.5rem;box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto; text-align: center;">
        <p style="font-weight: 600; margin: 0;">Thank you! Your message has been sent successfully.</p>
        <p style="font-size: 0.875rem; margin: 0.5rem 0 0; opacity: 0.9;">We'll get back to you as soon as possible.</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(successDiv);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    successDiv.style.transition = 'opacity 0.3s ease';
    successDiv.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(successDiv);
    }, 300);
  }, 5000);
}

// Phone number formatting (optional enhancement)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      if (value.length <= 3) {
        this.value = value;
      } else if (value.length <= 6) {
        this.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else {
        this.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      }
    }
  });
}
