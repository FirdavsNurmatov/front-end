export const HeroItem = ({ imgUrl, roomName }) => {
  return (
    <div>
      <img src={imgUrl} alt="img" />
      <p className=" font-semibold text-2xl text-center text-[#333] mt-[30px]">
        {roomName}
      </p>
    </div>
  );
};
