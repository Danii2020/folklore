/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { ChangeEvent, useState } from 'react';

import styles from '../../styles';
// type Props = {
//   root: string;
//   querySlug: string[];
// }

type UploadImageBlocksProps = {
  onImageUploaded: () => void;
};

const UploadImageBlocks = ({ onImageUploaded }: UploadImageBlocksProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageUploaded();
    }
  };

  return (
    <div
      className="flex justify-center items-center max-w-none w-full h-[125px] rounded-[3px] bg-white border-[1px]
      border-[#e1e3df] relative cursor-pointer md:py-2 py-1"
      style={{ backgroundImage: `url(${selectedImage})`, backgroundSize: 'contain', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat' }}
    >
      {selectedImage ? null : (
        <div className="relative m-[2px]">
          <div className="top-0 w-full">
            <div className="align-middle text-center">
              <span className="w-[46px] h-[46px] mb-[6px] inline-block">
                <svg
                  className="overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="13" r="3" />
                  <path d="M20,6H16V5a1,1,0,0,0-1-1H9A1,1,0,0,0,8,5V6H4A1,1,0,0,0,3,7V19a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V7A1,1,0,0,0,20,6ZM12,18a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,18Z" />
                </svg>
              </span>
              <div className={`${styles.smallText} text-[#222] lg:block hidden mt-2`}>
                Añadir una foto
              </div>
            </div>
          </div>
        </div>
      )}
      <form className="h-full top-0 absolute" id="photo-uploader">
        <label className="hidden" htmlFor="edit-image-ulpload">Añadir una foto</label>
        <input type="hidden" name="_nnc" />
        <input
          className="opacity-0 z-20 w-full h-full cursor-pointer relative"
          type="file"
          name="image-upload"
          id="edit-image-ulpload"
          multiple
          accept=".png,.jpeg,.jpg,.gif"
          onChange={handleImageUpload}
        />
      </form>
    </div>
  );
};

export default UploadImageBlocks;
