import "./headerpage.css";

const Headerpage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-12 my-3 text-center"> {/* Adjust column width for mobile */}
                        <img src="logo4.png" alt="Logo" className="img-fluid" />
                    </div>
                </div>
                <div className="row border border-black"></div>
                <div className="row border border-black mt-1"></div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-2 col-12 my-5 box3 ">
                        <form className="d-flex" role="search">
                            <div className="col border pt-2 box1">
                                <span className="DocSearch-Button-Container">
                                    <img src="logo.png" alt="Search Icon" />
                                    <span className="DocSearch-Button-Placeholder mx-2">Search</span>
                                </span>
                                <input className="border-0" type="search" />
                            </div>
                            <button className="btn bg-danger text-light py-2 border-0" type="submit">
                                Go
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headerpage;
