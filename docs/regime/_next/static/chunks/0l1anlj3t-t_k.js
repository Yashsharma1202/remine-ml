(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,85945,e=>{"use strict";var t=e.i(39057),r=e.i(82003),n=e.i(69955),l=e.i(30668),i=e.i(69941),o=e.i(48277),a=`:host {
  all: initial;
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1, 'zero' 0, 'tnum' 0;
  font-size: 13px;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  line-height: 1.4;
  interpolate-size: allow-keywords;

  /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     PRIMITIVES \u2014 raw palette, never change
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

  /* \u2500\u2500 Black (#1c1917) opacity ramp \u2500\u2500 */
  --retune-black: #1c1917;
  --retune-black-5:  color-mix(in srgb, var(--retune-black) 5%, transparent);
  --retune-black-10: color-mix(in srgb, var(--retune-black) 10%, transparent);
  --retune-black-15: color-mix(in srgb, var(--retune-black) 15%, transparent);
  --retune-black-20: color-mix(in srgb, var(--retune-black) 20%, transparent);
  --retune-black-25: color-mix(in srgb, var(--retune-black) 25%, transparent);
  --retune-black-30: color-mix(in srgb, var(--retune-black) 30%, transparent);
  --retune-black-35: color-mix(in srgb, var(--retune-black) 35%, transparent);
  --retune-black-40: color-mix(in srgb, var(--retune-black) 40%, transparent);
  --retune-black-45: color-mix(in srgb, var(--retune-black) 45%, transparent);
  --retune-black-50: color-mix(in srgb, var(--retune-black) 50%, transparent);
  --retune-black-55: color-mix(in srgb, var(--retune-black) 55%, transparent);
  --retune-black-60: color-mix(in srgb, var(--retune-black) 60%, transparent);
  --retune-black-65: color-mix(in srgb, var(--retune-black) 65%, transparent);
  --retune-black-70: color-mix(in srgb, var(--retune-black) 70%, transparent);
  --retune-black-75: color-mix(in srgb, var(--retune-black) 75%, transparent);
  --retune-black-80: color-mix(in srgb, var(--retune-black) 80%, transparent);
  --retune-black-85: color-mix(in srgb, var(--retune-black) 85%, transparent);
  --retune-black-90: color-mix(in srgb, var(--retune-black) 90%, transparent);
  --retune-black-95: color-mix(in srgb, var(--retune-black) 95%, transparent);

  /* \u2500\u2500 White (#ffffff) opacity ramp \u2500\u2500 */
  --retune-white: #ffffff;
  --retune-white-5:  color-mix(in srgb, var(--retune-white) 5%, transparent);
  --retune-white-10: color-mix(in srgb, var(--retune-white) 10%, transparent);
  --retune-white-15: color-mix(in srgb, var(--retune-white) 15%, transparent);
  --retune-white-20: color-mix(in srgb, var(--retune-white) 20%, transparent);
  --retune-white-25: color-mix(in srgb, var(--retune-white) 25%, transparent);
  --retune-white-30: color-mix(in srgb, var(--retune-white) 30%, transparent);
  --retune-white-35: color-mix(in srgb, var(--retune-white) 35%, transparent);
  --retune-white-40: color-mix(in srgb, var(--retune-white) 40%, transparent);
  --retune-white-45: color-mix(in srgb, var(--retune-white) 45%, transparent);
  --retune-white-50: color-mix(in srgb, var(--retune-white) 50%, transparent);
  --retune-white-55: color-mix(in srgb, var(--retune-white) 55%, transparent);
  --retune-white-60: color-mix(in srgb, var(--retune-white) 60%, transparent);
  --retune-white-65: color-mix(in srgb, var(--retune-white) 65%, transparent);
  --retune-white-70: color-mix(in srgb, var(--retune-white) 70%, transparent);
  --retune-white-75: color-mix(in srgb, var(--retune-white) 75%, transparent);
  --retune-white-80: color-mix(in srgb, var(--retune-white) 80%, transparent);
  --retune-white-85: color-mix(in srgb, var(--retune-white) 85%, transparent);
  --retune-white-90: color-mix(in srgb, var(--retune-white) 90%, transparent);
  --retune-white-95: color-mix(in srgb, var(--retune-white) 95%, transparent);

  /* \u2500\u2500 Blue (Figma blue ramp) \u2500\u2500 */
  --retune-blue-100: #F2F9FF;
  --retune-blue-200: #E5F4FF;
  --retune-blue-300: #BDE3FF;
  --retune-blue-400: #80CAFF;
  --retune-blue-500: #0D99FF;
  --retune-blue-600: #007BE5;
  --retune-blue-700: #0768CF;
  --retune-blue-800: #034AC1;
  --retune-blue-900: #093077;
  --retune-blue-1000: #0D193F;

  /* \u2500\u2500 Red (Tailwind red ramp) \u2500\u2500 */
  --retune-red-100: #FFF5F5;
  --retune-red-200: #FFE2E0;
  --retune-red-300: #FFC7C2;
  --retune-red-400: #FFAFA3;
  --retune-red-500: #F24822;
  --retune-red-600: #DC3412;
  --retune-red-700: #BD2915;
  --retune-red-800: #9F1F18;
  --retune-red-900: #771208;
  --retune-red-1000: #660E0B;

  /* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     SEMANTIC \u2014 swap these for dark mode
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

  /* \u2500\u2500 Always (mode-independent) \u2500\u2500 */
  --retune-always-white: #ffffff;
  --retune-always-black: #1c1917;

  /* \u2500\u2500 Text \u2500\u2500 */
  --retune-text: var(--retune-black);
  --retune-text-secondary: var(--retune-black-70);
  --retune-text-tertiary: var(--retune-black-50);
  --retune-text-disabled: var(--retune-black-25);

  /* \u2500\u2500 Surfaces \u2500\u2500 */
  --retune-surface: var(--retune-white);
  --retune-surface-hover: var(--retune-black-5);
  --retune-surface-active: var(--retune-black-5);
  --retune-input-bg: var(--retune-black-5);
  --retune-input-bg-hover: var(--retune-black-10);

  /* \u2500\u2500 Borders & shadows \u2500\u2500 */
  --retune-border: var(--retune-black-10);
  --retune-border-hover: var(--retune-black-15);
  --retune-border-subtle: var(--retune-black-5);
  --retune-shadow: var(--retune-black-10);

  /* \u2500\u2500 Blue \u2500\u2500 */
  --retune-blue: var(--retune-blue-500);
  --retune-blue-text: var(--retune-blue-700);
  --retune-blue-bg: var(--retune-blue-200);
  --retune-blue-bg-hover: var(--retune-blue-100);

  /* \u2500\u2500 Red \u2500\u2500 */
  --retune-red: var(--retune-red-500);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   DARK MODE \u2014 swap semantic tokens only
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
:host(.dark) {
  /* \u2500\u2500 Text \u2500\u2500 */
  --retune-text: var(--retune-white);
  --retune-text-secondary: var(--retune-white-70);
  --retune-text-tertiary: var(--retune-white-50);
  --retune-text-disabled: var(--retune-white-25);

  /* \u2500\u2500 Surfaces \u2500\u2500 */
  --retune-surface: color-mix(in srgb, var(--retune-black) 95%, var(--retune-white));
  --retune-surface-hover: var(--retune-white-5);
  --retune-surface-active: var(--retune-white-5);
  --retune-input-bg: var(--retune-white-5);
  --retune-input-bg-hover: var(--retune-white-10);

  /* \u2500\u2500 Borders & shadows \u2500\u2500 */
  --retune-border: var(--retune-white-10);
  --retune-border-hover: var(--retune-white-15);
  --retune-border-subtle: var(--retune-white-5);
  --retune-shadow: var(--retune-white-5);

  /* \u2500\u2500 Blue \u2500\u2500 */
  --retune-blue-text: var(--retune-blue-500);
  --retune-blue-bg: color-mix(in srgb, var(--retune-blue-700) 50%, transparent);
  --retune-blue-bg-hover: color-mix(in srgb, var(--retune-blue-700) 75%, transparent);

  /* \u2500\u2500 Red \u2500\u2500 */
}

* { box-sizing: border-box; margin: 0; padding: 0; }

/* \u2500\u2500 Toolbar \u2500\u2500 */
@keyframes retune-icon-in {
  from { filter: blur(2px); transform: scale(0.9); }
  to   { filter: blur(0);   transform: scale(1); }
}

.retune-toolbar {
  position: fixed;
  z-index: 2147483647;
  pointer-events: auto;
  background: var(--retune-surface);
  border-radius: 999px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  height: 44px;
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  user-select: none;
  overflow: hidden;
  cursor: default;
  transition: padding 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              gap 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              width 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              background 0.15s ease;
}

.retune-toolbar.collapsed {
  padding: 0;
  gap: 0;
  width: 44px;
  cursor: pointer;
  overflow: visible;
  transition: transform 100ms ease, background 0.15s ease;
}
.retune-toolbar.collapsed:active {
  transform: scale(0.97);
}

.retune-toolbar.collapsed:hover {
  background: color-mix(in srgb, var(--retune-black) 5%, var(--retune-surface));
}

.retune-toolbar.top.right { top: 16px; right: 16px; }
.retune-toolbar.top.left { top: 16px; left: 16px; }
.retune-toolbar.bottom.right { bottom: 16px; right: 16px; }
.retune-toolbar.bottom.left { bottom: 16px; left: 16px; }

/* Collapse button (cursor-click) */
.retune-toolbar-collapse-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--retune-text);
  padding: 12px;
  width: 44px;
  height: 44px;
  background: transparent;
  flex-shrink: 0;
  transition: width 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              height 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              padding 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              filter 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.retune-changes-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #fff 1px, #0D99FF 1px);
  pointer-events: none;
}

/* When expanded: collapse button shrinks away */
.retune-toolbar.expanded .retune-toolbar-collapse-btn {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  opacity: 0;
  filter: blur(8px);
  transform: scale(0.8);
  overflow: hidden;
  pointer-events: none;
}

/* Expanded inner container */
.retune-toolbar-expanded {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 300px;
  transition: max-width 0.2s cubic-bezier(0.23, 1, 0.32, 1),
              opacity 0.15s cubic-bezier(0.23, 1, 0.32, 1),
              gap 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

/* When collapsed: expanded items hidden */
.retune-toolbar.collapsed .retune-toolbar-expanded {
  max-width: 0;
  opacity: 0;
  pointer-events: none;
  gap: 0;
}

/* Expanded action buttons */
.retune-toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  color: var(--retune-text);
  padding: 6px;
  flex-shrink: 0;
  transition: background 0.12s ease;
}

.retune-toolbar-btn:hover { background: var(--retune-surface-hover); }

.retune-toolbar-btn.disabled,
.retune-toolbar-btn:disabled {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}

/* Animate expanded items in */
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(1) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 0ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(2) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 20ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(3) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 40ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(4) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 60ms backwards;
}
.retune-toolbar.expanded .retune-toolbar-expanded > :nth-child(5) {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) 80ms backwards;
}

/* Animate collapse button in */
.retune-toolbar.collapsed .retune-toolbar-collapse-btn {
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) backwards;
}

.retune-icon-flip {
  display: flex;
  transform: scaleX(-1);
}

.retune-icon-swap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.retune-icon-swap-icon {
  position: absolute;
  display: flex;
  transition: opacity 150ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 150ms cubic-bezier(0.23, 1, 0.32, 1),
              filter 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

.retune-icon-swap-icon.in {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
  transition-delay: 75ms;
}

.retune-icon-swap-icon.out {
  opacity: 0;
  transform: scale(0.5);
  filter: blur(2px);
  pointer-events: none;
  transition-delay: 0ms;
}

.retune-edit-count {
  font-size: 13px;
  font-weight: 500;
  background: var(--retune-blue);
  color: var(--retune-always-white);
  min-width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  flex-shrink: 0;
  animation: retune-icon-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) backwards;
}

/* \u2500\u2500 Panel \u2500\u2500 */
.retune-panel {
  position: fixed;
  z-index: 2147483647;
  pointer-events: auto;
  background: var(--retune-surface);
  border: none;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  width: 280px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overscroll-behavior: none;
}

.retune-panel-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: clip;
  scrollbar-width: none;
}

.retune-panel-body::-webkit-scrollbar { display: none; }

.retune-panel-anim {
  display: contents;
}

.retune-panel-anim.entering .retune-panel {
  animation: retune-panel-in 0.15s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.retune-panel-anim.exiting .retune-panel {
  animation: retune-panel-out 0.15s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@keyframes retune-panel-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes retune-panel-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(12px);
  }
}

.retune-panel.right { right: 16px; bottom: 68px; }
.retune-panel.left { left: 16px; bottom: 68px; }
.retune-panel { height: calc(100vh - 84px); }

/* Hide scrollbar (now on .retune-panel-body) */

.retune-el-tag {
  font-size: 11px;
  line-height: 16px;
  font-weight: 550;
  color: var(--retune-text);
}

.retune-el-component {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: #3b82f6;
  margin-top: 1px;
}

.retune-el-text {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  margin-top: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Selector field (Webflow-style class tags) \u2500\u2500 */
.retune-row-group:has(.retune-selector-field) {
  padding-left: 0;
  padding-right: 0;
}
.retune-row-group:has(.retune-selector-field) > .retune-group-label-inline {
  padding-left: 16px;
}

.retune-selector-field {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  padding: 0 16px;
}
/* Remove gap around bridge connectors \u2014 the bridge IS the connection */
/* Bridge connector between active/included pills */
.retune-selector-bridge {
  width: 8px;
  height: 16px;
  flex-shrink: 0;
  position: relative;
  z-index: -1;
  margin: 0 -8px;
}
.retune-selector-bridge.filled {
  background: var(--retune-blue-bg);
}
.retune-selector-bridge::before,
.retune-selector-bridge::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--retune-surface);
}
.retune-selector-bridge::before {
  top: 0;
  border-radius: 0 0 4px 4px;
}
.retune-selector-bridge::after {
  bottom: 0;
  border-radius: 4px 4px 0 0;
}

.retune-selector-field::-webkit-scrollbar { display: none; }

.retune-selector-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: var(--retune-surface-hover);
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  line-height: 16px;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.retune-selector-tag:hover {
  background: var(--retune-border);
}

.retune-selector-tag.included,
.retune-selector-tag.active {
  background: var(--retune-blue-bg);
  color: var(--retune-blue-text);
}
.retune-selector-tag.included:hover,
.retune-selector-tag.active:hover {
  background: var(--retune-blue-bg-hover);
}

.retune-selector-tag-count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.005em;
  line-height: 16px;
  background: var(--retune-surface);
  color: var(--retune-text);
  padding: 0 6px;
  border-radius: 4px;
}

.retune-selector-tag.included .retune-selector-tag-count,
.retune-selector-tag.active .retune-selector-tag-count {
  color: var(--retune-blue-text);
}

:host(.dark) .retune-panel,
:host(.dark) .retune-settings-panel,
:host(.dark) .retune-toolbar,
:host(.dark) .retune-floating-dialog {
  border: 1px solid var(--retune-black);
  box-shadow:
    inset 0 0 0 1px rgb(255 255 255 / 10%),
    0 2px 12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
}

:host(.dark) .retune-floating-dialog {
  box-shadow:
    inset 0 0 0 1px rgb(255 255 255 / 10%),
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08);
}

:host(.dark) .retune-selector-tag.included,
:host(.dark) .retune-selector-tag.active {
  color: var(--retune-white);
}

:host(.dark) .retune-selector-tag.included .retune-selector-tag-count,
:host(.dark) .retune-selector-tag.active .retune-selector-tag-count {
  background: var(--retune-white);
  color: var(--retune-blue-700);
}

.retune-selector-tag-name {
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}


.retune-selector-divider {
  width: 1px;
  height: 20px;
  background: var(--retune-border);
  flex-shrink: 0;
  align-self: center;
}

/* \u2500\u2500 Tab bar \u2500\u2500 */

.retune-tab-bar {
  display: flex;
  position: relative;
  padding: 8px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--retune-border);
}

.retune-tab-pill {
  position: absolute;
  top: 8px;
  left: 0;
  height: calc(100% - 16px);
  border-radius: 8px;
  background: var(--retune-input-bg);
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), width 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  pointer-events: none;
}

.retune-tab {
  width: auto;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.15s;
  text-align: center;
}

.retune-tab:hover {
  color: var(--retune-text-secondary);
}

.retune-tab.active {
  color: var(--retune-text);
}

/* \u2500\u2500 Element tree \u2500\u2500 */

.retune-tree {
  padding: 4px 0;
  overflow-x: auto;
}

.retune-tree-inner {
  min-width: 100%;
  width: fit-content;
  position: relative;
}

.retune-tree-node {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  cursor: pointer;
  transition: background 0.1s;
  user-select: none;
  white-space: nowrap;
}

.retune-tree-node:hover {
  background: var(--retune-surface-hover);
}

.retune-tree-node.selected {
  background: var(--retune-surface-hover);
}

.retune-tree-arrow {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--retune-text-tertiary);
  transform: rotate(-90deg);
  transition: transform 0.12s ease;
}

.retune-tree-arrow.expanded {
  transform: rotate(0deg);
}

.retune-tree-arrow.empty {
  visibility: hidden;
}

.retune-tree-tag {
  font-size: 12px;
  font-weight: 400;
  color: var(--retune-text);
  white-space: nowrap;
}

.retune-tree-qualifier {
  font-size: 11px;
  font-weight: 400;
  color: var(--retune-text-tertiary);
  white-space: nowrap;
}

.retune-tree-component {
  font-size: 10px;
  font-weight: 500;
  color: var(--retune-blue-text);
  white-space: nowrap;
  margin-left: auto;
  flex-shrink: 0;
}

.retune-tree-moved {
  font-size: 9px;
  font-weight: 500;
  color: var(--retune-blue-500);
  background: var(--retune-blue-bg);
  padding: 1px 4px;
  border-radius: 3px;
  flex-shrink: 0;
}

/* \u2500\u2500 Tree drag states \u2500\u2500 */

.retune-tree-node.dragging {
  opacity: 0.3;
}

.retune-tree-node.reparent-target {
  background: color-mix(in srgb, var(--retune-blue-500) 15%, transparent);
  outline: 1.5px dashed var(--retune-blue-500);
  outline-offset: -1.5px;
  border-radius: 4px;
}

.retune-tree-drop-indicator {
  position: absolute;
  right: 0;
  height: 2px;
  background: var(--retune-blue-500);
  pointer-events: none;
  z-index: 10;
  display: none;
}

.retune-tree-drop-indicator::before {
  content: "";
  position: absolute;
  left: -3px;
  top: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--retune-blue-500);
}

.retune-tree-ghost {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  opacity: 0.85;
  background: var(--retune-surface);
  border: 1.5px solid var(--retune-blue-500);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  color: var(--retune-text);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* \u2500\u2500 Section structure (matches portfolio editor) \u2500\u2500 */
.retune-section {
  border-bottom: 1px solid var(--retune-border);
  user-select: none;
}

.retune-section:last-child { border-bottom: none; }
/* Remove border from last section when followed by non-section elements (e.g., scroll anchor) */
.retune-section:has(+ :not(.retune-section)) { border-bottom: none; }

.retune-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 16px;
  height: 44px;
}

.retune-section-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: var(--retune-text);
}

.retune-section-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0;
}
.retune-section-action:hover {
  background: var(--retune-surface-hover);
  color: var(--retune-text);
}

/* Variable action in section header: styled like section-action buttons, visible on section hover */
.retune-section-header .retune-variable-action {
  position: static;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: transparent;
  color: transparent;
  transition: color 0.15s ease;
}
.retune-section:hover .retune-section-header .retune-variable-action {
  color: var(--retune-text-secondary);
}
.retune-section-header .retune-variable-action:hover {
  color: var(--retune-text) !important;
  background: var(--retune-surface-hover);
}

.retune-section-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
}

.retune-section-row {
  padding: 0 48px 0 16px;
}
.retune-section-row:has(.retune-split-btn) {
  padding-right: 8px;
}

/* Row group: wraps multiple rows with equal vertical + horizontal gaps */
.retune-row-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 48px 0 16px;
}
.retune-row-group:has(.retune-split-btn) {
  padding-right: 8px;
}

.retune-row-group > .retune-row + .retune-row { margin-top: 4px; }

/* \u2500\u2500 Alignment buttons (position section) \u2500\u2500 */
.retune-align-row {
  display: flex;
  gap: 8px;
}

.retune-btn-group {
  display: flex;
  flex: 1;
  background: var(--retune-surface-hover);
  border-radius: 8px;
  overflow: hidden;
}

.retune-btn-group > :not(:first-child) > .retune-align-btn {
  box-shadow: inset 1px 0 0 var(--retune-surface);
}

.retune-align-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease;
}

.retune-align-btn:hover {
  color: var(--retune-text);
}

.retune-align-btn:active {
  color: var(--retune-text);
}

.retune-align-btn.active {
  background: var(--retune-border);
}

/* \u2500\u2500 Alignment grid (layout section) \u2500\u2500 */
.retune-alignment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: var(--retune-surface-hover);
  border-radius: 8px;
  width: 100%;
  height: 72px;
  outline: none;
}

.retune-alignment-grid:focus-visible {
  outline: 1px solid var(--retune-text);
  outline-offset: -1px;
}

.retune-alignment-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
}

.retune-alignment-cell:hover {
  color: var(--retune-text);
}

/* \u2500\u2500 Grid picker \u2500\u2500 */
.retune-grid-picker-wrap {
  position: relative;
}

.retune-grid-picker-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 72px;
  padding: 4px;
  background: var(--retune-surface-hover);
  border: 1px solid var(--retune-border);
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
}

.retune-grid-picker-preview:hover {
  background: #eeeceb;
}

.retune-grid-picker-mini {
  display: grid;
  gap: 2px;
  flex: 1;
  height: 100%;
  position: relative;
}

.retune-grid-picker-mini-cell {
  background: var(--retune-surface);
  border-radius: 2px;
  min-width: 0;
  min-height: 0;
}

.retune-grid-picker-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: var(--retune-text-secondary);
  white-space: nowrap;
  pointer-events: none;
}

.retune-grid-picker-dialog {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 8px;
  background: var(--retune-surface);
  border: 1px solid var(--retune-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.retune-grid-picker-dialog-header {
  font-size: 11px;
  font-family: ui-monospace, monospace;
  color: var(--retune-text-secondary);
  text-align: center;
}

.retune-grid-picker-grid {
  display: grid;
  grid-template-columns: repeat(10, 18px);
  grid-template-rows: repeat(10, 18px);
  gap: 2px;
  cursor: pointer;
}

.retune-grid-picker-cell {
  border-radius: 2px;
  background: var(--retune-border);
}

.retune-grid-picker-cell.selected {
  background: #3b82f6;
}

.retune-grid-picker-cell.preview {
  background: #93c5fd;
}

/* \u2500\u2500 Constraints visual (position section) \u2500\u2500 */
.retune-constraints {
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
}

.retune-constraints-side {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}

.retune-constraints-center {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: stretch;
}

.retune-pin-box {
  position: relative;
  background: var(--retune-surface-hover);
  border-radius: 8px;
  width: 100%;
  height: 64px;
}

.retune-pin-line {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.retune-pin-line.top {
  left: 50%;
  transform: translateX(-50%);
  top: 2px;
}

.retune-pin-line.right {
  left: calc(75% - 2px);
  top: 24px;
}

.retune-pin-line.bottom {
  left: 50%;
  transform: translateX(-50%);
  bottom: 2px;
}

.retune-pin-line.left {
  left: calc(25% - 14px);
  top: 24px;
}

.retune-pin-center-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: var(--retune-surface);
  border: 1px solid var(--retune-border);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.retune-pin-center-btn:hover {
  border-color: var(--retune-border-hover);
}

.retune-pin-center-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #3b82f6;
}

/* Row layout: flex with gap for side-by-side fields */
.retune-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

/* Direct children in a row get flex: 1 */
.retune-row > .retune-prop,
.retune-row > .retune-combo,
.retune-row > .retune-select,
.retune-row > .retune-text-input,
.retune-row > .retune-font-input,
.retune-row > .retune-slider { flex: 1; min-width: 0; }

/* Field: flex-1 column with label above input */
.retune-field {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.retune-field-label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  line-height: 16px;
}

/* Group label: single label above a set of related inputs */
.retune-group-label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  line-height: 16px;
  padding: 0 16px;
}

/* Group label inside a RowGroup (no extra horizontal padding) */
.retune-group-label-inline {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Split toggle button (expand/collapse shorthand) */
.retune-split-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
}
.retune-split-btn:hover {
  background: var(--retune-surface-active);
  color: var(--retune-text);
}
.retune-split-btn.active {
  color: var(--retune-text);
  background: var(--retune-input-bg-hover);
}

/* Dropdown menu (size + button) */
.retune-dropdown-anchor {
  position: relative;
}
.retune-dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  min-width: 140px;
  background: var(--retune-surface);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
  padding: 4px;
  z-index: 100;
  animation: retune-dropdown-in 0.15s cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes retune-dropdown-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.retune-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--retune-text);
  font-size: 13px;
  cursor: pointer;
  padding: 0 10px;
  transition: background 0.1s ease;
}
.retune-dropdown-item:hover {
  background: var(--retune-input-bg);
}
.retune-dropdown-item .retune-dropdown-check {
  margin-left: auto;
  color: var(--retune-text-tertiary);
}
.retune-dropdown-heading {
  padding: 6px 10px 2px;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
  letter-spacing: -0.005em;
}

/* Property cell \u2014 matches portfolio NumberInput */
.retune-prop {
  display: flex;
  align-items: center;
  gap: 0;
  height: 32px;
  padding: 0;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  min-width: 0;
  overflow: visible;
  position: relative;
  transition: background-color 0.15s ease;
}

.retune-prop:hover:not(.retune-prop-variable-applied) { background: var(--retune-border); }
.retune-prop:focus-within:not(.retune-prop-variable-applied) {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-prop:focus-within:not(.retune-prop-variable-applied) {
  background: var(--retune-surface-hover);
}

.retune-prop-label {
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  flex-shrink: 0;
  user-select: none;
  cursor: ew-resize;
  z-index: 1;
}

.retune-prop-input {
  flex: 1;
  min-width: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  padding: 0 0 0 32px;
}

.retune-prop-input:first-child { padding-left: 12px; }
.retune-prop-input::selection { background: #bfdbfe; color: var(--retune-text); }
.retune-prop-input:focus { outline: none; }

/* \u2500\u2500 Color Input (split: [swatch|hex] [opacity%]) \u2500\u2500 */
.retune-color-row {
  display: flex;
  gap: 1px;
  flex: 1;
  min-width: 0;
  position: relative;
}

.retune-color-hex-section {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  height: 32px;
  position: relative;
  background: var(--retune-surface-hover);
  border-radius: 8px 0 0 8px;
}

.retune-color-swatch {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
}

.retune-color-swatch-inner {
  width: 20px;
  height: 20px;
  border-radius: 2px;
}

.retune-color-hex-input {
  flex: 1;
  min-width: 0;
  height: 32px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text);
  outline: none;
  padding: 0;
}

.retune-color-hex-input:focus { outline: none; }
.retune-color-hex-section:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-color-hex-input::selection { background: #bfdbfe; color: var(--retune-text); }

.retune-color-opacity-section {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 8px 0 4px;
  height: 32px;
  background: var(--retune-surface-hover);
  border-radius: 0 8px 8px 0;
  flex-shrink: 0;
}

.retune-color-opacity-input {
  width: 28px;
  height: 32px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text);
  text-align: center;
  outline: none;
  padding: 0;
  -moz-appearance: textfield;
}

.retune-color-opacity-input:focus { outline: none; }
.retune-color-opacity-section:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-color-opacity-input::-webkit-outer-spin-button,
.retune-color-opacity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.retune-color-opacity-unit {
  font-size: 10px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
}

/* \u2500\u2500 Floating Dialog (shared shell for color picker, token dialog, etc.) \u2500\u2500 */
.retune-floating-dialog {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--retune-surface);
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2147483647;
  pointer-events: auto;
  animation: retune-dialog-enter 150ms cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes retune-dialog-enter {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

.retune-floating-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 0 12px;
}

.retune-floating-dialog-title-area {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.retune-floating-dialog-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--retune-text);
}

/* Tab styles \u2014 single tab has no selected style */
.retune-floating-dialog-tab {
  height: 24px;
  padding: 0 8px;
  border-radius: 5px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.055px;
  white-space: nowrap;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
  font-weight: 450;
  color: var(--retune-text-secondary);
  font-family: inherit;
}
.retune-floating-dialog-tab:hover {
  background: var(--retune-input-bg);
}
.retune-floating-dialog-tab-active {
  background: var(--retune-surface-hover);
  font-weight: 550;
  color: var(--retune-text);
}
.retune-floating-dialog-tab-active:hover {
  background: var(--retune-surface-hover);
}
.retune-floating-dialog-tab-single {
  font-weight: 550;
  color: var(--retune-text);
  cursor: inherit;
}
.retune-floating-dialog-tab-single:hover {
  background: none;
}

.retune-floating-dialog-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--retune-text-tertiary);
  cursor: pointer;
  border-radius: 8px;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
}
.retune-floating-dialog-close:hover {
  color: var(--retune-text);
  background: var(--retune-surface-active);
}

.retune-floating-dialog-search {
  padding: 8px;
}
.retune-floating-dialog-search-input {
  width: 100%;
  height: 32px;
  background: var(--retune-surface-hover);
  border: none;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 12px;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  box-sizing: border-box;
}
.retune-floating-dialog-search-input::placeholder {
  color: var(--retune-text-tertiary);
}
.retune-floating-dialog-search-input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}

.retune-floating-dialog-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

/* \u2500\u2500 Color Picker Content \u2500\u2500 */

.retune-cp-sv-wrap {
  padding: 12px 12px 0 12px;
}

.retune-cp-sv {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  cursor: crosshair;
  touch-action: none;
  border-radius: 8px;
}

.retune-cp-sv-white,
.retune-cp-sv-black {
  border-radius: inherit;
}

.retune-cp-sv-white {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #fff, transparent);
}

.retune-cp-sv-black {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, #000);
}

.retune-cp-handle {
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.retune-cp-handle-inner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow:
    0 0 0.5px rgba(0, 0, 0, 0.2),
    0 2px 6px rgba(0, 0, 0, 0.12);
}

.retune-cp-sliders {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
}

.retune-cp-eyedropper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--retune-text-tertiary);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease, color 0.15s ease;
}
.retune-cp-eyedropper:hover {
  color: var(--retune-text);
  background: var(--retune-surface-active);
}

.retune-cp-preview-checker {
  position: absolute;
  inset: 0;
  background-image: repeating-conic-gradient(#e0e0e0 0% 25%, #fff 0% 50%);
  background-size: 8px 8px;
}

.retune-cp-preview {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}

.retune-cp-slider-tracks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.retune-cp-hue {
  position: relative;
  height: 14px;
  border-radius: 7px;
  background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
  cursor: pointer;
  touch-action: none;
  overflow: visible;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.retune-cp-alpha {
  position: relative;
  height: 14px;
  border-radius: 7px;
  cursor: pointer;
  touch-action: none;
  overflow: visible;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.retune-cp-alpha-checker {
  position: absolute;
  inset: 0;
  background-image: repeating-conic-gradient(#e0e0e0 0% 25%, #fff 0% 50%);
  background-size: 8px 8px;
  border-radius: 7px;
}

.retune-cp-alpha-gradient {
  position: absolute;
  inset: 0;
  border-radius: 7px;
}

.retune-cp-inputs {
  display: flex;
  gap: 4px;
  padding: 0 12px 10px;
}

.retune-cp-input-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.retune-cp-input-group:first-child {
  flex: 1.8;
}

.retune-cp-label {
  font-size: 9px;
  font-weight: 500;
  color: var(--retune-text-tertiary);
  text-transform: uppercase;
  letter-spacing: -0.005em;
  padding-left: 2px;
}

.retune-cp-input {
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  color: var(--retune-text);
  padding: 0 6px;
  outline: none;
  width: 100%;
  min-width: 0;
}

.retune-cp-input:focus {
  outline: none;
  box-shadow: 0 0 0 1.5px rgba(59, 130, 246, 0.5);
}

.retune-cp-input::selection { background: #bfdbfe; color: var(--retune-text); }

/* \u2500\u2500 Gradient Editor \u2500\u2500 */
.retune-gradient-editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.retune-gradient-editor > * {
  padding: 0px 8px 0px 16px;
}

.retune-gradient-bar-wrap {
  position: relative;
  height: 32px;
  cursor: crosshair;
  margin: 0px 48px 0px 16px;
  padding: 0 !important;
}

.retune-gradient-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--retune-border);
}

.retune-gradient-bar-checker {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%),
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%);
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
}

.retune-gradient-bar-fill {
  position: absolute;
  inset: 0;
}

.retune-gradient-stop-handle {
  position: absolute;
  top: 0px;
  transform: translateX(-50%);
  cursor: grab;
  touch-action: none;
}

.retune-gradient-stop-handle:active { cursor: grabbing; }

.retune-gradient-stop-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 0 0.5px rgba(0,0,0,0.18)) drop-shadow(0 2px 6px rgba(0,0,0,0.12));
}

.retune-gradient-stop-chit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 32px;
  border-radius: 5px;
}

.retune-gradient-stop-chit-color {
  width: 12px;
  height: 24px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
}

.retune-gradient-stop-caret {
  display: none;
}

.retune-gradient-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.retune-gradient-angle-input {
  width: 64px;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  padding: 0 8px;
  text-align: left;
}

.retune-gradient-angle-input:focus {
  outline: none;
  box-shadow: 0 0 0 1.5px rgba(59, 130, 246, 0.5);
}

.retune-gradient-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.retune-gradient-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 8px;
  color: var(--retune-text-secondary);
  cursor: pointer;
  transition: background-color 0.08s ease, color 0.08s ease;
}

.retune-gradient-action-btn:hover { background: var(--retune-surface-hover); color: var(--retune-text); }
.retune-gradient-action-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.retune-gradient-action-btn:disabled:hover { background: transparent; color: var(--retune-text-secondary); }

.retune-gradient-stops-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.retune-gradient-stops-label {
  font-size: 11px;
  font-weight: 550;
  letter-spacing: -0.005em;
  color: var(--retune-text);
}

.retune-gradient-stops-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.retune-gradient-stop-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
}

.retune-gradient-stop-pos {
  position: relative;
  display: flex;
  align-items: center;
  width: 48px;
  flex-shrink: 0;
}

.retune-gradient-stop-pos-input {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  padding: 0 18px 0 6px;
  text-align: left;
}

.retune-gradient-stop-pos-input:focus {
  outline: none;
  box-shadow: 0 0 0 1.5px rgba(59, 130, 246, 0.5);
}

.retune-gradient-stop-pos-unit {
  position: absolute;
  right: 6px;
  font-size: 11px;
  color: var(--retune-text-tertiary);
  pointer-events: none;
}

.retune-gradient-stop-color {
  flex: 1;
  min-width: 0;
}

/* \u2500\u2500 SelectInput \u2500\u2500 */
.retune-select {
  position: relative;
  min-width: 0;
  overflow: visible;
}

.retune-select-button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  transition: background-color 0.15s ease;
  position: relative;
}

.retune-select-button:hover { background: var(--retune-border); }
.retune-select-button:focus-visible {
  outline: 1px solid var(--retune-text);
  outline-offset: -1px;
}

.retune-select-label {
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  flex-shrink: 0;
}

.retune-select-value {
  flex: 1;
  min-width: 0;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  text-align: left;
  padding-left: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.retune-select-chevron {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--retune-text-secondary);
  flex-shrink: 0;
}

.retune-select-dropdown-anchor {
  position: fixed;
  z-index: 2147483647;
  width: max-content;
}

/* \u2500\u2500 Slider \u2500\u2500 */
.retune-slider {
  position: relative;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  cursor: ew-resize;
  user-select: none;
  overflow: hidden;
  transition: background-color 0.15s ease;
}

.retune-slider:hover { }
.retune-slider:focus-visible { outline: 1px solid var(--retune-text); outline-offset: -1px; }

.retune-slider-fill {
  position: absolute;
  inset: 0;
  right: auto;
  background: #ebebeb;
  pointer-events: none;
}

.retune-slider-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 4px;
  border-radius: 1px;
  background: var(--retune-border);
  pointer-events: none;
}

.retune-slider-handle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 16px;
  border-radius: 1px;
  background: var(--retune-surface);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  margin-left: -1px;
}

.retune-slider-labels {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
}

.retune-slider-label {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
}

.retune-slider-value {
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
}

/* \u2500\u2500 SegmentedControl \u2500\u2500 */
.retune-segmented {
  display: flex;
  position: relative;
  height: 32px;
  background: var(--retune-surface-hover);
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
}

.retune-segmented-pill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 8px;
  background: var(--retune-surface);
  border: 1px solid var(--retune-border);
  box-sizing: border-box;
  transition: transform 200ms cubic-bezier(0.77, 0, 0.175, 1);
  will-change: transform;
  pointer-events: none;
  z-index: 0;
}


.retune-segmented-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: var(--retune-text);
  transition: color 150ms ease;
  position: relative;
  z-index: 1;
}

.retune-segmented-item:hover:not(.disabled) { color: var(--retune-text-secondary); }

.retune-segmented-item.selected {
  color: var(--retune-text);
}

.retune-segmented-item.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.retune-segmented-item svg {
  width: 24px;
  height: 24px;
  display: block;
}

.retune-segmented-text {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.005em;
}

/* \u2500\u2500 FontInput \u2500\u2500 */
.retune-font-input {
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  min-width: 0;
  overflow: visible;
  position: relative;
  transition: background-color 0.15s ease;
}

.retune-font-input:hover { background: var(--retune-border); }
.retune-font-input:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  background: var(--retune-surface-hover);
}

.retune-font-input-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text);
  cursor: pointer;
  padding: 0 4px 0 8px;
  gap: 4px;
}
.retune-font-input-value {
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.retune-font-input-trigger svg {
  flex-shrink: 0;
  color: var(--retune-text-secondary);
}

/* \u2500\u2500 Font Picker (FloatingDialog) \u2500\u2500 */
.retune-font-filter {
  padding: 8px;
  border-top: 1px solid var(--retune-border);
}

.retune-font-list {
  overflow-y: auto;
  padding: 2px 0 4px;
  scrollbar-width: none;
}
.retune-font-list::-webkit-scrollbar { display: none; }

.retune-font-section-title {
  font-size: 11px;
  font-weight: 450;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  padding: 8px 16px 8px;
}

.retune-font-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 450;
  color: var(--retune-text);
  transition: background-color 0.08s ease;
  min-height: 32px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.retune-font-item:hover { background: var(--retune-surface-hover); }
.retune-font-item-active { background: var(--retune-surface-hover); }
.retune-font-item-active:hover { background: var(--retune-surface-hover); }
.retune-font-item-highlighted { background: var(--retune-input-bg); }
.retune-font-item-active.retune-font-item-highlighted { background: var(--retune-surface-hover); }

.retune-font-system-prompt {
  padding: 8px 16px 12px;
}
.retune-font-system-btn {
  width: 100%;
  padding: 8px;
  border: 1px dashed var(--retune-border-hover);
  border-radius: 8px;
  background: transparent;
  font-size: 12px;
  font-weight: 500;
  color: var(--retune-text-secondary);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.retune-font-system-btn:hover { background: var(--retune-surface-hover); color: var(--retune-text); }

.retune-font-denied {
  font-size: 11px;
  line-height: 16px;
  color: var(--retune-text-tertiary);
  margin: 0;
}

.retune-font-empty {
  padding: 16px 12px;
  font-size: 12px;
  color: var(--retune-text-tertiary);
  text-align: center;
}

/* \u2500\u2500 TextInput \u2500\u2500 */
.retune-text-input {
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 8px;
  background: var(--retune-surface-hover);
  min-width: 0;
  overflow: hidden;
  position: relative;
  transition: background-color 0.15s ease;
}

.retune-text-input:hover { background: var(--retune-border); }
.retune-text-input:focus-within {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  background: var(--retune-surface-hover);
}

.retune-text-input-field {
  flex: 1;
  min-width: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  padding: 0 8px;
}

.retune-text-input-field::selection { background: #bfdbfe; color: var(--retune-text); }
.retune-text-input-field:focus { outline: none; }

/* \u2500\u2500 ComboInput \u2500\u2500 */
.retune-combo {
  display: flex;
  align-items: center;
  height: 32px;
  min-width: 0;
  overflow: visible;
  position: relative;
  gap: 1px;
}

.retune-combo-label {
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  color: var(--retune-text-tertiary);
  flex-shrink: 0;
  user-select: none;
  cursor: ew-resize;
  z-index: 1;
}

.retune-combo-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  background: var(--retune-surface-hover);
  border-radius: 8px 0 0 8px;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: var(--retune-text);
  outline: none;
  padding: 0 0 0 32px;
  transition: background-color 0.15s ease;
}

.retune-combo-input:hover:not(.retune-combo-variable-applied) { background: var(--retune-border); }
.retune-combo-input:focus {
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-combo-variable-applied:focus {
  outline: 1px solid var(--retune-border-hover);
  outline-offset: -1px;
}
.retune-combo-input::selection { background: #bfdbfe; color: var(--retune-text); }

.retune-combo-trigger {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--retune-surface-hover);
  border-radius: 0 8px 8px 0;
  border: none;
  cursor: pointer;
  color: var(--retune-text-secondary);
  flex-shrink: 0;
  padding: 0;
  transition: background-color 0.15s ease, color 0.12s ease;
}

.retune-combo-trigger:hover { background: var(--retune-border); color: var(--retune-text); }
.retune-combo-trigger:focus-visible {
  outline: 1px solid var(--retune-text);
  outline-offset: -1px;
}

.retune-combo-dropdown-anchor {
  position: fixed;
  z-index: 2147483647;
}

/* \u2500\u2500 Dropdown Menu \u2500\u2500 */
.retune-menu-wrapper {
  position: relative;
  width: fit-content;
  min-width: max(120px, 100%);
  border-radius: 12px;
  overflow: hidden;
  user-select: none;
  box-shadow: 0 0 0.5px rgba(0,0,0,0.12), 0 10px 16px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.15);
}

.retune-menu-scroll {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6px 0;
  background: #1c1917;
  scrollbar-width: none;
  overscroll-behavior: none;
}

.retune-menu-scroll::-webkit-scrollbar { display: none; }

.retune-menu-separator {
  height: 16px;
  display: flex;
  align-items: center;
}

.retune-menu-separator-line {
  width: 100%;
  height: 1px;
  background: #292524;
}

.retune-menu-heading {
  padding: 4px 14px;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  line-height: 16px;
  color: rgba(255,255,255,0.4);
}

.retune-menu-item-wrap {
  padding: 0 6px;
}

.retune-menu-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 28px;
  padding: 4px 24px 4px 8px;
  border: none;
  background: transparent;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: -0.005em;
  font-family: inherit;
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.08s ease;
}

.retune-menu-item.has-check { padding-left: 28px; }

.retune-menu-item.highlighted { background: rgba(255,255,255,0.1); }
.retune-menu-item.selected { color: #fff; }
.retune-menu-item.disabled { opacity: 0.5; cursor: not-allowed; }

.retune-menu-check {
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.retune-menu-item-label {
  line-height: 16px;
  white-space: nowrap;
}

.retune-menu-item-shortcut {
  margin-left: auto;
  padding-left: 16px;
  color: rgba(255,255,255,0.7);
  white-space: nowrap;
}

.retune-menu-empty {
  padding: 4px 16px;
  font-size: 11px;
  color: rgba(255,255,255,0.4);
}

.retune-menu-scroll-indicator {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  background: #1c1917;
  cursor: default;
  color: #fff;
}

.retune-menu-scroll-indicator.top {
  top: 0;
  border-radius: 12px 12px 0 0;
}

.retune-menu-scroll-indicator.bottom {
  bottom: 0;
  border-radius: 0 0 12px 12px;
}

/* \u2500\u2500 Tooltip \u2500\u2500 */
.retune-tooltip-trigger {
  display: contents;
}

.retune-tooltip {
  position: fixed;
  z-index: 2147483647;
  pointer-events: none;
  max-width: 200px;
  border-radius: 5px;
  background: #1e1e1e;
  box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.13), 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.005em;
  white-space: nowrap;
  animation: retune-tooltip-in 150ms cubic-bezier(0.23, 1, 0.32, 1) both;
}

.retune-tooltip::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 6px;
  background: #1e1e1e;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.retune-tooltip-bottom::before {
  top: -6px;
  left: var(--caret-x, 50%);
  transform: translateX(-50%);
}

.retune-tooltip-top::before {
  bottom: -6px;
  left: var(--caret-x, 50%);
  transform: translateX(-50%) rotate(180deg);
}

.retune-tooltip-left::before {
  right: -9px;
  top: var(--caret-y, 50%);
  transform: translateY(-50%) rotate(90deg);
}

.retune-tooltip-right::before {
  left: -9px;
  top: var(--caret-y, 50%);
  transform: translateY(-50%) rotate(-90deg);
}

.retune-tooltip-text {
  color: #fff;
  min-width: 0;
  flex: 1;
}

.retune-tooltip-shortcut {
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

@keyframes retune-tooltip-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* \u2500\u2500 Reduced Motion \u2500\u2500 */
/* \u2500\u2500 Change Indicator (blue dot at top-left corner of changed inputs) \u2500\u2500 */
.retune-change-dot {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  z-index: 3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.retune-change-dot-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--retune-blue);
  box-shadow: 0 0 0 3px var(--retune-surface);
  pointer-events: none;
}

/* \u2500\u2500 Variable Action (hexagon/unlink icons on right side of inputs) \u2500\u2500 */
.retune-variable-action {
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  transition: color 0.15s ease;
  cursor: pointer;
  z-index: 2;
}
/* Show on parent hover */
.retune-prop:hover .retune-variable-action:not(.retune-variable-unlink),
.retune-color-hex-section:hover .retune-variable-action:not(.retune-variable-unlink) {
  color: var(--retune-text-secondary);
}
.retune-variable-action:hover:not(.retune-variable-unlink) {
  color: var(--retune-text) !important;
}
/* Unlink icon: purple color, 80% opacity at rest, full on hover */
.retune-variable-unlink {
  color: var(--retune-text);
}
.retune-prop-variable-applied .retune-variable-unlink,
.retune-combo:has(.retune-combo-variable-applied) .retune-variable-unlink,
.retune-color-variable-applied .retune-variable-unlink {
  color: transparent;
}
.retune-prop-variable-applied:hover .retune-variable-unlink,
.retune-combo:has(.retune-combo-variable-applied):hover .retune-variable-unlink,
.retune-color-variable-applied:hover .retune-variable-unlink {
  color: var(--retune-text-secondary);
}
.retune-variable-unlink:hover {
  color: var(--retune-text) !important;
}

/* \u2500\u2500 Variable Applied State (white bg, bordered) \u2500\u2500 */
.retune-prop-variable-applied {
  background: var(--retune-surface);
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
}
.retune-prop-variable-applied:hover {
  outline-color: var(--retune-border-hover);
}
.retune-prop-variable-applied .retune-prop-input,
.retune-prop-variable-applied .retune-prop-label {
  cursor: pointer;
}
.retune-combo-variable-applied {
  background: var(--retune-surface);
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  cursor: pointer;
  border-radius: 8px;
}
.retune-combo-variable-applied:hover {
  outline-color: var(--retune-border-hover);
}
.retune-combo:has(.retune-combo-variable-applied) .retune-combo-label {
  cursor: pointer;
}
.retune-combo:has(.retune-combo-variable-applied) .retune-combo-trigger {
  display: none;
}
.retune-color-variable-applied {
  background: var(--retune-surface);
  outline: 1px solid var(--retune-border);
  outline-offset: -1px;
  /* When variable applied, opacity section is hidden \u2014 hex section takes full width with full rounding */
  border-radius: 8px;
}
.retune-color-variable-applied:hover {
  outline-color: var(--retune-border-hover);
}
.retune-color-variable-applied .retune-color-hex-input {
  cursor: pointer;
}

/* \u2500\u2500 Token Picker (floating panel for swapping tokens) \u2500\u2500 */
.retune-variable-picker {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #1c1917;
  border-radius: 10px;
  box-shadow: 0 0 0.5px rgba(0,0,0,0.12), 0 10px 16px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 2147483647;
  pointer-events: auto;
  animation: retune-variable-picker-enter 150ms ease-out;
}

@keyframes retune-variable-picker-enter {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.retune-variable-picker-header {
  padding: 8px 10px 4px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.retune-variable-picker-title {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.retune-variable-picker-list {
  max-height: 240px;
  overflow-y: auto;
  padding: 4px 0;
  scrollbar-width: none;
}
.retune-variable-picker-list::-webkit-scrollbar { display: none; }

.retune-variable-picker-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.08s ease;
  min-height: 30px;
  box-sizing: border-box;
}

.retune-variable-picker-item:hover {
  background: rgba(255,255,255,0.08);
}

.retune-variable-picker-item-active {
  background: rgba(59,130,246,0.15);
  cursor: default;
}
.retune-variable-picker-item-active:hover {
  background: rgba(59,130,246,0.15);
}

.retune-variable-picker-swatch {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
}

.retune-variable-picker-name {
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.retune-variable-picker-value {
  font-size: 10px;
  color: rgba(255,255,255,0.4);
  flex-shrink: 0;
}

/* \u2500\u2500 Token Dialog List (content inside FloatingDialog) \u2500\u2500 */
.retune-variable-dialog-list {
  flex: 1 1 0;
  overflow-y: auto;
  padding: 2px 0 4px;
  scrollbar-width: none;
  border-top: 1px solid var(--retune-border);
}
.retune-variable-dialog-list::-webkit-scrollbar { display: none; }

.retune-variable-dialog-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.08s ease;
  min-height: 32px;
  box-sizing: border-box;
}
.retune-variable-dialog-item:hover {
  background: var(--retune-surface-hover);
}

.retune-variable-dialog-item-active {
  background: var(--retune-surface-hover);
}
.retune-variable-dialog-item-active:hover {
  background: var(--retune-surface-hover);
}
.retune-variable-dialog-item-highlighted {
  background: var(--retune-input-bg);
}
.retune-variable-dialog-item-active.retune-variable-dialog-item-highlighted {
  background: var(--retune-surface-hover);
}

.retune-variable-dialog-active-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #3b82f6;
  flex-shrink: 0;
}

.retune-variable-dialog-swatch {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
}

.retune-variable-dialog-name {
  font-size: 11px;
  font-weight: 450;
  color: var(--retune-text);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.retune-variable-dialog-value {
  font-size: 11px;
  color: var(--retune-text-tertiary);
  flex-shrink: 0;
}

.retune-variable-dialog-empty {
  padding: 16px 12px;
  font-size: 12px;
  color: var(--retune-text-tertiary);
  text-align: center;
}

/* \u2500\u2500 Snap Guide Lines \u2500\u2500 */

.retune-snap-guide {
  position: fixed;
  pointer-events: none;
  z-index: 2147483645;
  background: var(--retune-red);
  display: none;
}

.retune-snap-guide.visible {
  display: block;
}

.retune-snap-label {
  position: fixed;
  pointer-events: none;
  z-index: 2147483646;
  font-size: 10px;
  font-weight: 500;
  font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  color: #fff;
  white-space: nowrap;
  background: var(--retune-red);
  padding: 1px 4px;
  border-radius: 2px;
  opacity: 0;
  transition: opacity 100ms ease;
}

.retune-snap-label.visible {
  opacity: 1;
  transition: none;
}

/* \u2500\u2500 Settings Panel \u2500\u2500 */

.retune-settings-clip {
  border-radius: inherit;
}

/* \u2500\u2500 Settings Panel \u2500\u2500 */

@keyframes retune-settings-in {
  from { opacity: 0; transform: translateY(8px); filter: blur(4px); }
  to { opacity: 1; transform: none; filter: none; }
}

@keyframes retune-settings-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(8px); filter: blur(4px); }
}

.retune-settings-panel {
  position: fixed;
  z-index: 2147483647;
  pointer-events: auto;
  background: var(--retune-surface);
  border: none;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  width: 280px;
  height: auto;
  max-height: calc(100vh - 84px);
  overflow: visible;
  bottom: 68px;
  animation: retune-settings-in 250ms cubic-bezier(0.5, 0, 0, 1);
}

.retune-settings-panel.exiting {
  animation: retune-settings-out 250ms cubic-bezier(0.5, 0, 0, 1) forwards;
}

.retune-settings-panel.right { right: 16px; }
.retune-settings-panel.left { left: 16px; }

.retune-settings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
}

.retune-settings-label {
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.06px;
  color: var(--retune-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Switch */
.retune-switch-wrap {
  padding: 6px 0;
  flex-shrink: 0;
}

.retune-switch {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 13px;
  background: var(--retune-input-bg);
  cursor: pointer;
  border: none;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease, border-radius 0.15s ease;
}

.retune-switch.on {
  background: var(--retune-blue);
  border-radius: 9999px;
}

.retune-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--retune-white);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  transition: left 0.15s ease, box-shadow 0.15s ease;
}

.retune-switch.on .retune-switch-knob {
  left: 18px;
  box-shadow: none;
}

/* Keyboard shortcuts link row */
.retune-settings-row.clickable {
  cursor: pointer;
  height: 48px;
  color: var(--retune-text-secondary);
}

.retune-settings-row.clickable:hover {
  color: var(--retune-text);
}

.retune-settings-row.clickable:hover .retune-settings-label {
  color: var(--retune-text);
}

/* Keyboard shortcut key badge */
.retune-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  padding: 4px;
  border-radius: 4px;
  background: var(--retune-input-bg);
  border: none;
  box-shadow: 0 0 0 0.5px var(--retune-shadow) inset, 0 2px 0 0 var(--retune-border);
  font-family: inherit;
  font-size: 11px;
  font-weight: 450;
  line-height: 16px;
  letter-spacing: 0.055px;
  color: var(--retune-text);
}

.retune-key.wide {
  padding: 4px 8px;
  min-width: auto;
}

.retune-key-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Settings header with back button */
.retune-settings-header {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--retune-border);
  flex-shrink: 0;
}

.retune-settings-back {
  cursor: pointer;
  color: var(--retune-text-secondary);
}

.retune-settings-back:hover {
  color: var(--retune-text);
}

.retune-settings-title {
  font-size: 12px;
  font-weight: 550;
  line-height: 16px;
  letter-spacing: 0.06px;
  color: var(--retune-text);
  padding: 8px;
}

/* Settings body (scrollable for keyboard view) */
.retune-settings-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: clip;
  scrollbar-width: none;
  padding: 8px 0;
}

.retune-settings-body::-webkit-scrollbar { display: none; }


.retune-variable-dialog-group-title {
  font-size: 11px;
  font-weight: 450;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: var(--retune-text-secondary);
  padding: 8px 16px 8px;
  text-transform: capitalize;
}

@media (prefers-reduced-motion: reduce) {
  .retune-toolbar,
  .retune-toolbar-collapse-btn,
  .retune-toolbar-expanded,
  .retune-toolbar-btn,
  .retune-icon-swap-icon,
  .retune-segmented-pill,
  .retune-segmented-item,
  .retune-align-btn,
  .retune-split-btn,
  .retune-section-header-btn,
  .retune-color-hex-input,
  .retune-color-opacity-input,
  .retune-number-input,
  .retune-font-input,
  .retune-select-button,
  .retune-combo-input,
  .retune-combo-trigger,
  .retune-gradient-action-btn,
  .retune-dropdown-trigger,
  .retune-dropdown-item,
  .retune-menu-item {
    transition: none;
  }

  .retune-panel-anim.entering .retune-panel,
  .retune-panel-anim.exiting .retune-panel,
  .retune-floating-dialog,
  .retune-dropdown-menu,
  .retune-tooltip,
  .retune-edit-count,
  .retune-toolbar.expanded .retune-toolbar-expanded > *,
  .retune-toolbar.collapsed .retune-toolbar-collapse-btn,
  .retune-grid-picker-dialog,
  .retune-combo-dropdown-anchor {
    animation: none;
  }

  .retune-variable-action,
  .retune-change-dot,
  .retune-variable-picker {
    transition: none;
    animation: none;
  }

  .retune-settings-view-container,
  .retune-settings-panel {
    transition: none;
    animation: none;
  }
}
`;function s(e,t){if("width"===e)return!0;let{isFlexChild:r,isGridChild:n,parentFlexDir:l,currentStyles:i}=t;return!(!(r&&l.startsWith("column"))&&(!r||l.startsWith("column")))||!!n}function u(e,t){let{isFlexChild:r,isGridChild:n,parentFlexDir:l,currentStyles:i}=t,o=i[e];if(!r&&!n)return"100%"===o?"fill":"fit-content"===o?"hug":null;if(n){let t=i["width"===e?"justifySelf":"alignSelf"];return"auto"!==o&&o||"stretch"!==t&&"auto"!==t&&"normal"!==t&&t?"fit-content"===o?"hug":null:"fill"}if("width"===e&&!l.startsWith("column")||"height"===e&&l.startsWith("column")){let e=i.flexGrow,t=i.flexBasis;return e&&parseFloat(e)>0&&("0px"===t||"0"===t||"0%"===t)?"fill":"0"!==e||"auto"!==t&&t||"auto"!==o&&o?null:"hug"}if("100%"===o)return"fill";let a=i.alignSelf;return"auto"!==o&&o||"stretch"!==a&&"auto"!==a&&"normal"!==a&&a?"auto"===o&&("flex-start"===a||"start"===a||"center"===a||"flex-end"===a||"end"===a)?"hug":null:"fill"}var c=class{listeners=new Map;_active=!1;get active(){return this._active}start(){this._active=!0}end(){this._active=!1,this.listeners.forEach((e,t)=>this.notify(t,""))}set(e,t){this.notify(e,t)}subscribe(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{let r=this.listeners.get(e);r&&(r.delete(t),0===r.size&&this.listeners.delete(e))}}notify(e,t){let r=this.listeners.get(e);if(r)for(let e of r)e(t)}},d=(0,l.createContext)(null),p=class{sheet;rules=[];attached=!1;constructor(){this.sheet=new CSSStyleSheet}attach(){this.attached||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,this.sheet],this.attached=!0)}detach(){this.attached&&(document.adoptedStyleSheets=document.adoptedStyleSheets.filter(e=>e!==this.sheet),this.attached=!1)}applyChange(e,t,n){this.removeChange(e,t);let l=(0,r.camelToKebab)(t),i=`${e} { ${l}: ${n} !important; }`;try{let r=this.sheet.insertRule(i,this.sheet.cssRules.length);this.rules.push({selector:e,property:t,value:n,index:r})}catch{}}removeChange(e,t){let r=this.rules.findIndex(r=>r.selector===e&&r.property===t);-1!==r&&this.rebuildSheet(this.rules.filter((e,t)=>t!==r))}removeAllChanges(e){this.rebuildSheet(this.rules.filter(t=>t.selector!==e))}clearAll(){this.sheet.replaceSync(""),this.rules=[]}getChanges(){return this.rules}migrateChanges(e,t){let r=this.rules.filter(t=>t.selector===e);if(0!==r.length){for(let e of r)this.applyChange(t,e.property,e.value);for(let t of r)this.removeChange(e,t.property)}}rebuildSheet(e){for(let t of(this.sheet.replaceSync(""),this.rules=[],e))this.applyChange(t.selector,t.property,t.value)}destroy(){this.detach(),this.clearAll()}},h=class e{tracked=new Map;undoStack=[];redoStack=[];lastChange=null;groupCounter=0;track(e,t,r,n,l,i,o,a,s,u,c,d,p,h,f,g){this.tracked.has(e)||this.tracked.set(e,{selector:e,tagName:t,textContent:r,classes:n,reactComponents:l,originalStyles:{...i},currentStyles:{...i},sourceFile:o,stylingApproach:a,inlineStyles:s,elementId:u,accessibleName:c,parentContext:d,childSummary:p,domPath:h,nearbySiblings:f,position:g})}ensureOriginalValue(e,t,r){let n=this.tracked.get(e);!n||t in n.originalStyles||(n.originalStyles[t]=r,n.currentStyles[t]=r)}recordChange(e,t,r){let n=this.tracked.get(e);if(!n)return null;let l=n.currentStyles[t]||"";if(l===r)return null;n.currentStyles[t]=r;let i=t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),o=n.variableAssociations?.[i]??null,a=n.unlinkedVariables?.has(i)??!1,s=Date.now(),u=this.lastChange;return u&&u.selector===e&&s-u.time<300?(-1!==this.findInGroup(u.group,t)||this.undoStack.push({selector:e,property:t,value:l,group:u.group,prevVariableAssoc:o,prevUnlinked:a}),u.time=s):(this.groupCounter++,this.undoStack.push({selector:e,property:t,value:l,group:this.groupCounter,prevVariableAssoc:o,prevUnlinked:a}),this.lastChange={selector:e,time:s,group:this.groupCounter}),this.redoStack=[],{from:l,to:r}}recordChangeSilent(e,t,r){let n=this.tracked.get(e);n&&(n.currentStyles[t]=r)}findInGroup(e,t){for(let r=this.undoStack.length-1;r>=0;r--)if(this.undoStack[r].group===e){if(this.undoStack[r].property===t)return r}else break;return -1}popUndo(){if(0===this.undoStack.length)return null;let e=this.undoStack[this.undoStack.length-1].group,t=[];for(;this.undoStack.length>0&&this.undoStack[this.undoStack.length-1].group===e;)t.push(this.undoStack.pop());let r=++this.groupCounter;for(let e of t){let t=this.tracked.get(e.selector);if(t)if("unlink"===e.action)t.unlinkedVariables?.delete(e.property),e.variableRef&&(t.variableAssociations||(t.variableAssociations={}),t.variableAssociations[e.property]=e.variableRef),this.redoStack.push({selector:e.selector,property:e.property,value:"",group:r,action:"unlink",variableRef:e.variableRef});else{let n=t.currentStyles[e.property]||"",l=e.property.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),i=t.variableAssociations?.[l]??null,o=t.unlinkedVariables?.has(l)??!1;this.redoStack.push({selector:e.selector,property:e.property,value:n,group:r,prevVariableAssoc:i,prevUnlinked:o}),t.currentStyles[e.property]=e.value,void 0!==e.prevVariableAssoc&&(e.prevVariableAssoc?(t.variableAssociations||(t.variableAssociations={}),t.variableAssociations[l]=e.prevVariableAssoc):t.variableAssociations&&delete t.variableAssociations[l]),void 0!==e.prevUnlinked&&(e.prevUnlinked?(t.unlinkedVariables||(t.unlinkedVariables=new Set),t.unlinkedVariables.add(l)):t.unlinkedVariables?.delete(l))}}return this.persist(),t}popRedo(){if(0===this.redoStack.length)return null;let e=this.redoStack[this.redoStack.length-1].group,t=[];for(;this.redoStack.length>0&&this.redoStack[this.redoStack.length-1].group===e;)t.push(this.redoStack.pop());let r=++this.groupCounter;for(let e of t){let t=this.tracked.get(e.selector);if(t)if("unlink"===e.action)t.unlinkedVariables||(t.unlinkedVariables=new Set),t.unlinkedVariables.add(e.property),t.variableAssociations&&delete t.variableAssociations[e.property],this.undoStack.push({selector:e.selector,property:e.property,value:"",group:r,action:"unlink",variableRef:e.variableRef});else{let n=t.currentStyles[e.property]||"",l=e.property.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),i=t.variableAssociations?.[l]??null,o=t.unlinkedVariables?.has(l)??!1;this.undoStack.push({selector:e.selector,property:e.property,value:n,group:r,prevVariableAssoc:i,prevUnlinked:o}),t.currentStyles[e.property]=e.value,void 0!==e.prevVariableAssoc&&(e.prevVariableAssoc?(t.variableAssociations||(t.variableAssociations={}),t.variableAssociations[l]=e.prevVariableAssoc):t.variableAssociations&&delete t.variableAssociations[l]),void 0!==e.prevUnlinked&&(e.prevUnlinked?(t.unlinkedVariables||(t.unlinkedVariables=new Set),t.unlinkedVariables.add(l)):t.unlinkedVariables?.delete(l))}}return this.persist(),t}getPendingChanges(){let e=[];for(let t of this.tracked.values()){let r=[];for(let[e,n]of Object.entries(t.currentStyles)){let l=t.originalStyles[e]||"";n!==l&&r.push({property:e,from:l,to:n})}let n=t.unlinkedVariables?Array.from(t.unlinkedVariables).map(e=>({property:e,value:t.currentStyles[e]||""})):[];if(r.length>0||n.length>0){let l={selector:t.selector,tagName:t.tagName,textContent:t.textContent,classes:t.classes,reactComponents:t.reactComponents,changes:r,timestamp:Date.now(),sourceFile:t.sourceFile,stylingApproach:t.stylingApproach,inlineStyles:t.inlineStyles,elementId:t.elementId,accessibleName:t.accessibleName,parentContext:t.parentContext,childSummary:t.childSummary,domPath:t.domPath,nearbySiblings:t.nearbySiblings,position:t.position};t.variableAssociations&&Object.keys(t.variableAssociations).length>0&&(l.variableAssociations=t.variableAssociations),n.length>0&&(l.unlinkedProperties=n),e.push(l)}}return e}hasPendingChanges(){return this.getPendingChanges().length>0}migrateChanges(e,t){let r=this.tracked.get(e),n=this.tracked.get(t);if(!r||!n)return[];let l=[];for(let[e,t]of Object.entries(r.currentStyles)){let i=r.originalStyles[e]||"";t!==i&&(l.push({property:e,value:t}),n.currentStyles[e]=t,r.currentStyles[e]=i)}if(r.variableAssociations)for(let{property:e}of(n.variableAssociations||(n.variableAssociations={}),l)){let t=e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());r.variableAssociations[t]&&(n.variableAssociations[t]=r.variableAssociations[t],delete r.variableAssociations[t]),r.variableAssociations[e]&&(n.variableAssociations[e]=r.variableAssociations[e],delete r.variableAssociations[e])}return this.undoStack=[],this.redoStack=[],l}setVariableAssociation(e,t,r){let n=this.tracked.get(e);if(n)for(let e of(n.variableAssociations||(n.variableAssociations={}),t))n.variableAssociations[e]=r}clearVariableAssociation(e,t){let r=this.tracked.get(e);if(r?.variableAssociations)for(let e of t)delete r.variableAssociations[e]}unlinkVariable(e,t){let r=this.tracked.get(e);if(r){if(r.variableAssociations)for(let e of t)delete r.variableAssociations[e];for(let e of(r.unlinkedVariables||(r.unlinkedVariables=new Set),t))r.unlinkedVariables.add(e)}}recordUnlink(e,t){let r=this.tracked.get(e);if(!r)return;let n={};for(let e of t)n[e]=r.variableAssociations?.[e];for(let r of(this.unlinkVariable(e,t),this.groupCounter++,t))this.undoStack.push({selector:e,property:r,value:"",group:this.groupCounter,action:"unlink",variableRef:n[r]});this.lastChange=null,this.redoStack=[]}isVariableUnlinked(e,t){return this.tracked.get(e)?.unlinkedVariables?.has(t)??!1}getUnlinkedVariables(e){return this.tracked.get(e)?.unlinkedVariables??new Set}relinkVariable(e,t){let r=this.tracked.get(e);if(r?.unlinkedVariables)for(let e of t)r.unlinkedVariables.delete(e)}getVariableAssociation(e,t){return this.tracked.get(e)?.variableAssociations?.[t]}getVariableAssociations(e){return this.tracked.get(e)?.variableAssociations}isPropertyChanged(e,t){let r=this.tracked.get(e);return!!r&&(!!r.unlinkedVariables?.has(t)||(r.originalStyles[t]||"")!==(r.currentStyles[t]||""))}getChangedProperties(e){let t=new Set,r=this.tracked.get(e);if(!r)return t;for(let[e,n]of Object.entries(r.currentStyles))n!==(r.originalStyles[e]||"")&&t.add(e);if(r.unlinkedVariables)for(let e of r.unlinkedVariables)t.add(e);return t}silentRevert(e,t){let r=this.tracked.get(e);if(!r)return;let n=r.originalStyles[t]||"";r.currentStyles[t]=n}removeProperty(e,t){let r=this.tracked.get(e);r&&(delete r.originalStyles[t],delete r.currentStyles[t])}resetProperty(e,t){let r=this.tracked.get(e);if(!r)return null;let n=r.currentStyles[t]||"",l=r.originalStyles[t]||"",i=r.unlinkedVariables?.has(t)??!1;if(n===l&&!i)return null;r.currentStyles[t]=l;let o=t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),a=r.variableAssociations?.[o]??r.variableAssociations?.[t]??null,s=r.unlinkedVariables?.has(o)||r.unlinkedVariables?.has(t)||!1;return this.groupCounter++,this.undoStack.push({selector:e,property:t,value:n,group:this.groupCounter,prevVariableAssoc:a,prevUnlinked:s}),this.lastChange=null,this.redoStack=[],r.variableAssociations&&(delete r.variableAssociations[o],delete r.variableAssociations[t]),r.unlinkedVariables&&(r.unlinkedVariables.delete(t),r.unlinkedVariables.delete(o)),this.persist(),{from:n,to:l}}breakCoalescing(){this.lastChange=null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}clear(){this.tracked.clear(),this.undoStack=[],this.redoStack=[],this.persist()}static STORAGE_KEY="retune-pending-changes";persist(){try{let t={tracked:Array.from(this.tracked.entries()).map(([e,t])=>[e,{...t,unlinkedVariables:t.unlinkedVariables?Array.from(t.unlinkedVariables):void 0}]),undoStack:this.undoStack,redoStack:this.redoStack};localStorage.setItem(e.STORAGE_KEY,JSON.stringify(t))}catch{}}restore(){try{let t=localStorage.getItem(e.STORAGE_KEY);if(!t)return!1;let r=JSON.parse(t);for(let e of(this.tracked=new Map(r.tracked),this.tracked.values()))e.unlinkedVariables&&Array.isArray(e.unlinkedVariables)&&(e.unlinkedVariables=new Set(e.unlinkedVariables));for(let e of(this.undoStack=r.undoStack||[],this.redoStack=r.redoStack||[],this.undoStack))e.group>this.groupCounter&&(this.groupCounter=e.group);for(let e of this.redoStack)e.group>this.groupCounter&&(this.groupCounter=e.group);return this.hasPendingChanges()}catch{return!1}}},f=[":hover",":focus",":active",":focus-visible",":focus-within"];function g(e){for(let t of f)if(e.endsWith(t))return{base:e.slice(0,-t.length),pseudoState:t.slice(1)};return{base:e,pseudoState:null}}var m=null;function x(e,t){if(0===e.length)return"No changes recorded.";let l=e.filter(e=>e.changes.some(e=>"__bulkOf"===e.property)).length;e=e.filter(e=>!e.changes.some(e=>"__bulkOf"===e.property));let i=(m||(m=(0,n.scanDesignTokens)()),m),o=[];if(o.push("Apply these Retune visual changes to the source code:\n"),o.push(`# Visual Changes (${e.length} element${e.length>1?"s":""})`),o.push(""),o.push("**Environment:**"),o.push(`- URL: ${window.location.href}`),o.push(`- Viewport: ${window.innerWidth}\xd7${window.innerHeight}`),o.push(`- Device Pixel Ratio: ${window.devicePixelRatio}`),o.push(`- Timestamp: ${new Date().toISOString()}`),o.push(""),"minimal"!==t){let e=(0,n.summarizeTokenSystem)(i);e&&(o.push(`> **Design tokens detected:** ${e}`),o.push(""))}"tailwind"===(0,r.getVariableRegistry)().framework&&(o.push("> **Framework:** Tailwind CSS detected. Apply all changes using Tailwind utility classes — do NOT use inline styles or raw CSS values. When a class swap is suggested, replace the old class with the new one in the JSX/HTML."),o.push(""));let a=e.map(e=>(function(e,t,n,l=0){let i=[];if(i.push(`## \`<${e.tagName.toLowerCase()}>\`${e.textContent?` "${(0,r.truncate)(e.textContent,60)}"`:""}`),i.push(""),e.sourceFile){let t=e.sourceFile.columnNumber?`:${e.sourceFile.columnNumber}`:"";i.push(`**Source:** \`${e.sourceFile.fileName}:${e.sourceFile.lineNumber}${t}\``)}e.reactComponents.length>0&&i.push(`**Component:** ${e.reactComponents.join(" → ")}`),e.stylingApproach&&"unknown"!==e.stylingApproach&&i.push(`**Styling:** ${function(e){switch(e){case"tailwind":return"Tailwind CSS (modify utility classes)";case"css-modules":return"CSS Modules (modify `.module.css` file)";case"css-in-js":return"CSS-in-JS / Emotion (modify style object)";case"styled-components":return"styled-components (modify template literal)";case"plain-css":return"Plain CSS (modify stylesheet)";default:return e}}(e.stylingApproach)}`),"minimal"!==t&&e.domPath&&i.push(`**DOM Path:** \`${e.domPath}\``);let{base:o,pseudoState:a}=g(e.selector),s=[];a&&s.push(`${a} state`);let u=function(e){let{base:t}=g(e),r=t.replace(/\([^)]*\)/g,""),n=/[.\])\w]\s+[.\[:]/.test(r),l=/[.\])\w]\s*>\s*[.\[:]/.test(r);if(t.startsWith(".")||t.startsWith(":")||t.startsWith("[")){try{let e=document.querySelectorAll(t).length,r=e>0?`, ${e} element${e>1?"s":""}`:"";if(n||l)return`ancestor-scoped${r}`;if(e>0)return`class-scoped${r}`}catch{}return n||l?"ancestor-scoped":"class-scoped"}return t.startsWith("#")?"id-scoped, unique":t.includes(">")?"element-specific":null}(e.selector);u&&s.push(u);let c=s.length>0?` (${s.join(", ")})`:"";i.push(`**Selector:** \`${o}\`${c}`);let d=o.replace(/\([^)]*\)/g,"");if(/\.[a-zA-Z][\w-]*\s+\.[a-zA-Z]/.test(d)||/\.[a-zA-Z][\w-]*\s*>\s*\.[a-zA-Z]/.test(d)){let e=o.split(/\s+(?=[.#\[:])/).filter(Boolean);if(e.length>=2){let t=e.slice(0,-1).join(" "),r=e[e.length-1];i.push(`**Ancestor context:** \`${t}\` \u2014 change only applies inside this ancestor`),i.push(`**Target element:** \`${r}\` \u2014 the element being styled`)}}else{let e=o.match(/\.[a-zA-Z0-9_-]+/g);if(e&&e.length>1){let t=e.map(e=>{let t=e.slice(1);try{let r=document.querySelectorAll(e).length;return`\`.${t}\` (${r})`}catch{return`\`.${t}\``}});i.push(`**Target classes:** ${t.join(" → ")} \u2014 apply changes where all these classes are present`)}}if("full"===t&&e.elementId&&i.push(`**ID:** \`${e.elementId}\``),"full"===t&&e.accessibleName&&i.push(`**Accessible name:** "${e.accessibleName}"`),e.classes.length>0&&i.push(`**Classes:** \`${e.classes.join(" ")}\``),"full"===t&&e.position&&i.push(`**Position:** x:${e.position.x}, y:${e.position.y} (${e.position.width}\xd7${e.position.height}px)`),"full"===t&&e.nearbySiblings&&i.push(`**Nearby elements:** ${e.nearbySiblings}`),"full"===t&&e.parentContext&&i.push(`**Parent:** \`${e.parentContext}\``),"full"===t&&e.childSummary&&i.push(`**Children:** ${e.childSummary}`),"full"===t&&e.inlineStyles&&i.push(`**Inline styles:** \`${e.inlineStyles}\``),e.changes.some(e=>"__delete"===e.property))return i.push(""),i.push("### Action: Delete Element"),i.push(""),i.push("Remove this element from the source code entirely."),e.classes.length>0&&i.push(`**Classes:** \`${e.classes.join(" ")}\``),i.push(""),i.join("\n");let p=e.changes.find(e=>"__reparent"===e.property);if(p){let e=p.from.lastIndexOf("@"),t=-1!==e?p.from.slice(0,e):p.from,r=p.to.lastIndexOf("@"),n=-1!==r?p.to.slice(0,r):p.to,o=-1!==r?p.to.slice(r+1):"0";return i.push(""),i.push("### Action: Reparent Element"),i.push(""),l>0?i.push(`Move this element from its current parent to a new parent container. **This is a component-level change affecting ${l+1} instances** \u2014 apply the change to the component JSX template, not individual instances.`):i.push("Move this element from its current parent to a new parent container."),i.push(`**From:** \`${t}\``),i.push(`**To:** \`${n}\` (as child at position ${o})`),i.push(""),i.join("\n")}let h=e.changes.find(e=>"__reorder"===e.property);h&&(i.push(""),i.push("### Action: Reorder Element"),i.push(""),l>0?i.push(`Moved from position ${h.from} to position ${h.to} within its parent container. **This is a component-level change affecting ${l+1} instances** \u2014 reorder the children in the component JSX template, not individual instances.`):i.push(`Moved from position ${h.from} to position ${h.to} within its parent container.`),i.push(""));let f=e.changes.find(e=>"__text"===e.property);f&&(i.push(""),i.push("### Action: Edit Text Content"),i.push(""),i.push("**Before:**"),i.push("```"),i.push(f.from),i.push("```"),i.push("**After:**"),i.push("```"),i.push(f.to),i.push("```"),i.push(""));let m=v(e.changes),x=(0,r.enrichPropertyChanges)(m,n,e.selector);if(e.variableAssociations)for(let t of x){let r=t.property.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),n=e.variableAssociations[r];n&&(t.recommended={type:n.className.startsWith("var(")?"css-variable":"semantic-token",name:n.className,value:Object.values(n.values)[0]||t.to,exact:!0})}if(x.length>0)for(let e of(i.push(""),i.push("### Changes"),i.push(""),i.push("| Property | Before | After | Token |"),i.push("|----------|--------|-------|-------|"),x)){let t=e.property.startsWith("class:")?e.property:(0,r.camelToKebab)(e.property),n=function(e){if(!e.recommended)return"—";let t=e.recommended,r="css-variable"===t.type?`\`${t.name}\``:`\`.${t.name}\``;return!t.exact&&t.distance?`${r} (${t.distance})`:r}(e);i.push(`| \`${t}\` | \`${e.from}\` | \`${e.to}\` | ${n} |`)}if(e.unlinkedProperties&&e.unlinkedProperties.length>0)for(let{property:t,value:n}of(i.push(""),i.push("### Detached Variables"),i.push(""),i.push("The following properties had their design token/variable binding removed. Hardcode the current values — do not use the token class or CSS variable:"),i.push(""),i.push("| Property | Current Value |"),i.push("|----------|---------------|"),e.unlinkedProperties)){let e=(0,r.camelToKebab)(t);i.push(`| \`${e}\` | \`${n}\` |`)}if("minimal"!==t){let e=function(e){let t=[];for(let n of e){let e=n.alternatives.length>0,l=n.cssVariables.length>0,i=n.conflicts&&n.conflicts.length>0;if(!e&&!l&&!i)continue;let o=(0,r.camelToKebab)(n.property),a=[];if(a.push(`**\`${o}\`** \`${n.from}\` \u2192 \`${n.to}\``),n.recommended){let e=n.recommended,t=e.exact?"exact":e.distance||"fuzzy",r="css-variable"===e.type?`\`${e.name}\``:`\`.${e.name}\``;a.push(`- Recommended: ${r} (${t}, \`${e.value}\`)`)}if(e){let e=n.alternatives.map(e=>`\`.${e.name}\` (\`${e.value}\`)`).join(", ");a.push(`- Alternatives: ${e}`)}if(l){let e=n.cssVariables.map(e=>`\`var(${e})\``).join(", ");a.push(`- CSS vars: ${e}`)}if(i)for(let e of n.conflicts){let t=e.important?", !important":"";a.push(`- Competing rule: \`${e.selector}\` (\`${e.value}\`${t})`)}t.push(a.join("\n"))}return 0===t.length?null:`<details>
<summary>Resolution context</summary>

${t.join("\n\n")}

</details>`}(x);e&&(i.push(""),i.push(e))}return i.push(""),i.join("\n")})(e,t,i,l));return o.push(a.join("\n---\n\n")),o.join("\n")}var b=[{shorthand:"borderRadius",longhands:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},{shorthand:"padding",longhands:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},{shorthand:"margin",longhands:["marginTop","marginRight","marginBottom","marginLeft"]},{shorthand:"borderWidth",longhands:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"]},{shorthand:"borderColor",longhands:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]},{shorthand:"borderStyle",longhands:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"]}];function v(e){let t=[...e];for(let e of b){let r=e.longhands.map(e=>t.find(t=>t.property===e));if(r.every(e=>null!=e)){let n=1===new Set(r.map(e=>e.to)).size,l=1===new Set(r.map(e=>e.from)).size;if(n&&l){for(let r of e.longhands){let e=t.findIndex(e=>e.property===r);-1!==e&&t.splice(e,1)}t.push({property:e.shorthand,from:r[0].from,to:r[0].to})}}}return t}var y=class{ws=null;port;handlers=null;reconnectTimer=null;pendingRequests=new Map;requestId=0;_connected=!1;reconnectDelay=3e3;maxReconnectDelay=6e4;updateAvailable=null;onUpdateCallback=null;constructor(e=9223){this.port=e}get connected(){return this._connected}onRequest(e){this.handlers=e}onUpdate(e){this.onUpdateCallback=e,this.updateAvailable&&e(this.updateAvailable)}connect(){if(!this.ws)try{this.ws=new WebSocket(`ws://localhost:${this.port}/ws`),this.ws.onopen=()=>{this.reconnectDelay=3e3;let e=String(++this.requestId),t=setTimeout(()=>{this.pendingRequests.delete(e),this._connected||(this._connected=!0,console.log("[Retune] Connected to MCP server (handshake not acknowledged, assuming compatible)"))},3e3);this.pendingRequests.set(e,{resolve:e=>{if(this._connected=!0,console.log("[Retune] Connected to MCP server (verified)"),e?.latestVersion){let t="0.6.2";e.latestVersion!==t&&this.isNewer(e.latestVersion,t)&&(this.updateAvailable={current:t,latest:e.latestVersion},this.onUpdateCallback?.(this.updateAvailable))}},reject:()=>{this._connected=!0,console.warn("[Retune] Handshake rejected, connected in fallback mode")},timer:t}),this.ws?.send(JSON.stringify({id:e,method:"handshake",params:{client:"retune-overlay"}}))},this.ws.onmessage=async e=>{let t;try{t=JSON.parse(e.data)}catch(e){console.error("[Retune] Failed to parse message:",e);return}if(t.id&&this.pendingRequests.has(t.id)){let e=this.pendingRequests.get(t.id);clearTimeout(e.timer),this.pendingRequests.delete(t.id),t.error?e.reject(Error(t.error)):e.resolve(t.result);return}if(t.method&&this.handlers)try{let e=await this.handlers(t.method,t.params),r=JSON.stringify({id:t.id,result:e},(e,t)=>{if(!(t instanceof Element||t instanceof Node)&&"function"!=typeof t)return t});this.ws?.send(r)}catch(e){this.ws?.send(JSON.stringify({id:t.id,error:e.message}))}},this.ws.onclose=()=>{this._connected=!1,this.ws=null,this.reconnectTimer=setTimeout(()=>this.connect(),this.reconnectDelay),this.reconnectDelay=Math.min(2*this.reconnectDelay,this.maxReconnectDelay)},this.ws.onerror=()=>{}}catch{}}async sendChanges(e){await this.request("pushChanges",{changes:e})}request(e,t){return new Promise((r,n)=>{if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return void n(Error("Not connected to MCP server"));let l=String(++this.requestId),i=setTimeout(()=>{this.pendingRequests.has(l)&&(this.pendingRequests.delete(l),n(Error("Request timed out")))},1e4);this.pendingRequests.set(l,{resolve:r,reject:n,timer:i}),this.ws.send(JSON.stringify({id:l,method:e,params:t}))})}isNewer(e,t){let r=e.split(".").map(Number),n=t.split(".").map(Number);for(let e=0;e<3;e++){if((r[e]||0)>(n[e]||0))return!0;if((r[e]||0)<(n[e]||0))break}return!1}disconnect(){for(let[,e]of(this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.onclose=null,this.ws.close(),this.ws=null),this._connected=!1,this.pendingRequests))clearTimeout(e.timer),e.reject(Error("Disconnected"));this.pendingRequests.clear()}},C=["paddingTop","paddingRight","paddingBottom","paddingLeft","marginTop","marginRight","marginBottom","marginLeft","width","height","minWidth","maxWidth","minHeight","maxHeight","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius","fontSize","fontWeight","fontFamily","fontStyle","lineHeight","letterSpacing","textAlign","verticalAlign","textDecoration","textTransform","whiteSpace","wordSpacing","textIndent","color","backgroundColor","backgroundImage","display","position","flexDirection","flexWrap","alignItems","justifyContent","gap","rowGap","columnGap","gridTemplateColumns","gridTemplateRows","top","right","bottom","left","zIndex","flexGrow","flexShrink","flexBasis","alignSelf","order","gridColumn","gridRow","justifySelf","opacity","overflow","boxShadow","textShadow","transform","filter","backdropFilter","textOverflow","overflowWrap","wordBreak","webkitLineClamp","webkitBoxOrient"];function w(e,t){let r={},n=RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");for(let l of document.styleSheets){let i;try{i=l.cssRules}catch{continue}!function l(i){for(let o=0;o<i.length;o++){let a=i[o];if(a instanceof CSSGroupingRule||"u">typeof CSSLayerBlockRule&&a instanceof CSSLayerBlockRule){l(a.cssRules);continue}if(!(a instanceof CSSStyleRule))continue;let s=a.selectorText;if(!s.includes(t))continue;let u=s.replace(n,"").replace(/\s+/g," ").trim();if(u){try{if(!e.matches(u))continue}catch{continue}for(let e=0;e<a.style.length;e++){let t=a.style[e];r[t]=a.style.getPropertyValue(t)}}}}(i)}var l=r;let i={...l};function o(e,t){let r,n,l,o;if(!(e in i))return;let a=i[e].trim().split(/\s+/);switch(a.length){case 1:r=n=l=o=a[0];break;case 2:r=l=a[0],n=o=a[1];break;case 3:r=a[0],n=o=a[1],l=a[2];break;default:r=a[0],n=a[1],l=a[2],o=a[3]}t[0]in i||(i[t[0]]=r),t[1]in i||(i[t[1]]=n),t[2]in i||(i[t[2]]=l),t[3]in i||(i[t[3]]=o),delete i[e]}return o("padding",["padding-top","padding-right","padding-bottom","padding-left"]),o("margin",["margin-top","margin-right","margin-bottom","margin-left"]),o("border-width",["border-top-width","border-right-width","border-bottom-width","border-left-width"]),o("border-color",["border-top-color","border-right-color","border-bottom-color","border-left-color"]),o("border-style",["border-top-style","border-right-style","border-bottom-style","border-left-style"]),!function(){let e,t,r,n;if(!("border-radius"in i))return;let l=i["border-radius"].trim().split("/")[0].trim().split(/\s+/);switch(l.length){case 1:e=t=r=n=l[0];break;case 2:e=r=l[0],t=n=l[1];break;case 3:e=l[0],t=n=l[1],r=l[2];break;default:e=l[0],t=l[1],r=l[2],n=l[3]}"border-top-left-radius"in i||(i["border-top-left-radius"]=e),"border-top-right-radius"in i||(i["border-top-right-radius"]=t),"border-bottom-right-radius"in i||(i["border-bottom-right-radius"]=r),"border-bottom-left-radius"in i||(i["border-bottom-left-radius"]=n),delete i["border-radius"]}(),!function(){if(!("gap"in i))return;let e=i.gap.trim().split(/\s+/),t=e[0],r=e.length>1?e[1]:e[0];"row-gap"in i||(i["row-gap"]=t),"column-gap"in i||(i["column-gap"]=r),delete i.gap}(),i}function k(e,t){let n=new Set,l={},i={},o=t.match(/\.[a-zA-Z0-9_-]+/g)||[],a=document.createElement("div");for(let t of(a.style.cssText="position:fixed;top:-9999px;left:-9999px;visibility:hidden;pointer-events:none;",document.body.appendChild(a),document.styleSheets)){let r;try{r=t.cssRules}catch{continue}!function t(r){for(let s=0;s<r.length;s++){let u=r[s];if(u instanceof CSSGroupingRule||"u">typeof CSSLayerBlockRule&&u instanceof CSSLayerBlockRule){t(u.cssRules);continue}if(!(u instanceof CSSStyleRule))continue;let c=u.selectorText;if(c.includes(":hover")||c.includes(":focus")||c.includes(":active"))continue;try{if(!e.matches(c))continue}catch{continue}let d=c.match(/\.[a-zA-Z0-9_-]+/g)||[];if(0===d.length)continue;let p=d.every(e=>o.includes(e)),h=!p&&o.every(e=>d.includes(e));if(!p&&!h)continue;let f=d.length;for(let e=0;e<u.style.length;e++){let t=u.style[e],r=t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());p&&n.add(r);let o=function(e,t){let r=e.style.getPropertyValue(t).trim();if(r)r.includes("var(")&&(a.style.setProperty(t,r),r=getComputedStyle(a).getPropertyValue(t).trim(),a.style.removeProperty(t));else for(let n of["padding","margin","border-radius","gap","border-width","border-color","border-style"]){let l=e.style.getPropertyValue(n).trim();if(l&&t.startsWith(n.split("-")[0])){a.style.setProperty(n,l),r=getComputedStyle(a).getPropertyValue(t).trim(),a.style.removeProperty(n);break}}return r}(u,t);o&&f>=(i[r]??-1)&&(l[r]=o,i[r]=f)}}}(r)}a.remove();let s=window.getComputedStyle(e),u={};for(let e of C){if(l[e]){u[e]=l[e];continue}let t=s.getPropertyValue((0,r.camelToKebab)(e));t&&("normal"===t&&j.has(e)&&(t="0px"),u[e]=t)}return{styles:u,ownedProperties:n}}var j=new Set(["gap","rowGap","columnGap"]);function S(e){var t;let l,i,o,a=e.getBoundingClientRect();return{element:e,selector:(0,r.getSelector)(e),tagName:e.tagName,textContent:function(e){let t=[];for(let r of e.childNodes)if(r.nodeType===Node.TEXT_NODE){let e=r.textContent?.trim();e&&t.push(e)}let r=t.join(" ").trim();return r?r.slice(0,100):null}(e),classes:e.className&&"string"==typeof e.className?e.className.trim().split(/\s+/):[],rect:a,computedStyles:function(e){let t=window.getComputedStyle(e),n={};for(let e of C){let l=t.getPropertyValue((0,r.camelToKebab)(e));l&&("normal"===l&&j.has(e)&&(l="0px"),n[e]=l)}return n}(e),layoutMode:(i=(l=window.getComputedStyle(e)).display,"fixed"===(o=l.position)?"fixed":"absolute"===o?"absolute":"sticky"===o?"sticky":"relative"===o?"relative":i.includes("flex")?"flex":i.includes("grid")?"grid":i.includes("inline")?"inline":"block"),reactComponents:(0,r.getReactComponentHierarchy)(e),reactProps:(0,r.getReactProps)(e),sourceFile:(0,r.getReactSource)(e),stylingApproach:(0,n.detectStylingApproach)(e),inlineStyles:e.style?.cssText||null,elementId:e.id||null,accessibleName:(t=e).getAttribute("aria-label")||t.getAttribute("alt")||t.getAttribute("title")||t.getAttribute("placeholder")||t.getAttribute("name")||null,parentContext:function(e){let t=e.parentElement;if(!t||t===document.body)return null;let r=t.tagName.toLowerCase(),n=t.id?`#${t.id}`:"",l=t.className&&"string"==typeof t.className?t.className.trim().split(/\s+/).slice(0,3).join("."):"",i=l?`.${l}`:"";return`${r}${n}${i}`}(e),childSummary:function(e){let t=e.children;if(0===t.length)return null;let r=Array.from(t).slice(0,6).map(e=>e.tagName.toLowerCase()),n=t.length>6?`, +${t.length-6} more`:"";return`${t.length} children: ${r.join(", ")}${n}`}(e),domPath:function(e){let t=[],r=e;for(;r&&r!==document.documentElement;){let e=r.tagName.toLowerCase();if(r.id)e+=`#${r.id}`;else if(r.className&&"string"==typeof r.className){let t=r.className.trim().split(/\s+/).slice(0,2).join(".");t&&(e+=`.${t}`)}t.unshift(e),r=r.parentElement}return t.join(" > ")}(e),nearbySiblings:function(e){let t=e.parentElement;if(!t)return null;let r=Array.from(t.children),n=r.indexOf(e),l=[];for(let e=Math.max(0,n-2);e<Math.min(r.length,n+3);e++){let t=r[e].tagName.toLowerCase(),i=e===n?`**${t}**`:t;l.push(i)}return l.join(", ")}(e),position:{x:Math.round(a.left),y:Math.round(a.top),width:Math.round(a.width),height:Math.round(a.height)}}}function R(e){let t=Object.keys(e).find(e=>e.startsWith("__reactFiber$"));return t?e[t]:null}function L(e){let t=Array.from(e.children);if(t.length<2)return"static";let r=t.map(R).filter(Boolean);if(0===r.length)return"static";let n=new Map,l=0;for(let e of r){let t=e._debugSource;if(t){let e=`${t.fileName}:${t.lineNumber}`;n.set(e,(n.get(e)||0)+1)}null!==e.key&&l++}return Math.max(...n.values(),0)>=.7*r.length||l>=.7*r.length&&n.size<=2?"array":"static"}function N({label:e,gap:t,action:r,children:n}){return(0,o.jsxs)("div",{className:"retune-section",children:[(0,o.jsxs)("div",{className:"retune-section-header",children:[(0,o.jsx)("span",{className:"retune-section-title",children:e}),r]}),n&&(0,o.jsx)("div",{className:"retune-section-body",style:null!=t?{gap:t}:void 0,children:n})]})}function $({children:e}){return(0,o.jsx)("div",{className:"retune-section-row",children:(0,o.jsx)("div",{className:"retune-row",children:e})})}function M({label:e,children:t}){return(0,o.jsxs)("div",{className:"retune-row-group",children:[e&&(0,o.jsx)("div",{className:"retune-group-label-inline",children:e}),t]})}function E({label:e,children:t}){return(0,o.jsxs)("div",{className:"retune-field",children:[(0,o.jsx)("span",{className:"retune-field-label",children:e}),t]})}function A(e){return/^-?\d+\.\d+$/.test(e.trim())?String(parseFloat(parseFloat(e).toFixed(2))):e.replace(/-?\d+\.\d+/g,e=>String(parseFloat(parseFloat(e).toFixed(2))))}var T=new Set(["opacity","z-index","zIndex","font-weight","fontWeight","flex-grow","flexGrow","flex-shrink","flexShrink","order","orphans","widows","columns","column-count","columnCount","tab-size","tabSize"]),V=/[a-z%]+$/i,H=/^-?\d+(\.\d+)?$/,P=new Set(["px","em","rem","%","vh","vw","vmin","vmax","ch","ex","cap","ic","lh","rlh","svh","svw","lvh","lvw","dvh","dvw","cm","mm","in","pt","pc","q","deg","rad","grad","turn","s","ms","fr"]);function B(e,t,r){let n=e.trim();if(!H.test(n)||T.has(r))return n;let l=t.match(V);return l&&P.has(l[0].toLowerCase())?n+l[0]:n+"px"}var F=(0,l.createContext)(null);function z({content:e,shortcut:t,side:r="bottom",sideOffset:n=6,delay:a=400,children:s}){let[u,c]=(0,l.useState)(!1),[d,p]=(0,l.useState)(null),h=(0,l.useRef)(null),f=(0,l.useRef)(null),g=(0,l.useRef)(null),m=(0,l.useContext)(F),x=(0,l.useCallback)(()=>{g.current=setTimeout(()=>{c(!0)},a)},[a]),b=(0,l.useCallback)(()=>{g.current&&(clearTimeout(g.current),g.current=null),c(!1)},[]);(0,l.useLayoutEffect)(()=>{if(!u)return void p(null);let e=h.current,t=f.current;if(!e||!t)return;let l=e.children[0];if(!l)return;let i=l.getBoundingClientRect(),o=t.getBoundingClientRect(),a=0,s=0;"bottom"===r?(a=i.bottom+n,s=i.left+(i.width-o.width)/2):"top"===r?(a=i.top-o.height-n,s=i.left+(i.width-o.width)/2):"right"===r?(a=i.top+(i.height-o.height)/2,s=i.right+n):(a=i.top+(i.height-o.height)/2,s=i.left-o.width-n);let c=Math.max(8,Math.min(s,window.innerWidth-o.width-8)),d=Math.max(8,Math.min(a,window.innerHeight-o.height-8)),g=i.left+i.width/2,m=i.top+i.height/2,x=g-c,b=m-d;t.style.setProperty("--caret-x",`${x}px`),t.style.setProperty("--caret-y",`${b}px`),p({top:d,left:c})},[u,r,n]);let v=u?(0,o.jsxs)("div",{ref:f,className:`retune-tooltip retune-tooltip-${r}`,style:d?{top:d.top,left:d.left,opacity:1}:{opacity:0},children:[(0,o.jsx)("span",{className:"retune-tooltip-text",children:e}),t&&(0,o.jsx)("span",{className:"retune-tooltip-shortcut",children:t})]}):null;return(0,o.jsxs)("div",{ref:h,className:"retune-tooltip-trigger",onPointerEnter:x,onPointerLeave:b,onPointerDown:b,children:[s,m?v&&(0,i.createPortal)(v,m):v]})}function I({isChanged:e,onReset:t}){let r=(0,l.useRef)(t);r.current=t;let n=(0,l.useCallback)(e=>{if(!e)return;let t=e=>{e.stopPropagation(),e.preventDefault(),r.current()};return e.addEventListener("pointerdown",t),()=>e.removeEventListener("pointerdown",t)},[]);return e?(0,o.jsx)(z,{content:"Reset property",side:"top",delay:200,children:(0,o.jsx)("span",{ref:n,className:"retune-change-dot",children:(0,o.jsx)("span",{className:"retune-change-dot-inner"})})}):null}var D=0,O="";function W(e){(0,l.useEffect)(()=>{if(e)return 0===D&&(O=document.documentElement.style.overflow,document.documentElement.style.overflow="hidden"),D++,()=>{0==--D&&(document.documentElement.style.overflow=O)}},[e])}function Z({title:e,tabs:t,activeTab:r,onTabChange:n,onClose:i,anchorRect:a,search:s,children:u,headerActions:c,onHeaderAction:d,maxHeight:p=400,minHeight:h=400,className:f}){let g=(0,l.useRef)(null),m=(0,l.useRef)(null);W(!0);let x=(0,l.useRef)(i);x.current=i;let b=(0,l.useRef)(d);b.current=d,(0,l.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>m.current?.focus(),0);return()=>clearTimeout(e)},[!!s]),(0,l.useEffect)(()=>{let e=e=>{let t=g.current;t&&(e.composedPath().includes(t)||x.current())},t=e=>{"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),x.current())},r=g.current?.getRootNode(),n=setTimeout(()=>{r.addEventListener("pointerdown",e)},0);return r.addEventListener("keydown",t,!0),document.addEventListener("keydown",t,!0),()=>{clearTimeout(n),r.removeEventListener("pointerdown",e),r.removeEventListener("keydown",t,!0),document.removeEventListener("keydown",t,!0)}},[]),(0,l.useEffect)(()=>{let e=g.current;if(!e)return;let t=e=>{let t=e.target;if(t.closest("[data-dialog-close]")){e.preventDefault(),e.stopPropagation(),x.current();return}let r=t.closest("[data-dialog-action]");if(r){e.preventDefault(),e.stopPropagation();let t=r.dataset.dialogAction;t&&b.current?.(t)}};return e.addEventListener("pointerdown",t),()=>e.removeEventListener("pointerdown",t)},[]);let v=document.querySelector("[data-retune-host]"),y=v?.shadowRoot?.querySelector(".retune-panel"),C=y?.getBoundingClientRect(),w=C?C.width-24:240,k=C?C.left+(C.width-w)/2:Math.max(4,Math.min(a.left+a.width-w,window.innerWidth-w-4)),j=window.innerHeight-a.top-a.height-4,S=a.top-4,R=j<p&&S>j,L=Math.min(p,R?S:j),N=Math.min(h,L),$=R?{position:"fixed",bottom:window.innerHeight-a.top+4,left:k,width:w,maxHeight:L,minHeight:N}:{position:"fixed",top:a.top+a.height+4,left:k,width:w,maxHeight:L,minHeight:N},M=!!t,E=M&&1===t.length;return(0,o.jsxs)("div",{ref:g,className:`retune-floating-dialog${f?` ${f}`:""}`,style:$,children:[(0,o.jsxs)("div",{className:"retune-floating-dialog-header",children:[(0,o.jsx)("div",{className:"retune-floating-dialog-title-area",children:M?t.map(e=>{let t=e.value===r;return(0,o.jsx)("button",{type:"button",className:E?"retune-floating-dialog-tab retune-floating-dialog-tab-single":`retune-floating-dialog-tab${t?" retune-floating-dialog-tab-active":""}`,onClick:n?()=>n(e.value):void 0,children:e.label},e.value)}):(0,o.jsx)("span",{className:"retune-floating-dialog-title",children:e})}),c,(0,o.jsx)("button",{type:"button",className:"retune-floating-dialog-close","data-dialog-close":!0,children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{d:"M16.6464 6.64645C16.8417 6.45118 17.1582 6.45118 17.3535 6.64645C17.5487 6.84171 17.5487 7.15822 17.3535 7.35348L12.707 12L17.3535 16.6464C17.5487 16.8417 17.5487 17.1582 17.3535 17.3535C17.1582 17.5487 16.8417 17.5487 16.6464 17.3535L12 12.707L7.35348 17.3535C7.15822 17.5487 6.84171 17.5487 6.64645 17.3535C6.45118 17.1582 6.45118 16.8417 6.64645 16.6464L11.2929 12L6.64645 7.35348C6.45123 7.15821 6.4512 6.84169 6.64645 6.64645C6.8417 6.45125 7.15823 6.45125 7.35348 6.64645L12 11.2929L16.6464 6.64645Z",fill:"currentColor"})})})]}),s&&(0,o.jsx)("div",{className:"retune-floating-dialog-search",children:(0,o.jsx)("input",{ref:m,className:"retune-floating-dialog-search-input",placeholder:s.placeholder||"Search",value:s.value,onChange:e=>s.onChange(e.target.value),onKeyDown:s.onKeyDown,spellCheck:!1})}),(0,o.jsx)("div",{className:"retune-floating-dialog-body",children:u})]})}function _({property:e,currentVariable:t,onSelect:n,onUnlink:i,onClose:a,anchorRect:s}){let u=(0,l.useRef)(null),[c,d]=(0,l.useState)(""),[p,h]=(0,l.useState)(-1),f=(0,l.useMemo)(()=>(0,r.getVariablesForProperty)(e),[e]),g="colors"===(0,r.getCategoryForProperty)(e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)),m=(0,l.useMemo)(()=>{if(!c)return f;let e=c.toLowerCase();return f.filter(t=>t.className.toLowerCase().includes(e)||Object.values(t.values).some(t=>t.toLowerCase().includes(e)))},[f,c]);(0,l.useEffect)(()=>{h(-1)},[m]),(0,l.useEffect)(()=>{if(p<0)return;let e=u.current;if(!e)return;let t=e.querySelector(`[data-token-index="${p}"]`);t&&t.scrollIntoView({block:"nearest"})},[p]);let x=(0,l.useRef)(n);x.current=n;let b=(0,l.useRef)(a);b.current=a;let v=(0,l.useRef)(m);v.current=m;let y=(0,l.useCallback)(e=>{let t=v.current.length;0!==t&&("ArrowDown"===e.key?(e.preventDefault(),h(e=>(e+1)%t)):"ArrowUp"===e.key?(e.preventDefault(),h(e=>e<=0?t-1:e-1)):"Enter"===e.key&&(e.preventDefault(),h(e=>{if(e>=0&&e<t){let t=v.current[e];t&&(x.current(t),b.current())}return e})))},[]);(0,l.useEffect)(()=>{let e=u.current;if(!e)return;let t=e=>{let t=e.target.closest("[data-token-index]");if(!t)return;e.preventDefault(),e.stopPropagation();let r=parseInt(t.dataset.tokenIndex,10),n=v.current[r];n&&(x.current(n),b.current())};return e.addEventListener("pointerdown",t),()=>e.removeEventListener("pointerdown",t)},[]);let C=(0,l.useCallback)(e=>{"unlink"===e&&i?.()},[i]),w=!t,k=(0,o.jsx)(z,{content:t?"Unlink variable":"No variable linked",side:"bottom",delay:300,children:(0,o.jsx)("button",{type:"button",className:"retune-floating-dialog-close","data-dialog-action":w?void 0:"unlink",style:w?{opacity:.3,cursor:"default"}:void 0,children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.14694 12.1475C8.3422 11.9522 8.65871 11.9522 8.85397 12.1475C9.04903 12.3427 9.04916 12.6593 8.85397 12.8545L7.35397 14.3545C6.72133 14.9876 6.72123 16.0134 7.35397 16.6465C7.98708 17.2796 9.01376 17.2795 9.64694 16.6465L11.1469 15.1465C11.3421 14.9517 11.6588 14.9517 11.854 15.1465C12.0491 15.3416 12.0488 15.6582 11.854 15.8535L10.354 17.3535C9.33027 18.377 7.67057 18.3771 6.64694 17.3535C5.62359 16.3299 5.6235 14.6701 6.64694 13.6465L8.14694 12.1475ZM14.5005 15.5C14.7764 15.5001 15.0004 15.724 15.0005 16V17.5C15.0005 17.7761 14.7765 17.9999 14.5005 18C14.2243 18 14.0005 17.7761 14.0005 17.5V16C14.0005 15.7239 14.2244 15.5 14.5005 15.5ZM17.5005 14C17.7764 14.0001 18.0004 14.224 18.0005 14.5C18.0005 14.7761 17.7765 14.9999 17.5005 15H16.0005C15.7243 15 15.5005 14.7761 15.5005 14.5C15.5005 14.2239 15.7244 14 16.0005 14H17.5005ZM13.6469 6.64648C14.6706 5.62308 16.3303 5.62301 17.354 6.64648C18.3774 7.6701 18.3774 9.32986 17.354 10.3535L15.854 11.8535C15.6587 12.0487 15.3422 12.0487 15.1469 11.8535C14.9517 11.6583 14.9518 11.3417 15.1469 11.1465L16.6469 9.64648C17.2798 9.01335 17.2799 7.98661 16.6469 7.35351C16.0138 6.72057 14.9871 6.72064 14.354 7.35351L12.854 8.85351C12.6588 9.04859 12.3422 9.04843 12.1469 8.85351C11.952 8.65825 11.9519 8.34165 12.1469 8.14648L13.6469 6.64648ZM8.00045 9C8.27642 9.00014 8.50036 9.22402 8.50045 9.5C8.50045 9.77605 8.27647 9.99985 8.00045 10H6.50045C6.22431 10 6.00045 9.77614 6.00045 9.5C6.00054 9.22393 6.22437 9 6.50045 9H8.00045ZM9.50045 6C9.77642 6.00014 10.0004 6.22402 10.0005 6.5V8C10.0005 8.27605 9.77647 8.49985 9.50045 8.5C9.22431 8.5 9.00045 8.27614 9.00045 8V6.5C9.00054 6.22393 9.22437 6 9.50045 6Z",fill:"currentColor"})})})});return(0,o.jsx)(Z,{title:"Variables",onClose:a,anchorRect:s,search:{value:c,onChange:d,placeholder:"Search",onKeyDown:y},headerActions:k,onHeaderAction:C,minHeight:400,children:(0,o.jsxs)("div",{ref:u,className:"retune-variable-dialog-list",children:[0===m.length&&(0,o.jsx)("div",{className:"retune-variable-dialog-empty",children:"No variables found"}),m.map((e,r)=>{var n;let l=t?.className===e.className,i=r===p;return(0,o.jsxs)("div",{className:`retune-variable-dialog-item${l?" retune-variable-dialog-item-active":""}${i?" retune-variable-dialog-item-highlighted":""}`,"data-token-index":r,children:[g&&(0,o.jsx)("span",{className:"retune-variable-dialog-swatch",style:{backgroundColor:function(e){for(let[t,r]of Object.entries(e.values)){if(t.includes("color")||"background-color"===t||"fill"===t||"stroke"===t)return r;let e=r.trim().toLowerCase();if(e.startsWith("#")||e.startsWith("rgb")||e.startsWith("hsl")||e.startsWith("oklch")||e.startsWith("oklab"))return r}return null}(e)||"transparent"}}),(0,o.jsx)("span",{className:"retune-variable-dialog-name",children:(n=e.className).startsWith("var(--")&&n.endsWith(")")?n.slice(6,-1):n}),(0,o.jsx)("span",{className:"retune-variable-dialog-value",children:function(e){let t=Object.values(e.values);if(0===t.length)return"";let r=t[0];return r.length>20?r.slice(0,20)+"…":r}(e)})]},e.className)})]})})}var X=null;function U(e){X&&X!==e&&X(),X=e}function Y(e){X===e&&(X=null)}function q(){return(0,o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,o.jsx)("path",{d:"M12.5 11.0346C13.0522 11.0346 13.4999 11.4824 13.5 12.0346C13.5 12.5868 13.0523 13.0346 12.5 13.0346C11.9477 13.0346 11.5 12.5868 11.5 12.0346C11.5001 11.4824 11.9478 11.0346 12.5 11.0346Z",fill:"currentColor"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 6.26795C12.1188 5.91068 12.8812 5.91068 13.5 6.26795L17 8.28846C17.6187 8.64574 18 9.30641 18 10.0209V14.0619C17.9999 14.7763 17.6187 15.4371 17 15.7943L13.5 17.8148C12.8813 18.1719 12.1187 18.1719 11.5 17.8148L8 15.7943C7.3813 15.4371 7.00013 14.7763 7 14.0619V10.0209C7 9.30641 7.38129 8.64574 8 8.28846L11.5 6.26795ZM13 7.13416C12.6906 6.95553 12.3094 6.95553 12 7.13416L8.5 9.15467L8.38965 9.22791C8.14588 9.41565 8 9.70826 8 10.0209V14.0619C8.00013 14.419 8.1907 14.7495 8.5 14.9281L12 16.9486C12.2707 17.1048 12.5965 17.1244 12.8809 17.0072L13 16.9486L16.5 14.9281C16.8093 14.7495 16.9999 14.419 17 14.0619V10.0209C17 9.70826 16.8541 9.41565 16.6104 9.22791L16.5 9.15467L13 7.13416Z",fill:"currentColor"})]})}function K(){return(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{d:"M12.3533 14.646C12.5485 14.8412 12.5484 15.1578 12.3533 15.3531L11.3534 16.353C10.3297 17.3765 8.67028 17.3766 7.64665 16.353C6.62317 15.3294 6.62317 13.6699 7.64665 12.6462L8.64654 11.6463C8.84181 11.4512 9.15844 11.4511 9.35364 11.6463C9.54883 11.8415 9.54874 12.1582 9.35364 12.3534L8.35375 13.3533C7.7208 13.9865 7.7208 15.0128 8.35375 15.6459C8.98687 16.279 10.0132 16.2789 10.6463 15.6459L11.6462 14.646C11.8414 14.451 12.1581 14.4511 12.3533 14.646ZM8.0002 9.00021C8.27634 9.00021 8.50015 9.22401 8.50015 9.50015C8.49994 9.77612 8.27622 10.0001 8.0002 10.0001H6.50036C6.22434 10.0001 6.00061 9.77612 6.00041 9.50015C6.00041 9.22401 6.22422 9.00021 6.50036 9.00021H8.0002ZM14.5002 15.5002C14.7763 15.5002 15.0001 15.724 15.0001 16.0001V17.5C15 17.776 14.7763 17.9999 14.5002 17.9999C14.2241 17.9999 14.0004 17.776 14.0002 17.5V16.0001C14.0002 15.724 14.2241 15.5002 14.5002 15.5002ZM9.50073 5.99984C9.77664 6.00011 10.0007 6.22381 10.0007 6.49978V7.99962C10.0007 8.2756 9.77664 8.4993 9.50073 8.49957C9.22459 8.49957 9.00078 8.27576 9.00078 7.99962V6.49978C9.00078 6.22364 9.22459 5.99984 9.50073 5.99984ZM17.5006 13.9997C17.7765 13.9998 18.0004 14.2237 18.0005 14.4996C18.0005 14.7757 17.7766 14.9994 17.5006 14.9996H16.0007C15.7246 14.9996 15.5008 14.7758 15.5008 14.4996C15.5009 14.2235 15.7246 13.9997 16.0007 13.9997H17.5006ZM16.3543 7.64676C17.3774 8.67043 17.3776 10.33 16.3543 11.3535L15.3544 12.3534C15.1592 12.5486 14.8426 12.5484 14.6473 12.3534C14.452 12.1582 14.452 11.8416 14.6473 11.6463L15.6472 10.6464C16.28 10.0134 16.2798 8.98702 15.6472 8.35387C15.0141 7.72075 13.9871 7.72018 13.3539 8.35317L12.354 9.35307C12.1588 9.54825 11.8422 9.54808 11.6469 9.35307C11.4519 9.15779 11.4517 8.84114 11.6469 8.64596L12.6468 7.64607C13.6705 6.62254 15.3306 6.62312 16.3543 7.64676Z",fill:"currentColor",fillOpacity:.9})})}function G({match:e,property:t,relatedProperties:n,onVariableSelect:a,onVariableApply:s,onVariableUnlink:u,onRequestOpen:c,openPickerRef:d}){let[p,h]=(0,l.useState)(!1),[f,g]=(0,l.useState)(null),m=(0,l.useRef)(!1);m.current=p;let x=(0,l.useRef)(null),b=(0,l.useRef)(()=>h(!1)),v=(0,l.useMemo)(()=>(0,r.hasVariablesForProperty)(t),[t]),y=!!e,C=(0,l.useRef)(c);C.current=c;let w=(0,l.useRef)(u);w.current=u;let k=(0,l.useCallback)(()=>{let e=x.current;if(!e)return;if(m.current){Y(b.current),h(!1);return}let t=e.closest(".retune-prop, .retune-color-row, .retune-row, .retune-combo"),r=t?t.getBoundingClientRect():e.getBoundingClientRect();g({top:r.top,left:r.left,width:r.width,height:r.height}),h(!0),U(b.current)},[]),j=(0,l.useCallback)(e=>{x.current&&x.current!==e&&x.current.removeEventListener("pointerdown",S),x.current=e,e&&e.addEventListener("pointerdown",S)},[]);function S(e){if(e.stopPropagation(),e.preventDefault(),e.target.closest(".retune-variable-unlink"))return void w.current?.();if(C.current)return void C.current();let t=x.current;if(!t)return;if(m.current){Y(b.current),h(!1);return}let r=t.closest(".retune-prop, .retune-color-row, .retune-row, .retune-combo"),n=r?r.getBoundingClientRect():t.getBoundingClientRect();g({top:n.top,left:n.left,width:n.width,height:n.height}),h(!0),U(b.current)}let R=(0,l.useCallback)(r=>{let l=n||[t];e?a?.(e.variable,r,l):s?.(r,l)},[e,t,n,a,s]),L=(0,l.useCallback)(()=>{Y(b.current),h(!1)},[]);if(!y&&!v)return null;let N=x.current?.getRootNode()instanceof ShadowRoot?x.current.getRootNode().querySelector("[data-retune-container]"):null;return d&&(d.current=k),(0,o.jsxs)(o.Fragment,{children:[y?(0,o.jsx)(z,{content:"Unlink variable",side:"top",delay:300,children:(0,o.jsx)("span",{ref:j,className:"retune-variable-action retune-variable-unlink",children:(0,o.jsx)(K,{})})}):(0,o.jsx)(z,{content:"Add variable",side:"top",delay:300,children:(0,o.jsx)("span",{ref:j,className:"retune-variable-action retune-variable-add",children:(0,o.jsx)(q,{})})}),p&&f&&N&&(0,i.createPortal)((0,o.jsx)(_,{property:t,currentVariable:e?.variable,onSelect:R,onUnlink:u?()=>{u(),L()}:void 0,onClose:L,anchorRect:f}),N)]})}function J(e,t){let r=(0,l.useContext)(d),n=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{if(r)return r.subscribe(e,e=>{let l=t.current;l&&(e&&r.active?(l.value=e,n.current=!0):n.current=!1)})},[r,e,t]),n}function Q(e,t,r){return void 0!==t&&e<t?t:void 0!==r&&e>r?r:e}function ee(e,t,r){if(void 0===t&&void 0===r)return e;let n=parseFloat(e);if(isNaN(n))return e;let l=Q(n,t,r);if(l===n)return e;let i=e.match(/[a-z%]+$/i)?.[0]||"";return`${l}${i}`}function et({label:e,prop:t,value:r,placeholder:n,onChange:i,min:a,max:s,step:u,variableMatch:c,property:d,onVariableSelect:p,onVariableApply:h,onVariableUnlink:f,isChanged:g,onReset:m}){let[x,b]=(0,l.useState)(A(r||"")),v=(0,l.useRef)(null),y=(0,l.useRef)(null),C=(0,l.useRef)(null),w=J(t,C),k=(0,l.useCallback)(()=>{c&&y.current?.()},[c]),[j,S]=(0,l.useState)(r);r!==j&&(S(r),w.current||b(A(r||"")));let R=(0,l.useRef)({startX:0,startVal:0,active:!1}),L=e=>{let n=ee(B(e,r||"",t),a,s);b(n),i(t,n)};return(0,o.jsxs)("div",{className:`retune-prop${c?" retune-prop-variable-applied":""}`,children:[(0,o.jsx)(I,{isChanged:g??!1,onReset:m??(()=>{})}),e&&(0,o.jsx)("span",{ref:v,className:"retune-prop-label",onClick:k,onPointerDown:c?void 0:e=>{let t=parseFloat(x);isNaN(t)||(R.current={startX:e.clientX,startVal:t,active:!0},e.target.setPointerCapture(e.pointerId))},onPointerMove:c?void 0:e=>{if(!R.current.active)return;let r=e.clientX-R.current.startX,n=u??1,l=R.current.startVal+Math.round(r)*n,o=n<1?Math.ceil(-Math.log10(n)):0,c=Q(o>0?parseFloat(l.toFixed(o)):l,a,s),d=x.match(/[a-z%]+$/i)?.[0]||"",p=`${c}${d}`;b(p),i(t,p)},onPointerUp:c?void 0:()=>{R.current.active=!1},children:e}),(0,o.jsx)("input",{ref:C,className:"retune-prop-input",style:e?void 0:{paddingLeft:8},value:x,placeholder:n||"–",readOnly:!!c,onClick:k,onPointerDown:e||c?void 0:t=>{if(e)return;let r=t.currentTarget.getBoundingClientRect();if(t.clientX-r.left>16)return;let n=parseFloat(x);isNaN(n)||(t.preventDefault(),R.current={startX:t.clientX,startVal:n,active:!0},t.currentTarget.setPointerCapture(t.pointerId))},onPointerMove:e||c?void 0:e=>{if(R.current.active){let r=e.clientX-R.current.startX,n=u??1,l=R.current.startVal+Math.round(r)*n,o=n<1?Math.ceil(-Math.log10(n)):0,c=Q(o>0?parseFloat(l.toFixed(o)):l,a,s),d=x.match(/[a-z%]+$/i)?.[0]||"",p=`${c}${d}`;b(p),i(t,p);return}let r=e.currentTarget.getBoundingClientRect(),n=e.clientX-r.left<=16;e.currentTarget.style.cursor=n?"ew-resize":""},onPointerUp:e||c?void 0:()=>{R.current.active=!1},onFocus:c?void 0:e=>{e.target.select()},onChange:c?void 0:e=>{b(e.target.value)},onBlur:c?void 0:()=>{ee(B(x,r||"",t),a,s)!==r&&L(x)},onKeyDown:c?void 0:e=>{if("Enter"===e.key&&(L(x),e.target.blur()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r=parseFloat(x);if(isNaN(r))return;let n=u??1,l=e.shiftKey?10*n:n,o=r+("ArrowUp"===e.key?l:-l),c=n<1?Math.ceil(-Math.log10(n)):0,d=Q(c>0?parseFloat(o.toFixed(c)):o,a,s),p=x.match(/[a-z%]+$/i)?.[0]||"",h=`${d}${p}`;b(h),i(t,h)}},spellCheck:!1}),(0,o.jsx)(G,{match:c,property:d||t,onVariableSelect:p,onVariableApply:h,onVariableUnlink:f,openPickerRef:y})]})}function er({size:e=24,children:t}){return(0,o.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t})}function en({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.4781 8L12.5 8H15.5C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9H12.5C11.7917 9 11.2905 9.00039 10.8987 9.0324C10.5128 9.06393 10.2772 9.12365 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9.12365 10.2772 9.06393 10.5128 9.0324 10.8987C9.00039 11.2905 9 11.7917 9 12.5V15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5V12.5L8 12.4781C8 11.7966 7.99999 11.2546 8.03572 10.8173C8.07231 10.3695 8.14884 9.98765 8.32698 9.63803C8.6146 9.07354 9.07354 8.6146 9.63803 8.32698C9.98765 8.14884 10.3695 8.07231 10.8173 8.03572C11.2546 7.99999 11.7966 8 12.4781 8Z",fill:"currentColor",fillOpacity:.9})})}function el({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5219 8L11.5 8H8.5C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9H11.5C12.2083 9 12.7095 9.00039 13.1013 9.0324C13.4872 9.06393 13.7228 9.12365 13.908 9.21799C14.2843 9.40973 14.5903 9.71569 14.782 10.092C14.8764 10.2772 14.9361 10.5128 14.9676 10.8987C14.9996 11.2905 15 11.7917 15 12.5V15.5C15 15.7761 15.2239 16 15.5 16C15.7761 16 16 15.7761 16 15.5V12.5V12.4781C16 11.7966 16 11.2546 15.9643 10.8173C15.9277 10.3695 15.8512 9.98765 15.673 9.63803C15.3854 9.07354 14.9265 8.6146 14.362 8.32698C14.0123 8.14884 13.6305 8.07231 13.1827 8.03572C12.7454 7.99999 12.2034 8 11.5219 8Z",fill:"currentColor",fillOpacity:.9})})}function ei({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.4781 16H12.5H15.5C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15H12.5C11.7917 15 11.2905 14.9996 10.8987 14.9676C10.5128 14.9361 10.2772 14.8764 10.092 14.782C9.71569 14.5903 9.40973 14.2843 9.21799 13.908C9.12365 13.7228 9.06393 13.4872 9.0324 13.1013C9.00039 12.7095 9 12.2083 9 11.5V8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5V11.5L8 11.5219C8 12.2034 7.99999 12.7454 8.03572 13.1827C8.07231 13.6305 8.14884 14.0123 8.32698 14.362C8.6146 14.9265 9.07354 15.3854 9.63803 15.673C9.98765 15.8512 10.3695 15.9277 10.8173 15.9643C11.2546 16 11.7966 16 12.4781 16Z",fill:"currentColor",fillOpacity:.9})})}function eo({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5219 16H11.5H8.5C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15H11.5C12.2083 15 12.7095 14.9996 13.1013 14.9676C13.4872 14.9361 13.7228 14.8764 13.908 14.782C14.2843 14.5903 14.5903 14.2843 14.782 13.908C14.8764 13.7228 14.9361 13.4872 14.9676 13.1013C14.9996 12.7095 15 12.2083 15 11.5V8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5V11.5V11.5219C16 12.2034 16 12.7454 15.9643 13.1827C15.9277 13.6305 15.8512 14.0123 15.673 14.362C15.3854 14.9265 14.9265 15.3854 14.362 15.673C14.0123 15.8512 13.6305 15.9277 13.1827 15.9643C12.7454 16 12.2034 16 11.5219 16Z",fill:"currentColor",fillOpacity:.9})})}function ea({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17C7.77614 17 8 16.7761 8 16.5V7.5ZM16.5 7C16.7761 7 17 7.22386 17 7.5V16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5V7.5C16 7.22386 16.2239 7 16.5 7ZM13 13V11H11V13H13ZM14 11C14 10.4477 13.5523 10 13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11Z",fill:"currentColor",fillOpacity:.9})})}function es({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H7.5ZM7 7.5C7 7.22385 7.22386 7 7.5 7H16.5C16.7761 7 17 7.22385 17 7.5C17 7.77615 16.7761 8 16.5 8H7.5C7.22386 8 7 7.77615 7 7.5ZM13 11H11V13H13V11ZM11 10C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10H11Z",fill:"currentColor",fillOpacity:.9})})}function eu({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 7C7.22386 7 7 7.22385 7 7.5C7 7.77615 7.22386 8 7.5 8H16.5C16.7761 8 17 7.77615 17 7.5C17 7.22385 16.7761 7 16.5 7L7.5 7ZM11 11H13V13H11V11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11Z",fill:"currentColor",fillOpacity:.9})})}function ec({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 11H13V13H11V11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H7.5Z",fill:"currentColor",fillOpacity:.9})})}function ed({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17C7.77614 17 8 16.7761 8 16.5V7.5ZM13 11V13H11V11H13ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z",fill:"currentColor",fillOpacity:.9})})}function ep({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 7.5C17 7.22386 16.7761 7 16.5 7C16.2239 7 16 7.22386 16 7.5V16.5C16 16.7761 16.2239 17 16.5 17C16.7761 17 17 16.7761 17 16.5V7.5ZM13 11V13H11V11H13ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z",fill:"currentColor",fillOpacity:.9})})}function eh({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 9.5C8 9.22385 7.77614 9 7.5 9C7.22386 9 7 9.22385 7 9.5L7 14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V9.5ZM17 9.5C17 9.22385 16.7761 9 16.5 9C16.2239 9 16 9.22385 16 9.5V14.5C16 14.7761 16.2239 15 16.5 15C16.7761 15 17 14.7761 17 14.5V9.5ZM9 7.5C9 7.22385 9.22386 7 9.5 7H14.5C14.7761 7 15 7.22385 15 7.5C15 7.77615 14.7761 8 14.5 8H9.5C9.22386 8 9 7.77615 9 7.5ZM9.5 16C9.22386 16 9 16.2239 9 16.5C9 16.7761 9.22386 17 9.5 17H14.5C14.7761 17 15 16.7761 15 16.5C15 16.2239 14.7761 16 14.5 16H9.5Z",fill:"currentColor",fillOpacity:.9})})}function ef({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 15.5C7 15.2239 7.22386 15 7.5 15H7.75C7.88807 15 8 14.8881 8 14.75V8.25C8 8.11193 7.88807 8 7.75 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H7.75C8.44036 7 9 7.55964 9 8.25V14.75C9 15.4404 8.44036 16 7.75 16H7.5C7.22386 16 7 15.7761 7 15.5ZM15 14.7502C15 14.8883 15.1119 15.0002 15.25 15.0002H15.5C15.7761 15.0002 16 15.2241 16 15.5002C16 15.7764 15.7761 16.0002 15.5 16.0002H15.25C14.5596 16.0002 14 15.4406 14 14.7502V8.25012C14 7.55977 14.5596 7.00012 15.25 7.00012H15.5C15.7761 7.00012 16 7.22398 16 7.50012C16 7.77626 15.7761 8.00012 15.5 8.00012H15.25C15.1119 8.00012 15 8.11205 15 8.25012V14.7502ZM11 13.5C11 13.7761 11.2239 14 11.5 14C11.7761 14 12 13.7761 12 13.5V9.5C12 9.22386 11.7761 9 11.5 9C11.2239 9 11 9.22386 11 9.5V13.5Z",fill:"currentColor",fillOpacity:.9})})}function eg({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 7C7.77614 7 8 7.22386 8 7.5V7.75C8 7.88807 8.11193 8 8.25 8H14.75C14.8881 8 15 7.88807 15 7.75V7.5C15 7.22386 15.2239 7 15.5 7C15.7761 7 16 7.22386 16 7.5V7.75C16 8.44036 15.4404 9 14.75 9H8.25C7.55964 9 7 8.44036 7 7.75V7.5C7 7.22386 7.22386 7 7.5 7ZM8.25 15C8.11193 15 8 15.1119 8 15.25V15.5C8 15.7761 7.77614 16 7.5 16C7.22386 16 7 15.7761 7 15.5V15.25C7 14.5596 7.55964 14 8.25 14H14.7501C15.4405 14 16.0001 14.5596 16.0001 15.25V15.5C16.0001 15.7761 15.7763 16 15.5001 16C15.224 16 15.0001 15.7761 15.0001 15.5V15.25C15.0001 15.1119 14.8882 15 14.7501 15H8.25ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11H9.5Z",fill:"currentColor",fillOpacity:.9})})}function em({size:e}){return(0,o.jsxs)(er,{size:e,children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.6642 10 18 9.66421 18 9.25V8.75C18 8.33579 17.6642 8 17.25 8H8.75C8.33579 8 8 8.33579 8 8.75V9.25C8 9.66421 8.33579 10 8.75 10H17.25ZM13.25 15C13.6642 15 14 14.6642 14 14.25V13.75C14 13.3358 13.6642 13 13.25 13H8.75C8.33579 13 8 13.3358 8 13.75V14.25C8 14.6642 8.33579 15 8.75 15H13.25Z",fill:"currentColor",fillOpacity:.9}),(0,o.jsx)("path",{d:"M6 17.5C6 17.7761 5.77614 18 5.5 18C5.22386 18 5 17.7761 5 17.5V5.5C5 5.22386 5.22386 5 5.5 5C5.77614 5 6 5.22386 6 5.5V17.5Z",fill:"currentColor",fillOpacity:.3})]})}function ex({size:e}){return(0,o.jsxs)(er,{size:e,children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.75 10C6.33579 10 6 9.66421 6 9.25V8.75C6 8.33579 6.33579 8 6.75 8H15.25C15.6642 8 16 8.33579 16 8.75V9.25C16 9.66421 15.6642 10 15.25 10H6.75ZM10.75 15C10.3358 15 10 14.6642 10 14.25V13.75C10 13.3358 10.3358 13 10.75 13H15.25C15.6642 13 16 13.3358 16 13.75V14.25C16 14.6642 15.6642 15 15.25 15H10.75Z",fill:"currentColor",fillOpacity:.9}),(0,o.jsx)("path",{d:"M18 17.5C18 17.7761 18.2239 18 18.5 18C18.7761 18 19 17.7761 19 17.5V5.5C19 5.22386 18.7761 5 18.5 5C18.2239 5 18 5.22386 18 5.5V17.5Z",fill:"currentColor",fillOpacity:.3})]})}function eb({size:e}){return(0,o.jsxs)(er,{size:e,children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.6642 10 18 9.66421 18 9.25V8.75C18 8.33579 17.6642 8 17.25 8H7.75C7.33579 8 7 8.33579 7 8.75V9.25C7 9.66421 7.33579 10 7.75 10H17.25ZM15.25 15C15.6642 15 16 14.6642 16 14.25V13.75C16 13.3358 15.6642 13 15.25 13H9.75C9.33579 13 9 13.3358 9 13.75V14.25C9 14.6642 9.33579 15 9.75 15H15.25Z",fill:"currentColor",fillOpacity:.9}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 17.5C13 17.7761 12.7761 18 12.5 18C12.2239 18 12 17.7761 12 17.5V15H13V17.5ZM13 13V10H12V13H13ZM13 5.5V8H12V5.5C12 5.22386 12.2239 5 12.5 5C12.7761 5 13 5.22386 13 5.5Z",fill:"currentColor",fillOpacity:.3})]})}function ev({size:e}){return(0,o.jsxs)(er,{size:e,children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 17.25C10 17.6642 9.66421 18 9.25 18H8.75C8.33579 18 8 17.6642 8 17.25L8 8.75C8 8.33579 8.33579 8 8.75 8H9.25C9.66421 8 10 8.33579 10 8.75V17.25ZM15 13.25C15 13.6642 14.6642 14 14.25 14H13.75C13.3358 14 13 13.6642 13 13.25V8.75C13 8.33579 13.3358 8 13.75 8H14.25C14.6642 8 15 8.33579 15 8.75V13.25Z",fill:"currentColor",fillOpacity:.9}),(0,o.jsx)("path",{d:"M17.5 6C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5L5.5 5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6L17.5 6Z",fill:"currentColor",fillOpacity:.3})]})}function ey({size:e}){return(0,o.jsxs)(er,{size:e,children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6.75C10 6.33579 9.66421 6 9.25 6H8.75C8.33579 6 8 6.33579 8 6.75L8 15.25C8 15.6642 8.33579 16 8.75 16H9.25C9.66421 16 10 15.6642 10 15.25V6.75ZM15 10.75C15 10.3358 14.6642 10 14.25 10H13.75C13.3358 10 13 10.3358 13 10.75V15.25C13 15.6642 13.3358 16 13.75 16H14.25C14.6642 16 15 15.6642 15 15.25V10.75Z",fill:"currentColor",fillOpacity:.9}),(0,o.jsx)("path",{d:"M17.5 18C17.7761 18 18 18.2239 18 18.5C18 18.7761 17.7761 19 17.5 19H5.5C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H17.5Z",fill:"currentColor",fillOpacity:.3})]})}function eC({size:e}){return(0,o.jsxs)(er,{size:e,children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6.75C10 6.33579 9.66421 6 9.25 6H8.75C8.33579 6 8 6.33579 8 6.75V16.25C8 16.6642 8.33579 17 8.75 17H9.25C9.66421 17 10 16.6642 10 16.25V6.75ZM15 8.75C15 8.33579 14.6642 8 14.25 8H13.75C13.3358 8 13 8.33579 13 8.75V14.25C13 14.6642 13.3358 15 13.75 15H14.25C14.6642 15 15 14.6642 15 14.25V8.75Z",fill:"currentColor",fillOpacity:.9}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H15V11H17.5ZM13 11H10V12H13V11ZM5.5 11H8V12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11Z",fill:"currentColor",fillOpacity:.3})]})}function ew({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 5.5C8 5.22386 8.22386 5 8.5 5C8.77614 5 9 5.22386 9 5.5V12.05C10.1411 12.2816 11 13.2905 11 14.5C11 15.7095 10.1411 16.7184 9 16.95V18.5C9 18.7761 8.77614 19 8.5 19C8.22386 19 8 18.7761 8 18.5V16.95C6.85888 16.7184 6 15.7095 6 14.5C6 13.2905 6.85888 12.2816 8 12.05V5.5ZM7 14.5C7 13.6716 7.67157 13 8.5 13C9.32843 13 10 13.6716 10 14.5C10 15.3284 9.32843 16 8.5 16C7.67157 16 7 15.3284 7 14.5ZM15 18.5C15 18.7761 15.2239 19 15.5 19C15.7761 19 16 18.7761 16 18.5V11.95C17.1411 11.7184 18 10.7095 18 9.5C18 8.29052 17.1411 7.28164 16 7.05001V5.5C16 5.22386 15.7761 5 15.5 5C15.2239 5 15 5.22386 15 5.5V7.05001C13.8589 7.28164 13 8.29052 13 9.5C13 10.7095 13.8589 11.7184 15 11.95V18.5ZM14 9.5C14 10.3284 14.6716 11 15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5Z",fill:"currentColor",fillOpacity:.9})})}function ek({size:e=16}){return(0,o.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M11.0839 4.22268C11.2371 3.99294 11.5475 3.93087 11.7773 4.08401C12.007 4.23718 12.0691 4.5476 11.916 4.77737L7.91596 10.7774C7.83287 10.902 7.69784 10.9833 7.54877 10.9981C7.39988 11.0127 7.25223 10.9593 7.14643 10.8535L4.14643 7.85354C3.9512 7.65827 3.95118 7.34176 4.14643 7.14651C4.34168 6.95126 4.6582 6.95128 4.85346 7.14651L7.42182 9.71487L11.0839 4.22268Z",fill:"currentColor",fillOpacity:.9})})}function ej({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.64645 11.1464C9.84171 10.9512 10.1583 10.9512 10.3536 11.1464L12 12.7929L13.6464 11.1464C13.8417 10.9512 14.1583 10.9512 14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536L9.64645 11.8536C9.45118 11.6583 9.45118 11.3417 9.64645 11.1464Z",fill:"currentColor",fillOpacity:.9})})}function eS({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.6464 10.1464C11.8417 9.95118 12.1583 9.95118 12.3536 10.1464L14.3536 12.1464C14.5488 12.3417 14.5488 12.6583 14.3536 12.8536C14.1583 13.0488 13.8417 13.0488 13.6464 12.8536L12 11.2071L10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8535C9.45118 12.6583 9.45118 12.3417 9.64645 12.1464L11.6464 10.1464Z",fill:"currentColor",fillOpacity:.9})})}function eR({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z",fill:"currentColor",fillOpacity:.9})})}function eL({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C6 11.7239 6.22386 11.5 6.5 11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H6.5C6.22386 12.5 6 12.2761 6 12Z",fill:"currentColor",fillOpacity:.9})})}function eN({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 6.5C12.5 6.22386 12.2761 6 12 6C11.7239 6 11.5 6.22386 11.5 6.5V17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5V6.5ZM6 9.10355C6 8.43538 6.80786 8.10075 7.28033 8.57323L10 11.2929C10.3905 11.6834 10.3905 12.3166 10 12.7071L7.28033 15.4268C6.80785 15.8993 6 15.5646 6 14.8965V9.10355ZM7 14.2929L9.29289 12L7 9.70711V14.2929ZM18 9.10355C18 8.43538 17.1921 8.10075 16.7197 8.57323L14 11.2929C13.6095 11.6834 13.6095 12.3166 14 12.7071L16.7197 15.4268C17.1922 15.8993 18 15.5646 18 14.8965V9.10355ZM17 14.2929L14.7071 12L17 9.70711V14.2929Z",fill:"currentColor",fillOpacity:.9})})}function e$({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2322 6.47491C11.2085 5.4986 12.7915 5.4986 13.7678 6.47491L15.2929 8.00003H14C13.7239 8.00003 13.5 8.22389 13.5 8.50003C13.5 8.77618 13.7239 9.00003 14 9.00003H16.5C16.7761 9.00003 17 8.77618 17 8.50003V6.00003C17 5.72389 16.7761 5.50003 16.5 5.50003C16.2239 5.50003 16 5.72389 16 6.00003V7.29293L14.4749 5.7678C13.108 4.40097 10.892 4.40097 9.52513 5.7678L7.14645 8.14648C6.95118 8.34174 6.95118 8.65833 7.14645 8.85359C7.34171 9.04885 7.65829 9.04885 7.85355 8.85359L10.2322 6.47491ZM13.0607 9.64648C12.4749 9.0607 11.5251 9.06069 10.9393 9.64648L7.64645 12.9394C7.06066 13.5252 7.06066 14.4749 7.64645 15.0607L10.9393 18.3536C11.5251 18.9394 12.4749 18.9394 13.0607 18.3536L16.3536 15.0607C16.9393 14.4749 16.9393 13.5252 16.3536 12.9394L13.0607 9.64648ZM11.6464 10.3536C11.8417 10.1583 12.1583 10.1583 12.3536 10.3536L15.6464 13.6465C15.8417 13.8417 15.8417 14.1583 15.6464 14.3536L12.3536 17.6465C12.1583 17.8417 11.8417 17.8417 11.6464 17.6465L8.35355 14.3536C8.15829 14.1583 8.15829 13.8417 8.35355 13.6465L11.6464 10.3536Z",fill:"currentColor",fillOpacity:.9})})}var eM=()=>(0,o.jsx)(ek,{size:16}),eE=()=>(0,o.jsx)(eS,{size:20}),eA=()=>(0,o.jsx)(ej,{size:20}),eT=(0,l.forwardRef)(({options:e,value:t,highlightedIndex:r=-1,onSelect:n,onHighlight:i,onItemHover:a,showCheckmark:s=!0,style:u,minWidth:c,initialScrollTop:d,renderLabel:p},h)=>{let f=(0,l.useRef)(null),g=(0,l.useRef)(0),m=(0,l.useRef)(null),[x,b]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),[C,w]=(0,l.useState)(-1),k=i?r:C,j=i??w,S=(0,l.useCallback)(e=>{f.current=e,"function"==typeof h?h(e):h&&(h.current=e)},[h]),R=(0,l.useCallback)(()=>{m.current=null,cancelAnimationFrame(g.current)},[]),L=(0,l.useCallback)(()=>{let e=f.current;if(!e)return;let t=e.scrollTop>1,r=e.scrollTop+e.clientHeight<e.scrollHeight-1;t||"up"!==m.current||R(),r||"down"!==m.current||R(),b(t),y(r)},[R]),N=(0,l.useCallback)(e=>{m.current=e;let t=performance.now(),r=e=>{let n=Math.min((e-t)/1e3,.05);t=e;let l=f.current;l&&m.current&&(l.scrollTop+=("down"===m.current?1:-1)*150*n,g.current=requestAnimationFrame(r))};g.current=requestAnimationFrame(r)},[]);return(0,l.useLayoutEffect)(()=>{null!=d&&d>0&&f.current&&(f.current.scrollTop=d),L()},[e.length,L,d]),(0,l.useEffect)(()=>()=>cancelAnimationFrame(g.current),[]),(0,o.jsxs)("div",{className:"retune-menu-wrapper",style:{minWidth:c,...u},children:[(0,o.jsxs)("div",{ref:S,className:"retune-menu-scroll",role:"listbox","aria-label":"Options",onScroll:L,children:[e.map((e,r)=>{let i=t===e.value,u=k===r;return(0,o.jsxs)(l.Fragment,{children:[e.separatorBefore&&(0,o.jsx)("div",{className:"retune-menu-separator",children:(0,o.jsx)("div",{className:"retune-menu-separator-line"})}),e.headingBefore&&(0,o.jsx)("div",{className:"retune-menu-heading",children:e.headingBefore}),(0,o.jsx)("div",{className:"retune-menu-item-wrap",children:(0,o.jsxs)("button",{type:"button",onClick:()=>n(e),onMouseEnter:()=>{j(r),a?.(e)},onMouseLeave:()=>{j(-1),a?.(null)},disabled:e.disabled,className:"retune-menu-item"+(u?" highlighted":"")+(i?" selected":"")+(e.disabled?" disabled":"")+(s?" has-check":""),role:"option","aria-selected":i,children:[s&&i&&(0,o.jsx)("span",{className:"retune-menu-check",children:(0,o.jsx)(eM,{})}),(0,o.jsx)("span",{className:"retune-menu-item-label",children:p?p(e):e.label}),e.shortcut&&(0,o.jsx)("span",{className:"retune-menu-item-shortcut",children:e.shortcut})]})})]},`${r}-${e.value}`)}),0===e.length&&(0,o.jsx)("div",{className:"retune-menu-empty",children:"No options available"})]}),x&&(0,o.jsx)("div",{className:"retune-menu-scroll-indicator top",onMouseEnter:()=>N("up"),onMouseLeave:R,"aria-hidden":"true",tabIndex:-1,children:(0,o.jsx)(eE,{})}),v&&(0,o.jsx)("div",{className:"retune-menu-scroll-indicator bottom",onMouseEnter:()=>N("down"),onMouseLeave:R,"aria-hidden":"true",tabIndex:-1,children:(0,o.jsx)(eA,{})})]})});function eV(e,t,r){let n=6+28*t,l=12+28*r,i=Math.min(l,400),o=window.innerHeight,a=e.top+e.height/2,s=Math.max(8,Math.min(a-n-14,o-8-i)),u=Math.max(0,Math.min(n-(a-s-14),Math.max(0,l-i)));return{top:s,left:e.left,width:e.width,scrollTop:u}}function eH({label:e,prop:t,value:n,options:a,onChange:s,variableMatch:u,property:c,onVariableSelect:d,onVariableApply:p,onVariableUnlink:h,isChanged:f,onReset:g}){let m,[x,b]=(0,l.useState)(A(n||"")),[v,y]=(0,l.useState)(!1),[C,w]=(0,l.useState)(-1),[k,j]=(0,l.useState)(null),S=(0,l.useRef)(null),R=(0,l.useRef)(null),L=(0,l.useRef)(null),N=(0,l.useRef)(!1),$=J(t,L);W(v);let[M,E]=(0,l.useState)(!1),[T,V]=(0,l.useState)(null),H=(0,l.useRef)(()=>E(!1)),P=(0,l.useMemo)(()=>(0,r.hasVariablesForProperty)(c||t),[c,t]),F="__add_variable__",D=(0,l.useMemo)(()=>!P||u?a:[...a,{value:F,label:"Add variable",separatorBefore:!0}],[a,P,u]),[O,Z]=(0,l.useState)(n);n!==O&&(Z(n),N.current||$.current||b(A(n||"")));let X=(0,l.useCallback)(()=>{let e=S.current;if(!e)return;let t=e.getBoundingClientRect(),r=Math.max(0,D.findIndex(e=>e.value===x));j(eV(t,r,D.length)),y(!0),w(r)},[D,x]),q=(0,l.useCallback)(()=>{y(!1),w(-1),j(null)},[]);(0,l.useEffect)(()=>{if(!v)return;let e=e=>{let t=S.current;!t||e.composedPath().includes(t)||q()},t=S.current?.getRootNode();return t.addEventListener("pointerdown",e),()=>t.removeEventListener("pointerdown",e)},[v,q]);let K=(m=a.find(e=>e.value===x))?m.label:x,G=(0,l.useRef)({startX:0,startVal:0,active:!1}),Q=(0,l.useCallback)(()=>{let e=S.current;if(!e)return;let t=e.getBoundingClientRect();V({top:t.top,left:t.left,width:t.width,height:t.height}),E(!0),U(H.current)},[]),ee=(0,l.useCallback)(()=>{Y(H.current),E(!1)},[]),et=(0,l.useCallback)(e=>{let r=[c||t];u?d?.(u.variable,e,r):p?.(e,r)},[u,c,t,d,p]),er=(0,l.useRef)(h);er.current=h;let en=(0,l.useRef)(null),el=(0,l.useRef)(null),ei=(0,l.useCallback)(e=>{if(en.current&&el.current&&en.current.removeEventListener("pointerdown",el.current),en.current=e,e){let t=e=>{e.stopPropagation(),e.preventDefault(),er.current?.()};el.current=t,e.addEventListener("pointerdown",t)}},[]),eo=S.current?.getRootNode()instanceof ShadowRoot?S.current.getRootNode().querySelector("[data-retune-container]"):null;return u?(0,o.jsxs)("div",{className:"retune-combo",ref:S,children:[(0,o.jsx)(I,{isChanged:f??!1,onReset:g??(()=>{})}),e&&(0,o.jsx)("span",{ref:R,className:"retune-combo-label",children:e}),(0,o.jsx)("input",{className:"retune-combo-input retune-combo-variable-applied",style:e?void 0:{paddingLeft:8},value:K,readOnly:!0,onClick:Q,spellCheck:!1}),(0,o.jsx)(z,{content:"Unlink variable",side:"top",delay:300,children:(0,o.jsx)("span",{ref:ei,className:"retune-variable-action retune-variable-unlink",children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{d:"M12.3533 14.646C12.5485 14.8412 12.5484 15.1578 12.3533 15.3531L11.3534 16.353C10.3297 17.3765 8.67028 17.3766 7.64665 16.353C6.62317 15.3294 6.62317 13.6699 7.64665 12.6462L8.64654 11.6463C8.84181 11.4512 9.15844 11.4511 9.35364 11.6463C9.54883 11.8415 9.54874 12.1582 9.35364 12.3534L8.35375 13.3533C7.7208 13.9865 7.7208 15.0128 8.35375 15.6459C8.98687 16.279 10.0132 16.2789 10.6463 15.6459L11.6462 14.646C11.8414 14.451 12.1581 14.4511 12.3533 14.646ZM8.0002 9.00021C8.27634 9.00021 8.50015 9.22401 8.50015 9.50015C8.49994 9.77612 8.27622 10.0001 8.0002 10.0001H6.50036C6.22434 10.0001 6.00061 9.77612 6.00041 9.50015C6.00041 9.22401 6.22422 9.00021 6.50036 9.00021H8.0002ZM14.5002 15.5002C14.7763 15.5002 15.0001 15.724 15.0001 16.0001V17.5C15 17.776 14.7763 17.9999 14.5002 17.9999C14.2241 17.9999 14.0004 17.776 14.0002 17.5V16.0001C14.0002 15.724 14.2241 15.5002 14.5002 15.5002ZM9.50073 5.99984C9.77664 6.00011 10.0007 6.22381 10.0007 6.49978V7.99962C10.0007 8.2756 9.77664 8.4993 9.50073 8.49957C9.22459 8.49957 9.00078 8.27576 9.00078 7.99962V6.49978C9.00078 6.22364 9.22459 5.99984 9.50073 5.99984ZM17.5006 13.9997C17.7765 13.9998 18.0004 14.2237 18.0005 14.4996C18.0005 14.7757 17.7766 14.9994 17.5006 14.9996H16.0007C15.7246 14.9996 15.5008 14.7758 15.5008 14.4996C15.5009 14.2235 15.7246 13.9997 16.0007 13.9997H17.5006ZM16.3543 7.64676C17.3774 8.67043 17.3776 10.33 16.3543 11.3535L15.3544 12.3534C15.1592 12.5486 14.8426 12.5484 14.6473 12.3534C14.452 12.1582 14.452 11.8416 14.6473 11.6463L15.6472 10.6464C16.28 10.0134 16.2798 8.98702 15.6472 8.35387C15.0141 7.72075 13.9871 7.72018 13.3539 8.35317L12.354 9.35307C12.1588 9.54825 11.8422 9.54808 11.6469 9.35307C11.4519 9.15779 11.4517 8.84114 11.6469 8.64596L12.6468 7.64607C13.6705 6.62254 15.3306 6.62312 16.3543 7.64676Z",fill:"currentColor",fillOpacity:.9})})})}),M&&T&&eo&&(0,i.createPortal)((0,o.jsx)(_,{property:c||t,currentVariable:u.variable,onSelect:et,onUnlink:h?()=>{h(),ee()}:void 0,onClose:ee,anchorRect:T}),eo)]}):(0,o.jsxs)("div",{className:"retune-combo",ref:S,children:[(0,o.jsx)(I,{isChanged:f??!1,onReset:g??(()=>{})}),e&&(0,o.jsx)("span",{ref:R,className:"retune-combo-label",onPointerDown:e=>{let t=parseFloat(x);isNaN(t)||(G.current={startX:e.clientX,startVal:t,active:!0},e.target.setPointerCapture(e.pointerId))},onPointerMove:e=>{if(!G.current.active)return;let r=Math.round(e.clientX-G.current.startX),n=x.match(/[a-z%]+$/i)?.[0]||"",l=G.current.startVal+r,i=!(l<0)||t.includes("margin")||t.includes("top")||t.includes("right")||t.includes("bottom")||t.includes("left")||t.includes("indent")?l:0,o=`${i}${n}`;b(o),s(t,o)},onPointerUp:()=>{G.current.active=!1},children:e}),(0,o.jsx)("input",{ref:L,className:"retune-combo-input",style:e?void 0:{paddingLeft:8},value:K,placeholder:"–",onPointerDown:e?void 0:t=>{if(e)return;let r=t.currentTarget.getBoundingClientRect();if(t.clientX-r.left>16)return;let n=parseFloat(x);isNaN(n)||(t.preventDefault(),G.current={startX:t.clientX,startVal:n,active:!0},t.currentTarget.setPointerCapture(t.pointerId))},onPointerMove:e?void 0:e=>{if(G.current.active){let r=Math.round(e.clientX-G.current.startX),n=x.match(/[a-z%]+$/i)?.[0]||"",l=G.current.startVal+r,i=!(l<0)||t.includes("margin")||t.includes("top")||t.includes("right")||t.includes("bottom")||t.includes("left")||t.includes("indent")?l:0,o=`${i}${n}`;b(o),s(t,o);return}let r=e.currentTarget.getBoundingClientRect(),n=e.clientX-r.left<=16;e.currentTarget.style.cursor=n?"ew-resize":""},onPointerUp:e?void 0:()=>{G.current.active=!1},onFocus:e=>{N.current=!0,e.target.select()},onChange:e=>{let r=e.target.value;b(r);let n=a.find(e=>e.label.toLowerCase()===r.toLowerCase()||e.value.toLowerCase()===r.toLowerCase());n&&s(t,n.value)},onBlur:()=>{N.current=!1;let e=B(x,n||"",t);b(e),e!==n&&s(t,e)},onKeyDown:e=>{if("Enter"===e.key){if(e.preventDefault(),v&&C>=0){let e=D[C];e.value===F?(q(),Q()):(b(e.value),s(t,e.value),q())}else{let r=B(x,n||"",t);b(r),s(t,r),e.target.blur()}return}if("Escape"===e.key)return void q();if("ArrowDown"===e.key||"ArrowUp"===e.key)if(e.preventDefault(),v)"ArrowDown"===e.key?w(e=>e<D.length-1?e+1:e):w(e=>e>0?e-1:e);else{let r=parseFloat(x);if(isNaN(r))return;let n=e.shiftKey?10:1,l="ArrowUp"===e.key?n:-n,i=x.match(/[a-z%]+$/i)?.[0]||"",o=`${r+l}${i}`;b(o),s(t,o)}},spellCheck:!1}),(0,o.jsx)("button",{type:"button",className:"retune-combo-trigger",onClick:()=>{v?q():X()},"aria-label":"Toggle options",children:(0,o.jsx)(ej,{})}),v&&k&&(0,o.jsx)("div",{className:"retune-combo-dropdown-anchor",style:{top:k.top,left:k.left,width:k.width},children:(0,o.jsx)(eT,{options:D,value:x,highlightedIndex:C,onSelect:e=>{if(e.value===F){q(),Q();return}b(e.value),s(t,e.value),q()},onHighlight:w,initialScrollTop:k.scrollTop,showCheckmark:!0})}),M&&T&&eo&&(0,i.createPortal)((0,o.jsx)(_,{property:c||t,currentVariable:u?.variable,onSelect:et,onClose:ee,anchorRect:T}),eo)]})}function eP(e){let t=e.replace("#",""),r=3===t.length?t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t,n=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:{r:0,g:0,b:0}}function eB(e,t,r){let n=e=>{let t=Math.max(0,Math.min(255,Math.round(e))).toString(16);return 1===t.length?"0"+t:t};return`#${n(e)}${n(t)}${n(r)}`}function eF(e,t,r){let n=Math.max(e/=255,t/=255,r/=255),l=n-Math.min(e,t,r),i=0;if(0!==l)switch(n){case e:i=((t-r)/l+6*(t<r))/6;break;case t:i=((r-e)/l+2)/6;break;case r:i=((e-t)/l+4)/6}return{h:360*i,s:100*(0===n?0:l/n),v:100*n}}function ez(e,t,r){let n,l,i;if(r/=100,0==(t/=100)){let e=Math.round(255*r);return{r:e,g:e,b:e}}let o=Math.floor(e=(e>=360?0:e)/60),a=e-o,s=r*(1-t),u=r*(1-t*a),c=r*(1-t*(1-a));switch(o){case 0:n=r,l=c,i=s;break;case 1:n=u,l=r,i=s;break;case 2:n=s,l=r,i=c;break;case 3:n=s,l=u,i=r;break;case 4:n=c,l=s,i=r;break;default:n=r,l=s,i=u}return{r:Math.round(255*n),g:Math.round(255*l),b:Math.round(255*i)}}function eI(e,t,r){let{r:n,g:l,b:i}=ez(e,t,r);return eB(n,l,i)}function eD(e,t=100){let{h:r,s:n,v:l}=function(e){let{r:t,g:r,b:n}=eP(e);return eF(t,r,n)}(e);return{h:r,s:n,v:l,a:t}}function eO(e){return eI(e.h,e.s,e.v)}function eW(e){if(!e)return{hex:"#000000",opacity:100};if(e.startsWith("#")){let t=e.replace("#","");return{hex:3===t.length?`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:`#${t}`,opacity:100}}let t=e.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);if(t)return{hex:eB(parseInt(t[1]),parseInt(t[2]),parseInt(t[3])),opacity:Math.round(100*parseFloat(t[4]))};let r=e.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);return r?{hex:eB(parseInt(r[1]),parseInt(r[2]),parseInt(r[3])),opacity:100}:"transparent"===e?{hex:"#000000",opacity:0}:{hex:"#000000",opacity:100}}function eZ(e,t){let{r,g:n,b:l}=eP(e);return t>=100?e:`rgba(${r}, ${n}, ${l}, ${(t/100).toFixed(2)})`}eT.displayName="DropdownMenu";var e_=["bg-","text-","border-","fill-","stroke-","outline-","ring-"];function eX(e){if(e.startsWith("var(--")&&e.endsWith(")"))return e.slice(6,-1);for(let t of e_)if(e.startsWith(t))return e.slice(t.length);return e}function eU(e){let t=e.match(/^(.+)-(\d+)$/);return t?{group:t[1],shade:t[2]}:{group:e,shade:""}}function eY(e,t,r){return Math.min(r,Math.max(t,e))}function eq({value:e,alpha:t=100,onChange:n,onAlphaChange:i,onClose:a,anchorRect:s,property:u,currentVariable:c,onVariableSelect:d,onVariableApply:p,onVariableUnlink:h,initialTab:f}){let g,m,[x,b]=(0,l.useState)(()=>eD(e||"#000000")),v=(0,l.useRef)(""),y=(0,l.useRef)(null),C=(0,l.useMemo)(()=>u?(0,r.getVariablesForProperty)(u):[],[u]);u&&(0,r.getCategoryForProperty)(u.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`));let w=C.length>0,[k,j]=(0,l.useState)(f||"custom"),[S,R]=(0,l.useState)(""),[L,N]=(0,l.useState)(-1),$=(0,l.useRef)(null),M=(0,l.useRef)(f);f!==M.current&&(M.current=f,f&&j(f));let E=(0,l.useMemo)(()=>{if(!S)return C;let e=S.toLowerCase();return C.filter(t=>t.className.toLowerCase().includes(e)||Object.values(t.values).some(t=>t.toLowerCase().includes(e)))},[C,S]);(0,l.useEffect)(()=>{N(-1)},[E]),(0,l.useEffect)(()=>{if(L<0)return;let e=$.current;if(!e)return;let t=e.querySelector(`[data-token-index="${L}"]`);t&&t.scrollIntoView({block:"nearest"})},[L]),(0,l.useEffect)(()=>{if("tokens"!==k)return;let e=$.current;e&&requestAnimationFrame(()=>{let t=e.querySelector(".retune-variable-dialog-item-active");t&&t.scrollIntoView({block:"center"})})},[k]);let A=(0,l.useRef)(a);A.current=a;let T=(0,l.useRef)(d);T.current=d;let V=(0,l.useRef)(p);V.current=p;let H=(0,l.useRef)(c);H.current=c;let P=(0,l.useRef)(E);P.current=E;let B=(0,l.useRef)(u);B.current=u;let F=(0,l.useCallback)(e=>{let t=P.current.length;0!==t&&("ArrowDown"===e.key?(e.preventDefault(),N(e=>(e+1)%t)):"ArrowUp"===e.key?(e.preventDefault(),N(e=>e<=0?t-1:e-1)):"Enter"===e.key&&(e.preventDefault(),N(e=>{if(e>=0&&e<t){let t=P.current[e];if(t){let e=B.current?[B.current]:[];H.current?T.current?.(H.current,t,e):V.current?.(t,e),A.current()}}return e})))},[]);(0,l.useEffect)(()=>{let e=$.current;if(!e)return;let t=e=>{let t=e.target.closest("[data-token-index]");if(!t)return;e.preventDefault(),e.stopPropagation();let r=parseInt(t.dataset.tokenIndex,10),n=P.current[r];if(n){let e=B.current?[B.current]:[];H.current?T.current?.(H.current,n,e):V.current?.(n,e),A.current()}};return e.addEventListener("pointerdown",t),()=>e.removeEventListener("pointerdown",t)},[k]),(0,l.useEffect)(()=>()=>{y.current?.()},[]);let[I,D]=(0,l.useState)(e);e!==I&&(D(e),e!==v.current&&b(eD(e||"#000000")));let[O,W]=(0,l.useState)(()=>eI(x.h,x.s,x.v).replace("#","").toUpperCase()),[_,X]=(0,l.useState)(()=>{let{r:e,g:t,b:r}=ez(x.h,x.s,x.v);return{r:String(e),g:String(t),b:String(r)}}),U=(0,l.useRef)(null),[Y,q]=(0,l.useState)(x);if(x!==Y&&(q(x),!U.current)){W(eI(x.h,x.s,x.v).replace("#","").toUpperCase());let{r:e,g:t,b:r}=ez(x.h,x.s,x.v);X({r:String(e),g:String(t),b:String(r)})}let K=(0,l.useCallback)(e=>{b(e);let t=eO(e);v.current=t,n(t),c&&h?.()},[n,c,h]),G=(0,l.useRef)(null),J=(0,l.useCallback)((e,t)=>{if(!G.current)return null;let r=G.current.getBoundingClientRect();return{s:eY((e-r.left)/r.width*100,0,100),v:eY((1-(t-r.top)/r.height)*100,0,100)}},[]),Q=(0,l.useRef)(x);Q.current=x;let ee=(0,l.useRef)(n);ee.current=n;let et=(0,l.useCallback)(e=>{e.preventDefault();let t=J(e.clientX,e.clientY);t&&K({...Q.current,s:t.s,v:t.v});let r=e=>{let t=J(e.clientX,e.clientY);if(t){let e={...Q.current,s:t.s,v:t.v},r=eO(e);v.current=r,b(e),ee.current(r)}},n=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),y.current=null};document.addEventListener("pointermove",r),document.addEventListener("pointerup",n),y.current=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n)}},[J,K]),er=(0,l.useRef)(null),en=(0,l.useCallback)(e=>{if(!er.current)return 0;let t=er.current.getBoundingClientRect();return eY((e-t.left)/t.width*360,0,360)},[]),el=(0,l.useCallback)(e=>{e.preventDefault(),K({...Q.current,h:en(e.clientX)});let t=e=>{let t=en(e.clientX),r={...Q.current,h:t},n=eO(r);v.current=n,b(r),ee.current(n)},r=()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r),y.current=null};document.addEventListener("pointermove",t),document.addEventListener("pointerup",r),y.current=()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r)}},[en,K]),ei=(0,l.useRef)(null),[eo,ea]=(0,l.useState)(t),es=(0,l.useRef)(i);es.current=i;let[eu,ec]=(0,l.useState)(t);t!==eu&&(ec(t),ea(t));let ed=(0,l.useCallback)(e=>{if(!ei.current)return 100;let t=ei.current.getBoundingClientRect();return eY(Math.round((e-t.left)/t.width*100),0,100)},[]),ep=(0,l.useCallback)(e=>{e.preventDefault();let t=ed(e.clientX);ea(t),es.current?.(t);let r=e=>{let t=ed(e.clientX);ea(t),es.current?.(t)},n=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),y.current=null};document.addEventListener("pointermove",r),document.addEventListener("pointerup",n),y.current=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n)}},[ed]),eh=(0,l.useCallback)(()=>{U.current=null;let e=O.replace(/^#/,"").trim();3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),/^[a-fA-F0-9]{6}$/.test(e)?(K(eD(`#${e}`,x.a)),W(e.toUpperCase())):W(eI(x.h,x.s,x.v).replace("#","").toUpperCase())},[O,x,K]),ef=(0,l.useCallback)(()=>{U.current=null;let e=eY(Math.round(Number(_.r)||0),0,255),t=eY(Math.round(Number(_.g)||0),0,255),r=eY(Math.round(Number(_.b)||0),0,255),{h:n,s:l,v:i}=eF(e,t,r);K({h:n,s:l,v:i,a:x.a}),X({r:String(e),g:String(t),b:String(r)})},[_,x.a,K]),eg=(0,l.useCallback)(e=>t=>{"Enter"===t.key&&(t.currentTarget.blur(),e())},[]),em=eI(x.h,x.s,x.v),ex=x.s,eb=100-x.v,ev="u">typeof window&&"EyeDropper"in window,ey=(0,l.useCallback)(async()=>{if(ev)try{let e=new window.EyeDropper,t=await e.open();if(t?.sRGBHex){let e=t.sRGBHex;n(e),b(eD(e)),c&&h?.()}}catch{}},[ev,n]),eC=(0,l.useCallback)(e=>{"unlink"===e&&(h?.(),a())},[h,a]),ew=!c,ek=(0,o.jsx)(z,{content:c?"Unlink variable":"No variable linked",side:"bottom",delay:300,children:(0,o.jsx)("button",{type:"button",className:"retune-floating-dialog-close","data-dialog-action":ew?void 0:"unlink",style:ew?{opacity:.3,cursor:"default"}:void 0,children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.14694 12.1475C8.3422 11.9522 8.65871 11.9522 8.85397 12.1475C9.04903 12.3427 9.04916 12.6593 8.85397 12.8545L7.35397 14.3545C6.72133 14.9876 6.72123 16.0134 7.35397 16.6465C7.98708 17.2796 9.01376 17.2795 9.64694 16.6465L11.1469 15.1465C11.3421 14.9517 11.6588 14.9517 11.854 15.1465C12.0491 15.3416 12.0488 15.6582 11.854 15.8535L10.354 17.3535C9.33027 18.377 7.67057 18.3771 6.64694 17.3535C5.62359 16.3299 5.6235 14.6701 6.64694 13.6465L8.14694 12.1475ZM14.5005 15.5C14.7764 15.5001 15.0004 15.724 15.0005 16V17.5C15.0005 17.7761 14.7765 17.9999 14.5005 18C14.2243 18 14.0005 17.7761 14.0005 17.5V16C14.0005 15.7239 14.2244 15.5 14.5005 15.5ZM17.5005 14C17.7764 14.0001 18.0004 14.224 18.0005 14.5C18.0005 14.7761 17.7765 14.9999 17.5005 15H16.0005C15.7243 15 15.5005 14.7761 15.5005 14.5C15.5005 14.2239 15.7244 14 16.0005 14H17.5005ZM13.6469 6.64648C14.6706 5.62308 16.3303 5.62301 17.354 6.64648C18.3774 7.6701 18.3774 9.32986 17.354 10.3535L15.854 11.8535C15.6587 12.0487 15.3422 12.0487 15.1469 11.8535C14.9517 11.6583 14.9518 11.3417 15.1469 11.1465L16.6469 9.64648C17.2798 9.01335 17.2799 7.98661 16.6469 7.35351C16.0138 6.72057 14.9871 6.72064 14.354 7.35351L12.854 8.85351C12.6588 9.04859 12.3422 9.04843 12.1469 8.85351C11.952 8.65825 11.9519 8.34165 12.1469 8.14648L13.6469 6.64648ZM8.00045 9C8.27642 9.00014 8.50036 9.22402 8.50045 9.5C8.50045 9.77605 8.27647 9.99985 8.00045 10H6.50045C6.22431 10 6.00045 9.77614 6.00045 9.5C6.00054 9.22393 6.22437 9 6.50045 9H8.00045ZM9.50045 6C9.77642 6.00014 10.0004 6.22402 10.0005 6.5V8C10.0005 8.27605 9.77647 8.49985 9.50045 8.5C9.22431 8.5 9.00045 8.27614 9.00045 8V6.5C9.00054 6.22393 9.22437 6 9.50045 6Z",fill:"currentColor"})})})}),ej=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"retune-cp-sv-wrap",children:(0,o.jsxs)("div",{ref:G,className:"retune-cp-sv",style:{backgroundColor:`hsl(${x.h}, 100%, 50%)`},onPointerDown:et,children:[(0,o.jsx)("div",{className:"retune-cp-sv-white"}),(0,o.jsx)("div",{className:"retune-cp-sv-black"}),(0,o.jsx)("div",{className:"retune-cp-handle",style:{left:`${ex}%`,top:`${eb}%`},children:(0,o.jsx)("div",{className:"retune-cp-handle-inner",style:{backgroundColor:em}})})]})}),(0,o.jsxs)("div",{className:"retune-cp-sliders",children:[ev&&(0,o.jsx)(z,{content:"Pick color from screen",side:"bottom",delay:300,children:(0,o.jsx)("button",{type:"button",className:"retune-cp-eyedropper",onClick:ey,children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{d:"M14.5156 5.76709C15.5386 4.73901 17.203 4.7367 18.2285 5.76221C19.25 6.78399 19.2513 8.43996 18.2324 9.46436L16.6602 11.0435C17.0848 11.771 16.9869 12.7196 16.3633 13.3433L16.3438 13.3638C15.6018 14.1055 14.3982 14.1054 13.6562 13.3638L13.5 13.2075L8.43945 18.2642C7.97069 18.7324 7.33447 18.9956 6.67188 18.9956L5.50391 18.9946C5.22841 18.9944 5.00451 18.7712 5.00391 18.4956L5.00195 17.3315C5.00057 16.6668 5.26346 16.0282 5.7334 15.5581L10.792 10.4995L10.6367 10.3433C9.89467 9.60127 9.8947 8.39778 10.6367 7.65576L10.6562 7.63623C11.2789 7.01362 12.2251 6.91514 12.9521 7.3374L14.5156 5.76709ZM6.44043 16.2661C6.15876 16.5481 6.00112 16.931 6.00195 17.3296L6.00391 17.9937L6.67188 17.9956C7.06948 17.9956 7.45115 17.8372 7.73242 17.5562L12.793 12.5005L11.499 11.2065L6.44043 16.2661ZM17.5205 6.46924C16.8863 5.8355 15.8572 5.83673 15.2246 6.47217L13.3545 8.35205L13.001 8.70752L12.6367 8.34326C12.2852 7.99183 11.7147 7.99181 11.3633 8.34326L11.3438 8.36279C10.9923 8.71427 10.9923 9.28476 11.3438 9.63623L14.3633 12.6558C14.7147 13.0073 15.2852 13.0072 15.6367 12.6558L15.6562 12.6362C16.0077 12.2848 16.0077 11.7143 15.6562 11.3628L15.2939 11.0005L15.6455 10.647L17.5234 8.75928C18.1538 8.12571 18.1523 7.10128 17.5205 6.46924Z",fill:"currentColor"})})})}),(0,o.jsxs)("div",{className:"retune-cp-slider-tracks",children:[(0,o.jsx)("div",{ref:er,className:"retune-cp-hue",onPointerDown:el,children:(0,o.jsx)("div",{className:"retune-cp-handle",style:{left:`${x.h/360*100}%`,top:"50%"},children:(0,o.jsx)("div",{className:"retune-cp-handle-inner",style:{backgroundColor:`hsl(${x.h}, 100%, 50%)`}})})}),(0,o.jsxs)("div",{ref:ei,className:"retune-cp-alpha",onPointerDown:ep,children:[(0,o.jsx)("div",{className:"retune-cp-alpha-checker"}),(0,o.jsx)("div",{className:"retune-cp-alpha-gradient",style:{background:`linear-gradient(to right, transparent, ${em})`}}),(0,o.jsx)("div",{className:"retune-cp-handle",style:{left:`${eo}%`,top:"50%"},children:(0,o.jsx)("div",{className:"retune-cp-handle-inner",style:{backgroundColor:eo<100?`rgba(${ez(x.h,x.s,x.v).r}, ${ez(x.h,x.s,x.v).g}, ${ez(x.h,x.s,x.v).b}, ${eo/100})`:em}})})]})]})]}),(0,o.jsxs)("div",{className:"retune-cp-inputs",children:[(0,o.jsxs)("div",{className:"retune-cp-input-group",children:[(0,o.jsx)("label",{className:"retune-cp-label",children:"Hex"}),(0,o.jsx)("input",{className:"retune-cp-input",value:O,onChange:e=>W(e.target.value),onFocus:e=>{U.current="hex",e.target.select()},onBlur:eh,onKeyDown:eg(eh),spellCheck:!1})]}),(0,o.jsxs)("div",{className:"retune-cp-input-group",children:[(0,o.jsx)("label",{className:"retune-cp-label",children:"R"}),(0,o.jsx)("input",{className:"retune-cp-input",inputMode:"numeric",value:_.r,onChange:e=>X(t=>({...t,r:e.target.value})),onFocus:e=>{U.current="r",e.target.select()},onBlur:ef,onKeyDown:eg(ef)})]}),(0,o.jsxs)("div",{className:"retune-cp-input-group",children:[(0,o.jsx)("label",{className:"retune-cp-label",children:"G"}),(0,o.jsx)("input",{className:"retune-cp-input",inputMode:"numeric",value:_.g,onChange:e=>X(t=>({...t,g:e.target.value})),onFocus:e=>{U.current="g",e.target.select()},onBlur:ef,onKeyDown:eg(ef)})]}),(0,o.jsxs)("div",{className:"retune-cp-input-group",children:[(0,o.jsx)("label",{className:"retune-cp-label",children:"B"}),(0,o.jsx)("input",{className:"retune-cp-input",inputMode:"numeric",value:_.b,onChange:e=>X(t=>({...t,b:e.target.value})),onFocus:e=>{U.current="b",e.target.select()},onBlur:ef,onKeyDown:eg(ef)})]})]})]}),eS=(0,l.useMemo)(()=>(function(e){let t=new Map;for(let r of e){let{group:e}=eU(eX(r.className));t.has(e)||t.set(e,[]),t.get(e).push(r)}return t})(E),[E]),{ramps:eR,standalone:eL}=(0,l.useMemo)(()=>{let e=[],t=[];for(let[r,n]of eS)n.length>1?(n.sort((e,t)=>(parseInt(eU(eX(e.className)).shade)||0)-(parseInt(eU(eX(t.className)).shade)||0)),e.push([r,n])):t.push(...n);return t.sort((e,t)=>eX(e.className).localeCompare(eX(t.className))),e.sort((e,t)=>e[0].localeCompare(t[0])),{ramps:e,standalone:t}},[eS]);P.current=(0,l.useMemo)(()=>{let e=[...eL];for(let[,t]of eR)e.push(...t);return e},[eL,eR]);let eN=(g=0,m=e=>{let t=g++,r=c?.className===e.className,n=t===L;return(0,o.jsxs)("div",{className:`retune-variable-dialog-item${r?" retune-variable-dialog-item-active":""}${n?" retune-variable-dialog-item-highlighted":""}`,"data-token-index":t,children:[(0,o.jsx)("span",{className:"retune-variable-dialog-swatch",style:{backgroundColor:function(e){for(let[t,r]of Object.entries(e.values)){if(t.includes("color")||"background-color"===t||"fill"===t||"stroke"===t)return r;let e=r.trim().toLowerCase();if(e.startsWith("#")||e.startsWith("rgb")||e.startsWith("hsl")||e.startsWith("oklch")||e.startsWith("oklab"))return r}return null}(e)||"transparent"}}),(0,o.jsx)("span",{className:"retune-variable-dialog-name",children:eX(e.className)})]},e.className)},(0,o.jsxs)("div",{ref:$,className:"retune-variable-dialog-list",children:[0===E.length&&(0,o.jsx)("div",{className:"retune-variable-dialog-empty",children:"No variables found"}),eL.map(m),eR.map(([e,t])=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"retune-variable-dialog-group-title",children:e.replace(/-/g," ")}),t.map(m)]},e))]}));return w?(0,o.jsx)(Z,{tabs:[{value:"custom",label:"Custom"},{value:"tokens",label:"Variables"}],activeTab:k,onTabChange:j,onClose:a,anchorRect:s,search:"tokens"===k?{value:S,onChange:R,placeholder:"Search",onKeyDown:F}:void 0,headerActions:ek,onHeaderAction:eC,minHeight:"custom"===k?void 0:400,children:"tokens"===k?eN:ej}):(0,o.jsx)(Z,{title:"Color",onClose:a,anchorRect:s,children:ej})}function eK({prop:e,value:t,onChange:r,variableMatch:n,property:i,onVariableSelect:a,onVariableApply:s,onVariableUnlink:u,isChanged:c,onReset:d}){var p;let h=eW(t||""),[f,g]=(0,l.useState)(h.hex.replace("#","").toUpperCase()),[m,x]=(0,l.useState)(String(h.opacity)),[b,v]=(0,l.useState)(!1),[y,C]=(0,l.useState)("custom"),[w,k]=(0,l.useState)(null),j=(0,l.useRef)(null),S=(0,l.useRef)(!1),R=(0,l.useRef)(!1),L=(0,l.useRef)(()=>v(!1)),N=(0,l.useRef)(h.hex),$=(0,l.useRef)(h.opacity),[M,E]=(0,l.useState)(t);if(t!==M){E(t);let e=eW(t||"");N.current=e.hex,$.current=e.opacity,S.current||g(e.hex.replace("#","").toUpperCase()),R.current||x(String(e.opacity))}let A=(0,l.useCallback)((t,n)=>{N.current=t,$.current=n,r(e,eZ(t,n))},[e,r]),T=(0,l.useCallback)(()=>{if(b){Y(L.current),v(!1);return}V("custom")},[b]),V=(0,l.useCallback)(e=>{let t=j.current;if(!t)return;let r=t.getBoundingClientRect(),n=t.closest(".retune-row");if(n){let e=n.getBoundingClientRect();k({top:r.top,left:e.left,width:e.width,height:r.height})}else k({top:r.top,left:r.left,width:r.width,height:r.height});C(e),v(!0),U(L.current)},[]),H=(0,l.useCallback)(()=>{if(b){Y(L.current),v(!1);return}V("tokens")},[b,V]),P=(0,l.useCallback)(e=>{g(e.replace("#","").toUpperCase()),A(e,$.current)},[A]),B=(0,l.useCallback)(e=>{x(String(e)),A(N.current,e)},[A]),F=(0,l.useCallback)(()=>{Y(L.current),v(!1)},[]),z=(0,l.useCallback)((e,t)=>{s?.(e,t),Y(L.current),v(!1)},[s]),D=(0,l.useCallback)((e,t,r)=>{a?.(e,t,r),Y(L.current),v(!1)},[a]),O=(0,l.useCallback)(()=>{S.current=!1;let e=f.replace(/^#/,"").trim();3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),/^[a-fA-F0-9]{6}$/.test(e)?(g(e.toUpperCase()),A(`#${e}`,$.current)):g(N.current.replace("#","").toUpperCase())},[f,A]),W=(0,l.useCallback)(()=>{R.current=!1;let e=Math.max(0,Math.min(100,Math.round(Number(m)||0)));x(String(e)),A(N.current,e)},[m,A]),Z=(0,l.useCallback)(e=>{if("Enter"===e.key)e.currentTarget.blur();else if("ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t=Math.round(Number(e.currentTarget.value)||0),r=e.shiftKey?10:1,n=Math.max(0,Math.min(100,t+("ArrowUp"===e.key?r:-r)));x(String(n)),A(N.current,n)}},[A]),_=(()=>{let e=N.current,t=$.current;if(t>=100)return{backgroundColor:e,boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"};let r=eZ(e,t);return{backgroundImage:`linear-gradient(to right, ${e} 50%, ${r} 50%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)`,backgroundSize:"100% 100%, 4px 4px, 4px 4px",backgroundPosition:"0 0, 0 0, 2px 2px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"}})();return(0,o.jsxs)("div",{className:"retune-color-row",children:[(0,o.jsx)(I,{isChanged:c??!1,onReset:d??(()=>{})}),(0,o.jsxs)("div",{className:`retune-color-hex-section${n?" retune-color-variable-applied":""}`,children:[(0,o.jsx)("div",{ref:j,className:"retune-color-swatch",onClick:n?H:T,children:(0,o.jsx)("div",{className:"retune-color-swatch-inner",style:_})}),(0,o.jsx)("input",{className:"retune-color-hex-input",value:n?(p=n.variable.className).startsWith("var(--")&&p.endsWith(")")?p.slice(6,-1):p:f,readOnly:!!n,onClick:n?H:void 0,onChange:n?void 0:e=>g(e.target.value.replace(/[^a-fA-F0-9]/g,"").slice(0,6)),onFocus:n?void 0:e=>{S.current=!0,e.target.select()},onBlur:n?void 0:O,onKeyDown:n?void 0:e=>{"Enter"===e.key&&e.currentTarget.blur()},spellCheck:!1}),(0,o.jsx)(G,{match:n,property:i||e,onVariableSelect:a,onVariableApply:s,onVariableUnlink:u,onRequestOpen:H})]}),!n&&(0,o.jsxs)("div",{className:"retune-color-opacity-section",children:[(0,o.jsx)("input",{className:"retune-color-opacity-input",inputMode:"numeric",value:m,onChange:e=>x(e.target.value),onFocus:e=>{R.current=!0,e.target.select()},onBlur:W,onKeyDown:Z}),(0,o.jsx)("span",{className:"retune-color-opacity-unit",children:"%"})]}),b&&w&&(0,o.jsx)(eq,{value:N.current,alpha:$.current,onChange:P,onAlphaChange:B,onClose:F,anchorRect:w,property:i||e,currentVariable:n?.variable,onVariableSelect:D,onVariableApply:z,onVariableUnlink:u,initialTab:y})]})}function eG(e){return e.charAt(0).toUpperCase()+e.slice(1).replace(/-/g," ")}function eJ({label:e,prop:t,value:r,options:n,onChange:i,isChanged:a,onReset:s}){let[u,c]=(0,l.useState)(r||""),[d,p]=(0,l.useState)(!1),[h,f]=(0,l.useState)(-1),[g,m]=(0,l.useState)(null),x=(0,l.useRef)(null);W(d);let[b,v]=(0,l.useState)(r);r!==b&&(v(r),c(r||""));let y=(0,l.useCallback)(()=>{let e=x.current;if(!e)return;let t=e.getBoundingClientRect(),r=Math.max(0,n.indexOf(u));m(eV(t,r,n.length)),p(!0),f(r)},[n,u]),C=(0,l.useCallback)(()=>{p(!1),f(-1),m(null)},[]);(0,l.useEffect)(()=>{if(!d)return;let e=e=>{let t=x.current;!t||e.composedPath().includes(t)||C()},t=x.current?.getRootNode();return t.addEventListener("pointerdown",e),()=>t.removeEventListener("pointerdown",e)},[d,C]);let w=n.map(e=>({value:e,label:eG(e)})),k=e=>{c(e.value),i(t,e.value),C()};return(0,o.jsxs)("div",{className:"retune-select",ref:x,children:[(0,o.jsx)(I,{isChanged:a??!1,onReset:s??(()=>{})}),(0,o.jsxs)("button",{type:"button",className:"retune-select-button",onClick:()=>{d?C():y()},onKeyDown:e=>{"Enter"===e.key||" "===e.key?(e.preventDefault(),d&&h>=0?k(w[h]):d?C():y()):"Escape"===e.key?C():"ArrowDown"===e.key?(e.preventDefault(),d?f(e=>e<n.length-1?e+1:e):y()):"ArrowUp"===e.key&&(e.preventDefault(),d&&f(e=>e>0?e-1:e))},children:[e&&(0,o.jsx)("span",{className:"retune-select-label",children:e}),(0,o.jsx)("span",{className:"retune-select-value",style:e?void 0:{paddingLeft:8},children:eG(u)}),(0,o.jsx)("span",{className:"retune-select-chevron",children:(0,o.jsx)(ej,{})})]}),d&&g&&(0,o.jsx)("div",{className:"retune-select-dropdown-anchor",style:{top:g.top,right:window.innerWidth-g.left-g.width,minWidth:g.width},children:(0,o.jsx)(eT,{options:w,value:u,highlightedIndex:h,onSelect:k,onHighlight:f,initialScrollTop:g.scrollTop,showCheckmark:!0})})]})}function eQ({label:e,prop:t,value:r,min:n,max:i,step:a=.01,onChange:s}){let[u,c]=(0,l.useState)(r||"0"),[d,p]=(0,l.useState)(r);r!==d&&(p(r),c(r||"0"));let h=parseFloat(u)||0,f=i-n,g=f>0?100*Math.max(0,Math.min(1,(h-n)/f)):0,m=a<1?Math.max(0,-Math.floor(Math.log10(a))):0,x=(0,l.useRef)(null),[b,v]=(0,l.useState)(!1),[y,C]=(0,l.useState)(!1),w=(0,l.useCallback)(e=>{let t=x.current;if(!t)return h;let r=t.getBoundingClientRect(),l=n+Math.max(0,Math.min(1,(e-r.left)/r.width))*f;return Number((l=Math.max(n,Math.min(i,l=Math.round(l/a)*a))).toFixed(m))},[n,i,f,a,m,h]),k=(0,l.useCallback)(e=>{let r=String(e);c(r),s(t,r)},[t,s]),j=y||b,S=a>=1?String(Math.round(h)):h.toFixed(m),R=(0,l.useMemo)(()=>{if(f<=0)return[];let e=f/8,t=Math.pow(10,Math.floor(Math.log10(e))),r=e/t,l=(r<1.5?1:r<3.5?2:r<7.5?5:10)*t,o=[],a=Math.ceil(n/l)*l;for(;a<=i+.001*l;){let e=(a-n)/f;e>.03&&e<.97&&o.push(e),a=+(a+l).toFixed(10)}return o},[n,i,f]);return(0,o.jsxs)("div",{ref:x,className:"retune-slider",tabIndex:0,role:"slider","aria-valuemin":n,"aria-valuemax":i,"aria-valuenow":h,"aria-label":e,onPointerEnter:()=>C(!0),onPointerLeave:()=>{b||C(!1)},onPointerDown:e=>{e.preventDefault(),v(!0),e.target.setPointerCapture(e.pointerId),k(w(e.clientX))},onPointerMove:e=>{b&&k(w(e.clientX))},onPointerUp:()=>v(!1),onKeyDown:e=>{"ArrowLeft"===e.key||"ArrowDown"===e.key?(e.preventDefault(),k(Number(Math.max(n,h-a).toFixed(m)))):("ArrowRight"===e.key||"ArrowUp"===e.key)&&(e.preventDefault(),k(Number(Math.min(i,h+a).toFixed(m))))},children:[(0,o.jsx)("div",{className:"retune-slider-fill",style:{width:`${g}%`}}),j&&R.map((e,t)=>(0,o.jsx)("div",{className:"retune-slider-indicator",style:{left:`${100*e}%`}},t)),j&&(0,o.jsx)("div",{className:"retune-slider-handle",style:{left:`max(4px, calc(${g}% - 4px))`}}),(0,o.jsxs)("div",{className:"retune-slider-labels",children:[(0,o.jsx)("span",{className:"retune-slider-label",children:e}),(0,o.jsx)("span",{className:"retune-slider-value",children:S})]})]})}var e1=["system-ui","sans-serif","serif","monospace"],e0=null;async function e5(){try{if(!("queryLocalFonts"in window))return[];let e=await window.queryLocalFonts(),t=new Set;for(let r of e)t.add(r.family);return Array.from(t).sort()}catch{return[]}}function e2(e){return e?e.split(",")[0].trim().replace(/^["']|["']$/g,""):""}function e7({prop:e,value:t,onChange:r,isChanged:n,onReset:a}){let s=e2(t||""),[u,c]=(0,l.useState)(s),[d,p]=(0,l.useState)(!1),[h,f]=(0,l.useState)(null),[g,m]=(0,l.useState)(""),[x,b]=(0,l.useState)(null),[v,y]=(0,l.useState)(-1),[C,w]=(0,l.useState)("all"),k=(0,l.useRef)(null),j=(0,l.useRef)(null),S=(0,l.useRef)(()=>p(!1)),[R,L]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(null===x&&"queryLocalFonts"in window)try{navigator.permissions.query({name:"local-fonts"}).then(e=>{"granted"===e.state?e5().then(e=>b(e)):"denied"===e.state&&(b([]),L(!0))}).catch(()=>{})}catch{}},[x]);let[N,$]=(0,l.useState)(t);t!==N&&($(t),c(e2(t||"")));let M=(0,l.useMemo)(()=>(e0||(e0=function(){let e=new Set;try{for(let t of document.styleSheets)try{for(let r of t.cssRules){if(!(r instanceof CSSStyleRule))continue;let t=r.style.getPropertyValue("font-family");if(!(!t||t.trim().startsWith("var(")))for(let r of t.split(",")){let t=r.trim().replace(/^["']|["']$/g,"");t.startsWith("var(")||t&&!e1.includes(t)&&e.add(t)}}}catch{}}catch{}return Array.from(e).sort()}(),setTimeout(()=>{e0=null},1e4)),e0),[]),E=(0,l.useMemo)(()=>(x||[]).filter(e=>!M.some(t=>t.toLowerCase()===e.toLowerCase())),[x,M]),A=e=>!g||e.toLowerCase().includes(g.toLowerCase()),T="all"===C||"project"===C?M.filter(A):[],V="all"===C||"system"===C?E.filter(A):[],H="all"===C||"generic"===C?e1.filter(A):[],P=[...T,...V,...H],B=(0,l.useCallback)(()=>{let e=k.current;if(!e)return;if(d){Y(S.current),p(!1);return}let t=e.closest(".retune-row"),r=t?t.getBoundingClientRect():e.getBoundingClientRect();f({top:r.top,left:r.left,width:r.width,height:r.height}),p(!0),m(""),y(-1),U(S.current)},[d]),F=(0,l.useCallback)(()=>{Y(S.current),p(!1),m("")},[]),z=(0,l.useCallback)(t=>{c(t),r(e,t),F()},[e,r,F]),D=(0,l.useCallback)(async()=>{if(null===x)try{let e=await e5();b(e)}catch{b([]),L(!0)}},[x]);(0,l.useEffect)(()=>{let e=j.current;if(!e)return;let t=e=>{let t=e.target.closest("[data-font-name]");if(!t)return;e.preventDefault(),e.stopPropagation();let r=t.dataset.fontName;"__load_system"===r?D():r&&z(r)};return e.addEventListener("pointerdown",t),()=>e.removeEventListener("pointerdown",t)},[d,z,D]);let O=(0,l.useCallback)(e=>{let t=P.length;0!==t&&("ArrowDown"===e.key?(e.preventDefault(),y(e=>(e+1)%t)):"ArrowUp"===e.key?(e.preventDefault(),y(e=>e<=0?t-1:e-1)):"Enter"===e.key&&(e.preventDefault(),v>=0&&v<t&&z(P[v])))},[P,v,z]);(0,l.useEffect)(()=>{if(v<0)return;let e=j.current;if(!e)return;let t=e.querySelector(`[data-font-index="${v}"]`);t&&t.scrollIntoView({block:"nearest"})},[v]);let W=k.current?.getRootNode()instanceof ShadowRoot?k.current.getRootNode().querySelector("[data-retune-container]"):null,_=0;return(0,o.jsxs)("div",{className:"retune-font-input",ref:k,children:[(0,o.jsx)(I,{isChanged:n??!1,onReset:a??(()=>{})}),(0,o.jsxs)("button",{type:"button",className:"retune-font-input-trigger",onClick:B,children:[(0,o.jsx)("span",{className:"retune-font-input-value",style:{fontFamily:s||void 0},children:s||"–"}),(0,o.jsx)(ej,{})]}),d&&h&&W&&(0,i.createPortal)((0,o.jsxs)(Z,{title:"Fonts",onClose:F,anchorRect:h,search:{value:g,onChange:m,placeholder:"Search fonts...",onKeyDown:O},maxHeight:400,minHeight:400,children:[(0,o.jsx)("div",{className:"retune-font-filter",children:(0,o.jsx)(eJ,{prop:"__fontCategory",value:C,options:["all","project","system","generic"],onChange:(e,t)=>w(t)})}),(0,o.jsxs)("div",{ref:j,className:"retune-font-list",children:[T.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"retune-font-section-title",children:"Project fonts"}),T.map(e=>{let t=_++;return(0,o.jsx)("div",{className:`retune-font-item${e===s?" retune-font-item-active":""}${t===v?" retune-font-item-highlighted":""}`,"data-font-name":e,"data-font-index":t,style:{fontFamily:e},children:e},e)})]}),V.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"retune-font-section-title",children:"System fonts"}),V.map(e=>{let t=_++;return(0,o.jsx)("div",{className:`retune-font-item${e===s?" retune-font-item-active":""}${t===v?" retune-font-item-highlighted":""}`,"data-font-name":e,"data-font-index":t,style:{fontFamily:e},children:e},e)})]}),H.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"retune-font-section-title",children:"Generic"}),H.map(e=>{let t=_++;return(0,o.jsx)("div",{className:`retune-font-item${e===s?" retune-font-item-active":""}${t===v?" retune-font-item-highlighted":""}`,"data-font-name":e,"data-font-index":t,style:{fontFamily:e},children:e},e)})]}),0===P.length&&(0,o.jsx)("div",{className:"retune-font-empty",children:"No fonts found"}),("all"===C||"system"===C)&&(null===x?(0,o.jsx)("div",{className:"retune-font-system-prompt",children:(0,o.jsx)("button",{className:"retune-font-system-btn","data-font-name":"__load_system",children:"Load system fonts"})}):R?(0,o.jsx)("div",{className:"retune-font-system-prompt",children:(0,o.jsx)("p",{className:"retune-font-denied",children:"Font access denied. Allow in site settings to try again."})}):null)]})]}),W)]})}function e6({side:e,pinned:t,onClick:r}){return(0,o.jsx)("button",{type:"button",onClick:r,className:`retune-pin-line ${e}`,"aria-label":`${t?"Unpin":"Pin"} ${e}`,children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:"top"===e||"bottom"===e?(0,o.jsx)("line",{x1:"8",y1:"3",x2:"8",y2:"13",stroke:t?"#3b82f6":"#d6d3d1",strokeWidth:"2",strokeLinecap:"round"}):(0,o.jsx)("line",{x1:"3",y1:"8",x2:"13",y2:"8",stroke:t?"#3b82f6":"#d6d3d1",strokeWidth:"2",strokeLinecap:"round"})})})}function e4({top:e,right:t,bottom:r,left:n,pins:l,centered:i,onChange:a,onPinChange:s,onCenterChange:u}){let c=l.top&&l.right&&l.bottom&&l.left,d=o=>{let c=l[o];if(s(o,!c),i&&(u(!1),a("transform","none")),c)a(o,"auto");else{let l={top:e,right:t,bottom:r,left:n}[o];l&&"auto"!==l||a(o,"0px")}};return(0,o.jsxs)("div",{className:"retune-constraints",children:[(0,o.jsx)("div",{className:"retune-constraints-side",children:(0,o.jsx)(et,{label:"L",prop:"left",value:n,onChange:a})}),(0,o.jsxs)("div",{className:"retune-constraints-center",children:[(0,o.jsx)(et,{label:"T",prop:"top",value:e,onChange:a}),(0,o.jsxs)("div",{className:"retune-pin-box",children:[(0,o.jsx)(e6,{side:"top",pinned:!i&&l.top,onClick:()=>d("top")}),(0,o.jsx)(e6,{side:"right",pinned:!i&&l.right,onClick:()=>d("right")}),(0,o.jsx)(e6,{side:"bottom",pinned:!i&&l.bottom,onClick:()=>d("bottom")}),(0,o.jsx)(e6,{side:"left",pinned:!i&&l.left,onClick:()=>d("left")}),(0,o.jsx)("button",{type:"button",onClick:()=>{i?(u(!1),s("top",!1),s("right",!1),s("bottom",!1),s("left",!1),a("top","auto"),a("right","auto"),a("bottom","auto"),a("left","auto"),a("transform","none")):c?(u(!0),a("top","50%"),a("right","auto"),a("bottom","auto"),a("left","50%"),a("transform","translate(-50%, -50%)")):["top","right","bottom","left"].forEach(i=>{if(!l[i]){s(i,!0);let l={top:e,right:t,bottom:r,left:n};l[i]&&"auto"!==l[i]||a(i,"0px")}})},className:"retune-pin-center-btn","aria-label":i?"Clear center alignment":c?"Align to center":"Pin all sides",children:i&&(0,o.jsx)("span",{className:"retune-pin-center-dot"})})]}),(0,o.jsx)(et,{label:"B",prop:"bottom",value:r,onChange:a})]}),(0,o.jsx)("div",{className:"retune-constraints-side",children:(0,o.jsx)(et,{label:"R",prop:"right",value:t,onChange:a})})]})}var e3=[["top-left","top-center","top-right"],["center-left","center-center","center-right"],["bottom-left","bottom-center","bottom-right"]],e8={"top-left":{row:0,col:0},"top-center":{row:0,col:1},"top-right":{row:0,col:2},"center-left":{row:1,col:0},"center-center":{row:1,col:1},"center-right":{row:1,col:2},"bottom-left":{row:2,col:0},"bottom-center":{row:2,col:1},"bottom-right":{row:2,col:2}},e9=["center-left","center-center","center-right"],te=["top-center","center-center","bottom-center"],tt=["flex-start","center","flex-end"],tr=["flex-start","center","flex-end"];function tn(e){return"center"===e?1:2*("flex-end"===e||"end"===e)}function tl(e,t,r){return"vertical"===r?{justifyContent:tt[e],alignItems:tr[t]}:{justifyContent:tt[t],alignItems:tr[e]}}function ti({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7Z",fill:e,fillOpacity:.3})})}function to({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5L9 5C9.55228 5 10 4.55229 10 4C10 3.44772 9.55228 3 9 3L4 3ZM4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7L4 7ZM3 12C3 11.4477 3.44771 11 4 11L7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13L4 13C3.44771 13 3 12.5523 3 12Z",fill:e})})}function ta({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 3C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5L6 5C5.44772 5 5 4.55228 5 4C5 3.44772 5.44772 3 6 3H10ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9L4 9C3.44772 9 3 8.55228 3 8C3 7.44771 3.44772 7 4 7L12 7ZM10 12C10 11.4477 9.55228 11 9 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H9C9.55228 13 10 12.5523 10 12Z",fill:e})})}function ts({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7L4 7ZM7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5L12 5C12.5523 5 13 4.55229 13 4C13 3.44772 12.5523 3 12 3L7 3ZM8 12C8 11.4477 8.44771 11 9 11L12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13L9 13C8.44771 13 8 12.5523 8 12Z",fill:e})})}function tu({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4V9C5 9.55228 4.55228 10 4 10C3.44772 10 3 9.55228 3 9V4ZM7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4ZM12 3C11.4477 3 11 3.44772 11 4V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V4C13 3.44772 12.5523 3 12 3Z",fill:e})})}function tc({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4ZM3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6V10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10V6ZM12 6C11.4477 6 11 6.44772 11 7V9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9V7C13 6.44772 12.5523 6 12 6Z",fill:e})})}function td({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4ZM3 7C3 6.44772 3.44772 6 4 6C4.55228 6 5 6.44772 5 7V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V7ZM12 8C11.4477 8 11 8.44772 11 9V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V9C13 8.44772 12.5523 8 12 8Z",fill:e})})}function tp({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M12 7C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9L4 9C3.44772 9 3 8.55228 3 8C3 7.44772 3.44771 7 4 7L12 7Z",fill:e})})}function th({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L8 9C8.55228 9 9 8.55229 9 8C9 7.44772 8.55228 7 8 7L4 7Z",fill:e})})}function tf({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9L10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7L6 7Z",fill:e})})}function tg({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9L12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7L8 7Z",fill:e})})}function tm({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V4Z",fill:e})})}function tx({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z",fill:e})})}function tb({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 5C7.44772 5 7 5.44772 7 6V10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10V6C9 5.44772 8.55228 5 8 5Z",fill:e})})}function tv({color:e}){return(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 7C7.44772 7 7 7.44772 7 8V12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12V8C9 7.44772 8.55228 7 8 7Z",fill:e})})}var ty="#0D99FF",tC="#a8a29e",tw={"0-0":"Align top left","0-1":"Align top center","0-2":"Align top right","1-0":"Align center left","1-1":"Align center","1-2":"Align center right","2-0":"Align bottom left","2-1":"Align bottom center","2-2":"Align bottom right"};function tk(e,t){let{row:r,col:n}=e8[e];return"vertical"===t?0===n?to:1===n?ta:ts:0===r?tu:1===r?tc:td}function tj(e,t,r,n){return"vertical"===n?t!==r?null:0===e||2===e?tp:0===r?th:1===r?tf:tg:e!==r?null:0===t||2===t?tm:0===r?tx:1===r?tb:tv}function tS({justifyContent:e,alignItems:t,flexDirection:r,onChange:n}){let i,a,s=r.startsWith("column")?"vertical":"horizontal",u="space-between"===e,c=e8[u?"vertical"===s?e9[tn(t)]:te[tn(t)]:(i="center"===e?1:2*("flex-end"===e||"end"===e),a=tn(t),"vertical"===s?e3[i][a]:e3[a][i])],d=u?"vertical"===s?c.col:c.row:-1,[p,h]=(0,l.useState)(null),[f,g]=(0,l.useState)(null),m=(0,l.useCallback)((e,t)=>{if(u)n("alignItems",tr["vertical"===s?t:e]);else{let r=tl(e,t,s);n("justifyContent",r.justifyContent),n("alignItems",r.alignItems)}},[s,u,n]),x=(0,l.useCallback)(()=>{u?n("justifyContent",tl(c.row,c.col,s).justifyContent):n("justifyContent","space-between")},[u,c,s,n]),b=(0,l.useCallback)(e=>{let{row:t,col:r}=c,l=t,i=r;if(u)if("vertical"===s)if("ArrowLeft"===e.key)i=Math.max(0,r-1),e.preventDefault();else{if("ArrowRight"!==e.key)return;i=Math.min(2,r+1),e.preventDefault()}else if("ArrowUp"===e.key)l=Math.max(0,t-1),e.preventDefault();else{if("ArrowDown"!==e.key)return;l=Math.min(2,t+1),e.preventDefault()}else switch(e.key){case"ArrowUp":l=Math.max(0,t-1),e.preventDefault();break;case"ArrowDown":l=Math.min(2,t+1),e.preventDefault();break;case"ArrowLeft":i=Math.max(0,r-1),e.preventDefault();break;case"ArrowRight":i=Math.min(2,r+1),e.preventDefault();break;default:return}if(l!==t||i!==r)if(u)n("alignItems",tr["vertical"===s?i:l]);else{let e=tl(l,i,s);n("justifyContent",e.justifyContent),n("alignItems",e.alignItems)}},[c,u,s,n]),v=(0,l.useCallback)((e,t)=>{u?h("vertical"===s?t:e):g(e3[e][t])},[u,s]),y=(0,l.useCallback)(()=>{h(null),g(null)},[]);return(0,o.jsx)("div",{className:"retune-alignment-grid",tabIndex:0,role:"grid","aria-label":"Alignment grid",onKeyDown:b,onDoubleClick:x,children:[0,1,2].map(e=>[0,1,2].map(t=>{let r=e3[e][t];return(0,o.jsx)(z,{content:tw[`${e}-${t}`],side:"bottom",delay:600,children:(0,o.jsx)("button",{type:"button",className:"retune-alignment-cell",onClick:()=>m(e,t),onMouseEnter:()=>v(e,t),onMouseLeave:y,tabIndex:-1,"aria-label":r.replace("-"," "),children:u?function(e,t,r,n,l){let i="vertical"===l?t:e,a=i===r,s=null!==n&&i===n&&!a;if(a){let n=tj(e,t,r,l);if(n)return(0,o.jsx)(n,{color:ty})}if(s){let r=tj(e,t,i,l);if(r)return(0,o.jsx)(r,{color:tC})}return(0,o.jsx)(ti,{color:tC})}(e,t,d,p,s):function(e,t,r,n,l,i){if(e===r.row&&t===r.col){let e=tk(l,i);return(0,o.jsx)(e,{color:ty})}if(n===l){let e=tk(l,i);return(0,o.jsx)(e,{color:tC})}return(0,o.jsx)(ti,{color:tC})}(e,t,c,f,r,s)})},`${e}-${t}`)}))})}function tR(e){if(!e||"none"===e)return 0;let t=e.match(/repeat\((\d+)/);return t?parseInt(t[1],10):e.trim().split(/\s+/).filter(e=>e&&"none"!==e).length}function tL({columns:e,rows:t,onChange:r}){let[n,i]=(0,l.useState)(!1),[a,s]=(0,l.useState)(0),[u,c]=(0,l.useState)(0),[d,p]=(0,l.useState)(!1),h=(0,l.useRef)(null);W(n);let f=Math.max(1,e||1),g=Math.max(1,t||1);(0,l.useEffect)(()=>{if(!n)return;let e=e=>{let t=h.current;t&&(e.composedPath().includes(t)||i(!1))},t=h.current?.getRootNode();return t.addEventListener("pointerdown",e),()=>t.removeEventListener("pointerdown",e)},[n]);let m=(0,l.useCallback)(()=>{a>0&&u>0&&(r("gridTemplateColumns",`repeat(${a}, 1fr)`),r("gridTemplateRows",`repeat(${u}, 1fr)`),i(!1))},[a,u,r]),x=d?a:e,b=d?u:t;return(0,o.jsxs)("div",{className:"retune-grid-picker-wrap",ref:h,children:[(0,o.jsx)("button",{type:"button",className:"retune-grid-picker-preview",onClick:()=>i(!n),"aria-label":`Grid: ${f} \xd7 ${g}`,children:(0,o.jsxs)("div",{className:"retune-grid-picker-mini",style:{gridTemplateColumns:`repeat(${f}, 1fr)`,gridTemplateRows:`repeat(${g}, 1fr)`},children:[Array.from({length:f*g},(e,t)=>(0,o.jsx)("div",{className:"retune-grid-picker-mini-cell"},t)),(0,o.jsxs)("span",{className:"retune-grid-picker-label",children:[f," × ",g]})]})}),n&&(0,o.jsxs)("div",{className:"retune-grid-picker-dialog",children:[(0,o.jsx)("div",{className:"retune-grid-picker-dialog-header",children:x>0&&b>0?`${x} \xd7 ${b}`:"Select grid size"}),(0,o.jsx)("div",{className:"retune-grid-picker-grid",onMouseLeave:()=>p(!1),onClick:m,children:Array.from({length:10},(r,n)=>Array.from({length:10},(r,l)=>{let i=l+1,h=n+1,f=!d&&i<=e&&h<=t,g=d&&i<=a&&h<=u;return(0,o.jsx)("div",{className:`retune-grid-picker-cell${f?" selected":""}${g?" preview":""}`,onMouseEnter:()=>{p(!0),s(i),c(h)}},`${n}-${l}`)}))})]})]})}function tN(e){if(e.stops.length<2)return"none";let t=[...e.stops].sort((e,t)=>e.position-t.position).map(e=>{let t=(e.opacity??100)/100,r=t<1?eZ(e.color,Math.round(100*t)):e.color;return`${r} ${Math.round(100*e.position)}%`}).join(", ");switch(e.type){case"linear":return`linear-gradient(${e.angle}deg, ${t})`;case"radial":return`radial-gradient(circle, ${t})`;case"conic":return`conic-gradient(from ${e.angle}deg, ${t})`}}function t$(e){if(!e||"none"===e)return null;let t=e.match(/^linear-gradient\((.+)\)$/),r=e.match(/^radial-gradient\((.+)\)$/),n=e.match(/^conic-gradient\((.+)\)$/),l="linear",i=180,o="";if(t){l="linear";let e=t[1],r=e.match(/^(\d+(?:\.\d+)?)deg\s*,\s*(.+)$/);if(r)i=parseFloat(r[1]),o=r[2];else{let t=e.match(/^to\s+([\w\s]+)\s*,\s*(.+)$/);t?(i=({top:0,"top right":45,right:90,"bottom right":135,bottom:180,"bottom left":225,left:270,"top left":315})[t[1].trim()]??180,o=t[2]):o=e}}else if(r){l="radial";let e=r[1],t=e.match(/^(?:circle|ellipse)(?:\s+[^,]*)?\s*,\s*(.+)$/);o=t?t[1]:e}else{if(!n)return null;l="conic";let e=n[1],t=e.match(/^from\s+(\d+(?:\.\d+)?)deg\s*,\s*(.+)$/);t?(i=parseFloat(t[1]),o=t[2]):o=e}let a=function(e){let t=[],r=function(e){let t=[],r=0,n="";for(let l of e)"("===l?r++:")"===l&&r--,","===l&&0===r?(t.push(n),n=""):n+=l;return n.trim()&&t.push(n),t}(e);for(let e=0;e<r.length;e++){let n,l,i=r[e].trim();if(!i)continue;let o=i.match(/^(.+?)\s+(\d+(?:\.\d+)?)%$/);o?(n=o[1].trim(),l=parseFloat(o[2])/100):(n=i,l=r.length>1?e/(r.length-1):0);let{hex:a,opacity:s}=eW(n);t.push({color:a,position:l,opacity:s})}return t}(o);return a.length<2?null:{type:l,angle:i,stops:a}}function tM(e,t){let r=[...e].sort((e,t)=>e.position-t.position),n=r[0],l=r[r.length-1];for(let e=0;e<r.length-1;e++)if(r[e].position<=t&&r[e+1].position>=t){n=r[e],l=r[e+1];break}let i=l.position-n.position,o=0===i?0:(t-n.position)/i,a=eP(n.color),s=eP(l.color);return eB(Math.round(a.r+(s.r-a.r)*o),Math.round(a.g+(s.g-a.g)*o),Math.round(a.b+(s.b-a.b)*o))}function tE(e,t){if(t&&"none"!==t){let e=t$(t);if(e)return e.type}return"solid"}function tA({stops:e,selectedIndex:t,onSelectStop:r,onStopPositionChange:n,onAddStop:i,gradientCss:a}){let s=(0,l.useRef)(null),u=(0,l.useRef)(!1),c=(0,l.useRef)(null),d=(0,l.useRef)(e);d.current=e;let p=(0,l.useRef)(n);p.current=n;let h=(0,l.useRef)(r);h.current=r;let f=(0,l.useCallback)(e=>{let t=s.current.getBoundingClientRect();return Math.max(0,Math.min(1,(e-t.left)/t.width))},[]),g=(0,l.useCallback)(e=>{let t=f(e),r=0,n=1/0;for(let e=0;e<d.current.length;e++){let l=Math.abs(d.current[e].position-t);l<n&&(n=l,r=e)}return n*s.current.getBoundingClientRect().width<20?r:null},[f]),m=(0,l.useCallback)(e=>{let t=g(e.clientX);if(null===t)return;e.stopPropagation(),e.preventDefault(),u.current=!0,c.current=t,h.current(t);let r=e=>{null!==c.current&&p.current(c.current,f(e.clientX))},n=()=>{u.current=!1,c.current=null,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n)};document.addEventListener("pointermove",r),document.addEventListener("pointerup",n)},[g,f]),x=(0,l.useCallback)(t=>{if(u.current||null!==g(t.clientX))return;let r=f(t.clientX),n=tM(e,r);i(r,n)},[e,i,f,g]);return(0,o.jsxs)("div",{className:"retune-gradient-bar-wrap",onClick:x,onPointerDown:m,children:[(0,o.jsxs)("div",{ref:s,className:"retune-gradient-bar",children:[(0,o.jsx)("div",{className:"retune-gradient-bar-checker"}),(0,o.jsx)("div",{className:"retune-gradient-bar-fill",style:{backgroundImage:a}})]}),e.map((e,r)=>(0,o.jsx)("div",{className:"retune-gradient-stop-handle",style:{left:`${100*e.position}%`,pointerEvents:"none"},children:(0,o.jsxs)("div",{className:"retune-gradient-stop-indicator",children:[(0,o.jsx)("div",{className:"retune-gradient-stop-chit",style:{backgroundColor:t===r?"#0d99ff":"white"},children:(0,o.jsx)("div",{className:"retune-gradient-stop-chit-color",style:{backgroundColor:e.color}})}),(0,o.jsx)("div",{className:"retune-gradient-stop-caret",style:{backgroundColor:t===r?"#0d99ff":"white"}})]})},r))]})}function tT({gradient:e,onChange:t,originalGradient:r,isNewGradient:n}){let i,[a,s]=(0,l.useState)(0),[u,c]=(0,l.useState)(`${e.angle}\xb0`),[d,p]=(0,l.useState)(!1),[h,f]=(0,l.useState)(new Map),g=(0,l.useCallback)(t=>{if(n||!r)return!1;let l=r.stops[t];if(!l)return!0;let i=e.stops[t];return!!i&&(i.color!==l.color||(i.opacity??100)!==(l.opacity??100))},[e.stops,r,n]),m=(0,l.useCallback)(t=>{if(n||!r)return!1;let l=r.stops[t];if(!l)return!0;let i=e.stops[t];return!!i&&i.position!==l.position},[e.stops,r,n]),x=(0,l.useCallback)(n=>{if(!r)return;let l=r.stops[n];if(l){let r=[...e.stops];r[n]={...r[n],color:l.color,opacity:l.opacity},t({...e,stops:r})}else{let r=e.stops.filter((e,t)=>t!==n);t({...e,stops:r})}},[e,r,t]),b=(0,l.useCallback)(n=>{if(!r)return;let l=r.stops[n];if(!l)return;let i=[...e.stops];i[n]={...i[n],position:l.position},t({...e,stops:i})},[e,r,t]),[v,y]=(0,l.useState)(e.angle);e.angle!==v&&(y(e.angle),d||c(`${e.angle}\xb0`));let C=(0,l.useCallback)((r,n)=>{let l=e.stops.map((e,t)=>t===r?{...e,position:n}:e);t({...e,stops:l})},[e,t]),w=(0,l.useCallback)((r,n)=>{let l=[...e.stops,{color:n,position:r,opacity:100}];t({...e,stops:l}),s(l.length-1)},[e,t]),k=(0,l.useCallback)(r=>{p(!0);let n=r.target.value;c(n);let l=parseInt(n.replace(/°/g,"").trim(),10);isNaN(l)||t({...e,angle:(l%360+360)%360})},[e,t]),j=(0,l.useCallback)(()=>{p(!1);let r=parseInt(u.replace(/°/g,"").trim(),10),n=isNaN(r)?e.angle:(r%360+360)%360;t({...e,angle:n}),c(`${n}\xb0`)},[u,e,t]),S=(0,l.useCallback)(()=>{let r=e.stops.map(e=>({...e,position:1-e.position}));r.reverse(),t({...e,stops:r})},[e,t]),R=(0,l.useCallback)(()=>{t({...e,angle:(e.angle+45)%360})},[e,t]),L=(0,l.useCallback)(()=>{let r=tM(e.stops,.5),n=[...e.stops,{color:r,position:.5,opacity:100}];t({...e,stops:n}),s(n.length-1)},[e,t]),N=(0,l.useCallback)(r=>{if(e.stops.length<=2)return;let n=e.stops.filter((e,t)=>t!==r);t({...e,stops:n}),a>=n.length?s(n.length-1):a===r&&a>0&&s(a-1)},[e,t,a]),$=(0,l.useCallback)((r,n)=>{let l=parseInt(n,10);if(isNaN(l))return;let i=Math.max(0,Math.min(100,l)),o=e.stops.map((e,t)=>t===r?{...e,position:i/100}:e);t({...e,stops:o})},[e,t]),M=(0,l.useCallback)((r,n,l)=>{let{hex:i,opacity:o}=eW(l),a=e.stops.map((e,t)=>t===r?{...e,color:i,opacity:o}:e);t({...e,stops:a})},[e,t]),E="radial"!==e.type,A=e.stops.map((e,t)=>({stop:e,index:t})).sort((e,t)=>e.stop.position-t.stop.position);return(0,o.jsxs)("div",{className:"retune-gradient-editor",children:[(0,o.jsx)(tA,{stops:e.stops,selectedIndex:a,onSelectStop:s,onStopPositionChange:C,onAddStop:w,gradientCss:(i=[...e.stops].sort((e,t)=>e.position-t.position).map(e=>{let t=(e.opacity??100)/100,r=t<1?eZ(e.color,Math.round(100*t)):e.color;return`${r} ${Math.round(100*e.position)}%`}).join(", "),`linear-gradient(to right, ${i})`)}),(0,o.jsxs)("div",{className:"retune-gradient-controls",children:[(0,o.jsx)("input",{className:"retune-gradient-angle-input",type:"text",value:E?d?u:`${e.angle}\xb0`:"–",readOnly:!E,disabled:!E,onFocus:E?t=>{p(!0),c(String(e.angle)),requestAnimationFrame(()=>t.target.select())}:void 0,onBlur:E?j:void 0,onKeyDown:E?r=>{if("Enter"===r.key&&r.currentTarget.blur(),"ArrowUp"===r.key||"ArrowDown"===r.key){r.preventDefault();let n=r.shiftKey?15:1,l="ArrowUp"===r.key?n:-n,i=((e.angle+l)%360+360)%360;t({...e,angle:i})}}:void 0,onChange:E?k:void 0}),(0,o.jsxs)("div",{className:"retune-gradient-actions",children:[(0,o.jsx)(z,{content:"Reverse gradient direction",children:(0,o.jsx)("button",{type:"button",className:"retune-gradient-action-btn",onClick:S,children:(0,o.jsx)(eN,{})})}),(0,o.jsx)(z,{content:"Rotate gradient 45°",children:(0,o.jsx)("button",{type:"button",className:"retune-gradient-action-btn",disabled:!E,onClick:R,children:(0,o.jsx)(e$,{})})})]})]}),(0,o.jsxs)("div",{className:"retune-gradient-stops-header",children:[(0,o.jsx)("span",{className:"retune-gradient-stops-label",children:"Stops"}),(0,o.jsx)(z,{content:"Add color stop",children:(0,o.jsx)("button",{type:"button",className:"retune-gradient-action-btn",onClick:L,children:(0,o.jsx)(eR,{})})})]}),(0,o.jsx)("div",{className:"retune-gradient-stops-list",children:A.map(({stop:t,index:r})=>(0,o.jsxs)("div",{className:"retune-gradient-stop-row",children:[(0,o.jsxs)("div",{className:"retune-gradient-stop-pos",children:[(0,o.jsx)(I,{isChanged:m(r),onReset:()=>b(r)}),(0,o.jsx)("input",{className:"retune-gradient-stop-pos-input",type:"text",inputMode:"numeric",defaultValue:Math.round(100*t.position),onBlur:e=>$(r,e.target.value),onKeyDown:e=>{"Enter"===e.key&&e.currentTarget.blur()}},`${r}-${Math.round(100*t.position)}`),(0,o.jsx)("span",{className:"retune-gradient-stop-pos-unit",children:"%"})]}),(0,o.jsx)("div",{className:"retune-gradient-stop-color",children:(0,o.jsx)(eK,{prop:`stop-${r}`,value:eZ(t.color,t.opacity??100),onChange:(e,t)=>{M(r,e,t),h.has(r)&&f(e=>{let t=new Map(e);return t.delete(r),t})},property:"backgroundColor",variableMatch:h.get(r),onVariableApply:e=>{let t=Object.values(e.values)[0];t&&M(r,`stop-${r}`,t),f(t=>new Map(t).set(r,{variable:e,property:"background-color"}))},onVariableSelect:(e,t)=>{let n=Object.values(t.values)[0];n&&M(r,`stop-${r}`,n),f(e=>new Map(e).set(r,{variable:t,property:"background-color"}))},onVariableUnlink:()=>{f(e=>{let t=new Map(e);return t.delete(r),t})},isChanged:g(r),onReset:()=>x(r)})}),(0,o.jsx)(z,{content:"Remove color stop",children:(0,o.jsx)("button",{type:"button",className:"retune-gradient-action-btn remove",disabled:e.stops.length<=2,onClick:()=>N(r),children:(0,o.jsx)(eL,{})})})]},r))})]})}function tV({options:e,value:t,onChange:r,disabled:n=!1}){let[i,a]=(0,l.useState)(t),[s,u]=(0,l.useState)(t),c=(0,l.useRef)(null),d=(0,l.useRef)(null),p=(0,l.useRef)(!0);t!==s&&(u(t),a(t));let h=(0,l.useCallback)(()=>{let t=c.current,r=d.current;if(!t||!r)return;let n=e.findIndex(e=>e.value===i);if(n<0){r.style.opacity="0";return}let l=t.querySelectorAll(".retune-segmented-item")[n];if(!l)return;let o=t.getBoundingClientRect(),a=l.getBoundingClientRect(),s=a.left-o.left;r.style.opacity="1",r.style.width=`${a.width}px`,p.current?(r.style.transition="none",r.style.transform=`translateX(${s}px)`,r.offsetHeight,r.style.transition="",p.current=!1):r.style.transform=`translateX(${s}px)`},[e,i]);return(0,l.useLayoutEffect)(()=>{h()},[h]),(0,o.jsxs)("div",{ref:c,className:"retune-segmented",style:n?{opacity:.4,pointerEvents:"none"}:void 0,children:[(0,o.jsx)("div",{ref:d,className:"retune-segmented-pill"}),e.map(e=>{let t=i===e.value,l=(0,o.jsx)("button",{type:"button",className:`retune-segmented-item${t?" selected":""}${e.disabled?" disabled":""}`,onClick:()=>{var t;a(t=e.value),r(t)},disabled:e.disabled||n,"aria-label":e.label,"aria-pressed":t,children:e.icon||(0,o.jsx)("span",{className:"retune-segmented-text",children:e.label})},e.value);return e.icon&&e.label?(0,o.jsx)(z,{content:e.label,children:l},e.value):l})]})}function tH(e,t){let r={};return e.enabled?(r.display="-webkit-box",r.webkitBoxOrient="vertical",r.webkitLineClamp=String(e.lines),r.overflow="hidden",r.textOverflow="ellipsis",r.whiteSpace="normal",r.minWidth="0px"):(r.textOverflow="clip",r.overflow="visible",r.whiteSpace="normal",r.webkitLineClamp="unset",r.webkitBoxOrient="unset",r.minWidth="0px","-webkit-box"===t.currentDisplay&&(r.display="block")),r}function tP(e,t,r){return void 0!==t&&e<t?t:void 0!==r&&e>r?r:e}function tB(e,t,r){if(void 0===t&&void 0===r)return e;let n=parseFloat(e);if(isNaN(n))return e;let l=tP(n,t,r);if(l===n)return e;let i=e.match(/[a-z%]+$/i)?.[0]||"";return`${l}${i}`}function tF(e){let t=e.map(e=>A(e||""));return t.every(e=>e===t[0])?t[0]:t.join(", ")}function tz({label:e,props:t,values:r,onChange:n,placeholder:i,min:a,max:s,variableMatch:u,property:c,onVariableSelect:d,onVariableApply:p,onVariableUnlink:h,isChanged:f,onReset:g}){let[m,x]=(0,l.useState)(()=>tF(r)),[b,v]=(0,l.useState)(r),y=(0,l.useRef)(null),C=(0,l.useCallback)(()=>{u&&y.current?.()},[u]);r.join("\0")!==b.join("\0")&&(v(r),x(tF(r)));let w=(0,l.useRef)({startX:0,startVals:[],active:!1}),k=e=>{let l=e.trim();if(!l)return void x(tF(r));let i=l.includes(",")?l.split(",").map(e=>e.trim()).filter(Boolean):l.split(/\s+/);if(1===i.length){let e=tB(B(i[0],r[0]||"",t[0]),a,s);t.forEach(t=>n(t,e)),x(A(e))}else{let e=t.map((e,t)=>tB(B(i[t%i.length],r[t]||"",e),a,s));t.forEach((t,r)=>n(t,e[r])),x(tF(e))}},j=(0,l.useRef)(null);return(0,o.jsxs)("div",{ref:j,className:`retune-prop${u?" retune-prop-variable-applied":""}`,children:[(0,o.jsx)(I,{isChanged:f??!1,onReset:g??(()=>{})}),e&&(0,o.jsx)("span",{className:"retune-prop-label",onClick:C,onPointerDown:u?void 0:e=>{let t=r.map(e=>parseFloat(e));t.some(isNaN)||(w.current={startX:e.clientX,startVals:t,active:!0},e.target.setPointerCapture(e.pointerId))},onPointerMove:u?void 0:e=>{if(!w.current.active)return;let l=Math.round(e.clientX-w.current.startX),i=r[0]?.match(/[a-z%]+$/i)?.[0]||"px",o=w.current.startVals.map(e=>`${tP(e+l,a,s)}${i}`);x(tF(o)),t.forEach((e,t)=>n(e,o[t]))},onPointerUp:u?void 0:()=>{w.current.active=!1},children:e}),(0,o.jsx)("input",{className:"retune-prop-input",value:m,placeholder:i||"–",readOnly:!!u,onClick:C,onPointerDown:e||u?void 0:t=>{if(e)return;let n=t.currentTarget.getBoundingClientRect();if(t.clientX-n.left>16)return;let l=r.map(e=>parseFloat(e));l.some(isNaN)||(t.preventDefault(),w.current={startX:t.clientX,startVals:l,active:!0},t.currentTarget.setPointerCapture(t.pointerId))},onPointerMove:e||u?void 0:e=>{if(w.current.active){let l=Math.round(e.clientX-w.current.startX),i=r[0]?.match(/[a-z%]+$/i)?.[0]||"px",o=w.current.startVals.map(e=>`${tP(e+l,a,s)}${i}`);x(tF(o)),t.forEach((e,t)=>n(e,o[t]));return}let l=e.currentTarget.getBoundingClientRect(),i=e.clientX-l.left<=16;e.currentTarget.style.cursor=i?"ew-resize":""},onPointerUp:e||u?void 0:()=>{w.current.active=!1},onFocus:u?void 0:e=>e.target.select(),onChange:u?void 0:e=>x(e.target.value),onBlur:u?void 0:()=>{m!==tF(r)&&k(m)},onKeyDown:u?void 0:e=>{if("Enter"===e.key&&(k(m),e.target.blur()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r=e.shiftKey?10:1,l="ArrowUp"===e.key?r:-r,i=m.includes(",")?m.split(",").map(e=>e.trim()):t.map(()=>m.trim()),o=t.map((e,t)=>{let r=i[t]||i[0],n=parseFloat(r);if(isNaN(n))return r;let o=r.match(/[a-z%]+$/i)?.[0]||"px";return`${tP(n+l,a,s)}${o}`});x(tF(o)),t.forEach((e,t)=>n(e,o[t]))}},spellCheck:!1}),(0,o.jsx)(G,{match:u,property:c||t[0],relatedProperties:t,onVariableSelect:d,onVariableApply:p,onVariableUnlink:h,openPickerRef:y})]})}function tI(e){if(!e||"none"===e)return null;let t=e.trim(),r=t.startsWith("inset"),n=r?t.slice(5).trim():t,l="rgba(0, 0, 0, 1)",i=n.match(/(?:rgba?|hsla?)\([^)]+\)/);if(i)l=i[0],n=n.replace(l,"").trim();else{let e=n.match(/^(#[0-9a-fA-F]{3,8})\s/);if(e)l=e[1],n=n.slice(e[0].length).trim();else{let e=n.match(/\s+(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)$/);e&&(l=e[1],n=n.slice(0,-e[0].length).trim())}}let o=n.match(/-?[\d.]+/g);return!o||o.length<2?null:{inset:r,offsetX:parseFloat(o[0])||0,offsetY:parseFloat(o[1])||0,blur:parseFloat(o[2])||0,spread:parseFloat(o[3])||0,color:l}}function tD(e){if(!e||"none"===e)return null;let t=0;for(let r=0;r<e.length;r++)if("("===e[r])t++;else if(")"===e[r])t--;else if(","===e[r]&&0===t)return tI(e.slice(0,r));return tI(e.slice(0))}function tO(e){let t=[];return e.inset&&t.push("inset"),t.push(`${e.offsetX}px`),t.push(`${e.offsetY}px`),t.push(`${e.blur}px`),t.push(`${e.spread}px`),t.push(e.color),t.join(" ")}function tW(){return{inset:!1,offsetX:0,offsetY:4,blur:8,spread:0,color:"rgba(0, 0, 0, 0.15)"}}var tZ=["blur","brightness","contrast","hue-rotate","invert","saturate","sepia"],t_={blur:{label:"Blur",unit:"px",defaultValue:4,min:0,max:50,step:1},brightness:{label:"Brightness",unit:"%",defaultValue:100,min:0,max:300,step:1},contrast:{label:"Contrast",unit:"%",defaultValue:100,min:0,max:200,step:1},"hue-rotate":{label:"Hue rotate",unit:"deg",defaultValue:0,min:0,max:360,step:1},invert:{label:"Invert",unit:"%",defaultValue:0,min:0,max:100,step:1},saturate:{label:"Saturate",unit:"%",defaultValue:100,min:0,max:300,step:1},sepia:{label:"Sepia",unit:"%",defaultValue:0,min:0,max:100,step:1}},tX=1;function tU(e,t){let r;if(!e||"none"===e)return[];let n=[],l=/(blur|brightness|contrast|hue-rotate|invert|saturate|sepia)\(([^)]+)\)/g;for(;null!==(r=l.exec(e));){let e=r[1],l=parseFloat(r[2])||0;n.push({id:`f${tX++}`,type:e,value:l,target:t})}return n}function tY(e,t){return[...tU(e,"layer"),...tU(t,"backdrop")]}function tq(e){let t=t_[e.type];return`${e.type}(${e.value}${t.unit})`}var tK=[{value:"left",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 7.5C5 7.22386 5.22386 7 5.5 7H18.5C18.7761 7 19 7.22386 19 7.5C19 7.77614 18.7761 8 18.5 8H5.5C5.22386 8 5 7.77614 5 7.5ZM5 11.5C5 11.2239 5.22386 11 5.5 11H12.5C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H5.5C5.22386 12 5 11.7761 5 11.5ZM5.5 15C5.22386 15 5 15.2239 5 15.5C5 15.7761 5.22386 16 5.5 16H14.5C14.7761 16 15 15.7761 15 15.5C15 15.2239 14.7761 15 14.5 15H5.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Left"},{value:"center",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 7.5C5 7.22386 5.22386 7 5.5 7H18.5C18.7761 7 19 7.22386 19 7.5C19 7.77614 18.7761 8 18.5 8H5.5C5.22386 8 5 7.77614 5 7.5ZM8 11.5C8 11.2239 8.22386 11 8.5 11H15.5C15.7761 11 16 11.2239 16 11.5C16 11.7761 15.7761 12 15.5 12H8.5C8.22386 12 8 11.7761 8 11.5ZM7.5 15C7.22386 15 7 15.2239 7 15.5C7 15.7761 7.22386 16 7.5 16H16.5C16.7761 16 17 15.7761 17 15.5C17 15.2239 16.7761 15 16.5 15H7.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Center"},{value:"right",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 7.5C19 7.22386 18.7761 7 18.5 7H5.5C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H18.5C18.7761 8 19 7.77614 19 7.5ZM19 11.5C19 11.2239 18.7761 11 18.5 11H11.5C11.2239 11 11 11.2239 11 11.5C11 11.7761 11.2239 12 11.5 12H18.5C18.7761 12 19 11.7761 19 11.5ZM18.5 15C18.7761 15 19 15.2239 19 15.5C19 15.7761 18.7761 16 18.5 16H9.5C9.22386 16 9 15.7761 9 15.5C9 15.2239 9.22386 15 9.5 15H18.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Right"}],tG=[{value:"top",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H5.5ZM11.8536 7.14645C11.6583 6.95118 11.3417 6.95118 11.1464 7.14645L8.14645 10.1464C7.95118 10.3417 7.95118 10.6583 8.14645 10.8536C8.34171 11.0488 8.65829 11.0488 8.85355 10.8536L11 8.70711V16.5C11 16.7761 11.2239 17 11.5 17C11.7761 17 12 16.7761 12 16.5V8.70711L14.1464 10.8536C14.3417 11.0488 14.6583 11.0488 14.8536 10.8536C15.0488 10.6583 15.0488 10.3417 14.8536 10.1464L11.8536 7.14645Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Top"},{value:"middle",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8536 9.85355L13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L12 8.29289V4.5C12 4.22386 11.7761 4 11.5 4C11.2239 4 11 4.22386 11 4.5V8.29289L9.85355 7.14645C9.65829 6.95118 9.34171 6.95118 9.14645 7.14645C8.95118 7.34171 8.95118 7.65829 9.14645 7.85355L11.1464 9.85355C11.3417 10.0488 11.6583 10.0488 11.8536 9.85355ZM11.8536 13.1464L13.8536 15.1464C14.0488 15.3417 14.0488 15.6583 13.8536 15.8536C13.6583 16.0488 13.3417 16.0488 13.1464 15.8536L12 14.7071V18.5C12 18.7761 11.7761 19 11.5 19C11.2239 19 11 18.7761 11 18.5V14.7071L9.85355 15.8536C9.65829 16.0488 9.34171 16.0488 9.14645 15.8536C8.95118 15.6583 8.95118 15.3417 9.14645 15.1464L11.1464 13.1464C11.3417 12.9512 11.6583 12.9512 11.8536 13.1464ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12H17.5C17.7761 12 18 11.7761 18 11.5C18 11.2239 17.7761 11 17.5 11H5.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Middle"},{value:"bottom",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8536 13.8536L11.8536 16.8536C11.6583 17.0488 11.3417 17.0488 11.1464 16.8536L8.14645 13.8536C7.95118 13.6583 7.95118 13.3417 8.14645 13.1464C8.34171 12.9512 8.65829 12.9512 8.85355 13.1464L11 15.2929V7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5V15.2929L14.1464 13.1464C14.3417 12.9512 14.6583 12.9512 14.8536 13.1464C15.0488 13.3417 15.0488 13.6583 14.8536 13.8536ZM5.5 19C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H17.5C17.7761 18 18 18.2239 18 18.5C18 18.7761 17.7761 19 17.5 19H5.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Bottom"}],tJ=[{value:"__fill",label:"Fill"},{value:"__hug",label:"Hug"},{value:"auto",label:"Auto"}],tQ=[{value:"100",label:"Thin"},{value:"200",label:"Extra Light"},{value:"300",label:"Light"},{value:"400",label:"Regular"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"},{value:"800",label:"Extra Bold"},{value:"900",label:"Black"}],t1=[{value:"normal",label:"Normal"},{value:"1",label:"1"},{value:"1.25",label:"1.25"},{value:"1.5",label:"1.5"},{value:"1.75",label:"1.75"},{value:"2",label:"2"}],t0=[{value:"normal",label:"Normal"},{value:"-0.05em",label:"Tight"},{value:"0.05em",label:"Wide"},{value:"0.1em",label:"Wider"}],t5=[{value:"block",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 7H7.5C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V7.5C17 7.22386 16.7761 7 16.5 7ZM7.5 6C6.67157 6 6 6.67157 6 7.5V16.5C6 17.3284 6.67157 18 7.5 18H16.5C17.3284 18 18 17.3284 18 16.5V7.5C18 6.67157 17.3284 6 16.5 6H7.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Block"},{value:"flex-row",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{d:"M9.2998 18C10.1282 18 10.7998 17.3284 10.7998 16.5L10.7998 7.5C10.7998 6.67157 10.1282 6 9.2998 6H7.5L7.34668 6.00781C6.59028 6.08461 6 6.72334 6 7.5L6 16.5C6 17.3284 6.67157 18 7.5 18H9.2998ZM16.5 18C17.3283 17.9998 18 17.3283 18 16.5V7.5C18 6.67167 17.3283 6.00015 16.5 6H14.7002L14.5469 6.00781C13.7905 6.08461 13.2002 6.72334 13.2002 7.5L13.2002 16.5C13.2002 17.3284 13.8718 18 14.7002 18H16.5ZM7.5 17C7.22386 17 7 16.7761 7 16.5L7 7.5C7 7.22386 7.22386 7 7.5 7H9.2998C9.57595 7 9.7998 7.22386 9.7998 7.5L9.7998 16.5C9.7998 16.7761 9.57595 17 9.2998 17H7.5ZM14.7002 17C14.4241 17 14.2002 16.7761 14.2002 16.5L14.2002 7.5C14.2002 7.22386 14.4241 7 14.7002 7H16.5C16.776 7.00015 17 7.22395 17 7.5V16.5C17 16.7761 16.776 16.9998 16.5 17H14.7002Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Flex →"},{value:"flex-column",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{d:"M6 9.2998C6 10.1282 6.67157 10.7998 7.5 10.7998L16.5 10.7998C17.3284 10.7998 18 10.1282 18 9.29981L18 7.5L17.9922 7.34668C17.9154 6.59028 17.2767 6 16.5 6L7.5 6C6.67157 6 6 6.67157 6 7.5L6 9.2998ZM6 16.5C6.00015 17.3283 6.67167 18 7.5 18L16.5 18C17.3283 18 17.9998 17.3283 18 16.5L18 14.7002L17.9922 14.5469C17.9154 13.7905 17.2767 13.2002 16.5 13.2002L7.5 13.2002C6.67157 13.2002 6 13.8718 6 14.7002L6 16.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7L16.5 7C16.7761 7 17 7.22386 17 7.5L17 9.29981C17 9.57595 16.7761 9.79981 16.5 9.79981L7.5 9.7998C7.22386 9.7998 7 9.57595 7 9.2998L7 7.5ZM7 14.7002C7 14.4241 7.22386 14.2002 7.5 14.2002L16.5 14.2002C16.7761 14.2002 17 14.4241 17 14.7002L17 16.5C16.9998 16.776 16.776 17 16.5 17L7.5 17C7.22395 17 7.00015 16.776 7 16.5L7 14.7002Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Flex ↓"},{value:"grid",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 7H10V10H7V7ZM6 7C6 6.44771 6.44771 6 7 6H10C10.5523 6 11 6.44771 11 7V10C11 10.5523 10.5523 11 10 11H7C6.44771 11 6 10.5523 6 10V7ZM7 14H10V17H7V14ZM6 14C6 13.4477 6.44771 13 7 13H10C10.5523 13 11 13.4477 11 14V17C11 17.5523 10.5523 18 10 18H7C6.44771 18 6 17.5523 6 17V14ZM17 7H14V10H17V7ZM14 6C13.4477 6 13 6.44771 13 7V10C13 10.5523 13.4477 11 14 11H17C17.5523 11 18 10.5523 18 10V7C18 6.44771 17.5523 6 17 6H14ZM14 14H17V17H14V14ZM13 14C13 13.4477 13.4477 13 14 13H17C17.5523 13 18 13.4477 18 14V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V14Z",fill:"currentColor"})})},{}),label:"Grid"}],t2=[{value:"none",icon:(0,o.jsx)(eL,{}),label:"None"},{value:"disc",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7ZM10.5 6.5C10.2239 6.5 10 6.72386 10 7C10 7.27614 10.2239 7.5 10.5 7.5H17.5C17.7761 7.5 18 7.27614 18 7C18 6.72386 17.7761 6.5 17.5 6.5H10.5ZM10.5 16.5C10.2239 16.5 10 16.7239 10 17C10 17.2761 10.2239 17.5 10.5 17.5H17.5C17.7761 17.5 18 17.2761 18 17C18 16.7239 17.7761 16.5 17.5 16.5H10.5ZM10.5 11.5C10.2239 11.5 10 11.7239 10 12C10 12.2761 10.2239 12.5 10.5 12.5H17.5C17.7761 12.5 18 12.2761 18 12C18 11.7239 17.7761 11.5 17.5 11.5H10.5ZM6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Bullet"},{value:"decimal",icon:(0,o.jsx)(function({size:e}){return(0,o.jsx)(er,{size:e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 7C11 6.72386 11.2238 6.5 11.5 6.5H17.5C17.7761 6.5 18 6.72386 18 7C18 7.27614 17.7761 7.5 17.5 7.5H11.5C11.2238 7.5 11 7.27614 11 7ZM6 7.00001C6 6.72387 6.22386 6.50001 6.5 6.50001H7.5C7.77614 6.50001 8 6.72387 8 7.00001V10.5C8 10.7762 7.77614 11 7.5 11C7.22386 11 7 10.7762 7 10.5V7.50001H6.5C6.22386 7.50001 6 7.27616 6 7.00001ZM6 13.5C6 13.2239 6.22386 13 6.5 13H8.5C8.77614 13 9 13.2239 9 13.5V15C9 15.1894 8.893 15.3625 8.72361 15.4472L7 16.309V16.5H8.5C8.77614 16.5 9 16.7239 9 17C9 17.2762 8.77614 17.5 8.5 17.5H6.5C6.22386 17.5 6 17.2762 6 17V16C6 15.8106 6.107 15.6375 6.27639 15.5528L8 14.691V14H6.5C6.22386 14 6 13.7762 6 13.5ZM11.5 16.5C11.2238 16.5 11 16.7239 11 17C11 17.2761 11.2238 17.5 11.5 17.5H17.5C17.7761 17.5 18 17.2761 18 17C18 16.7239 17.7761 16.5 17.5 16.5H11.5ZM11.5 11.5C11.2238 11.5 11 11.7239 11 12C11 12.2761 11.2238 12.5 11.5 12.5H17.5C17.7761 12.5 18 12.2761 18 12C18 11.7239 17.7761 11.5 17.5 11.5H11.5Z",fill:"currentColor",fillOpacity:.9})})},{}),label:"Numbered"}];function t7({element:e,position:t,onPropertyChange:n,onPropertyHover:i,onApplyToElement:a,onVariableSwap:c,onVariableAssociate:d,onVariableUnlink:p,variableAssociations:h={},unlinkedVariables:f,changedProperties:g,onPropertyReset:m,selectorCandidates:x=[],activeSelector:b=null,scopeLevels:v=[],activeLevelIndex:y=0,onScopeLevelChange:C,onScopeLevelHover:w,ownedProperties:k,styleSources:j={},forcedState:S=null,onForcedStateChange:R,onPinLinesChange:L}){var A,T;let V,H,P,B,F,D,O,W,Z,_,X,U,Y,q,K,J,Q,ee,er,ek,ej,eS,eN,e$,eM,eE,eA,eV,eP,eB,eF=e.computedStyles,ez=(0,l.useMemo)(()=>e.element?(0,r.resolveVariablesForElement)(e.element,eF,b??void 0):new Map,[e.element,eF,b]),eI=(0,l.useCallback)(e=>{if(f?.has(e))return;let t=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),n=h[e];if(n)return{variable:n,property:t};let l=ez.get(t);if(l&&!(0,r.isRawUtility)(l.variable))return l},[ez,h,f]),eD=(0,l.useCallback)((t,r,l)=>{let i=e.element;if(!i)return;let o=i.classList.contains(t.className),a=r.className.startsWith("var(");if(o&&!a)for(let[e,l]of(i.classList.remove(t.className),i.classList.add(r.className),c?.(t.className,r.className),Object.entries(r.values)))n(e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),l);else{let e=[];for(let[r,n]of Object.entries(h))n.className===t.className&&e.push(r);0===e.length&&l&&e.push(...l);let i=Object.values(r.values)[0];if(!i)return;for(let t of e)n(t,i);d?.(e,{className:r.className,values:r.values})}},[e.element,c,n,h,d]),eO=(0,l.useCallback)((t,r)=>{if(!e.element)return;let l=Object.values(t.values)[0];if(l){for(let e of r)n(e,l);d?.(r,{className:t.className,values:t.values})}},[e.element,n,d]),eW=(0,l.useCallback)(e=>{p?.([e])},[p]),eZ=(0,l.useCallback)(e=>{let t=eI(e);return{...t?{variableMatch:t,onVariableSelect:eD,onVariableUnlink:()=>eW(e)}:{},property:e,onVariableApply:eO}},[eI,eD,eO,eW]),e_=(0,l.useCallback)(e=>{let t=e.map(e=>eI(e)),r=t.find(e=>void 0!==e);return r&&t.every(e=>void 0!==e&&e.variable.className===r.variable.className)?{variableMatch:r,property:e[0],onVariableSelect:eD,onVariableApply:eO,onVariableUnlink:()=>p?.(e)}:{property:e[0],onVariableApply:eO}},[eI,eD,eO,p]),eX=(0,l.useCallback)(e=>({isChanged:g?.has(e)??!1,onReset:()=>m?.(e)}),[g,m]),eU=(0,l.useCallback)(e=>({isChanged:e.some(e=>g?.has(e))??!1,onReset:()=>{for(let t of e)m?.(t)}}),[g,m]),eY=!!e.element&&Array.from(e.element.childNodes).some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()),eq=["P","H1","H2","H3","H4","H5","H6","SPAN","A","BUTTON","LABEL","LI","TD","TH","FIGCAPTION","BLOCKQUOTE","CITE","EM","STRONG","SMALL"].includes(e.tagName)||eY,eG=eF.display||"block",e1=eG.includes("flex"),e0=eG.includes("grid"),e5=eF.position||"static",e2=eq||["IMG","INPUT","SELECT","TEXTAREA"].includes(e.tagName)||e1||e0,e6=e.element?.parentElement?getComputedStyle(e.element.parentElement).display:"",e3=e6.includes("flex"),e8=e6.includes("grid"),e9=e3&&e.element?.parentElement&&getComputedStyle(e.element.parentElement).flexDirection||"row",te=eF.boxShadow&&"none"!==eF.boxShadow,tt=(0,l.useRef)(!1),[tr,tn]=(0,l.useState)(()=>tY(eF.filter,eF.backdropFilter)),[tl,ti]=(0,l.useState)(eF.filter),[to,ta]=(0,l.useState)(eF.backdropFilter);(eF.filter!==tl||eF.backdropFilter!==to)&&(ti(eF.filter),ta(eF.backdropFilter),tt.current?tt.current=!1:tn(tY(eF.filter,eF.backdropFilter)));let[ts,tu]=(0,l.useState)(!1),[tc,td]=(0,l.useState)(null),tp=(0,l.useRef)(null),th=(0,l.useRef)(null),tf=(0,l.useRef)(null),[tg,tm]=(0,l.useState)(!1),[tx,tb]=(0,l.useState)(!1),[tv,ty]=(0,l.useState)(!1),[tC,tw]=(0,l.useState)(!1),[tk,tj]=(0,l.useState)(new Set),[tM,tA]=(0,l.useState)(!1),[tP,tB]=(0,l.useState)(null),tF=(0,l.useRef)(null),tI=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(!tM)return;let e=e=>{let t=tI.current,r=tF.current;t&&t.contains(e.target)||r&&r.contains(e.target)||tA(!1)},t=tI.current?.getRootNode();return t.addEventListener("pointerdown",e),()=>t.removeEventListener("pointerdown",e)},[tM]),(0,l.useEffect)(()=>{if(!ts)return;let e=e=>{let t=tp.current,r=th.current;t&&t.contains(e.target)||r&&r.contains(e.target)||tu(!1)},t=tp.current?.getRootNode();return t.addEventListener("pointerdown",e),()=>t.removeEventListener("pointerdown",e)},[ts]);let tU={isFlexChild:e3,isGridChild:e8,parentFlexDir:e9,currentStyles:eF},t6=u("width",tU),t4=u("height",tU),t3=s("height",tU)?tJ:tJ.filter(e=>"__fill"!==e.value),t8="fill"===t6?"__fill":"hug"===t6?"__hug":eF.width,t9="fill"===t4?"__fill":"hug"===t4?"__hug":eF.height,re=new Set(tk);(eF.minWidth&&"0px"!==eF.minWidth&&"auto"!==eF.minWidth||eF.minHeight&&"0px"!==eF.minHeight&&"auto"!==eF.minHeight)&&re.add("min"),(eF.maxWidth&&"none"!==eF.maxWidth||eF.maxHeight&&"none"!==eF.maxHeight)&&re.add("max");let[rt,rr]=(0,l.useState)(()=>{let t=e.element,r=e.computedStyles.position;if("absolute"!==r&&"fixed"!==r)return{top:!0,right:!1,bottom:!1,left:!0};function n(e){if(""!==t.style[e])return!0;try{for(let r of document.styleSheets)try{for(let n of r.cssRules)if(n instanceof CSSStyleRule&&t.matches(n.selectorText)){let t=n.style.getPropertyValue(e);if(t&&"auto"!==t)return!0}}catch{}}catch{}return!1}let l=n("top"),i=n("bottom"),o=n("left"),a=n("right");return{top:l||!l&&!i,right:a&&!o,bottom:i&&!l,left:o||!o&&!a}}),[rn,rl]=(0,l.useState)(!1),ri=(0,l.useRef)({h:!1,v:!1}),ro=tE(eF.backgroundColor,eF.backgroundImage),[ra,rs]=(0,l.useState)(ro),[ru]=(0,l.useState)(ro),[rc]=(0,l.useState)(()=>eF.backgroundImage&&"none"!==eF.backgroundImage?t$(eF.backgroundImage)??null:null),[rd,rp]=(0,l.useState)(()=>{if(eF.backgroundImage&&"none"!==eF.backgroundImage){let e=t$(eF.backgroundImage);if(e)return e}return{type:"linear",angle:180,stops:[{color:"#ffffff",position:0,opacity:100},{color:"#000000",position:1,opacity:100}]}}),rh=(0,l.useRef)(!1),[rf,rg]=(0,l.useState)(eF.backgroundImage);if(eF.backgroundImage!==rf){if(rg(eF.backgroundImage),!rh.current){let e=tE(eF.backgroundColor,eF.backgroundImage);if(rs(e),"solid"!==e){let e=t$(eF.backgroundImage||"");e&&rp(e)}}rh.current=!1}let rm=(V=eF.backgroundColor,!!(H=eF.backgroundImage)&&"none"!==H||!!V&&"transparent"!==V&&"rgba(0, 0, 0, 0)"!==V),rx=(0,l.useCallback)(()=>{n("backgroundColor","#ffffff")},[n]),rb=(0,l.useCallback)(()=>{n("backgroundColor","transparent"),n("backgroundImage","none"),rs("solid")},[n]),rv=[{width:eF.borderTopWidth,style:eF.borderTopStyle},{width:eF.borderRightWidth,style:eF.borderRightStyle},{width:eF.borderBottomWidth,style:eF.borderBottomStyle},{width:eF.borderLeftWidth,style:eF.borderLeftStyle}],ry=rv.some(e=>"none"!==e.style&&parseFloat(e.width)>0);ry&&1===new Set(rv.map(e=>`${e.width}|${e.style}`)).size&&new Set([eF.borderTopColor,eF.borderRightColor,eF.borderBottomColor,eF.borderLeftColor]).size;let rC=[eF.borderTopColor,eF.borderRightColor,eF.borderBottomColor,eF.borderLeftColor],rw=rv.reduce((e,t,r)=>e||("none"!==t.style&&parseFloat(t.width)>0?rC[r]:null),null)||eF.borderTopColor,[rk,rj]=(0,l.useState)(!1),rS=(0,l.useCallback)(()=>{n("borderWidth","1px"),n("borderStyle","solid"),n("borderColor","#000000")},[n]),rR=(0,l.useCallback)(()=>{n("borderTopWidth","0px"),n("borderRightWidth","0px"),n("borderBottomWidth","0px"),n("borderLeftWidth","0px"),n("borderTopStyle","none"),n("borderRightStyle","none"),n("borderBottomStyle","none"),n("borderLeftStyle","none")},[n]),rL=(0,l.useCallback)((e,t)=>{if(rs(t),"solid"===t)n("backgroundImage","none"),n("backgroundColor","#ffffff");else{let e={...rd,type:t};rp(e),n("backgroundImage",tN(e)),n("backgroundColor","transparent")}},[rd,n]),rN=(0,l.useCallback)(e=>{rh.current=!0,rp(e),n("backgroundImage",tN(e))},[n]),r$=(0,l.useCallback)((t,r)=>{let l=e.element?.getBoundingClientRect();for(let[e,i]of Object.entries(function(e,t,r){let{isFlexChild:n,isGridChild:l,parentFlexDir:i,currentStyles:o,elementRect:a}=r,s=()=>{let t=a?Math.round("width"===e?a.width:a.height):200;return`${t}px`};return n?"width"===e&&!i.startsWith("column")||"height"===e&&i.startsWith("column")?function(e,t,r,n){switch(t){case"fill":return{flexGrow:"1",flexShrink:"1",flexBasis:"0px",[e]:"auto"};case"hug":return{flexGrow:"0",flexShrink:"0",flexBasis:"auto",[e]:"auto"};case"fixed":{let t={flexGrow:"0",flexShrink:"0"};return r[e]&&"auto"!==r[e]||(t[e]=n()),t}}}(e,t,o,s):function(e,t,r,n){switch(t){case"fill":{let t={[e]:"100%"};return"100%"!==r[e]&&(t.alignSelf="stretch"),t}case"hug":{let t={[e]:"auto"},n=r.alignSelf;return n&&"auto"!==n&&"stretch"!==n||(t.alignSelf="flex-start"),t}case"fixed":{let t={};return r[e]&&"auto"!==r[e]&&"100%"!==r[e]||(t[e]=n()),t}}}(e,t,o,s):l?function(e,t,r,n){let l="width"===e?"justifySelf":"alignSelf";switch(t){case"fill":return{[e]:"auto",[l]:"stretch"};case"hug":{let t={[e]:"fit-content"},n=r[l];return n&&"stretch"!==n&&"auto"!==n&&"normal"!==n||(t[l]="start"),t}case"fixed":return{[e]:n()}}}(e,t,o,s):function(e,t,r){switch(t){case"fill":return{[e]:"100%"};case"hug":return{[e]:"fit-content"};case"fixed":return{[e]:r()}}}(e,t,s)}(t,r,{isFlexChild:e3,isGridChild:e8,parentFlexDir:e9,currentStyles:eF,elementRect:l?{width:l.width,height:l.height}:void 0})))n(e,i)},[e3,e8,e9,eF,e.element,n]),rM=(0,l.useCallback)(()=>{n("boxShadow",tO(tW()))},[n]),rE=(0,l.useCallback)(()=>{n("boxShadow","none")},[n]),rA=(0,l.useCallback)((e,t)=>{n("boxShadow",tO({...tD(eF.boxShadow)||tW(),[e]:t}))},[eF.boxShadow,n]),rT=(0,l.useCallback)(e=>{let t,r;tt.current=!0,tn(e);let l=(t=e.filter(e=>"layer"===e.target).map(tq),r=e.filter(e=>"backdrop"===e.target).map(tq),{filter:t.length?t.join(" "):"none",backdropFilter:r.length?r.join(" "):"none"});n("filter",l.filter),n("backdropFilter",l.backdropFilter)},[n]),rV=(0,l.useCallback)((e,t)=>{rT([...tr,{id:`f${tX++}`,type:e,value:t_[e].defaultValue,target:t}]),tu(!1),requestAnimationFrame(()=>{tf.current?.scrollIntoView({block:"end",behavior:"smooth"})})},[tr,rT]),rH=(0,l.useCallback)(e=>{rT(tr.filter(t=>t.id!==e))},[tr,rT]),rP=(0,l.useCallback)((e,t)=>{rT(tr.map(r=>r.id===e?{...r,value:t}:r))},[tr,rT]),rB=(0,l.useCallback)((e,t)=>{rr(r=>{let n={...r,[e]:t};return L?.(n),n})},[L]),rF=(0,l.useCallback)(()=>{let{h:e,v:t}=ri.current;e&&t?(rl(!0),n("transform","translate(-50%, -50%)")):(rl(!1),e?n("transform","translateX(-50%)"):t?n("transform","translateY(-50%)"):n("transform","none"))},[n]),rz=(0,l.useCallback)(()=>{rr(e=>({...e,left:!0,right:!1})),ri.current.h=!1,n("left","0px"),n("right","auto"),rF()},[n,rF]),rI=(0,l.useCallback)(()=>{rr(e=>({...e,left:!0,right:!1})),ri.current.h=!0,n("left","50%"),n("right","auto"),rF()},[n,rF]),rD=(0,l.useCallback)(()=>{rr(e=>({...e,right:!0,left:!1})),ri.current.h=!1,n("right","0px"),n("left","auto"),rF()},[n,rF]),rO=(0,l.useCallback)(()=>{rr(e=>({...e,top:!0,bottom:!1})),ri.current.v=!1,n("top","0px"),n("bottom","auto"),rF()},[n,rF]),rW=(0,l.useCallback)(()=>{rr(e=>({...e,top:!0,bottom:!1})),ri.current.v=!0,n("top","50%"),n("bottom","auto"),rF()},[n,rF]),rZ=(0,l.useCallback)(()=>{rr(e=>({...e,bottom:!0,top:!1})),ri.current.v=!1,n("bottom","0px"),n("top","auto"),rF()},[n,rF]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(N,{label:e.tagName.toLowerCase(),children:[v.length>1&&C&&(()=>{let e=(0,l.useRef)(y),t=(0,l.useRef)(null),r=e=>{if(v[e]?.selector===null)return new Set;let t=new Set;for(let r=0;r<v.length-1;r++){let n=v[r],l=v[r+1];null!==n.selector&&l&&null!==l.selector&&r<e&&r+1<=e&&t.add(r)}return t},[n,i]=(0,l.useState)(()=>r(y)),a=(0,l.useRef)(new Map);return(0,l.useEffect)(()=>{let e=t.current;if(!e)return;let r=new Map;e.querySelectorAll("[data-level-index]").forEach(e=>{let t=parseInt(e.dataset.levelIndex||"0",10),n=getComputedStyle(e);r.set(t,{bg:n.backgroundColor,color:n.color})}),a.current=r}),(0,l.useEffect)(()=>{let n=e.current;if(e.current=y,n===y)return;let l=r(n),o=r(y),s=[],u=[];if(o.forEach(e=>{l.has(e)||s.push(e)}),l.forEach(e=>{o.has(e)||u.push(e)}),0===s.length&&0===u.length)return void i(o);let c=t.current;if(!c)return void i(o);let d=e=>c.querySelector(`[data-level-index="${e}"]`),p=[...s,...u],h=new Map;for(let e of p)h.has(e)||h.set(e,new Set),h.get(e).add("right"),h.has(e+1)||h.set(e+1,new Set),h.get(e+1).add("left");let f=a.current,g=[];for(let[e]of h){let t=d(e);if(!t)continue;let r=f.get(e);r&&(t.style.backgroundColor=r.bg,t.style.color=r.color,g.push(t))}for(let[e,t]of h){let r=d(e);if(!r)continue;let n=f.get(e)?.bg||"#f5f5f4",l=[];t.has("right")&&l.push(`6px 0 0 0 ${n}`),t.has("left")&&l.push(`-6px 0 0 0 ${n}`);let i=l.join(", "),o=l.map(()=>`0px 0 0 0 ${n}`).join(", "),a=`${t.has("left")?"0px":"8px"} ${t.has("right")?"0px":"8px"} ${t.has("right")?"0px":"8px"} ${t.has("left")?"0px":"8px"}`;r.animate([{boxShadow:o,borderRadius:"8px 8px 8px 8px"},{boxShadow:i,borderRadius:a},{boxShadow:o,borderRadius:"8px 8px 8px 8px"}],{duration:320,easing:"cubic-bezier(0.77, 0, 0.175, 1)"})}let m=setTimeout(()=>{for(let e of g)e.style.removeProperty("background-color"),e.style.removeProperty("color");i(o)},160);return()=>clearTimeout(m)},[y,v]),(0,o.jsx)(M,{label:"Target",children:(0,o.jsx)("div",{className:"retune-selector-field",ref:t,children:v.map((e,t)=>{let r=t===y,i=null===e.selector,a=v[y]?.selector===null,s=t<y&&!a,u=n.has(t);return(0,o.jsxs)(l.Fragment,{children:[i&&v.length>1&&(0,o.jsx)("span",{className:"retune-selector-divider"}),(0,o.jsxs)("button",{className:`retune-selector-tag${r?" active":""}${s?" included":""}`,"data-level-index":t,onClick:()=>C(t),onPointerEnter:()=>w?.(t),onPointerLeave:()=>w?.(null),children:[e.label.length>24?(0,o.jsx)(z,{content:e.label,side:"bottom",delay:300,children:(0,o.jsx)("span",{className:"retune-selector-tag-name",children:function(e){if(e.length<=24)return e;let t=Math.ceil(9.200000000000001),r=Math.floor(13.799999999999999);return e.slice(0,t)+"…"+e.slice(-r)}(e.label)})}):(0,o.jsx)("span",{className:"retune-selector-tag-name",children:e.label}),e.count>1&&(0,o.jsx)(z,{content:`${e.count} elements match this selector`,side:"bottom",delay:300,children:(0,o.jsx)("span",{className:"retune-selector-tag-count",children:e.count})})]}),u&&(0,o.jsx)("span",{className:"retune-selector-bridge filled"})]},e.selector??"__element")})})})})(),R&&(0,o.jsx)(M,{label:"State",children:(0,o.jsx)("div",{className:"retune-row",children:(0,o.jsx)(eJ,{prop:"__state",value:S??"none",options:["none",":hover",":focus",":active"],onChange:(e,t)=>R("none"===t?null:t)})})})]}),(0,o.jsxs)(N,{label:"Position",children:[(P="absolute"===e5||"fixed"===e5,B=e3&&e9.startsWith("column"),F=e3&&!e9.startsWith("column"),D=P||e8||B,O=P||e8||F,W=eF.alignSelf||"auto",Z=eF.justifySelf||"auto",_=(()=>{if(B){if("flex-start"===W||"start"===W)return"start";if("center"===W)return"center";if("flex-end"===W||"end"===W)return"end"}else if(e8){if("start"===Z)return"start";if("center"===Z)return"center";if("end"===Z)return"end"}return null})(),X=(()=>{if(F){if("flex-start"===W||"start"===W)return"start";if("center"===W)return"center";if("flex-end"===W||"end"===W)return"end"}else if(e8){if("start"===W)return"start";if("center"===W)return"center";if("end"===W)return"end"}return null})(),U=e=>{P?"start"===e?rz():"center"===e?rI():rD():e8?n("justifySelf",_===e?"auto":e):B&&n("alignSelf",_===e?"auto":"start"===e?"flex-start":"end"===e?"flex-end":"center")},Y=e=>{P?"start"===e?rO():"center"===e?rW():rZ():e8?n("alignSelf",X===e?"auto":e):F&&n("alignSelf",X===e?"auto":"start"===e?"flex-start":"end"===e?"flex-end":"center")},(0,o.jsx)($,{children:(0,o.jsxs)("div",{className:"retune-field",children:[(0,o.jsx)("span",{className:"retune-field-label",children:"Alignment"}),(0,o.jsxs)("div",{className:"retune-align-row",children:[(0,o.jsxs)("div",{className:"retune-btn-group",style:D?void 0:{opacity:.3,pointerEvents:"none"},children:[(0,o.jsx)(z,{content:"Align left",side:"top",children:(0,o.jsx)("button",{type:"button",className:`retune-align-btn${"start"===_?" active":""}`,onClick:()=>U("start"),children:(0,o.jsx)(em,{})})}),(0,o.jsx)(z,{content:"Align center horizontally",side:"top",children:(0,o.jsx)("button",{type:"button",className:`retune-align-btn${"center"===_?" active":""}`,onClick:()=>U("center"),children:(0,o.jsx)(eb,{})})}),(0,o.jsx)(z,{content:"Align right",side:"top",children:(0,o.jsx)("button",{type:"button",className:`retune-align-btn${"end"===_?" active":""}`,onClick:()=>U("end"),children:(0,o.jsx)(ex,{})})})]}),(0,o.jsxs)("div",{className:"retune-btn-group",style:O?void 0:{opacity:.3,pointerEvents:"none"},children:[(0,o.jsx)(z,{content:"Align top",side:"top",children:(0,o.jsx)("button",{type:"button",className:`retune-align-btn${"start"===X?" active":""}`,onClick:()=>Y("start"),children:(0,o.jsx)(ev,{})})}),(0,o.jsx)(z,{content:"Align center vertically",side:"top",children:(0,o.jsx)("button",{type:"button",className:`retune-align-btn${"center"===X?" active":""}`,onClick:()=>Y("center"),children:(0,o.jsx)(eC,{})})}),(0,o.jsx)(z,{content:"Align bottom",side:"top",children:(0,o.jsx)("button",{type:"button",className:`retune-align-btn${"end"===X?" active":""}`,onClick:()=>Y("end"),children:(0,o.jsx)(ey,{})})})]})]})]})})),(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Type",children:(0,o.jsx)(eJ,{prop:"position",value:e5,options:["static","relative","absolute","fixed","sticky"],onChange:n})})}),("absolute"===e5||"fixed"===e5)&&(0,o.jsx)($,{children:(0,o.jsx)(e4,{top:eF.top,right:eF.right,bottom:eF.bottom,left:eF.left,pins:rt,centered:rn,onChange:n,onPinChange:rB,onCenterChange:rl})}),"relative"===e5&&(0,o.jsxs)(M,{label:"Offsets",children:[(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(et,{label:"T",prop:"top",value:eF.top,onChange:n,...eX("top")}),(0,o.jsx)(et,{label:"R",prop:"right",value:eF.right,onChange:n,...eX("right")})]}),(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(et,{label:"B",prop:"bottom",value:eF.bottom,onChange:n,...eX("bottom")}),(0,o.jsx)(et,{label:"L",prop:"left",value:eF.left,onChange:n,...eX("left")})]})]}),"sticky"===e5&&(0,o.jsx)(M,{label:"Sticky offset",children:(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(et,{label:"T",prop:"top",value:eF.top,onChange:n,...eX("top")}),(0,o.jsx)(et,{label:"B",prop:"bottom",value:eF.bottom,onChange:n,...eX("bottom")})]})})]}),(0,o.jsxs)(N,{label:"Layout",children:[(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Display",children:(0,o.jsx)(tV,{options:t5,value:eG.includes("flex")?(eF.flexDirection||"row").startsWith("column")?"flex-column":"flex-row":eG.includes("grid")?"grid":"block",onChange:e=>{"flex-row"===e?(n("display","flex"),n("flexDirection","row")):"flex-column"===e?(n("display","flex"),n("flexDirection","column")):n("display",e)}})})}),e1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"retune-section-row",children:(0,o.jsxs)("div",{className:"retune-row",style:{alignItems:"flex-start"},children:[(0,o.jsx)("div",{style:{flex:1},children:(0,o.jsx)(E,{label:"Alignment",children:(0,o.jsx)(tS,{justifyContent:eF.justifyContent||"flex-start",alignItems:eF.alignItems||"stretch",flexDirection:eF.flexDirection||"row",onChange:n})})}),(0,o.jsx)("div",{style:{flex:1},onPointerEnter:()=>i?.("gap"),onPointerLeave:()=>i?.(null),children:(0,o.jsx)(E,{label:"Gap",children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:(eF.flexDirection||"row").startsWith("column")?"Vertical gap between items":"Horizontal gap between items",side:"top",sideOffset:14,children:(eF.flexDirection||"row").startsWith("column")?(0,o.jsx)(eg,{}):(0,o.jsx)(ef,{})}),prop:"gap",value:eF.gap,onChange:n,min:0,...eX("gap")})})})]})}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Reverse",children:(0,o.jsx)(eJ,{prop:"flexDirection",value:(eF.flexDirection||"row").includes("reverse")?"yes":"no",options:["no","yes"],onChange:(e,t)=>{let r=(eF.flexDirection||"row").startsWith("column")?"column":"row";n("flexDirection","yes"===t?`${r}-reverse`:r)}})}),(0,o.jsx)(E,{label:"Wrap",children:(0,o.jsx)(eJ,{prop:"flexWrap",value:eF.flexWrap,options:["nowrap","wrap","wrap-reverse"],onChange:n})})]})]}),e0&&(0,o.jsxs)($,{children:[(0,o.jsx)("div",{style:{flex:1},children:(0,o.jsx)(E,{label:"Grid",children:(0,o.jsx)(tL,{columns:tR(eF.gridTemplateColumns),rows:tR(eF.gridTemplateRows),onChange:n})})}),(0,o.jsx)("div",{style:{flex:1},onPointerEnter:()=>i?.("gap"),onPointerLeave:()=>i?.(null),children:(0,o.jsx)(E,{label:"Gap",children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Horizontal gap between columns",side:"top",sideOffset:14,children:(0,o.jsx)(ef,{})}),prop:"columnGap",value:eF.columnGap,onChange:n,min:0,...eZ("columnGap"),...eX("columnGap")}),(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Vertical gap between rows",side:"top",sideOffset:14,children:(0,o.jsx)(eg,{})}),prop:"rowGap",value:eF.rowGap,onChange:n,min:0,...eZ("rowGap"),...eX("rowGap")})]})})})]}),(0,o.jsx)(M,{label:"Padding",children:tg?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)("div",{onPointerEnter:()=>i?.("paddingLeft"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Padding left",side:"top",sideOffset:14,children:(0,o.jsx)(ed,{})}),prop:"paddingLeft",value:eF.paddingLeft,onChange:n,min:0,...eZ("paddingLeft"),...eX("paddingLeft")})}),(0,o.jsx)("div",{onPointerEnter:()=>i?.("paddingTop"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Padding top",side:"top",sideOffset:14,children:(0,o.jsx)(eu,{})}),prop:"paddingTop",value:eF.paddingTop,onChange:n,min:0,...eZ("paddingTop"),...eX("paddingTop")})}),(0,o.jsx)(z,{content:"Collapse to axes",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn active",onClick:()=>tm(!1),children:(0,o.jsx)(eh,{})})})]}),(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)("div",{onPointerEnter:()=>i?.("paddingRight"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Padding right",side:"top",sideOffset:14,children:(0,o.jsx)(ep,{})}),prop:"paddingRight",value:eF.paddingRight,onChange:n,min:0,...eZ("paddingRight"),...eX("paddingRight")})}),(0,o.jsx)("div",{onPointerEnter:()=>i?.("paddingBottom"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Padding bottom",side:"top",sideOffset:14,children:(0,o.jsx)(ec,{})}),prop:"paddingBottom",value:eF.paddingBottom,onChange:n,min:0,...eZ("paddingBottom"),...eX("paddingBottom")})}),(0,o.jsx)("div",{style:{width:32}})]})]}):(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)("div",{style:{flex:1},onPointerEnter:()=>i?.("paddingInline"),onPointerLeave:()=>i?.(null),children:(0,o.jsx)(tz,{label:(0,o.jsx)(z,{content:"Horizontal padding (left, right)",side:"top",sideOffset:14,children:(0,o.jsx)(ea,{})}),props:["paddingLeft","paddingRight"],values:[eF.paddingLeft,eF.paddingRight],onChange:n,min:0,...e_(["paddingLeft","paddingRight"]),...eU(["paddingLeft","paddingRight"])})}),(0,o.jsx)("div",{style:{flex:1},onPointerEnter:()=>i?.("paddingBlock"),onPointerLeave:()=>i?.(null),children:(0,o.jsx)(tz,{label:(0,o.jsx)(z,{content:"Vertical padding (top, bottom)",side:"top",sideOffset:14,children:(0,o.jsx)(es,{})}),props:["paddingTop","paddingBottom"],values:[eF.paddingTop,eF.paddingBottom],onChange:n,min:0,...e_(["paddingTop","paddingBottom"]),...eU(["paddingTop","paddingBottom"])})}),(0,o.jsx)(z,{content:"Edit individual sides",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>tm(!0),children:(0,o.jsx)(eh,{})})})]})}),(0,o.jsx)(M,{label:"Margin",children:tx?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)("div",{onPointerEnter:()=>i?.("marginLeft"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Margin left",side:"top",sideOffset:14,children:(0,o.jsx)(ed,{})}),prop:"marginLeft",value:eF.marginLeft,onChange:n,...eZ("marginLeft"),...eX("marginLeft")})}),(0,o.jsx)("div",{onPointerEnter:()=>i?.("marginTop"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Margin top",side:"top",sideOffset:14,children:(0,o.jsx)(eu,{})}),prop:"marginTop",value:eF.marginTop,onChange:n,...eZ("marginTop"),...eX("marginTop")})}),(0,o.jsx)(z,{content:"Collapse to axes",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn active",onClick:()=>tb(!1),children:(0,o.jsx)(eh,{})})})]}),(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)("div",{onPointerEnter:()=>i?.("marginRight"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Margin right",side:"top",sideOffset:14,children:(0,o.jsx)(ep,{})}),prop:"marginRight",value:eF.marginRight,onChange:n,...eZ("marginRight"),...eX("marginRight")})}),(0,o.jsx)("div",{onPointerEnter:()=>i?.("marginBottom"),onPointerLeave:()=>i?.(null),style:{flex:1},children:(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Margin bottom",side:"top",sideOffset:14,children:(0,o.jsx)(ec,{})}),prop:"marginBottom",value:eF.marginBottom,onChange:n,...eZ("marginBottom"),...eX("marginBottom")})}),(0,o.jsx)("div",{style:{width:32}})]})]}):(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)("div",{style:{flex:1},onPointerEnter:()=>i?.("marginInline"),onPointerLeave:()=>i?.(null),children:(0,o.jsx)(tz,{label:(0,o.jsx)(z,{content:"Horizontal margin (left, right)",side:"top",sideOffset:14,children:(0,o.jsx)(ea,{})}),props:["marginLeft","marginRight"],values:[eF.marginLeft,eF.marginRight],onChange:n,...e_(["marginLeft","marginRight"]),...eU(["marginLeft","marginRight"])})}),(0,o.jsx)("div",{style:{flex:1},onPointerEnter:()=>i?.("marginBlock"),onPointerLeave:()=>i?.(null),children:(0,o.jsx)(tz,{label:(0,o.jsx)(z,{content:"Vertical margin (top, bottom)",side:"top",sideOffset:14,children:(0,o.jsx)(es,{})}),props:["marginTop","marginBottom"],values:[eF.marginTop,eF.marginBottom],onChange:n,...e_(["marginTop","marginBottom"]),...eU(["marginTop","marginBottom"])})}),(0,o.jsx)(z,{content:"Edit individual sides",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>tb(!0),children:(0,o.jsx)(eh,{})})})]})})]}),(0,o.jsxs)(N,{label:"Size",action:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(z,{content:"Add constraint",side:"top",children:(0,o.jsx)("button",{ref:tI,className:"retune-section-action",onClick:()=>{if(tM)return void tA(!1);let e=tI.current;if(!e)return;let t=e.getBoundingClientRect();tB({top:t.bottom+4,left:t.right}),tA(!0)},children:(0,o.jsx)(eR,{})})}),tM&&tP&&(0,o.jsx)("div",{ref:tF,style:{position:"fixed",top:tP.top,left:tP.left,transform:"translateX(-100%)",zIndex:0x7fffffff},children:(0,o.jsx)(eT,{options:[{value:"min",label:re.has("min")?"Remove min size":"Add min size"},{value:"max",label:re.has("max")?"Remove max size":"Add max size"}],value:void 0,showCheckmark:!1,onSelect:e=>{let t=e.value;re.has(t)?("min"===t?(n("minWidth","0px"),n("minHeight","0px")):(n("maxWidth","none"),n("maxHeight","none")),tj(e=>{let r=new Set(e);return r.delete(t),r})):tj(e=>{let r=new Set(e);return r.add(t),r}),tA(!1)}})})]}),children:[(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Width",children:(0,o.jsx)(eH,{prop:"width",value:t8,options:tJ,onChange:(e,t)=>{"__fill"===t?r$("width","fill"):"__hug"===t?r$("width","hug"):(e3&&r$("width","fixed"),n(e,t))},...eX("width")})}),(0,o.jsx)(E,{label:"Height",children:(0,o.jsx)(eH,{prop:"height",value:t9,options:t3,onChange:(e,t)=>{"__fill"===t?r$("height","fill"):"__hug"===t?r$("height","hug"):(e3&&r$("height","fixed"),n(e,t))},...eX("height")})})]}),re.has("min")&&(0,o.jsx)("div",{className:"retune-section-row",children:(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(E,{label:"Min W",children:(0,o.jsx)(et,{prop:"minWidth",value:"0px"===eF.minWidth||"auto"===eF.minWidth?"":eF.minWidth,placeholder:"–",onChange:(e,t)=>{t?n(e,t):n(e,"0px")},...eX("minWidth")})}),(0,o.jsx)(E,{label:"Min H",children:(0,o.jsx)(et,{prop:"minHeight",value:"0px"===eF.minHeight||"auto"===eF.minHeight?"":eF.minHeight,placeholder:"–",onChange:(e,t)=>{t?n(e,t):n(e,"0px")},...eX("minHeight")})}),(0,o.jsx)(z,{content:"Remove min size",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>{n("minWidth","0px"),n("minHeight","0px"),tj(e=>{let t=new Set(e);return t.delete("min"),t})},children:(0,o.jsx)(eL,{})})})]})}),re.has("max")&&(0,o.jsx)("div",{className:"retune-section-row",children:(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(E,{label:"Max W",children:(0,o.jsx)(et,{prop:"maxWidth",value:"none"===eF.maxWidth?"":eF.maxWidth,placeholder:"–",onChange:(e,t)=>{t?n(e,t):n(e,"none")},...eX("maxWidth")})}),(0,o.jsx)(E,{label:"Max H",children:(0,o.jsx)(et,{prop:"maxHeight",value:"none"===eF.maxHeight?"":eF.maxHeight,placeholder:"–",onChange:(e,t)=>{t?n(e,t):n(e,"none")},...eX("maxHeight")})}),(0,o.jsx)(z,{content:"Remove max size",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>{n("maxWidth","none"),n("maxHeight","none"),tj(e=>{let t=new Set(e);return t.delete("max"),t})},children:(0,o.jsx)(eL,{})})})]})})]}),eq&&(0,o.jsxs)(N,{label:"Typography",children:[(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Font",children:(0,o.jsx)(e7,{prop:"fontFamily",value:eF.fontFamily,onChange:n,...eX("fontFamily")})})}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Size",children:(0,o.jsx)(et,{prop:"fontSize",value:eF.fontSize,onChange:n,min:1,...eZ("fontSize"),...eX("fontSize")})}),(0,o.jsx)(E,{label:"Weight",children:(0,o.jsx)(eH,{prop:"fontWeight",value:eF.fontWeight,options:tQ,onChange:n,...eZ("fontWeight"),...eX("fontWeight")})})]}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Line height",children:(0,o.jsx)(eH,{prop:"lineHeight",value:eF.lineHeight,options:t1,onChange:n,...eZ("lineHeight"),...eX("lineHeight")})}),(0,o.jsx)(E,{label:"Letter spacing",children:(0,o.jsx)(eH,{prop:"letterSpacing",value:eF.letterSpacing,options:t0,onChange:n,...eZ("letterSpacing"),...eX("letterSpacing")})})]}),(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Color",children:(0,o.jsx)(eK,{prop:"color",value:eF.color,onChange:n,...eZ("color"),...eX("color")})})}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Align",children:(0,o.jsx)(tV,{options:tK,value:(A=eF.textAlign)&&"start"!==A?"end"===A?"right":A:"left",onChange:e=>n("textAlign",e)})}),(0,o.jsx)(E,{label:"Vertical",children:(0,o.jsx)(tV,{options:tG,value:(T=eF.verticalAlign)?"middle"===T||"center"===T?"middle":"bottom"===T?"bottom":"top"===T||"baseline"===T||"text-top"===T?"top":"text-bottom"===T||"sub"===T?"bottom":"top":"top",onChange:e=>n("verticalAlign",e),disabled:!e2})}),(0,o.jsx)("div",{style:{alignSelf:"flex-end"},children:(0,o.jsx)(z,{content:tC?"Show less":"More options",side:"top",children:(0,o.jsx)("button",{className:`retune-split-btn${tC?" active":""}`,onClick:()=>tw(e=>!e),children:(0,o.jsx)(ew,{})})})})]}),tC&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Style",children:(0,o.jsx)(eJ,{prop:"fontStyle",value:eF.fontStyle,options:["normal","italic","oblique"],onChange:n})}),(0,o.jsx)(E,{label:"Decoration",children:(0,o.jsx)(eJ,{prop:"textDecoration",value:eF.textDecoration,options:["none","underline","line-through","overline"],onChange:n})})]}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Transform",children:(0,o.jsx)(eJ,{prop:"textTransform",value:eF.textTransform,options:["none","uppercase","lowercase","capitalize"],onChange:n})}),(0,o.jsx)(E,{label:"White space",children:(0,o.jsx)(eJ,{prop:"whiteSpace",value:eF.whiteSpace,options:["normal","nowrap","pre","pre-wrap","pre-line","break-spaces"],onChange:n})})]}),(K=(q=eF.webkitLineClamp)&&"none"!==q&&"unset"!==q?{enabled:!0,lines:parseInt(q,10)||2}:"ellipsis"===eF.textOverflow&&"nowrap"===eF.whiteSpace?{enabled:!0,lines:1}:{enabled:!1,lines:1},J={currentDisplay:eF.display},Q=e=>{for(let[t,r]of Object.entries(e))n(t,r)},(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Truncate",children:(0,o.jsx)(eJ,{prop:"truncate",value:K.enabled?"ellipsis":"none",options:["none","ellipsis"],onChange:(t,r)=>{let n="ellipsis"===r;Q(tH({enabled:n,lines:1},J)),(t=>{if(!a)return;let r=e.element?.parentElement;for(;r&&r!==document.body;){let e=getComputedStyle(r.parentElement||r).display;(e.includes("grid")||e.includes("flex"))&&a(r,"minWidth",t?"0px":""),r=r.parentElement}})(n)}})}),K.enabled&&(0,o.jsx)(E,{label:"Max lines",children:(0,o.jsx)(et,{prop:"lineClamp",value:String(K.lines),onChange:(e,t)=>{Q(tH({enabled:!0,lines:parseInt(t)||1},J))},...eX("lineClamp")})})]}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Word break",children:(0,o.jsx)(eJ,{prop:"overflowWrap",value:eF.overflowWrap,options:["normal","break-word","anywhere"],onChange:n})}),["UL","OL","LI"].includes(e.tagName)&&(0,o.jsx)(E,{label:"List style",children:(0,o.jsx)(tV,{options:t2,value:eF.listStyleType||"none",onChange:e=>n("listStyleType",e)})})]})]}))]})]}),(0,o.jsxs)(N,{label:"Appearance",children:[(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Opacity",children:(0,o.jsx)(et,{prop:"opacity",value:eF.opacity,onChange:n,min:0,max:1,step:.01,...eZ("opacity"),...eX("opacity")})}),(0,o.jsx)(E,{label:"Z index",children:(0,o.jsx)(et,{prop:"zIndex",value:eF.zIndex,onChange:n,...eX("zIndex")})})]}),(0,o.jsx)(M,{label:"Corner radius",children:tv?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Top left corner radius",side:"top",sideOffset:14,children:(0,o.jsx)(en,{})}),prop:"borderTopLeftRadius",value:eF.borderTopLeftRadius,onChange:n,min:0,...eZ("borderTopLeftRadius"),...eX("borderTopLeftRadius")}),(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Top right corner radius",side:"top",sideOffset:14,children:(0,o.jsx)(el,{})}),prop:"borderTopRightRadius",value:eF.borderTopRightRadius,onChange:n,min:0,...eZ("borderTopRightRadius"),...eX("borderTopRightRadius")}),(0,o.jsx)(z,{content:"Collapse to single",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn active",onClick:()=>ty(!1),children:(0,o.jsx)(eh,{})})})]}),(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Bottom left corner radius",side:"top",sideOffset:14,children:(0,o.jsx)(ei,{})}),prop:"borderBottomLeftRadius",value:eF.borderBottomLeftRadius,onChange:n,min:0,...eZ("borderBottomLeftRadius"),...eX("borderBottomLeftRadius")}),(0,o.jsx)(et,{label:(0,o.jsx)(z,{content:"Bottom right corner radius",side:"top",sideOffset:14,children:(0,o.jsx)(eo,{})}),prop:"borderBottomRightRadius",value:eF.borderBottomRightRadius,onChange:n,min:0,...eZ("borderBottomRightRadius"),...eX("borderBottomRightRadius")}),(0,o.jsx)("div",{style:{width:32}})]})]}):(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(tz,{label:(0,o.jsx)(z,{content:"Corner radius (TL, TR, BR, BL)",side:"top",sideOffset:14,children:(0,o.jsx)(en,{})}),props:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],values:[eF.borderTopLeftRadius,eF.borderTopRightRadius,eF.borderBottomRightRadius,eF.borderBottomLeftRadius],onChange:n,min:0,...e_(["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"]),...eU(["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"])}),(0,o.jsx)(z,{content:"Edit individual corners",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>ty(!0),children:(0,o.jsx)(eh,{})})})]})}),(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Overflow",children:(0,o.jsx)(eJ,{prop:"overflow",value:eF.overflow,options:["visible","hidden","auto","scroll"],onChange:n})})})]}),(ee=!!eI("backgroundColor"),(0,o.jsx)(N,{label:"Fill",gap:8,action:(0,o.jsxs)("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[!ee&&(0,o.jsx)(G,{property:"backgroundColor",onVariableSelect:eD,onVariableApply:(e,t)=>{let r=Object.values(e.values)[0];r&&n("backgroundColor",r),d?.(t,{className:e.className,values:e.values})}}),rm||ee?(0,o.jsx)(z,{content:"Remove fill",side:"top",children:(0,o.jsx)("button",{className:"retune-section-action",onClick:rb,children:(0,o.jsx)(eL,{})})}):(0,o.jsx)(z,{content:"Add fill",side:"top",children:(0,o.jsx)("button",{className:"retune-section-action",onClick:rx,children:(0,o.jsx)(eR,{})})})]}),children:rm||ee?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($,{children:(0,o.jsx)(eJ,{prop:"fillMode",value:"solid"===ra?"solid":rd.type,options:["solid","linear","radial","conic"],onChange:rL,isChanged:eX("backgroundImage").isChanged,onReset:()=>{m?.("backgroundImage"),m?.("backgroundColor")}})}),"solid"===ra?(0,o.jsx)($,{children:(0,o.jsx)(eK,{prop:"backgroundColor",value:eF.backgroundColor,onChange:n,...eZ("backgroundColor"),...eX("backgroundColor")})}):(0,o.jsx)(tT,{gradient:rd,onChange:rN,originalGradient:rc??void 0,isNewGradient:"solid"===ru})]}):null})),(0,o.jsx)(N,{label:"Border",action:ry?(0,o.jsx)(z,{content:"Remove border",side:"top",children:(0,o.jsx)("button",{className:"retune-section-action",onClick:rR,children:(0,o.jsx)(eL,{})})}):(0,o.jsx)(z,{content:"Add border",side:"top",children:(0,o.jsx)("button",{className:"retune-section-action",onClick:rS,children:(0,o.jsx)(eR,{})})}),children:ry&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Color",children:(0,o.jsx)(eK,{prop:"borderColor",value:rw,onChange:n,...eZ("borderColor"),...eX("borderColor")})})}),(0,o.jsx)(M,{label:rk?void 0:"Width",children:rk?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(E,{label:"Top",children:(0,o.jsx)(et,{prop:"borderTopWidth",value:eF.borderTopWidth,onChange:(e,t)=>{n(e,t),parseFloat(t)>0&&"none"===eF.borderTopStyle&&n("borderTopStyle","solid")},min:0,...eX("borderTopWidth")})}),(0,o.jsx)(E,{label:"Right",children:(0,o.jsx)(et,{prop:"borderRightWidth",value:eF.borderRightWidth,onChange:(e,t)=>{n(e,t),parseFloat(t)>0&&"none"===eF.borderRightStyle&&n("borderRightStyle","solid")},min:0,...eX("borderRightWidth")})}),(0,o.jsx)(z,{content:"Collapse to shorthand",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn active",onClick:()=>rj(!1),children:(0,o.jsx)(eh,{})})})]}),(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(E,{label:"Bottom",children:(0,o.jsx)(et,{prop:"borderBottomWidth",value:eF.borderBottomWidth,onChange:(e,t)=>{n(e,t),parseFloat(t)>0&&"none"===eF.borderBottomStyle&&n("borderBottomStyle","solid")},min:0,...eX("borderBottomWidth")})}),(0,o.jsx)(E,{label:"Left",children:(0,o.jsx)(et,{prop:"borderLeftWidth",value:eF.borderLeftWidth,onChange:(e,t)=>{n(e,t),parseFloat(t)>0&&"none"===eF.borderLeftStyle&&n("borderLeftStyle","solid")},min:0,...eX("borderLeftWidth")})}),(0,o.jsx)("div",{style:{width:32}})]})]}):(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(tz,{props:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],values:[eF.borderTopWidth,eF.borderRightWidth,eF.borderBottomWidth,eF.borderLeftWidth],onChange:n,min:0,...e_(["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"]),...eU(["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"])}),(0,o.jsx)(z,{content:"Edit individual sides",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>rj(!0),children:(0,o.jsx)(eh,{})})})]})}),(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Style",children:(0,o.jsx)(eJ,{prop:"borderStyle",value:"none"!==eF.borderTopStyle?eF.borderTopStyle:"none"!==eF.borderRightStyle?eF.borderRightStyle:"none"!==eF.borderBottomStyle?eF.borderBottomStyle:eF.borderLeftStyle,options:["solid","dashed","dotted","double","groove","ridge"],onChange:n})})})]})}),(ek=!!(er=eI("boxShadow")),(0,o.jsx)(N,{label:"Shadow",action:(0,o.jsxs)("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[!ek&&(0,o.jsx)(G,{property:"boxShadow",onVariableSelect:eD,onVariableApply:(e,t)=>{let r=Object.values(e.values)[0];r&&n("boxShadow",r),d?.(t,{className:e.className,values:e.values})}}),te||ek?(0,o.jsx)(z,{content:"Remove shadow",side:"top",children:(0,o.jsx)("button",{className:"retune-section-action",onClick:rE,children:(0,o.jsx)(eL,{})})}):(0,o.jsx)(z,{content:"Add shadow",side:"top",children:(0,o.jsx)("button",{className:"retune-section-action",onClick:rM,children:(0,o.jsx)(eR,{})})})]}),children:ek?(ej={current:null},(0,o.jsx)($,{children:(0,o.jsxs)("div",{className:"retune-prop retune-prop-variable-applied",style:{flex:1,cursor:"pointer"},onClick:()=>ej.current?.(),children:[(0,o.jsx)(I,{isChanged:eX("boxShadow").isChanged,onReset:eX("boxShadow").onReset}),(0,o.jsx)("span",{className:"retune-prop-input",style:{display:"flex",alignItems:"center",paddingLeft:12,color:"var(--retune-text)"},children:er.variable.className.startsWith("var(--")?er.variable.className.slice(6,-1):er.variable.className}),(0,o.jsx)(G,{match:er,property:"boxShadow",onVariableSelect:eD,onVariableApply:eO,onVariableUnlink:()=>p?.(["boxShadow"]),openPickerRef:ej})]})})):te&&(eS=tD(eF.boxShadow))?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Color",children:(0,o.jsx)(eK,{prop:"shadowColor",value:eS.color,onChange:(e,t)=>rA("color",t),...eX("shadowColor")})})}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"X offset",children:(0,o.jsx)(et,{prop:"shadowOffsetX",value:`${eS.offsetX}px`,onChange:(e,t)=>rA("offsetX",parseFloat(t)||0),...eX("shadowOffsetX")})}),(0,o.jsx)(E,{label:"Y offset",children:(0,o.jsx)(et,{prop:"shadowOffsetY",value:`${eS.offsetY}px`,onChange:(e,t)=>rA("offsetY",parseFloat(t)||0),...eX("shadowOffsetY")})})]}),(0,o.jsxs)($,{children:[(0,o.jsx)(E,{label:"Blur",children:(0,o.jsx)(et,{prop:"shadowBlur",value:`${eS.blur}px`,onChange:(e,t)=>rA("blur",Math.max(0,parseFloat(t)||0)),min:0,...eX("shadowBlur")})}),(0,o.jsx)(E,{label:"Spread",children:(0,o.jsx)(et,{prop:"shadowSpread",value:`${eS.spread}px`,onChange:(e,t)=>rA("spread",parseFloat(t)||0),...eX("shadowSpread")})})]}),(0,o.jsx)($,{children:(0,o.jsx)(E,{label:"Type",children:(0,o.jsx)(eJ,{prop:"shadowInset",value:eS.inset?"inside":"outside",options:["outside","inside"],onChange:(e,t)=>rA("inset","inside"===t)})})})]}):null})),(0,o.jsx)(N,{label:"Filters",action:(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(z,{content:"Add filter",side:"top",children:(0,o.jsx)("button",{ref:tp,className:"retune-section-action",onClick:()=>{if(ts)return void tu(!1);let e=tp.current;if(!e)return;let t=e.getBoundingClientRect();window.innerHeight-t.bottom-8>=t.top-8?td({top:t.bottom+4,left:t.right}):td({bottom:window.innerHeight-t.top+4,left:t.right}),tu(!0)},children:(0,o.jsx)(eR,{})})}),ts&&tc&&(0,o.jsx)("div",{ref:th,style:{position:"fixed",...null!=tc.top?{top:tc.top}:{bottom:tc.bottom},left:tc.left,transform:"translateX(-100%)",zIndex:0x7fffffff},children:(0,o.jsx)(eT,{options:(eN=new Set(tr.filter(e=>"layer"===e.target).map(e=>e.type)),e$=new Set(tr.filter(e=>"backdrop"===e.target).map(e=>e.type)),eM=tZ.filter(e=>!eN.has(e)),eE=tZ.filter(e=>!e$.has(e)),eA=[],eM.forEach((e,t)=>{eA.push({value:`layer:${e}`,label:t_[e].label,...0===t?{headingBefore:"Layer"}:{}})}),eE.forEach((e,t)=>{eA.push({value:`backdrop:${e}`,label:t_[e].label,...0===t?{headingBefore:"Backdrop",...eM.length>0?{separatorBefore:!0}:{}}:{}})}),eA),showCheckmark:!1,onSelect:e=>{let[t,r]=e.value.split(":");rV(r,t)}})})]}),children:tr.length>0&&(eV=tr.filter(e=>"layer"===e.target),eP=tr.filter(e=>"backdrop"===e.target),eB=e=>{let t=t_[e.type];return(0,o.jsxs)("div",{className:"retune-row",children:[(0,o.jsx)(eQ,{label:t.label,prop:e.id,value:String(e.value),min:t.min,max:t.max,step:t.step,onChange:(t,r)=>rP(e.id,parseFloat(r)||0)}),(0,o.jsx)("div",{style:{alignSelf:"center"},children:(0,o.jsx)(z,{content:"Remove",side:"top",children:(0,o.jsx)("button",{className:"retune-split-btn",onClick:()=>rH(e.id),children:(0,o.jsx)(eL,{})})})})]},e.id)},(0,o.jsxs)(o.Fragment,{children:[eV.length>0&&(0,o.jsx)(M,{label:eP.length>0?"Layer":void 0,children:eV.map(eB)}),eP.length>0&&(0,o.jsx)(M,{label:eV.length>0?"Backdrop":void 0,children:eP.map(eB)})]}))}),(0,o.jsx)("div",{ref:tf})]})}var t6=0,t4=new WeakMap,t3=new Map;function t8(e){let t=t4.get(e);return void 0===t&&(t=t6++,t4.set(e,t),t3.set(t,e)),t}var t9=new Set(["SCRIPT","STYLE","LINK","META","TITLE","HEAD","NOSCRIPT","BR","WBR","COL"]);function re(e,t,r){let n=t?.get(e)??Array.from(e.children),l=[],i=r?new Set(r.filter(t=>t.element.parentElement===e&&t.newParent!==e).map(e=>e.element)):null;for(let e of n){if(!t9.has(e.tagName))!(e.hasAttribute("data-retune-host")||e.hasAttribute("data-retune-highlight")||e.hasAttribute("data-retune-selection")||e.hasAttribute("data-retune-label")||e.hasAttribute("data-retune-selection-label"))&&(i?.has(e)||l.push(e))}if(r){for(let t of r)if(t.newParent===e&&t.element.parentElement!==e){let e=Math.min(t.insertIndex,l.length);l.splice(e,0,t.element)}}return l}function rt(e){let t=e.tagName.toLowerCase(),n="";if(e.id)n=`#${e.id}`;else if(e.className&&"string"==typeof e.className){let t=e.className.trim().split(/\s+/)[0];t&&(n=`.${t}`)}return{tag:t,qualifier:n,component:(0,r.getDirectReactComponent)(e)}}var rr=(0,l.memo)(function e({element:t,depth:r,selectedElement:n,expandedSet:l,visualOrderMap:i,reparentEntries:a,onToggle:s,onSelect:u,onHover:c,onDragStart:d,isDragging:p,treeNodeRefs:h}){let f=re(t,i,a),g=a?.some(e=>e.element===t&&e.newParent!==t.parentElement),m=f.length>0,x=l.has(t),b=t===n,{tag:v,qualifier:y,component:C}=rt(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{ref:e=>{e&&h.set(t,e)},"data-retune-tree-key":t8(t),className:`retune-tree-node${b?" selected":""}`,style:{paddingLeft:12+16*r},onPointerDown:e=>{e.target.closest(".retune-tree-arrow")||d(e.nativeEvent,t)},onPointerEnter:()=>{p||c(t)},onPointerLeave:()=>{p||c(null)},children:[(0,o.jsx)("span",{className:`retune-tree-arrow${m?"":" empty"}${x?" expanded":""}`,onClick:e=>{e.stopPropagation(),m&&s(t)},children:m&&(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.76754 6.76778C9.9628 6.57252 10.2803 6.57252 10.4755 6.76778C10.6705 6.96298 10.6705 7.27962 10.4755 7.47482L7.99996 9.94942L5.52535 7.47482C5.33009 7.27955 5.33009 6.96305 5.52535 6.76778C5.72061 6.57252 6.03712 6.57252 6.23238 6.76778L7.99996 8.53536L9.76754 6.76778Z",fill:"currentColor",fillOpacity:"0.9"})})}),(0,o.jsx)("span",{className:"retune-tree-tag",children:v}),y&&(0,o.jsx)("span",{className:"retune-tree-qualifier",children:y}),g&&(0,o.jsx)("span",{className:"retune-tree-moved",children:"moved"}),C&&(0,o.jsxs)("span",{className:"retune-tree-component",children:["<",C,">"]})]}),x&&f.map(t=>(0,o.jsx)(e,{element:t,depth:r+1,selectedElement:n,expandedSet:l,visualOrderMap:i,reparentEntries:a,onToggle:s,onSelect:u,onHover:c,onDragStart:d,isDragging:p,treeNodeRefs:h},t8(t)))]})});function rn({selectedElement:e,onSelect:t,onHover:r,visualOrderMap:n,reparentEntries:i,onTreeReorder:a,onTreeReparent:s}){let[u,c]=(0,l.useState)(()=>new Set),[d,p]=(0,l.useState)(!1),h=(0,l.useRef)(null),f=(0,l.useRef)(null),g=(0,l.useRef)(null),m=(0,l.useRef)(new WeakMap).current,x=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(!e||e===g.current)return;g.current=e;let t=function(e){let t=new Set,r=e.parentElement;for(;r;)t.add(r),r=r.parentElement;return t}(e);c(e=>{let r=new Set(e),n=!1;for(let e of t)r.has(e)||(r.add(e),n=!0);return n?r:e}),requestAnimationFrame(()=>{let e=h.current?.querySelector(".retune-tree-node.selected");e?.scrollIntoView({block:"nearest",behavior:"smooth"})})},[e]);let b=(0,l.useCallback)(e=>{c(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),v=(0,l.useCallback)(()=>{let e=x.current;e&&(e.siblingRects=e.siblings.map(e=>{let t=m.get(e);return t?t.getBoundingClientRect():new DOMRect}))},[m]),y=(0,l.useCallback)((e,t,r)=>{let{tag:n,qualifier:l,component:i}=rt(e),o=document.createElement("div");o.className="retune-tree-ghost";let a=n;l&&(a+=l),i&&(a+=` <${i}>`),o.textContent=a,o.style.left=`${t+12}px`,o.style.top=`${r-12}px`;let s=h.current?.getRootNode();return s instanceof ShadowRoot?s.appendChild(o):h.current?.appendChild(o),o},[]),C=(0,l.useCallback)(()=>{let e=document.createElement("div");return e.className="retune-tree-drop-indicator",f.current?.appendChild(e),e},[]),w=(0,l.useCallback)((e,t,r)=>{let n,l=x.current;if(!l||!f.current)return;let i=f.current.getBoundingClientRect();if(0!==l.siblingRects.length){if(t<=0)n=l.siblingRects[0].top-i.top-1;else if(t>=l.siblings.length)n=l.siblingRects[l.siblingRects.length-1].bottom-i.top-1;else{let e=l.siblingRects[t-1],r=l.siblingRects[t];n=(e.bottom+r.top)/2-i.top-1}e.style.display="block",e.style.top=`${n}px`,e.style.left=`${12+16*r}px`}},[]),k=(0,l.useCallback)(()=>{let e=x.current;if(!e)return;e.ghost&&e.ghost.remove(),e.indicator&&(e.indicator.style.display="none",e.indicator.remove()),e.highlightedNode&&e.highlightedNode.classList.remove("reparent-target"),e.expandTimer&&clearTimeout(e.expandTimer);let t=m.get(e.element);t&&t.classList.remove("dragging"),e.scrollRaf&&cancelAnimationFrame(e.scrollRaf),x.current=null,p(!1)},[m]),j=(0,l.useCallback)(e=>{let t=h.current?.getRootNode();if(!(t instanceof ShadowRoot))return null;let r=t.elementFromPoint(e.clientX,e.clientY),n=r?.closest?.("[data-retune-tree-key]");if(!n)return null;let l=parseInt(n.getAttribute("data-retune-tree-key")||"",10);if(isNaN(l))return null;let i=t3.get(l);return i?{element:i,treeNode:n}:null},[]),S=(0,l.useCallback)(e=>{let t=0,r=e.parentElement;for(;r&&r!==document.body;)t++,r=r.parentElement;return t},[]),R=(0,l.useCallback)(e=>{let r=x.current;if(!r)return;let l=e.clientX-r.startX,i=e.clientY-r.startY;if(!r.active){if(Math.abs(l)+Math.abs(i)<5)return;r.active=!0,p(!0),t(r.element);let n=u.has(r.element);r.wasExpanded=n,n?(c(e=>{let t=new Set(e);return t.delete(r.element),t}),requestAnimationFrame(()=>{v()})):v();let o=m.get(r.element);o&&o.classList.add("dragging"),r.ghost=y(r.element,e.clientX,e.clientY),r.indicator=C();return}if(!r.element.isConnected){k(),document.removeEventListener("pointermove",R,!0),document.removeEventListener("pointerup",L,!0);return}r.ghost&&(r.ghost.style.left=`${e.clientX+12}px`,r.ghost.style.top=`${e.clientY-12}px`),r.highlightedNode&&(r.highlightedNode.classList.remove("reparent-target"),r.highlightedNode=null);let o=j(e);if(!o||o.element===r.element||function(e,t){let r=t.parentElement;for(;r;){if(r===e)return!0;r=r.parentElement}return!1}(r.element,o.element))r.indicator&&(r.indicator.style.display="none"),r.mode=null,r.reparentTarget=null,r.expandTimer&&(clearTimeout(r.expandTimer),r.expandTimer=null),r.lastHoverKey=null;else{let t=o.element.parentElement;if(t===r.parentElement){r.mode="reorder",r.reparentTarget=null,r.expandTimer&&(clearTimeout(r.expandTimer),r.expandTimer=null),r.lastHoverKey=null;let t=function(e,t){for(let r=0;r<t.length;r++)if(e<t[r].top+t[r].height/2)return r;return t.length}(e.clientY,r.siblingRects);if(r.dropIndex=t,r.indicator){let e=t>r.dragIndex?t+1:t;w(r.indicator,e,r.siblingDepth)}}else{let l=o.treeNode.getBoundingClientRect(),i=(e.clientY-l.top)/l.height,a=S(o.element);if(i<.25&&t){if(r.mode="reparent",r.reparentTarget=t,r.reparentIndex=re(t,n).indexOf(o.element),-1===r.reparentIndex&&(r.reparentIndex=0),r.indicator){let e=f.current?.getBoundingClientRect();e&&(r.indicator.style.display="block",r.indicator.style.top=`${l.top-e.top-1}px`,r.indicator.style.left=`${12+16*a}px`)}}else if(i>.75&&t){if(r.mode="reparent",r.reparentTarget=t,r.reparentIndex=re(t,n).indexOf(o.element)+1,r.indicator){let e=f.current?.getBoundingClientRect();e&&(r.indicator.style.display="block",r.indicator.style.top=`${l.bottom-e.top-1}px`,r.indicator.style.left=`${12+16*a}px`)}}else r.mode="reparent",r.reparentTarget=o.element,r.reparentIndex=re(o.element,n).length,r.indicator&&(r.indicator.style.display="none"),o.treeNode.classList.add("reparent-target"),r.highlightedNode=o.treeNode;let s=t8(o.element);s!==r.lastHoverKey&&(r.expandTimer&&clearTimeout(r.expandTimer),r.lastHoverKey=s,re(o.element,n).length>0&&!u.has(o.element)&&(r.expandTimer=setTimeout(()=>{c(e=>{let t=new Set(e);return t.add(o.element),t})},500)))}}let a=h.current;if(a){let t=a.getBoundingClientRect(),r=e.clientY-t.top,n=t.bottom-e.clientY;r<30&&a.scrollTop>0?(a.scrollTop-=8*(1-r/30),v()):n<30&&(a.scrollTop+=8*(1-n/30),v())}},[u,m,v,y,C,w,k,j,S,n]),L=(0,l.useCallback)(e=>{document.removeEventListener("pointermove",R,!0),document.removeEventListener("pointerup",L,!0);let r=x.current;if(!r)return;if(!r.active){t(r.element),x.current=null;return}let{element:n,dragIndex:l,dropIndex:i,mode:o,reparentTarget:u,reparentIndex:d,wasExpanded:p}=r;k(),"reparent"===o&&u&&s?s(n,u,d):"reorder"===o&&i!==l&&a?a(n,l,i):p&&c(e=>{let t=new Set(e);return t.add(n),t})},[t,a,s,k,R]),N=(0,l.useCallback)((e,t)=>{if(!a&&!s)return;let r=t.parentElement;if(!r)return;let l=re(r,n),i=l.indexOf(t);if(-1===i)return;e.preventDefault(),e.stopPropagation();let o=0,u=r;for(;u&&u!==document.body;)o++,u=u.parentElement;x.current={element:t,parentElement:r,siblings:l,siblingRects:[],siblingDepth:o,dragIndex:i,dropIndex:i,startX:e.clientX,startY:e.clientY,active:!1,wasExpanded:!1,ghost:null,indicator:null,scrollRaf:null,mode:null,reparentTarget:null,reparentIndex:0,expandTimer:null,lastHoverKey:null,highlightedNode:null},document.addEventListener("pointermove",R,!0),document.addEventListener("pointerup",L,!0)},[a,s,n,R,L]),$="u">typeof document?re(document.body,void 0,i):[];return(0,o.jsx)("div",{className:"retune-tree",ref:h,children:(0,o.jsx)("div",{className:"retune-tree-inner",ref:f,children:$.map(l=>(0,o.jsx)(rr,{element:l,depth:0,selectedElement:e,expandedSet:u,visualOrderMap:n,reparentEntries:i,onToggle:b,onSelect:t,onHover:r,onDragStart:N,isDragging:d,treeNodeRefs:m},t8(l)))})})}var rl="u">typeof navigator&&/Mac|iPhone|iPad|iPod/.test(navigator.userAgent),ri=rl?"⌘":"Ctrl",ro=[{label:"Undo",keys:[ri,"Z"]},{label:"Redo",keys:[ri,"⇧","Z"]},{label:"Select Child",keys:["Enter"]},{label:"Select Parent",keys:["⇧","Enter"]},{label:"Select Next Sibling",keys:["Tab"]},{label:"Select Previous Sibling",keys:["⇧","Tab"]},{label:"Reorder",keys:["↑","↓","←","→"]},{label:"Delete Element",keys:[rl?"⌫":"Del"]},{label:"Measure Spacing",keys:[rl?"⌥":"Alt","Hover"]}];function ra({children:e}){let t=e.length>1;return(0,o.jsx)("span",{className:`retune-key${t?" wide":""}`,children:e})}var rs=()=>(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{d:"M10 8L14 12L10 16",stroke:"currentColor",strokeOpacity:"0.35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ru=()=>(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",{d:"M14 8L10 12L14 16",stroke:"currentColor",strokeOpacity:"0.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),rc="130ms cubic-bezier(0.645, 0.045, 0.355, 1)",rd="130ms cubic-bezier(0.215, 0.61, 0.355, 1)";function rp({side:e,theme:t,onThemeChange:r,fidelity:n,onFidelityChange:i,onHide:a,exiting:s}){let[u,c]=(0,l.useState)("main"),d=(0,l.useRef)(null),p=(0,l.useCallback)(e=>{let t=d.current;if(!t)return void c(e);let r=t.offsetHeight;t.style.height=`${r}px`,t.style.transition="none",c(e),requestAnimationFrame(()=>{t.style.height="auto";let e=t.offsetHeight;t.style.height=`${r}px`,requestAnimationFrame(()=>{t.style.transition=`height ${rc}`,t.style.height=`${e}px`;let r=()=>{t.removeEventListener("transitionend",r),t.style.transition="",t.style.height=""};t.addEventListener("transitionend",r,{once:!0})})})},[]),h=(0,l.useCallback)((e,t)=>{r(t)},[r]),f=(0,l.useCallback)((e,t)=>{i(t)},[i]),g="main"===u;return(0,o.jsx)("div",{ref:d,className:`retune-settings-panel ${e}${s?" exiting":""}`,children:(0,o.jsxs)("div",{className:"retune-settings-clip",children:[(0,o.jsxs)("div",{className:"retune-settings-view-container",style:{opacity:+!!g,transition:`opacity ${g?rd:rc}${g?" 30ms":""}`,pointerEvents:g?"auto":"none",position:g?"relative":"absolute",top:0,left:0,right:0},children:[(0,o.jsx)("div",{className:"retune-settings-header",children:(0,o.jsx)("span",{className:"retune-settings-title",children:"Settings"})}),(0,o.jsxs)("div",{className:"retune-settings-body",children:[(0,o.jsxs)("div",{className:"retune-settings-row",children:[(0,o.jsx)("span",{className:"retune-settings-label",children:"Theme"}),(0,o.jsx)("div",{style:{width:96},children:(0,o.jsx)(eJ,{prop:"theme",value:t,options:["system","light","dark"],onChange:h})})]}),(0,o.jsxs)("div",{className:"retune-settings-row",children:[(0,o.jsx)("span",{className:"retune-settings-label",children:"Output Detail"}),(0,o.jsx)("div",{style:{width:96},children:(0,o.jsx)(eJ,{prop:"fidelity",value:n,options:["minimal","standard","full"],onChange:f})})]}),(0,o.jsxs)("div",{className:"retune-settings-row",children:[(0,o.jsx)("span",{className:"retune-settings-label",children:"Hide Retune for this session"}),(0,o.jsx)("div",{className:"retune-switch-wrap",children:(0,o.jsx)("button",{className:"retune-switch",onClick:a,children:(0,o.jsx)("span",{className:"retune-switch-knob"})})})]}),(0,o.jsxs)("div",{className:"retune-settings-row clickable",onClick:()=>p("shortcuts"),children:[(0,o.jsx)("span",{className:"retune-settings-label",children:"Keyboard shortcuts"}),(0,o.jsx)(rs,{})]})]})]}),(0,o.jsxs)("div",{className:"retune-settings-view-container",style:{opacity:+!g,transition:`opacity ${!g?rd:rc}${!g?" 30ms":""}`,pointerEvents:g?"none":"auto",position:g?"absolute":"relative",top:0,left:0,right:0},children:[(0,o.jsxs)("div",{className:"retune-settings-header retune-settings-back",onClick:()=>p("main"),children:[(0,o.jsx)(ru,{}),(0,o.jsx)("span",{className:"retune-settings-title",style:{padding:"8px 0"},children:"Keyboard shortcuts"})]}),(0,o.jsx)("div",{className:"retune-settings-body",children:ro.map(e=>(0,o.jsxs)("div",{className:"retune-settings-row",children:[(0,o.jsx)("span",{className:"retune-settings-label",children:e.label}),(0,o.jsx)("div",{className:"retune-key-group",children:e.keys.map((e,t)=>(0,o.jsx)(ra,{children:e},t))})]},e.label))})]})]})})}var rh=({children:e,size:t=24,ariaLabel:r,color:n,ariaHidden:i=!0,style:o,...a})=>l.default.createElement("svg",{...a,"aria-hidden":i,role:i?void 0:"img",width:"number"==typeof t?`${t}px`:t,height:"number"==typeof t?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:n,...o}},r&&!i&&l.default.createElement("title",null,r),e),rf=e=>l.default.createElement(rh,{...e,ariaLabel:"cursor-click, arrow, clickbait"},l.default.createElement("path",{d:"M11 2.75V4.5M16.9069 5.09326L15.5962 6.40392M6.40381 15.5962L5.09315 16.9069M4.5 11H2.75M6.40381 6.40381L5.09315 5.09315M14.1323 20.999L10.3851 10.7984C10.2362 10.3929 10.6368 10.0021 11.0385 10.1611L21.0397 14.1199C21.4283 14.2737 21.4679 14.8081 21.1062 15.0175L17.3654 17.1832C17.2898 17.227 17.227 17.2898 17.1832 17.3654L15.0343 21.0771C14.822 21.4438 14.2784 21.3967 14.1323 20.999Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),rg=({children:e,size:t=24,ariaLabel:r,color:n,ariaHidden:i=!0,style:o,...a})=>l.default.createElement("svg",{...a,"aria-hidden":i,role:i?void 0:"img",width:"number"==typeof t?`${t}px`:t,height:"number"==typeof t?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:n,...o}},r&&!i&&l.default.createElement("title",null,r),e),rm=e=>l.default.createElement(rg,{...e,ariaLabel:"square-behind-square-1, copy 1, layers, pages"},l.default.createElement("path",{d:"M15.25 8.75V4C15.25 3.30964 14.6904 2.75 14 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V14C2.75 14.6904 3.30964 15.25 4 15.25H8.75M10 8.75H20C20.6904 8.75 21.25 9.30964 21.25 10V20C21.25 20.6904 20.6904 21.25 20 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20V10C8.75 9.30964 9.30964 8.75 10 8.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),rx=({children:e,size:t=24,ariaLabel:r,color:n,ariaHidden:i=!0,style:o,...a})=>l.default.createElement("svg",{...a,"aria-hidden":i,role:i?void 0:"img",width:"number"==typeof t?`${t}px`:t,height:"number"==typeof t?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:n,...o}},r&&!i&&l.default.createElement("title",null,r),e),rb=e=>l.default.createElement(rx,{...e,ariaLabel:"cross-medium, crossed medium, close"},l.default.createElement("path",{d:"M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),rv=({children:e,size:t=24,ariaLabel:r,color:n,ariaHidden:i=!0,style:o,...a})=>l.default.createElement("svg",{...a,"aria-hidden":i,role:i?void 0:"img",width:"number"==typeof t?`${t}px`:t,height:"number"==typeof t?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:n,...o}},r&&!i&&l.default.createElement("title",null,r),e),ry=e=>l.default.createElement(rv,{...e,ariaLabel:"broom, brush, clear, clean"},l.default.createElement("path",{d:"M11.3819 8.76362C10.4178 8.23201 9.20537 8.57956 8.66923 9.54116C8.4097 10.0066 8.15016 10.4721 7.89062 10.9376L18.1482 16.5903C18.405 16.1299 18.6618 15.6695 18.9184 15.2091C19.4571 14.2425 19.1063 13.0228 18.1372 12.4885L11.3819 8.76362Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M12.9883 9.00512L15.8934 3.92207C16.5242 2.81843 17.9311 2.42534 19.0478 3.04074C20.1729 3.66076 20.5795 5.07016 19.9558 6.18872L17.0911 11.3267",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M8.92867 11.8184C7.2347 13.8083 5.31367 14.409 2.75 13.8659C3.77941 20.6894 15.6222 25.1274 16.652 16.4253",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"})),rC=({children:e,size:t=24,ariaLabel:r,color:n,ariaHidden:i=!0,style:o,...a})=>l.default.createElement("svg",{...a,"aria-hidden":i,role:i?void 0:"img",width:"number"==typeof t?`${t}px`:t,height:"number"==typeof t?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:n,...o}},r&&!i&&l.default.createElement("title",null,r),e),rw=e=>l.default.createElement(rC,{...e,ariaLabel:"check-circle-2, done, confirm, save, success"},l.default.createElement("circle",{cx:"12",cy:"12",r:"9.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M7.75 12.9231L10.5625 15.75L15.25 8.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),rk=({children:e,size:t=24,ariaLabel:r,color:n,ariaHidden:i=!0,style:o,...a})=>l.default.createElement("svg",{...a,"aria-hidden":i,role:i?void 0:"img",width:"number"==typeof t?`${t}px`:t,height:"number"==typeof t?`${t}px`:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:n,...o}},r&&!i&&l.default.createElement("title",null,r),e),rj=e=>l.default.createElement(rk,{...e,ariaLabel:"settings-gear-2, preferences"},l.default.createElement("path",{d:"M7.878 5.21415L7.17474 5.05186C6.58003 4.91462 5.95657 5.09343 5.525 5.525C5.09343 5.95657 4.91462 6.58003 5.05186 7.17474L5.21415 7.878C5.40122 8.6886 5.06696 9.53036 4.37477 9.99182L3.51965 10.5619C3.03881 10.8825 2.75 11.4221 2.75 12C2.75 12.5779 3.03881 13.1175 3.51965 13.4381L4.37477 14.0082C5.06696 14.4696 5.40122 15.3114 5.21415 16.122L5.05186 16.8253C4.91462 17.42 5.09343 18.0434 5.525 18.475C5.95657 18.9066 6.58003 19.0854 7.17474 18.9481L7.878 18.7858C8.6886 18.5988 9.53036 18.933 9.99182 19.6252L10.5619 20.4804C10.8825 20.9612 11.4221 21.25 12 21.25C12.5779 21.25 13.1175 20.9612 13.4381 20.4804L14.0082 19.6252C14.4696 18.933 15.3114 18.5988 16.122 18.7858L16.8253 18.9481C17.42 19.0854 18.0434 18.9066 18.475 18.475C18.9066 18.0434 19.0854 17.42 18.9481 16.8253L18.7858 16.122C18.5988 15.3114 18.933 14.4696 19.6252 14.0082L20.4804 13.4381C20.9612 13.1175 21.25 12.5779 21.25 12C21.25 11.4221 20.9612 10.8825 20.4804 10.5619L19.6252 9.99182C18.933 9.53036 18.5988 8.6886 18.7858 7.878L18.9481 7.17473C19.0854 6.58003 18.9066 5.95657 18.475 5.525C18.0434 5.09343 17.42 4.91462 16.8253 5.05186L16.122 5.21415C15.3114 5.40122 14.4696 5.06696 14.0082 4.37477L13.4381 3.51965C13.1175 3.03881 12.5779 2.75 12 2.75C11.4221 2.75 10.8825 3.03881 10.5619 3.51965L9.99182 4.37477C9.53036 5.06696 8.6886 5.40122 7.878 5.21415Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}));function rS(e,t,r){let n=`rgba(${e}, ${t}, ${r}, 0.5)`;return`repeating-linear-gradient(-45deg, transparent, transparent 3px, ${n} 3px, ${n} 4px)`}var rR=rS(13,153,255),rL=rS(255,168,36),rN=rS(255,77,157);function r$(e,t,r){let n=parseFloat(t.paddingTop)||0,l=parseFloat(t.paddingRight)||0,i=parseFloat(t.paddingBottom)||0,o=parseFloat(t.paddingLeft)||0;switch(e){case"Top":return n>0?{top:r.top,left:r.left,width:r.width,height:n}:null;case"Bottom":return i>0?{top:r.bottom-i,left:r.left,width:r.width,height:i}:null;case"Left":return o>0?{top:r.top,left:r.left,width:o,height:r.height}:null;case"Right":return l>0?{top:r.top,left:r.right-l,width:l,height:r.height}:null}}function rM(e,t,r){let n=parseFloat(t.marginTop)||0,l=parseFloat(t.marginRight)||0,i=parseFloat(t.marginBottom)||0,o=parseFloat(t.marginLeft)||0;switch(e){case"Top":return n>0?{top:r.top-n,left:r.left-o,width:r.width+o+l,height:n}:null;case"Bottom":return i>0?{top:r.bottom,left:r.left-o,width:r.width+o+l,height:i}:null;case"Left":return o>0?{top:r.top,left:r.left-o,width:o,height:r.height}:null;case"Right":return l>0?{top:r.top,left:r.right,width:l,height:r.height}:null}}function rE({element:e,hoveredProperty:t,revision:r}){let{rects:n,color:i}=(0,l.useMemo)(()=>{if(!t||!e)return{rects:[],color:rR};let r=getComputedStyle(e),n=e.getBoundingClientRect();if("paddingBlock"===t||"paddingInline"===t)return{rects:("paddingBlock"===t?["Top","Bottom"]:["Left","Right"]).map(e=>r$(e,r,n)).filter(Boolean),color:rR};if("marginBlock"===t||"marginInline"===t)return{rects:("marginBlock"===t?["Top","Bottom"]:["Left","Right"]).map(e=>rM(e,r,n)).filter(Boolean),color:rL};if(t.startsWith("padding")){let e=r$(t.replace("padding",""),r,n);return{rects:e?[e]:[],color:rR}}if(t.startsWith("margin")){let e=rM(t.replace("margin",""),r,n);return{rects:e?[e]:[],color:rL}}{let n=function(e,t){let r=[],n=t.display,l=n.includes("flex"),i=n.includes("grid");if(!l&&!i)return r;let o=Array.from(e.children).filter(e=>{let t=getComputedStyle(e);return"static"===t.position||"relative"===t.position});if(o.length<=1)return r;let a=e.getBoundingClientRect();if(l){let e=(t.flexDirection||"row").startsWith("column");for(let t=0;t<o.length-1;t++){let n=o[t].getBoundingClientRect(),l=o[t+1].getBoundingClientRect(),i=getComputedStyle(o[t]),s=getComputedStyle(o[t+1]);if(e){let e=parseFloat(i.marginBottom)||0,t=parseFloat(s.marginTop)||0,o=n.bottom+e,u=l.top-t;u>o+.5&&r.push({top:o,left:a.left,width:a.width,height:u-o})}else{let e=parseFloat(i.marginRight)||0,t=parseFloat(s.marginLeft)||0,o=n.right+e,u=l.left-t;u>o+.5&&r.push({top:a.top,left:o,width:u-o,height:a.height})}}return r}let s=[...o].sort((e,t)=>{let r=e.getBoundingClientRect(),n=t.getBoundingClientRect();return r.top-n.top||r.left-n.left}),u=[],c=[],d=-1/0;for(let e of s){let t=e.getBoundingClientRect();t.top>d+5?(c.length>0&&u.push(c),c=[e],d=t.top):c.push(e)}for(let e of(c.length>0&&u.push(c),u))for(let t=0;t<e.length-1;t++){let n=e[t].getBoundingClientRect(),l=e[t+1].getBoundingClientRect(),i=parseFloat(getComputedStyle(e[t]).marginRight)||0,o=parseFloat(getComputedStyle(e[t+1]).marginLeft)||0,s=n.right+i,u=l.left-o;u>s+.5&&r.push({top:a.top,left:s,width:u-s,height:a.height})}for(let e=0;e<u.length-1;e++){let t=u[e],n=u[e+1],l=Math.max(...t.map(e=>e.getBoundingClientRect().bottom+(parseFloat(getComputedStyle(e).marginBottom)||0))),i=Math.min(...n.map(e=>e.getBoundingClientRect().top-(parseFloat(getComputedStyle(e).marginTop)||0)));i>l+.5&&r.push({top:l,left:a.left,width:a.width,height:i-l})}return r.filter((e,t)=>{for(let n=0;n<t;n++){let t=r[n];if(1>Math.abs(e.top-t.top)&&1>Math.abs(e.left-t.left)&&1>Math.abs(e.width-t.width)&&1>Math.abs(e.height-t.height))return!1}return!0})}(e,r);return{rects:"gap"===t?n:"columnGap"===t?(r.flexDirection||"row").startsWith("column")?n.filter(e=>e.width>=e.height):n.filter(e=>e.height>=e.width):(r.flexDirection||"row").startsWith("column")?n.filter(e=>e.height>=e.width):n.filter(e=>e.width>=e.height),color:rN}}},[e,t,r]);return 0===n.length?null:(0,o.jsx)(o.Fragment,{children:n.map((e,t)=>(0,o.jsx)("div",{className:"retune-box-model-rect",style:{position:"fixed",top:e.top,left:e.left,width:e.width,height:e.height,background:i,pointerEvents:"none",zIndex:0x7ffffffd}},t))})}var rA={port:9223,hotkey:"alt+d",fidelity:"standard",position:"bottom-right",force:!1},rT="__retune_bridge";function rV({visible:e,children:t}){let[r,n]=(0,l.useState)("hidden"),i=(0,l.useRef)(!1),a=(0,l.useRef)(t);if(e&&(a.current=t),e&&!i.current?(i.current=!0,n("entering")):!e&&i.current&&(i.current=!1,n("exiting")),(0,l.useEffect)(()=>{if("entering"===r){let e=setTimeout(()=>n("visible"),150);return()=>clearTimeout(e)}if("exiting"===r){let e=setTimeout(()=>n("hidden"),150);return()=>clearTimeout(e)}},[r]),"hidden"===r)return null;let s="entering"===r?"entering":"exiting"===r?"exiting":"";return(0,o.jsx)("div",{className:`retune-panel-anim ${s}`,children:a.current})}var rH={btn:"Button",nav:"Navigation",col:"Column",img:"Image",sm:"Small",md:"Medium",lg:"Large",xs:"Extra Small",xl:"Extra Large",hdr:"Header",ftr:"Footer",cta:"Call to Action",desc:"Description",msg:"Message",info:"Information",bg:"Background",txt:"Text",pg:"Page",sec:"Section",el:"Element",opt:"Option",val:"Value",err:"Error",warn:"Warning",num:"Number",prev:"Previous",curr:"Current",temp:"Temporary"};function rP(e){return e.split("-").map(e=>rH[e]||e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function rB(e,t){let r=e.length>0?e[e.length-1].count:1/0;for(let n of t)n.count>=r||n.count<=1||e.some(e=>e.count===n.count&&e.selector===n.fullSelector)||e.push({label:n.label,selector:n.fullSelector,count:n.count,kind:"ancestor"})}function rF(e={}){if(void 0!==t.default,!e.force)return null;let[r,n]=(0,l.useState)(()=>"u"<typeof window||window.innerWidth>=768);return((0,l.useEffect)(()=>{let e=window.matchMedia("(min-width: 768px)"),t=e=>n(e.matches);return n(e.matches),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),r)?(0,o.jsx)(rz,{...e}):null}function rz(t){let n={...rA,...t},[u,f]=(0,l.useState)(!1),[g,m]=(0,l.useState)(null),[b,C]=(0,l.useState)(0),[j,R]=(0,l.useState)(!1),[N,$]=(0,l.useState)(!1),[M,E]=(0,l.useState)(()=>{try{let e=localStorage.getItem("retune-fidelity");if("minimal"===e||"standard"===e||"full"===e)return e}catch{}return n.fidelity}),A=(0,l.useCallback)(e=>{E(e);try{localStorage.setItem("retune-fidelity",e)}catch{}},[]),T=(0,l.useRef)(M);T.current=M;let[V,H]=(0,l.useState)(!1),[P,B]=(0,l.useState)(null),[I,D]=(0,l.useState)(0),[O,W]=(0,l.useState)(void 0),[Z,_]=(0,l.useState)(null),[X,U]=(0,l.useState)(null),[Y,q]=(0,l.useState)(!1),[K,G]=(0,l.useState)(!1),[J,Q]=(0,l.useState)(!1),ee=(0,l.useRef)(null),et=(0,l.useRef)(null),[er,en]=(0,l.useState)("design"),[el,ei]=(0,l.useState)(!1),[eo,ea]=(0,l.useState)(!1),[es,eu]=(0,l.useState)(!1),ec=(0,l.useRef)(null),[ed,ep]=(0,l.useState)(()=>{try{let e=localStorage.getItem("retune-theme");if("system"===e||"light"===e||"dark"===e)return e}catch{}return"system"}),eh=(0,l.useCallback)(e=>{ep(e);try{localStorage.setItem("retune-theme",e)}catch{}},[]);(0,l.useEffect)(()=>{if(!Z)return;let e=Z.getRootNode(),t=e instanceof ShadowRoot?e.host:null;if(!t)return;let r="dark"===ed||"system"===ed&&window.matchMedia("(prefers-color-scheme: dark)").matches;if(t.classList.toggle("dark",r),"system"===ed){let e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>t.classList.toggle("dark",e.matches);return e.addEventListener("change",r),()=>e.removeEventListener("change",r)}},[ed,Z]);let[ef,eg]=(0,l.useState)(()=>{try{let e=localStorage.getItem("retune-panel-side");if("left"===e||"right"===e)return e}catch{}return n.position.includes("right")?"right":"left"}),em=(0,l.useRef)(null),ex=(0,l.useRef)(null),eb=(0,l.useRef)(null),ev=(0,l.useRef)(null),[ey,eC]=(0,l.useState)(!1),[ew,ek]=(0,l.useState)(!1),[ej,eS]=(0,l.useState)([]),eR=(0,l.useRef)([]),eL=(0,l.useRef)([]),eN=(0,l.useRef)(!0),[e$,eM]=(0,l.useState)([]),[eE,eA]=(0,l.useState)([]),[eT,eV]=(0,l.useState)(0),eH=(0,l.useRef)(0);eH.current=eT;let eP=(0,l.useRef)([]);eP.current=eE;let eB=eE[eT]?.selector??null,eF=(0,l.useRef)(null);eF.current=eB;let[ez,eI]=(0,l.useState)({}),[eD,eO]=(0,l.useState)(null),eW=(0,l.useRef)(null);eW.current=eD;let eZ=(0,l.useRef)(null),e_=(0,l.useRef)(null),eX=(0,l.useRef)(null),eU=(0,l.useRef)(null),eY=(0,l.useRef)(new c),eq=(0,l.useRef)(null),eK=(0,l.useRef)(null);eK.current=g;let eG=(0,l.useRef)(()=>{}),eJ=(0,l.useRef)(()=>{});(0,l.useEffect)(()=>{let t=function(){if(!document.querySelector("link[data-retune-font]")){let e=document.createElement("link");e.rel="preconnect",e.href="https://rsms.me/",document.head.appendChild(e);let t=document.createElement("link");t.rel="stylesheet",t.href="https://rsms.me/inter/inter.css",t.setAttribute("data-retune-font",""),document.head.appendChild(t)}let e=document.createElement("div");e.setAttribute("data-retune-host",""),e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 2147483647;
    pointer-events: none;
  `;let t=e.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(a),t.adoptedStyleSheets=[r];let n=document.createElement("div");for(let r of(n.setAttribute("data-retune-container",""),t.appendChild(n),["click","pointerdown","mousedown","focusin","focusout"]))e.addEventListener(r,t=>{t.composedPath()[0]!==e&&t.stopPropagation()});return document.documentElement.appendChild(e),{host:e,root:t,container:n,sheet:r}}();eZ.current=t,_(t.container);let l=new p;eX.current=l;let i=new h;eU.current=i;let o=function(e){let t=window[rT];if(t)return t;let r=new y(e);return window[rT]=r,r}(n.port);if(eq.current=o,o.onRequest(async(t,r)=>{let n=eU.current,l=eX.current;switch(t){case"getSelection":{let e=eK.current;if(!e)return null;let{element:t,rect:r,reactProps:n,...l}=e;return{...l,rect:{top:r.top,left:r.left,width:r.width,height:r.height}}}case"getPendingChanges":return n.getPendingChanges();case"getCollapsedChanges":return n.getPendingChanges().map(e=>({...e,changes:v(e.changes)}));case"getEnrichedChanges":{let{scanDesignTokens:t}=await e.A(87351),{enrichPropertyChanges:r}=await e.A(79042),l=t();return n.getPendingChanges().map(e=>({...e,changes:r(v(e.changes),l,e.selector)}))}case"getFormattedChanges":return x(n.getPendingChanges(),r?.fidelity||T.current);case"clearChanges":for(let[,e]of(tp.current=[],th.current=[],tf.current=[],tg.current=[],tw.current=[],tk.current=[],tj.current=new WeakMap,tS.current))for(let[t,r]of e)r?t.style.order=r:t.style.removeProperty("order");for(let[,e]of(tS.current.clear(),tL.current))for(let[t]of e)t.style.removeProperty("translate"),t.style.removeProperty("transition"),t.getAttribute("style")?.trim()===""&&t.removeAttribute("style");if(tL.current.clear(),tR.current=new WeakMap,eW.current){let e=eQ.current,t=eK.current?.element;if(t?.style&&e.props.length>0){for(let r of e.props){let e=r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);t.style.removeProperty(e)}t.getAttribute("style")?.trim()===""&&t.removeAttribute("style")}eQ.current={selector:"",props:[]},eO(null),eW.current=null}return l.clearAll(),n.clear(),m(null),eK.current=null,e_.current?.clearSelection(),eG.current(),D(e=>e+1),{ok:!0};default:throw Error(`Unknown method: ${t}`)}}),o.onUpdate(e=>U(e)),o.connect(),i.restore()){l.attach();let e=[];for(let t of i.getPendingChanges())for(let r of t.changes)if("__delete"===r.property)try{let e=document.querySelector(t.selector);if(e){let t=e.parentNode;t&&(tp.current.push({element:e,parent:t,nextSibling:e.nextSibling}),e.remove())}}catch{}else if("__reorder"===r.property)try{let e=document.querySelector(t.selector);if(e?.parentElement){let t=e.parentElement,n=Array.from(t.children),l=n.indexOf(e),i=parseInt(r.to);if(!isNaN(i)&&l!==i){let r=getComputedStyle(t).display,l="flex"===r||"inline-flex"===r,o="grid"===r||"inline-grid"===r,a=l||o?"order":"translate";if(tR.current.has(t)||tR.current.set(t,a),"order"===a){tA(t);let r=tM(t),l=r.indexOf(e);if(-1!==l){let[e]=r.splice(l,1);r.splice(Math.min(i,r.length),0,e);let t=n.map(e=>({element:e,prevOrder:e.style.order,prevTranslate:""}));for(let e=0;e<r.length;e++)r[e].style.order=String(e);tw.current.push(t)}}else{tT(t),tN.current.has(t)||tN.current.set(t,[...n]);let r=tN.current.get(t),l=r.indexOf(e);if(-1!==l){let e=n.map(e=>({element:e,prevOrder:"",prevTranslate:e.style.translate||""})),[o]=r.splice(l,1);r.splice(Math.min(i,r.length),0,o),tV(t),tw.current.push(e)}}}}}catch{}else if("__text"===r.property)try{let e=document.querySelector(t.selector);if(e){let t=e.innerHTML;null===e.querySelector("*")&&(e.innerHTML=r.to.replace(/\n/g,"<br>"),tf.current.push({element:e,originalHTML:t,newHTML:e.innerHTML}))}}catch{}else if("__reparent"===r.property)try{let n=document.querySelector(t.selector);if(!n)continue;let l=r.to.lastIndexOf("@");if(-1===l)continue;let i=r.to.slice(0,l),o=parseInt(r.to.slice(l+1),10),a=document.querySelector(i);if(!a||n.parentElement===a)continue;let s=n.parentElement;if(!s)continue;let u=n.nextElementSibling,c=Array.from(a.children),d=o<c.length?c[o]:null;d?a.insertBefore(n,d):a.appendChild(n);let p=new MutationObserver(e=>{for(let t of e)if("childList"===t.type){if(t.target===s){for(let e of t.addedNodes)if(e instanceof Element&&e!==n&&e.tagName===n.tagName&&e.className===n.className&&e.textContent===n.textContent)try{s.removeChild(e)}catch{}}if(t.target===a){for(let e of t.removedNodes)if(e===n&&!n.parentElement)try{let e=Array.from(a.children),t=o<e.length?e[o]:null;t?a.insertBefore(n,t):a.appendChild(n)}catch{}}}});p.observe(s,{childList:!0}),p.observe(a,{childList:!0}),eR.current.push({element:n,oldParent:s,oldNextSibling:u,newParent:a,observer:p}),e.push({element:n,newParent:a,insertIndex:o})}catch{}else l.applyChange(t.selector,r.property,r.to);e.length>0&&eS(e),C(i.getPendingChanges().filter(e=>!e.changes.some(e=>"__bulkOf"===e.property)).length),R(i.canUndo),$(i.canRedo)}let u=function(e,t){let r=document.createElement("div");r.setAttribute("data-retune-highlight",""),e.appendChild(r);let n=document.createElement("div");n.setAttribute("data-retune-label",""),e.appendChild(n);let l=document.createElement("div");l.setAttribute("data-retune-selection",""),e.appendChild(l);let i=document.createElement("div");i.setAttribute("data-retune-selection-label",""),e.appendChild(i);let o=document.createElement("div");o.setAttribute("data-retune-parent-indicator",""),o.style.cssText=`
    position:fixed;display:none;pointer-events:none;z-index:2147483644;
    border:1px dotted #0D99FF;background:none;border-radius:0;
  `,e.appendChild(o);let a=[];for(let t=0;t<20;t++){let t=document.createElement("div");t.style.cssText=`
      position:fixed;display:none;pointer-events:none;z-index:2147483644;
      border:1px dotted #0D99FF;background:none;
    `,e.appendChild(t),a.push(t)}function u(e){let t=Array.from(e.children).filter(e=>{if(e.hasAttribute("data-retune-host"))return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility}),r=0;for(let e of t){if(r>=a.length)break;let t=e.getBoundingClientRect();if(0===t.width||0===t.height)continue;let n=a[r++];n.style.top=`${t.top}px`,n.style.left=`${t.left}px`,n.style.width=`${t.width}px`,n.style.height=`${t.height}px`,n.style.display="block"}for(let e=r;e<a.length;e++)a[e].style.display="none"}function c(){for(let e of a)e.style.display="none"}let d=[];for(let t=0;t<50;t++){let t=document.createElement("div");t.style.cssText=`
      position:fixed;display:none;pointer-events:none;z-index:2147483643;
      border:1px solid #0D99FF;background:none;
    `,e.appendChild(t),d.push(t)}let p=[];function h(){let e=0;for(let t of p){if(e>=d.length)break;let r=t.getBoundingClientRect();if(0===r.width||0===r.height)continue;let n=d[e++];n.style.top=`${r.top}px`,n.style.left=`${r.left}px`,n.style.width=`${r.width}px`,n.style.height=`${r.height}px`,n.style.display="block"}for(let t=e;t<d.length;t++)d[t].style.display="none"}function f(){for(let e of(p=[],d))e.style.display="none"}let g={};for(let t of["top","right","bottom","left"]){let r=document.createElement("div");r.style.cssText="position:fixed;display:none;pointer-events:none;z-index:2147483644;",e.appendChild(r),g[t]=r}function m(e){let t={top:!1,right:!1,bottom:!1,left:!1},r=getComputedStyle(e).position;if("absolute"!==r&&"fixed"!==r)return t;for(let r of["top","right","bottom","left"]){if(""!==e.style[r]){t[r]=!0;continue}try{for(let n of document.styleSheets){try{for(let l of n.cssRules)if(l instanceof CSSStyleRule&&e.matches(l.selectorText)){let e=l.style.getPropertyValue(r);if(e&&"auto"!==e){t[r]=!0;break}}}catch{}if(t[r])break}}catch{}}return t}function x(e,t,r){let n=e.left+e.width/2,l=e.top+e.height/2;r.top&&e.top>t.top?g.top.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${t.top}px;left:${n}px;
        width:0;height:${e.top-t.top}px;
        border-left:1px dashed #0D99FF;
      `:g.top.style.display="none",r.bottom&&t.bottom>e.bottom?g.bottom.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${e.bottom}px;left:${n}px;
        width:0;height:${t.bottom-e.bottom}px;
        border-left:1px dashed #0D99FF;
      `:g.bottom.style.display="none",r.left&&e.left>t.left?g.left.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${l}px;left:${t.left}px;
        width:${e.left-t.left}px;height:0;
        border-top:1px dashed #0D99FF;
      `:g.left.style.display="none",r.right&&t.right>e.right?g.right.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        top:${l}px;left:${e.right}px;
        width:${t.right-e.right}px;height:0;
        border-top:1px dashed #0D99FF;
      `:g.right.style.display="none"}function b(){for(let e of Object.values(g))e.style.display="none"}let v=null;function y(){if(!j)return;let e=j.parentElement;if(!e||e===document.body||e===document.documentElement)return;let t=j.getBoundingClientRect(),r=e.getBoundingClientRect(),n=v||m(j);n.top||n.right||n.bottom||n.left?x(t,r,n):b()}let C=!1,w=!1,k=null,j=null,S=null,R=null,L=null,N={top:0,left:0,width:0,height:0},$={x:0,y:0},M=[],E=-1;function A(e,t){e.style.cssText=`
      position: fixed;
      pointer-events: none;
      z-index: 2147483644;
      box-sizing: border-box;
      display: none;
      outline: none;
    `,t.style.cssText=`
      position: fixed;
      color: white;
      font-size: 11px;
      font-family: InterVariable, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      font-feature-settings: 'liga' 1, 'calt' 1, 'zero' 0, 'tnum' 0;
      padding: 2px 6px;
      border-radius: 3px;
      pointer-events: none;
      z-index: 2147483646;
      white-space: nowrap;
      display: none;
    `}A(r,n),A(l,i);let T=["nw","ne","se","sw"],V=["n","e","s","w"],H=[...T,...V],P={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"},B={nw:{dx:-1,dy:-1},n:{dx:0,dy:-1},ne:{dx:1,dy:-1},e:{dx:1,dy:0},se:{dx:1,dy:1},s:{dx:0,dy:1},sw:{dx:-1,dy:1},w:{dx:-1,dy:0}},F={};for(let t of T){let r=document.createElement("div");r.style.cssText=`
      position:fixed;pointer-events:auto;display:none;box-sizing:border-box;
      width:8px;height:8px;
      background:#fff;border:1px solid #0D99FF;border-radius:1px;
      z-index:2147483645;cursor:${P[t]};
    `,e.appendChild(r),F[t]=r}for(let t of V){let r=document.createElement("div");r.style.cssText=`
      position:fixed;pointer-events:auto;display:none;
      z-index:2147483645;cursor:${P[t]};
    `,e.appendChild(r),F[t]=r}function z(e){let t={nw:{x:e.left,y:e.top},ne:{x:e.right,y:e.top},se:{x:e.right,y:e.bottom},sw:{x:e.left,y:e.bottom}};for(let e of T){let r=F[e],n=t[e];r.style.left=`${n.x-4}px`,r.style.top=`${n.y-4}px`,r.style.display="block"}F.n.style.cssText+=`display:block;left:${e.left+4}px;top:${e.top-3}px;width:${e.width-8}px;height:6px;cursor:${P.n};`,F.s.style.cssText+=`display:block;left:${e.left+4}px;top:${e.bottom-3}px;width:${e.width-8}px;height:6px;cursor:${P.s};`,F.e.style.cssText+=`display:block;left:${e.right-3}px;top:${e.top+4}px;width:6px;height:${e.height-8}px;cursor:${P.e};`,F.w.style.cssText+=`display:block;left:${e.left-3}px;top:${e.top+4}px;width:6px;height:${e.height-8}px;cursor:${P.w};`}function I(){for(let e of H)F[e].style.display="none"}let D=[];for(let t=0;t<16;t++){let t=document.createElement("div");t.className="retune-snap-guide",e.appendChild(t);let r=document.createElement("div");r.className="retune-snap-label",e.appendChild(r),D.push({line:t,label:r})}let O=null;function W(e,t){let r=0,n=t.length-1,l=null,i=6;for(;r<=n;){let o=r+n>>1,a=Math.abs(t[o]-e);a<i&&(i=a,l=t[o]),t[o]<e?r=o+1:n=o-1}return i<=5?l:null}function Z(e,t,r){if(!O)return{width:e,height:t,guides:[],fillWidth:!1,fillHeight:!1};let n=[],l=!1,i=!1;if(0!==r.dx){let t=O.canFillWidth&&5>=Math.abs(e-O.parentWidth)?O.parentWidth:null;if(null!==t)e=t,l=!0,n.push({axis:"x",value:t,ref:t,fill:!0});else{let t=W(e,O.siblingWidths);if(null!==t){e=t;let r=O.siblingRects.find(e=>Math.round(e.width)===t);n.push({axis:"x",value:t,ref:t,refRect:r})}}}if(0!==r.dy){let e=O.canFillHeight&&5>=Math.abs(t-O.parentHeight)?O.parentHeight:null;if(null!==e)t=e,i=!0,n.push({axis:"y",value:e,ref:e,fill:!0});else{let e=W(t,O.siblingHeights);if(null!==e){t=e;let r=O.siblingRects.find(t=>Math.round(t.height)===e);n.push({axis:"y",value:e,ref:e,refRect:r})}}}return{width:e,height:t,guides:n,fillWidth:l,fillHeight:i}}function _(e,t,r){e.style.cssText=`
      position:fixed;pointer-events:none;z-index:2147483645;
      top:${r-4}px;left:${t-4}px;
      width:8px;height:8px;
      background:none;
    `,e.style.backgroundImage="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cline x1='2' y1='2' x2='6' y2='6' stroke='%23F24822' stroke-width='1'/%3E%3Cline x1='6' y1='2' x2='2' y2='6' stroke='%23F24822' stroke-width='1'/%3E%3C/svg%3E\")",e.style.backgroundSize="contain"}function X(){for(let e of D)e.line.classList.remove("visible"),e.label.classList.remove("visible")}let U=null;function Y(e){if(!U)return{dx:0,dy:0,guides:[]};let t={top:e.top,right:e.right,bottom:e.bottom,left:e.left,centerX:e.left+e.width/2,centerY:e.top+e.height/2},r=[],n=[],l=U.parentEdges,i={top:l.top,right:l.right,bottom:l.bottom,left:l.left};for(let e of(r.push({val:l.left,isCenter:!1,...i},{val:l.right,isCenter:!1,...i},{val:l.centerX,isCenter:!0,...i}),n.push({val:l.top,isCenter:!1,...i},{val:l.bottom,isCenter:!1,...i},{val:l.centerY,isCenter:!0,...i}),U.siblingEdges)){let t={top:e.top,right:e.right,bottom:e.bottom,left:e.left};r.push({val:e.left,isCenter:!1,...t},{val:e.right,isCenter:!1,...t},{val:e.centerX,isCenter:!0,...t}),n.push({val:e.top,isCenter:!1,...t},{val:e.bottom,isCenter:!1,...t},{val:e.centerY,isCenter:!0,...t})}let o=[{val:t.left,isCenter:!1},{val:t.right,isCenter:!1},{val:t.centerX,isCenter:!0}],a=0,s=6,u=0,c=null,d=!1;for(let e of r)for(let t of o){let r=Math.abs(t.val-e.val);r<s&&(s=r,a=e.val-t.val,u=e.val,c=e,d=t.isCenter)}let p=[{val:t.top,isCenter:!1},{val:t.bottom,isCenter:!1},{val:t.centerY,isCenter:!0}],h=0,f=6,g=0,m=null,x=!1;for(let e of n)for(let t of p){let r=Math.abs(t.val-e.val);r<f&&(f=r,h=e.val-t.val,g=e.val,m=e,x=t.isCenter)}let b=[],v=s<=5?a:0,y=f<=5?h:0;return(0!==v||s<=5)&&c&&b.push({axis:"x",pos:u,elIsCenter:d,refIsCenter:c.isCenter,refTop:c.top,refRight:c.right,refBottom:c.bottom,refLeft:c.left}),(0!==y||f<=5)&&m&&b.push({axis:"y",pos:g,elIsCenter:x,refIsCenter:m.isCenter,refTop:m.top,refRight:m.right,refBottom:m.bottom,refLeft:m.left}),{dx:v,dy:y,guides:b}}let q=null;function K(e){if(!q)return{width:0,height:0};let t=B[q.handle],r=e.clientX-q.startX,n=e.clientY-q.startY,l=0!==t.dx?Math.max(10,q.startWidth+r*t.dx):q.startWidth,i=0!==t.dy?Math.max(10,q.startHeight+n*t.dy):q.startHeight;if(e.shiftKey&&0!==t.dx&&0!==t.dy&&q.startWidth>0&&q.startHeight>0){let e=q.startWidth/q.startHeight;l/e<i?i=l/e:l=i*e}return{width:Math.round(l),height:Math.round(i)}}function G(e){if(!q||!j)return;e.preventDefault();let r=K(e),n=B[q.handle],{width:a,height:s,guides:u,fillWidth:c,fillHeight:d}=Z(r.width,r.height,n),p=j;0!==n.dx&&t.onResizePreview?.(j,"width",c?"100%":`${a}px`),0!==n.dy&&t.onResizePreview?.(j,"height",d?"100%":`${s}px`),0!==n.dx&&p.style.setProperty("width",c?"100%":`${a}px`,"important"),0!==n.dy&&p.style.setProperty("height",d?"100%":`${s}px`,"important");let f=j.getBoundingClientRect();ew(l,i,f,"solid","0"),z(f),i.textContent=eR(j),u.length>0?function(e,t){for(let e of D)e.line.classList.remove("visible"),e.label.classList.remove("visible"),e.label.style.display="";let r=B[t],n=0;for(let t of e)if(t.fill&&O?.parentRect){let e=O.parentRect,l=O.parentPadding,i="x"===t.axis?l.left>0||l.right>0:l.top>0||l.bottom>0;if(o.style.cssText=`
          position:fixed;display:block;pointer-events:none;z-index:2147483644;
          border:1px dotted #0D99FF;background:none;
          top:${e.top}px;left:${e.left}px;width:${e.width}px;height:${e.height}px;
        `,i){let r="repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(13, 153, 255, 0.5) 3px, rgba(13, 153, 255, 0.5) 4px)";if("x"===t.axis){if(l.left>0&&n<D.length){let t=D[n++];t.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${e.top}px;left:${e.left}px;width:${l.left}px;height:${e.height}px;background:${r};`,t.line.classList.add("visible")}if(l.right>0&&n<D.length){let t=D[n++];t.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${e.top}px;left:${e.right-l.right}px;width:${l.right}px;height:${e.height}px;background:${r};`,t.line.classList.add("visible")}}else{if(l.top>0&&n<D.length){let t=D[n++];t.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${e.top}px;left:${e.left}px;width:${e.width}px;height:${l.top}px;background:${r};`,t.line.classList.add("visible")}if(l.bottom>0&&n<D.length){let t=D[n++];t.line.style.cssText=`position:fixed;pointer-events:none;z-index:2147483645;top:${e.bottom-l.bottom}px;left:${e.left}px;width:${e.width}px;height:${l.bottom}px;background:${r};`,t.line.classList.add("visible")}}}else if("x"===t.axis){let t="right"==(r.dx>0?"right":"left")?e.right:e.left;if(n<D.length){let r=D[n++];_(r.line,t,e.top),r.line.classList.add("visible")}if(n<D.length){let r=D[n++];_(r.line,t,e.bottom),r.line.classList.add("visible")}}else{let t="bottom"==(r.dy>0?"bottom":"top")?e.bottom:e.top;if(n<D.length){let r=D[n++];_(r.line,e.left,t),r.line.classList.add("visible")}if(n<D.length){let r=D[n++];_(r.line,e.right,t),r.line.classList.add("visible")}}}else{let e=t.refRect;if(!e||n+1>=D.length)continue;if("x"===t.axis){let t="right"==(r.dx>0?"right":"left")?e.right:e.left,l=D[n++];_(l.line,t,e.top),l.line.classList.add("visible");let i=D[n++];_(i.line,t,e.bottom),i.line.classList.add("visible")}else{let t="bottom"==(r.dy>0?"bottom":"top")?e.bottom:e.top,l=D[n++];_(l.line,e.left,t),l.line.classList.add("visible");let i=D[n++];_(i.line,e.right,t),i.line.classList.add("visible")}}}(u,q.handle):X(),y(),h()}function J(e){if(!q||!j){q=null;return}let r=K(e),n=B[q.handle],{width:o,height:a,fillWidth:s,fillHeight:u}=Z(r.width,r.height,n),c=j;X(),O=null;let d=0!==n.dx&&(s||Math.abs(o-q.startWidth)>.5),p=0!==n.dy&&(u||Math.abs(a-q.startHeight)>.5);d&&(c.style.removeProperty("width"),t.onResize?.(j,"width",s?"100%":`${o}px`)),p&&(c.style.removeProperty("height"),t.onResize?.(j,"height",u?"100%":`${a}px`)),q=null,document.removeEventListener("pointermove",G,!0),document.removeEventListener("pointerup",J,!0);let h=j.getBoundingClientRect();ew(l,i,h,"solid","0"),z(h),i.textContent=eR(j),y()}for(let e of H)F[e].addEventListener("pointerdown",t=>(function(e,t){var r;let n,l,i,o,a,u,c,d,p,h,f,g;if(!j)return;e.stopPropagation(),e.preventDefault(),e.target.setPointerCapture(e.pointerId),eL();let m=j.getBoundingClientRect();q={handle:t,startX:e.clientX,startY:e.clientY,startWidth:m.width,startHeight:m.height},i=[...new Set((l=((n=(r=j).parentElement)?Array.from(n.children).filter(e=>e!==r&&"SCRIPT"!==e.tagName&&"STYLE"!==e.tagName):[]).map(e=>e.getBoundingClientRect())).map(e=>Math.round(e.width)))].sort((e,t)=>e-t),o=[...new Set(l.map(e=>Math.round(e.height)))].sort((e,t)=>e-t),a=n?n.getBoundingClientRect():null,u=n?getComputedStyle(n):null,c=a&&u?a.width-parseFloat(u.paddingLeft)-parseFloat(u.paddingRight)-parseFloat(u.borderLeftWidth)-parseFloat(u.borderRightWidth):0,d=a&&u?a.height-parseFloat(u.paddingTop)-parseFloat(u.paddingBottom)-parseFloat(u.borderTopWidth)-parseFloat(u.borderBottomWidth):0,p=u?{top:parseFloat(u.paddingTop)||0,right:parseFloat(u.paddingRight)||0,bottom:parseFloat(u.paddingBottom)||0,left:parseFloat(u.paddingLeft)||0}:{top:0,right:0,bottom:0,left:0},f=(h=u?.display||"").includes("flex"),O={siblingWidths:i,siblingHeights:o,siblingRects:l,parentRect:a,parentWidth:Math.round(c),parentHeight:Math.round(d),parentPadding:p,canFillWidth:s("width",g={isFlexChild:f,isGridChild:h.includes("grid"),parentFlexDir:u?.flexDirection||"row",currentStyles:{}}),canFillHeight:s("height",g)},document.addEventListener("pointermove",G,!0),document.addEventListener("pointerup",J,!0)})(t,e));let Q=null,ee=null;function et(e){let t=getComputedStyle(e).position;return"absolute"===t||"fixed"===t}function er(e){if(!ee||!j)return;e.preventDefault();let r=e.clientX-ee.startX,n=e.clientY-ee.startY,l=j,i=ee.startRect,a=new DOMRect(i.left+r,i.top+n,i.width,i.height),s=Y(a),u=s.dx,c=s.dy;if(s.guides.length>0){let e=new DOMRect(a.left+s.dx,a.top+s.dy,a.width,a.height);!function(e,t){X();let r=0;function n(e,t){if(r>=D.length)return;let n=D[r++];_(n.line,e,t),n.line.classList.add("visible")}for(let l of e){if(r>=D.length)break;let{line:e}=D[r++];if("x"===l.axis){e.style.cssText=`
          position:fixed;pointer-events:none;z-index:2147483645;background:none;
          top:0;left:${l.pos}px;width:0;height:100vh;
          border-left:1px solid var(--retune-red);
        `,e.classList.add("visible");let r=l.pos+.5;l.refIsCenter?n(r,(l.refTop+l.refBottom)/2):(n(r,l.refTop),n(r,l.refBottom)),l.elIsCenter?n(r,t.top+t.height/2):(n(r,t.top),n(r,t.bottom))}else{e.style.cssText=`
          position:fixed;pointer-events:none;z-index:2147483645;background:none;
          top:${l.pos}px;left:0;width:100vw;height:0;
          border-top:1px solid var(--retune-red);
        `,e.classList.add("visible");let r=l.pos+.5;l.refIsCenter?n((l.refLeft+l.refRight)/2,r):(n(l.refLeft,r),n(l.refRight,r)),l.elIsCenter?n(t.left+t.width/2,r):(n(t.left,r),n(t.right,r))}}}(s.guides,e)}else X();if(Q?.useBottom){let e=Math.round(ee.startBottom-n-c);l.style.setProperty("bottom",`${e}px`,"important"),t.onRepositionPreview?.(j,"bottom",`${e}px`)}else{let e=Math.round(ee.startTop+n+c);l.style.setProperty("top",`${e}px`,"important"),t.onRepositionPreview?.(j,"top",`${e}px`)}if(Q?.useRight){let e=Math.round(ee.startRight-r-u);l.style.setProperty("right",`${e}px`,"important"),t.onRepositionPreview?.(j,"right",`${e}px`)}else{let e=Math.round(ee.startLeft+r+u);l.style.setProperty("left",`${e}px`,"important"),t.onRepositionPreview?.(j,"left",`${e}px`)}let d=j.parentElement;if(d&&d!==document.body&&d!==document.documentElement){let e=d.getBoundingClientRect();o.style.top=`${e.top}px`,o.style.left=`${e.left}px`,o.style.width=`${e.width}px`,o.style.height=`${e.height}px`}y()}function en(e){if(!ee||!j){ee=null;return}let r=e.clientX-ee.startX,n=e.clientY-ee.startY,o=j,a=ee.startRect,s=Y(new DOMRect(a.left+r,a.top+n,a.width,a.height));Q?.useBottom?o.style.removeProperty("bottom"):o.style.removeProperty("top"),Q?.useRight?o.style.removeProperty("right"):o.style.removeProperty("left");let u=n+s.dy,c=r+s.dx;Math.abs(u)>.5&&(Q?.useBottom?t.onReposition?.(j,"bottom",`${Math.round(ee.startBottom-u)}px`):t.onReposition?.(j,"top",`${Math.round(ee.startTop+u)}px`)),Math.abs(c)>.5&&(Q?.useRight?t.onReposition?.(j,"right",`${Math.round(ee.startRight-c)}px`):t.onReposition?.(j,"left",`${Math.round(ee.startLeft+c)}px`)),ee=null,U=null,X(),document.removeEventListener("pointermove",er,!0),document.removeEventListener("pointerup",en,!0);let d=j.getBoundingClientRect();ew(l,i,d,"solid","0"),z(d),i.textContent=eR(j),y()}let el=null,ei=!1,eo=null;function ea(e){let t,r=e.parentElement;if(!r)return null;let n=getComputedStyle(e).position;if("absolute"===n||"fixed"===n)return null;let l=getComputedStyle(r).display,i="flex"===l||"inline-flex"===l,o="grid"===l||"inline-grid"===l;if(!i&&!o&&"block"!==l&&"inline-block"!==l&&"flow-root"!==l)return null;let a=Array.from(r.children).filter(e=>{let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"absolute"!==t.position&&"fixed"!==t.position});if(a.length<2||!a.includes(e))return null;if(i){let e=getComputedStyle(r).flexDirection;t="row"===e||"row-reverse"===e}else if(o)if(getComputedStyle(r).gridAutoFlow.startsWith("column"))t=!1;else if(a.length>=2){let e=a[0].getBoundingClientRect(),r=a[1].getBoundingClientRect();t=Math.abs(r.left-e.left)>Math.abs(r.top-e.top)}else t=!0;else t=!1;let s=[...a].sort((e,r)=>{let n=e.getBoundingClientRect(),l=r.getBoundingClientRect();return t?n.left-l.left:n.top-l.top}),u=s.indexOf(e);return -1===u?null:{parent:r,siblings:s,horizontal:t,index:u}}function es(e){e.reparentHighlight&&(e.reparentHighlight.style.display="none")}function eu(e){if(!eo||!j)return;e.preventDefault();let r=e.clientX-eo.startX,n=e.clientY-eo.startY;if(!eo.active){if(Math.abs(r)+Math.abs(n)<5)return;eo.active=!0,ei=!0,j!==eo.element&&(j=eo.element,t.onSelect(eo.element)),l.style.display="none",i.style.display="none",I();let e=eo.element,o=eo.startRect;e.style.visibility="hidden",document.body.style.userSelect="none",document.body.style.webkitUserSelect="none";let a=document.createElement("div");a.setAttribute("data-retune-drag-ghost",""),a.style.cssText=`
        position:fixed;pointer-events:none;z-index:2147483647;
        width:${o.width}px;height:${o.height}px;
        left:${o.left}px;top:${o.top}px;
        transition:none;overflow:hidden;opacity:0.85;
      `;let s=e.cloneNode(!0),u=getComputedStyle(e);for(let e of["font-family","font-size","font-weight","font-style","line-height","letter-spacing","color","background-color","background-image","background","padding","border","border-radius","text-align","text-decoration","text-transform","white-space","word-break","overflow-wrap","display","flex-direction","align-items","justify-content","gap","box-shadow","opacity"])s.style.setProperty(e,u.getPropertyValue(e));s.style.visibility="visible",s.style.position="static",s.style.translate="none",s.style.transform="none",s.style.margin="0",s.style.width="100%",s.style.height="100%",s.style.boxSizing="border-box",a.appendChild(s),document.body.appendChild(a),eo.ghost=a;let c=eo.siblings.map(e=>e.getBoundingClientRect());eo.allRects=c;let d=[],p=[];for(let e=0;e<c.length;e++)e!==eo.dragIndex&&(d.push(c[e]),p.push(e));for(let e of(eo.otherRects=d,eo.otherIndices=p,p))eo.siblings[e].style.transition="transform 150ms ease-out";return}if(!eo.element.isConnected)return void ed();eo.ghost&&(eo.ghost.style.left=`${eo.startRect.left+r}px`,eo.ghost.style.top=`${eo.startRect.top+n}px`);let o=eo.parent.getBoundingClientRect();if("reparent"===eo.mode?e.clientX>=o.left&&e.clientX<=o.right&&e.clientY>=o.top&&e.clientY<=o.bottom:e.clientX>=o.left-10&&e.clientX<=o.right+10&&e.clientY>=o.top-10&&e.clientY<=o.bottom+10){"reparent"===eo.mode&&(eo.mode="reorder",eo.reparentTarget=null,es(eo));let t=function(e,t,r,n,l,i){let o=l?e:t,a=r.length;for(let e=0;e<r.length;e++)if(o<(l?r[e].left+r[e].width/2:r[e].top+r[e].height/2)){a=e;break}return a>=n.length?n.length>0?n[n.length-1]+1:i:n[a]}(e.clientX,e.clientY,eo.otherRects,eo.otherIndices,eo.horizontal,eo.dragIndex);if(t!==eo.dropIndex){let e;eo.dropIndex=t;let{siblings:r,dragIndex:n,allRects:l,horizontal:i}=eo;if(i)if(n<l.length-1)e=l[n+1].left-l[n].left;else{let t=n>0?l[n].left-l[n-1].right:0;e=l[n].width+t}else if(n<l.length-1)e=l[n+1].top-l[n].top;else{let t=n>0?l[n].top-l[n-1].bottom:0;e=l[n].height+t}for(let l=0;l<r.length;l++){if(l===n)continue;let o=r[l],a=0;n<t?l>n&&l<t&&(a=-e):n>t&&l>=t&&l<n&&(a=e),o.style.transform=0!==a?i?`translateX(${a}px)`:`translateY(${a}px)`:""}}}else{eo.mode="reparent";for(let e=0;e<eo.siblings.length;e++)e!==eo.dragIndex&&(eo.siblings[e].style.transform="");let t=function(e,t,r,n){let l=eo?.ghost;l&&(l.style.display="none"),r.style.visibility="";let i=document.elementFromPoint(e,t);if(r.style.visibility="hidden",l&&(l.style.display=""),!i||eE(i))return null;let o=i;for(;o;){if(o===r){o=o.parentElement;continue}if(o===n||o===document.body||o===document.documentElement)break;let l=getComputedStyle(o).display,i="flex"===l||"inline-flex"===l||"grid"===l||"inline-grid"===l||"block"===l||"inline-block"===l||"flow-root"===l,a=o.tagName;if(new Set(["INPUT","IMG","BR","HR","AREA","BASE","COL","EMBED","LINK","META","PARAM","SOURCE","TRACK","WBR","TEXTAREA","SELECT"]).has(a)){o=o.parentElement;continue}let s="flex"===l||"inline-flex"===l||"grid"===l||"inline-grid"===l;if(0===o.childElementCount&&(o.textContent?.trim().length??0)>0&&!s){o=o.parentElement;continue}if(i&&!function(e,t){let r=t.parentElement;for(;r;){if(r===e)return!0;r=r.parentElement}return!1}(r,o)){let r=Array.from(o.children).filter(e=>{let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility}),n=getComputedStyle(o).flexDirection,i=("flex"===l||"inline-flex"===l)&&("row"===n||"row-reverse"===n),a=r.length;for(let n=0;n<r.length;n++){let l=r[n].getBoundingClientRect(),o=i?l.left+l.width/2:l.top+l.height/2;if((i?e:t)<o){a=n;break}}return{target:o,insertIndex:a,horizontal:i}}o=o.parentElement}return null}(e.clientX,e.clientY,eo.element,eo.parent);t?(eo.reparentTarget=t.target,eo.reparentIndex=t.insertIndex,function(e,t,r,n){let l=n.reparentHighlight;l||((l=document.createElement("div")).setAttribute("data-retune-drag-ghost",""),l.style.cssText=`
        position:fixed;pointer-events:none;z-index:2147483646;
        border:1px solid #0D99FF;
        background:rgba(13,153,255,0.04);
      `,document.body.appendChild(l),n.reparentHighlight=l);let i=e.getBoundingClientRect();l.style.left=`${i.left}px`,l.style.top=`${i.top}px`,l.style.width=`${i.width}px`,l.style.height=`${i.height}px`,l.style.display="block";let o=l.querySelector("[data-retune-reparent-line]");o||((o=document.createElement("div")).setAttribute("data-retune-reparent-line",""),o.style.cssText="position:absolute;background:#0D99FF;pointer-events:none;border-radius:1px;",l.appendChild(o));let a=Math.max(3,Math.min(12,Math.round((r?i.height:i.width)*.03))),s=Array.from(e.children).filter(e=>{let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility});if(r){let e;if(0===s.length)e=i.left+4;else if(t<=0)e=s[0].getBoundingClientRect().left;else if(t>=s.length)e=s[s.length-1].getBoundingClientRect().right;else{let r=s[t-1].getBoundingClientRect(),n=s[t].getBoundingClientRect();e=(r.right+n.left)/2}o.style.left=`${e-i.left-1}px`,o.style.top=`${a}px`,o.style.width="2px",o.style.height=`${i.height-2*a}px`}else{let e;if(0===s.length)e=i.top+4;else if(t<=0)e=s[0].getBoundingClientRect().top;else if(t>=s.length)e=s[s.length-1].getBoundingClientRect().bottom;else{let r=s[t-1].getBoundingClientRect(),n=s[t].getBoundingClientRect();e=(r.bottom+n.top)/2}o.style.left=`${a}px`,o.style.top=`${e-i.top-1}px`,o.style.width=`${i.width-2*a}px`,o.style.height="2px"}}(t.target,t.insertIndex,t.horizontal,eo)):(eo.reparentTarget=null,es(eo))}}function ec(e){if(document.removeEventListener("pointermove",eu,!0),document.removeEventListener("pointerup",ec,!0),!eo)return;let{element:r,dragIndex:n,dropIndex:o,active:a,mode:s,reparentTarget:u,reparentIndex:c}=eo;if(a&&"reparent"===s&&u)ed(),t.onCanvasReparent?.(r,u,c),ei=!1,j&&ej();else if(a&&"reorder"===s&&n!==o)ed(),t.onCanvasReorder?.(r,n,o),ei=!1,j&&ej();else if(a)ed(),ei=!1,j&&ej();else{ed(),ei=!1;let n=e.clientX,o=e.clientY;el&&clearTimeout(el),el=setTimeout(()=>{el=null,l.style.display="none",i.style.display="none",I();let e=document.elementFromPoint(n,o);e&&e!==r&&!e.hasAttribute("data-retune-host")?(j=e,R&&(R.disconnect(),R.observe(e)),ej(),eL(),k=null,t.onSelect(e)):(l.style.display="",i.style.display="",ej())},200)}}function ed(){if(!eo)return;eo.ghost&&eo.ghost.remove(),eo.reparentHighlight&&eo.reparentHighlight.remove(),document.body.style.removeProperty("user-select"),document.body.style.removeProperty("-webkit-user-select");let e=eo.element;e.style.removeProperty("visibility"),e.getAttribute("style")?.trim()===""&&e.removeAttribute("style");for(let e=0;e<eo.siblings.length;e++){if(e===eo.dragIndex)continue;let t=eo.siblings[e];t.style.transition="none",t.style.removeProperty("transform"),t.style.removeProperty("transition"),t.getAttribute("style")?.trim()===""&&t.removeAttribute("style")}eo=null}l.addEventListener("pointerdown",e=>{if(!j)return;if(et(j))return void function(e){if(!j||!et(j))return;e.stopPropagation(),e.preventDefault(),l.setPointerCapture(e.pointerId),eL(),l.style.display="none",i.style.display="none",I();let t=j,r=getComputedStyle(t);if(!Q){let e=t.style.top,n=t.style.bottom,l=t.style.left,i=t.style.right,o=!1,a=!1;if(""!==n||""!==e)o=""!==n&&""===e;else try{let e=[...document.styleSheets].flatMap(e=>{try{return[...e.cssRules]}catch{return[]}}).filter(e=>e instanceof CSSStyleRule),n=e.some(e=>t.matches(e.selectorText)&&e.style.bottom&&"auto"!==e.style.bottom),l=e.some(e=>t.matches(e.selectorText)&&e.style.top&&"auto"!==e.style.top);o=!!n&&!l||(!!n||!l)&&parseFloat(r.bottom)<parseFloat(r.top)}catch{o=parseFloat(r.bottom)<parseFloat(r.top)}if(""!==i||""!==l)a=""!==i&&""===l;else try{let e=[...document.styleSheets].flatMap(e=>{try{return[...e.cssRules]}catch{return[]}}).filter(e=>e instanceof CSSStyleRule),n=e.some(e=>t.matches(e.selectorText)&&e.style.right&&"auto"!==e.style.right),l=e.some(e=>t.matches(e.selectorText)&&e.style.left&&"auto"!==e.style.left);a=!!n&&!l||(!!n||!l)&&parseFloat(r.right)<parseFloat(r.left)}catch{a=parseFloat(r.right)<parseFloat(r.left)}Q={useBottom:o,useRight:a}}ee={startX:e.clientX,startY:e.clientY,startTop:parseFloat(r.top)||0,startLeft:parseFloat(r.left)||0,startRight:parseFloat(r.right)||0,startBottom:parseFloat(r.bottom)||0,startRect:j.getBoundingClientRect()},function(e){let t=e.parentElement;if(!t){U=null;return}let r=t.getBoundingClientRect(),n=getComputedStyle(t),l=parseFloat(n.borderTopWidth)||0,i=parseFloat(n.borderRightWidth)||0,o=parseFloat(n.borderBottomWidth)||0,a=parseFloat(n.borderLeftWidth)||0,s=parseFloat(n.paddingTop)||0,u=parseFloat(n.paddingRight)||0,c=parseFloat(n.paddingBottom)||0,d=parseFloat(n.paddingLeft)||0,p=r.top+l+s,h=r.right-i-u,f=r.bottom-o-c,g=r.left+a+d;U={parentEdges:{top:p,right:h,bottom:f,left:g,centerX:(g+h)/2,centerY:(p+f)/2},siblingEdges:Array.from(t.children).filter(t=>t!==e&&"SCRIPT"!==t.tagName&&"STYLE"!==t.tagName).map(e=>{let t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,centerX:t.left+t.width/2,centerY:t.top+t.height/2}})}}(j),document.addEventListener("pointermove",er,!0),document.addEventListener("pointerup",en,!0)}(e);let t=ea(j);if(!t)return;e.preventDefault();let r=j.getBoundingClientRect();eo={element:j,parent:t.parent,siblings:t.siblings,otherRects:[],otherIndices:[],dragIndex:t.index,dropIndex:t.index,horizontal:t.horizontal,startX:e.clientX,startY:e.clientY,startRect:r,active:!1,ghost:null,mode:"reorder",reparentTarget:null,reparentIndex:0,reparentHighlight:null},document.addEventListener("pointermove",eu,!0),document.addEventListener("pointerup",ec,!0)}),l.addEventListener("dblclick",e=>{if(!j)return;e.preventDefault(),e.stopPropagation(),el&&(clearTimeout(el),el=null),l.style.display="none",i.style.display="none",I();let r=document.elementFromPoint(e.clientX,e.clientY);l.style.display="",i.style.display="",ej(),t.onDoubleClick?.(r||j)});let ep=document.createElement("div");ep.style.cssText="position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;z-index:2147483646;",e.appendChild(ep);let eh="position:fixed;pointer-events:none;display:none;",ef=`
    position:fixed;pointer-events:none;display:none;
    font-size:10px;font-weight:500;
    font-family:InterVariable,Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;
    color:#fff;white-space:nowrap;
    background:var(--retune-red);padding:1px 4px;border-radius:2px;
  `;function eg(){let e=document.createElement("div");e.style.cssText=eh;let t=document.createElement("div");t.style.cssText=eh;let r=document.createElement("div");return r.style.cssText=ef,ep.appendChild(e),ep.appendChild(t),ep.appendChild(r),{line:e,connector:t,label:r}}let em=eg(),ex=eg(),eb={top:eg(),right:eg(),bottom:eg(),left:eg()};function ev(){for(let e of[em,ex])e.line.style.display="none",e.connector.style.display="none",e.label.style.display="none";for(let e of Object.values(eb))e.line.style.display="none",e.connector.style.display="none",e.label.style.display="none"}function ey(e,t,r,n,l,i=!0){e.style.cssText=`
      position:fixed;pointer-events:none;display:block;
      top:${r}px;left:${t}px;
      width:${l?n:0}px;height:${l?0:n}px;
      border-${l?"top":"left"}:1px ${i?"dashed":"solid"} var(--retune-red);
    `}function eC(e,t,r,n,l,i){e.style.cssText=ef,e.style.display="block",e.textContent=`${t}`,i?(e.style.top=`${n-4}px`,e.style.left=`${r+l/2}px`,e.style.transform="translate(-50%, -100%)"):(e.style.top=`${n+l/2}px`,e.style.left=`${r+4}px`,e.style.transform="translateY(-50%)")}function ew(e,t,r,n,l){e.style.top=`${r.top}px`,e.style.left=`${r.left}px`,e.style.width=`${r.width}px`,e.style.height=`${r.height}px`,e.style.border=`1px ${n} #0D99FF`,e.style.background=`rgba(13, 153, 255, ${l})`,e.style.display="";let i=window.innerHeight,o=r.bottom+4+20<i?r.bottom+4:r.top-24;t.style.top=`${o}px`,t.style.left=`${r.left+r.width/2}px`,t.style.transform="translateX(-50%)",t.style.background="#0D99FF"}function ek(e){ew(r,n,e.getBoundingClientRect(),"solid","0"),n.style.display="none"}function ej(){if(!j||ei)return;let e=j.getBoundingClientRect();if(ew(l,i,e,"solid","0"),N={top:e.top,left:e.left,width:e.width,height:e.height},w){i.style.display="none",l.style.pointerEvents="none";return}i.style.display="",i.textContent=eR(j),z(e),j&&et(j)?(l.style.pointerEvents="auto",l.style.cursor="move"):j&&ea(j)?(l.style.pointerEvents="auto",l.style.cursor="grab"):(l.style.pointerEvents="none",l.style.cursor="");let t=j.parentElement;if(t&&t!==document.body&&t!==document.documentElement){let r=t.getBoundingClientRect();o.style.cssText=`
        position:fixed;display:block;pointer-events:none;z-index:2147483644;
        border:1px dotted #0D99FF;background:none;
        top:${r.top}px;left:${r.left}px;width:${r.width}px;height:${r.height}px;
      `;let n=m(j);v=n,n.top||n.right||n.bottom||n.left?x(e,r,n):b()}else o.style.display="none",v=null,b();h()}function eS(){if(!j||eo?.active)return;let e=j.getBoundingClientRect();if(e.top===N.top&&e.left===N.left&&e.width===N.width&&e.height===N.height||(l.style.top=`${e.top}px`,l.style.left=`${e.left}px`,l.style.width=`${e.width}px`,l.style.height=`${e.height}px`,N={top:e.top,left:e.left,width:e.width,height:e.height},w))return;let t=window.innerHeight,r=e.bottom+4+20<t?e.bottom+4:e.top-24;i.style.top=`${r}px`,i.style.left=`${e.left+e.width/2}px`,i.style.transform="translateX(-50%)",i.textContent=eR(j),z(e);let n=j.parentElement;if(n&&n!==document.body&&n!==document.documentElement&&"none"!==o.style.display){let t=n.getBoundingClientRect();o.style.top=`${t.top}px`,o.style.left=`${t.left}px`,o.style.width=`${t.width}px`,o.style.height=`${t.height}px`;let r=m(j);(r.top||r.right||r.bottom||r.left)&&x(e,t,r)}}function eR(e){var t,r;let n=e.getBoundingClientRect();return t=n.width,r=n.height,`${Math.round(t)} \xd7 ${Math.round(r)}`}function eL(){r.style.display="none",n.style.display="none",ev(),c()}function eN(){l.style.display="none",i.style.display="none",l.style.pointerEvents="none",l.style.cursor="",o.style.display="none",b(),v=null,Q=null,I()}function e$(){null===S&&(S=requestAnimationFrame(()=>{S=null,eS()}))}function eM(){e$(),h(),k&&(k=null,eL())}function eE(e){return!!e.closest("[data-retune-host]")||!!e.closest("[data-retune-drag-ghost]")}let eA=new Set(["BR","WBR","COL","COLGROUP","SOURCE","TRACK","AREA","PARAM"]);function eT(e){let t=e;for(;t&&eA.has(t.tagName);)t=t.parentElement;return t}function eV(e,r=!1){if(k=e,e===j)eL(),ev(),c(),i.style.display="";else if(ek(e),j)if(e.contains(j)){if(r){var n;let t,r,l,i,o,a,s,u,c,d,p,h,f,g,m,x;n=j.getBoundingClientRect(),ev(),t=getComputedStyle(e),r=e.getBoundingClientRect(),l=parseFloat(t.borderTopWidth)||0,i=parseFloat(t.borderRightWidth)||0,o=parseFloat(t.borderBottomWidth)||0,a=parseFloat(t.borderLeftWidth)||0,s=r.top+l,u=r.right-i,c=r.bottom-o,d=r.left+a,p=Math.round(n.top-s),h=Math.round(u-n.right),f=Math.round(c-n.bottom),g=Math.round(n.left-d),m=n.left+n.width/2,x=n.top+n.height/2,p>0&&(ey(eb.top.line,m,s,p,!1,!1),eC(eb.top.label,p,m,s,p,!1),eb.top.connector.style.display="none"),f>0&&(ey(eb.bottom.line,m,n.bottom,f,!1,!1),eC(eb.bottom.label,f,m,n.bottom,f,!1),eb.bottom.connector.style.display="none"),g>0&&(ey(eb.left.line,d,x,g,!0,!1),eC(eb.left.label,g,d,x,g,!0),eb.left.connector.style.display="none"),h>0&&(ey(eb.right.line,n.right,x,h,!0,!1),eC(eb.right.label,h,n.right,x,h,!0),eb.right.connector.style.display="none")}else ev();!function(e,t){let r=Array.from(e.children).filter(e=>{if(e===t||e.hasAttribute("data-retune-host"))return!1;let r=getComputedStyle(e);return"none"!==r.display&&"hidden"!==r.visibility}),n=0;for(let e of r){if(n>=a.length)break;let t=e.getBoundingClientRect();if(0===t.width||0===t.height)continue;let r=a[n++];r.style.top=`${t.top}px`,r.style.left=`${t.left}px`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`,r.style.display="block"}for(let e=n;e<a.length;e++)a[e].style.display="none"}(e,j)}else r?function(e,t){ev();let r=t.left+t.width/2>e.left+e.width/2,n=t.top+t.height/2>e.top+e.height/2,l=r?e.right:e.left,i=n?e.bottom:e.top,o=r?t.left:t.right,a=n?t.top:t.bottom,s=r?t.left-e.right:e.left-t.right,u=n?t.top-e.bottom:e.top-t.bottom,c=s>0?Math.round(s):0,d=u>0?Math.round(u):0;if(!(c<=0)||!(d<=0)){if(c>0){let r=e.top+e.height/2,i=Math.min(l,o);if(ey(em.line,i,r,c,!0,!1),eC(em.label,c,i,r,c,!0),r>=t.top&&r<=t.bottom)em.connector.style.display="none";else{let e=n?t.top:t.bottom,l=Math.min(r,e);ey(em.connector,o,l,Math.abs(e-r),!1)}}if(d>0){let n=e.left+e.width/2,l=Math.min(i,a);if(ey(ex.line,n,l,d,!1,!1),eC(ex.label,d,n,l,d,!1),n>=t.left&&n<=t.right)ex.connector.style.display="none";else{let e=r?t.left:t.right,l=Math.min(n,e);ey(ex.connector,l,a,Math.abs(e-n),!0)}}}}(j.getBoundingClientRect(),e.getBoundingClientRect()):ev(),u(e);else u(e);t.onHover(e,e.getBoundingClientRect())}function eH(t){if(!C||w||ee||q||eo)return;let a=e.elementFromPoint(t.clientX,t.clientY);if(a&&a.getRootNode()===e&&a!==l&&a!==i&&a!==r&&a!==n&&a!==o){k&&(k=null,eL());return}let s=l.style.pointerEvents;l.style.pointerEvents="none";let u=document.elementFromPoint(t.clientX,t.clientY);if(l.style.pointerEvents=s,!u||eE(u))return;let c=eT(u);!c||eE(c)||c!==k&&(L&&(clearTimeout(L),L=null),k&&c.contains(k)?L=setTimeout(()=>{L=null,document.elementFromPoint(t.clientX,t.clientY)===c&&eV(c,t.altKey)},50):eV(c,t.altKey))}function eP(e,t){let r=document.elementsFromPoint(e,t),n=[];for(let e of r){if(eE(e))continue;let t=eT(e);if(!(!t||eE(t))&&(!(n.length>0)||n[n.length-1]!==t)){if(t===document.documentElement)break;n.push(t)}}return n}function eB(r){if(!C)return;let n=r.composedPath(),l=e.host;if(n.includes(l))return;let i=e.elementFromPoint(r.clientX,r.clientY);if(i&&i.getRootNode()===e)return;r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation();let{clientX:o,clientY:a}=r;if(5>=Math.abs(o-$.x)&&5>=Math.abs(a-$.y)&&M.length>1?E=(M=eP(o,a)).length<=1?0:(E+1)%M.length:(M=eP(o,a),E=0,$={x:o,y:a}),0===M.length)return;let s=M[E];j=s,R&&(R.disconnect(),R.observe(s)),ej(),eL(),k=null,t.onSelect(s)}function eF(e){if(!C||!j)return;e.preventDefault(),e.stopPropagation(),el&&(clearTimeout(el),el=null);let r=l.style.display;l.style.display="none",i.style.display="none",I();let n=document.elementFromPoint(e.clientX,e.clientY);l.style.display=r,i.style.display="",j&&ej(),t.onDoubleClick?.(n||j)}function ez(r){if(C){if("Escape"===r.key){if(e.querySelector(".retune-floating-dialog"))return;r.preventDefault(),r.stopPropagation(),t.onCancel()}"Alt"===r.key&&k&&j&&eV(k,!0)}}function eI(e){C&&"Alt"===e.key&&k&&j&&eV(k,!1)}let eD=document.createElement("style");function eO(){C=!1,eD.textContent="",eD.remove(),k=null,j=null,M=[],E=-1,L&&(clearTimeout(L),L=null),eL(),eN(),null!==S&&(cancelAnimationFrame(S),S=null),window.removeEventListener("scroll",eM,!0),window.removeEventListener("resize",e$),R?.disconnect(),R=null,document.removeEventListener("mousemove",eH,!0),document.removeEventListener("click",eB,!0),document.removeEventListener("dblclick",eF,!0),document.removeEventListener("keydown",ez,!0),document.removeEventListener("keyup",eI,!0)}return eD.setAttribute("data-retune-cursor",""),{activate:function(){C=!0,eD.textContent="* { cursor: default !important; }",document.head.appendChild(eD),document.addEventListener("mousemove",eH,!0),document.addEventListener("click",eB,!0),document.addEventListener("dblclick",eF,!0),document.addEventListener("keydown",ez,!0),document.addEventListener("keyup",eI,!0),window.addEventListener("scroll",eM,{capture:!0,passive:!0}),window.addEventListener("resize",e$,{passive:!0}),R=new ResizeObserver(e$),j&&R.observe(j),eS()},deactivate:eO,destroy:function(){for(let e of(eO(),r.remove(),n.remove(),l.remove(),i.remove(),ep.remove(),o.remove(),Object.values(g)))e.remove();for(let e of D)e.line.remove(),e.label.remove();for(let e of H)F[e].remove()},hideHighlight:eL,clearSelection:function(){j=null,M=[],E=-1,eN(),f()},selectElement:function(e){j=e,R&&(R.disconnect(),R.observe(e)),ej(),eL(),k=null,t.onSelect(e)},highlightElement:function(e){e?ek(e):eL()},refreshSelection:ej,updatePinLines:function(e){if(v=e,!j)return;let t=j.getBoundingClientRect(),r=j.parentElement;if(!r||r===document.body||r===document.documentElement)return;let n=r.getBoundingClientRect();e.top||e.right||e.bottom||e.left?x(t,n,e):b()},suspend:function(){w=!0,eL(),i.style.display="none",l.style.pointerEvents="none",l.style.cursor="",o.style.display="none",b(),I(),eD.textContent=""},resume:function(){w=!1,eD.textContent="* { cursor: default !important; }",j&&ej()},showScopeHighlights:function(e,t){let r;try{r=Array.from(document.querySelectorAll(e))}catch{f();return}p=r.filter(e=>{if(e===t||e.closest("[data-retune-host]"))return!1;let r=getComputedStyle(e);return"none"!==r.display&&"hidden"!==r.visibility}),h()},hideScopeHighlights:f}}(t.root,{onHover:()=>{},onSelect:e=>{let t=S(e);eW.current&&e1(),eI(function(e){let t={};for(let r of document.styleSheets){let n;try{n=r.cssRules}catch{continue}!function r(n){for(let l=0;l<n.length;l++){let i=n[l];if(i instanceof CSSGroupingRule||"u">typeof CSSLayerBlockRule&&i instanceof CSSLayerBlockRule){r(i.cssRules);continue}if(!(i instanceof CSSStyleRule))continue;let o=i.selectorText;if(!(o.includes(":hover")||o.includes(":focus")||o.includes(":active"))){try{if(!e.matches(o))continue}catch{continue}for(let e=0;e<i.style.length;e++){let r=i.style[e];t[r.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())]={selector:o,value:i.style.getPropertyValue(r)}}}}}(n)}return t}(e));let n=(0,r.getSelectorCandidates)(e);eM(n);let o=(0,r.getAncestorScopes)(e),a=function(e,t,n=[]){let l=e.filter(e=>"semantic"===e.verdict);if(0===l.length){let e=function(e){let t;if(!e.classList||0===e.classList.length)return null;let n=[];for(let t of e.classList)(0,r.isHashedClass)(t)||n.push(t);if(0===n.length)return null;let l=n.sort().map(e=>`.${CSS.escape(e)}`).join("");try{t=document.querySelectorAll(l).length}catch{t=0}return t<=1?null:{label:"All instances",selector:l,count:t}}(t);if(e){let t=[e];return rB(t,n),t.push({label:"This instance",selector:null,count:1,kind:"element"}),t}let l=function(e){let t=e.tagName.toLowerCase(),n=e.parentElement;for(;n&&n!==document.body;){for(let e of n.classList){let n;if((0,r.isHashedClass)(e))continue;let{score:l}=(0,r.scoreNamePattern)(e);if(l>=.65)continue;let i=`.${CSS.escape(e)} ${t}`;try{n=document.querySelectorAll(i).length}catch{n=0}if(n>1&&n<=20)return{label:"All instances",selector:i,count:n}}n=n.parentElement}return null}(t);if(l){let e=[l];return rB(e,n),e.push({label:"This instance",selector:null,count:1,kind:"element"}),e}if(n.length>0){let e=[];return rB(e,n),e.push({label:"This instance",selector:null,count:1,kind:"element"}),e}return[{label:"This instance",selector:null,count:1,kind:"element"}]}let i=[],o=[];for(let e of l){let t,r=e.selector.replace(/^\./,""),n=o.length>0?o[o.length-1]:void 0;o.push(r);let l=o.slice().sort().map(e=>`.${CSS.escape(e)}`).join("");try{t=document.querySelectorAll(l).length}catch{t=0}i.push({label:r.includes("--")?rP(r.split("--").pop()):r.includes("__")?rP(r.split("__").pop()):n&&r.startsWith(n+"-")?rP(r.slice(n.length+1)):rP(r),selector:l,count:t,kind:"class"})}return rB(i,n),i.push({label:"This instance",selector:null,count:1,kind:"element"}),i}(n,e,o);eA(a),eP.current=a;let s=a.length>=2?a.length-2:0;eV(s),eH.current=s;let u=a[s]?.selector??null;eF.current=u;let c=a[s];c?.selector&&e_.current&&e_.current.showScopeHighlights(c.selector,e);let d=u&&u.includes(" ");if(u&&!d){let r=k(e,u);t.computedStyles=r.styles,W(r.ownedProperties)}else W(void 0);if(l)for(let r of l.getChanges()){if(/:(hover|focus|active)$/.test(r.selector))continue;let n=r.selector;try{e.matches(n)&&(t.computedStyles[r.property]=r.value)}catch{}}for(let e of(m(t),ei(!1),ea(!1),eu(!1),eK.current=t,i.track(t.selector,t.tagName,t.textContent,t.classes,t.reactComponents,t.computedStyles,t.sourceFile,t.stylingApproach,t.inlineStyles,t.elementId,t.accessibleName,t.parentContext,t.childSummary,t.domPath,t.nearbySiblings,t.position),a))e.selector&&i.track(e.selector,t.tagName,t.textContent,t.classes,t.reactComponents,t.computedStyles,t.sourceFile,t.stylingApproach,t.inlineStyles,t.elementId,t.accessibleName,t.parentContext,t.childSummary,t.domPath,t.nearbySiblings,t.position)},onDoubleClick:e=>{if(!e.textContent?.trim()||e.closest("[data-retune-host]")||e.hasAttribute("data-retune-host"))return;e_.current?.suspend();let t=e.textContent,n=e.innerHTML;e.contentEditable="true",e.style.outline="none",e.style.cursor="text",e.focus();let l=()=>{e.contentEditable="false",e.style.removeProperty("outline"),e.style.removeProperty("cursor"),e.removeEventListener("keydown",o),e.removeEventListener("blur",a),e_.current?.resume(),e_.current?.refreshSelection()},i=()=>{e.style.removeProperty("outline"),e.style.removeProperty("cursor"),e.getAttribute("style")?.trim()===""&&e.removeAttribute("style");let i=e.innerHTML.replace(/<br\s*\/?>/gi,"\n").replace(/<\/div><div>/gi,"\n").replace(/<\/p><p>/gi,"\n").replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim();if(i!==t){let l=(0,r.getSelector)(e),o=eU.current;if(o){let r=eK.current;o.track(l,e.tagName.toLowerCase(),t,Array.from(e.classList),r?.reactComponents??[],{__text:t||""},r?.sourceFile??null,r?.stylingApproach??void 0,null,e.id||null,null,null,null,r?.domPath??"",null,{x:0,y:0,width:0,height:0}),o.ensureOriginalValue(l,"__text",t||""),o.breakCoalescing(),o.recordChange(l,"__text",i),o.persist()}tf.current.push({element:e,originalHTML:n,newHTML:e.innerHTML}),tg.current=[],eG.current(),D(e=>e+1)}l()},o=t=>{if(t.stopPropagation(),"Escape"===t.key)t.preventDefault(),e.innerHTML=n,l();else if("Enter"===t.key){t.preventDefault();let e=window.getSelection();if(e&&e.rangeCount>0){let t=e.getRangeAt(0);t.deleteContents();let r=document.createElement("br");t.insertNode(r),t.setStartAfter(r),t.setEndAfter(r),e.removeAllRanges(),e.addRange(t)}}},a=()=>{setTimeout(i,100)};e.addEventListener("keydown",o),e.addEventListener("blur",a)},onResizePreview:(e,t,n)=>{let l=eX.current;if(!l)return;let i=eF.current??(0,r.getSelector)(e);l.applyChange(i,t,n);let o=eY.current;o.active||o.start(),o.set(t,n)},onResize:(e,t,n)=>{let l=eU.current,i=eX.current;if(!l||!i)return;let o=eF.current??(0,r.getSelector)(e),a=eK.current;a&&l.track(o,a.tagName,a.textContent,a.classes,a.reactComponents,a.computedStyles,a.sourceFile,a.stylingApproach,a.inlineStyles,a.elementId,a.accessibleName,a.parentContext,a.childSummary,a.domPath,a.nearbySiblings,a.position),l.recordChange(o,t,n),i.applyChange(o,t,n),eY.current.end(),eG.current(),eJ.current(),D(e=>e+1)},onRepositionPreview:(e,t,n)=>{let l=eX.current;if(!l)return;let i=eF.current??(0,r.getSelector)(e);l.applyChange(i,t,n);let o=eY.current;o.active||o.start(),o.set(t,n)},onReposition:(e,t,n)=>{let l=eU.current,i=eX.current;if(!l||!i)return;let o=eF.current??(0,r.getSelector)(e),a=eK.current;a&&l.track(o,a.tagName,a.textContent,a.classes,a.reactComponents,a.computedStyles,a.sourceFile,a.stylingApproach,a.inlineStyles,a.elementId,a.accessibleName,a.parentContext,a.childSummary,a.domPath,a.nearbySiblings,a.position),l.recordChange(o,t,n),i.applyChange(o,t,n),eY.current.end(),eG.current(),eJ.current(),D(e=>e+1)},onCanvasReorder:(e,t,r)=>{tF(e,t,r)},onCanvasReparent:(e,t,r)=>{tz(e,t,r)},onCancel:()=>{e5()}});return e_.current=u,()=>{u.destroy(),l.destroy(),t.host.remove()}},[]);let eQ=(0,l.useRef)({selector:"",props:[]}),e1=(0,l.useCallback)(()=>{let e=eK.current?.element,t=eQ.current;if(e?.style&&t.props.length>0){for(let r of t.props){let t=r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);e.style.removeProperty(t)}e.getAttribute("style")?.trim()===""&&e.removeAttribute("style")}eQ.current={selector:"",props:[]},eO(null),eW.current=null},[]),e0=(0,l.useCallback)(()=>{f(!0),e_.current?.activate(),eX.current?.attach()},[]),e5=(0,l.useCallback)(()=>{eW.current&&e1(),f(!1),m(null),eK.current=null,ei(!1),ea(!1),eu(!1),e_.current?.deactivate()},[e1]),e2=(0,l.useCallback)(()=>{f(e=>(e?(eW.current&&e1(),m(null),eK.current=null,ei(!1),ea(!1),eu(!1),e_.current?.deactivate()):(e_.current?.activate(),eX.current?.attach()),!e))},[e1]),e7=(0,l.useCallback)(()=>{let e=eU.current;e&&(C(e.getPendingChanges().filter(e=>!e.changes.some(e=>"__bulkOf"===e.property)).length),R(e.canUndo),$(e.canRedo),e.persist())},[]);eG.current=e7;let e6=(0,l.useRef)(!1),e4=(0,l.useCallback)(()=>{let e=eK.current?.element,t=eF.current,r=e&&t?k(e,t):null;e6.current||W(r?.ownedProperties),e6.current=!1,m(e=>{if(!e?.element)return e;let t=S(e.element);r&&(t.computedStyles=r.styles);let n=eX.current;if(n){let r=eW.current;if(eQ.current,r&&e.element)for(let[n,l]of Object.entries(w(e.element,r))){let e=n.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());t.computedStyles[e]=l}for(let l of n.getChanges()){let n=l.selector.match(/:(hover|focus|active)$/),i=n?n[0]:null,o=l.selector.replace(/:(hover|focus|active)$/g,"");if((r||!i)&&(!r||!i||i===r))try{e.element.matches(o)&&(t.computedStyles[l.property]=l.value)}catch{}}}return eK.current=t,t})},[]);eJ.current=e4;let e3=(0,l.useCallback)((e,t)=>{let r=eK.current,n=eX.current,l=eU.current;if(!r||!n||!l)return;let i=eF.current??r.selector,o=eW.current?i+eW.current:i;if(n.applyChange(o,e,t),eW.current){let n=r.element;if(n?.style){let r=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);n.style.setProperty(r,t,"important")}let l=eQ.current;l.selector!==i||l.props.includes(e)||l.props.push(e)}l.track(o,r.tagName,r.textContent,r.classes,r.reactComponents,r.computedStyles,r.sourceFile,r.stylingApproach,r.inlineStyles,r.elementId,r.accessibleName,r.parentContext,r.childSummary,r.domPath,r.nearbySiblings,r.position),l.recordChange(o,e,t),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)},[]),e8=(0,l.useCallback)(e=>{let t=eX.current,r=eK.current;if(!t||!r?.element)return;let n=eF.current??r.selector,l=r.element;if(e1(),eO(e),eW.current=e,e){let i=w(r.element,e),o=[],a=n+e,s=new Map;for(let e of t.getChanges())e.selector===a&&s.set(e.property,e.value);let u=new Set;for(let[e,t]of Object.entries(i)){let r=e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),n=s.get(r)??t;l.style&&l.style.setProperty(e,n,"important"),o.push(r),u.add(r)}for(let[e,t]of s){if(u.has(e))continue;let r=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);l.style&&l.style.setProperty(r,t,"important"),o.push(e)}eQ.current={selector:n,props:o}}eJ.current()},[]),e9=(0,l.useCallback)((e,t,n)=>{let l=eX.current;if(!l)return;let i=(0,r.getSelector)(e);n?l.applyChange(i,t,n):l.removeChange(i,t)},[]),te=(0,l.useCallback)((e,t)=>{let r=eK.current,n=eU.current;if(!r||!n)return;let l=eF.current??r.selector;n.track(l,r.tagName,r.textContent,r.classes,r.reactComponents,r.computedStyles,r.sourceFile,r.stylingApproach,r.inlineStyles,r.elementId,r.accessibleName,r.parentContext,r.childSummary,r.domPath,r.nearbySiblings,r.position),n.recordChange(l,`class:${e}`,t),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)},[]),tt=(0,l.useCallback)((e,t)=>{let r=eU.current,n=eK.current;if(!r||!n)return;let l=eF.current??n.selector;r.setVariableAssociation(l,e,t),r.relinkVariable(l,e),r.persist(),D(e=>e+1)},[]),tr=(0,l.useCallback)(e=>{let t=eU.current,r=eK.current;if(!t||!r)return;let n=eF.current??r.selector;t.recordUnlink(n,e),eG.current(),D(e=>e+1)},[]),tn=(0,l.useMemo)(()=>{let e=eU.current;if(!e||!g)return{};let t=eB??g.selector;return{...e.getVariableAssociations(t)??{}}},[g,eB,I]),tl=(0,l.useMemo)(()=>{let e=eU.current;if(!e||!g)return new Set;let t=eB??g.selector;return new Set(e.getUnlinkedVariables(t))},[g,eB,I]),ti=(0,l.useMemo)(()=>{let e=eU.current;if(!e||!g)return new Set;let t=eB??g.selector;return e.getChangedProperties(t)},[g,eB,I]),to=(0,l.useCallback)(e=>{let t=e_.current;t&&t.selectElement(e)},[]),ta=(0,l.useCallback)(e=>{let t=e_.current;t&&t.highlightElement(e)},[]);(0,l.useEffect)(()=>{let e=em.current,t=ex.current;if(!e||!t)return;let r=e.querySelectorAll(".retune-tab")[+("elements"!==er)];if(!r)return;let n=e.getBoundingClientRect(),l=r.getBoundingClientRect(),i=l.left-n.left;t.style.width=`${l.width}px`,eN.current?(t.style.transition="none",t.style.transform=`translateX(${i}px)`,t.offsetHeight,t.style.transition="",eN.current=!1):t.style.transform=`translateX(${i}px)`},[er,g]),(0,l.useCallback)(()=>{eg(e=>{let t="right"===e?"left":"right";try{localStorage.setItem("retune-panel-side",t)}catch{}return t})},[]);let ts=(0,l.useCallback)(e=>{eb.current&&(ev.current={startX:e.clientX,startY:e.clientY,originX:0,dragging:!1,lastX:e.clientX,lastT:e.timeStamp,velocity:0})},[]),tu=(0,l.useCallback)(e=>{let t=ev.current,r=eb.current;if(!t||!r)return;let n=e.clientX-t.startX,l=e.clientY-t.startY;if(!t.dragging&&5>Math.abs(n)&&5>Math.abs(l))return;if(!t.dragging){let n=r.getBoundingClientRect();t.originX=n.left+n.width/2,t.dragging=!0,r.setPointerCapture(e.pointerId),eC(!0)}let i=e.timeStamp-t.lastT;i>0&&(t.velocity=(e.clientX-t.lastX)/i),t.lastX=e.clientX,t.lastT=e.timeStamp;let o=e.clientX-t.startX;r.style.transition="none",r.style.transform=`translateX(${o}px)`},[]),tc=(0,l.useCallback)(e=>{let t=ev.current,r=eb.current;if(!t||!r||(ev.current=null,!t.dragging))return;let n=r.getBoundingClientRect(),l=Math.abs(t.velocity)>.4?t.velocity<0?"left":"right":e.clientX<window.innerWidth/2?"left":"right";eg(l);try{localStorage.setItem("retune-panel-side",l)}catch{}requestAnimationFrame(()=>{r.style.transition="none",r.style.transform="";let e=r.getBoundingClientRect(),t=n.left-e.left;r.style.transform=`translateX(${t}px)`,requestAnimationFrame(()=>{r.style.transition="transform 200ms cubic-bezier(0.77, 0, 0.175, 1)",r.style.transform="";let e=()=>{r.removeEventListener("transitionend",e),r.style.transition="",eC(!1)};r.addEventListener("transitionend",e,{once:!0})})})},[]),td=(0,l.useCallback)(()=>{let e=eW.current;if(!e)return;let t=eK.current,r=eX.current;if(!t?.element||!r)return;let n=t.element;if(!n.style)return;let l=eF.current??t.selector,i=l+e,o=w(t.element,e),a=new Map;for(let e of r.getChanges())e.selector===i&&a.set(e.property,e.value);for(let e of eQ.current.props){let t=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);n.style.removeProperty(t)}let s=[],u=new Set;for(let[e,t]of Object.entries(o)){let r=e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),l=a.get(r)??t;n.style.setProperty(e,l,"important"),s.push(r),u.add(r)}for(let[e,t]of a){if(u.has(e))continue;let r=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);n.style.setProperty(r,t,"important"),s.push(e)}eQ.current={selector:l,props:s}},[]),tp=(0,l.useRef)([]),th=(0,l.useRef)([]),tf=(0,l.useRef)([]),tg=(0,l.useRef)([]),tm=(0,l.useCallback)(()=>{let e=eK.current;if(!e?.element)return;let t=e.element.tagName.toLowerCase();if("body"===t||"html"===t||"head"===t||e.element.hasAttribute("data-retune-host"))return;let r=e.element.parentNode;if(!r)return;let n=eU.current;if(n){let t=eF.current??e.selector;n.track(t,e.tagName,e.textContent,e.classes,e.reactComponents,e.computedStyles,e.sourceFile,e.stylingApproach,e.inlineStyles,e.elementId,e.accessibleName,e.parentContext,e.childSummary,e.domPath,e.nearbySiblings,e.position),n.recordChange(t,"__delete","true"),n.persist()}tp.current.push({element:e.element,parent:r,nextSibling:e.element.nextSibling}),th.current=[],e.element.remove(),m(null),eK.current=null,e_.current?.refreshSelection(),eG.current(),D(e=>e+1)},[]),tx=(0,l.useCallback)(()=>{let e=tp.current.pop();e&&(e.nextSibling?e.parent.insertBefore(e.element,e.nextSibling):e.parent.appendChild(e.element),th.current.push(e),eG.current(),D(e=>e+1))},[]);function tb(e,t){for(let r of e.getPendingChanges())r.changes.some(e=>"__bulkOf"===e.property)&&(e.removeProperty(r.selector,t),e.removeProperty(r.selector,"__bulkOf"));e.persist()}let tv=(0,l.useCallback)(()=>{let e=eU.current,t=eX.current;if(!e||!t)return;let r=e.popUndo();if(r){if(r.some(e=>"__delete"===e.property))return void tx();if(r.some(e=>"__reorder"===e.property)){let t=tw.current.pop();if(t){let e=t.map(e=>({element:e.element,prevOrder:e.element.style.order,prevTranslate:e.element.style.translate}));for(let e of t)e.prevOrder?e.element.style.order=e.prevOrder:e.element.style.removeProperty("order"),e.element.style.removeProperty("transition"),e.prevTranslate?e.element.style.translate=e.prevTranslate:e.element.style.removeProperty("translate"),e.element.getAttribute("style")?.trim()===""&&e.element.removeAttribute("style");tk.current.push(e)}tb(e,"__reorder"),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1);return}if(r.some(e=>"__reparent"===e.property)){let t=eL.current.pop()||1,r=[];for(let e=0;e<t;e++){let e=eR.current.pop();if(!e)break;e.observer.disconnect();try{e.oldNextSibling&&e.oldNextSibling.parentElement===e.oldParent?e.oldParent.insertBefore(e.element,e.oldNextSibling):e.oldParent.appendChild(e.element)}catch{}r.push(e.element)}tb(e,"__reparent"),eS(e=>e.filter(e=>!r.includes(e.element))),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1);return}if(r.some(e=>"__text"===e.property)){let e=tf.current.pop();e&&(e.element.innerHTML=e.originalHTML,tg.current.push(e)),eG.current(),D(e=>e+1);return}{let n=r.filter(e=>!e.action);for(let e of n)e.value?t.applyChange(e.selector,e.property,e.value):t.removeChange(e.selector,e.property);let l=e.getPendingChanges(),i=new Set;for(let e of l)for(let t of e.changes)i.add(`${e.selector}::${t.property}`);for(let e of n){let r=`${e.selector}::${e.property}`;i.has(r)||t.removeChange(e.selector,e.property)}td(),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)}}},[td,tx]),ty=(0,l.useCallback)(()=>{let e=eU.current,t=eX.current;if(!e||!t)return;let r=e.popRedo();if(r){if(r.some(e=>"__reorder"===e.property)){let e=tk.current.pop();if(e){let t=e.map(e=>({element:e.element,prevOrder:e.element.style.order,prevTranslate:e.element.style.translate}));for(let t of e)t.element.style.order=t.prevOrder,t.element.style.transition="",t.element.style.translate=t.prevTranslate;tw.current.push(t)}eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1);return}if(r.some(e=>"__text"===e.property)){let e=tg.current.pop();e&&(e.element.innerHTML=e.newHTML,tf.current.push(e)),eG.current(),D(e=>e+1);return}if(r.some(e=>"__delete"===e.property)){let e=th.current.pop();e&&(tp.current.push({element:e.element,parent:e.element.parentNode,nextSibling:e.element.nextSibling}),e.element.remove(),m(null),eK.current=null,e_.current?.refreshSelection()),eG.current(),D(e=>e+1);return}for(let e of r)e.action||t.applyChange(e.selector,e.property,e.value);td(),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)}},[td]),tC=(0,l.useCallback)(e=>{let t=eU.current,r=eX.current,n=eK.current;if(!t||!r||!n)return;let l=eF.current??n.selector,i=t.resetProperty(l,e);if(!i)return;i.to?r.applyChange(l,e,i.to):r.removeChange(l,e);let o=t.getPendingChanges(),a=new Set;for(let e of o)for(let t of e.changes)a.add(`${e.selector}::${t.property}`);a.has(`${l}::${e}`)||r.removeChange(l,e),td(),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)},[td]),tw=(0,l.useRef)([]),tk=(0,l.useRef)([]),tj=(0,l.useRef)(new WeakMap),tS=(0,l.useRef)(new Map),tR=(0,l.useRef)(new WeakMap),tL=(0,l.useRef)(new Map),tN=(0,l.useRef)(new Map),t$=(0,l.useRef)(null);function tM(e){let t=Array.from(e.children);if("translate"===tR.current.get(e)){let t=tN.current.get(e);if(t)return[...t]}return[...t].sort((e,r)=>{let n=parseInt(e.style.order)||0,l=parseInt(r.style.order)||0;return n!==l?n-l:t.indexOf(e)-t.indexOf(r)})}let tE=(0,l.useMemo)(()=>{let e=new Map;for(let t of tS.current.keys())t.isConnected&&e.set(t,tM(t));for(let t of tN.current.keys())t.isConnected&&!e.has(t)&&e.set(t,tM(t));return e},[I]);function tA(e){if(tS.current.has(e))return;let t=Array.from(e.children),r=new Map;for(let e of t)r.set(e,e.style.order||"");tS.current.set(e,r),t.forEach((e,t)=>{e.style.order=String(t)})}function tT(e){if(tL.current.has(e))return;let t=Array.from(e.children),r=new Map;for(let e of t)r.set(e,e.getBoundingClientRect());tL.current.set(e,r),tN.current.set(e,[...t]),t$.current||(t$.current=new MutationObserver(e=>{for(let t of e){let e=t.target;if("childList"===t.type&&tL.current.has(e)){let t=tL.current.get(e);if(t)for(let[e]of t)e.style.removeProperty("translate"),e.getAttribute("style")?.trim()===""&&e.removeAttribute("style");tL.current.delete(e),tN.current.delete(e),tR.current.delete(e)}}})),t$.current.observe(e,{childList:!0})}function tV(e){let t=tL.current.get(e),r=tN.current.get(e);if(!t||!r)return;let n=Array.from(e.children),l=0,i=0;for(let e=0;e<n.length-1;e++){let r=t.get(n[e]);l+=t.get(n[e+1]).top-r.bottom,i++}let o=i>0?l/i:0,a=t.get(n[0]).top;for(let e=0;e<r.length;e++){let n=r[e],l=a-t.get(n).top;.5>Math.abs(l)?n.style.removeProperty("translate"):n.style.translate=`0 ${l}px`,a+=t.get(n).height+o}}function tH(e,t){let n,l=eP.current[eH.current];if(!l?.selector||l.count<=1)return[];let i=(0,r.getSharedSelector)(e);if(!i||i.count<=1)return[];try{n=Array.from(document.querySelectorAll(i.selector)).filter(t=>t!==e&&t.isConnected)}catch{return[]}if(0===n.length||"array"===L(e))return[];let o=t.map(e=>{let t=Array.from(e.classList).filter(e=>!(0,r.isHashedClass)(e));return t.length>0?`.${t[0]}`:e.tagName.toLowerCase()});if(new Set(o).size<.5*o.length)return[];let a=[];for(let e of n){let t=Array.from(e.children);if(t.length<2)continue;let n=t.map(e=>{let t=Array.from(e.classList).filter(e=>!(0,r.isHashedClass)(e));return t.length>0?`.${t[0]}`:e.tagName.toLowerCase()}),l=new Set(o),i=new Set(n),s=n.filter(e=>l.has(e)).length,u=o.filter(e=>i.has(e)).length;if(s<.7*n.length||u<.7*o.length)continue;let c=getComputedStyle(e).display,d="flex"===c||"inline-flex"===c,p="grid"===c||"inline-grid"===c,h=d||p?"order":"translate",f=t.map(e=>({element:e,prevOrder:e.style.order,prevTranslate:e.style.translate||""}));a.push(f);let g=eU.current;if(g){for(let e=0;e<t.length;e++){let n=t[e],l=Array.from(n.classList).filter(e=>!(0,r.isHashedClass)(e)),i=l.length>0?`.${l[0]}`:n.tagName.toLowerCase(),a=o.indexOf(i);if(-1!==a&&a!==e){let t=(0,r.getSelector)(n);g.track(t,n.tagName.toLowerCase(),n.textContent?.slice(0,40)||null,Array.from(n.classList),[],{__reorder:String(e)},null,void 0,null,n.id||null,null,null,null,"",null,{x:0,y:0,width:0,height:0}),g.ensureOriginalValue(t,"__reorder",String(e)),g.recordChangeSilent(t,"__reorder",String(a)),g.ensureOriginalValue(t,"__bulkOf",""),g.recordChangeSilent(t,"__bulkOf","reorder");break}}g.persist()}if("order"===h){let n=0,l=new Set;for(let e of o){let i=t.find(t=>{if(l.has(t))return!1;let n=Array.from(t.classList).filter(e=>!(0,r.isHashedClass)(e));return(n.length>0?`.${n[0]}`:t.tagName.toLowerCase())===e});i&&(i.style.order=String(n),l.add(i)),n++}for(let e of t)l.has(e)||(e.style.order=String(n++));if(tR.current.has(e)||tR.current.set(e,"order"),!tS.current.has(e)){let r=new Map;for(let e of t)r.set(e,f.find(t=>t.element===e)?.prevOrder||"");tS.current.set(e,r)}}else{tT(e);let n=[],l=new Set;for(let e of o){let i=t.find(t=>{if(l.has(t))return!1;let n=Array.from(t.classList).filter(e=>!(0,r.isHashedClass)(e));return(n.length>0?`.${n[0]}`:t.tagName.toLowerCase())===e});i&&(n.push(i),l.add(i))}for(let e of t)l.has(e)||n.push(e);tN.current.set(e,n),tR.current.has(e)||tR.current.set(e,"translate"),tV(e)}}return a}function tP(e){let t=e;for(;t;){let e=t.parentElement;if(!e)break;if(Array.from(e.children).length>=2)return{proxy:t,parent:e};t=e}return null}let tB=(0,l.useCallback)(e=>{let t,n=eK.current?.element;if(!n?.parentElement)return;let l=tP(n);if(!l)return;let{proxy:i,parent:o}=l,a=Array.from(o.children),s=getComputedStyle(o).display,u="flex"===s||"inline-flex"===s||"grid"===s||"inline-grid"===s?"order":"translate";tR.current.has(o)||tR.current.set(o,u),"order"===u?tA(o):tT(o);let c=tM(o),d=c.indexOf(i);if(-1===d)return;let p="up"===e?d-1:d+1;if(p<0||p>=c.length)return;let h=c[p],f=a.indexOf(i),g=eU.current;if(g){let e=tj.current.get(i),t=e?.selector??(0,r.getSelector)(i),n=e?.originalIndex??f;e||tj.current.set(i,{selector:t,originalIndex:f});let l=eK.current;g.track(t,i.tagName.toLowerCase(),i.textContent?.slice(0,40)||null,Array.from(i.classList),l?.reactComponents??[],{__reorder:String(n)},l?.sourceFile??null,l?.stylingApproach??void 0,null,i.id||null,null,null,null,l?.domPath??"",null,{x:0,y:0,width:0,height:0}),g.ensureOriginalValue(t,"__reorder",String(n)),g.breakCoalescing(),g.recordChange(t,"__reorder",String(p)),g.persist()}let m=[{element:i,prevOrder:i.style.order,prevTranslate:i.style.translate},{element:h,prevOrder:h.style.order,prevTranslate:h.style.translate}];if(tw.current.push(m),tk.current=[],"order"===u){let e=i.style.order;i.style.order=h.style.order,h.style.order=e,t=tM(o)}else{let e=tN.current.get(o);if(e){let r=e.indexOf(i),n=e.indexOf(h);-1!==r&&-1!==n&&([e[r],e[n]]=[e[n],e[r]],tV(o)),t=[...e]}else t=a}let x=tH(o,t);if(x.length>0)for(let e of x)m.push(...e);i instanceof HTMLElement&&i.blur(),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)},[]),tF=(0,l.useCallback)((e,t,n)=>{let l,i=e.parentElement;if(!i)return;let o=Array.from(i.children),a=getComputedStyle(i).display,s="flex"===a||"inline-flex"===a||"grid"===a||"inline-grid"===a?"order":"translate";tR.current.has(i)||tR.current.set(i,s),"order"===s?tA(i):tT(i);let u=o.indexOf(e),c=eU.current;if(c){let t=tj.current.get(e),l=t?.selector??(0,r.getSelector)(e),i=t?.originalIndex??u;t||tj.current.set(e,{selector:l,originalIndex:u});let o=eK.current;c.track(l,e.tagName.toLowerCase(),e.textContent?.slice(0,40)||null,Array.from(e.classList),o?.reactComponents??[],{__reorder:String(i)},o?.sourceFile??null,o?.stylingApproach??void 0,null,e.id||null,null,null,null,o?.domPath??"",null,{x:0,y:0,width:0,height:0}),c.ensureOriginalValue(l,"__reorder",String(i)),c.breakCoalescing(),c.recordChange(l,"__reorder",String(n)),c.persist()}let d=o.map(e=>({element:e,prevOrder:e.style.order,prevTranslate:e.style.translate}));if(tw.current.push(d),tk.current=[],"order"===s){let e=tM(i),[r]=e.splice(t,1);e.splice(n>t?n-1:n,0,r);for(let t=0;t<e.length;t++)e[t].style.order=String(t);l=e}else{let e=tN.current.get(i);if(e){let[r]=e.splice(t,1);e.splice(n>t?n-1:n,0,r),tV(i),l=[...e]}else l=o}let p=tH(i,l);if(p.length>0)for(let e of p)d.push(...e);e instanceof HTMLElement&&e.blur(),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)},[]),tz=(0,l.useCallback)((e,t,n)=>{let l=eU.current;if(!l)return;let i=e.parentElement;if(!i||i===t)return;let o=eR.current.length,a=(0,r.getSelector)(e),s=(0,r.getSelector)(i),u=(0,r.getSelector)(t),c=e.nextElementSibling,d=Array.from(i.children).indexOf(e),p=`${s}@${d}`,h=`${u}@${n}`,f=eK.current;l.track(a,e.tagName.toLowerCase(),e.textContent?.slice(0,40)||null,Array.from(e.classList),f?.reactComponents??[],{__reparent:p},f?.sourceFile??null,f?.stylingApproach??void 0,null,e.id||null,null,null,null,f?.domPath??"",null,{x:0,y:0,width:0,height:0}),l.ensureOriginalValue(a,"__reparent",p),l.breakCoalescing(),l.recordChange(a,"__reparent",h),l.persist();let g=Array.from(t.children),m=n<g.length?g[n]:null;m?t.insertBefore(e,m):t.appendChild(e);let x=new MutationObserver(r=>{for(let l of r)if("childList"===l.type){if(l.target===i){for(let t of l.addedNodes)if(t instanceof Element&&t!==e&&t.tagName===e.tagName&&t.className===e.className&&t.textContent===e.textContent)try{i.removeChild(t)}catch{}}if(l.target===t){for(let r of l.removedNodes)if(r===e&&!e.parentElement)try{let r=Array.from(t.children),l=n<r.length?r[n]:null;l?t.insertBefore(e,l):t.appendChild(e)}catch{}}}});x.observe(i,{childList:!0}),x.observe(t,{childList:!0}),eR.current.push({element:e,oldParent:i,oldNextSibling:c,newParent:t,observer:x}),eS(r=>[...r.filter(t=>t.element!==e),{element:e,newParent:t,insertIndex:n}]),function(e,t,n,l){let i,o=eP.current[eH.current];if(!o?.selector||o.count<=1)return;let a=Array.from(e.classList).filter(e=>!(0,r.isHashedClass)(e));if(0===a.length)return;let s=a[0],u=(0,r.getSharedSelector)(t);if(!u||u.count<=1||"array"===L(t))return;let c=Array.from(n.classList).filter(e=>!(0,r.isHashedClass)(e));if(0===c.length)return;let d=c[0],p=t.parentElement;if(!p)return;let h=(0,r.getSharedSelector)(p),f=h?.selector;if(f&&h.count>1)try{i=Array.from(document.querySelectorAll(f)).filter(e=>e!==p&&e.isConnected)}catch{return}else try{i=Array.from(document.querySelectorAll(u.selector)).filter(e=>e!==t&&e.isConnected).map(e=>e.parentElement).filter(Boolean)}catch{return}for(let e of i){let t=e.querySelector(u.selector);if(!t)continue;let n=Array.from(t.children).find(e=>e.classList.contains(s));if(!n)continue;let i=`.${CSS.escape(d)}`,o=e.matches(i)?e:e.querySelector(i);if(!o||o===t)continue;let a=eU.current;if(a){let e=(0,r.getSelector)(n),i=(0,r.getSelector)(t),s=(0,r.getSelector)(o),u=Array.from(t.children).indexOf(n);a.track(e,n.tagName.toLowerCase(),n.textContent?.slice(0,40)||null,Array.from(n.classList),[],{__reparent:`${i}@${u}`},null,void 0,null,n.id||null,null,null,null,"",null,{x:0,y:0,width:0,height:0}),a.ensureOriginalValue(e,"__reparent",`${i}@${u}`),a.recordChangeSilent(e,"__reparent",`${s}@${l}`),a.ensureOriginalValue(e,"__bulkOf",""),a.recordChangeSilent(e,"__bulkOf","reparent")}let c=n.nextElementSibling,p=Array.from(o.children),h=l<p.length?p[l]:null;h?o.insertBefore(n,h):o.appendChild(n);let f=new MutationObserver(e=>{for(let r of e)if("childList"===r.type){if(r.target===t){for(let e of r.addedNodes)if(e instanceof Element&&e!==n&&e.tagName===n.tagName&&e.className===n.className&&e.textContent===n.textContent)try{t.removeChild(e)}catch{}}if(r.target===o){for(let e of r.removedNodes)if(e===n&&!n.parentElement)try{let e=Array.from(o.children),t=l<e.length?e[l]:null;t?o.insertBefore(n,t):o.appendChild(n)}catch{}}}});f.observe(t,{childList:!0}),f.observe(o,{childList:!0}),eR.current.push({element:n,oldParent:t,oldNextSibling:c,newParent:o,observer:f}),eS(e=>[...e.filter(e=>e.element!==n),{element:n,newParent:o,insertIndex:l}])}}(e,i,t,n);let b=eR.current.length;eL.current.push(b-o),eG.current(),eJ.current(),e_.current?.refreshSelection(),D(e=>e+1)},[]);(0,l.useEffect)(()=>{function e(e){let t,r,l,i,o,a,s,c;if(r=(t=n.hotkey.toLowerCase().split("+")).pop(),l=t.includes("alt"),i=t.includes("ctrl"),o=t.includes("meta")||t.includes("cmd"),a=t.includes("shift"),s=e.key.toLowerCase(),c=e.code?.replace(/^(Key|Digit)/i,"").toLowerCase()||"",(s===r||l&&c===r)&&e.altKey===l&&e.ctrlKey===i&&e.metaKey===o&&e.shiftKey===a&&(e.preventDefault(),e2()),u&&(e.metaKey||e.ctrlKey)&&"z"===e.key&&!e.shiftKey&&(e.preventDefault(),tv()),u&&(e.metaKey||e.ctrlKey)&&"z"===e.key&&e.shiftKey&&(e.preventDefault(),ty()),u&&eK.current&&("ArrowUp"===e.key||"ArrowDown"===e.key||"ArrowLeft"===e.key||"ArrowRight"===e.key)){let t=e.composedPath()[0];if(t?.tagName==="INPUT"||t?.tagName==="TEXTAREA"||t?.isContentEditable)return;let r=tP(eK.current.element);if(!r)return;let{parent:n}=r,l=getComputedStyle(n).display,i="flex"===l||"inline-flex"===l,o="ArrowLeft"===e.key||"ArrowRight"===e.key,a="ArrowUp"===e.key||"ArrowDown"===e.key,s=getComputedStyle(n).flexDirection,u=i&&("row"===s||"row-reverse"===s);if(!i&&"grid"!==l&&"inline-grid"!==l&&o||o&&!u||a&&u)return;e.preventDefault(),e.stopPropagation(),tB("ArrowUp"===e.key||"ArrowLeft"===e.key?"up":"down")}if(u&&eK.current&&("Enter"===e.key||"Tab"===e.key)){let t=e.composedPath()[0];if(t?.tagName==="INPUT"||t?.tagName==="TEXTAREA"||t?.isContentEditable)return;let r=eK.current.element,n=e_.current;if(!n)return;if("Enter"===e.key&&e.shiftKey){let t=r.parentElement;t&&t!==document.body&&(e.preventDefault(),e.stopPropagation(),n.selectElement(t))}else if("Enter"!==e.key||e.shiftKey){if("Tab"===e.key){let t=r.parentElement;if(!t)return;let l=Array.from(t.children).filter(e=>!e.hasAttribute("data-retune-host")&&"SCRIPT"!==e.tagName&&"STYLE"!==e.tagName&&"LINK"!==e.tagName);if(l.length<2)return;let i=l.indexOf(r);if(-1===i)return;let o=e.shiftKey?l[(i-1+l.length)%l.length]:l[(i+1)%l.length];e.preventDefault(),e.stopPropagation(),n.selectElement(o)}}else{let t=Array.from(r.children).filter(e=>!e.hasAttribute("data-retune-host")&&"SCRIPT"!==e.tagName&&"STYLE"!==e.tagName&&"LINK"!==e.tagName);t.length>0&&(e.preventDefault(),e.stopPropagation(),n.selectElement(t[0]))}return}if(u&&eK.current&&("Delete"===e.key||"Backspace"===e.key)){let t=e.composedPath()[0];if(t?.tagName==="INPUT"||t?.tagName==="TEXTAREA"||t?.isContentEditable)return;e.preventDefault(),e.stopPropagation(),tm()}}return document.addEventListener("keydown",e,!0),()=>document.removeEventListener("keydown",e,!0)},[u,n.hotkey,e2,tv,ty,tm,tB]);let tI=(0,l.useCallback)(()=>{let e=eU.current,t=eX.current;if(!e||!t)return;for(;tp.current.length>0;){let e=tp.current.pop();try{e.nextSibling?e.parent.insertBefore(e.element,e.nextSibling):e.parent.appendChild(e.element)}catch{}}for(th.current=[];tf.current.length>0;){let e=tf.current.pop();try{e.element.innerHTML=e.originalHTML}catch{}}for(let[,e]of(tg.current=[],tw.current=[],tk.current=[],tS.current))for(let[t,r]of e)r?t.style.order=r:t.style.removeProperty("order");for(let[,e]of(tS.current.clear(),tL.current))for(let[t]of e)t.style.removeProperty("translate"),t.style.removeProperty("transition"),t.getAttribute("style")?.trim()===""&&t.removeAttribute("style");for(let e of(tL.current.clear(),tN.current.clear(),tR.current=new WeakMap,t$.current?.disconnect(),tj.current=new WeakMap,eR.current)){e.observer.disconnect();try{e.oldNextSibling&&e.oldNextSibling.parentElement===e.oldParent?e.oldParent.insertBefore(e.element,e.oldNextSibling):e.oldParent.appendChild(e.element)}catch{}}eR.current=[],eS([]),eW.current&&e1(),t.clearAll(),e.clear();let r=eP.current,n=r.length>=2?r.length-2:0;eV(n),eH.current=n,e7(),D(e=>e+1);let l=eK.current;l&&e.track(l.selector,l.tagName,l.textContent,l.classes,l.reactComponents,l.computedStyles,l.sourceFile,l.stylingApproach,l.inlineStyles,l.elementId,l.accessibleName,l.parentContext,l.childSummary,l.domPath,l.nearbySiblings,l.position),requestAnimationFrame(()=>{e4(),e_.current?.refreshSelection()})},[e7,e4,e1]),tD=(0,l.useCallback)((e,t)=>{let r=eX.current,n=eU.current;if(r&&n&&e!==t){for(let l of(r.migrateChanges(e,t),n.migrateChanges(e,t),[":hover",":focus",":active"]))r.migrateChanges(e+l,t+l),n.migrateChanges(e+l,t+l);eQ.current.selector===e&&(eQ.current.selector=t),e7(),D(e=>e+1)}},[e7]),tO=(0,l.useCallback)(e=>{let t=eU.current,r=eK.current,n=eP.current;if(!t||!r||e<0||e>=n.length)return;let l=eH.current;if(e===l&&e>0)e-=1;else if(e===l)return;let i=n[l]?.selector??r.selector,o=n[e]?.selector??r.selector;t.track(o,r.tagName,r.textContent,r.classes,r.reactComponents,r.computedStyles,r.sourceFile,r.stylingApproach,r.inlineStyles,r.elementId,r.accessibleName,r.parentContext,r.childSummary,r.domPath,r.nearbySiblings,r.position),tD(i,o),eH.current=e,eV(e),eF.current=o;let a=o&&o.includes(" ");o&&r.element&&!a?W(k(r.element,o).ownedProperties):W(void 0),e6.current=!0,eW.current&&td(),e4();let s=n[e];s?.selector&&e_.current?e_.current.showScopeHighlights(s.selector,r.element??null):e_.current?.hideScopeHighlights()},[tD,td,e4]),tW=(0,l.useCallback)(e=>{let t=e_.current;if(!t)return;if(null===e){let e=eP.current[eH.current];e?.selector?t.showScopeHighlights(e.selector,eK.current?.element??null):t.hideScopeHighlights();return}let r=eP.current[e];r&&null!==r.selector?t.showScopeHighlights(r.selector,eK.current?.element??null):t.hideScopeHighlights()},[]),tZ=(0,l.useCallback)(()=>{let e=eU.current;e&&(navigator.clipboard.writeText(x(e.getPendingChanges(),M)),H(!0),et.current&&clearTimeout(et.current),et.current=setTimeout(()=>H(!1),3e3))},[M]),t_=(0,l.useCallback)(()=>{e5()},[e5]);return((0,l.useEffect)(()=>(window.__retune={getChanges:()=>eU.current?.getPendingChanges()??[],getFormattedChanges:e=>x(eU.current?.getPendingChanges()??[],e??T.current),clearChanges:()=>{let e=eU.current,t=eX.current;if(!e||!t)return;if(eW.current){let e=eQ.current,t=eK.current?.element;if(t?.style&&e.props.length>0){for(let r of e.props){let e=r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);t.style.removeProperty(e)}t.getAttribute("style")?.trim()===""&&t.removeAttribute("style")}eQ.current={selector:"",props:[]},eO(null),eW.current=null}t.clearAll(),e.clear(),eG.current(),D(e=>e+1);let r=eK.current;r&&e.track(r.selector,r.tagName,r.textContent,r.classes,r.reactComponents,r.computedStyles,r.sourceFile,r.stylingApproach,r.inlineStyles,r.elementId,r.accessibleName,r.parentContext,r.childSummary,r.domPath,r.nearbySiblings,r.position),eJ.current()}},()=>{delete window.__retune}),[]),!Z||ew)?null:(0,i.createPortal)((0,o.jsx)(d.Provider,{value:eY.current,children:(0,o.jsxs)(F.Provider,{value:Z,children:[(0,o.jsxs)("div",{ref:eb,className:`retune-toolbar bottom ${ef} ${u?"expanded":"collapsed"}`,onPointerDown:ts,onPointerMove:tu,onPointerUp:tc,children:[(0,o.jsx)(z,{content:"Toggle edit mode",shortcut:n.hotkey,side:"top",children:(0,o.jsxs)("button",{className:"retune-toolbar-collapse-btn",onClick:e0,children:[(0,o.jsx)(rf,{size:20}),!u&&b>0&&(0,o.jsx)("span",{className:"retune-changes-dot"})]})}),(0,o.jsxs)("div",{className:"retune-toolbar-expanded",children:[b>0&&(0,o.jsx)("div",{className:"retune-edit-count",children:b}),(0,o.jsx)(z,{content:"Copy changes",shortcut:"⌘C",side:"top",children:(0,o.jsx)("button",{className:`retune-toolbar-btn${0===b?" disabled":""}`,onClick:tZ,disabled:0===b,children:(0,o.jsxs)("span",{className:"retune-icon-swap",children:[(0,o.jsx)("span",{className:`retune-icon-swap-icon ${V?"out":"in"}`,children:(0,o.jsx)(rm,{size:20})}),(0,o.jsx)("span",{className:`retune-icon-swap-icon ${V?"in":"out"}`,children:(0,o.jsx)(rw,{size:20})})]})})}),(0,o.jsx)(z,{content:"Reset all",side:"top",children:(0,o.jsx)("button",{className:`retune-toolbar-btn${0===b?" disabled":""}`,onClick:tI,disabled:0===b,children:(0,o.jsx)(ry,{size:20})})}),(0,o.jsx)(z,{content:"Settings",side:"top",children:(0,o.jsx)("button",{className:"retune-toolbar-btn",onClick:()=>{ec.current&&clearTimeout(ec.current),el?(ei(!1),eu(!0),ec.current=setTimeout(()=>{ea(!1),eu(!1)},250)):(ei(!0),ea(!0),eu(!1))},children:(0,o.jsx)(rj,{size:20})})}),(0,o.jsx)(z,{content:"Close",shortcut:"Esc",side:"top",children:(0,o.jsx)("button",{className:"retune-toolbar-btn",onClick:t_,children:(0,o.jsx)(rb,{size:20})})})]})]}),(0,o.jsx)(rV,{visible:!!(u&&g&&!el&&!ey),children:(0,o.jsxs)("div",{className:`retune-panel ${ef}`,children:[(0,o.jsxs)("div",{className:"retune-tab-bar",ref:em,children:[(0,o.jsx)("div",{className:"retune-tab-pill",ref:ex}),(0,o.jsx)("button",{className:`retune-tab${"elements"===er?" active":""}`,onClick:()=>en("elements"),children:"Elements"}),(0,o.jsx)("button",{className:`retune-tab${"design"===er?" active":""}`,onClick:()=>en("design"),children:"Design"}),(0,o.jsxs)("span",{onClick:()=>{X&&K&&(G(!1),Q(!1))},style:{marginLeft:"auto",fontSize:"11px",lineHeight:"16px",color:"var(--retune-text-tertiary)",letterSpacing:"-0.005em",paddingRight:"8px",display:"flex",alignItems:"center",gap:"4px",cursor:X?"pointer":"default"},children:[X&&(0,o.jsx)("span",{style:{width:4,height:4,borderRadius:"50%",background:"var(--retune-blue)",flexShrink:0}}),"v",X?.current||"0.6.2"]})]}),(0,o.jsxs)("div",{className:"retune-panel-body",children:[X&&(0,o.jsx)("div",{style:{display:"grid",gridTemplateRows:Y||K?"0fr":"1fr",opacity:Y||K?0:1,transition:"grid-template-rows 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"},onTransitionEnd:e=>{"opacity"===e.propertyName&&Y&&(G(!0),q(!1))},children:(0,o.jsx)("div",{style:{overflow:"hidden",minHeight:0},children:(0,o.jsxs)("div",{style:{padding:"12px 16px",background:"var(--retune-blue)",display:"flex",flexDirection:"column",gap:"8px",transform:Y||K?"translateY(-4px)":"translateY(0)",transition:"transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"},children:[(0,o.jsxs)("div",{style:{fontFamily:"inherit",fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.06px",color:"var(--retune-white)"},children:["Retune v",X.latest," is available"]}),(0,o.jsxs)("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[(0,o.jsxs)("button",{ref:ee,onClick:()=>{if(J)return;let e=ee.current;if(!e)return;let t=e.getBoundingClientRect().width;navigator.clipboard.writeText("Update Retune to the latest version by running `npm install retune@latest` and `npx retune setup`. After updating, I'll need to restart Claude Code so the new MCP server and skill take effect."),Q(!0),requestAnimationFrame(()=>{let r=e.getBoundingClientRect().width;Math.abs(r-t)>1&&e.animate([{width:`${t}px`},{width:`${r}px`}],{duration:200,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"})}),setTimeout(()=>{let e=ee.current;if(!e)return;let t=e.getBoundingClientRect().width;Q(!1),requestAnimationFrame(()=>{let r=e.getBoundingClientRect().width;Math.abs(r-t)>1&&e.animate([{width:`${t}px`},{width:`${r}px`}],{duration:200,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"})})},3e3)},style:{background:"var(--retune-white)",border:"none",borderRadius:"6px",padding:0,cursor:"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:500,lineHeight:"16px",letterSpacing:"-0.055px",color:"var(--retune-text)",whiteSpace:"nowrap",position:"relative",overflow:"hidden",flexShrink:0,transition:"transform 100ms ease"},onPointerDown:e=>{e.currentTarget.style.transform="scale(0.97)"},onPointerUp:e=>{e.currentTarget.style.transform=""},onPointerLeave:e=>{e.currentTarget.style.transform=""},children:[(0,o.jsxs)("span",{style:{display:"flex",gap:"2px",alignItems:"center",padding:"6px 8px 6px 4px",visibility:"hidden"},children:[(0,o.jsx)("span",{style:{width:16,height:16,flexShrink:0}}),J?"Paste in your AI agent to update":"Copy update instructions"]}),(0,o.jsxs)("span",{style:{position:"absolute",inset:0,display:"flex",gap:"2px",alignItems:"center",padding:"6px 8px 6px 4px",opacity:+!J,filter:J?"blur(2px)":"blur(0)",transition:"opacity 200ms cubic-bezier(0.215, 0.61, 0.355, 1), filter 200ms cubic-bezier(0.215, 0.61, 0.355, 1)"},children:[(0,o.jsx)("span",{style:{width:16,height:16,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transform:J?"scale(0.95)":"scale(1)",transition:"transform 200ms cubic-bezier(0.215, 0.61, 0.355, 1)"},children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M8.5 3.5C9.32843 3.5 10 4.17157 10 5V6H11C11.8284 6 12.5 6.67157 12.5 7.5V11C12.5 11.8284 11.8284 12.5 11 12.5H7.5C6.67157 12.5 6 11.8284 6 11V10H5C4.17157 10 3.5 9.32843 3.5 8.5V5C3.5 4.17157 4.17157 3.5 5 3.5H8.5ZM10 8.5C10 9.32843 9.32843 10 8.5 10H7V11C7 11.2761 7.22386 11.5 7.5 11.5H11C11.2761 11.5 11.5 11.2761 11.5 11V7.5C11.5 7.22386 11.2761 7 11 7H10V8.5ZM5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V8.5C4.5 8.77614 4.72386 9 5 9H8.5C8.77614 9 9 8.77614 9 8.5V5C9 4.72386 8.77614 4.5 8.5 4.5H5Z",fill:"currentColor",fillOpacity:"0.9"})})}),"Copy update instructions"]}),(0,o.jsxs)("span",{style:{position:"absolute",inset:0,display:"flex",gap:"2px",alignItems:"center",padding:"6px 8px 6px 4px",opacity:+!!J,filter:J?"blur(0)":"blur(2px)",transition:"opacity 200ms cubic-bezier(0.215, 0.61, 0.355, 1), filter 200ms cubic-bezier(0.215, 0.61, 0.355, 1)"},children:[(0,o.jsx)("span",{style:{width:16,height:16,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transform:J?"scale(1)":"scale(0.95)",transition:"transform 200ms cubic-bezier(0.215, 0.61, 0.355, 1)"},children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,o.jsx)("path",{d:"M11.0839 4.22268C11.2371 3.99294 11.5475 3.93087 11.7773 4.08401C12.007 4.23718 12.0691 4.5476 11.916 4.77737L7.91596 10.7774C7.83287 10.902 7.69784 10.9833 7.54877 10.9981C7.39988 11.0127 7.25223 10.9593 7.14643 10.8535L4.14643 7.85354C3.9512 7.65827 3.95118 7.34176 4.14643 7.14651C4.34168 6.95126 4.6582 6.95128 4.85346 7.14651L7.42182 9.71487L11.0839 4.22268Z",fill:"currentColor",fillOpacity:"0.9"})})}),"Paste in your AI agent to update"]})]}),(0,o.jsx)("button",{onClick:()=>q(!0),style:{background:"none",border:"none",borderRadius:"6px",padding:"6px 8px",cursor:J?"default":"pointer",fontFamily:"inherit",fontSize:"11px",fontWeight:500,lineHeight:"16px",letterSpacing:"-0.055px",color:"var(--retune-white)",whiteSpace:"nowrap",opacity:.9*!J,filter:J?"blur(2px)":"blur(0)",pointerEvents:J?"none":"auto",transition:"opacity 200ms cubic-bezier(0.215, 0.61, 0.355, 1), filter 200ms cubic-bezier(0.215, 0.61, 0.355, 1)"},onMouseEnter:e=>{J||(e.currentTarget.style.opacity="1")},onMouseLeave:e=>{J||(e.currentTarget.style.opacity="0.9")},children:"Maybe later"})]})]})})}),"elements"===er&&(0,o.jsx)(rn,{selectedElement:g?.element??null,onSelect:to,onHover:ta,visualOrderMap:tE,reparentEntries:ej,onTreeReorder:tF,onTreeReparent:tz}),"design"===er&&g&&(0,o.jsx)(t7,{element:g,position:ef,onPropertyChange:e3,onPropertyHover:B,onApplyToElement:e9,onVariableSwap:te,onVariableAssociate:tt,onVariableUnlink:tr,variableAssociations:tn,unlinkedVariables:tl,changedProperties:ti,onPropertyReset:tC,selectorCandidates:e$,activeSelector:eB,scopeLevels:eE,activeLevelIndex:eT,onScopeLevelChange:tO,onScopeLevelHover:tW,ownedProperties:O,styleSources:ez,forcedState:eD,onForcedStateChange:e8,onPinLinesChange:e=>e_.current?.updatePinLines(e)},g.selector)]})]})}),u&&eo&&!ey&&(0,o.jsx)(rp,{side:ef,theme:ed,onThemeChange:eh,fidelity:M,onFidelityChange:A,onHide:()=>{ei(!1),ea(!1),eu(!1),e5(),ek(!0)},exiting:es}),u&&g&&P&&(0,o.jsx)(rE,{element:g.element,hoveredProperty:P,revision:I})]})}),Z)}e.s(["Composer",0,rF,"DevOverlay",0,rF,"Retune",0,rF,"overlayStyles",0,a])}]);