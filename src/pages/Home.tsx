import React from "react";
import Card from "../components/Card/Card";
import useFetchTrend from "../hooks/useFetchTrend";

export default function Home() {
  const { trends, loading } = useFetchTrend("movie", "week");

  return (
    <div style={{ display: "flex" }}>
      {trends?.results.map((res, idx) => {
        return (
          <Card key={idx} poster_path={res.poster_path} title={res.title} />
        );
      })}
    </div>
  );
}
