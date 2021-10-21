const Main = (props) => {
  return (
    <main className="box-border mt-20 grid gap-4 grid-cols-3">
      {props.children}
    </main>
  );
};

export default Main;
