import Child from './Child';

function Parent() {
  return (
    <>
      <Child
        text="React你好"
        abc={123}
        isBook={true}
        foo={() => {
          alert('hello');
        }}
      />
      <Child />
      <Child text={123} abc={false} />
    </>
  );
}

export default Parent;
