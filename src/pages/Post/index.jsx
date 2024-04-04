import { Header } from "../../components/Header";
import { PostStats } from "./components/PostStats";
import { PostContent } from "./components/PostContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export function Post() {
  const location = useLocation();
  const { title } = location.state;
  const { body } = location.state;
  const { data } = location.state;
  const { comments } = location.state;
  const { url } = location.state;
  const { user } = location.state;
  console.log(location);
  return (
    <div>
      <Header />

      <PostStats
        title={title}
        data={data}
        comments={comments}
        url={url}
        user={user}
      />
      <PostContent body={body} />
    </div>
  );
}
