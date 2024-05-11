import React from "react";

function GlassCover({
  children,
  className,
  glassColor = "rgba(49, 49, 49, 0.9)",
  glassHeight = "100vh",
  glassWith = "100vw",
  ...props
}) {
  return (
    <div
      style={{ maxWidth: glassWith, height: glassHeight, backgroundColor: glassColor }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlassCover;
