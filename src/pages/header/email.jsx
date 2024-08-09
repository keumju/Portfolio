import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from "react";

const Email = ({setOpen, setMail}) => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_juph6ea", "template_yeplz37", form.current, "F7np99J4CLPr6-fKf").then(
      (result) => {
        alert("성공적으로 이메일이 전송되었습니다.");
        setOpen(false)
        setMail(false)
      },
      (error) => {
        alert("이메일이 전송이 실패되었습니다. 다시 시도해주세요.");
      },
    );
  };

//   let [submit, setSubmit] = useState(false);
  
  const titRef = useRef();
  const emailRef = useRef();
  const txtRef = useRef();

//   function message(){
//     let tit = titRef.current.value
//     let email = emailRef.current.value
//     let txt = txtRef.current.value
//     if(!tit || !email || !txt){
        
//     }else{
//         setSubmit(true)
//     }
//   }


  return (
    <form className='mailForm' ref={form} onSubmit={sendEmail}>
        <div>
            <label>문의 제목</label>
            <input type="text" name="ask_title" ref={titRef}  placeholder='제목을 작성해 주세요'/>
        </div>
        <div>
            <label>답변 받으실 이메일</label>
            <input type="email" name="user_email" ref={emailRef} placeholder='ex)example@google.com'/>
        </div>
        <div>
            <label>문의 내용</label>
            <textarea name="message" ref={txtRef} placeholder='내용을 작성해 주세요'/>
        </div>
        <input className='mailBtn' type="submit" value="Send"/>
    </form>
  );
};

export default Email;