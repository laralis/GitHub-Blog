import "./styles.css";
export function SearchBar() {
  return (
    <div className="userPublications">
      <form action="">
        <div className="publications">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </div>
  );
}
