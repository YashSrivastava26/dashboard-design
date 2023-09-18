import { FC } from "react";
import Card from "./Card";
import AddBtn from "../assets/btnAdd.svg";
import DisabledAddBtn from "../assets/btnAdd (1).svg";
import Image from "next/image";

interface TaskListProps {}

interface TaskContentItem {
  title: string;
  content: CardContents[];
}

const TaskList: FC<TaskListProps> = ({}) => {
  const tasklist: TaskContentItem[] = [
    {
      title: "To-Do List (24)",
      content: [
        {
          label: "Important",
          description:
            "Create sign up sheet for holiday student/parent conferences.",
          completion: "20",
          due: "Due in 4 days",
          people: "4",
          color: "yellow",
        },
        {
          label: "Instructor Meeting",
          description: "Plan holiday demonstration program. Create outline.",
          completion: "30",
          due: "Due in 4 days",
          people: "3",
          color: "pink",
        },
        {
          label: "Task 1",
          description: "Task 1",
          completion: "20",
          due: "Due in 4 days",
          people: "2",
          color: "green",
        },
      ],
    },
    {
      title: "In Progress (2)",
      content: [
        {
          label: "Video",
          description: "Create sparring tutorial video for the weekly class.",
          completion: "85",
          due: "Due in 4 days",
          people: "3",
          color: "yellow",
        },
        {
          label: "BUGS FIXING",
          description: "Payment gateway needs reauthorization.",
          completion: "95",
          due: "Due in 4 days",
          people: "4",
          color: "red",
        },
      ],
    },
    {
      title: "Done (3)",
      content: [
        {
          label: "BUGS FIXING",
          description: "Action Button needed for Google Maps visits.",
          completion: "100",
          due: "Due in 4 days",
          people: "4",
          color: "red",
        },
        {
          label: "Database",
          description: "Update new instructor photos.",
          completion: "100",
          due: "Due in 4 days",
          people: "4",
          color: "green",
        },
        {
          label: "Instructor Meeting",
          description: "Review/correct yellow belt techniques.",
          completion: "100",
          due: "Due in 4 days",
          people: "4",
          color: "pink",
        },
      ],
    },
    {
      title: "Revised (0)",
      content: [],
    },
    // Add more task items as needed
  ];
  return (
    <div className=" h-full w-full gap-4 overflow-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scrollbar scrollbar-thumb-primary scrollbar-track-dark-02 scrollbar-thumb-rounded scrollbar-w-1">
      {tasklist.map((task) => (
        <div
          className="h-full w-full rounded-t-lg flex flex-col gap-y-2"
          key={task.title}
        >
          <div className="px-4 flex items-center justify-between">
            <span className="text-lg tracking-wider">{task.title}</span>
            <div className="h-8 w-8 pt-1">
              <Image src={AddBtn} alt="add" />
            </div>
          </div>
          {task.content.map((content) => (
            <Card content={content} key={content.label} />
          ))}
          {task.content.length === 0 && (
            <div className="w-full rounded-lg bg-[#211A75] p-4">
              <div className="w-full h-full bg-dark-02 flex items-center justify-center rounded-md text-primary p-2 border border-dashed border-iris-80">
                Move card here
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
