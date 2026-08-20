#!/usr/bin/env python3
"""
Comprehensive synchronization of Shiva Yoga Official Policies & Pricing:
- 34 Rules and Regulations -> rules.html
- Terms & Conditions, Cancellation, Payment Fees -> terms.html
- Important Info (Inclusions, Things to Carry, Check-in/out, Batches) -> important-info.html
- Official Pricing Chart -> booking.html, payment-details.html, all-courses.html, course detail pages
"""

import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# -------------------------------------------------------------
# 1. UPDATE rules.html (34 Official Ashram Rules)
# -------------------------------------------------------------
def update_rules():
    r_path = os.path.join(BASE_DIR, "rules.html")
    
    html = r'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Official Ashram Rules & Regulations | Shiva Yoga Goa</title>
    <meta name="description" content="Official 34 Rules & Regulations for conscious community living, yoga shala discipline, and spiritual growth at Shiva Yoga in Arambol, Goa.">
    <meta name="keywords" content="Ashram Rules Goa, Yoga Code of Conduct India, Ashram Etiquette Goa, Shiva Yoga Ashram Guidelines">
    <link rel="canonical" href="https://shivaretreats.vercel.app/rules.html">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://shivaretreats.vercel.app/rules.html">
    <meta property="og:title" content="Official Ashram Rules & Regulations | Shiva Yoga Goa">
    <meta property="og:description" content="Guidelines and 34 rules for conscious ashram living and yoga discipline in Arambol, Goa.">
    <meta property="og:image" content="https://shivaretreats.vercel.app/assets/images/hero-new-1.jpg">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500;600;700;800&family=Marcellus&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="assets/images/logo-dark.png" type="image/png">
