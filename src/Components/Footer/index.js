import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col w-auto ">
      <div className="flex flex-row flex-wrap justify-between w-auto bg-purple-500 p-10 text-white shadow-2xl">
        <div className="w-auto flex-shrink-0">Get connected with us on social networks!</div>
        <div className="flex flex-row w-auto md:w-1/5 items-end space-x-4 flex-shrink-0">
          <div className="w-auto">FB</div>
          <div className="w-auto">TW</div>
          <div className="w-auto">G</div>
          <div className="w-auto">L</div>
          <div className="w-auto">I</div>
        </div>
      </div>
      <div className="flex justify-evenly h-auto xs:h-auto sm:h-auto md:h-80 p-10 flex-wrap">
        <div className="w-80 flex-shrink-0">
          <p className="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold leading-loose">
            Company Info
          </p>
          <p className="text-center mt-2 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
        <div className="w-80 flex-shrink-0">
          <p className="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold leading-loose">
            Products
          </p>
          <ul className="text-center mt-2 text-gray-500">
            <li>First Product</li>
            <li>Second Product</li>
            <li>Third Product</li>
            <li>Fourth Product</li>
            <li>Fifth Product</li>
          </ul>
        </div>
        <div className="w-80 flex-shrink-0">
          <p className="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold leading-loose">
            Useful links
          </p>
          <ul className="text-center mt-2 text-gray-500">
            <li>First Product</li>
            <li>Second Product</li>
            <li>Third Product</li>
            <li>Fourth Product</li>
            <li>Fifth Product</li>
          </ul>
        </div>
        <div className="w-80 flex-shrink-0">
          <p className="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold leading-loose">
            Contact
          </p>
          <ul className="text-center mt-2 text-gray-500">
            <li>First Product</li>
            <li>Second Product</li>
            <li>Fourth Product</li>
            <li>Third Product</li>
            <li>Fifth Product</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 mt-2 text-gray-500 ">Copy rights</div>
    </footer>
  );
}

export default Footer;
