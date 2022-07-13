function ChildA(props) {
  const pData = props.pData;
  return (
    <>
      <h1>Child A</h1>
      <p>From ChildB Data:{pData}</p>
    </>
  );
}

export default ChildA;
