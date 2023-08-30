import React from 'react';

interface ChatBlockProps {
    question: string;
    answer: string;
}

const ChatBlock: React.FC<ChatBlockProps> = ({ question, answer}) => {
    return (
        <div className="grid grid-cols-1 gap-2 mb-8">
            <div className="col-span-1">
                {question}
            </div>
            <div className="col-span-1 rounded-md anwser bg-gray-700 p-3 bg-opacity-30">
                {answer.split('\n').map((item, idx) => {
                    return <p key={idx}>{item}</p>
                })}
            </div>
        </div>
    );
};

export default ChatBlock;