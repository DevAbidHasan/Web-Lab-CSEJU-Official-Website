import React from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(null)
    const faqsData = [
        {
            question: 'What programs does the Department of CSE offer?',
            answer: 'We offer undergraduate (B.Sc. in Computer Science and Engineering) and postgraduate programs (M.Sc., M.Phil., and Ph.D.) focused on computer science, software engineering, AI, and related fields.Built with speed — minimal load times and optimized rendering.'
        },
        {
            question: 'How can I apply for admission to the CSE Department?',
            answer: 'Undergraduate admissions are conducted through the Jahangirnagar University admission test process. Postgraduate applicants must follow the university’s graduate admission requirements and may need to sit for a departmental written test and viva.'
        },
        {
            question: 'What are the main research areas in the department?',
            answer: 'Our faculty and students are actively engaged in research on Artificial Intelligence, Data Science, Cybersecurity, Networking, Robotics, and Cloud Computing.'
        },
        {
            question: 'Are there any student clubs or organizations in the department?',
            answer: 'Yes. The department has active student communities such as the JU Computer Club, JU Robotics Team, and Programming Contest Group, promoting innovation and teamwork.'
        },
        {
            question: 'How can I contact the CSE department for academic or research queries?',
            answer: 'You can reach us through the official department email, visit the office during working hours, or connect with specific faculty members through their profiles on this website.'
        }
    ]
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className='flex mb-22 flex-col items-center text-center text-slate-800 px-3'>
                <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Frequently Asked Questions</h1>
                <p className='text-sm text-slate-500 mt-4 max-w-sm'>
                    Proactively answering FAQs boosts user confidence and cuts down on support tickets.
                </p>
                <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div className='flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    
    );
};

export default FAQ;