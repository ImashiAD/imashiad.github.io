import React from "react";
import { useParams } from "react-router-dom";
import BOC from "./CaseStudies/BOC";

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (id == "1") return <BOC />;
  return <div>Case study not found.</div>;
};

export default CaseStudy;
