import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "z9pubeqf",
  dataset: "production",
  useCdn: true,
});
