/**
 * Helper functions for extracting data from dynamic section structure
 */

/**
 * Extract field value from section data based on field name
 * @param {Object} sectionData - The section data containing form_fields and results
 * @param {string} fieldName - The name of the field to extract (e.g., "heading", "sub_heading", "image")
 * @returns {string|null} - The field value or null if not found
 */
export const getFieldValue = (sectionData, fieldName) => {
  if (!sectionData?.form_fields || !sectionData?.results) return null;

  // Find the form field with the matching name
  const formField = sectionData.form_fields.find(
    (field) => field.name === fieldName
  );
  if (!formField) return null;

  // Find the result with matching section_form_field_id
  const result = sectionData.results.find(
    (result) => result.section_form_field_id === formField.id
  );
  return result?.value || null;
};

/**
 * Extract all field values for fields with the same name (handles duplicates)
 * @param {Object} sectionData - The section data containing form_fields and results
 * @param {string} fieldName - The name of the field to extract
 * @returns {Array} - Array of field values for all fields with the given name
 */
export const getMultipleFieldValuesByName = (sectionData, fieldName) => {
  if (!sectionData?.form_fields || !sectionData?.results) return [];

  // Find all form fields with the matching name
  const formFields = sectionData.form_fields.filter(
    (field) => field.name === fieldName
  );
  if (!formFields.length) return [];

  // Get results for all matching fields, sorted by form field sort_order
  const values = formFields
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((formField) => {
      const result = sectionData.results.find(
        (result) => result.section_form_field_id === formField.id
      );
      return result?.value || null;
    })
    .filter((value) => value !== null);

  return values;
};

/**
 * Extract multiple field values at once (original function)
 * @param {Object} sectionData - The section data containing form_fields and results
 * @param {Array<string>} fieldNames - Array of field names to extract
 * @returns {Object} - Object with field names as keys and their values
 */
export const getMultipleFieldValues = (sectionData, fieldNames) => {
  const values = {};
  fieldNames.forEach((fieldName) => {
    values[fieldName] = getFieldValue(sectionData, fieldName);
  });
  return values;
};

/**
 * Extract field value by field ID (most specific)
 * @param {Object} sectionData - The section data containing form_fields and results
 * @param {number} fieldId - The ID of the specific form field
 * @returns {string|null} - The field value or null if not found
 */
export const getFieldValueById = (sectionData, fieldId) => {
  if (!sectionData?.results) return null;

  const result = sectionData.results.find(
    (result) => result.section_form_field_id === fieldId
  );
  return result?.value || null;
};

/**
 * Get all field values organized by their position/sort_order
 * @param {Object} sectionData - The section data containing form_fields and results
 * @returns {Object} - Object with field data including name, value, sort_order, and id
 */
export const getAllFieldValuesSorted = (sectionData) => {
  if (!sectionData?.form_fields || !sectionData?.results) return [];

  return sectionData.form_fields
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((formField) => {
      const result = sectionData.results.find(
        (result) => result.section_form_field_id === formField.id
      );
      return {
        id: formField.id,
        name: formField.name,
        label: formField.label,
        sort_order: formField.sort_order,
        value: result?.value || null,
        type: formField.type,
        is_required: formField.is_required,
      };
    });
};

/**
 * Get field values by name with their positions (for handling duplicates)
 * @param {Object} sectionData - The section data containing form_fields and results
 * @param {string} fieldName - The name of the field to extract
 * @returns {Array} - Array of objects with field data for all fields with the given name
 */
// export const getFieldValuesByNameWithPosition = (sectionData, fieldName) => {
//   if (!sectionData?.form_fields || !sectionData?.results) return [];

//   return sectionData.form_fields
//     .filter((field) => field.name === fieldName)
//     .sort((a, b) => a.sort_order - b.sort_order)
//     .map((formField, index) => {
//       const result = sectionData.results.find(
//         (result) => result.section_form_field_id === formField.id
//       );
//       return {
//         id: formField.id,
//         name: formField.name,
//         label: formField.label,
//         sort_order: formField.sort_order,
//         position: index, // 0-based position among fields with same name
//         value: result?.value || null,
//         type: formField.type,
//         is_required: formField.is_required,
//       };
//     });
// };

