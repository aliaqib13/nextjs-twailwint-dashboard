import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return isLogin ? children : null;
};

export default PrivateRoute;
