import React from 'react'

type Props = {
    sectionType: string
}

const CreateSection = ({ sectionType }: Props) => {
    let content;

    switch (sectionType) {
        case 'insight':
            content = <div>AI Insight Section</div>;
            break;
        case 'graph':
            content = <div>Graph Section</div>;
            break;
        default:
            content = <div>Select a section type</div>;
    }

    return (
        <div className='w-full px-8 py-4'>
            {content}
        </div>
    );
}

export default CreateSection;
