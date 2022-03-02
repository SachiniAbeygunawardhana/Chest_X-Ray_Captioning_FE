import { UploadIconProps } from "../types";

// export const UploadIcon = ({ src, width, height, onClick}: UploadIconProps) => (
//   <img src={`/img/svg/${src}`} alt={src} width={width} height={height} onClick={onClick}/>
// );

export const UploadIcon = ({ src, width, height}: UploadIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height}/>
);