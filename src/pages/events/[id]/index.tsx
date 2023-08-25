import { FC } from "react";
import { useRouter } from "next/router";

import { Box, Typography, Divider } from "@mui/material";

import { getEventById } from "@/data/data";

const EventPage: FC = () => {
 const router = useRouter();

 const eventId = typeof router.query.id === "string" ? router.query.id : null;
 const event = eventId && getEventById(eventId);

 return (
  <Box
   component="section"
   sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   }}
  >
   <Typography
    component="h1"
    variant="h4"
    sx={{
     marginBottom: "60px",
    }}
   >
    Event Page
   </Typography>

   {event ? (
    <Box
     sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      width: "600px",
      gap: "14px",

      padding: "20px",

      borderRadius: "20px",
      border: "1px solid #ccc",
     }}
    >
     <Box
      component="img"
      height="200px"
      width="300px"
      src={`../${event.image}`}
     />
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "center",
       gap: "14px",
      }}
     >
      <Typography component="h2" variant="h5">
       {event.title}
      </Typography>
      <Typography component="p" variant="body1">
       {event.description}
      </Typography>
      <Divider
       sx={{
        width: "100%",
       }}
      />
      <Typography component="p" variant="body1">
       Location:{event.location}
      </Typography>
      <Typography component="p" variant="body1">
       Date:{event.date}
      </Typography>
      <Divider
       sx={{
        width: "100%",
       }}
      />
      <Typography component="p" variant="body1">
       {event.isFeatured ? "Featured Event" : "Not Featured Event"}
      </Typography>
     </Box>
    </Box>
   ) : (
    <Typography
     component="p"
     variant="h3"
     sx={{
      color: "red",
     }}
    >
     No event found
    </Typography>
   )}
  </Box>
 );
};

export default EventPage;
