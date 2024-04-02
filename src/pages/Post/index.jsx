import { Header } from "../../components/Header";
import { PostStats } from "./components/PostStats";
import { PostContent } from "./components/PostContent";

export function Post() {
  return (
    <div>
      <Header />
      <PostStats />
      <PostContent/>
    </div>
  );
}