</head>
<body>

    <!-- Universal Sticky Luxury Header -->
    <header class="site-header">
        <div class="container header-container">
            <div class="logo">
                <a href="index.html" class="logo-link">
                    <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="48" height="48">
                    <div>
                        <span class="logo-text">Shiva Yoga</span>
                        <span class="logo-subtext">Arambol, Goa</span>
                    </div>
                </a>
            </div>

            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="has-dropdown">
                        <a href="all-courses.html">Courses &amp; TTC <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="courses/200-hr-ttc.html">200-Hour Yoga TTC</a></li>
                            <li><a href="courses/300-hr-ttc.html">300-Hour Advanced TTC</a></li>
                            <li><a href="courses/yin-yoga-ttc.html">50-Hour Yin Yoga TTC</a></li>
                            <li><a href="courses/sound-healing-ttc.html">50-Hour Sound Healing TTC</a></li>
                            <li><a href="courses/aerial-yoga-ttc.html">50-Hour Aerial Yoga TTC</a></li>
                            <li><a href="courses/prenatal-yoga-ttc.html">Prenatal Yoga TTC</a></li>
                            <li><a href="courses/spanish-yoga-ttc.html">TTC en Espa&ntilde;ol</a></li>
                            <li><a href="all-courses.html" style="font-weight: 700; color: var(--color-gold);">View All 16 Programs &rarr;</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="#">Retreats &amp; Stay <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="yoga-and-stay.html">Yoga &amp; Stay / Coliving</a></li>
                            <li><a href="courses/yoga-retreats.html">3/5/7/9-Day Yoga Retreats</a></li>
                            <li><a href="courses/ayurveda.html">Ayurveda Healing Course</a></li>
                            <li><a href="food-accommodation.html">Food &amp; Eco-Cottages</a></li>
                            <li><a href="dharamshala-ashram.html">Dharamshala Summer Ashram</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="#">Ashram &amp; Info <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="free-community-yoga.html">Free Community Yoga</a></li>
                            <li><a href="about.html">About Ashram &amp; Masters</a></li>
                            <li><a href="important-info.html">Travel &amp; Visa Guide</a></li>
                            <li><a href="rules.html">Ashram Rules &amp; Code</a></li>
                            <li><a href="gallery.html">Photo &amp; Video Gallery</a></li>
                            <li><a href="blog/index.html">Wellness Blog Hub</a></li>
                        </ul>
                    </li>
                    <li><a href="payment-details.html">Payment Info</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            <div class="header-right">
                <a href="booking.html" class="btn btn-gold btn-sm"><i class="fas fa-check-circle"></i> Book Now</a>
            </div>
            <button class="mobile-toggle" aria-label="Toggle navigation menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main>
        <section class="section-spacing-sm bg-sand text-center" style="padding-top: 110px;">
            <div class="container">
                <span class="section-subtitle">Terms &amp; Conditions to Join Shiva Yoga</span>
                <h1 class="section-title">Ashram Rules &amp; Regulations</h1>
                <p class="lead" style="max-width: 760px; margin: 0 auto;">
                    <strong>Namaste!</strong> We are delighted to have you as part of Shiva Yoga. This Shala was created with a lot of positive energy and love. Please carefully read and follow these 34 rules to preserve peace and harmony.
                </p>
            </div>
        </section>

        <section class="section-spacing">
            <div class="container-narrow">
                
                <!-- Categorized Rules Cards -->
                
                <!-- Category 1: Dormitory & Living Discipline -->
                <div style="background: #fff; border-radius: var(--radius-lg); padding: 35px; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); margin-bottom: 25px;">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-bed" style="color: var(--color-gold);"></i> 1. Dormitory, Silence &amp; Living Spaces
                    </h3>
                    <ul style="line-height: 1.8; color: var(--color-text); padding-left: 20px;">
                        <li style="margin-bottom: 8px;"><strong>Rule 1:</strong> Please keep your surroundings clean and neat.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 2:</strong> Turn off lights and fans when not in use.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 3:</strong> Please do not put dirty feet on the bedsheets.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 4:</strong> Use the dustbin.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 5:</strong> Lights will be turned off at 10 PM, and no noise should be made after that.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 6:</strong> Please use Bluetooth or headphones to avoid disturbing others.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 7:</strong> Do not eat inside the dorm.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 10:</strong> Dorm is akin to yoga ashrams, so please maintain complete silence. Avoid talking on your phone and avoid talking to each other inside the dorm; only whisper when necessary.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 11:</strong> Please take care of your belongings. The Shiva Yoga team is not responsible for them.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 26:</strong> Access to the dorm is restricted to residents only; outsiders are not permitted.</li>
                    </ul>
                </div>

                <!-- Category 2: Cleanliness, Washroom & Laundry -->
                <div style="background: #fff; border-radius: var(--radius-lg); padding: 35px; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); margin-bottom: 25px;">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-tint" style="color: var(--color-sage);"></i> 2. Hygiene, Washroom &amp; Laundry
                    </h3>
                    <ul style="line-height: 1.8; color: var(--color-text); padding-left: 20px;">
                        <li style="margin-bottom: 8px;"><strong>Rule 12:</strong> Keep the washroom clean.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 13:</strong> Please use water if you enter the washroom with dirty feet.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 14:</strong> Turn off the tap when it is not in use.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 15:</strong> There will be extra charges for laundry.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 16:</strong> Be punctual for laundry and take your clothes out promptly.</li>
                    </ul>
                </div>

                <!-- Category 3: Food & Dining Etiquette -->
                <div style="background: #fff; border-radius: var(--radius-lg); padding: 35px; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); margin-bottom: 25px;">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-utensils" style="color: var(--color-gold);"></i> 3. Food &amp; Dining Discipline
                    </h3>
                    <ul style="line-height: 1.8; color: var(--color-text); padding-left: 20px;">
                        <li style="margin-bottom: 8px;"><strong>Rule 17:</strong> Do not waste food.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 18:</strong> Food will be self-service.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 19:</strong> Please wash your plates and glasses after using them.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 20:</strong> Eat your Food in the specified place.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 33:</strong> Only vegetarian food is permitted.</li>
                    </ul>
                </div>

                <!-- Category 4: Yoga Shala, Classes & Attendance -->
                <div style="background: #fff; border-radius: var(--radius-lg); padding: 35px; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); margin-bottom: 25px;">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-om" style="color: var(--color-primary);"></i> 4. Yoga Shala &amp; Course Discipline
                    </h3>
                    <ul style="line-height: 1.8; color: var(--color-text); padding-left: 20px;">
                        <li style="margin-bottom: 8px;"><strong>Rule 21:</strong> We value your consent for content creation. If you are not comfortable with photos or videos, please inform us in advance.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 22:</strong> If you are not comfortable with physical adjustments and alignment of asanas, please inform us in advance.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 23:</strong> Please clean the mats after class and roll them up for storage.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 24:</strong> Keep your footwear outside; footwear is not allowed inside the Shala.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 27:</strong> 90% attendance is compulsory for the course, except in cases of sickness.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 30:</strong> If you are unable to attend the class due to illness, please inform the respective teacher or drop a message in the WhatsApp group in advance.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 32:</strong> The course fee is non-refundable once paid.</li>
                    </ul>
                </div>

                <!-- Category 5: Ashram Conduct, Code & Curfew -->
                <div style="background: #fff; border-radius: var(--radius-lg); padding: 35px; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); margin-bottom: 30px;">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-shield-alt" style="color: var(--color-terracotta);"></i> 5. Conduct, Safety &amp; Curfew
                    </h3>
                    <ul style="line-height: 1.8; color: var(--color-text); padding-left: 20px;">
                        <li style="margin-bottom: 8px;"><strong>Rule 8:</strong> Smoking and drinking are not allowed.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 9:</strong> Any individual from Shiva Yoga who stays in the house and misbehaves, disrespects others, smokes, or drinks on the premises can be immediately removed without prior warning.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 25:</strong> Don't bring outsiders into and around the shala. Engaging in conversations and forming close connections with partners within the Shiva Yoga premises is strictly prohibited.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 28:</strong> Conversation and discussion about alcohol, drugs, and any substances around the shala is prohibited.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 29:</strong> If you go outside, please return before 10:30 PM.</li>
                        <li style="margin-bottom: 8px;"><strong>Rule 34:</strong> This Shala was created with a lot of positive energy and love, so please respect the space. Thank you for joining our team!</li>
                    </ul>
                </div>

                <div style="text-align: center;">
                    <a href="booking.html" class="btn btn-gold btn-lg"><i class="fas fa-check-circle"></i> Agree &amp; Book Your Course &rarr;</a>
                </div>

            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="48" height="48" style="background: white; border-radius: 50%; padding: 4px;">
                        <h4 style="margin-bottom: 0; padding-bottom: 0;">Shiva Yoga Goa</h4>
                    </div>
                    <p style="color: rgba(251,248,241,0.8); font-size: 0.95rem; margin-bottom: 20px;">
                        Internationally accredited Yoga Teacher Training Center &amp; Spiritual Retreat Ashram in Arambol, Goa, India. Certified by Yoga Alliance USA.
                    </p>
                    <div class="footer-social-links">
                        <a href="https://www.instagram.com/shivayoga.goa" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/share/16u5TC2qNN/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://youtube.com/@shivaretreats" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>All TTC Programs</h4>
                    <ul>
                        <li><a href="courses/200-hr-ttc.html">200-Hour Yoga TTC</a></li>
                        <li><a href="courses/300-hr-ttc.html">300-Hour Yoga TTC</a></li>
                        <li><a href="courses/sound-healing-ttc.html">Sound Healing TTC</a></li>
                        <li><a href="courses/aerial-yoga-ttc.html">Aerial Yoga TTC</a></li>
                        <li><a href="courses/prenatal-yoga-ttc.html">Prenatal Yoga TTC</a></li>
                        <li><a href="courses/spanish-yoga-ttc.html">TTC en Espa&ntilde;ol</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="about.html">About Ashram</a></li>
                        <li><a href="food-accommodation.html">Food &amp; Accommodation</a></li>
                        <li><a href="payment-details.html">Payment Details</a></li>
                        <li><a href="important-info.html">Travel &amp; Visa Guide</a></li>
                        <li><a href="rules.html">Ashram Rules</a></li>
                        <li><a href="terms.html">Terms &amp; Cancellation</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <ul class="footer-contact-list">
                        <li><i class="fas fa-map-marker-alt"></i> <span>Arambol Beach, North Goa, Goa 403519, India</span></li>
                        <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/917411924193" target="_blank">+91 74119 24193</a></li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:contact@shivaretreats.com">contact@shivaretreats.com</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="copyright">&copy; 2026 Shiva Yoga Goa. All Rights Reserved.</div>
                <div class="footer-links">
                    <a href="terms.html">Terms</a> &bull;
                    <a href="privacy-policy.html">Privacy</a> &bull;
                    <a href="sitemap.xml">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="floating-actions">
        <a href="https://wa.me/917411924193?text=Namaste!%20I%20have%20an%20inquiry%20about%20Shiva%20Yoga%20Goa" target="_blank" class="floating-whatsapp" aria-label="WhatsApp Us">
            <i class="fab fa-whatsapp"></i>
            <span>Chat With Us</span>
        </a>
    </div>

    <script src="js/script.js"></script>
