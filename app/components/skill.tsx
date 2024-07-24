import { gql } from "@apollo/client";
import createApolloClient from "@/lib/apollo";
import { useEffect, useState } from "react";

export function SkillChip({ name }: { name: string }) {
  const [skill, setSkill] = useState("");

  const client = createApolloClient();

  async function getSkill() {
    console.log("Fetching gql");
    const { data, loading } = await client.query({
      query: gql`
        query {
              Skills_id {
                id
                color
                dark
              }
            }
          }
        }
      `,
    });
    console.log({ loading, data });
  }

  useEffect(() => {
    getSkill();
  }, []);

  return skill ? (
    <span
      style={{
        border: `2px solid ${false ? "white" : "transparent"}`,
        backgroundColor: "black",
        color: false ? "white" : "black",
      }}
      className="px-6 py-2 rounded-lg font-semibold"
    >
      {name}
    </span>
  ) : (
    <p>Missing {name}</p>
  );
}
