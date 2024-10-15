import {memo} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

const MasterLayout = function({ children, ...props}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default memo(MasterLayout);