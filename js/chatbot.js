/**
 * Shiva Yoga "Ask Me" Chatbot Widget
 * Compact, lightweight AI admissions assistant sitting in the bottom-right corner.
 */

(function () {
    'use strict';

    function initAskMeBot() {
        if (document.getElementById('shiva-chatbot-root')) return;

        // Path resolution for root vs subdirectories (/courses/, /blog/)
        const isSubdir = window.location.pathname.includes('/courses/') || window.location.pathname.includes('/blog/');
        const logoPath = isSubdir ? '../assets/images/logo-dark.png' : 'assets/images/logo-dark.png';
        const bookingPath = isSubdir ? '../booking.html' : 'booking.html';

        const root = document.createElement('div');
        root.id = 'shiva-chatbot-root';
        root.innerHTML = `
            <!-- Small Floating "Ask Me" Launcher -->
            <button id="shivaChatToggle" class="askme-toggle-btn" aria-label="Ask Me - Shiva Yoga Assistant">
                <span class="askme-icon"><i class="fas fa-sparkles"></i></span>
                <span class="askme-label">Ask Me</span>
                <span class="askme-pulse"></span>
            </button>

            <!-- Compact "Ask Me" Chat Window (Bottom-Right) -->
            <div id="shivaChatModal" class="askme-chat-window">
                <!-- Header -->
                <div class="askme-header">
                    <div class="askme-header-brand">
                        <div class="askme-avatar">
                            <img src="${logoPath}" alt="Shiva Yoga" width="30" height="30">
                            <span class="askme-dot"></span>
                        </div>
                        <div>
                            <div class="askme-title">Ask Shiva Yoga</div>
                            <div class="askme-sub">Online &bull; Instant Answers</div>
                        </div>
                    </div>
                    <div class="askme-header-btns">
                        <button id="shivaChatReset" class="askme-icon-btn" title="Restart Chat"><i class="fas fa-redo-alt"></i></button>
                        <button id="shivaChatClose" class="askme-icon-btn" title="Close"><i class="fas fa-times"></i></button>
                    </div>
                </div>

                <!-- Messages -->
                <div id="shivaChatMessages" class="askme-messages">
                    <div class="askme-msg bot">
                        <div class="askme-bubble">
                            <strong>Namaste! 🙏</strong><br>
                            Ask me anything about our Yoga TTCs, Retreats, fees, dates, rules, or room options!
                        </div>
                        <span class="askme-time">Just now</span>
                    </div>

                    <!-- Quick Prompt Pills -->
                    <div class="askme-chips" id="askmeChips">
                        <button type="button" class="askme-chip" data-q="What are the 200-Hour TTC fees?">⭐ 200-Hr TTC Fee</button>
                        <button type="button" class="askme-chip" data-q="When is the next batch start date?">📅 Next Start Date</button>
                        <button type="button" class="askme-chip" data-q="What are the 34 ashram rules & curfew?">📜 Ashram Rules</button>
                        <button type="button" class="askme-chip" data-q="What should I pack for the course?">🧳 What to Pack</button>
                        <button type="button" class="askme-chip" data-q="How do I book online and pay deposit?">💳 How to Book</button>
                    </div>
                </div>

                <!-- Input Field -->
                <form id="shivaChatForm" class="askme-input-bar" onsubmit="return false;">
                    <input type="text" id="shivaChatInput" class="askme-input" placeholder="Type your question..." autocomplete="off" required>
                    <button type="submit" id="shivaChatSend" class="askme-send" aria-label="Send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        `;

        document.body.appendChild(root);

        // Elements
        const toggleBtn = document.getElementById('shivaChatToggle');
        const modal = document.getElementById('shivaChatModal');
        const closeBtn = document.getElementById('shivaChatClose');
        const resetBtn = document.getElementById('shivaChatReset');
        const chatForm = document.getElementById('shivaChatForm');
        const chatInput = document.getElementById('shivaChatInput');
        const messagesContainer = document.getElementById('shivaChatMessages');
        const quickChips = document.getElementById('askmeChips');

        let chatHistory = [];
        let isSending = false;

        function toggleChat(open) {
            const shouldOpen = open !== undefined ? open : !modal.classList.contains('active');
            modal.classList.toggle('active', shouldOpen);
            toggleBtn.classList.toggle('open', shouldOpen);
            if (shouldOpen) {
                setTimeout(() => chatInput.focus(), 150);
            }
        }

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleChat();
        });
        closeBtn.addEventListener('click', () => toggleChat(false));

        // Close on Click Outside or ESC key
        document.addEventListener('click', (e) => {
            if (modal.classList.contains('active') && !modal.contains(e.target) && !toggleBtn.contains(e.target)) {
                toggleChat(false);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                toggleChat(false);
            }
        });

        // Quick chip clicks
        if (quickChips) {
            quickChips.addEventListener('click', (e) => {
                const chip = e.target.closest('.askme-chip');
                if (chip && chip.dataset.q) {
                    sendQuery(chip.dataset.q);
                }
            });
        }

        // Reset chat
        resetBtn.addEventListener('click', () => {
            chatHistory = [];
            messagesContainer.innerHTML = `
                <div class="askme-msg bot">
                    <div class="askme-bubble">
                        <strong>Namaste! 🙏</strong><br>
                        Ask me anything about our Yoga TTCs, Retreats, fees, dates, rules, or room options!
                    </div>
                    <span class="askme-time">Just now</span>
                </div>
                <div class="askme-chips" id="askmeChips">
                    <button type="button" class="askme-chip" data-q="What are the 200-Hour TTC fees?">⭐ 200-Hr TTC Fee</button>
                    <button type="button" class="askme-chip" data-q="When is the next batch start date?">📅 Next Start Date</button>
                    <button type="button" class="askme-chip" data-q="What are the 34 ashram rules & curfew?">📜 Ashram Rules</button>
                    <button type="button" class="askme-chip" data-q="What should I pack for the course?">🧳 What to Pack</button>
                </div>
            `;
            const newChips = document.getElementById('askmeChips');
            if (newChips) {
                newChips.addEventListener('click', (e) => {
                    const chip = e.target.closest('.askme-chip');
                    if (chip && chip.dataset.q) sendQuery(chip.dataset.q);
                });
            }
        });

        // Form submit
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (text && !isSending) {
                sendQuery(text);
                chatInput.value = '';
            }
        });

        // Send query to serverless /api/chat
        async function sendQuery(queryText) {
            if (isSending) return;
            isSending = true;

            const chips = document.getElementById('askmeChips');
            if (chips) chips.remove();

            appendMsg('user', queryText);

            // Typing animation
            const typing = document.createElement('div');
            typing.className = 'askme-msg bot typing';
            typing.innerHTML = `
                <div class="askme-bubble typing-dots">
                    <span></span><span></span><span></span>
                </div>
            `;
            messagesContainer.appendChild(typing);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            chatHistory.push({ role: 'user', content: queryText });

            try {
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: queryText, history: chatHistory })
                });

                let reply = "";
                if (res.ok) {
                    const data = await res.json();
                    reply = data.reply || "Namaste! Please chat with our team on WhatsApp at +91 74119 24193.";
                } else {
                    reply = "Namaste! 🙏 You can book directly at [Online Booking](booking.html) or chat on [WhatsApp](https://wa.me/917411924193).";
                }

                typing.remove();
                appendMsg('bot', reply);
                chatHistory.push({ role: 'assistant', content: reply });

            } catch (err) {
                typing.remove();
                appendMsg('bot', "Namaste! 🙏 Book directly at [Online Booking](booking.html) or contact admissions on [WhatsApp: +91 74119 24193](https://wa.me/917411924193).");
            } finally {
                isSending = false;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }

        function appendMsg(role, text) {
            const div = document.createElement('div');
            div.className = `askme-msg ${role}`;

            let formatted = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="askme-link">$1 &rarr;</a>')
                .replace(/\n/g, '<br>');

            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            div.innerHTML = `
                <div class="askme-bubble">${formatted}</div>
                <span class="askme-time">${time}</span>
            `;

            messagesContainer.appendChild(div);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAskMeBot);
    } else {
        initAskMeBot();
    }
})();
