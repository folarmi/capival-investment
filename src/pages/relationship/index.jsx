import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../atoms";
import { getRelationshipOfficerAsync } from "../../slices/utils";

const RelationshipOfficer = () => {
  const dispatch = useDispatch();
  const { getRelationShipOfficerLoading, officerDetails } = useSelector(
    (state) => state.utils
  );

  //   {
  //     "name": "BRANCH",
  //     "phone": "+234 908 2274 825",
  //     "email": "customer@capival.com"
  // }
  useEffect(() => {
    dispatch(getRelationshipOfficerAsync());
  }, []);

  return (
    <div>
      {getRelationShipOfficerLoading ? (
        <Loader />
      ) : (
        <div className="mt-10">
          <p className="text-base text-center text-blueTwo uppercase">
            Relationship officer
          </p>

          <div className="w-full flex items-center pt-8 pb-4 border-b border-blueTwo/30">
            <p className="text-base font-normal text-blueTwo md:w-[40%] pl-[10%]">
              Your Relationship Officer is
            </p>
            <p className="text-base font-normal text-blueTwo md:w-[60%]">
              {officerDetails?.name}
            </p>
          </div>

          <div className="w-full flex items-center pt-8 pb-4 border-b border-blueTwo/30">
            <p className="text-base font-normal text-blueTwo md:w-[40%] pl-[10%]">
              Contact
            </p>
            <p className="text-base font-normal text-blueTwo md:w-[60%]">
              {officerDetails?.phone}
            </p>
          </div>

          <div className="w-full flex items-center pt-8 pb-4 border-b border-blueTwo/30">
            <p className="text-base font-normal text-blueTwo md:w-[40%] pl-[10%]">
              Email
            </p>
            <p className="text-base font-normal text-blueTwo md:w-[60%]">
              {officerDetails?.email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export { RelationshipOfficer };
