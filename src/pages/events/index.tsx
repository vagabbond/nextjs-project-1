import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { getAllEvents } from "@/data/data";

const EvantsPage: FC = () => {
 const events = getAllEvents();
 const router = useRouter();

 console.log(events);
 return (
  <section>
   <h1> Events Page</h1>
   <ul>
    {events.map((event) => (
     <li key={event.id}>
      <Link href={`/events/${event.id}`}>
       <img src={`${event.image}`} width={300} height={200} />
       <h2>{event.title}</h2>
       <p>{event.description}</p>
       <p>{event.date}</p>
       <p>{event.location}</p>
       <div></div>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
};

export default EvantsPage;
