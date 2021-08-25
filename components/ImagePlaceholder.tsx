//interface
import { ImagePlaceholderProps } from "../types/Components.types";


function ImagePlaceholder ({ url = "/images/product/productPlaceholder.png", alt = "", className = "" }: ImagePlaceholderProps): JSX.Element {


  return (
    <img src={url} alt={alt} className={className}/>
  );
}


export default ImagePlaceholder;
