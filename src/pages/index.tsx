import {
 Box,
 Card,
 CardContent,
 CardHeader,
 CardMedia,
 Divider,
 Link as MUILink,
 Typography,
} from "@mui/material";
import Link from "next/link";

import { getFeaturedEvents } from "@/data/data";

export default function Home() {
 const events = getFeaturedEvents();

 return (
  <Box component="section">
   <Typography component="h1" variant="h4">
    Home page
   </Typography>
   <Box
    component="ul"
    sx={{
     display: "flex",
     flexWrap: "wrap",
     gap: "14px",
    }}
   >
    {events.map((event) => (
     <Card sx={{ maxWidth: 345 }} key={event.id} component="li">
      <MUILink
       component={Link}
       href={`/events/${event.id}`}
       sx={{
        textDecoration: "none",
        color: "inherit",
       }}
      >
       <CardHeader title={event.title} subheader={event.date} />
       <CardMedia
        component="img"
        height="194"
        image={event.image}
        alt="Paella dish"
       />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
         {event.description}
        </Typography>
        <Divider
         sx={{
          marginTop: "10px",
          marginBottom: "10px",
         }}
        />
        <Typography variant="body2" color="text.secondary">
         Location:{event.location}
        </Typography>
       </CardContent>
      </MUILink>
     </Card>
    ))}
   </Box>
  </Box>
 );
}
