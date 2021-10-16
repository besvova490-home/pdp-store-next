import { ChangeEvent } from "react";
import { classNames } from "coax-ui-lib-0";

//helpers
import { general } from "../../helpers/api/general/general";

//styles
import styles from "../../assets/scss/elements/Upload.module.scss";

interface UploadInterface {
  onUpload?: (image: { name: string; url: string }) => void;
  error?: string;
  previewImage?: string;
}

function Upload({ onUpload, error, previewImage }: UploadInterface): JSX.Element {
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files.length) return;

    const uploadedImage = await general.uploadImage(e.target.files[0]);
    onUpload && onUpload(uploadedImage);
  };

  const uploadClassNames = classNames(
    styles.uploader,
    {
      [styles.uploader_error]: error,
      [styles["uploader_has-image"]]: !!previewImage,
    }
  );

  return (
    <div className={uploadClassNames}>
      <input type="file" className={styles["uploader-tag"]} onChange={handleUpload}/>
      {
        previewImage
          ? <img className={styles["uploader__image-preview"]} src={previewImage} alt="" />
          : (
            <span role="image" className={styles.uploader__image}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"/>
                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 255.79l-64-64-64 64m64 192.42V207.79"/>
              </svg>
            </span>
          )
      }
      {
        error && <span className={styles["uploader__error-label"]}>{error}</span>
      }
    </div>
  );
}

export default Upload;