export const getFieldValuesByNameWithPosition = (sectionData, fieldName) => {
  if (!sectionData?.form_fields || !sectionData?.results) return [];

  return sectionData.form_fields
    .filter((field) => field.name === fieldName)
    .sort((a, b) => a.sort_order - b.sort_order)
    .flatMap((formField, index) => {
      const results = sectionData.results.filter(
        (result) => result.section_form_field_id === formField.id
      );

      // if multiple results exist for the same formField
      return results.length > 0
        ? results.map((result, i) => ({
          id: formField.id,
          name: formField.name,
          label: formField.label,
          sort_order: formField.sort_order,
          position: index, // position among fields with same name
          value: result?.value || null,
          type: formField.type,
          is_required: formField.is_required,
        }))
        : [
          {
            id: formField.id,
            name: formField.name,
            label: formField.label,
            sort_order: formField.sort_order,
            position: index,
            value: null,
            type: formField.type,
            is_required: formField.is_required,
          },
        ];
    });
};
/**
 * Robust field value extraction that handles data inconsistencies
 * This function can handle cases where multiple results exist for the same field ID
 * @param {Object} sectionData - The section data containing form_fields and results
 * @param {string} fieldName - The name of the field to extract
 * @returns {Array} - Array of objects with field data, handling inconsistencies intelligently
//  */
// export const getRobustFieldValuesByName = (sectionData, fieldName) => {
//   if (!sectionData?.form_fields || !sectionData?.results) return [];

//   // Get all form fields with the matching name, sorted by sort_order
//   const formFields = sectionData.form_fields
//     .filter((field) => field.name === fieldName)
//     .sort((a, b) => a.sort_order - b.sort_order);

//   if (formFields.length === 0) return [];

//   const allResults = sectionData.results;
//   const fieldValues = [];

//   // For each form field, try to find corresponding results
//   formFields.forEach((field, fieldIndex) => {
//     // First, try to find exact match by section_form_field_id
//     let result = allResults.find((r) => r.section_form_field_id === field.id);

//     // If no exact match found, try to handle data inconsistencies
//     if (!result && fieldIndex > 0) {
//       // Look for extra results associated with previous fields
//       const previousFieldResults = allResults.filter((r) =>
//         formFields
//           .slice(0, fieldIndex)
//           .some((prevField) => prevField.id === r.section_form_field_id)
//       );

//       // If there are more results than previous fields, use the extra ones
//       const expectedPreviousResults = fieldIndex;
//       if (previousFieldResults.length > expectedPreviousResults) {
//         result = previousFieldResults[expectedPreviousResults];
//       }
//     }

//     fieldValues.push({
//       id: field.id,
//       name: field.name,
//       label: field.label,
//       sort_order: field.sort_order,
//       position: fieldIndex,
//       value: result?.value || null,
//       type: field.type,
//       is_required: field.is_required,
//       result_id: result?.id || null,
//     });
//   });

//   return fieldValues;
// };
export const getRobustFieldValuesByName = (sectionData, fieldName) => {
  if (!sectionData?.form_fields || !sectionData?.results) return [];

  // Get all form fields with the matching name, sorted by sort_order
  const formFields = sectionData.form_fields
    .filter((field) => field.name === fieldName)
    .sort((a, b) => a.sort_order - b.sort_order);

  if (formFields.length === 0) return [];

  const allResults = sectionData.results;
  const fieldValues = [];

  formFields.forEach((field, fieldIndex) => {
    // Get all results for this field
    const resultsForField = allResults.filter(
      (r) => r.section_form_field_id === field.id
    );

    // If no results found, still push a placeholder
    if (resultsForField.length === 0) {
      fieldValues.push({
        id: field.id,
        name: field.name,
        label: field.label,
        sort_order: field.sort_order,
        position: fieldIndex,
        value: null,
        type: field.type,
        is_required: field.is_required,
        result_id: null,
      });
    } else {
      // Push all results for this field
      resultsForField.forEach((result, resultIndex) => {
        fieldValues.push({
          id: field.id,
          name: field.name,
          label: field.label,
          sort_order: field.sort_order,
          position: fieldIndex, // still keep track of the field index
          value: result.value || null,
          type: field.type,
          is_required: field.is_required,
          result_id: result.id,
          result_position: resultIndex, // extra: which result under this field
        });
      });
    }
  });

  return fieldValues;
};

/**
 * Create a structured object with all field values organized by field name and position
 * This provides a complete mapping of all section data for easy consumption
 * @param {Object} sectionData - The section data containing form_fields and results
 * @returns {Object} - Structured object with field names as keys and arrays of values
 */
