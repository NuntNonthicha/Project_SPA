import "./App.css";
import React from "react";
import FoodCard from "./components/foodCard";

class App extends React.Component {
  render() {
    const foodcardData = [
      {
        key: 0,
        category: "นาฬิกาข้อมือ",
        foodName: "LTP-V007L-7B1UDF สีดำ",
        describetion:
          "โดดเด่นด้วยความเรียบง่ายแบบมีสไตล์ของนาฬิกาคลาสสิก Casio ดีไซน์ถูกออกแบบมาสำหรับการใช้งานที่คล่องตัวสำหรับทุกกิจกรรม ใส่ได้ในทุกวันและทุกโอกาสสำคัญ มาพร้อมกับคุณสมบัติกันน้ำสำหรับการใช้งานทั่วไป เช่นการล้างมือ หรือละอองฝน ไม่แนะนำสำหรับกิจกรรมที่ต้องโดนน้ำเป็นเวลานาน หรือกิจกรรมทางน้ำ",
        imgsrc:
          "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/6/060a43f99d12dc5947fadbab5ce3d1a2ad7c85fc_mkp1514943.jpegdummy.jpg",
      },
      {
        key: 1,
        category: "นาฬิกาข้อมือ",
        foodName: "D1 Milano D1-ATBJ12 รุ่นAUTOMATIC RESTYLING สีเงิน",
        describetion:
          "รูปทรงหน้าปัด ทรงกลม ขนาดหน้าปัด 41.5mm สายสเตนเลส สตีล ประเภทออโตเมติก กระจกแซฟไฟร์ เงื่อนไขการรับประกัน การรับประกันสินค้าราคาปกติ-40% รับประกัน 2ปี 50% รับประกัน 6 เดือน 60% ขึ้นไป รับประกัน 3 เดือน Grade B ไม่รับประกัน*การรับประกันสินค้า สินค้าทุกชิ้นรับประกันตามเงื่อนไข โดยนับการรับประกันจากวันที่ซื้อ สินค้ารับประกันโดย Central Marketing Group (CMG) ลูกค้าสามารถส่งซ่อมได้ที่เคาเตอร์นาฬิกาในห้างเซ็นทรัลได้ทุกสาขา เพียงยื่นใบรับประกัน และ ใบเสร็จรับเงินในการซื้อสินค้า",
        imgsrc:
          "https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--83836f66-3233-4022-b6c0-464128b02e1d/d1-milano-automaticrestylingautomaticstainlesssteeld1-atbj12415mmsilver-cds85976467-1.jpg?preferwebp=true&quality=60",
      },
      {
        key: 2,
        category: "นาฬิกาข้อมือ",
        foodName: "General รุ่น AE-1500WH-8BVDF",
        describetion:
          "แบรนด์นาฬิกาชั้นนำจากญี่ปุ่นที่ได้รับการไว้วางใจจากคุณลูกค้าทั่วโลกให้เป็นหนึ่งในนาฬิกายอดนิยมที่สามารถสวมใส่ได้ในทุกๆโอกาส เป็นสายเรซิน กระจกเรซิน มีไฟแบ็คไลท์ LED ให้แสงพื้นหลัง แสงระเรื่อ สามารถกันน้ำลึก 100 เมตร",
        imgsrc:
          "https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--6639fd93-f4b3-469f-8354-aa61545831ee/casio-generalwatchae-1500wh-8bvdf-cds78365568-1.jpg?preferwebp=true&quality=60",
      },
    ];

    return (
      <div className="page">
        <h1>เลือกนาฬิกา</h1>
        {foodcardData.map((info) => (
          <FoodCard
            key={info.category}
            category={info.category}
            foodName={info.foodName}
            describetion={info.describetion}
            imgsrc={info.imgsrc}
          />
        ))}
      </div>
    );
  }
}

export default App;
