async function queryApi(url) {
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
}
export default async function MetadataApi(id) {
  let url = `https://archive.org/metadata/${id}`;
  return queryApi(url);
}

export async function RelatedItems(id) {
  let url = `https://be-api.us.archive.org/mds/v1/get_related/all/${id}`;
  return queryApi(url);
}