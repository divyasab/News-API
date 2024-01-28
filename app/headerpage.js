import "./headerpage.css";
const Headerpage=()=>{
    return(
        <>
            <div className="container-fluid ">
                <div className="row justify-content-center align-item-center ">
                    <div className="col-6 my-4 ">
                        <img src="logo4.png"/>   
                    </div>
                </div>
                <div className='row border border-black '></div> 
                <div className='row border border-black mt-1'></div> 
                <div className="row justify-content-center align-item-center  ">
                    <div className="col-2 my-5 box3 ">
                        <form class="d-flex" role="search">    
                            <div className=" col border  pt-2 box1 ">
                                <span class="DocSearch-Button-Container">
                                    <img src="logo.png"/>
                                    <span class="DocSearch-Button-Placeholder">Search</span>
                                </span>
                                <input className="border-0  " type="search"/>
                            </div>
                            <button class="btn bg-danger text-light py-2 border-0" type="submit">
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