declare class OffscreenCanvas {
    constructor(width: number, height: number);
    getContext(contextId: '2d', options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;
    // Add other methods and properties as needed
  }
  
  declare global {
    interface Window {
      OffscreenCanvas: typeof OffscreenCanvas;
    }
  }
  