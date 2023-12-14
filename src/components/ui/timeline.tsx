import Heading from "./heading";

interface ITimelineData {
  heading: {
    title: string;
    extra?: React.ReactNode;
  };
  subHeading?: React.ReactNode | string;
  icon?: React.ReactNode;
  content?: React.ReactNode | string;
}

interface ITimeline {
  data: ITimelineData[];
}

const Timeline: React.FC<ITimeline> = (props) => {
  return (
    <div className="ml-4">
      <ol className="relative border-s border-gray-700">
        {props.data.map((item) => {
          return (
            <li className="mb-10 ms-6" key={item.heading.title}>
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-700 bg-gray-400">
                {item.icon}
              </span>

              <Heading
                title={item.heading.title}
                size="lg"
                containerClass="mb-4 md:mb-1 ml-8 items-center"
                extra={
                  item.heading.extra || (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  )
                }
              />
              {item.subHeading && (
                <time className="block mb-2 ml-8 text-sm font-normal leading-none text-gray-500">
                  {item.subHeading || "Released on January 13th, 2022"}
                </time>
              )}
              {item.content && typeof item.content === "string" ? (
                <div className="ml-8">
                  <p className="mb-4 text-base font-normal text-gray-400">
                    {item.content}
                  </p>
                </div>
              ) : (
                <div className="ml-8">{item.content}</div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Timeline;
