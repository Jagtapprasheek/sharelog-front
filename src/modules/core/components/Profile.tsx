interface InfoCardProps {
    title: string;
    content: string;
}

  
const Profile : React.FC = () => {
    return (
        <div className="container-fluid h-full">
          <div className="flex flex-col-reverse sm:flex-row pb-5">
            <div className="md:w-3/12 md:mx-auto">
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
            </div>
            
            <div className="md:w-8/12 md:mx-auto">
              <div className="px-5">
                <h1>Personal Information</h1>
                <p className="text-lg text-gray-600">
                  Below are your personal details including phone number, email etc.
                </p>
              </div>
    
              <div className="flex flex-wrap">
                <InfoCard title="Full Name" content="Hella Johanson" />
                <InfoCard title="Date of Birth" content="19-September-1985" />
                <InfoCard title="Email" content="h.johanson@sharelog.com" />
                <InfoCard title="Phone" content="(+1) 010-0980-789" />
                <InfoCard title="Pan Detail" content="PQR###RWW" />
                <InfoCard title="Address" content="21, Landburg Steet, Wiscosin, United States." />
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  const InfoCard:React.FC<InfoCardProps>= ({ title , content }) => (
    <div className="w-full md:w-5/12 m-2 p-3 bg-white shadow rounded-lg">
      <h6 className="pl-3">{title}</h6>
      <h6 className="pl-3 text-gray-600">{content}</h6>
    </div>
  );

  export default Profile;