import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params, request }) => {
  // console.log("params", params);
  // console.log("request", request);
  return {
    body: JSON.stringify({
      name: "astro",
      url: "https://astro.build/",
    }),
  };
};
