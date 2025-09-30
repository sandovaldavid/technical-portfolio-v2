# Contact Form Feature

## Overview

This feature provides a complete contact form implementation with validation, internationalization, and data processing capabilities. It follows Feature-Sliced Design (FSD) principles and is self-contained within the Features layer.

## Architecture

```bash
src/features/contact-form/
├── index.ts              # Public API exports
├── i18n/                 # Internationalization
│   ├── index.ts
│   ├── en.ts
│   └── es.ts
├── lib/                  # Business logic and utilities
│   ├── contactService.ts # Contact data processing service
│   ├── translations.ts   # Translation utilities
│   └── validation.ts     # Form validation utilities
├── model/                # Types and interfaces
│   └── types.ts
└── ui/                   # UI components
    └── ContactForm.astro # Main contact form component
```

## Features

- ✅ **Form Validation**: Real-time validation with error messages
- ✅ **Internationalization**: Multi-language support (EN/ES)
- ✅ **Data Processing**: Structured data handling and local storage
- ✅ **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Dark Mode Support**: Theme-aware styling
- ✅ **TypeScript**: Full type safety and IntelliSense support

## Usage

### Basic Implementation

```astro
---
import { ContactForm } from '../../../features/contact-form';
---

<ContactForm />
```

### With Custom Props

```astro
---
import { ContactForm } from '../../../features/contact-form';
---

<ContactForm 
  id="custom-contact"
  class="my-custom-styles"
  action="/api/contact"
  method="POST"
/>
```

## Data Flow

1. **User Input**: User fills out the form fields
2. **Validation**: Real-time validation on blur/input events
3. **Submission**: Form submission triggers data processing
4. **Processing**: Contact service processes and structures data
5. **Storage**: Data is stored locally for development/analytics
6. **Backend**: Ready for future API integration

## Service API

The contact service provides the following functions:

### `processContactFormData(formData: FormData): ContactData`

Extracts and structures form data into a standardized format.

### `createContactPayload(contactData: ContactData): ContactRequestPayload`

Prepares contact data for backend submission with metadata.

### `storeContactLocally(contactData: ContactData): void`

Stores contact attempts locally for development and analytics.

### `logContactAttempt(contactData: ContactData): void`

Logs contact attempts for debugging and analytics.

### `submitContactData(payload: ContactRequestPayload): Promise<void>`

Handles contact data submission (currently simulated, ready for backend integration).

## Data Structure

### ContactData

```typescript
interface ContactData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  userAgent: string;
  language: string;
}
```

### ContactRequestPayload

```typescript
interface ContactRequestPayload extends ContactData {
  source: string;
  version: string;
}
```

## Integration with Backend

To integrate with a real backend:

1. Update `submitContactData` in `contactService.ts`
2. Uncomment and modify the fetch implementation
3. Add proper error handling and response processing
4. Update the endpoint URL in the function

Example integration:

```typescript
export async function submitContactData(payload: ContactRequestPayload): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    throw new Error(`Contact submission failed: ${response.statusText}`);
  }
}
```

## Localization

The feature supports multiple languages through the i18n system:

- Translation keys are defined in `i18n/` folder
- Uses `useFeatureTranslations` for component-level translations
- Automatically detects user language and applies appropriate translations

## Development

### Local Storage

Contact attempts are stored in `localStorage` under the key `portfolio-contacts` for development purposes. This helps with:

- Testing form submissions
- Analytics and debugging
- Future data migration

### Logging

All contact attempts are logged to the console with structured data for development and debugging.

## Security Considerations

- Input sanitization is handled at the validation level
- Email validation uses a robust regex pattern
- All user inputs are trimmed and validated
- Ready for backend CSRF and rate limiting integration

## Future Enhancements

- [ ] Email service integration (SendGrid, Nodemailer, etc.)
- [ ] File attachment support
- [ ] Captcha integration for spam prevention
- [ ] Advanced analytics and tracking
- [ ] Custom validation rules and error messages
- [ ] A/B testing for different form layouts
