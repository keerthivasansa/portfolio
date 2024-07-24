'use client';

import { gql } from "@/lib/gql";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_SKILL = gql(`
query GetSkill($skName: String!) {
	Skills(filter: {
		id: {
			_eq: $skName
		}
	}) {
		color
    dark
	}
}`);

export function SkillChip({ name }: { name: string }) {
  const { data: skill } = useQuery(GET_SKILL, {
    variables: {
      skName: name,
    },
  });

  useEffect(() => {console.log(skill)}, [skill]);
  if (!skill)
      return <></>
  const skData = skill.Skills[0]
  return skData ? (
    <span
      style={{
        border: `2px solid ${skData.dark ? "white" : "transparent"}`,
        backgroundColor: skData.color || "black",
        color: skData.dark ? "white" : "black",
      }}
      className="px-6 py-2 rounded-lg font-semibold"
    >
      {name}
    </span>
  ) : (
    <p>Missing {name}</p>
  );
}
