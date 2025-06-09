const Welcomemessage = ({ onGetPostClick }) => {
  return (
    <center className="Welcome-message">
      <h1> There are no posts.</h1>
      <button className="btn btn-primary rounded-pill px-3" type="button">
        Get Posts
      </button>
    </center>
  );
};
export default Welcomemessage;
