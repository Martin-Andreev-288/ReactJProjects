import { createClient } from "contentful";
import { useEffect, useState } from "react";
const client = createClient({
  space: "gqk0veg6v1tk",
  environment: "master",
  accessToken: "wgGncEGBL-EYU0SA66iQtLnO2OjUdWhXKqBIBR8rOzA",
});

/*
Tezi dve neshta gi vzehme ot contentful sayta (i sega gi vnedrqvame gore):
Space ID - gqk0veg6v1tk
Access Token - wgGncEGBL-EYU0SA66iQtLnO2OjUdWhXKqBIBR8rOzA
*/

/* imeto na content_type-a dolu e imeto, koeto sme dali na proektite v contentful sayta */
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
