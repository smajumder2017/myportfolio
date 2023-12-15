import { Badge } from "@/components/ui/badge";

export const edicationDetails = [
  {
    heading: {
      title: "Siliguri Institute of Technology (MAKAUT)",
      extra: (
        <Badge variant={"secondary"}>
          Bachelor of Technology in Computer Science & Engineering
        </Badge>
      ),
    },
    subHeading: "2012-2016",
    content: `Completed my degree with 8.30 DGPA, participated in college football team as a goalkeeper, built multiple projects throughout my college life, also I was the class representative`,
  },
  {
    heading: {
      title: "Bankura Kenduadihi High School (WBBHSE)",
      extra: <Badge variant={"secondary"}>Higher Secondary (10+)</Badge>,
    },
    subHeading: "2010-2012",
    content: `Completed my degree with 75%, here my core subjects were Physics, Chemistry, Math and Biology`,
  },
  {
    heading: {
      title: "Bankura Zilla School",
      extra: <Badge variant={"secondary"}>Secondary</Badge>,
    },
    subHeading: "2001-2010",
    content: `Passed with 77.75% marks and completed my general studies`,
  },
];
