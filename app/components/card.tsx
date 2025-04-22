'use client';
import {
  Container,
  Footprints,
  GalleryHorizontal,
  Gamepad,
  Microscope,
  Minimize,
  MonitorDot,
  MonitorSmartphone,
  Move,
  MoveDiagonal2,
  Octagon,
  PanelLeftOpen
} from "lucide-react";
import {redirect} from 'next/navigation';

interface CardProps {
  title?: string;
  description?: string;
  id?: string;
  tags?: string[];
  urlx?: string;
}

const icon_list = [
  <Microscope/>,
  <Container/>,
  <Footprints/>,
  <GalleryHorizontal/>,
  <Gamepad/>,
  <MonitorDot/>,
  <Minimize/>,
  <Move/>,
  <MonitorSmartphone/>,
  <MoveDiagonal2/>,
  <Octagon/>,
  <PanelLeftOpen/>
]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const Card = ({
                       tags,
                       urlx,
                       title,
                       description,
                       id,
                     }: CardProps) => {

  const clickAction = () => {
    console.log("clicked", id);
    if (urlx)
      redirect(urlx)
  }

  return (
      <div className="card w-72 shadow border border-gray-100 h-32 hover:border-gray-300"
           onClick={clickAction}>
        <div className={"flex flex-row items-center gap-3 p-5"}>
          <div>
            {icon_list.at(getRandomInt(icon_list.length))}
          </div>
          <div className={"max-w-full"}>
            <div>
              <p className={"text-lg pb-1"}>{title}</p>
            </div>
            <p className={"text-sm line-clamp-2"}>
              {description}
            </p>
          </div>
        </div>
      </div>
  );
}
