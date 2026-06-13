import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which Framer Motion's
// `whileInView` relies on. Provide a no-op polyfill so component tests render.
class IntersectionObserverMock {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
  disconnect(): void {}
  observe(_target: Element): void {}
  unobserve(_target: Element): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// @ts-expect-error - assigning mock to global for the test environment
globalThis.IntersectionObserver = IntersectionObserverMock;
// @ts-expect-error - jsdom window also needs it
if (typeof window !== 'undefined') window.IntersectionObserver = IntersectionObserverMock as any;

// matchMedia is also commonly required and not implemented in jsdom
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}
