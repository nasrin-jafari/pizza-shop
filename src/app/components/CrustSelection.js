const CrustSelection = ({crust , setCrust}) => {
const labels = ["traditional" , "thin" , ];
  return (
    <div className="flex justify-center items-center 
    lg:justify-start">
      <div className="flex gap-x-12 mb-8 font-medium ">
        {labels.map((label) => (
          <label key={label} className="capitalize flex items-center gap-2 cursor-pointer ">
            <input
              className="appearance-none w-4 h-4 border
           border-gray-400 rounded-full checked:bg-gradient-to-r
           checked:from-primary checked:to-secondary 
           checked:border-secondary cursor-pointer"
              type="radio"
              name="crust"
              value={label}
              checked={crust === label}
              onChange={(e) => setCrust(e.target.value)}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CrustSelection;
