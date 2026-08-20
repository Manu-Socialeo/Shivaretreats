/**
 * Vercel Serverless Function: /api/chat
 * Shiva Yoga AI Admissions & Ashram Concierge
 * 
 * Supports:
 * 1. Google Gemini API (GEMINI_API_KEY)
 * 2. OpenAI API (OPENAI_API_KEY)
 * 3. Built-in Ashram Knowledge Engine (Instant Fallback if no API key is provided)
 */

const SHIVA_YOGA_KNOWLEDGE = `
You are the official AI Admissions Concierge and Ashram Guide for "Shiva Yoga Goa" (also known as Shiva Retreats), located at Arambol Beach, North Goa, India (and summer campus in Dharamshala, Himalayas).

Certified By: Yoga Alliance USA (200 RYT & 500 RYT).
Website: https://shivaretreats.vercel.app
WhatsApp / Phone: +91 74119 24193
Admissions Email: contact@shivaretreats.com

OFFICIAL PRICING & ROOM TYPES (EUR):
1. 200-Hour Multi-Style Yoga TTC (21 Days) - Most Popular:
   - Dorm (3-4 same gender): 999€ (~₹90,000)
   - Private Room: 1599€ (~₹1,44,000)
   - Twin Sharing (2 people): 2399€ (~₹2,16,000)
2. 300-Hour Advanced Yoga TTC (29 Days):
   - Dorm: 1199€ | Private: 1799€ | Twin Sharing: 2999€
3. 50-Hour Yin Yoga TTC (6 Days):
   - Dorm: 599€ | Private: 899€ | Twin Sharing: 1299€
4. 50-Hour Ayurveda & Yogic Lifestyle (6 Days):
   - Dorm: 599€ | Private: 899€ | Twin Sharing: 1299€
5. 100-Hour Modular Yoga TTC (11 Days):
   - Dorm: 599€ | Private: 999€ | Twin Sharing: 1399€
6. 50-Hour Prenatal Yoga TTC (6 Days):
   - Dorm: 599€ | Private: 899€ | Twin Sharing: 1299€
7. 50-Hour Sound Healing & 50-Hour Aerial Yoga TTC:
   - Dorm: 599€ | Private: 899€ | Twin Sharing: 1299€
8. 3 / 5 / 7 / 9 Days Yoga Retreats:
   - Dorm: 50€/day (3-Day: 150€, 5-Day: 250€, 7-Day: 350€, 9-Day: 450€)
   - Private: 100€/day (3-Day: 300€, 5-Day: 500€, 7-Day: 700€, 9-Day: 900€)
   - Twin Sharing: 150€/day for 2 people (3-Day: 450€, 5-Day: 750€, 7-Day: 1050€, 9-Day: 1350€)
9. Flexible 200 & 300 Hours TTC (Up to 30 Days):
   - Dorm: 1199€ | Private: 1799€ | Twin Sharing: 2999€

COURSE SCHEDULE & BATCHES:
- TTC courses start on the 2nd of every month (Oct to April in Goa; May to Sept in Dharamshala).
- Flexible TTC allows self-paced entry.
- 2 batches with 15-20 student capacity: Batch 1 (Beginners 100/200hr & Retreats), Batch 2 (Advanced 200/300hr).

PACKAGE INCLUSIONS:
- Full tuition & Yoga Alliance certificate
- Printed TTC Manual, Shiva Yoga Bag, Shiva Yoga Organic T-shirt
- Accommodation + 1 complimentary night (before or after course)
- 3 daily organic Sattvic vegetarian meals, welcome & farewell dinners
- Unlimited filtered UV/RO water (Mon-Sat)
- High-speed WiFi campus & daily room cleaning

CHECK-IN & CHECK-OUT:
- Check-in starts at 10:00 AM on arrival day.
- Check-out latest by 2:00 PM on departure day.

KEY ASHRAM RULES (34 Total):
- Strict 100% vegetarian food; no alcohol, no smoking, no drugs on premises.
- Quiet hours: Lights off at 10:00 PM; silence in dorms (whispering only).
- Outside curfew: If leaving campus, return before 10:30 PM.
- Shala: Keep footwear outside; clean mats after class.
- Attendance: 90% attendance mandatory for certification.
- Consent: Inform in advance if not comfortable with photos/videos or physical alignment adjustments.

PAYMENT & DEPOSITS:
- Deposit: €200 to €350 depending on program to lock seat online.
- Deposit policy: Non-refundable, but 100% transferable to any future batch or date with Shiva Yoga.
- Fees: 5% fee for PayPal, 3% for card swipe machine; cash accepted in INR only.
- Online booking URL: https://shivaretreats.vercel.app/booking.html

TONE & STYLE:
- Warm, welcoming, respectful, spiritual yet concise (Namaste 🙏).
- Always include helpful direct links when relevant (e.g. [Book Online](booking.html) or [WhatsApp Admissions](https://wa.me/917411924193)).
- Answer in the user's language (English, Spanish, German, French, etc.).
`;

