interface IMyDiv {
  text: string;
  header: string;
}

const MyDiv = (props: IMyDiv) => {
  return (
    <div>
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default MyDiv;
