import { Link } from "react-router-dom";

export const ClientDetailsSection = ({ singleClientData }) => {
  console.log('ddddddd',singleClientData)
  const event = singleClientData?.data?.events;
  console.log(event);
  const eventData = [
    {
      event: "September Holiday Drive 9/2",
      driver: "Holiday Drive",
      schedule: "9/2/24",
      confirmation: "confirmed",
      dietary: "None",
      people: "1",
      bags: "3",
    },
    {
      event: "Mitzvah Sunday 10/14",
      driver: "Mitzvah Day",
      schedule: "10/14/24",
      confirmation: "confirmed",
      dietary: "None",
      people: "1",
      bags: "3",
    },
    {
      event: "Mitzvah Sunday 10/28",
      driver: "Mitzvah Day",
      schedule: "10/28/24",
      confirmation: "confirmed",
      dietary: "None",
      people: "1",
      bags: "3",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-md font-semibold mb-1 mt-8">Events</h1>
        <table className="lg:w-full w-[1000px] border-collapse  border border-gray-300">
          <thead>
            <tr className="bg-gray-100 ">
              <th className=" px-4 py-2 text-left text-sm font-medium">
                Event Name
              </th>

              <th className=" px-4 py-2 text-left text-sm font-medium">
                Schedule Date
              </th>

              <th className=" px-4 py-2 text-left text-sm font-medium">
                End Date
              </th>
              <th className=" px-4 py-2 text-left text-sm font-medium">
                Event Type
              </th>
              <th className=" px-4 py-2 text-left text-sm font-medium">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {event?.map((eventItem, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-3 text-sm">
                  <Link to={`/event/eventDetails/${eventItem._id}`}>
                    <p className="text-[#007AFF] underline">
                      {eventItem.eventName}
                    </p>
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(eventItem.dayOfEvent).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm">{eventItem.endOfEvent}</td>
                <td className="px-4 py-3 text-sm">{eventItem.eventType}</td>
                <td className="px-4 py-3 text-sm">{eventItem.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
