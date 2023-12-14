import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import jsIcon from "@/assets/javascripticon.svg";
import { cn } from "@/lib/utils";

interface ISkillData {
  icon: React.ReactNode;
  value: string;
}

export interface ISkill {
  data: ISkillData[];
  title: string;
  subtitle: string;
}

const Skills: React.FC<ISkill> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.data.map((skill, index) => {
          return (
            <div
              key={skill.value}
              className={cn("flex gap-2 items-center", index > 0 ? "mt-4" : "")}
            >
              {skill.icon || jsIcon}
              <div className="text-sm">{skill.value}</div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Skills;
