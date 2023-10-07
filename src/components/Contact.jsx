import React from "react";
import { useState } from "react";


const Contact = () => {   

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const validateForm = () =>{
        if (name.length == 0) {
            return [false, 'Name Required'];
        }
        if (email.length == 0) {
            return [false, 'Email Required'];
        }
        if (subject.length == 0) {
            return [false, 'Subject Required'];
        }
        return [true, ''];
    }

    const handleSubmitButton = (event) => {
        event.preventDefault();
        const [validForm, ErrorMessage] = validateForm();
        if (!validForm) {
            return alert(ErrorMessage);
        }
        var form = document.getElementById('contactForm');
        if (confirm('Submit message?')) {
            form.reset();
        }
    }

    return (
        <section id='contact' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-violet-800"></h1>
            <form id='contactForm' encType="multipart/form-data">
           
            <h1 className='text-4xl font-bold text-center text-violet-800'>Contact Me</h1>
                <section className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <section className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        />                        
                    </section>
                    <section 
                    className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone Number</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="phone"
                        onChange={(event) => setPhone(event.target.value)}
                        />                        
                    </section>
                    <section className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        />                        
                    </section>
                    <section className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="subject"
                        onChange={(event) => setSubject(event.target.value)}
                        />                        
                    </section>
                    <section className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg border-gray-300" rows="10" id="message" name="message" onChange={(event) => setMessage(event.target.value)}></textarea>                      
                    </section>                    
                </section>
                <button type="submit" className="cursor-pointer bg-[#6A1B9A] text-gray-100 mt-4 w-full p-4 rounded-lg" onClick={handleSubmitButton}>Send Message</button>

            </form>
        </section>
    )
}

export default Contact
