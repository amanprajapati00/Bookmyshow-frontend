import { EventCommonCard } from "../componnets/EventCommonCard";
import { Header } from "../componnets/Header";
import { outdoor } from "../componnets/list";
export function ActivitiesPAGE() {
  return (
    <div className="bg-[#f5f5f5]">
      <Header/>
      <EventCommonCard cat={outdoor} title1={"Activities"} />
    </div>
  );
}
