/**
 * Shiva Retreats & Yoga School Goa - Core Interactive Engine
 */

document.addEventListener('DOMContentLoaded', function () {
    // -------------------------------------------------------------------------
    // 1. Sticky Header Scroll Effect
    // -------------------------------------------------------------------------
    const header = document.querySelector('.site-header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // -------------------------------------------------------------------------
    // 2. Mobile Menu & Drawer Interaction
    // -------------------------------------------------------------------------
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close on navigation link click (mobile)
        const navLinks = mainNav.querySelectorAll('a:not(.has-dropdown > a)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Handle mobile dropdown toggle
        const dropdownToggles = mainNav.querySelectorAll('.has-dropdown > a');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('open');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Escape key listener
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // -------------------------------------------------------------------------
    // 3. Scroll Reveal Animations (IntersectionObserver)
    // -------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }

    // -------------------------------------------------------------------------
    // 4. Hero Slideshow
    // -------------------------------------------------------------------------
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        const slideInterval = 5500;

        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // -------------------------------------------------------------------------
    // 5. Course Catalog Filtering (all-courses.html & index.html)
    // -------------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card[data-category]');

    if (filterButtons.length > 0 && courseCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                courseCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // -------------------------------------------------------------------------
    // 6. Interactive FAQ Accordion
    // -------------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const questionBtn = item.querySelector('.faq-question');
            if (questionBtn) {
                questionBtn.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    // Optional: Close other FAQs for clean single-open accordions
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) otherItem.classList.remove('active');
                    });
                    item.classList.toggle('active', !isActive);
                });
            }
        });
    }

    // -------------------------------------------------------------------------
    // 7. Booking Wizard Logic
    // -------------------------------------------------------------------------
    const wizardForm = document.getElementById('bookingWizardForm');
    if (wizardForm) {
        let currentStep = 1;
        const totalSteps = 7;

        const prices = {
            'Shared Cottage': 800,
            'Private Cottage': 1100,
            'Non-Residential': 600,
            'Advance': 300
        };

        showStep(currentStep);

        window.nextStep = function () {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
                updateFee();
            }
        };

        window.prevStep = function () {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        };

        window.selectOption = function (element, inputId, value) {
            const inputEl = document.getElementById(inputId);
            if (inputEl) inputEl.value = value;

            const siblings = element.parentElement.children;
            for (let i = 0; i < siblings.length; i++) {
                if (siblings[i].classList.contains('form-option-card')) {
                    siblings[i].classList.remove('selected');
                }
            }
            element.classList.add('selected');

            if (inputId === 'stayType') {
                const accomHidden = document.getElementById('roomType');
                if (value === 'Non-Residential' && accomHidden) {
                    accomHidden.value = 'None';
                }
            }
        };

        window.togglePaymentInfo = function () {
            const box = document.getElementById('paymentInfo');
            if (box) {
                box.style.display = box.style.display === 'block' ? 'none' : 'block';
            }
        };

        window.sendApplication = function () {
            const name = document.getElementById('fullName')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const country = document.getElementById('country')?.value || '';
            const phone = document.getElementById('whatsapp')?.value || '';
            const gender = document.getElementById('gender')?.value || '';
            const course = document.getElementById('courseSelect')?.value || '';
            const startDate = document.getElementById('startDate')?.value || '';
            const stayType = document.getElementById('stayType')?.value || '';
            const roomType = document.getElementById('roomType')?.value || '';
            const details = document.getElementById('message')?.value || '';

            let total = stayType === 'Non-Residential' ? prices['Non-Residential'] : (prices[roomType] || 0);
            const advance = prices['Advance'];
            const balance = total - advance;

            const subject = `Booking Application: ${name} - ${course}`;
            const body = `NAMASTE SHIVA YOGA GOA TEAM,\n\nI would like to apply for a course/retreat in Goa. Here are my booking details:\n\n--- PERSONAL DETAILS ---\nName: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone}\nCountry: ${country}\nGender: ${gender}\n\n--- COURSE DETAILS ---\nCourse / Retreat: ${course}\nPreferred Start Date: ${startDate}\n\n--- ACCOMMODATION ---\nStay Type: ${stayType}\nRoom Preference: ${roomType}\n\n--- FEE SUMMARY ---\nTotal Course & Stay Fee: €${total}\nAdvance Deposit: €${advance}\nBalance Due on Arrival: €${balance}\n\n--- ADDITIONAL NOTES / DIETARY ---\n${details}\n\n---------------------------------\nPlease confirm availability and next steps.`;

            window.open(`mailto:contact@shivaretreats.com?cc=contact@shivaretreats.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
        };

        window.updateFee = function () {
            const stayType = document.getElementById('stayType')?.value;
            const roomType = document.getElementById('roomType')?.value;
            const course = document.getElementById('courseSelect')?.value;

            const summaryCourseEl = document.getElementById('summaryCourse');
            if (summaryCourseEl) summaryCourseEl.innerText = course || 'Not Selected';

            let total = 0;
            let roomText = '-';

            if (stayType === 'Non-Residential') {
                total = prices['Non-Residential'];
                roomText = 'Non-Residential (Course Only)';
            } else {
                if (roomType) {
                    total = prices[roomType] || 0;
                    roomText = `Residential - ${roomType}`;
                } else {
                    roomText = 'Residential (Room Pending)';
                }
            }

            const summaryRoomEl = document.getElementById('summaryRoom');
            const totalFeeEl = document.getElementById('totalFee');
            if (summaryRoomEl) summaryRoomEl.innerText = roomText;
            if (totalFeeEl) totalFeeEl.innerText = '€' + total;
        };

        function showStep(n) {
            if (n < 1) n = 1;
            if (n > totalSteps) n = totalSteps;

            const steps = document.querySelectorAll('.wizard-step-content');
            steps.forEach(step => step.classList.remove('active'));

            const currentStepEl = document.querySelector(`.wizard-step-content[data-step="${n}"]`);
            if (currentStepEl) currentStepEl.classList.add('active');

            const progressEl = document.getElementById('progressFill');
            if (progressEl) {
                const progress = ((n - 1) / (totalSteps - 1)) * 100;
                progressEl.style.width = progress + '%';
            }

            if (n === 4) {
                const stay = document.getElementById('stayType')?.value;
                const opts = document.getElementById('accommodationOptions');
                if (stay === 'Non-Residential' && opts) {
                    opts.style.display = 'none';
                    if (!document.getElementById('nonResMsg')) {
                        const msg = document.createElement('p');
                        msg.id = 'nonResMsg';
                        msg.innerText = "You selected Non-Residential. No room selection needed.";
                        msg.style.textAlign = 'center';
                        msg.style.padding = '20px 0';
                        opts.parentNode.insertBefore(msg, opts);
                    }
                } else if (opts) {
                    opts.style.display = 'block';
                    const msg = document.getElementById('nonResMsg');
                    if (msg) msg.remove();
                }
            }
        }

        function validateStep(n) {
            const stepEl = document.querySelector(`.wizard-step-content[data-step="${n}"]`);
            if (!stepEl) return true;

            const inputs = stepEl.querySelectorAll('input, select');
            let valid = true;

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    valid = false;
                    input.style.borderColor = '#c46445';
                    input.addEventListener('input', function () {
                        this.style.borderColor = 'var(--color-border)';
                    }, { once: true });
                }
            });

            if (n === 4) {
                const stay = document.getElementById('stayType')?.value;
                const room = document.getElementById('roomType')?.value;
                if (stay === 'Residential' && !room) {
                    alert("Please select your preferred room accommodation.");
                    valid = false;
                }
            }

            return valid;
        }
    }
});

// Helper for horizontal card scrolling
window.scrollSection = function (id, distance) {
    const container = document.getElementById(id);
    if (container) {
        container.scrollBy({ left: distance, behavior: 'smooth' });
    }
};
