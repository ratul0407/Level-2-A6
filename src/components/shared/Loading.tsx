import { useLottie } from "lottie-react";
import loading from "../../assets/loading.json";
const Loading = () => {
  const options = {
    animationData: loading,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="min-h-screen bg-white min-w-full flex flex-col space-y-4 items-center justify-center">
      <div className="size-60">
        <>{View}</>
      </div>
      <p className="text-gray-600 -mt-16 text-lg">Getting your parcels!!!!</p>
    </div>
  );
};

export default Loading;
