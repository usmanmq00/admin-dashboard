import React, { useRef } from "react";
import documentuploadIcon from "../../../../../assets/images/inventory/documentuploadIcon.svg";
import { useProductContext } from "../../../../../context/ProductContext";

const Media = () => {
  const fileInputRef = useRef(null);

  const { selectedMedia, setSelectedMedia } = useProductContext();

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedMedia((prevSelectedMedia) => [...prevSelectedMedia, ...files]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedMedia];
    updatedFiles.splice(index, 1);
    setSelectedMedia(updatedFiles);
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="space-y-6 bg-white rounded-lg p-4 w-full">
      <h1 className="font-semibold text-xl">Media</h1>

      <div className="space-y-2">
        {selectedMedia.length > 0 ? (
          <div className="border border-dashed border-[#2F4EF7] p-4 flex gap-3 items-center bg-[#f1faff] rounded-lg flex-wrap">
            {selectedMedia.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt="uploaded"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white text-sm h-6 w-6 flex items-center justify-center rounded-full p-1"
                >
                  X
                </button>
              </div>
            ))}

            {selectedMedia.length < 10 && (
              <button
                type="button"
                onClick={handleContainerClick}
                className="w-20 h-20 flex items-center border border-dashed border-[#2F4EF7] justify-center rounded-lg"
              >
                <img src={documentuploadIcon} alt="upload" />
              </button>
            )}
          </div>
        ) : (
          <div
            onClick={handleContainerClick}
            className="border cursor-pointer border-dashed border-[#2F4EF7] p-4 flex gap-3 items-center bg-[#f1faff] rounded-lg"
          >
            <img src={documentuploadIcon} alt="upload" />
            <section className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold">Click to upload.</h4>
              <p className="text-[#A1A5B7] text-xs">Upload up to 10 images</p>
            </section>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        <p className="text-[#A1A5B7] text-xs">Set the product media gallery.</p>
      </div>
    </section>
  );
};

export default Media;
