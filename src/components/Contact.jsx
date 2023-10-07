import React from "react";

const Contact = () => {
    return (
        <section id='contact' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-violet-800"></h1>
            <form action="" method="POST" encType="multipart/form-data">
                <section className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <section className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="name"
                        />                        
                    </section>
                    <section 
                    className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone Number</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="phone"/>                        
                    </section>
                    <section className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="email" 
                        name="email"/>                        
                    </section>
                    <section className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="subject"/>                        
                    </section>
                    <section className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg border-gray-300" rows="10" name="message"></textarea>                      
                    </section>                    
                </section>
                <button className="bg-[#6A1B9A] text-gray-100 mt-4 w-full p-4 rounded-lg">
                        Send Message
                    </button>
            </form>
        </section>
    )
}

export default Contact
