import Body from "../components/Body";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function LandingPage() {
  // const history = useHistory();

  // function handleClick() {
  //   history.replace("/new-page");
  // }
  return (
    <Body>
      <div className="h-auto w-[100%] bg-slate-800 flex items-center justify-center gap-10 flex-col font-serif text-gray-400">
        <div className="w-auto bg-black p-3 rounded-lg opacity-50 absolute left-5 top-5">
          <div>DH</div>
        </div>
        <div className=" w-auto h-auto">
          <p className="text-2xl font-semibold">Welcome to DarkHaul</p>
        </div>
        <div className="bg-gray-900 w-2/3 h-auto p-5 rounded-md opacity-50 ">
          <p>
            Welcome to DarkHaul, an interplanetary black market website where we
            embrace the power of the dark side and push the limits of what's
            possible. In our world, it's the 24th century and intergalactic
            travel is the norm. We offer a unique shopping experience where you
            can find items that are banned and restricted by the government,
            such as Jupiterian crystals, certain alien plants and animals, space
            weapons, and many more.
            <br /> We believe in individual freedom and that people should be
            able to purchase and own what they want. That's why we offer these
            items freely, without government interference or regulation. Our
            products are carefully sourced and vetted to ensure that they meet
            our high standards of quality and authenticity. So come join us at
            DarkHaul, where the possibilities are endless and the darkness
            within is waiting to be unleashed.
            <br />
            <br />
            Escape the bounds of the cosmos
          </p>
        </div>
        <div className=" flex items-center gap-3">
          <Link to="/home" className=" p-2 cursor-pointer">
            <button className="p-3 bg-slate-600 rounded-md">
              Visit as a guest
            </button>
          </Link>
          <Link>
            <button
              // onClick={handleClick}
              className="p-3 bg-slate-600 rounded-md"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </Body>
  );
}

export default LandingPage;
