// // components/HeroSlider.jsx
// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Button from "../ui/button";
// import { getFieldValue, getMultipleFieldValues, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// export default function HeroSlider({ data }) {
//     // Extract dynamic values for section header
//     const sectionSubtitle = getFieldValue(data, 'section_subtitle') || 'Our Latest Launch';
//     const sectionTitle = getFieldValue(data, 'section_title') || 'Discover Signature Living Spaces';
//     const sectionDescription = getFieldValue(data, 'section_description') || 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text over.';

//     // Extract slide data - for multiple slides, you might need multiple image/title/desc fields
//     const slideData = {
//         image1: getFieldValue(data, 'slide_1_image') || '/devsImg.png',
//         title1: getFieldValue(data, 'slide_1_title') || 'Park Home Developers, Dubai\'s Elite Estate Experts',
//         desc1: getFieldValue(data, 'slide_1_description') || 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',

//         image2: getFieldValue(data, 'slide_2_image') || '/devsimg1.png',
//         title2: getFieldValue(data, 'slide_2_title') || 'Discover Signature Living Spaces',
//         desc2: getFieldValue(data, 'slide_2_description') || 'Lorem ipsum has been the industry\'s standard dummy text ever since.',

//         image3: getFieldValue(data, 'slide_3_image') || '/devsimg2.png',
//         title3: getFieldValue(data, 'slide_3_title') || 'Where Vision Meets Value',
//         desc3: getFieldValue(data, 'slide_3_description') || 'Lorem ipsum is dummy text for real estate presentation.',

//         image4: getFieldValue(data, 'slide_4_image') || '/devsimg3.png',
//         title4: getFieldValue(data, 'slide_4_title') || 'Where Vision Meets Value',
//         desc4: getFieldValue(data, 'slide_4_description') || 'Lorem ipsum is dummy text for real estate presentation.',

//         image5: getFieldValue(data, 'slide_5_image') || '/devsimg4.png',
//         title5: getFieldValue(data, 'slide_5_title') || 'Where Vision Meets Value',
//         desc5: getFieldValue(data, 'slide_5_description') || 'Lorem ipsum is dummy text for real estate presentation.',

//         image6: getFieldValue(data, 'slide_6_image') || '/devsimg5.png',
//         title6: getFieldValue(data, 'slide_6_title') || 'Where Vision Meets Value',
//         desc6: getFieldValue(data, 'slide_6_description') || 'Lorem ipsum is dummy text for real estate presentation.',
//     };

//     const buttonText = getFieldValue(data, COMMON_FIELD_NAMES.BUTTON_TEXT) || 'Explore Now';

//     // Build slides array from dynamic data
//     const slides = [
//         {
//             id: 1,
//             image: slideData.image1,
//             title: slideData.title1,
//             desc: slideData.desc1,
//         },
//         {
//             id: 2,
//             image: slideData.image2,
//             title: slideData.title2,
//             desc: slideData.desc2,
//         },
//         {
//             id: 3,
//             image: slideData.image3,
//             title: slideData.title3,
//             desc: slideData.desc3,
//         },
//         {
//             id: 4,
//             image: slideData.image4,
//             title: slideData.title4,
//             desc: slideData.desc4,
//         },
//         {
//             id: 5,
//             image: slideData.image5,
//             title: slideData.title5,
//             desc: slideData.desc5,
//         },
//         {
//             id: 6,
//             image: slideData.image6,
//             title: slideData.title6,
//             desc: slideData.desc6,
//         },
//     ];

//     return (
//         <div className="w-full px-4 container mx-auto">
//             {/* Latest Launch Section */}
//             <div className="text-center py-12">
//                 <p className="text-xl font-semibold text-[#26326A] uppercase tracking-wide">
//                     {sectionSubtitle}
//                 </p>
//                 <h2 className="text-5xl font-bold mt-2">{sectionTitle}</h2>
//                 <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//                     {sectionDescription}
//                 </p>
//             </div>

