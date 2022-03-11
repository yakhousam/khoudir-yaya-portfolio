import type { NextPage } from "next";

const TokenPage: NextPage = ({ token = "" }) => {
  return <h1>Token = {token}</h1>;
};

export default TokenPage;

export async function getServerSideProps({ query }) {
  return { props: { token: query.id } };
}
