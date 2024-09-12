import "./index.css";

function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hours >= openHour && hours <= closedHour;
  if (isOpen)
    return (
      <footer className="footer">
        <div className="order">
          It's {new Date().toLocaleTimeString()}. " We are currently Open. You
          can visit us or order online and have fun!"
          <button className="btn">Order</button>
        </div>
      </footer>
    );
  return (
    <footer className="footer">
      <div className="order">
        It's {new Date().toLocaleTimeString()}. "We are closed from {closedHour}:00 to
        {openHour}:00. You can come tomorrow. Really sorry!"
      </div>
    </footer>
  );
}

export default Footer;
