import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Define custom styles using Material-UI's makeStyles hook
const useStyles = makeStyles({
  root: {
    minWidth: 275, // Minimum width for the card
    margin: "10px", // Margin around each card
    float: "left", // Float cards to the left
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out", // Smooth transition for transform and background color
    '&:hover': {
      transform: "scale(1.05)", // Scale the card on hover
      backgroundColor: "#db9335", // Change background color on hover
    },
  },
  title: {
    fontSize: 14, // Font size for title
  },
  pos: {
    marginBottom: 12, // Margin bottom for positioning elements
  },
});

// Functional component to display a card with user information
export default function Cards({ name, age, city, country }) {
  const classes = useStyles(); // Use the custom styles

  return (
    <Card className={classes.root}> {/* Apply root styles to the Card component */}
      <CardContent>
        <Typography variant="h5" component="h2">
          Name: {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Age: {age}
        </Typography>
        <Typography variant="body2" component="p">
          City: {city}
        </Typography>
        <Typography variant="body2" component="p">
          Country: {country}
        </Typography>
      </CardContent>
    </Card>
  );
}
