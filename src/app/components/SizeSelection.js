import Image from "next/image";
const SizeSelection = ({ pizza, setSize, size }) => {
  const labels = ["small", "medium", "large"];
  return (
    <div
      className="mx-auto max-w-xs lg:max-w-none 
    flex items-center justify-center lg:justify-start"
    >
      <div className="flex gap-x-12 items-baseline mb-10 font-medium ">
        {labels.map((label) => (
          <label
            key={label}
            className="capitalize flex flex-col items-center gap-x-2 cursor-pointer"
          >
            <Image
              className={`${
                size === label
                  ? "border-2 border-orange p-[2px] rounded-full"
                  : "border-transparent filter saturate-[.1]"
              } mb-1`}
              src={pizza.image}
              width={60}
              height={60}
              alt=""
              priority={1}
            />
            <input
              type="radio"
              name="size"
              value={label}
              checked={size === label}
              onChange={(e) => setSize(e.target.value)}
              className="appearance-none mb-1 "
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
