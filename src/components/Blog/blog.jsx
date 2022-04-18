const Blog = () => {
  return (
    <div className="container px-5 lg:px-72 flex flex-col space-y-6 py-5 mx-auto">
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl fotn-bold">
          Difference between authorization and authentication?
        </h1>
        <p className="text-sm font-semibold">
          Simply put, authentication is the process of verifying who someone is,
          whereas authorization is the process of verifying what specific
          applications, files, and data a user has access to. The situation is
          like that of an airline that needs to determine which people can come
          on board
        </p>
        <p className="text-sm font-semibold">
          The first step is to confirm the identity of a passenger to make sure
          they are who they say they are. Once a passenger’s identity has been
          determined, the second step is verifying any special services the
          passenger has access to, whether it’s flying first-class or visiting
          the VIP lounge.
        </p>
      </div>

      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl fotn-bold">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="text-sm font-semibold">
          Firebase Authentication makes it easier to get your users signed-in
          without having to understand the complexities behind implementing your
          own authentication system. It offers a straightforward getting started
          experience, optional UX components designed to minimize user friction,
          and is built on open standards and backed by Google infrastructure.
        </p>

        <p className="text-sm font-semibold"></p>
      </div>

      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl fotn-bold">
          What other services does firebase provide other than authentication?
        </h1>
        <strong className=" border-b-2 border-b-black inline-block">
          Firebase Auth alternatives
        </strong>
        <ul className="text-sm font-semibold">
          <li>Parse – Open Source Backend Platform</li>
          <li>Back4app – Parse Hosting Platform</li>
          <li>
            Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise
          </li>
          <li>Backendless – Mobile Backend and API Services Platform</li>
          <li>
            Kuzzle – Backend for web, hybrid, or native mobile apps and IoT
            projects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
