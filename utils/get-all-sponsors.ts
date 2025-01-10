
import {Sponsor} from "@/libs/docs/sponsors";

/**
 * Read the information for each sponsor from `.all-sponsorsrc` file
 */
export async function getAllSponsors() {
  const res = await fetch("https://fastly.jsdelivr.net/gh/everfu/static/sponsors.json");
  const data = (await res.json()) as Sponsor[];

  return data;
}
