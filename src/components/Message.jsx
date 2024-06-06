import React from 'react';
import styles from '../styles/Message.module.css';
import profile_pic from '../assets/profile_pic.svg';

const Message = ({message, person}) => {
  return (
    <>
      {
        person !== "You" ?

        (
          <>
            <div className={`${person === "You" ? styles.message_box_you  : styles.message_box }`} >
      <img src={profile_pic} alt="" />
      <div className={`${person === "You" ? styles.name_and_message_you :  styles.name_and_message}`}>
        <div className={`${person === "You" ? styles.name_you : styles.name }`}>{person}</div>
        <div className={`${person === "You" ? styles.message_you : styles.message}`}>{message}</div>
      </div>
    </div>
    <br />
          </>
        )

        :

        (
          <>
              <div className={`${person === "You" ? styles.message_box_you  : styles.message_box }`} >
                
                <div className={`${person === "You" ? styles.name_and_message_you :  styles.name_and_message}`}>
                  <div className={`${person === "You" ? styles.name_you : styles.name }`}>{person}</div>
                  <div className={`${person === "You" ? styles.message_you : styles.message}`}>{message}</div>
                </div>

                <img src={profile_pic} alt="" />
              </div>
              <br />          
          </>
        )
      }
    </>
  );
};

export default Message;
