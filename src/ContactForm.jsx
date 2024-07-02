import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <div className='flex flex-col'>
                <input
                    className="w-[400px] border border-black m-1 p-2 rounded-2xl focus:placeholder-opacity-0"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your Name...'
                    required
                />
                <input
                    className="w-[400px] border border-black m-1 p-2 rounded-2xl focus:placeholder-opacity-0"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your Email...'
                    required
                />
                <input
                    className="w-[400px] border border-black m-1 p-2 rounded-2xl focus:placeholder-opacity-0"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter your Phone...'
                    required
                />
            </div>
            <button className='text-white mt-4 hover:bg-orange-600 bg-orange-800 rounded-xl p-2 w-[200px]' type='submit'>
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
