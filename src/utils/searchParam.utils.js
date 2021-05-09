export default function getSearchParam(location, searchParam) {
  const term = new URL(location.href).searchParams.get(searchParam);
  return term;
}
