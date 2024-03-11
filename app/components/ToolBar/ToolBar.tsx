import ToolSorter from "./ToolSorter";
import ToolOrderCriteria from "./ToolOrderCritera";
import AssetSelectorCarousel from "../Carousels/AssetSelectorCarousel";

export default function Toolbar() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 mb-6 md:mb-0">
        <ToolOrderCriteria  />
      </div>
      <div className="md:w-2/4 mb-6 md:mb-0">
        <AssetSelectorCarousel />
      </div>
      <div className="md:w-1/4 mb-6 md:mb-0">
        <ToolSorter />
      </div>
    </div>
  );
}
