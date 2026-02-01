// Download App Function
function downloadApp() {
    const modal = new bootstrap.Modal(document.getElementById('downloadModal'));
    modal.show();
}

function startDownload() {
    // Create fake download link
    const link = document.createElement('a');
    link.href = 'downloads/my-eye-v1.0.apk';
    link.download = 'my-eye-v1.0.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('downloadModal'));
    modal.hide();
    
    // Show success message
    alert('APK ডাউনলোড শুরু হয়েছে! ফাইলটি ডাউনলোড ফোল্ডারে পাবেন।\n\nদ্রষ্টব্য: এটি একটি ডেমো ফাইল।');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });
});
