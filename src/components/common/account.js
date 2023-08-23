const Account = ({ Img }) => {
  return (
    <>
      <section className="md:w-[50%] w-[0%] bg-[#2F4EF7] flex justify-center items-center overflow-hidden account">
        <div className="realtive w-[250px] overflow-hidden">
          <div className="">
            <img className="z-10 relative" src={Img} alt="Lock" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
