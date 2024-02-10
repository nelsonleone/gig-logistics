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
import "./filepond-override2.css";
import { IProfileDetailsUpdateFormData } from '../../../../../types';


registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginImageEdit,
    FilePondPluginFileValidateType
)


function AuthUserProfileImageUpdate({ setValue }: { setValue: UseFormSetValue<IProfileDetailsUpdateFormData>}) {
    
    const [itemImage, setItemImage] = useState<string | ArrayBuffer | null>()

    const handleFileLoad = (fileItems:FilePondFile[]) => {
        if(!fileItems || !fileItems.length || !fileItems[0].file)return;
        const uploadedFile = fileItems[0].file;
    
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64String = reader.result;

          setItemImage(base64String)
        }
    
        reader.readAsDataURL(uploadedFile)
    }

    useEffect(() => {
        if(setValue){
            setValue('updatedProfileImage',itemImage as string)
        }
    },[itemImage])

    return (
        <div className="mb-5">
            <p className="my-3">Update Profile Picture</p>
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
                name="updatedProfileImage"
                labelIdle='<span style={{display:"block", fontSize: ".9rem", color: "black"}}>Upload An Image</span> <span class="filepond--label-action" style={{display:"block"}}>Choose File</span>'
            />
        </div>
    )
}

export default AuthUserProfileImageUpdate;