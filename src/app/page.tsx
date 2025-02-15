import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Sai Spandana ",
};
const index = () => {
  return (
    <Wrapper>
      <HomeOne />
      <ToastContainer />
    </Wrapper>
  );
};

export default index;
