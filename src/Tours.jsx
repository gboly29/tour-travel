import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Travel Around The World Tour</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => {
            return <Tour {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