// Helper: Intelligent Fallback Knowledge Matcher
function getFallbackResponse(userMsg) {
    const q = userMsg.toLowerCase();
    
        if (q.includes('kundalini') || q.includes('chakra') || q.includes('kriya')) {
        return "Namaste! 🙏 Our **Kundalini Yoga & Chakra Awakening Retreat** in Arambol, Goa is a transformative journey into Tantric Kriyas, Bija Mantras, energy locks (Bandhas), and 7-Chakra balancing:\n\n• **Dorm (3–4 same gender):** €599 (~₹54,000)\n• **Private Room:** €899\n• **Twin Sharing (2 people):** €1,299\n\nIncludes daily Kundalini kriyas, sound baths, sattvic meals, manual, and ashram cottage stay!\n\n👉 [View Kundalini Program Details](courses/kundalini-yoga.html) or [Book Kundalini Retreat](booking.html)";
    }

    if (q.includes('price') || q.includes('cost') || q.includes('fee') || q.includes('how much') || q.includes('charge') || q.includes('rate')) {
        if (q.includes('300')) {
            return "Namaste! 🙏 The **300-Hour Advanced Yoga TTC (29 Days)** fees are:\n\n• **Dorm (3–4 same gender):** €1,199\n• **Private Room:** €1,799\n• **Twin Sharing (2 people):** €2,999\n\nIncludes tuition, meals, manual, yoga bag, t-shirt, and accommodation + 1 complimentary night!\n\n👉 [Book 300-Hr TTC Now](booking.html) or [Chat with Admissions on WhatsApp](https://wa.me/917411924193)";
        }
        if (q.includes('50') || q.includes('yin') || q.includes('ayurveda') || q.includes('prenatal') || q.includes('sound') || q.includes('aerial')) {
            return "Namaste! 🙏 Our **50-Hour Specialized TTCs** (Yin Yoga, Ayurveda, Prenatal, Sound Healing & Aerial Yoga - 6 to 7 Days) fees are:\n\n• **Dorm (3–4 same gender):** €599\n• **Private Room:** €899\n• **Twin Sharing (2 people):** €1,299\n\n👉 [Reserve Your 50-Hr TTC Spot](booking.html)";
        }
        if (q.includes('retreat')) {
            return "Namaste! 🙏 Our **Yoga Retreats** pricing in Arambol, Goa:\n\n• **Dorm:** €50 / day (3-Day: €150 | 5-Day: €250 | 7-Day: €350 | 9-Day: €450)\n• **Private Room:** €100 / day (3-Day: €300 | 5-Day: €500 | 7-Day: €700 | 9-Day: €900)\n• **Twin Sharing (2 people):** €150 / day (3-Day: €450 | 5-Day: €750 | 7-Day: €1,050)\n\n👉 [Book Your Yoga Retreat](booking.html)";
        }
        return "Namaste! 🙏 Here is our official course fee schedule:\n\n• ⭐ **200-Hr Multi-Style TTC (21 Days):** Dorm €999 | Private €1,599 | Twin €2,399\n• **300-Hr Advanced TTC (29 Days):** Dorm €1,199 | Private €1,799 | Twin €2,999\n• **50-Hr TTCs (Yin / Ayurveda / Prenatal / Sound):** Dorm €599 | Private €899 | Twin €1,299\n• **100-Hr Modular TTC (11 Days):** Dorm €599 | Private €999 | Twin €1,399\n• **Yoga Retreats:** From €50/day (Dorm) to €100/day (Private)\n\nAll packages include tuition, meals, manual, yoga kit & stay!\n\n👉 [View Live Fee Calculator & Book](booking.html)";
    }

    if (q.includes('date') || q.includes('when') || q.includes('start') || q.includes('schedule') || q.includes('month') || q.includes('batch')) {
        return "Namaste! 🙏 All our Yoga Teacher Training Courses start on the **2nd of every month**:\n\n• **Goa Beach Campus:** October through April\n• **Dharamshala Mountain Campus:** May through September\n• **Flexible TTC:** Custom start dates available for modular learning.\n\nEach course has 2 small batches (15–20 students max per batch) to ensure personalized attention.\n\n👉 [Choose Your Start Date & Register](booking.html)";
    }

    if (q.includes('rule') || q.includes('curfew') || q.includes('alcohol') || q.includes('smoke') || q.includes('time') || q.includes('quiet') || q.includes('silence')) {
        return "Namaste! 🙏 Here are the essential **Ashram Guidelines & Rules**:\n\n1. **Substance-Free:** 100% strictly vegetarian, alcohol-free, drug-free, and non-smoking.\n2. **Quiet Hours:** Lights off at 10:00 PM; complete silence in dorms.\n3. **Curfew:** If exploring outside, please return to campus before **10:30 PM**.\n4. **Attendance:** 90% attendance required for Yoga Alliance USA certification.\n5. **Footwear:** Keep footwear outside the Yoga Shala.\n\n👉 [Read Full 34 Rules & Code of Conduct](rules.html)";
    }

    if (q.includes('pack') || q.includes('carry') || q.includes('bring') || q.includes('clothes') || q.includes('mat')) {
        return "Namaste! 🙏 Here is what to pack for Shiva Yoga Goa:\n\n• **Yoga Mat:** Bring your favorite mat (or we provide one free on campus).\n• **Comfortable Clothing:** Loose, breathable yoga attire + **white clothes** for opening/closing ceremonies.\n• **Water Bottle:** Refillable bottle (unlimited filtered water on tap).\n• **Notebook & Pen:** For lecture and philosophy notes.\n• **Essentials:** Toiletries, light shawl/jacket, mosquito repellent, international plug adapter & personal medication.\n\n👉 [Read Full Student Packing Guide](important-info.html)";
    }

    if (q.includes('include') || q.includes('provide') || q.includes('meal') || q.includes('food') || q.includes('room') || q.includes('wifi')) {
        return "Namaste! 🙏 Your package includes:\n\n✓ Full Course Tuition & Yoga Alliance Certificate\n✓ Printed Yoga TTC Manual, Shiva Yoga Bag & T-shirt\n✓ Clean Eco-Cottage / Dorm stay + **1 complimentary extra night**\n✓ 3 Daily Organic Sattvic Vegetarian Meals + Welcome/Farewell dinners\n✓ Unlimited Filtered UV/RO Drinking Water\n✓ High-speed WiFi across campus\n✓ Daily room cleaning\n\n👉 [Reserve Your Package Online](booking.html)";
    }

    if (q.includes('deposit') || q.includes('payment') || q.includes('pay') || q.includes('upi') || q.includes('wise') || q.includes('paypal') || q.includes('refund')) {
        return "Namaste! 🙏 Payment & Deposit details:\n\n• **Advance Deposit:** Small deposit (€150–€350 depending on program) secures your seat.\n• **Payment Methods:** UPI / QR Code (0% fee), Wise Transfer (lowest global rates), PayPal (+5% fee), or Indian Bank Transfer (NEFT/IMPS).\n• **Balance:** Payable on arrival in Goa.\n• **Deposit Policy:** Non-refundable, but **100% transferable** to any future batch or date.\n\n👉 [Secure Deposit via UPI / Wise / PayPal](booking.html)";
    }

    if (q.includes('location') || q.includes('where') || q.includes('arambol') || q.includes('airport') || q.includes('reach') || q.includes('taxi')) {
        return "Namaste! 🙏 Shiva Yoga is located at **Arambol Beach, North Goa, 403519, India**.\n\n• **Airports:** Manohar International Airport MOPA (GOX) is ~35 mins away; Dabolim Airport (GOI) is ~90 mins away.\n• **Taxi Service:** Trusted taxi pickup on call is available (chargeable).\n• **Check-in:** 10:00 AM | **Check-out:** 2:00 PM.\n\n👉 [Chat on WhatsApp for Taxi Assistance](https://wa.me/917411924193)";
    }

    return "Namaste! 🙏 Welcome to Shiva Yoga Goa. I am here to help you with:\n\n• **Course Fees & Room Options** (200hr, 300hr, 50hr TTCs, Retreats)\n• **Upcoming Batch Dates** (Starts 2nd of every month)\n• **Ashram Rules & What to Pack**\n• **Direct Online Booking & Payment**\n\nWhat program or question can I assist you with today?\n\n👉 [Explore All 16 Programs](all-courses.html) or [Chat Directly on WhatsApp](https://wa.me/917411924193)";
}

