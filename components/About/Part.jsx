import Image from "next/image";
import React from "react";

const Proud_Part = () => {
  return (
    <div className="text-white py-20 lg:py-44">
      <div className="border-t-[0.1px] border-gray-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-40">We are a</p>

            <h1 className="text-120 font-semibold">Proud</h1>
          </div>

          <img
            src={
              "https://images.unsplash.com/photo-1486881809698-a59614a9ac7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV0dXJpc3RpY3xlbnwwfHwwfHx8MA%3D%3D"
            }
            width={300}
            height={300}
            className=""
            alt="proud"
          />
        </div>
      </div>
      <div className="border-t-[0.1px] border-gray-500">
        <div className="max-w-7xl mx-auto flex flex-row-reverse items-center justify-between">
          <div>
            <p className="text-40">part of</p>
            <Image
              src={"/virtuos-logo.svg"}
              width={150}
              className="w-120"
              height={50}
              alt="Virtuos Logo"
            />
            {/* <h1 className="text-120 font-semibold">Virtuos</h1> */}
          </div>

          <img
            src={
              "https://plus.unsplash.com/premium_photo-1682309816611-13d10f667c58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            }
            width={300}
            height={300}
            className=""
            alt="proud"
          />
        </div>
      </div>
      <div className="border-t-[0.1px] border-gray-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-40">the</p>

            <h1 className="text-120 font-semibold">Digital + AI</h1>
            {/* <p className="text-40">Company.</p> */}
          </div>

          <img
            src={
              "https://images.unsplash.com/photo-1486881809698-a59614a9ac7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV0dXJpc3RpY3xlbnwwfHwwfHx8MA%3D%3D"
            }
            width={300}
            height={300}
            className=""
            alt="proud"
          />
        </div>
      </div>
      <div className="border-t-[0.1px] border-b-[0.1px] border-gray-500">
        <div className="max-w-7xl mx-auto flex flex-row-reverse items-center justify-between">
          <div>
            <p className="text-40">Transformation</p>

            <h1 className="text-120 font-semibold">Company.</h1>
          </div>

          <img
            src={
              "https://images.unsplash.com/photo-1486881809698-a59614a9ac7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV0dXJpc3RpY3xlbnwwfHwwfHx8MA%3D%3D"
            }
            width={300}
            height={300}
            className=""
            alt="proud"
          />
        </div>
      </div>
    </div>
  );
};

export default Proud_Part;
