import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Calendar from "react-calendar";
import axios from "axios";
import { HiOutlineTrash } from "react-icons/hi";
import { BASE_SERVER_URL } from "../../config";
import { generateMonthYearString } from "../../utils";
import { addDays, differenceInCalendarDays } from "date-fns";

export default function BookingCalender() {
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentMonthsBookedData, setCurrentMonthsBookedData] = useState([]);
  const [bookingsData, setBookingsData] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(false);
  const [prevSlotSearch, setPrevSlotSearch] = useState(null);
  const [styleActive, setStyleActive] = useState(false);
  const [highlightedDates, setHighlightedDates] = useState([]);

  useEffect(() => {
    const slotId = generateMonthYearString(date);
    if (slotId === prevSlotSearch) {
      return;
    }
    axios
      .get(`${BASE_SERVER_URL}/api/bookings/get?timestamp=${date}`)
      .then((response) => {
        setPrevSlotSearch(slotId);
        // response.data.bookedDates.map((date) => console.log(date.date));
        setCurrentMonthsBookedData(response.data.data.bookedDates);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [date]);

  useEffect(() => {
    if (!currentMonthsBookedData) {
      return;
    }
    createHighlightedArray(currentMonthsBookedData);
  }, [currentMonthsBookedData]);

  const createHighlightedArray = (array) => {
    const newArray = array.map((item) => {
      const dateObject = new Date(date);
      return new Date(dateObject.setDate(item.date));
    });
    console.log(newArray);
    setHighlightedDates(newArray);
  };

  useEffect(() => {
    if (!currentMonthsBookedData) return;
    const dates = currentMonthsBookedData?.filter(
      (item) => item.date === date.getDate()
    );
    getBookingDetails(dates);
  }, [date, currentMonthsBookedData]);

  const makeIdString = (array) => {
    if (!array) return "";
    return array.reduce(
      (boookingIds, currentValue, currentIndex) =>
        boookingIds + (currentIndex === 0 ? "" : ",") + currentValue.id,
      ""
    );
  };

  const getBookingDetails = (dates) => {
    const ids = makeIdString(dates);
    axios
      .get(`${BASE_SERVER_URL}/api/bookings/getDetails?ids=${ids}`)
      .then((response) => {
        setBookingsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      customerName,
      customerNumber,
      service,
      price,
      timestamp: date,
    };
    axios
      .post(`${BASE_SERVER_URL}/api/bookings/add`, data)
      .then((response) => {
        if (response.data.success) {
          setBookingsData((prev) => [...prev, data]);
          alert("Booking added successfully");
          setCurrentMonthsBookedData((prev) => [
            ...prev,
            { date: date.getDate(), id: response.data.data },
          ]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error123");
        console.error(error);
      });
    setActive(false);
    setCustomerName("");
    setCustomerNumber("");
    setService("");
    setPrice("");
  };

  const deleteBooking = (id) => {
    const data = {
      id,
      date,
    };
    axios
      .post(`${BASE_SERVER_URL}/api/bookings/delete`, data)
      .then((response) => {
        if (response.data.success) {
          setBookingsData((prev) =>
            prev.filter((booking) => booking.id !== id)
          );
          alert("Booking deleted successfully");
          setCurrentMonthsBookedData((prev) =>
            prev.filter((booking) => booking.id !== id)
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileClassName({ date, view }) {
    if (
      view === "month" &&
      highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
      return "highlight";
    }
  }

  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4 relative ">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF] ">
          <div className="w-full flex items-center p-4 ">
            <div className="rounded-[10px] w-full  overflow-hidden flex flex-col sm:flex-row gap-1 shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
              <div className="div1 sm:w-[50%] w-full">
                <Calendar
                  tileClassName={tileClassName}
                  onChange={setDate}
                  value={date}
                />
                <div className=" w-full bg-white flex flex-row-reverse p-4">
                  <button
                    onClick={() => setActive(!active)}
                    className="bg-[#FCAC11] text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Add Booking
                  </button>
                  {active && (
                    <div className="absolute w-[27rem] top-10 right-36 z-10 bg-[#ffffff] shadow-xl rounded-md py-4 px-6 flex flex-col gap-8 items-center">
                      <p className="text-4xl font-semibold">Add New Booking</p>
                      <form
                        className="flex flex-col gap-6 w-[70%]"
                        onSubmit={addBooking}
                      >
                        <div className="border-b-[1px]">
                          <p>Customer's Name</p>
                          <input
                            className="w-full"
                            required
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                          />
                        </div>
                        <div className="border-b-[1px]">
                          <p>Customer's Phone no.</p>
                          <input
                            className="w-full"
                            required
                            min="0"
                            type="text"
                            value={customerNumber}
                            onChange={(e) => setCustomerNumber(e.target.value)}
                          />
                        </div>
                        <div className="border-b-[1px]">
                          <p>Service Name</p>
                          <input
                            className="w-full"
                            required
                            type="text"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                          />
                        </div>
                        <div className="border-b-[1px]">
                          <p>Price</p>
                          <input
                            className="w-full"
                            required
                            type="number"
                            min="0"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center justify-center gap-5">
                          <button
                            onClick={() => setActive(false)}
                            className="text-white py-2 px-4 rounded-md text-center bg-[#289D01]"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="text-white py-2 px-4 rounded-md text-center bg-[#FCAC11]"
                          >
                            {loading ? "Adding" : "Add"}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              {bookingsData && bookingsData.length < 1 ? (
                <div className="div2 w-[50%] flex flex-col p-4">
                  <span className="relative text-[1.02rem] w-[80%] bold rounded-lg bg-white pl-0 font-sans overflow-hidden">
                    <span className="absolute h-full bg-[#FF1744] w-2"></span>
                    <p className="p-4">
                      There are no events planned for {date.toDateString()}.
                    </p>
                  </span>
                </div>
              ) : (
                <div className="div2 flex flex-col relative h-[24rem] gap-4 overflow-y-scroll scroll-smooth">
                  <p className="sticky py-2 bg-[#FCAC11] left-0 top-0 text-center text-xl text-white">
                    Bookings
                  </p>
                  <div className="flex text-[#F0F0F0] text-xs sm:text-base font-semibold p-5 rounded-[10px] justify-around items-center bg-[#4C4C4C] transition duration-75 ease-in-out shadow-md">
                    <img src="/img/target.png" alt="" className="w-7" />
                    <span className="text-center w-40">Customer</span>
                    <span className="text-center w-40 ">Phone</span>
                    <span className="text-center w-40">Service</span>
                    <span className="text-center w-40">Price</span>
                  </div>
                  {bookingsData.map((data) => {
                    return (
                      <div
                        className="flex text-[#676666] text-xs sm:text-base p-5 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                        key={data.id}
                      >
                        <img src="/img/target.png" alt="" className="w-7" />
                        <span className="text-center w-40 truncate">
                          {data.customerName}
                        </span>
                        <span className="text-center w-40">
                          {data.customerNumber}
                        </span>
                        <span className="text-center w-40">{data.service}</span>
                        <span className="text-center w-40">${data.price}</span>
                        <HiOutlineTrash
                          className="text-xl hover:scale-125"
                          onClick={() => deleteBooking(data.id)}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