//             {/* Swiper Slider */}
//             <div className="relative">
//                 <Swiper
//                     navigation={true}
//                     modules={[Navigation]}
//                     className="rounded-3xl overflow-hidden"
//                 >
//                     {slides.map((slide) => (
//                         <SwiperSlide key={slide.id}>
//                             <div
//                                 className="relative h-[88vh] w-full flex items-center justify-start text-white px-20"
//                                 style={{
//                                     backgroundImage: `url(${slide.image})`,
//                                     backgroundSize: "cover",
//                                     backgroundPosition: "center",
//                                 }}
//                             >
//                                 {/* Dark overlay for better text readability */}
//                                 <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//                                 <div className="p-8 max-w-xl relative z-10">
//                                     <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
//                                     <p className="mb-6 text-xl">{slide.desc}</p>
//                                     <Button 
//                                         text={buttonText} 
//                                         className="text-lg mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-10 py-2 rounded-full transition-colors duration-300" 
//                                     />
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Thumbnails */}
//                 <div className="grid grid-cols-5 gap-2 mt-2">
//                     {slides.slice(0, 5).map((slide) => (
//                         <img
//                             key={slide.id}
//                             src={slide.image}
//                             alt={`Thumbnail ${slide.id}`}
//                             className="h-44 w-full object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// components/HeroSlider.jsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../ui/button";
import { COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function HeroSlider({ data }) {
    // Extract dynamic values for section header
    const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SECTION_SUBTITLE, 0) || 'Our Latest Launch';
    const sectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SECTION_TITLE, 0) || 'Discover Signature Living Spaces';
    const sectionDescription = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SECTION_DESCRIPTION, 0) || 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text over.';
    
    // Extract slide data using position-based approach
    const slideData = {
        image1: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 0) || '/devsImg.png',
        title1: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_1_TITLE, 0) || 'Park Home Developers, Dubai\'s Elite Estate Experts',
        desc1: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_1_DESCRIPTION, 0) || 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
        video1: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 0) || '/dd.mp4',

        
        image2: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 1) || '/devsimg1.png',
        title2: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_2_TITLE, 0) || 'Discover Signature Living Spaces',
        desc2: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_2_DESCRIPTION, 0) || 'Lorem ipsum has been the industry\'s standard dummy text ever since.',
        video2: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 1) || '/dd.mp4',
        
        image3: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 2) || '/devsimg2.png',
        title3: getValueByFieldNameAndPosition(data, 'slide_3_title', 0) || 'Where Vision Meets Value',
        desc3: getValueByFieldNameAndPosition(data, 'slide_3_description', 0) || 'Lorem ipsum is dummy text for real estate presentation.',
        video3: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 2) || '/dd.mp4',
        
        image4: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 3) || '/devsimg3.png',
        title4: getValueByFieldNameAndPosition(data, 'slide_4_title', 0) || 'Where Vision Meets Value',
        desc4: getValueByFieldNameAndPosition(data, 'slide_4_description', 0) || 'Lorem ipsum is dummy text for real estate presentation.',
        video4: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 3) || '/dd.mp4',
        
        image5: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 4) || '/devsimg4.png',
        title5: getValueByFieldNameAndPosition(data, 'slide_5_title', 0) || 'Where Vision Meets Value',
        desc5: getValueByFieldNameAndPosition(data, 'slide_5_description', 0) || 'Lorem ipsum is dummy text for real estate presentation.',
        video5: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 4) || '/dd.mp4',
        
        image6: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 5) || '/devsimg5.png',
        title6: getValueByFieldNameAndPosition(data, 'slide_6_title', 0) || 'Where Vision Meets Value',
        desc6: getValueByFieldNameAndPosition(data, 'slide_6_description', 0) || 'Lorem ipsum is dummy text for real estate presentation.',
        video6: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 5) || '/dd.mp4',
    };

    const buttonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) || 'Explore Now';

    // Build slides array from dynamic data
    const slides = [
        {
            id: 1,
            image: slideData.image1,
            title: slideData.title1,
            description: slideData.desc1,
            video: slideData.video1,
        },
        {
            id: 2,
            image: slideData.image2,
            title: slideData.title2,
            description: slideData.desc2,
            video: slideData.video2,

        },
        {
            id: 3,
            image: slideData.image3,
            title: slideData.title3,
            description: slideData.desc3,
            video: slideData.video3,

        },
        {
            id: 4,
            image: slideData.image4,
            title: slideData.title4,
            description: slideData.desc4,
            video: slideData.video4,

        },
        {
            id: 5,
            image: slideData.image5,
            title: slideData.title5,
            description: slideData.desc5,
            video: slideData.video5,

        },
        {
            id: 6,
            image: slideData.image6,
            title: slideData.title6,
            description: slideData.desc6,
            video: slideData.video6,

        },
    ].filter(slide => slide.title && slide.title !== 'undefined'); // Filter out slides without proper titles

    // console.log('data', data);

  return (
    <div className="w-full px-4 container mx-auto">
      {/* Section Header */}
      <div className="py-8 md:py-12 text-center">
        <p className="text-base md:text-lg font-semibold text-[#26326A] uppercase tracking-wide">
          {sectionSubtitle}
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">{sectionTitle}</h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">{sectionDescription}</p>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center md:justify-start text-white px-4 md:px-12 lg:px-20">
                {/* Video Background */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.video.startsWith('http') ? slide.video : `${Image_URL}/${slide.video}`}
                  autoPlay
                  loop
                  muted
                />
 <div className="absolute inset-0 bg-black/40"></div>
                {/* Slide Content */}
                {/* <div className="p-8 max-w-xl relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="mb-6 text-lg">{slide.desc}</p>
                  <Button
                    text={buttonText}
                    to={slide.link}
                    className="text-lg mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-10 py-2 rounded-full transition-colors duration-300"
                  />
                </div> */}
                 {/* Slide Content */}
                <div
                  className="p-4 md:p-8 max-w-full md:max-w-xl relative z-10 
                  text-center md:text-left 
                  flex flex-col items-center md:items-start justify-center h-full"
                >
                  <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-xs sm:text-sm md:text-base lg:text-lg">
                    {slide.desc}
                  </p>
                  <Button
                    text={buttonText}
                    to={slide.link}
                    className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 md:mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-4 sm:px-6 md:px-10 py-2 rounded-full transition-colors duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

        {/* ✅ Thumbnails */}
        <div className="hidden md:block">
        <div className="grid grid-cols-5 gap-2 mt-2 ">
          {slides.slice(0, 5).map((slide) => (
            <img
              key={slide.id}
              src={slide?.image.startsWith('http') ? slide?.image : `${Image_URL}/${slide?.image}`}
              alt={`Thumbnail ${slide.id}`}
              className="h-44 w-full object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
