import { Header } from "../../components/Header"
import { Publications } from "../../components/Publications";
import { SearchBar } from "../../components/SearchBar";
import { User } from "../../components/User";
export function Home() {
  return (
    <div>
      <Header />
      <User />
      <SearchBar />
      <Publications />
    </div>
  );
}
