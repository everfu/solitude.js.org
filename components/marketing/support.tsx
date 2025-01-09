import {Support as SupportClient} from "./support-client";

import {getAllSponsors} from "@/utils/get-all-sponsors";

async function getData() {
  try {
    const sponsors = await getAllSponsors();

    return {
      sponsors,
    };
  } catch (error) {
    console.error("Failed to get data from sponsors", error);
    return {
      sponsors: [],
    };
  }
}

export default async function Support() {
  const data = await getData();

  return <SupportClient sponsors={data.sponsors} />;
}
