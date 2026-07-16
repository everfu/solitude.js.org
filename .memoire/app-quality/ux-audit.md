# Memoire UX Tenets and Traps Audit

Target: `.`
Score: 52/100
Generated: 2026-07-16T11:20:50.369Z

> Statuses: **at-risk** = static-scan findings exist · **protected** = the scan can detect violations and found none · **not-assessed** = no static evidence path exists (unverified, NOT verified-good).

## Tenet Coverage

- **Clarity**: at-risk (ux.color.scale-wide, ux.type.scale-wide, ux.spacing.scale-wide, ux.depth.shadow-drift)
- **Feedback**: not-assessed
- **Control**: protected
- **Consistency**: at-risk (ux.color.raw-hex, ux.color.scale-wide, ux.type.scale-wide, ux.spacing.scale-wide, ux.depth.shadow-drift, ux.maintainability.arbitrary-tailwind)
- **Accessibility**: protected
- **Error Recovery**: not-assessed
- **Progressive Disclosure**: not-assessed
- **Workflow Fit**: at-risk (ux.spacing.scale-wide, ux.maintainability.arbitrary-tailwind)
- **Trust**: at-risk (ux.color.raw-hex)
- **State Continuity**: protected

## Trap Risks

- **Choice Overload**: watch (100/100)
  Fix: Group related choices, reduce simultaneous options, and reveal advanced controls after intent.
- **Layout Instability**: watch (60/100)
  Fix: Add responsive constraints, stable dimensions, overflow rules, and route-level breakpoint coverage.
- **Token Drift**: present (100/100)
  Fix: Promote repeated colors, spacing, type, radius, and elevation into semantic tokens and variants.
- Not assessed by static scan: Silent System, Context Leak, Destructive Default

## Findings

- **HIGH Raw colors are leaking into UI code**
  Traps: token-drift
  Recommendation: Move recurring colors into CSS variables or Tailwind theme tokens.
  Evidence: Hardcoded hex values make redesigns brittle and block consistent theme generation.
- **MEDIUM Color utility surface is too wide**
  Traps: token-drift, choice-overload
  Recommendation: Collapse colors into semantic roles: background, surface, foreground, muted, primary, destructive, success, warning.
  Evidence: A broad color utility set usually means states and surfaces are being styled case by case.
- **MEDIUM Typography scale is drifting**
  Traps: choice-overload, token-drift
  Recommendation: Use a tighter type ramp and reserve large sizes for page-level hierarchy.
  Evidence: Many text sizes make hierarchy harder to read and harder to maintain.
- **MEDIUM Spacing scale is too loose**
  Traps: choice-overload, layout-instability, token-drift
  Recommendation: Normalize spacing around a smaller set of layout and component gaps.
  Evidence: Large spacing variety creates an uneven rhythm across routes and components.
- **MEDIUM Shadow styles are inconsistent**
  Traps: choice-overload, token-drift
  Recommendation: Define one elevation scale and reserve shadows for layered surfaces.
  Evidence: Many shadow treatments create noisy depth and weak hierarchy.
- **MEDIUM Too many arbitrary Tailwind values**
  Traps: token-drift, layout-instability
  Recommendation: Promote repeated arbitrary values into tokens or named utilities.
  Evidence: Arbitrary values are useful during exploration but become design debt when repeated.

## Recommended Tweaks

- Move recurring colors into CSS variables or Tailwind theme tokens.
- Promote repeated colors, spacing, type, radius, and elevation into semantic tokens and variants.
- Collapse colors into semantic roles: background, surface, foreground, muted, primary, destructive, success, warning.
- Group related choices, reduce simultaneous options, and reveal advanced controls after intent.
- Use a tighter type ramp and reserve large sizes for page-level hierarchy.
- Normalize spacing around a smaller set of layout and component gaps.
- Add responsive constraints, stable dimensions, overflow rules, and route-level breakpoint coverage.