export const createStructuredFieldMap = (sectionData) => {
  if (!sectionData?.form_fields || !sectionData?.results) return {};

  const fieldMap = {};

  // Get unique field names
  const uniqueFieldNames = [
    ...new Set(sectionData.form_fields.map((field) => field.name)),
  ];

  // For each unique field name, get all values using robust extraction
  uniqueFieldNames.forEach((fieldName) => {
    const fieldValues = getRobustFieldValuesByName(sectionData, fieldName);
    fieldMap[fieldName] = fieldValues;
  });

  return fieldMap;
};

export const highlightText = (text, start, end, highlightClass = "text-[#FFD700]") => {
  const before = text.slice(0, start);
  const highlight = text.slice(start, end);
  const after = text.slice(end);

  return (
    <>
      {before}
      <span className={`ebrima-bold ${highlightClass}`}>{highlight}</span>
      {after}
    </>
  );
};


/**
 * Simple helper to get a single value by field name and position
 * @param {Object} sectionData - The section data
 * @param {string} fieldName - The field name to extract
 * @param {number} position - The position (0-based) among fields with the same name
 * @returns {string|null} - The field value or null
 */
export const getValueByFieldNameAndPosition = (
  sectionData,
  fieldName,
  position = 0
) => {
  const fieldValues = getRobustFieldValuesByName(sectionData, fieldName);
  return fieldValues[position]?.value || null;
};

export const getImageAltTextByFieldNameAndPosition = (
  sectionData,
  fieldName,
  position = 0
) => {
  if (!sectionData?.results || !sectionData?.form_fields) return null;

  // 🔹 Find the form field matching the given field name
  const matchedField = sectionData.form_fields.find(
    (f) => f.name === fieldName
  );

  if (!matchedField) {
    console.warn(`❌ No form_field found for name: ${fieldName}`);
    return null;
  }

  // 🔹 Find the result linked to that form field ID
  const matchedResult = sectionData.results.find(
    (res) => res.section_form_field_id === matchedField.id
  );

  if (!matchedResult) {
    console.warn(`⚠️ No result found for field: ${fieldName}`);
    return null;
  }

  // 🔹 Check for media array
  if (!Array.isArray(matchedResult.media) || matchedResult.media.length === 0) {
    console.warn(`⚠️ No media found for field: ${fieldName}`);
    return null;
  }

  const media = matchedResult.media;

  // 🔹 Ensure safe position
  const safePosition =
    position < 0 ? 0 : position >= media.length ? media.length - 1 : position;

  console.log(`📸 Media found for '${fieldName}':`, media);

  // 🔹 Return alt text
  const altText = media[safePosition]?.alt_text || null;
  console.log(`✅ Alt text for '${fieldName}' [${safePosition}]:`, altText);

  return altText;
};




/**
 * Get all available field names from a section
 * @param {Object} sectionData - The section data containing form_fields
 * @returns {Array<string>} - Array of available field names
 */
export const getAvailableFieldNames = (sectionData) => {
  if (!sectionData?.form_fields) return [];
  return sectionData.form_fields.map((field) => field.name);
};

/**
 * Find a specific section from an array of sections by type or title
 * @param {Array} sections - Array of section objects
 * @param {string} identifier - Section type or title to search for
 * @returns {Object|null} - Found section or null
 */
export const findSectionByIdentifier = (sections, identifier) => {
  if (!Array.isArray(sections)) return null;

  return (
    sections.find(
      (section) =>
        section.type === identifier ||
        section.title?.toLowerCase().includes(identifier.toLowerCase())
    ) || null
  );
};

/**
 * Check if section data has the expected structure
 * @param {Object} sectionData - The section data to validate
 * @returns {boolean} - True if structure is valid
 */
export const isValidSectionData = (sectionData) => {
  return !!(
    sectionData &&
    typeof sectionData === "object" &&
    Array.isArray(sectionData.form_fields) &&
    Array.isArray(sectionData.results)
  );
};

/**
 * Common field names used across components
 */
