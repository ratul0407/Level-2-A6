import { Outlet, useLocation } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import { useEffect, useState } from "react";
import Loading from "./components/shared/Loading";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [loading, setLoading] = useState<boolean>(isHome);
  useEffect(() => {
    if (isHome) {
      requestAnimationFrame(() => setLoading(false));
    }
  }, [isHome]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </>
  );
};

export default App;
