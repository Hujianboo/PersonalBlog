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
            "I am a  <span class='text-[#bcff06] text-6xl'>frontend engineer</span>with five years of experience, having worked at Bilibili, Shopee and XTransfer. I am also a <span class='text-[#bcff06] text-6xl'>painting enthusiast</span> .",
          ]}
          typeSpeed={4}
          startDelay={1500}
          showCursor={false}
        />
      </p>
    </div>
  );
};
