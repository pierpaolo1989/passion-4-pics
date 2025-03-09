import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGenerator from "../components/ImageGenerator";
import ImageEditor from "../components/PhotoEditor";
import ImageFilterComponent from "../components/WatermarkComponent";
import "../Filters.css";
import ImageFilter from 'react-image-filter';
 
function FilterPage() {
    return (
        <>
            <Header />
            <div className="wrapper-editor">
                <ImageEditor />
            </div>
            <Footer />
        </>
    )
}

export default FilterPage;