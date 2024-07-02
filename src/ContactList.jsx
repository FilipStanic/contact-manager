import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {

    const handleDelete = (index) => {
        onDeleteContact(index);
    };

    return (
        <div className='text-white text-2xl mt-10'>
            <ul>
                {contacts.map((contact, index) => (
                    <li className='border p-4 mb-4 rounded-3xl' key={index}>
                        <div>
                            <p>Name: {contact.name}</p>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                        </div>
                        <div className='flex flex-col items-center'>

                            <button
                                className='text-white hover:bg-orange-600 bg-orange-800 rounded-full w-10 h-10 mt-5 flex flex-col items-center'
                                onClick={() => handleDelete(index)}
                            >x</button>
                        </div>
                    </li>

                ))}
            </ul>


        </div>
    );
};

export default ContactList;