</body>
</html>'''

    with open(r_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Updated rules.html with 34 official rules")


# -------------------------------------------------------------
# 2. UPDATE terms.html (Terms & Conditions and Cancellation)
# -------------------------------------------------------------
def update_terms():
    t_path = os.path.join(BASE_DIR, "terms.html")
    
    html = r'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms &amp; Conditions | Cancellation Policy | Shiva Yoga Goa</title>
    <meta name="description" content="Official Terms and Conditions, payment transaction fees, cancellation and transfer policy for Shiva Yoga Teacher Training Courses and Retreats in Arambol, Goa.">
    <meta name="keywords" content="Shiva Yoga Terms, Yoga TTC Cancellation Goa, Deposit Refund Policy Yoga India, Shiva Yoga Agreement">
    <link rel="canonical" href="https://shivaretreats.vercel.app/terms.html">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://shivaretreats.vercel.app/terms.html">
    <meta property="og:title" content="Terms &amp; Conditions | Shiva Yoga Goa">
    <meta property="og:description" content="Official terms, payment terms, and deposit policies at Shiva Yoga in Arambol, Goa.">
    <meta property="og:image" content="https://shivaretreats.vercel.app/assets/images/hero-new-1.jpg">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500;600;700;800&family=Marcellus&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="assets/images/logo-dark.png" type="image/png">
</head>
<body>

    <!-- Header -->
    <header class="site-header">
        <div class="container header-container">
            <div class="logo">
                <a href="index.html" class="logo-link">
                    <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="48" height="48">
                    <div>
                        <span class="logo-text">Shiva Yoga</span>
                        <span class="logo-subtext">Arambol, Goa</span>
                    </div>
                </a>
            </div>

            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="has-dropdown">
                        <a href="all-courses.html">Courses &amp; TTC <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="courses/200-hr-ttc.html">200-Hour Yoga TTC</a></li>
                            <li><a href="courses/300-hr-ttc.html">300-Hour Advanced TTC</a></li>
                            <li><a href="courses/yin-yoga-ttc.html">50-Hour Yin Yoga TTC</a></li>
                            <li><a href="courses/sound-healing-ttc.html">50-Hour Sound Healing TTC</a></li>
                            <li><a href="courses/aerial-yoga-ttc.html">50-Hour Aerial Yoga TTC</a></li>
                            <li><a href="courses/prenatal-yoga-ttc.html">Prenatal Yoga TTC</a></li>
                            <li><a href="courses/spanish-yoga-ttc.html">TTC en Espa&ntilde;ol</a></li>
                            <li><a href="all-courses.html" style="font-weight: 700; color: var(--color-gold);">View All 16 Programs &rarr;</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="#">Retreats &amp; Stay <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="yoga-and-stay.html">Yoga &amp; Stay / Coliving</a></li>
                            <li><a href="courses/yoga-retreats.html">3/5/7/9-Day Yoga Retreats</a></li>
                            <li><a href="courses/ayurveda.html">Ayurveda Healing Course</a></li>
                            <li><a href="food-accommodation.html">Food &amp; Eco-Cottages</a></li>
                            <li><a href="dharamshala-ashram.html">Dharamshala Summer Ashram</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="#">Ashram &amp; Info <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="free-community-yoga.html">Free Community Yoga</a></li>
                            <li><a href="about.html">About Ashram &amp; Masters</a></li>
                            <li><a href="important-info.html">Travel &amp; Visa Guide</a></li>
                            <li><a href="rules.html">Ashram Rules &amp; Code</a></li>
                            <li><a href="gallery.html">Photo &amp; Video Gallery</a></li>
                            <li><a href="blog/index.html">Wellness Blog Hub</a></li>
                        </ul>
                    </li>
                    <li><a href="payment-details.html">Payment Info</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            <div class="header-right">
                <a href="booking.html" class="btn btn-gold btn-sm"><i class="fas fa-check-circle"></i> Book Now</a>
            </div>
            <button class="mobile-toggle" aria-label="Toggle navigation menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main>
        <section class="section-spacing-sm bg-sand text-center" style="padding-top: 110px;">
            <div class="container">
                <span class="section-subtitle">Legal &amp; Policy Guidelines</span>
                <h1 class="section-title">Terms &amp; Conditions</h1>
                <p class="lead" style="max-width: 720px; margin: 0 auto;">
                    Please read the official terms, registration, payment policies, and cancellation conditions for Shiva Yoga in Arambol, Goa.
                </p>
            </div>
        </section>

        <section class="section-spacing">
            <div class="container-narrow">
                <div style="background: white; padding: 40px; border-radius: var(--radius-lg); border: 1px solid var(--color-border); line-height: 1.8;">

                    <div style="margin-bottom: 30px;">
                        <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 12px;">1. Our Ideology</h3>
                        <p style="color: var(--color-text-muted);">
                            &ldquo;Our ideology isn't just about a yoga course; it's a once-in-a-lifetime experience, an extraordinary fusion of wisdom and wellness. Discover a realm beyond traditional Yoga schools; at Shiva Yoga, we redefine the essence of your transformative yoga odyssey.&rdquo;
                        </p>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 12px;">2. Course Schedule &amp; Batches</h3>
                        <ul style="color: var(--color-text-muted); padding-left: 20px;">
                            <li><strong>Start Date:</strong> The course starts on the <strong>2nd of every month</strong> unless you choose to do Flexible TTC.</li>
                            <li><strong>Batch Structure:</strong> Each course has 2 batches with 15–20 student capacity per batch:
                                <ul style="margin-top: 6px;">
                                    <li><em>Batch 1:</em> Beginners Batch (100, 200 hrs and Retreat students)</li>
                                    <li><em>Batch 2:</em> Advanced Batch (200, 300 hrs and intermediate students)</li>
                                </ul>
                            </li>
                            <li>This split is applicable when we have more than 20 students in total; otherwise, the course runs combined.</li>
                            <li>Anatomy, Philosophy, Ayurveda, Adjustment, and Alignment classes run separately for Batch 1 and Batch 2, while Asana, outings, and workshops practice are held together.</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 12px;">3. Package Inclusions &amp; Stay</h3>
                        <ul style="color: var(--color-text-muted); padding-left: 20px;">
                            <li>The package includes accommodation for the entire duration of the course, along with <strong>one complimentary night</strong> either before the start date or on the final day.</li>
                            <li><strong>Check-in / Check-out:</strong> Check-in begins at <strong>10:00 AM</strong>, and the latest check-out time is <strong>2:00 PM</strong>.</li>
                            <li>The package offers food for the entire course, including a welcome and farewell dinner, as well as unlimited filtered water except Sundays.</li>
                            <li>Students who check-in a few days early or stay a few days after the course may receive a discounted rate per night depending on availability.</li>
                            <li>If a student arrives later than the course start date or leaves before the course completion date, no accommodation or food charges will be adjusted, and the course package fee remains the same.</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 12px;">4. Deposit, Payments &amp; Transaction Fees</h3>
                        <ul style="color: var(--color-text-muted); padding-left: 20px;">
                            <li><strong>Initial Deposit:</strong> An advance deposit is required to confirm your seat. Course fees, including the initial deposit, are non-refundable and non-transferable to another person but <strong>can be transferred to another date or future course with Shiva Yoga</strong>.</li>
                            <li><strong>Payment Fees:</strong>
                                <ul>
                                    <li>PayPal: An additional <strong>5% transaction fee</strong> applies.</li>
                                    <li>Swipe Machine / Card: An additional <strong>3% transaction fee</strong> applies.</li>
                                    <li>Cash: <strong>We only accept INR (Indian Rupees)</strong> for cash payments.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 12px;">5. Cancellation &amp; Refund Policy</h3>
                        <ul style="color: var(--color-text-muted); padding-left: 20px;">
                            <li>There are <strong>no refunds, credits, or transfers</strong> available for cancellations after the start date of any Yoga Teacher Training Course or Retreat.</li>
                            <li>All package charges are non-refundable, non-changeable, and non-interchangeable once a student joins the course.</li>
                            <li>Insurance travel expenditures and flight tickets are not included in the TTC fee.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 12px;">6. Chargeable Extra Services</h3>
                        <ul style="color: var(--color-text-muted); padding-left: 20px;">
                            <li><strong>Taxi on Call:</strong> Available at extra cost by a trusted taxi service.</li>
                            <li><strong>Laundry Service:</strong> Available on campus (chargeable).</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="48" height="48" style="background: white; border-radius: 50%; padding: 4px;">
                        <h4 style="margin-bottom: 0; padding-bottom: 0;">Shiva Yoga Goa</h4>
                    </div>
                    <p style="color: rgba(251,248,241,0.8); font-size: 0.95rem; margin-bottom: 20px;">
                        Internationally accredited Yoga Teacher Training Center &amp; Spiritual Retreat Ashram in Arambol, Goa, India. Certified by Yoga Alliance USA.
                    </p>
                    <div class="footer-social-links">
                        <a href="https://www.instagram.com/shivayoga.goa" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/share/16u5TC2qNN/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://youtube.com/@shivaretreats" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>All TTC Programs</h4>
                    <ul>
                        <li><a href="courses/200-hr-ttc.html">200-Hour Yoga TTC</a></li>
                        <li><a href="courses/300-hr-ttc.html">300-Hour Yoga TTC</a></li>
                        <li><a href="courses/sound-healing-ttc.html">Sound Healing TTC</a></li>
                        <li><a href="courses/aerial-yoga-ttc.html">Aerial Yoga TTC</a></li>
                        <li><a href="courses/prenatal-yoga-ttc.html">Prenatal Yoga TTC</a></li>
                        <li><a href="courses/spanish-yoga-ttc.html">TTC en Espa&ntilde;ol</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="about.html">About Ashram</a></li>
                        <li><a href="food-accommodation.html">Food &amp; Accommodation</a></li>
                        <li><a href="payment-details.html">Payment Details</a></li>
                        <li><a href="important-info.html">Travel &amp; Visa Guide</a></li>
                        <li><a href="rules.html">Ashram Rules</a></li>
                        <li><a href="terms.html">Terms &amp; Cancellation</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <ul class="footer-contact-list">
                        <li><i class="fas fa-map-marker-alt"></i> <span>Arambol Beach, North Goa, Goa 403519, India</span></li>
                        <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/917411924193" target="_blank">+91 74119 24193</a></li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:contact@shivaretreats.com">contact@shivaretreats.com</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="copyright">&copy; 2026 Shiva Yoga Goa. All Rights Reserved.</div>
                <div class="footer-links">
                    <a href="terms.html">Terms</a> &bull;
                    <a href="privacy-policy.html">Privacy</a> &bull;
                    <a href="sitemap.xml">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="floating-actions">
        <a href="https://wa.me/917411924193?text=Namaste!%20I%20have%20an%20inquiry%20about%20Shiva%20Yoga%20Goa" target="_blank" class="floating-whatsapp" aria-label="WhatsApp Us">
            <i class="fab fa-whatsapp"></i>
            <span>Chat With Us</span>
        </a>
    </div>

    <script src="js/script.js"></script>
</body>
</html>'''

    with open(t_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Updated terms.html with official cancellation & payment policies")


# -------------------------------------------------------------
# 3. UPDATE important-info.html (Inclusions & What to Carry)
# -------------------------------------------------------------
def update_important_info():
    info_path = os.path.join(BASE_DIR, "important-info.html")
    
    html = r'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Important Information &amp; What to Pack | Shiva Yoga Goa</title>
    <meta name="description" content="Official course inclusions, packing list, things to carry, check-in/check-out timings, and campus details for Yoga TTC and Retreats at Shiva Yoga Goa.">
    <meta name="keywords" content="What to Pack Yoga TTC Goa, Yoga Packing List India, Shiva Yoga Inclusions, Travel Guide Arambol">
    <link rel="canonical" href="https://shivaretreats.vercel.app/important-info.html">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://shivaretreats.vercel.app/important-info.html">
    <meta property="og:title" content="Important Information &amp; Packing List | Shiva Yoga Goa">
    <meta property="og:description" content="Official inclusions, packing list, and preparation guide for your Yoga journey in Goa.">
    <meta property="og:image" content="https://shivaretreats.vercel.app/assets/images/hero-new-1.jpg">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500;600;700;800&family=Marcellus&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="assets/images/logo-dark.png" type="image/png">
</head>
<body>

    <!-- Header -->
    <header class="site-header">
        <div class="container header-container">
            <div class="logo">
                <a href="index.html" class="logo-link">
                    <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="48" height="48">
                    <div>
                        <span class="logo-text">Shiva Yoga</span>
                        <span class="logo-subtext">Arambol, Goa</span>
                    </div>
                </a>
            </div>

            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="has-dropdown">
                        <a href="all-courses.html">Courses &amp; TTC <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="courses/200-hr-ttc.html">200-Hour Yoga TTC</a></li>
                            <li><a href="courses/300-hr-ttc.html">300-Hour Advanced TTC</a></li>
                            <li><a href="courses/yin-yoga-ttc.html">50-Hour Yin Yoga TTC</a></li>
                            <li><a href="courses/sound-healing-ttc.html">50-Hour Sound Healing TTC</a></li>
                            <li><a href="courses/aerial-yoga-ttc.html">50-Hour Aerial Yoga TTC</a></li>
                            <li><a href="courses/prenatal-yoga-ttc.html">Prenatal Yoga TTC</a></li>
                            <li><a href="courses/spanish-yoga-ttc.html">TTC en Espa&ntilde;ol</a></li>
                            <li><a href="all-courses.html" style="font-weight: 700; color: var(--color-gold);">View All 16 Programs &rarr;</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="#">Retreats &amp; Stay <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="yoga-and-stay.html">Yoga &amp; Stay / Coliving</a></li>
                            <li><a href="courses/yoga-retreats.html">3/5/7/9-Day Yoga Retreats</a></li>
                            <li><a href="courses/ayurveda.html">Ayurveda Healing Course</a></li>
                            <li><a href="food-accommodation.html">Food &amp; Eco-Cottages</a></li>
                            <li><a href="dharamshala-ashram.html">Dharamshala Summer Ashram</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="#">Ashram &amp; Info <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                        <ul class="dropdown">
                            <li><a href="free-community-yoga.html">Free Community Yoga</a></li>
                            <li><a href="about.html">About Ashram &amp; Masters</a></li>
                            <li><a href="important-info.html">Travel &amp; Visa Guide</a></li>
                            <li><a href="rules.html">Ashram Rules &amp; Code</a></li>
                            <li><a href="gallery.html">Photo &amp; Video Gallery</a></li>
                            <li><a href="blog/index.html">Wellness Blog Hub</a></li>
                        </ul>
                    </li>
                    <li><a href="payment-details.html">Payment Info</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            <div class="header-right">
                <a href="booking.html" class="btn btn-gold btn-sm"><i class="fas fa-check-circle"></i> Book Now</a>
            </div>
            <button class="mobile-toggle" aria-label="Toggle navigation menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main>
        <section class="section-spacing-sm bg-sand text-center" style="padding-top: 110px;">
            <div class="container">
                <span class="section-subtitle">Student Handbook</span>
                <h1 class="section-title">Important Information &amp; Things to Carry</h1>
                <p class="lead" style="max-width: 720px; margin: 0 auto;">
                    Everything you need to know about course inclusions, what to pack, check-in logistics, and preparing for your transformative yoga journey.
                </p>
            </div>
        </section>

        <section class="section-spacing">
            <div class="container-narrow">
                
                <!-- Inclusions Card -->
                <div style="background: white; padding: 35px; border-radius: var(--radius-lg); border: 1px solid var(--color-border); margin-bottom: 30px; box-shadow: var(--shadow-sm);">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-gift" style="color: var(--color-gold);"></i> What the Course Fee Includes
                    </h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Comprehensive Tuition &amp; Certification</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Printed Teacher Training Manual</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Shiva Yoga Custom Eco Bag</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Shiva Yoga Organic T-Shirt</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Accommodation for full course duration</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>1 Complimentary Extra Night (before or after)</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>3 Daily Organic Sattvic Vegetarian Meals</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Welcome &amp; Farewell Community Dinners</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Unlimited Filtered Drinking Water (Mon–Sat)</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>High-Speed WiFi-Enabled Campus</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Daily Room &amp; Campus Cleaning</span>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--color-sage); margin-top: 4px;"></i>
                            <span>Full Access to Yoga Alliance Curriculum</span>
                        </div>
                    </div>
                </div>

                <!-- Things to Carry (Packing List) -->
                <div style="background: white; padding: 35px; border-radius: var(--radius-lg); border: 1px solid var(--color-border); margin-bottom: 30px; box-shadow: var(--shadow-sm);">
                    <h3 style="color: var(--color-primary); font-family: 'Marcellus', serif; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-suitcase-rolling" style="color: var(--color-gold);"></i> Things to Carry to Shiva Yoga
                    </h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 18px; line-height: 1.7;">
                        <div>
                            <strong style="color: var(--color-primary);"><i class="fas fa-mat" style="margin-right: 6px;"></i> Yoga Mat:</strong>
                            <p style="margin: 3px 0 0; color: var(--color-text-muted);">Bring your personal yoga mat for use during the training. If you prefer to travel light, we will provide a sanitized ashram mat for you.</p>
                        </div>
                        <div>
                            <strong style="color: var(--color-primary);"><i class="fas fa-tshirt" style="margin-right: 6px;"></i> Comfortable Attire &amp; White Clothing:</strong>
                            <p style="margin: 3px 0 0; color: var(--color-text-muted);">Wear loose-fitting, breathable, comfortable clothes suitable for intensive yoga practice. Additionally, please bring <strong>white attire</strong> for traditional opening/closing ceremonies.</p>
                        </div>
                        <div>
                            <strong style="color: var(--color-primary);"><i class="fas fa-bottle-water" style="margin-right: 6px;"></i> Refillable Water Bottle:</strong>
                            <p style="margin: 3px 0 0; color: var(--color-text-muted);">Stay hydrated throughout the day by bringing a reusable water bottle. Filtered UV/RO water is available on tap across campus.</p>
                        </div>
                        <div>
                            <strong style="color: var(--color-primary);"><i class="fas fa-pen" style="margin-right: 6px;"></i> Writing Materials:</strong>
                            <p style="margin: 3px 0 0; color: var(--color-text-muted);">Bring a notebook and pen for note-taking during lectures, philosophy discussions, anatomy sessions, and teaching methodology workshops.</p>
                        </div>
                        <div>
                            <strong style="color: var(--color-primary);"><i class="fas fa-pump-soap" style="margin-right: 6px;"></i> Personal Essentials &amp; Items:</strong>
                            <p style="margin: 3px 0 0; color: var(--color-text-muted);">Pack your essentials including toiletries, towels, a light jacket/shawl for cooler evenings, lightweight/dry-fit clothes, a flashlight/torch, mosquito repellent, an international plug adapter, vitamins/personal medications, earbuds, and small sweat towels for asana practice.</p>
                        </div>
                    </div>
                </div>

                <!-- Check-in & Logistics -->
                <div style="background: var(--color-sand); padding: 30px; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 30px;">
                    <h4 style="color: var(--color-primary); margin-bottom: 12px;"><i class="fas fa-clock" style="color: var(--color-gold); margin-right: 8px;"></i> Check-in &amp; Check-out Timings</h4>
                    <p style="color: var(--color-text-muted); margin-bottom: 0; line-height: 1.8;">
                        &bull; <strong>Check-in:</strong> Begins at <strong>10:00 AM</strong> on your arrival day.<br>
                        &bull; <strong>Check-out:</strong> Latest check-out time is <strong>2:00 PM</strong> on departure day.<br>
                        &bull; <strong>Early/Late Stays:</strong> Students who arrive earlier or stay longer can request discounted night extensions (subject to cottage availability).
                    </p>
                </div>

                <div style="text-align: center;">
                    <a href="booking.html" class="btn btn-gold btn-lg"><i class="fas fa-check-circle"></i> Reserve Your Spot Today &rarr;</a>
                </div>

            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="48" height="48" style="background: white; border-radius: 50%; padding: 4px;">
                        <h4 style="margin-bottom: 0; padding-bottom: 0;">Shiva Yoga Goa</h4>
                    </div>
                    <p style="color: rgba(251,248,241,0.8); font-size: 0.95rem; margin-bottom: 20px;">
                        Internationally accredited Yoga Teacher Training Center &amp; Spiritual Retreat Ashram in Arambol, Goa, India. Certified by Yoga Alliance USA.
                    </p>
                    <div class="footer-social-links">
                        <a href="https://www.instagram.com/shivayoga.goa" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/share/16u5TC2qNN/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://youtube.com/@shivaretreats" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>All TTC Programs</h4>
                    <ul>
                        <li><a href="courses/200-hr-ttc.html">200-Hour Yoga TTC</a></li>
                        <li><a href="courses/300-hr-ttc.html">300-Hour Yoga TTC</a></li>
                        <li><a href="courses/sound-healing-ttc.html">Sound Healing TTC</a></li>
                        <li><a href="courses/aerial-yoga-ttc.html">Aerial Yoga TTC</a></li>
                        <li><a href="courses/prenatal-yoga-ttc.html">Prenatal Yoga TTC</a></li>
                        <li><a href="courses/spanish-yoga-ttc.html">TTC en Espa&ntilde;ol</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="about.html">About Ashram</a></li>
                        <li><a href="food-accommodation.html">Food &amp; Accommodation</a></li>
                        <li><a href="payment-details.html">Payment Details</a></li>
                        <li><a href="important-info.html">Travel &amp; Visa Guide</a></li>
                        <li><a href="rules.html">Ashram Rules</a></li>
                        <li><a href="terms.html">Terms &amp; Cancellation</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <ul class="footer-contact-list">
                        <li><i class="fas fa-map-marker-alt"></i> <span>Arambol Beach, North Goa, Goa 403519, India</span></li>
                        <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/917411924193" target="_blank">+91 74119 24193</a></li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:contact@shivaretreats.com">contact@shivaretreats.com</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="copyright">&copy; 2026 Shiva Yoga Goa. All Rights Reserved.</div>
                <div class="footer-links">
                    <a href="terms.html">Terms</a> &bull;
                    <a href="privacy-policy.html">Privacy</a> &bull;
                    <a href="sitemap.xml">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="floating-actions">
        <a href="https://wa.me/917411924193?text=Namaste!%20I%20have%20an%20inquiry%20about%20Shiva%20Yoga%20Goa" target="_blank" class="floating-whatsapp" aria-label="WhatsApp Us">
            <i class="fab fa-whatsapp"></i>
            <span>Chat With Us</span>
        </a>
    </div>

    <script src="js/script.js"></script>
</body>
</html>'''

    with open(info_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Updated important-info.html with official inclusions & packing list")


if __name__ == "__main__":
    update_rules()
    update_terms()
    update_important_info()
    print("Official content synchronization complete!")
