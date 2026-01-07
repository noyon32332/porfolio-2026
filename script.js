// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Animate Skill Bars on Scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll to Top Button (Optional - you can add this if needed)
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });

    document.body.appendChild(button);
}

// Initialize scroll to top button
createScrollToTopButton();

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.project-card, .skill-category, .contact-item, .experience-item, .education-item, .certificate-card, .memory-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment below to enable typing effect for name
// const nameElement = document.querySelector('.name');
// if (nameElement) {
//     const originalText = nameElement.textContent;
//     typeWriter(nameElement, originalText, 150);
// }

// Image Upload and Preview Functionality
function handleImageUpload(inputId, imgId, placeholderId) {
    const fileInput = document.getElementById(inputId);
    const imgElement = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);

    // Load saved image from localStorage
    const savedImage = localStorage.getItem(imgId);
    if (savedImage) {
        imgElement.src = savedImage;
        imgElement.classList.remove('hidden');
        placeholder.style.display = 'none';
    }
    
    // Check if image already has src attribute set
    if (imgElement.src && imgElement.src !== window.location.href) {
        imgElement.classList.remove('hidden');
        placeholder.style.display = 'none';
    }

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file');
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be less than 5MB');
                return;
            }

            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                
                // Set image source
                imgElement.src = imageUrl;
                imgElement.classList.remove('hidden');
                placeholder.style.display = 'none';
                
                // Save to localStorage
                localStorage.setItem(imgId, imageUrl);
                
                // Add success animation
                imgElement.style.animation = 'none';
                setTimeout(() => {
                    imgElement.style.animation = 'pulse 0.6s ease-in-out';
                }, 10);
            };
            
            reader.readAsDataURL(file);
        }
    });

    // Click on placeholder to trigger file input
    placeholder.addEventListener('click', function() {
        fileInput.click();
    });

    // Click on image to change it
    imgElement.addEventListener('click', function() {
        fileInput.click();
    });
}

// Initialize image upload for hero and about sections
handleImageUpload('heroImageUpload', 'heroProfileImg', 'heroPlaceholder');
handleImageUpload('aboutImageUpload', 'aboutProfileImg', 'aboutPlaceholder');

// Hide placeholder if image already has src
window.addEventListener('DOMContentLoaded', function() {
    const heroImg = document.getElementById('heroProfileImg');
    const heroPlaceholder = document.getElementById('heroPlaceholder');
    const aboutImg = document.getElementById('aboutProfileImg');
    const aboutPlaceholder = document.getElementById('aboutPlaceholder');
    
    if (heroImg && heroImg.src && !heroImg.classList.contains('hidden')) {
        if (heroPlaceholder) heroPlaceholder.style.display = 'none';
    }
    
    if (aboutImg && aboutImg.src && !aboutImg.classList.contains('hidden')) {
        if (aboutPlaceholder) aboutPlaceholder.style.display = 'none';
    }
});

// Add interactive hover effects for profile images
const profileImages = document.querySelectorAll('.profile-image');
profileImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    img.addEventListener('mouseleave', function() {
        if (img.id === 'heroProfileImg') {
            this.style.transform = 'scale(1) rotate(0deg)';
        } else {
            this.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// CV modal & upload handling
(function() {
    const openCvModalBtn = document.getElementById('openCvModal');
    const cvModal = document.getElementById('cvModal');
    const closeCvModal = document.getElementById('closeCvModal');
    const uploadCvBtn = document.getElementById('uploadCvBtn');
    const cvUpload = document.getElementById('cvUpload');
    const cvDownloadLink = document.getElementById('cvDownloadLink');
    const cvFileName = document.getElementById('cvFileName');
    const noCvText = document.getElementById('noCvText');
    const cvPreviewContainer = document.getElementById('cvPreviewContainer');
    const pdfPreview = document.getElementById('pdfPreview');
    const pdfFrame = document.getElementById('pdfFrame');
    const cvUrlInput = document.getElementById('cvUrlInput');
    const useCvUrlBtn = document.getElementById('useCvUrlBtn');
    const modalOverlay = document.getElementById('cvModalOverlay');

    let currentCvUrl = null;
    let currentCvFile = null;

    function openModal() {
        if (cvModal) cvModal.classList.add('open');
    }

    function closeModal() {
        if (cvModal) cvModal.classList.remove('open');
    }

    if (openCvModalBtn) openCvModalBtn.addEventListener('click', () => {
        // Trigger direct download of bundled CV file `noyoncv01.pdf`
        try {
            const link = document.createElement('a');
            link.href = 'noyoncv01.pdf';
            link.setAttribute('download', 'noyoncv01.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            // Fallback: open modal if download fails
            openModal();
        }
    });

    if (closeCvModal) closeCvModal.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    if (uploadCvBtn) uploadCvBtn.addEventListener('click', () => cvUpload && cvUpload.click());

    if (cvUpload) cvUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        currentCvFile = file;
        currentCvUrl = url;
        if (cvFileName) cvFileName.textContent = file.name;
        if (cvDownloadLink) {
            cvDownloadLink.href = url;
            cvDownloadLink.setAttribute('download', file.name);
        }
        if (noCvText) noCvText.style.display = 'none';
        if (cvPreviewContainer) cvPreviewContainer.style.display = 'block';
        if (file.type === 'application/pdf') {
            if (pdfPreview) pdfPreview.style.display = 'block';
            if (pdfFrame) pdfFrame.src = url;
        } else {
            if (pdfPreview) pdfPreview.style.display = 'none';
            if (pdfFrame) pdfFrame.src = '';
        }
        openModal();
    });

    if (useCvUrlBtn) useCvUrlBtn.addEventListener('click', () => {
        const url = cvUrlInput && cvUrlInput.value && cvUrlInput.value.trim();
        if (!url) return alert('Please paste a valid URL.');
        currentCvUrl = url;
        currentCvFile = null;
        if (cvFileName) cvFileName.textContent = url.split('/').pop();
        if (cvDownloadLink) {
            cvDownloadLink.href = url;
            cvDownloadLink.removeAttribute('download');
        }
        if (noCvText) noCvText.style.display = 'none';
        if (cvPreviewContainer) cvPreviewContainer.style.display = 'block';
        if (pdfPreview) pdfPreview.style.display = 'none';
        if (pdfFrame) pdfFrame.src = '';
        openModal();
    });
})();

