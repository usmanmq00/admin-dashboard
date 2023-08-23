import React, { useRef, useState } from "react";

// img
import imgTempate from "../../../../assets/images/inventory/imgTempate.png";
import EditIcon from "../../../../assets/images/inventory/EditIcon.svg";
import { useProductContext } from "../../../../context/ProductContext";

const Thumbnail = () => {
  const [showImage, setShowImage] = useState(null);

  const { formErrors, setSelectedThumbnail } = useProductContext();

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    setSelectedThumbnail(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setShowImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <h1 className="font-semibold text-xl">Thumbnail</h1>

      <section className="w-full flex justify-center items-center my-4">
        <div
          className="rounded-lg h-40 w-40 relative"
          style={{ boxShadow: "0px 6.5px 19.5px 6.5px #00000013" }}
        >
          <img
            src={showImage || imgTempate}
            alt="template"
            className="h-full w-full rounded-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            type="button"
            className="absolute -top-[12px] -right-[12px] bg-white z-10 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer"
            style={{ boxShadow: "0px 6.5px 19.5px 6.5px #00000013" }}
            onClick={() => fileInputRef.current.click()}
          >
            <img src={EditIcon} alt="EditIcon" />
          </button>
        </div>
      </section>

      <p className="text-[#A1A5B7] text-xs text-center">
        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
        files are accepted
      </p>

      {formErrors.thumbnail && <p>{formErrors.thumbnail}</p>}
    </div>
  );
};

export default Thumbnail;
