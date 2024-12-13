import SVGIcon from "@/components/SVGIcon";

const PageNavBar = () => {
  return (
    <div
      className={
        "h-[50px] w-full bg-primary-85 flex justify-between items-center px-4"
      }
    >
      <h2 className="text-2xl font-extrabold text-white">APIKeyPER</h2>
      <button>
        <SVGIcon icon={"IC_Menu"} size={"lg"} className={"fill-white"} />
      </button>
    </div>
  );
};

export default PageNavBar;
