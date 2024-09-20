import { Link } from "react-router-dom";
import imageSrc1 from "../images/test1.jpg";
import LinkButton from "./LinkButton";
function Card() {
  return (
    <li className="w-full pb-[7rem] pl-[7rem] pt-[9rem]">
      <div className="mb-[4.8rem] flex">
        <Link to="/blog/1" className="inline-block h-[10vw] w-[10vw]">
          <img src={imageSrc1} alt="" className="h-[100%] w-[100%] bg-cover" />
        </Link>
        <div
          id="content-area"
          className="mb-[-0.5rem] w-[calc(100%-10.069vw)] pl-[5.7rem]"
        >
          <div className="mb-[1.8rem] flex">
            <div className="w-[36.4%] text-[1.7rem] uppercase tracking-[0.05em]">
              news
            </div>
            <div className="mt-[1rem] h-[2px] w-[20%] bg-brand-300"></div>
            <div className="w-[30%] pl-[1.6rem] text-[1.7rem] tracking-[0.05em]">
              <span>time</span>
            </div>
          </div>
          <div className="text-[21px] leading-[1.3] sm:text-[3.2rem]">
            <span>Lorem ipsum dolor sit amet conse adipisicing elit.</span>
          </div>
        </div>
      </div>
      <div id="short-intruduction">
        <p className="text-[16px] text-brand-900 sm:text-[1.8rem]">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            inventore quaerat enim, est ad modi neque aspernatur molestias
          </span>
        </p>
        <div className="pt-[10px] text-right sm:pt-[0.4rem]">
          <LinkButton>view more</LinkButton>
        </div>
      </div>
    </li>
  );
}

export default Card;
