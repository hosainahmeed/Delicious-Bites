

const SectionTitle = ({heading,subHeading,hidden}) => {
    return (
        <div className={`flex items-center ${hidden} justify-center `}>
        <div className="text-center py-4">
          <h3 className="italic text-[#D99904] py-2">---{subHeading}---</h3>
          <h1 className="text-4xl border-y-2 border-[#dadada] py-3 px-12">
            {heading}
          </h1>
        </div>
      </div>
    );
};

export default SectionTitle;