
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

                <a  href="https://drive.google.com/drive/u/2/folders/1w-QQa6uUJuGIWbJxefZfzzEeXm2HS6vK"
                    target="_blank"
                    rel="noreferrer" 
                >
                    GDrive
                </a>
            </div>
        </nav>
      );
}
 
export default Navbar;