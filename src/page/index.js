import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions";

const Page = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData({}));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default Page;
