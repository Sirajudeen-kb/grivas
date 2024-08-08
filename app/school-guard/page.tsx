import ImageWithButtons from "./Component";

const App: React.FC = () => {
  const initialImageUrl = "/images/schoolbus/app-screen-6.jpg"; // Default image URL
  const buttons = [
    { label: "BUS DASHBOARD", imageUrl: " /images/schoolbus/app-screen-6.jpg" },
    { label: "BUS MANAGEMENT", imageUrl: "/images/schoolbus/app-screen-7.jpg" },
    { label: "BUS ATTENDANCE", imageUrl: "/images/schoolbus/app-screen-8.jpg" },
    { label: "BUS TRACKING", imageUrl: "/images/schoolbus/app-screen-9.jpg" },
    {
      label: "BUS LIVE LOCATION",
      imageUrl: "/images/schoolbus/app-screen-10.jpg",
    },
    {
      label: "NO ONE LEFT BEHIND BUS",
      imageUrl: "/images/schoolbus/app-screen-11.jpg",
    },
    {
      label: "PANIC BUTTON ALERTS",
      imageUrl: "/images/schoolbus/app-screen-12.jpg",
    },
    {
      label: "DRIVER BEHAVIOUR",
      imageUrl: "/images/schoolbus/app-screen-13.jpg",
    },
    {
      label: "BUS HEALTH MONITORING",
      imageUrl: "/images/schoolbus/app-screen-14.jpg",
    },
  ];
  const initialImageUrl1 = "/images/schoolbus/app-screen-1.jpg"; // Default image URL

  const button1 = [
    { label: "PROFILE", imageUrl: " /images/schoolbus/app-screen-1.jpg" },
    { label: "LIVE LOCATION", imageUrl: "/images/schoolbus/app-screen-2.jpg" },
    { label: "NOTIFICATION", imageUrl: "/images/schoolbus/app-screen-3.jpg" },
    { label: "ATTENDANCE", imageUrl: "/images/schoolbus/app-screen-4.jpg" },
    { label: "QUICK LINK", imageUrl: "/images/schoolbus/app-screen-5.jpg" },
  ];
  const initialImageUrl2 = "/images/school-smart/app-screen-6.jpg"; // Default image URL

  const button2 = [
    { label: "DASHBOARD", imageUrl: " /images/school-smart/app-screen-6.jpg" },
    {
      label: "STUDENT MANAGEMENT",
      imageUrl: "/images/school-smart/app-screen-7.jpg",
    },
    {
      label: "STAFF MANAGEMENT",
      imageUrl: "/images/school-smart/app-screen-8.jpg",
    },
    {
      label: "STUDENT PROFILE",
      imageUrl: "/images/school-smart/app-screen-9.jpg",
    },
    {
      label: "PANIC BUTTON ALERTS",
      imageUrl: "/images/school-smart/app-screen-10.jpg",
    },
    {
      label: " LEFT BEHIND SCHOOL",
      imageUrl: "/images/school-smart/app-screen-11.jpg",
    },
    {
      label: " NO ONE LEFT BEHIND SCHOOL",
      imageUrl: "/images/school-smart/app-screen-12.jpg",
    },
    {
      label: " LIVE TRACKING",
      imageUrl: "/images/school-smart/app-screen-13.jpg",
    },
    {
      label: "AUTOMATIC ATTENDANCE",
      imageUrl: "/images/school-smart/app-screen-14.jpg",
    },
    {
      label: "QUICK LINKS",
      imageUrl: "/images/school-smart/app-screen-15.jpg",
    },
  ];
  const initialImageUrl3 = "/images/school-smart/app-screen-1.jpg"; // Default image URL

  const button3 = [
    { label: "PROFILE", imageUrl: " /images/school-smart/app-screen-1.jpg" },
    {
      label: "LIVE LOCATION",
      imageUrl: "/images/school-smart/app-screen-2.jpg",
    },
    {
      label: "NOTIFICATION",
      imageUrl: "/images/school-smart/app-screen-3.jpg",
    },
    { label: "ATTENDANCE", imageUrl: "/images/school-smart/app-screen-4.jpg" },
    { label: "QUICK LINK", imageUrl: "/images/school-smart/app-screen-5.jpg" },
  ];
  return (
    <>
      <div>
        <div className="p-5 m-5">
          <h1 className=" text-center text-5xl font-bold">
            Smart Bus Solution
          </h1>
        </div>
        <div>
          <h1 className=" text-center text-3xl font-medium p-5">
            Bus web application
          </h1>
          <p className=" text-center lg:px-32 md:px-32 px-5">
            The School Guard bus solution offers several benefits to school
            management, including enhanced safety and security measures for
            students during their school commute. With our advanced monitoring
            system, the solution guarantees the safety of all students by
            alerting the school management immediately through SMS and email if
            a student is left behind. In case of emergencies, the school guard
            smart card allows students to communicate quickly and easily with
            the school management. The solution also ensures the safety of
            students on the road by continuously monitoring the bus health and
            notifying the school management in case of any issues. It tracks the
            bus speed, braking, and other unsafe driving habits, providing
            alerts for the school management to take necessary action.
            Therefore, the solution makes sure that not only the bus arrives
            safely at school, but also that every student enters the school
            building securely. The smart monitoring system ensure that no
            student is left behind on the bus, and the solution sends out the
            alerts notification via SMS and email to the school management in
            case of any issues.
          </p>
        </div>
        <div className="container mx-auto p-4">
          <ImageWithButtons
            initialImageUrl={initialImageUrl}
            buttons={buttons}
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className=" text-center text-3xl font-medium p-5">Parent App</h1>
          <p className=" text-center lg:px-32 md:px-32 px-5">
            The School Guard mobile application is the perfect solution for
            parents who are concerned about child safety while they are
            travelling for school. With this app, parents can easily track the
            location of the school bus in real-time and receive alerts when
            their child gets on or off the bus. Additionally, the app allows
            parents to monitor the school attendance and many more.
          </p>
        </div>
        <div className="container mx-auto p-4">
          <ImageWithButtons
            initialImageUrl={initialImageUrl1}
            buttons={button1}
          />
        </div>
      </div>
      <div>
        <div className="p-5">
          <h1 className=" text-center text-5xl font-bold">
            Smart School Solution
          </h1>
        </div>
        <div>
          <h1 className=" text-center text-3xl font-medium p-5">
            School web application
          </h1>
          <p className=" text-center lg:px-32 md:px-32 px-5">
            The School Guard solution offers numerous benefits to school
            management, ensuring the safety and security of every student on the
            school premises. With the use of advanced technology, the solution
            offers features such as automatic attendance tracking, location
            tracking of students inside the school premises, and notification to
            the school management if a student is in a restricted zone. The
            solution also ensures that all students have safely exited the
            school premises after school hours. Additionally, the School Guard
            solution offers a range of other features, including detailed
            student, two-way communication between school and parents, homework
            and assignment, exam portals, event photo galleries, and visitor
            management.
          </p>
        </div>
        <div className="container mx-auto p-4">
          <ImageWithButtons
            initialImageUrl={initialImageUrl2}
            buttons={button2}
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className=" text-center text-3xl font-medium p-5">Parent App</h1>
          <p className=" text-center lg:px-32 md:px-32 px-5">
            The School Guard mobile application is the perfect solution for
            parents who are concerned about child safety while they are
            travelling for school. With this app, parents can easily track the
            location of the school bus in real-time and receive alerts when
            their child gets on or off the bus. Additionally, the app allows
            parents to monitor the school attendance and many more.
          </p>
        </div>
        <div className="container mx-auto p-4">
          <ImageWithButtons
            initialImageUrl={initialImageUrl3}
            buttons={button3}
          />
        </div>
      </div>
      <h1 className=" text-center text-3xl font-medium p-5">Get it on</h1>
      
      <div className="flex  justify-center  w-100 ml-auto my-3 mx-2 gap-5">
            <a
              href="https://apps.apple.com/us/app/the-school-guard/id6443582194"
              target="_blank"
              className="flex items-center h-auto w-100  justify-center px-3  text-center text-white bg-white rounded-2xl"
              rel="noreferrer"
            >
              <svg
                className="w-7"
                viewBox="0 0 40 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="40"
                      height="45"
                      fill="rgb(59 130 246 / 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                <span className="text-sm text-black">Get it on</span>
                <span className="text-base font-semibold text-black">
                  App Store
                </span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.theschoolgaurd.app&hl=en_IN"
              target="_blank"
              className="flex items-center h-auto w-100 justify-center px-3 py-3  text-center text-white bg-white rounded-2xl"
              rel="noreferrer"
            >
              <svg
                className="w-7"
                viewBox="-9 0 274 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                    fill="#FFD900"
                  ></path>
                  <path
                    d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                    fill="#F43249"
                  ></path>
                  <path
                    d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                    fill="#00EE76"
                  ></path>
                  <path
                    d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                    fill="#00D3FF"
                  ></path>
                </g>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                <span className="text-sm text-black">Get it on</span>
                <span className="text-base font-semibold text-black">
                  Play Store
                </span>
              </div>
            </a>
          </div>
    </>
  );
};

export default App;
