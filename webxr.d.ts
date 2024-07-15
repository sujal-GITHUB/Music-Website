declare namespace XR {
    // Define types and interfaces as needed for WebXR API
    interface XRSession {}
    // Add other types and interfaces as needed
  }
  
  declare global {
    interface Navigator {
      xr?: XR;
    }
  }