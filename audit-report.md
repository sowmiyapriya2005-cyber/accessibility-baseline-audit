# Accessibility Audit Report

## 1. Introduction

This report documents the accessibility audit of the UIDAI official website using Google Lighthouse.

## 2. Website Details

- Website: UIDAI Official Website
- URL: https://uidai.gov.in/
- Tool Used: Google Lighthouse
- Device: Desktop

## 3. Lighthouse Scores

| Category | Score |
|---|---:|
| Performance | 66 |
| Accessibility | 90 |
| Best Practices | 96 |

## 4. Identified Issues

### Issue 1: Buttons do not have an accessible name

- Issue ID: WEB-001
- WCAG Reference: 4.1.2
- Severity: Medium
- Evidence: Lighthouse detected 3 buttons without accessible names.
- User Impact: Screen reader users cannot identify button purposes.
- Recommendation: Add meaningful accessible names using text or aria-label.

### Issue 2: Touch targets do not have sufficient size or spacing

- Issue ID: WEB-002
- WCAG Reference: 2.5.8 (To be verified)
- Severity: Medium
- Evidence: Lighthouse detected multiple touch targets with insufficient size or spacing.
- User Impact: Mobile users may find small buttons difficult to tap.
- Recommendation: Increase button size and provide sufficient spacing between clickable elements.

## 5. Conclusion

The UIDAI website achieved an accessibility score of 90. The audit identified two issues that require further review and improvement.
