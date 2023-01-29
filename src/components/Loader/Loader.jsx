import { Dna } from "react-loader-spinner";
import './Loader.css';


 export const Loader = () => (
     <div className={Loader}>
         <Dna
             visible={true}
             height="80"
             width="80"
             radius="9"
             color="green"
             ariaLabel="dna-loading"
             wrapperStyle={{}}
             wrapperClass="dna-wrapper"
         />
         </div>
);
