import rq from "./base";
import apiUrl from "./apiUrl";
export const getPublicEssay = async (params) => {
  const res = await rq.fetchGet(apiUrl.public_essay, params);
  return res;
};
