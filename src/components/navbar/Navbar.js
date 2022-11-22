
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                {/* <Link to="">Atlas</Link> */}
                <a  href="https://cloud.mongodb.com/v2/61657198be0be94e4c2bdbb4#clusters/detail/nodetuts" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Database
                </a>

                <a  href="https://github.com/jainutk20" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                    color:"white",
                    backgroundColor: "#ec5934",
                    borderRadius: "8px"
                    }}>
                        Github
                </a>

                <a  href="https://create.arduino.cc/editor/utkarsh0902/95a4c582-e4d7-4dc9-b0f0-b47a7a798933"
                    target="_blank"
                    rel="noreferrer" 
                >
                    Ardiuno
                </a>
            </div>
        </nav>
      );
}
 
export default Navbar;