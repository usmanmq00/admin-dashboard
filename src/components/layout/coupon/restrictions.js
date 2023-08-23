import { ReactComponent as Question } from "../../../assets/images/coupon/question.svg";
import { useState } from "react";

const Restriction = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(); // Prevent form submission on Enter key
      const newTag = tagInput.trim();
      if (newTag !== "") {
        setTags((prevTags) => [...prevTags, newTag]);
        setTagInput("");
      }
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      <section className="mt-[14px] pl-[12px] mb-[20px]">
        <div className="flex gap-[40px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Minimum spend
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <input
                name="limit"
                className="w-[322px] pl-[6px] outline-none py-[3px] appearance-none"
                type="text"
              />
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
        <div className="flex gap-[40px] mt-[22px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Maximum spend
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <input
                name="usage"
                className="w-[322px] pl-[6px] outline-none py-[3px] appearance-none"
                type="text"
              />
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
        <div className="mt-[22px] flex gap-[40px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Individual use only
          </label>
          <div className="flex gap-[7px] items-center">
            <input type="checkbox" />
            <label className="text-[#555555] text-[14px] leading-[24px] font-normal">
              Check this box if the coupon cannot be used in conjunction with
              other coupons.
            </label>
          </div>
        </div>
        <div className="my-[22px] flex gap-[40px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Exclude sale items
          </label>
          <div className="flex gap-[7px] items-center">
            <input type="checkbox" className="mb-7" />
            <div>
              <label className="text-[#555555] text-[14px] leading-[24px] font-normal block">
                Check this box if the coupon should not apply to items on sale.
                Per-item coupons will only work if the item{" "}
              </label>
              <label className="text-[#555555] text-[14px] leading-[24px] font-normal">
                is not on sale. Per-cart coupons will only work if there are
                items in the cart that are not on sale.
              </label>
            </div>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex gap-[40px] mt-[22px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Products
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <div className="w-72 p-2 border rounded">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 p-1 rounded flex items-center"
                    >
                      <span
                        className="text-gray-600 ml-2 cursor-pointer pr-2 font-bold"
                        onClick={() => handleDeleteTag(tag)}
                      >
                        X
                      </span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  className="w-full mt-2 outline-none rounded px-2 py-1"
                  value={tagInput}
                  onChange={handleTagInput}
                  onKeyDown={handleAddTag}
                />
              </div>
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
        <div className="flex gap-[40px] mt-[22px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Exclude products
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <input
                name="usage"
                className="w-[322px] pl-[6px] outline-none py-[3px] appearance-none"
                type="text"
                placeholder="Search for a product..."
              />
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
        <div className="flex gap-[40px] mt-[22px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Product categories
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <input
                name="usage"
                className="w-[322px] pl-[6px] outline-none py-[3px] appearance-none"
                type="text"
              />
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
        <div className="flex gap-[40px] mt-[22px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Exclude categories
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <input
                name="usage"
                className="w-[322px] pl-[6px] outline-none py-[3px] appearance-none"
                type="text"
              />
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
        <div className="flex gap-[40px] mt-[22px]">
          <label className="font-normal text-[#555555] text-[14px] w-[160px]">
            Allowed emails
          </label>
          <div className="flex gap-[7px] items-center">
            <div className="w-[330px] border-[1px] border-[#8C8F94]">
              <input
                name="usage"
                className="w-[322px] pl-[6px] outline-none py-[3px] appearance-none"
                type="text"
              />
            </div>
            <div className="cursor-pointer">{<Question />}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restriction;
