import { ReactTyped } from "react-typed";

export const SelfDesc = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold font-alibaba">
        <ReactTyped
          strings={[
            "Hello, I'm <span class='text-[#bcff06] text-6xl'>Hu Jianbo</span>,",
          ]}
          typeSpeed={10}
          showCursor={false}
        />
      </h1>
      <p className="text-xl mt-4 font-alibaba">
        <ReactTyped
          strings={[
            "<span class='text-[#bcff06] text-6xl'>Frontend Engineer</span><br /><span class='text-white text-6xl'>&amp;</span><br /><span class='text-[#bcff06] text-6xl'>Art Enthusiast</span>",
          ]}
          typeSpeed={8}
          startDelay={1500}
          showCursor={false}
        />
      </p>
    </div>
  );
};
