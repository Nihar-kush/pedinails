import { ResponsiveLine } from "@nivo/line";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ResponsiveChoropleth } from "@nivo/geo";
// import data from "../utils/mapData";
import countries from "../world_countries.json";
import { BASE_SERVER_URL } from "../config";
import axios from "axios";

export default function LocationManagement() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locationCount, setLocationCount] = useState("");
  const [location, setLocation] = useState("");
  const [bookingsCount, setBookingsCount] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/analytics`)
      .then((response) => {
        setBookingsCount(response.data[0].total_bookings);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`${BASE_SERVER_URL}/api/location`)
      .then((response) => {
        setLocationCount(response.data.length);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addLocation = () => {
    console.log(location);
    if (location === "") {
      return;
    }
    setLoading(true);
    axios
      .post(`${BASE_SERVER_URL}/api/location`, { location: location })
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          alert(`Added Branch in ${location} successfully`);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-6 bg-[#FFFFFF]">
          <div className="div1 flex sm:flex-row flex-col gap-6">
            <div className="flex sm:w-[70%] w-full">
              <div className="rounded-[20px] w-full sm:h-auto h-full shadow-[4.0px_8.0px_8.0px_#a1a1a15f] flex flex-col gap-4 p-6 bg-[#F0F0F0]">
                <p className="text-[#6F6F6F] font-semibold text-2xl">
                  Map wise Revenue
                </p>
                <ResponsiveChoropleth
                  onClick={(data) => setLocation(data.label)}
                  data={data}
                  features={countries.features}
                  colors="YlOrBr"
                  unknownColor="#666666"
                  label="properties.name"
                  valueFormat=".2s"
                  projectionTranslation={[0.5, 0.5]}
                  enableGraticule={true}
                  graticuleLineColor="#dddddd"
                  borderWidth={0.5}
                  borderColor="#152538"
                  domain={[0, 1000000]}
                  legends={[
                    {
                      anchor: "bottom-left",
                      direction: "column",
                      justify: true,
                      translateX: 20,
                      translateY: -100,
                      itemsSpacing: 0,
                      itemWidth: 94,
                      itemHeight: 18,
                      itemDirection: "left-to-right",
                      itemTextColor: "#444444",
                      itemOpacity: 0.85,
                      symbolSize: 18,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#000000",
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col w-[30%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] justify-center py-4 w-60 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f] px-5">
                  <span className="flex flex-col gap-4 w-full pb-6 text-[#676666]">
                    <p className="text-base">Add Locations</p>
                    <div className=" flex flex-col gap-3 text-black font-semibold">
                      <input
                        readOnly={true}
                        placeholder="Pick from Map"
                        type="text"
                        className="rounded-lg p-2"
                        value={location}
                      />
                      <button
                        onClick={addLocation}
                        className="py-2 px-4 text-white rounded-lg bg-[#FCAC11] cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-center py-4 w-60 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col pb-6 text-[#676666]">
                    <p className="text-base">Total Bookings</p>
                    <p className="text-5xl text-black font-semibold">
                      {bookingsCount !== "" ? bookingsCount : "--"}
                    </p>
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-center py-4 w-60 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col pb-6 text-[#676666]">
                    <p className="text-base">Total Locations</p>
                    <p className="text-5xl text-black font-semibold">
                      {locationCount !== "" ? locationCount : "--"}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="div2 flex py-4 px-2">
            <div className="rounded-[20px] w-full sm:w-[80%] h-510 flex p-4 bg-[#F0F0F0]">
              <ResponsiveLine
                data={LM_data}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: true,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 10,
                  tickRotation: 0,
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                colors={{ scheme: "pastel2" }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
              />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Map() {
  <div></div>;
}
