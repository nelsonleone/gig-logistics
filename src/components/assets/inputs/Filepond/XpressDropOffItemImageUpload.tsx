"use client"

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useEffect, useState } from 'react';
import { FilePondFile } from 'filepond';
import { UseFormSetValue } from 'react-hook-form';
import { DeliveryItems } from '../../../../../types';
import "./filepond-overide.css";


registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginImageEdit
)


function XpressDropOffItemImageUpload({ setValue }: { setValue: UseFormSetValue<DeliveryItems>}) {
    
    const [itemImage, setItemImage] = useState<string | ArrayBuffer | null>()

    const handleFileLoad = (fileItems:FilePondFile[]) => {
        const uploadedFile = fileItems[0].file;
    
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64String = reader.result;
          console.log('Base64 String:', base64String)

          setItemImage(base64String)
        }
    
        reader.readAsDataURL(uploadedFile)
    }

    useEffect(() => {
        if(setValue && itemImage){
            setValue('itemImage',itemImage as string)
        }
    },[itemImage])

    return (
        <div>
            <p className="my-3">Upload Item</p>
            <FilePond
                onupdatefiles={handleFileLoad}
                allowMultiple={false}
                acceptedFileTypes={['image/png', 'image/jpeg']}
                maxFiles={1}
                required
                allowReplace
                name="deliveryItems.itemImage"
                labelIdle='<span style={{display:"block", fontSize: ".9rem", color: "black"}}>Upload An Image</span> <span class="filepond--label-action" style={{display:"block"}}>Choose File</span>'
            />
        </div>
    )
}

export default XpressDropOffItemImageUpload;