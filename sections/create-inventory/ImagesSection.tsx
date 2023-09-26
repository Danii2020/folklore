/* eslint-disable import/no-unresolved */

'use client';

import { useState } from 'react';

import styles from '../../styles';
import { UploadImageBlock, PlaceHolderImageBlock } from '../../components/image-blocks/index';

const ImagesSection = () => {
  const [editingBlocks, setEditingBlocks] = useState<boolean[]>([false, false, false, false, false, false, false, false, false]);

  const handleImageUploaded = (index: number) => {
    const newEditingBlocks = [...editingBlocks];
    newEditingBlocks[index] = true;
    setEditingBlocks(newEditingBlocks);
  };

  return (
    <div className={`${styles.xPaddings} max-w-[1400px] m-auto float-none relative`}>
      <div className="w-full float-left">
        <div>
          <div
            className="md:p-6 p-5 md:mb-6 mb-5 rounded-[3px] bg-white border-[1px]
        border-[#e1e3df] m-0"
          >
            <div className="md:mb-6 mb-5">
              <h2 className={`${styles.subTitle} font-medium mb-[6px]`}>
                Fotos
              </h2>
              <p className={`${styles.blockText} font-light`}>
                Añade todas las que puedas para que los compradores puedan ver cada detalle.
              </p>
            </div>
            <div className="flex md:flex-row flex-col float-none relative m-0">
              <div className="md:w-[33.66%] w-full">
                <label className={`${styles.smallText} mb-1 font-bold`}>
                  Fotos *
                </label>
                <div className="mb-3">
                  <p className={`${styles.blockText} mb-3`}>
                    Usa hasta diez fotos para mostrar los aspectos más destacables de tu artículo
                  </p>
                  <p className={`${styles.blockText} mb-3`}>
                    Consejos:
                  </p>
                  <ul className={`${styles.blockText} list-outside list-disc pl-4`}>
                    <li>
                      Usa luz natural sin flash.
                    </li>
                    <li>
                      Incluye un objeto ordinario para que se vea la escala.
                    </li>
                    <li>
                      Muestra el artículo en la mano, puesto o en acción.
                    </li>
                    <li>
                      Utiliza un fondo liso y sencillo.
                    </li>
                    <li>
                      Añade fotos a las variantes para que los compradores puedan ver todas las opciones.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-[66.33%] w-full lg:px-12 px-3 float-left">
                <div className="flex flex-wrap md:gap-3 pl-0">
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    <UploadImageBlock onImageUploaded={() => handleImageUploaded(1)} />
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[1] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(2)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Principal"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-1.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[2] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(3)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Ángulos"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-2.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[3] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(4)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Ángulos"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-3.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[4] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(5)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Ángulos"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-4.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[5] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(6)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Información"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-5.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[6] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(7)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="En uso"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-6.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[7] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(8)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Tamaño"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-7.0000.svg"
                        />
                      )
                    }
                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[8] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(9)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Con atreza"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-8.0000.svg"
                        />
                      )
                    }

                  </div>
                  <div className="mr-0 p-2 lg:w-[18.5%] image-block">
                    {
                      editingBlocks[9] ? (
                        <UploadImageBlock onImageUploaded={() => handleImageUploaded(10)} />
                      ) : (
                        <PlaceHolderImageBlock
                          imageTitle="Variantes"
                          imageUrl="https://www.etsy.com/images/seller-tools/add-photos-placeholders/placeholder-9.0000.svg"
                        />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
