# Optimization Plan for Murali K. Portfolio

## 1. Performance Optimizations

### 1.1 Lazy Loading Heavy Components
**Issue**: The `Skills` component imports heavy charting libraries (`recharts`) and animation libraries (`framer-motion`) which increase the initial bundle size.
**Solution**: Implement `React.lazy` and `Suspense` for the `Skills` component to load it only when it enters the viewport.
**Impact**: Significantly faster initial page load (LCP).

### 1.2 Optimize `TypingEffect` Component
**Issue**: Currently uses `useState` and `useEffect` with `setTimeout` which triggers a React re-render for every single character typed. This causes layout thrashing.
**Solution**:
   - Refactor to use `useRef` to update the DOM directly or use a CSS-based animation/transition for better performance.
   - Alternatively, keep React state but wrap it in `React.memo` and ensure the parent component doesn't re-render unnecessarily.
**Impact**: Smoother typing animation, reduced CPU usage.

### 1.3 Optimize Scroll Listeners
**Issue**: `App.tsx` and `Navbar.tsx` use `useEffect` with scroll event listeners that update state on every pixel scrolled. This forces a re-render of the entire app/navbar tree on scroll.
**Solution**:
   - Move scroll logic to a custom hook.
   - Use passive listeners.
   - Ideally, use CSS `sticky` and `backdrop-filter` for the navbar background instead of JS listeners, or debounce the scroll handler if JS logic is strictly necessary.
**Impact**: Smoother scrolling experience, especially on lower-end devices.

### 1.4 Memoize Data Processing
**Issue**: In `Skills.tsx`, data filtering (`SKILLS.filter(...)`) happens on every render.
**Solution**: Move data processing outside the component or use `useMemo`.
**Impact**: Reduced computational cost on render.

## 2. Code Quality & Architecture

### 2.1 Context API for Theme Management
**Issue**: `isDark` and `setIsDark` are passed as props from `App` down to `Navbar` and potentially others.
**Solution**: Create a `ThemeContext` to avoid prop drilling.
**Impact**: Cleaner component tree, easier to maintain.

### 2.2 Use `lucide-react` Optimization
**Issue**: Default imports from `lucide-react` might include the entire icon set in the bundle if not configured correctly (though Vite usually handles tree-shaking well).
**Solution**: Explicitly import only the icons used.
**Status**: *Already mostly done, but verify.*

### 2.3 Hardcoded Values
**Issue**: Year "2026" in `Footer.tsx`.
**Solution**: Use `new Date().getFullYear()`.
**Impact**: Code that doesn't expire.

## 3. Accessibility & SEO

### 3.1 Semantic HTML Improvements
**Issue**: Some sections use `div` where `article` or `section` might be more appropriate (e.g., Project cards, Experience items).
**Solution**:
   - Wrap Project cards in `<article>`.
   - Ensure heading hierarchy (h1-h6) is correct across sections.

### 3.2 Button/Link Accessibility
**Issue**: "View Projects" and "Contact Me" in `Hero` are anchor tags styled as buttons. "Contact Me" might need `role="button"` or be a real `<button>` if it doesn't navigate.
**Solution**: Ensure correct ARIA roles and contrast ratios (colors look good, but verify with tools).

## 4. Implementation Steps

1.  **Setup**: Create `plans/` directory and this file.
2.  **Refactor Context**: Create `src/context/ThemeContext.tsx`.
3.  **Optimize Utilities**: Create `src/hooks/useScrollPosition.ts` (or similar).
4.  **Refactor Components**:
    *   Update `App.tsx` to use Context.
    *   Update `Navbar.tsx` to use Context and optimized scroll logic.
    *   Refactor `TypingEffect.tsx`.
    *   Update `Skills.tsx` to use `React.lazy` and `useMemo`.
    *   Update `Footer.tsx` with dynamic year.
5.  **Review**: Verify all changes with Lighthouse/PageSpeed Insights.

## 5. Estimated Effort

This plan involves refactoring ~5-7 files. The changes are modular and can be implemented in any order.
