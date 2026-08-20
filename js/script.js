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
                if (window.innerWidth <= 992) {
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
    // 7. Streamlined 4-Step Booking & Payment Engine
    // -------------------------------------------------------------------------
    const wizardForm = document.getElementById('bookingWizardForm');
    if (wizardForm) {
        let currentStep = 1;
        let roomExtra = 0;

        window.calculateLivePrice = function () {
            const courseSelect = document.getElementById('courseSelect');
            const selectedOpt = courseSelect ? courseSelect.options[courseSelect.selectedIndex] : null;
            
            const basePrice = selectedOpt && selectedOpt.dataset.price ? parseInt(selectedOpt.dataset.price) : 800;
            const depositPrice = selectedOpt && selectedOpt.dataset.deposit ? parseInt(selectedOpt.dataset.deposit) : 200;
            
            const totalPrice = Math.max(0, basePrice + roomExtra);
            const inrTotal = totalPrice * 90;
            const inrDeposit = depositPrice * 90;

            const liveTotalEl = document.getElementById('liveTotalPrice');
            const liveDepositEl = document.getElementById('liveDepositPrice');
            const paySummaryCourseEl = document.getElementById('paySummaryCourse');
            const paySummaryDepositEl = document.getElementById('paySummaryDeposit');

            if (liveTotalEl) liveTotalEl.innerHTML = `€${totalPrice} <span style="font-size: 0.95rem; font-weight: 500; color: var(--color-text-muted);">(~₹${inrTotal.toLocaleString('en-IN')})</span>`;
            if (liveDepositEl) liveDepositEl.innerHTML = `€${depositPrice} <span style="font-size: 0.85rem; font-weight: 500;">(~₹${inrDeposit.toLocaleString('en-IN')})</span>`;
            if (paySummaryCourseEl) paySummaryCourseEl.innerText = selectedOpt ? selectedOpt.value : '200-Hour Yoga Teacher Training';
            if (paySummaryDepositEl) paySummaryDepositEl.innerText = `€${depositPrice} (or ₹${inrDeposit.toLocaleString('en-IN')})`;
        };

        window.selectRoomCard = function (el, roomName, extraCost) {
            const roomHidden = document.getElementById('roomType');
            if (roomHidden) roomHidden.value = roomName;

            roomExtra = extraCost;

            const cards = el.parentElement.querySelectorAll('.form-option-card');
            cards.forEach(c => c.classList.remove('selected'));
            el.classList.add('selected');

            calculateLivePrice();
        };

        window.goToStep = function (stepNum) {
            if (stepNum > currentStep && !validateCurrentStep(currentStep)) {
                return;
            }

            currentStep = stepNum;

            // Update content visibility
            const allSteps = document.querySelectorAll('.wizard-step-content');
            allSteps.forEach(s => s.classList.remove('active'));
            const targetStep = document.querySelector(`.wizard-step-content[data-step="${stepNum}"]`);
            if (targetStep) targetStep.classList.add('active');

            // Update progress indicator
            for (let i = 1; i <= 4; i++) {
                const ind = document.getElementById(`ind-${i}`);
                if (ind) {
                    ind.classList.remove('active', 'completed');
                    if (i === stepNum) ind.classList.add('active');
                    else if (i < stepNum) ind.classList.add('completed');
                }
            }

            // Scroll gently to top of wizard
            wizardForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        };

        window.switchPayTab = function (tabId) {
            const btns = document.querySelectorAll('.payment-tab-btn');
            btns.forEach(b => b.classList.remove('active'));
            
            const panes = document.querySelectorAll('.payment-tab-pane');
            panes.forEach(p => p.classList.remove('active'));

            const targetPane = document.getElementById(`tab-${tabId}`);
            if (targetPane) targetPane.classList.add('active');

            // Highlight button
            const clickedBtn = Array.from(btns).find(b => b.getAttribute('onclick').includes(tabId));
            if (clickedBtn) clickedBtn.classList.add('active');
        };

        window.copyToClipboard = function (text, btnEl) {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = btnEl.innerText;
                btnEl.innerText = "Copied!";
                btnEl.style.backgroundColor = "var(--color-sage)";
                setTimeout(() => {
                    btnEl.innerText = originalText;
                    btnEl.style.backgroundColor = "var(--color-primary)";
                }, 2000);
            }).catch(err => {
                prompt("Copy this:", text);
            });
        };

        window.generateBookingConfirmation = function () {
            // Generate unique Reference ID
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            const refId = `SYG-2026-${randomNum}`;

            const name = document.getElementById('fullName')?.value.trim() || 'Guest Student';
            const email = document.getElementById('email')?.value.trim() || '';
            const phone = document.getElementById('whatsapp')?.value.trim() || '';
            const course = document.getElementById('courseSelect')?.value || '200-Hour Yoga TTC';
            const date = document.getElementById('startDate')?.value || 'Upcoming Batch';
            const location = document.getElementById('locationSelect')?.value || 'Arambol Beach, Goa';
            const room = document.getElementById('roomType')?.value || 'Shared Eco-Cottage';

            // Populate Voucher fields
            document.getElementById('voucherRef').innerText = refId;
            document.getElementById('vName').innerText = name;
            document.getElementById('vContact').innerText = `${email} | ${phone}`;
            document.getElementById('vCourse').innerText = course;
            document.getElementById('vDate').innerText = `${date} (${location})`;
            document.getElementById('vRoom').innerText = room;

            // WhatsApp Dispatch link construction
            const waMsg = `Namaste Shiva Yoga Goa! 🙏%0A%0AI have submitted my booking application on the website:%0A%0A*Booking Ref:* ${refId}%0A*Name:* ${encodeURIComponent(name)}%0A*Program:* ${encodeURIComponent(course)}%0A*Start Date:* ${encodeURIComponent(date)}%0A*Campus:* ${encodeURIComponent(location)}%0A*Accommodation:* ${encodeURIComponent(room)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A%0APlease verify my deposit payment and send my admission letter!`;
            
            const btnWA = document.getElementById('btnWhatsAppConfirm');
            if (btnWA) {
                btnWA.href = `https://wa.me/917411924193?text=${waMsg}`;
            }

            goToStep(4);
        };

        window.sendVoucherEmail = function () {
            const ref = document.getElementById('voucherRef')?.innerText || '';
            const name = document.getElementById('vName')?.innerText || '';
            const course = document.getElementById('vCourse')?.innerText || '';
            const date = document.getElementById('vDate')?.innerText || '';
            const room = document.getElementById('vRoom')?.innerText || '';
            const contact = document.getElementById('vContact')?.innerText || '';

            const subject = `Booking Confirmation: ${ref} - ${name} - ${course}`;
            const body = `NAMASTE SHIVA YOGA GOA TEAM,\n\nI have registered for a course/retreat and completed my deposit.\n\nBooking Reference: ${ref}\nName: ${name}\nContact: ${contact}\nProgram: ${course}\nStart Date: ${date}\nRoom Preference: ${room}\n\nPlease find attached my payment transfer screenshot.\n\nKind Regards,\n${name}`;

            window.open(`mailto:contact@shivaretreats.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
        };

        function validateCurrentStep(stepNum) {
            const stepEl = document.querySelector(`.wizard-step-content[data-step="${stepNum}"]`);
            if (!stepEl) return true;

            const reqInputs = stepEl.querySelectorAll('input[required], select[required]');
            let allValid = true;

            reqInputs.forEach(input => {
                if (!input.value.trim()) {
                    allValid = false;
                    input.style.borderColor = '#c46445';
                    input.addEventListener('input', function () {
                        this.style.borderColor = 'var(--color-border)';
                    }, { once: true });
                }
            });

            if (!allValid) {
                alert("Please fill in all required fields marked with * before continuing.");
            }

            return allValid;
        }

        // Initialize price calculation on load
        calculateLivePrice();
    }
});

// Helper for horizontal card scrolling
window.scrollSection = function (id, distance) {
    const container = document.getElementById(id);
    if (container) {
        container.scrollBy({ left: distance, behavior: 'smooth' });
    }
};

// -------------------------------------------------------------------------
// Load Shiva Yoga AI Chatbot Widget
// -------------------------------------------------------------------------
(function loadShivaChatbot() {
    if (document.getElementById('shivaChatToggle')) return;
    const script = document.createElement('script');
    const isSubdir = window.location.pathname.includes('/courses/') || window.location.pathname.includes('/blog/');
    script.src = isSubdir ? '../js/chatbot.js' : 'js/chatbot.js';
    script.defer = true;
    document.body.appendChild(script);
})();
