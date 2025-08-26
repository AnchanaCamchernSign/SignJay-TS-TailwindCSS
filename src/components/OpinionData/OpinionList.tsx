import React, { useEffect } from "react";
import { useState } from "react";
import type { Opinion } from "../../types/Opinion";
import axios from "axios";
import { Box } from "@mui/material";
import OpinionCard from "./OpinionCard";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const OpinionList: React.FC = () => {
  const [opinions, setOpinions] = useState<Opinion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Opinion[]>(API_URL)
      .then((response) => {
        setOpinions(response.data);
      })
      .catch(() => {
        setError("Failed to fetch opinions");
      })
      .finally(() => {
        setLoading(false);
      });

      console.log("Data Before set", opinions);
      
  }, []);

      console.log("Data After set", opinions);

  if (loading) return <p> Loading .....</p>;
  if (error) return <p style={{ color: "red" }}> {error}</p>;

  return (
    <div className="mt-12">
        <Box display="flex" flexWrap="wrap" gap={12}>
            {opinions.map((opinion) => (
                <OpinionCard
                  key={opinion.id}
                  opinion={opinion}
                />
            ))}
        </Box>
    </div>
  )
};

export default OpinionList;
