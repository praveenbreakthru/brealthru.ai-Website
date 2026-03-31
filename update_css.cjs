const fs = require('fs');

const path = 'src/App.css';
const content = `/* ========================================
   PREMIUM MONOCHROME CHATBOT DESIGN
   ======================================== */

/* Main Container */
.ai-chatbot-container {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 520px;
  font-family: inherit;
}

.ai-chatbot-glow-effect, .ai-chatbot-glow-effect::before {
  display: none !important;
}

/* Chatbot Main */
.ai-chatbot {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
}

/* Header */
.ai-chatbot-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: #fcfcfc;
  border-bottom: 1px solid #e5e7eb;
}

.ai-chatbot-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.ai-chatbot-logo-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f23;
  border-radius: 12px;
}

.ai-chatbot-logo {
  width: 24px;
  height: 24px;
  position: relative;
}

.ai-logo-shape {
  position: absolute;
}

.ai-shape-1 {
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-radius: 2px;
  top: 0;
  left: 0;
  animation: none !important;
}

.ai-shape-2 {
  width: 10px;
  height: 10px;
  background: #a3a3a3;
  border-radius: 50%;
  bottom: 0;
  right: 0;
  animation: none !important;
}

.ai-shape-3 {
  width: 6px;
  height: 6px;
  background: #d4d4d4;
  border-radius: 1px;
  bottom: 4px;
  left: 4px;
  animation: none !important;
}

.ai-chatbot-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ai-chatbot-title span:first-child {
  font-size: 16px;
  font-weight: 800;
  color: #0f0f23;
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  background-clip: unset;
  letter-spacing: -0.3px;
}

.ai-chatbot-subtitle {
  font-size: 11px !important;
  font-weight: 600 !important;
  color: #6b7280 !important;
  -webkit-text-fill-color: #6b7280 !important;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Header Actions */
.ai-chatbot-header-actions {
  display: flex;
  gap: 8px;
}

.ai-chat-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  border: 1px solid transparent;
  color: #6b7280;
}

.ai-chat-btn:hover {
  background: #f3f4f6;
  color: #111827;
}

.ai-chat-muted {
  color: #ef4444 !important;
  background: #fef2f2 !important;
}

/* Welcome Section */
.ai-chat-welcome {
  text-align: center;
  padding: 40px 24px 30px;
  background: none;
}

.ai-welcome-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f23;
  border-radius: 16px;
  border: none;
  box-shadow: none;
  animation: none;
}

.ai-welcome-logo {
  width: 32px;
  height: 32px;
  position: relative;
}

.ai-welcome-logo .ai-shape-1 { width: 16px; height: 16px; }
.ai-welcome-logo .ai-shape-2 { width: 14px; height: 14px; }
.ai-welcome-logo .ai-shape-3 { width: 8px; height: 8px; }

.ai-chat-welcome p {
  font-size: 18px;
  font-weight: 700;
  color: #0f0f23;
  margin: 0 0 8px;
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  background-clip: unset;
  letter-spacing: -0.5px;
}

.ai-chat-welcome span {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
}

/* Messages Area */
.ai-chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;
}

.ai-chatbot-messages::-webkit-scrollbar {
  width: 4px;
}

.ai-chatbot-messages::-webkit-scrollbar-track {
  background: transparent;
}

.ai-chatbot-messages::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

/* Message Styles */
.ai-chat-message {
  display: flex;
  gap: 12px;
  max-width: 85%;
  animation: ai-message-fade 0.3s ease forwards;
}

@keyframes ai-message-fade {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.ai-message-bot {
  align-self: flex-start;
}

.ai-message-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.ai-message-avatar {
  flex-shrink: 0;
  margin-top: 2px;
}

.ai-avatar-icon {
  width: 32px;
  height: 32px;
  position: relative;
  background: #0f0f23;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.ai-avatar-icon .ai-shape-1 {
  width: 14px;
  height: 14px;
  background: #ffffff !important;
  animation: none !important;
}

.ai-message-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 100%;
}

.ai-message-bubble {
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.6;
  border-radius: 16px;
  word-wrap: break-word;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}

.ai-message-bot .ai-message-bubble {
  background: #f4f4f5;
  color: #18181b;
  border-radius: 16px 16px 16px 4px;
  border: 1px solid #e4e4e7;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.ai-message-user .ai-message-bubble {
  background: #0f0f23;
  color: #ffffff;
  border-radius: 16px 16px 4px 16px;
  box-shadow: 0 4px 12px rgba(15, 15, 35, 0.15);
}

.ai-message-time {
  font-size: 11px;
  color: #9ca3af;
  padding: 0 4px;
  font-weight: 500;
}

.ai-message-user .ai-message-time {
  text-align: right;
}

/* Typing Indicator */
.ai-typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 14px 16px !important;
}

.ai-typing-indicator span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #a1a1aa;
  animation: ai-typing-pulse 1.4s ease-in-out infinite;
  box-shadow: none;
}

.ai-typing-indicator span:nth-child(2) { animation-delay: 0.2s; background: #a1a1aa; }
.ai-typing-indicator span:nth-child(3) { animation-delay: 0.4s; background: #a1a1aa; }

@keyframes ai-typing-pulse {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-3px); opacity: 1; }
}

/* Input Area */
.ai-chatbot-input-area {
  padding: 16px 20px 20px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
}

.ai-input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  padding: 6px;
  transition: all 0.2s ease;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.ai-input-wrapper:focus-within {
  border-color: #0f0f23;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(15, 15, 35, 0.05);
}

.ai-chat-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-family: inherit;
  color: #0f0f23;
  outline: none;
}

.ai-chat-input::placeholder {
  color: #9ca3af;
}

.ai-send-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0f0f23;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(15, 15, 35, 0.2);
}

.ai-send-btn:hover {
  background: #27272a;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(15, 15, 35, 0.25);
}

.ai-send-btn:active {
  transform: scale(0.95);
}

/* Footer */
.ai-chat-footer {
  text-align: center;
  padding-top: 12px;
  font-size: 11px;
  color: #9ca3af;
  letter-spacing: 0.5px;
  font-weight: 500;
}
`;

try {
  let text = fs.readFileSync(path, 'utf8');
  let lines = text.split('\n');
  lines.splice(246, 476, content);
  fs.writeFileSync(path, lines.join('\n'));
  console.log('Successfully updated App.css');
} catch (error) {
  console.error('Error updating file:', error);
}
