export default async function MetadataApi(id) {
  let resp = await fetch(`https://archive.org/metadata/${id}`);
  let data = await resp.json();
  return data;
}

export async function RelatedItems(id) {
  let resp = await fetch(`https://be-api.us.archive.org/mds/v1/get_related/all/${id}`);
  let data = await resp.json();
  return data;
}