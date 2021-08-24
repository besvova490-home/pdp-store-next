import Image from "next/image";

//interface
import { ImagePlaceholderProps } from "../types/Components.types";

//assets
import productPlaceholder from "../assets/image/product/productPlaceholder.png";


function ImagePlaceholder ({ url = productPlaceholder, alt = "", className = "" }: ImagePlaceholderProps): JSX.Element {


  return (
    <Image src={url} alt={alt} className={className}/>
  );
}


export default ImagePlaceholder;
