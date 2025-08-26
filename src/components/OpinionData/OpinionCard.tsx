import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Opinion } from "../../types/Opinion";

interface OpinionCardProps {
  opinion: Opinion;
}

const OpinionCard: React.FC<OpinionCardProps> = ({ opinion }) => {
  return (
    <Card sx={{ minWidth: 20 }} className="flex flex-col">
      <CardContent className="w-xs">
        <Typography
          gutterBottom
          className="text-left"
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          <span style={{ fontWeight: "bold" }}>Email:</span>: {opinion.email}
        </Typography>
        <Typography
          className="text-left font-mono text-xs text-gray-500"
          component="div"
        >
          <span style={{ fontWeight: "bold", color: "gray" }}>Name:</span>{" "}
          {opinion.name}
        </Typography>
        <Typography
          className="text-left"
          sx={{ color: "text.secondary", mb: 1.5 }}
        >
          <span style={{ fontWeight: "bold" }}>Message:</span> {opinion.body}
        </Typography>
        <Typography variant="body2" className="text-left">
          ID: {opinion.id}
        </Typography>
      </CardContent>
      <CardActions className="pb-4">
        <button className="px-4 py-2 ml-4 mb-4 rounded bg-blue-200 text-white hover:bg-blue-400">Learn More</button>
      </CardActions>
    </Card>
  );
};

export default OpinionCard;
