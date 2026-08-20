/**
 * Shiva Yoga AI Concierge & Ashram Assistant Client Widget
 * Connects to /api/chat (Serverless Gemini / OpenAI / Built-in Engine)
 */

(function () {
    'use strict';

    // Inject Chatbot HTML and CSS dynamically on any page
    function initChatbot() {
        if (document.getElementById('shiva-chatbot-root')) return;

        // Create Container
        const root = document.createElement('div');
        root.id = 'shiva-chatbot-root';
        root.innerHTML = `
            <!-- Floating Trigger Button -->
            <button id="shivaChatToggle" class="shiva-chat-toggle" aria-label="Open Shiva Yoga AI Assistant">
                <span class="chat-toggle-icon"><i class="fas fa-comment-dots"></i></span>
                <span class="chat-toggle-text">Ask Shiva AI</span>
                <span class="chat-online-pulse"></span>
            </button>

            <!-- Chat Modal Box -->
            <div id="shivaChatModal" class="shiva-chat-modal">
                <!-- Chat Header -->
                <div class="shiva-chat-header">
                    <div class="chat-header-info">
                        <div class="chat-avatar">
                            <img src="assets/images/logo-dark.png" alt="Shiva Yoga Logo" width="36" height="36">
                            <span class="avatar-status-dot"></span>
                        </div>
                        <div>
                            <h4 class="chat-header-title">Shiva Yoga Assistant</h4>
                            <span class="chat-header-status">Online &bull; 24/7 Admissions AI</span>
                        </div>
                    </div>
                    <div class="chat-header-actions">
                        <button id="shivaChatReset" class="chat-action-btn" title="Clear Conversation"><i class="fas fa-redo-alt"></i></button>
                        <button id="shivaChatClose" class="chat-action-btn" title="Close Chat"><i class="fas fa-times"></i></button>
                    </div>
                </div>

                <!-- Chat Body / Message List -->
                <div id="shivaChatMessages" class="shiva-chat-messages">
                    <div class="chat-msg bot-msg">
                        <div class="msg-bubble">
                            <strong>Namaste! 🙏 Welcome to Shiva Yoga Goa.</strong><br><br>
                            I am your AI Ashram Concierge. I can answer questions about course dates, fees, dorm vs private rooms, 34 ashram rules, or help you book your seat.
                        </div>
                        <span class="msg-time">Just now</span>
                    </div>

                    <!-- Quick Suggestions -->
                    <div class="chat-quick-chips" id="chatQuickChips">
                        <button type="button" class="chip-btn" data-q="What are the 200-Hour TTC fees?">⭐ 200-Hr TTC Fees</button>
                        <button type="button" class="chip-btn" data-q="When do upcoming TTC courses start?">📅 Upcoming Dates</button>
                        <button type="button" class="chip-btn" data-q="What are the essential ashram rules and curfew?">📜 Ashram Rules</button>
                        <button type="button" class="chip-btn" data-q="What should I pack for the course?">🧳 What to Pack</button>
                        <button type="button" class="chip-btn" data-q="How do I book online and pay deposit?">💳 How to Book</button>
                    </div>
                </div>

                <!-- Chat Input Area -->
                <form id="shivaChatForm" class="shiva-chat-input-area" onsubmit="return false;">
                    <input type="text" id="shivaChatInput" class="shiva-chat-input" placeholder="Type your question in any language..." autocomplete="off" required>
                    <button type="submit" id="shivaChatSend" class="shiva-chat-send-btn" aria-label="Send Message">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        `;

        document.body.appendChild(root);

        // State & Elements
        const toggleBtn = document.getElementById('shivaChatToggle');
        const modal = document.getElementById('shivaChatModal');
        const closeBtn = document.getElementById('shivaChatClose');
        const resetBtn = document.getElementById('shivaChatReset');
        const chatForm = document.getElementById('shivaChatForm');
        const chatInput = document.getElementById('shivaChatInput');
        const messagesContainer = document.getElementById('shivaChatMessages');
        const quickChips = document.getElementById('chatQuickChips');

        let chatHistory = [];
        let isSending = false;

        // Toggle Open/Close
        function toggleModal(open) {
            const shouldOpen = open !== undefined ? open : !modal.classList.contains('active');
            modal.classList.toggle('active', shouldOpen);
            toggleBtn.classList.toggle('chat-open', shouldOpen);
            if (shouldOpen) {
                setTimeout(() => chatInput.focus(), 200);
            }
        }

        toggleBtn.addEventListener('click', () => toggleModal());
        closeBtn.addEventListener('click', () => toggleModal(false));

        // Quick Chip Buttons
        if (quickChips) {
            quickChips.addEventListener('click', (e) => {
                const btn = e.target.closest('.chip-btn');
                if (btn && btn.dataset.q) {
                    sendMessage(btn.dataset.q);
                }
            });
        }

        // Reset conversation
        resetBtn.addEventListener('click', () => {
            chatHistory = [];
            messagesContainer.innerHTML = `
                <div class="chat-msg bot-msg">
                    <div class="msg-bubble">
                        <strong>Namaste! 🙏</strong> How can I help you today with Shiva Yoga programs or ashram stay?
                    </div>
                    <span class="msg-time">Just now</span>
                </div>
                <div class="chat-quick-chips" id="chatQuickChips">
                    <button type="button" class="chip-btn" data-q="What are the 200-Hour TTC fees?">⭐ 200-Hr TTC Fees</button>
                    <button type="button" class="chip-btn" data-q="When do upcoming TTC courses start?">📅 Upcoming Dates</button>
                    <button type="button" class="chip-btn" data-q="What are the essential ashram rules and curfew?">📜 Ashram Rules</button>
                    <button type="button" class="chip-btn" data-q="What should I pack for the course?">🧳 What to Pack</button>
                </div>
            `;
            // re-bind quick chips
            const newChips = document.getElementById('chatQuickChips');
            if (newChips) {
                newChips.addEventListener('click', (e) => {
                    const btn = e.target.closest('.chip-btn');
                    if (btn && btn.dataset.q) sendMessage(btn.dataset.q);
                });
            }
        });

        // Form Submit
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (text && !isSending) {
                sendMessage(text);
                chatInput.value = '';
            }
        });

        // Send Message Function
        async function sendMessage(userText) {
            if (isSending) return;
            isSending = true;

            // Hide quick chips once chatting begins
            const chips = document.getElementById('chatQuickChips');
            if (chips) chips.remove();

            // Append User Message Bubble
            appendMessage('user', userText);

            // Append Typing Indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'chat-msg bot-msg typing-msg';
            typingIndicator.innerHTML = `
                <div class="msg-bubble typing-dots">
                    <span></span><span></span><span></span>
                </div>
            `;
            messagesContainer.appendChild(typingIndicator);
            scrollToBottom();

            // Record history
            chatHistory.push({ role: 'user', content: userText });

            try {
                // Call /api/chat serverless route
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: userText, history: chatHistory })
                });

                let replyText = "";
                if (res.ok) {
                    const data = await res.json();
                    replyText = data.reply || "Namaste! Please connect with our admissions team on WhatsApp at +91 74119 24193.";
                } else {
                    replyText = "Namaste! 🙏 You can book directly at [shivaretreats.vercel.app/booking.html](booking.html) or chat with our team on [WhatsApp](https://wa.me/917411924193).";
                }

                typingIndicator.remove();
                appendMessage('bot', replyText);
                chatHistory.push({ role: 'assistant', content: replyText });

            } catch (err) {
                console.error("Chat error:", err);
                typingIndicator.remove();
                appendMessage('bot', "Namaste! 🙏 You can book online directly at [shivaretreats.vercel.app/booking.html](booking.html) or message our admissions director on [WhatsApp at +91 74119 24193](https://wa.me/917411924193).");
            } finally {
                isSending = false;
                scrollToBottom();
            }
        }

        // Render message with basic markdown support
        function appendMessage(role, text) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `chat-msg ${role === 'user' ? 'user-msg' : 'bot-msg'}`;

            // Parse Markdown: bold, links, list items, emojis
            let formatted = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="chat-link">$1 &rarr;</a>')
                .replace(/\n/g, '<br>');

            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            msgDiv.innerHTML = `
                <div class="msg-bubble">${formatted}</div>
                <span class="msg-time">${timeStr}</span>
            `;

            messagesContainer.appendChild(msgDiv);
            scrollToBottom();
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    // Initialize on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
