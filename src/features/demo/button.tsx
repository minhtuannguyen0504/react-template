import { ButtonCore } from "i-miniapp-ui";

function DemoButton() {
  return (
    <div>
      <p className="mt-1 mb-2">
        Dùng để tạo các nút bấm giúp người dùng tương tác thực hiện một hành
        động nào đó.
      </p>
      <div className="grid grid-cols-2 gap-4 items-center">
        <p>Mặc định</p>
        <ButtonCore
          name={"searchBtn"}
          // prefixIcon={<img className="w-4 h-4" src="https://www.svgrepo.com/show/7109/search.svg" alt="search" />}
          className="bg-blue-600 text-white px-4 p-2 rounded hover:bg-blue-500 transition-colors font-medium"
        >
          Tìm kiếm
        </ButtonCore>

        <p>Nút icon</p>
        <ButtonCore
          name={"searchBtn"}
          className="bg-blue-600 text-white w-10 h-10 mx-auto !p-0 aspect-square rounded hover:bg-blue-500 transition-colors font-medium"
        >
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/7109/search.svg"
            alt="search"
          />
        </ButtonCore>

        <p>Nút có biểu tượng ở đầu</p>
        <ButtonCore
          name={"searchBtn"}
          prefixIcon={
            <img
              className="w-4 h-4"
              src="https://www.svgrepo.com/show/7109/search.svg"
              alt="search"
            />
          }
          className="bg-blue-600 text-white px-4 p-2 rounded hover:bg-blue-500 transition-colors font-medium"
        >
          Tìm kiếm
        </ButtonCore>

        <p>Nút có biểu tượng ở cuối</p>
        <ButtonCore
          name={"searchBtn"}
          suffixIcon={
            <img
              className="w-4 h-4"
              src="https://www.svgrepo.com/show/7109/search.svg"
              alt="search"
            />
          }
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors font-medium"
        >
          Tìm kiếm
        </ButtonCore>

        <p>Nút bị vô hiệu hóa</p>
        <ButtonCore
          name={"searchBtn"}
          isDisabled
          className="bg-gray-400 !text-gray-500 text-white px-4 py-2 rounded transition-colors font-medium"
        >
          Tìm kiếm
        </ButtonCore>
      </div>
    </div>
  );
}

export default DemoButton;
