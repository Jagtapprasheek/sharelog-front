import profilePic from '../../../../public/profile-pic.jpg'
import { CiLogout } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";


interface InfoCardProps {
    title: string;
    content: string;
}

  
const Profile : React.FC = () => {
    return (
        <div className="container-fluid h-full">
          <div className="flex flex-col-reverse sm:flex-row pb-5 ">
            {/* <div className="md:w-3/12 md:mx-auto">
              <div className="text-center">
                <img src="Profile_pic.webp" alt="" className="w-48 rounded-full mx-auto" />
                <h3 className="mt-4 font-sans">Hella Johanson</h3>
                <div className="mt-2 space-y-2">
                  <h6>
                    <a className="text-blue-600" href="#">Edit Your Profile Details</a>
                  </h6>
                  <h6>
                    <a className="text-blue-600" href="#">Refer Your Close One</a>
                  </h6>
                  <h6>
                    <a className="text-blue-600" href="#">Deactivate Your Account</a>
                  </h6>
                  <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg" type="submit">Sign Out</button>
                </div>
              </div>
            </div> */}
            
            <div className="md:w-8/12 md:mx-auto">
              <div className="px-5 flex w-full flex-col items-center justify-center">
                {/* <h1>Personal Information</h1> */}
                <img src={profilePic} alt="Profile-Logo" className="w-1/4 h-1/4 rounded-full" />

                {/* <label for="cars">Choose a car:</label> */}

                  <select name="cars" id="cars" className='bg-slate-900 p-1 text-white mt-10 mb-5 rounded-xl'>
                    <option value="volvo">Edit Profile</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select> 
              </div>
    
              <div className="flex flex-wrap justify-center items-center">
                <InfoCard title="Account" />
                <InfoCard title="Security"  />
                <InfoCard title="Cards"  />
                <InfoCard title="Notification" />
                <InfoCard title="Backup" />
                <InfoCard title="Help"  />
              </div>

              <div className='flex justify-center items-center gap-16 text-white mt-5'>
              
                <a href="#"> <CiLogout />  </a> <span>LogOut</span>
                <a href="#"> <CiCircleAlert /> </a> <span>Remove Account</span>
              </div>

            </div>
          </div>
        </div>
      );
  };
  
  const InfoCard:React.FC<InfoCardProps>= ({ title}) => (
    <div className="md:w-4/12 mb-5 mr-10 p-10 bg-slate-900 text-white shadow rounded-2xl w-[70px]">
      <h6 className="pl-3 ">{title}</h6>
    </div>
  );

  export default Profile;