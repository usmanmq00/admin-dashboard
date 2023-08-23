import Fill1 from "../../assets/images/account/Fill 1.png";
import { Link } from "react-router-dom";

const Form = ({ title, desc, btnText, link, path, onSubmit, children }) => {
  return (
    <>
      <section className="flex items-center justify-center md:w-[50%] w-[100%] overflow-hidden">
        <form
          className="h-[675px] w-[443px] text-center flex flex-col items-center"
          onSubmit={onSubmit}
        >
          <div className="bg-[#2F4EF799] w-14 h-14 mt-20 border-b-2 rounded-2xl relative">
            <div className="w-3 h-3 bg-[#2F4EF7] rounded-full mt-2 ml-3"></div>
            <img className="pt-1 w-20" src={Fill1} alt="Fill1" />
          </div>
          <div className=" mt-10 mb-10">
            <h1 className="font-base text-2xl">{title}</h1>
            <p className="font-normal text-gray-400 text-sm mt-3">{desc}</p>
          </div>

          {children}

          <div className="ml-60 text-end mb-10 w-32">
            <Link
              to={path}
              className="text-[#2F4EF7] text-end font-normal whitespace-nowrap"
            >
              {link}
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#2F4EF7] w-[375px] rounded-lg py-4 text-white cursor-pointer"
          >
            {btnText}
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
