import React, { useEffect, useRef, useState } from "react";
import { User, Upload, Trash } from "lucide-react";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }

    // const previewUrl = URL.createObjectURL(file);
    // setPreviewUrl(previewUrl);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
    } else if (typeof image === "string") {
      setPreviewUrl(image);
    } else {
      const url = URL.createObjectURL(image);
      setPreviewUrl(url);
    }
  }, [image]);

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 relative">
          <User className="text-4xl text-primary" />

          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1"
            onClick={onChooseFile}
          >
            <Upload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile Picture"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"
            onClick={handleRemoveImage}
          >
            <Trash />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
