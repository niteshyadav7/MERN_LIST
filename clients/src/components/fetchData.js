import { useEffect } from "react";

const url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Fetch = () => {
  useEffect(() => {
    dataFetch(url);
  }, []);

  const dataFetch = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      <div>My Div</div>
    </>
  );
};

export default Fetch;
