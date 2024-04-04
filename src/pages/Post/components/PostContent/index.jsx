import "./styles.css";
export function PostContent({ body } = props) {
  return (
    <div className="ContentContainer">
      <p>
        {body}
      </p>
    </div>
  );
}