module.exports = async function handler(req, res) {
    // Allow CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(200).json({ message: "Shiva Yoga AI Concierge API is active." });
    }

    try {
        const { message, history } = req.body || {};
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: "Message string is required." });
        }

        const geminiKey = process.env.GEMINI_API_KEY;
        const openAiKey = process.env.OPENAI_API_KEY;

        // 1. TRY GEMINI API IF KEY IS CONFIGURED
        if (geminiKey) {
            try {
                const contents = [];
                // System Instruction + History
                if (history && Array.isArray(history)) {
                    history.slice(-6).forEach(h => {
                        contents.push({
                            role: h.role === 'user' ? 'user' : 'model',
                            parts: [{ text: h.text || h.content || '' }]
                        });
                    });
                }
                contents.push({ role: 'user', parts: [{ text: message }] });

                const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
                const geminiRes = await fetch(geminiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        systemInstruction: { parts: [{ text: SHIVA_YOGA_KNOWLEDGE }] },
                        contents: contents,
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 500
                        }
                    })
                });

                if (geminiRes.ok) {
                    const data = await geminiRes.json();
                    const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (aiReply) {
                        return res.status(200).json({ reply: aiReply, provider: "gemini" });
                    }
                }
            } catch (err) {
                console.error("Gemini API call failed, using fallback knowledge engine:", err);
            }
        }

        // 2. TRY OPENAI API IF CONFIGURED
        if (openAiKey) {
            try {
                const messages = [{ role: "system", content: SHIVA_YOGA_KNOWLEDGE }];
                if (history && Array.isArray(history)) {
                    history.slice(-6).forEach(h => {
                        messages.push({
                            role: h.role === 'user' ? 'user' : 'assistant',
                            content: h.text || h.content || ''
                        });
                    });
                }
                messages.push({ role: "user", content: message });

                const openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${openAiKey}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4o-mini",
                        messages: messages,
                        temperature: 0.7,
                        max_tokens: 500
                    })
                });

                if (openAiRes.ok) {
                    const data = await openAiRes.json();
                    const aiReply = data?.choices?.[0]?.message?.content;
                    if (aiReply) {
                        return res.status(200).json({ reply: aiReply, provider: "openai" });
                    }
                }
            } catch (err) {
                console.error("OpenAI API call failed, using fallback knowledge engine:", err);
            }
        }

        // 3. SEAMLESS BUILT-IN ASHRAM KNOWLEDGE ENGINE (Default & Instant)
        const fallbackReply = getFallbackResponse(message);
        return res.status(200).json({ reply: fallbackReply, provider: "ashram_engine" });

    } catch (error) {
        console.error("Chat API error:", error);
        return res.status(200).json({
            reply: "Namaste! 🙏 You can book any course directly at [shivaretreats.vercel.app/booking.html](booking.html) or chat with our admissions team on WhatsApp at [+91 74119 24193](https://wa.me/917411924193).",
            provider: "emergency_fallback"
        });
    }
}
