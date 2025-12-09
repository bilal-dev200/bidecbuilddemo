# Dynamic Property Page Implementation

## 🎯 Overview

This document outlines the implementation of dynamic property pages using the same approach as the homepage sections. The property pages now support dynamic content management through API-driven sections with position-based field extraction.

## 🏗️ Architecture

### 1. PropertySections Component (`src/app/PropertySections.js`)

Similar to `HomeSections.js`, this component:
- Fetches property section data from API endpoint: `/website/property/{slug}/show`
- Maps section types to their corresponding components
- Provides loading states and error handling
- Passes structured data to each section component

### 2. Component Structure

```javascript
const PROPERTY_SECTION_COMPONENTS = {
  banner_section: Banners,
  hero_section: HeroSection,
  overview_highlights: OverviewHighlights,
  real_estate_promo: RealEstatePromo,
  gallery_section: GallerySection,
  dubai_island_community: DubaiIslandCommunity,
  amenities_carousel: AmenitiesCarousel,
  payment_plans: PaymentPlansSection,
  floor_plans: FloorPlansSection,
  location_section: LocationSection,
  investment_opportunity: InvestmentOpportunity,
  faq_section: FAQSection,
  project_section: ProjectSection,
  breaking_news: BreakingNewsSection,
};
```

## 🔧 Updated Components

### 1. Banner Section
- **File**: `src/components/WebsiteComponents/RealstatepageStatic/banner.jsx`
- **Features**:
  - Video/Image background support
  - Dynamic text extraction (main text, heading, description, button)
  - Responsive design with overlay

### 2. Hero Section  
- **File**: `src/components/WebsiteComponents/PropertyPageStatic/HeroSection.jsx`
- **Features**:
  - Image carousel with navigation
  - Dynamic content extraction
  - Auto-slide functionality
  - Responsive indicators

### 3. Overview Highlights
- **File**: `src/components/WebsiteComponents/PropertyPageStatic/OverviewHighlight.jsx`
- **Features**:
  - Dynamic feature extraction (up to 6 features)
  - Left/right column layout
  - Blue section with background image

## 📋 Usage Pattern

### API Endpoint Structure
```javascript
// Expected API response structure
{
  "sections": [
    {
      "id": 1,
      "type": "banner_section",
      "title": "Property Banner",
      "sort_order": 1,
      "form_fields": [...],
      "results": [...]
    },
    // ... more sections
  ],
  "results": [
    {
      "section_id": 1,
      "section_form_field_id": 123,
      "value": "Dynamic content value"
    }
    // ... more results
  ]
}
```

### Field Extraction Examples
```javascript
// Banner Section Fields
const mainText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0);
const heading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0);
const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0);
const backgroundMedia = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0);

// Hero Section Fields
const heroHeading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0);
const description1 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0);
const description2 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 1);

// Multiple Images Support
const images = [
  getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 0),
  getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 1),
  getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 2),
].filter(img => img && img !== 'undefined');

// Overview Features (up to 6 features)
const features = Array.from({length: 6}, (_, i) => ({
  title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, i),
  description: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, i)
})).filter(feature => feature.title && feature.description);
```

## 🚀 Implementation Steps

### 1. Update Property Page Route
```javascript
// src/app/update-all-properties/[slug]/page.js
import PropertySections from "@/app/PropertySections";

export default async function PropertyPage({ params }) {
  const { slug } = params;
  
  return (
    <section className="relative w-full bg-white">
      <PropertySections slug={slug} />
    </section>
  );
}
```

### 2. API Integration
The PropertySections component expects an API endpoint:
```
GET /website/property/{slug}/show
```

Response should follow the same structure as homepage sections with:
- `sections[]` - Array of section definitions
- `results[]` - Array of field values

### 3. Component Updates
Each property component has been updated to use:
- `getValueByFieldNameAndPosition()` for dynamic field extraction
- Position-based field access for multiple values with same name
- Fallback values for missing data
- Console logging for debugging

## 📊 Supported Section Types

| Section Type | Component | Description |
|-------------|-----------|-------------|
| `banner_section` | Banners | Hero banner with video/image background |
| `hero_section` | HeroSection | Content section with image carousel |
| `overview_highlights` | OverviewHighlights | Property features and highlights |
| `real_estate_promo` | RealEstatePromo | Promotional content section |
| `gallery_section` | GallerySection | Image gallery display |
| `dubai_island_community` | DubaiIslandCommunity | Community information |
| `amenities_carousel` | AmenitiesCarousel | Amenities showcase |
| `payment_plans` | PaymentPlansSection | Payment plan details |
| `floor_plans` | FloorPlansSection | Floor plan layouts |
| `location_section` | LocationSection | Location and map information |
| `investment_opportunity` | InvestmentOpportunity | Investment details |
| `faq_section` | FAQSection | Frequently asked questions |
| `project_section` | ProjectSection | Related projects |
| `breaking_news` | BreakingNewsSection | News and updates |

## 🎨 Field Mapping

### Common Fields Used:
- `HEADING` - Main titles
- `SUB_HEADING` - Subtitles and labels  
- `DESCRIPTION` - Content paragraphs (supports multiple positions)
- `IMAGE` - Background images and media
- `SLIDE_IMAGE` - Carousel images (supports multiple positions)
- `FEATURE_TITLE` - Feature names (supports multiple positions)
- `FEATURE_DESCRIPTION` - Feature descriptions (supports multiple positions)
- `BUTTON_TEXT` - Button labels
- `TITLE` - Secondary titles

## 🔍 Debugging

Each component includes console logging:
```javascript
console.log('ComponentName data:', data);
```

This helps track:
- Section data structure
- Field extraction results
- Missing or undefined values

## ✅ Benefits

1. **Consistency**: Same approach as homepage sections
2. **Flexibility**: Easy to add/remove/reorder sections
3. **Scalability**: Support for unlimited properties
4. **Maintainability**: Centralized field extraction logic
5. **Performance**: Dynamic loading with proper error handling

## 🔄 Migration from Static

The previous static approach using JSON files:
```javascript
// OLD - Static JSON approach
const data = properties[slug];
<OverviewHighlights data={data.overviewData} />
```

Has been replaced with:
```javascript
// NEW - Dynamic API approach  
<PropertySections slug={slug} />
// Components automatically receive structured data
```

## 📝 Next Steps

1. **API Implementation**: Set up the property sections API endpoint
2. **Admin Interface**: Create forms for managing property sections
3. **Additional Components**: Update remaining components to use dynamic fields
4. **Testing**: Test with various property configurations
5. **SEO**: Implement dynamic meta tags based on property data

This implementation provides a robust, scalable solution for managing property pages dynamically while maintaining consistency with the homepage approach. 