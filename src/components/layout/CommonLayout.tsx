import { ReactNode } from "react";
import Footer from "../Footer";

interface IProps {
  children: ReactNode;
}
const CommonLayout = ({ children }: IProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
