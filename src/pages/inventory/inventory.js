import Topbar from "../../components/common/topbar";
import Button from "../../components/common/button";
import { ReactComponent as Folder } from "../../assets/images/sidebar/Folder.svg";
import EmptyPage from "../../components/common/emptyPage";
import InventoryTable from "./InventoryTable";
import InventoryItemsSection from "./InventoryItemsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const Inventory = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch data of product from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products");
        const { data } = response;
        if (data.success) {
          setProductData(data.data);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Something wents wrong!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        console.error("Error logging in:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ToastContainer />
      <section className="bg-gray-100 w-full overflow-hidden">
        <Topbar title="Inventory" path="/inventory" />

        <section className="mx-5">
          <Button
            title="Inventory Summary"
            text="Add a New Product"
            path="/inventory/create-product"
          />

          {productData && productData.length === 0 ? (
            <EmptyPage
              icon={
                <Folder className="fill-gray-400 absolute top-10 left-10 h-[60px] w-[60px]" />
              }
              title="No Inventory Yet?"
              desc="Add Products to your inventory"
              text="New Product"
              path="/inventory/create-product"
            />
          ) : (
            <section className="w-full bg-white rounded-lg  overflow-hidden px-[21px] py-[22px] mb-[20px] mt-8">
              <InventoryItemsSection />

              <section className="w-full">
                <InventoryTable productData={productData} loading={loading} />
              </section>
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default Inventory;