export const COMMON_FIELD_NAMES = {
  // Basic content fields
  HEADING: 'heading',
  SUB_HEADING: 'sub_heading',
  DESCRIPTION: 'description',
  IMAGE: 'image',
  BUTTON_TEXT: 'button_text',
  BUTTON_LINK: 'button_link',
  BUTTON: 'button',
  CONTENT: 'content',
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  CARD: 'card',
  COLUMN: 'column',
  LIST1: 'List1',
  LIST2: "List2",
  LIST3: "List3",
  LIST4: "List4",
  LIST5: "List5",
  LIST6: "List6",
  LIST7: "List7",
  LIST8: "List8",
  LIST9: "List9",
  LIST10: "List10",
  LIST11: "List11",
  LIST12: "List12",
  LIST13: "List13",
  LIST14: "List14",
  LIST15: "List15",
  BUTTONBGCOLOR:"button_color",
  BUTTONTEXTCOLOR:"button_text_color",
  TEXTEDITOR:"text_editor",







  COLUMN: 'column',
  BOOLEANVALUE: 'boolean_value',


  // Section specific fields
  SECTION_TITLE: "section_title",
  SECTION_SUBTITLE: "section_subtitle",
  SECTION_DESCRIPTION: "section_description",

  // Button variations
  PRIMARY_BUTTON_TEXT: "primary_button_text",
  SECONDARY_BUTTON_TEXT: "secondary_button_text",
  PRIMARY_BUTTON_LINK: "primary_button_link",
  SECONDARY_BUTTON_LINK: "secondary_button_link",
  SUBMIT_BUTTON_TEXT: "submit_button_text",

  // Slide content (for sliders/carousels)
  SLIDE_VIDEO: 'video_url',
  SLIDE_IMAGE: 'slide_image',
  SLIDE_TITLE: 'slide_title',
  SLIDE_DESCRIPTION: 'slide_description',

  // Project/listing fields
  PROJECT_IMAGE: 'project_image',
  PROJECT_TITLE: 'project_title',
  PROJECT_DESCRIPTION: 'project_description',
  PROJECT_LOCATION: 'project_location',
  PROJECT_PRICE: 'project_price',
  PROJECT_BEDS: 'project_beds',
  PROJECT_BATHS: 'project_baths',
  PROJECT_SIZE: 'project_size',

  // Feature/service fields
  FEATURE_ICON_WHITE: 'feature_icon_white',
  FEATURE_ICON_BLACK: 'feature_icon_black',
  FEATURE_NAME: 'feature_name',
  FEATURE_IMAGE: 'feature_image',
  FEATURE_TITLE: 'feature_title',
  FEATURE_DESCRIPTION: 'feature_description',
  FEATURE_DESCRIPTION1: 'feature_description1',
  FEATURE_DESCRIPTION2: 'feature_description2',




  // Stats/metrics fields
  STAT_VALUE: 'stat_value',
  STAT_LABEL: 'stat_label',

  // Partners/logos
  PARTNER_IMAGE: 'partner_image',

  // News/articles
  NEWS_TITLE: 'news_title',
  NEWS_DESCRIPTION: 'news_description',
  NEWS_IMAGE: 'news_image',
  NEWS_LINK: 'news_link',

  // Testimonials
  TESTIMONIAL_NAME: 'testimonial_name',
  TESTIMONIAL_ROLE: 'testimonial_role',
  TESTIMONIAL_QUOTE: 'testimonial_quote',
  TESTIMONIAL_AVATAR: 'testimonial_avatar',
  TESTIMONIAL_VIDEO: 'testimonial_video',

  FAQ_QUESTION: "faq_question",
  FAQ_ANSWER: "faq_answer",

  // Form fields
  CONFIRMATION_TEXT: "confirmation_text",
  CLOSING_TEXT: "closing_text",
  LOAD_MORE_TEXT: "load_more_text",

  // Media
  HOVER_IMAGE: "hover_image",
  VIDEO_URL: "video_url",

  // CTA/Action fields
  CTA_TEXT: "cta_text",
  CALL_TO_ACTION: "call_to_action",

  // Style/Theme fields
  BACKGROUND_COLOR: "background_color",
  TEXT_COLOR: "text_color",
};


export function highlightLastWords(text, wordCount = 2, color = "") {
  if (!text) return null;

  const words = text.split(" ");
  if (words.length <= wordCount) {
    return <span className={color}>{text}</span>;
  }

  const firstPart = words.slice(0, -wordCount).join(" ");
  const lastPart = words.slice(-wordCount).join(" ");

  return (
    <>
      {firstPart}{" "}
      <span className={`${color} ebrima-bold`}>{lastPart}</span>    </>
  );
}


export const scrollToSection = (id, offset = -100) => {
  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
