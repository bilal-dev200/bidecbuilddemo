// import React from 'react';
// import Button from '../ui/button';
// import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// const VisionMeetsValue = ({ data }) => {
//     // Extract dynamic values or use defaults
//     const sectionSubtitle = getFieldValue(data, 'section_subtitle') || 'Where Vision Meets Value';
//     const mainHeading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || 'Park Home Developers, Dubai\'s Elite Estate Experts';
//     const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever.';
//     const buttonText = getFieldValue(data, COMMON_FIELD_NAMES.BUTTON_TEXT) || 'About Us';
//     const buttonLink = getFieldValue(data, COMMON_FIELD_NAMES.BUTTON_LINK) || '/aboutus';
//     const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || '/developerImg.png';
    
//     // Stats data - these could also be made dynamic with additional fields
//     const stats = [
//         {
//             value: getFieldValue(data, 'stat_1_value') || '2016',
//             label: getFieldValue(data, 'stat_1_label') || 'Inception'
//         },
//         {
//             value: getFieldValue(data, 'stat_2_value') || '15+',
//             label: getFieldValue(data, 'stat_2_label') || 'Portfolio'
//         },
//         {
//             value: getFieldValue(data, 'stat_3_value') || '3000+',
//             label: getFieldValue(data, 'stat_3_label') || 'Living Spaces'
//         },
//         {
//             value: getFieldValue(data, 'stat_4_value') || '10+',
//             label: getFieldValue(data, 'stat_4_label') || 'Awards'
//         }
//     ];

//     return (
//         <div>
//             {/* Top Info Section */}
//             <div className="grid md:grid-cols-2 gap-10 items-center py-12 container mx-auto">
//                 <div>
//                     <p className="text-xl font-semibold text-[#26326A] uppercase tracking-wide">
//                         {sectionSubtitle}
//                     </p>
//                     <h1 className="text-3xl md:text-5xl font-bold leading-snug mt-2">
//                         {mainHeading}
//                     </h1>
//                     <p className="text-gray-600 mt-4 text-xl">
//                         {description}
//                     </p>
//                     <Button 
//                         text={buttonText} 
//                         className="text-lg mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-10 py-2 rounded-full transition-colors duration-300" 
//                     />

//                     {/* Stats */}
//                     <div className="w-full grid grid-flow-col items-center gap-8 mt-8">
//                         {stats.map((stat, index) => (
//                             <React.Fragment key={index}>
//                                 <div>
//                                     <p className="text-3xl font-bold">{stat.value}</p>
//                                     <p className="text-[#A8A8A8] text-xl">{stat.label}</p>
//                                 </div>
//                                 {index < stats.length - 1 && (
//                                     <div className="h-16 w-[2px] bg-gradient-to-b from-transparent via-[#A8A8A8]/70 to-transparent"></div>
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>

//                 <div>
//                     <img
//                         src={image}
//                         alt="Developer"
//                         className="rounded-lg w-fit"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VisionMeetsValue;
import React from 'react';
import Button from '../ui/button';
import { COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from '@/lib/utils/sectionDataHelpers';
import { Image_URL } from '@/config/constants';

const VisionMeetsValue = ({ data }) => {
    // Extract dynamic values or use defaults
    const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Where Vision Meets Value';
    const mainHeading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Park Home Developers, Dubai\'s Elite Estate Experts';
    const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever.';
    const buttonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) || 'About Us';
    const buttonLink = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) || '/aboutus';
    const image = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/developerImg.png';
    
    // Stats data - these could also be made dynamic with additional fields
    const stats = [
        {
            value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 1) || '2016',
            label: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 0) || 'Inception'
        },
        {
            value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 2) || '15+',
            label: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 0) || 'Portfolio'
        },
        {
            value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 3) || '3000+',
            label: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 1) || 'Living Spaces'
        },
        {
            value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 4) || '50+',
            label: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 3) || 'Awards'
        }
    ];

    // console.log('data', data);

    return (
    <div className="max-w-[1200px] mx-auto px-6">
            {/* Top Info Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center py-12 text-center md:text-start">
                <div>
                    <p className="text-base md:text-lg font-semibold text-[#26326A] uppercase tracking-wide">
                        {sectionSubtitle}
                    </p>
                    <h1 className="text-xl md:text-4xl font-bold leading-snug mt-2">
                        {mainHeading}
                    </h1>
                    <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-lg max-w-2xl">{description}</p>

                    <Button
                        text={buttonText}
                        to="/about"
                        className="text-sm mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-10 py-2 rounded-full transition-colors duration-300"
                    />

                                    {/* Stats */}
                     <div className="w-full grid grid-cols-2 md:grid-flow-col md:grid-cols-none items-center gap-8 mt-8">
                         {stats.map((stat, index) => (
                            <React.Fragment key={index}>
                                <div>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-[#A8A8A8] text-sm">{stat.label}</p>
                                </div>
                                {index < stats.length - 1 && (
                                    <div className="hidden md:block h-16 w-[2px] bg-gradient-to-b from-transparent via-[#A8A8A8]/70 to-transparent"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div>
                    <img
                        src={image.startsWith('http') ? image : `${Image_URL}/${image}`}
                        alt="Developer"
                        className="rounded-lg w-fit"
                    />
                </div>
            </div>
        </div>
    );
};

export default VisionMeetsValue;
