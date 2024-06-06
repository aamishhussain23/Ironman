import React, { useState } from 'react';
import company_logo from '../assets/company_logo.svg';
import profile_pic from '../assets/profile_pic.svg';
import styles from '../styles/ChatWindow.module.css';
import Message from './Message.jsx';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const randomMessages = [
    "That's interesting!",
    "Can you tell me more?",
    "I have a question regarding this.",
    "Sure, let me check that for you.",
    "I'll get back to you soon."
  ];

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { message: input, person: 'You' }];
    // console.log(newMessages)
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      setMessages([...newMessages, { message: randomMessage, person: 'Elon Musk' }]);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <img src={company_logo} alt="company logo" />
        <span className={styles.company_name}>Mosaic Labs</span>
      </nav>

      <div className={styles.chat_body}>
        <div className={styles.leftSidebar}>
          <img src={profile_pic} alt="" />
        </div>

        <div className={styles.chatArea}>
          <section className={styles.heading_and_image}>
            <h1>Elon Musk</h1>
            <img src={profile_pic} alt="" />
          </section>
          <div className={styles.chatSection}>
            {messages.map((msg, index) => (
              <Message key={index} message={msg.message} person={msg.person} />
            ))}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder='Type a message'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
