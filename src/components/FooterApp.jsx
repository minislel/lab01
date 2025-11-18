function FooterApp() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        Stronę wykonał Marcin Świderski login:
        marcin.swiderski@microsoft.wsei.edu.pl hasło logowania do systemu:
        m$WSEI2024
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDET6KAmJ04dBJvP9q5TZLEk74pI7Roddjxg&s"
          alt="WSEI Logo"
          style={{
            height: "30px",
            marginLeft: "10px",
            verticalAlign: "middle",
          }}
        />
      </div>
    </footer>
  );
}

export default FooterApp;
