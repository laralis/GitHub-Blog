import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { User } from "../../components/User";
import { useState, useEffect } from "react";
export function Home() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    async function getApi() {
      const url = await fetch("https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues");
      const response = await url.json();
      setIssues(response);
    }
    getApi();
  }, []);
  return (
    <div>
      <Header />
      <User/>
      <SearchBar issues={issues} />
    </div>
  );
}
