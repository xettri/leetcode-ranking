import { Ranking } from '../../components';

export async function getStaticProps(context) {
  let response;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ranking/1`);
    response = await res.json();
  } catch (err) {
    response = { data: { totalUsers: 0, userPerPage: 0, rankingNodes: [] } };
  }
  const totalPage = response.data.totalUsers / response.data.userPerPage + 1;
  return {
    props: { ranking: response.data, page: 1, totalPage: parseInt(totalPage) },
  };
}

export default function index(props) {
  return <Ranking data={props.ranking} page={1} totalPage={props.totalPage} />;
}
