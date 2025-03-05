export const getSites = async (catalog: string): Promise<Site[]> => {
  const response = await fetch("/api/sites?catalog=" + catalog);
  if (!response.ok) {
    throw new Error("Failed to fetch sites");
  }
  const sites: Site[] = await response.json();
  return sites;
};

export const getLatestSites = async (): Promise<Site[]> => {
  const response = await fetch("/api/sites/latest");
  if (!response.ok) {
    throw new Error("Failed to fetch latest sites");
  }

  const sites: Site[] = await response.json();
  return sites;
};

export const getHotSites = async (): Promise<Site[]> => {
  const response = await fetch("/api/sites/hot");
  if (!response.ok) {
    throw new Error("Failed to fetch hot sites");
  }

  const sites: Site[] = await response.json();
  return sites;
};
