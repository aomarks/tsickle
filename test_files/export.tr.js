export { export2, export5, export4 } from './export_helper';
// These conflict with an export discovered via the above exports,
// so the above export's versions should not show up.
export var /** @type {string} */ export1 = 'wins';
export { export4 as export3 } from './export_helper';
// This local should be fine to export.
export var /** @type {number} */ exportLocal = 3;
// The existence of a local should not prevent "export2" from making
// it to the exports list.  export2 should only show up once in the
// above two "export *" lines, though.
let /** @type {number} */ export2 = 3;
