---
name: Monochrome Architectural Archive
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 112px
    fontWeight: '400'
    lineHeight: 104px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: '0'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-base:
    fontFamily: Source Serif 4
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Source Serif 4
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.04em
  caption:
    fontFamily: Source Serif 4
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
spacing:
  rule-hairline: 1px
  rule-bold: 4px
  rule-ultra: 8px
  unit-2xs: 0.25rem
  unit-xs: 0.5rem
  unit-sm: 0.75rem
  unit-md: 1rem
  unit-lg: 1.5rem
  unit-xl: 2.5rem
  unit-2xl: 4rem
  unit-3xl: 6rem
  unit-void: 10rem
  gutter-desktop: 2rem
  margin-desktop: 4rem
  gutter-mobile: 1rem
  margin-mobile: 1.25rem
---

## Brand & Style
The design system manifests the deliberate rigor of architectural monographs, luxury archival publishing, and high-fashion editorial direction. Rooted in stark, unapologetic minimalism, the UI treats the digital screen as an ink-on-paper printed catalog. Visual hierarchy relies purely on scale, proportion, hairline division, and spatial tension rather than decorative ornament or synthetic color.

The emotional signature is austere, intellectual, authoritative, and tranquil. The audience comprises collectors, curators, architects, and discerning connoisseurs who value reduction, deliberate rhythm, and museum-grade typographic discipline.

## Colors
The color palette is strictly non-chromatic, consisting of absolute values and precise mid-tones:

- **Absolute Black (`#000000`)**: Primary typography, heavy architectural structural frames, and inverted background containers.
- **Absolute White (`#FFFFFF`)**: Primary page canvas, negative space voids, and reverse-contrast typography.
- **Hairline Border (`#E5E5E5`)**: 1px structural dividing lines and subtle framework grids.
- **Muted Carbon (`#525252`)**: Secondary metadata, publication footnotes, and subordinate image captions.

Accents, chromatic status states, gradients, and saturated hues are prohibited. Interactive states rely strictly on binary color inversion (swapping pure black for pure white) or shifting border thickness.

## Typography
Typographic rhythm sets the intellectual tone of this design system. It is composed of three contrasting typographic families:

1. **Playfair Display**: Classical, high-contrast transitional serif used exclusively for exhibition headers, section titles, and dramatic scale statements.
2. **Source Serif 4**: Editorial, highly legible book serif designed for immersive editorial prose, essay excerpts, and structural narrative text.
3. **JetBrains Mono**: Technical, monospaced typography utilized in all-caps tracking for catalogue numbers, index codes, metadata tables, interface tags, and timestamps.

Editorial styling conventions:
- Hero headlines should consistently use tight negative tracking (`-0.03em` to `-0.04em`) to mirror physical publication titling.
- All functional labels and tags must be rendered uppercase using `JetBrains Mono` with generous tracking (`0.14em`).
- Body text blocks must maintain optimal measure between 45 and 65 characters per line to emulate book page composition.

## Layout & Spacing
The layout follows a rigid structural grid inspired by Swiss poster design and classical architectural catalog plates.

- **Desktop (1024px and above)**: A 12-column architectural grid with `2rem` (32px) gutters and `4rem` (64px) global page margins. Sections alternate between dense data matrices and vast negative space voids (`unit-void` / 160px).
- **Tablet (768px - 1023px)**: An 8-column layout with `1.5rem` gutters and `2.5rem` margins.
- **Mobile (below 768px)**: A 4-column layout with `1rem` gutters and `1.25rem` margins. Editorial display typography shifts to mobile-specific scale tokens (`headline-xl-mobile`, `display-hero-mobile`).

Content is compartmentalized with architectural rules rather than soft cards. Continuous structural dividers (1px `#E5E5E5` or 4px `#000000`) segment layout regions both vertically and horizontally, evoking blueprint drawings and editorial matrices.

