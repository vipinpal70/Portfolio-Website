import "vanilla-tilt";

// Add missing type declarations
declare module "vanilla-tilt" {
  export interface VanillaTiltSettings {
    reverse?: boolean;
    max?: number;
    startX?: number;
    startY?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: string;
    reset?: boolean;
    "reset-to-start"?: boolean;
    easing?: string;
    glare?: boolean;
    "max-glare"?: number;
    "glare-prerender"?: boolean;
    gyroscope?: boolean;
    gyroscopeMinAngleX?: number;
    gyroscopeMaxAngleX?: number;
    gyroscopeMinAngleY?: number;
    gyroscopeMaxAngleY?: number;
    "mouse-event-element"?: string | HTMLElement | null;
    "full-page-listening"?: boolean;
  }

  export interface VanillaTiltElement extends HTMLElement {
    vanillaTilt: {
      destroy: () => void;
      reset: () => void;
      getValues: () => any;
      getMousePosition: () => { x: number; y: number };
      getMousePositionOnScreen: () => { x: number; y: number };
      setMousePosition: (x: number, y: number) => void;
      setMousePositionOnScreen: (x: number, y: number) => void;
      clearMousePosition: () => void;
      getAngleX: () => number;
      getAngleY: () => number;
      updateElementPosition: () => void;
      updateCall: (event: any) => void;
      onMouseEnter: (event: any) => void;
      onMouseMove: (event: any) => void;
      onMouseLeave: (event: any) => void;
      onDeviceOrientation: (event: any) => void;
    };
  }

  export function init(elements: HTMLElement | HTMLElement[], settings?: VanillaTiltSettings): void;
}

declare module "typed.js" {
  export interface TypedOptions {
    strings?: string[];
    stringsElement?: string;
    typeSpeed?: number;
    startDelay?: number;
    backSpeed?: number;
    smartBackspace?: boolean;
    shuffle?: boolean;
    backDelay?: number;
    fadeOut?: boolean;
    fadeOutDelay?: number;
    loop?: boolean;
    loopCount?: number;
    showCursor?: boolean;
    cursorChar?: string;
    autoInsertCss?: boolean;
    attr?: string;
    bindInputFocusEvents?: boolean;
    contentType?: string;
    onBegin?: (self: any) => void;
    onComplete?: (self: any) => void;
    preStringTyped?: (arrayPos: number, self: any) => void;
    onStringTyped?: (arrayPos: number, self: any) => void;
    onLastStringBackspaced?: (self: any) => void;
    onTypingPaused?: (arrayPos: number, self: any) => void;
    onTypingResumed?: (arrayPos: number, self: any) => void;
    onReset?: (self: any) => void;
    onStop?: (arrayPos: number, self: any) => void;
    onStart?: (arrayPos: number, self: any) => void;
    onDestroy?: (self: any) => void;
  }

  export default class Typed {
    constructor(element: Element | string, options: TypedOptions);
    toggle(): void;
    stop(): void;
    start(): void;
    destroy(): void;
    reset(): void;
  }
}

// Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  downloadLink?: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Custom animation property
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  variants?: object;
  custom?: any;
  delay?: number;
}
