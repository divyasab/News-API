
import Headerpage from "./headerpage";
import NewsRow  from "./newsRow"
import NewsData from './newsData';
import Footer from "./footer";

const Page=()=>{
  return(
    <>
    
      <Headerpage/>
      <NewsRow newsData={NewsData} />
      <Footer/>
    </>  
  )
}
export default Page;