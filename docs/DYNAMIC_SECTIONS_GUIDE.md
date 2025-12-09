# Dynamic Sections Implementation Guide

## Overview

This guide explains how to implement dynamic sections in the Park Home frontend application. The system allows content administrators to manage section content through an API, making the website highly customizable without code changes.

## Architecture

### Data Flow
1. **API Response**: `/website/home/show` returns section configuration data
2. **HomeSections Component**: Fetches data and maps sections to components
3. **Individual Components**: Receive dynamic data via props and render accordingly

### Data Structure

Each section follows this structure:

```json
{
  "id": 2,
  "page_id": 3,
  "title": "Banner",
  "type": "section_one",
  "sort_order": 1,
  "status": 1,
  "form_fields": [
    {
      "id": 4,
      "section_id": 2,
      "label": "Heading",
      "name": "heading",
      "type": "text",
      "is_required": 1,
      "sort_order": 1,
      "status": 1
    }
  ],
  "results": [
    {
      "id": 2,
      "section_form_field_id": 4,
      "section_id": 2,
      "page_id": 3,
      "value": "Explore a wide range of properties"
    }
  ]
}
```

## Implementation Steps

### 1. Import Utility Functions

```javascript
import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
```

### 2. Update Component Props

Add `data` prop to your component:

```javascript
const YourComponent = ({ data }) => {
  // Component implementation
};
```

### 3. Extract Dynamic Values

Use the helper function to extract field values:

```javascript
const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || 'Default Heading';
const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || 'Default description';
const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || '/default-image.png';
```

### 4. Use Extracted Values in JSX

Replace hardcoded content with dynamic values:

```javascript
return (
  <div>
    <h1>{heading}</h1>
    <p>{description}</p>
    <img src={image} alt={heading} />
  </div>
);
```

## Available Helper Functions

### `getFieldValue(sectionData, fieldName)`
Extracts a single field value from section data.

**Parameters:**
- `sectionData`: The section data object
- `fieldName`: The name of the field to extract

**Returns:** String value or null

### `getMultipleFieldValues(sectionData, fieldNames)`
Extracts multiple field values at once.

**Parameters:**
- `sectionData`: The section data object  
- `fieldNames`: Array of field names to extract

**Returns:** Object with field names as keys

### `findSectionByIdentifier(sections, identifier)`
Finds a specific section from an array of sections.

**Parameters:**
- `sections`: Array of section objects
- `identifier`: Section type or title to search for

**Returns:** Found section object or null

## Common Field Names

Use the predefined constants for consistency:

```javascript
COMMON_FIELD_NAMES = {
  HEADING: 'heading',
  SUB_HEADING: 'sub_heading', 
  DESCRIPTION: 'description',
  IMAGE: 'image',
  BUTTON_TEXT: 'button_text',
  BUTTON_LINK: 'button_link',
  CONTENT: 'content',
  TITLE: 'title',
  SUBTITLE: 'subtitle'
}
```

## Example Implementation

### Before (Static)
```javascript
const StaticComponent = () => {
  return (
    <div>
      <h1>Welcome to Park Home</h1>
      <p>Discover amazing properties</p>
      <img src="/static-image.jpg" alt="Property" />
    </div>
  );
};
```

### After (Dynamic)
```javascript
import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

const DynamicComponent = ({ data }) => {
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || 'Welcome to Park Home';
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || 'Discover amazing properties';
  const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || '/static-image.jpg';

  return (
    <div>
      <h1>{heading}</h1>
      <p>{description}</p>
      <img src={image} alt={heading} />
    </div>
  );
};
```

## Best Practices

### 1. Always Provide Fallbacks
Ensure your component works even without dynamic data:

```javascript
const title = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || 'Default Title';
```

### 2. Handle Missing Data Gracefully
Check if data exists before processing:

```javascript
if (!data) {
  return <DefaultComponent />;
}
```

### 3. Use Meaningful Default Values
Choose defaults that make sense for your component's context.

### 4. Test with and without Dynamic Data
Ensure your component works in both scenarios.

### 5. Log for Debugging
Add console logs during development to understand data flow:

```javascript
console.log('Section data:', data);
console.log('Extracted heading:', heading);
```

## Extending Field Types

To add new field types, update the `COMMON_FIELD_NAMES` constant:

```javascript
export const COMMON_FIELD_NAMES = {
  // ... existing fields
  VIDEO_URL: 'video_url',
  CTA_TEXT: 'cta_text',
  BACKGROUND_COLOR: 'background_color'
};
```

## Component Registration

Register your dynamic component in `HomeSections.js`:

```javascript
const SECTION_COMPONENTS = {
  section_one: BannerSlider,
  section_two: VisionMeetsValue,
  section_three: YourNewComponent, // Add here
  // ... other components
};
```

## Troubleshooting

### Common Issues

1. **Component not rendering**: Check if it's registered in `SECTION_COMPONENTS`
2. **Data not available**: Verify API response structure
3. **Field not found**: Ensure field name matches exactly in the database
4. **Fallback not working**: Check if default values are properly set

### Debugging Steps

1. Check browser console for data logs
2. Verify API response in Network tab
3. Confirm section type mapping in `HomeSections.js`
4. Test with hardcoded data first

## Examples in Codebase

- **BannerSlider**: `src/components/homeComp/BannerSlider.jsx`
- **VisionMeetsValue**: `src/components/homeComp/VisionMeetsValue.jsx`
- **Utility Functions**: `src/lib/utils/sectionDataHelpers.js`

This dynamic approach allows for flexible content management while maintaining code quality and component reusability. 