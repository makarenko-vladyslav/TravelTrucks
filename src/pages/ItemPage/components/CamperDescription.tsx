import React from "react";

interface CamperDescriptionProps {
  description: string;
}

const CamperDescription: React.FC<CamperDescriptionProps> = ({
  description,
}) => <p className="text-text mb-[60px]">{description}</p>;

export default CamperDescription;
