### Down and dirty React library to connect to Google Analytics V4

### Import functions

`import { initGA4, usePageTracking } from 'react-google-analytics4'`

#### Initialize Google Analytics:

Initialize Analytics with this function in `index.js`

`initGA4(document: Document, measurementId: string)`

* `document`: DOM document (window.document)
* `measurementId`: GA4 Measurement ID

#### GA React Hook

Put this hook at the top-level component and it will send a GA page_view | page_path event for every route change

`usePageTracking()`