## Elevation & Depth
This design system operates strictly within a flat 2D plane:

- **Drop Shadows**: Strictly forbidden (`box-shadow: none` across every element, dialog, popup, and surface).
- **Depth via Inversion**: True depth is achieved by stark tonal inversion. High-priority surfaces, featured monograph cards, and elevated callouts invert the page palette—utilizing an absolute black background (`#000000`) with pure white text (`#FFFFFF`).
- **Hierarchy via Rule Weight**: 
  - Standard structural framing uses 1px hairlines (`#E5E5E5`).
  - Active, focused, or prioritized content tiers scale to a 4px solid black rule (`#000000`).
  - Hero dividers and primary structural breaks leverage an 8px ultra architectural line (`#000000`).
- **Surface Texture**: Background surfaces may incorporate an imperceptible fine-grain tactile paper noise (monochromatic, 1.5% opacity) to eliminate digital sterility and simulate uncoated cotton archival paper.
- **Transition Dynamics**: All state changes (hover, focus, toggles) are executed with an immediate, decisive `100ms ease-out` transition. Floating, drifting, or spring physics are disallowed.

## Shapes
The shape language is strictly architectural and Euclidean. Every corner across all inputs, modals, image containers, badges, and buttons is engineered to a sharp 90-degree angle (`border-radius: 0px`). Rounded corners, pills, and organic organic curves are antithetical to the design system.

## Components

### Buttons & Interactive Links
- **Primary Action**: A sharp rectangular box with an absolute black fill (`#000000`), white typography (`#FFFFFF`, `label-caps`), and zero radius. Hover state triggers a total inversion: white fill (`#FFFFFF`), black text (`#000000`), and a 1px solid black border (`#000000`) in 100ms.
- **Secondary Action / Ghost**: Transparent fill, 1px hairline black border (`#000000`), black text (`#000000`, `label-caps`). Hover fills completely with `#000000` and shifts text to `#FFFFFF`.
- **Editorial Text Link**: Inline serif with a crisp 1px underline positioned with a 4px baseline offset. On hover, the underline thickens to 2px solid black.

### Form Inputs & Selectors
- **Text Fields**: Flat transparent background with a 1px solid bottom border (`#000000` or `#E5E5E5`) or full 1px wireframe box. No roundedness. Text is set in `Source Serif 4` for content entry, paired with floating uppercase labels in `JetBrains Mono`.
- **Focus State**: Hairline border immediately jumps to a 2px or 4px solid black border (`#000000`). No glowing rings or soft halos.
- **Checkboxes & Radios**: 
  - Checkboxes are 16x16px square wireframes with 1px black borders. Checked state is an absolute black solid square fill with no interior iconography.
  - Radio options are 16x16px square wireframes with a solid 8x8px inner black square when selected (maintaining sharp rectangular geometry rather than circles).

### Cards & Catalogue Blocks
- **Monograph Frame**: Content containers with 0px corner radius, framed by a 1px `#E5E5E5` hairline.
- **Inverted Showcase Card**: Full `#000000` background container with `#FFFFFF` headers, `#E5E5E5` body copy, and `#525252` archival indexes.
- **Image Treatment**: Architectural photographs must align flush to bounding box lines without soft margins, accompanied by lower-edge captions formatted in `caption` with a trailing mono accession number.

### Lists & Index Rows
- Horizontal rows bordered by top and bottom 1px `#E5E5E5` hairlines.
- Each row pairs an accession index (e.g., `001 // ARCHIVE`) in `JetBrains Mono` with the entry title in `Playfair Display`.
- Hovering an entire row turns the background solid black (`#000000`) and the row's typography pure white (`#FFFFFF`) instantaneously.

### Editorial Metadata Badges (Chips)
- Sharp rectangular wireframes: 1px black outline, transparent interior, padding `4px 8px`.
- Typography is strictly `label-caps` in `JetBrains Mono`, tracking at `0.14em`.