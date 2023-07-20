const arr = [1, 2, 3, 4, 5];

const Footer = () => {
  return (
    <>
      <div>Footer</div>
      <div>
        {arr.map((x,i)=>{
          return(
            <div>{x}</div>
          )
        })}
      </div>
    </>
  );
};
export default Footer;
