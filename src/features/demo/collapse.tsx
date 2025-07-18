import { Collapse } from "i-miniapp-ui";

function DemoCollapse() {
  return (
    <div>
      <p className="mt-1 mb-2">
        Dùng để hiển thị thông tin có thể mở rộng hoặc thu gọn.
      </p>
      <div className="border border-gray-300 rounded-lg">
        <Collapse title={"Mở rộng để xem thêm"} className={{
          header: "!w-full !justify-start",
          wrapperChild: "px-4 pb-4 !text-gray-700"
        }}>
          <p>
            This is the first item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </p>
        </Collapse>
      </div>
    </div>
  );
}

export default DemoCollapse;
