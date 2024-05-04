"use client"

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useEffect, useState } from 'react';
import { FilePondFile } from 'filepond';
import { UseFormSetValue } from 'react-hook-form';
import "./filepond-overide.css";


registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginImageEdit,
    FilePondPluginFileValidateType
)


function CustomImageUpload({ setValue, label, name }: { setValue: UseFormSetValue<any>, label?: string, name?: string }) {
    
    const [itemImage, setItemImage] = useState<string | ArrayBuffer | null>()
    const inputName = name || 'itemImage';

    const handleFileLoad = (fileItems:FilePondFile[]) => {
        const uploadedFile = fileItems[0].file;
    
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64String = reader.result;

          setItemImage(base64String)
        }
    
        reader.readAsDataURL(uploadedFile)
    }

    useEffect(() => {
        if(setValue && itemImage){
            setValue(inputName,itemImage as string)
        }
    },[itemImage])

    return (
        <div>
            <p className="my-3">{label || "Upload Item"}</p>
            <FilePond
                onupdatefiles={handleFileLoad}
                allowMultiple={false}
                onremovefile={() => setItemImage(null)}
                allowFileTypeValidation
                labelFileTypeNotAllowed="Added file is invalid"
                acceptedFileTypes={['image/png', 'image/jpeg']}
                maxFiles={1}
                stylePanelAspectRatio="1:0.60"
                allowFileSizeValidation
                maxFileSize="200kb"
                imagePreviewMinHeight={230}
                required
                allowReplace
                name="deliveryItems.itemImage"
                labelIdle='<span style={{display:"block", fontSize: ".9rem", color: "black"}}>Upload An Image</span> <span class="filepond--label-action" style={{display:"block"}}>Choose File</span>'
            />
        </div>
    )
}

export default CustomImageUpload;