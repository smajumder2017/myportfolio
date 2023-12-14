import { cn } from "@/lib/utils";

interface IHeading {
  title: string | React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | string;
  extra?: React.ReactNode;
  containerClass?: string;
}

const Heading: React.FC<IHeading> = (props) => {
  const textSizeClass = props.size
    ? ["xs", "sm", "base", "lg", "xl", "2xl", "4xl"].includes(props.size)
      ? `text-${props.size}`
      : `text-[${props.size}]`
    : "text-4xl";
  return (
    <div
      className={cn(
        "flex flex-wrap gap-2 md:gap-4 items-end mb-8",
        props.containerClass
      )}
    >
      <h3 className={cn(textSizeClass, `tracking-wide text-primary`)}>
        {props.title}
      </h3>
      {typeof props.extra === "string" ? (
        <p className="text-sm tracking-wide text-gray-200 leading-7">
          {props.extra}
        </p>
      ) : (
        <>{props.extra}</>
      )}
    </div>
  );
};

export default Heading;
