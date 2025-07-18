import { InputAddress, InputCore } from "i-miniapp-ui";

interface ILocationItem {
  id: string | number;
  text: string;
}

const provincesData: ILocationItem[] = [
  { id: 1, text: 'T.An Giang' },
  { id: 2, text: 'T.Bắc Ninh' },
  { id: 3, text: 'TP.Cà Mau' },
  { id: 4, text: 'TP.Hồ Chí Minh' },
  { id: 5, text: 'TP.Đã Nẵng' },
];

const wardsData: ILocationItem[] = [
  { id: 1, text: 'Phường 1' },
  { id: 2, text: 'Phường 2' },
  { id: 3, text: 'Phường 3' },
  { id: 4, text: 'Phường 4' },
  { id: 5, text: 'Phường 5' },
];

const streetsData: ILocationItem[] = [
  { id: 1, text: 'Đường A' },
  { id: 2, text: 'Đường B' },
  { id: 3, text: 'Đường C' },
  { id: 4, text: 'Đường D' },
  { id: 5, text: 'Đường F' },
];

function DemoInput() {
  return (
    <div>
      <div className="ps-2 mt-2">
        <h3 className="font-semibold text-base">Input Core</h3>
        <p className="mt-1 mb-2">
          Dùng để tạo ô nhập liệu cho phép người dùng nhập văn bản và lấy dữ
          liệu
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4 items-center">
          <p>Mặc định</p>
          <InputCore name={"username"} />

          <p>Sử dụng trong form</p>
          <InputCore
            label="Tên đăng nhập"
            name={"username"}
            placeholder="Nhập tên đăng nhập..."
            isRequired
            className={{
              childrenWrapper: "mt-1",
            }}
          />

          <p>Format định dạng tiền VND</p>
          <InputCore
            name={"total"}
            isFormatVnd
            className={{
              childrenWrapper: "mt-1",
            }}
          />

          <p>Có biểu tượng ở đầu</p>
          <InputCore
            name={"search"}
            prefix={
              <img
                className="w-4 h-4"
                src="https://www.svgrepo.com/show/7109/search.svg"
                alt="search"
              />
            }
            placeholder="Tìm kiếm..."
          />

          <p>Có biểu tượng ở cuối</p>
          <InputCore
            name={"search"}
            suffix={
              <img
                className="w-4 h-4"
                src="https://www.svgrepo.com/show/7109/search.svg"
                alt="search"
              />
            }
            placeholder="Tìm kiếm..."
          />

          {/* <p>Nút xóa tất cả</p>
          <InputCore
            name={"search"}
            isClear
            className={{
              clearBtn: "!p-0"
            }}
            suffix={
              <img
                className="w-4 h-4"
                src="https://www.svgrepo.com/show/7109/search.svg"
                alt="search"
              />
            }
            placeholder="Tìm kiếm..."
          /> */}
        </div>
      </div>

      <div className="ps-2 mt-6">
        <h3 className="font-semibold text-base">Input Address</h3>
        <p className="mt-1 mb-2">
          Dùng để tạo ô nhập liệu địa chỉ, hỗ trợ tìm kiếm địa chỉ và lấy dữ
          liệu
        </p>
        <div className="flex gap-6 items-center">
          <p>Mặc định</p>
          <InputAddress
            provinces={provincesData}
            provinceTags={provincesData}
            wards={wardsData}
            streets={streetsData}
            className={{
              wrapper: 'mt-4',
            }}
          />
        </div>
        <div className="flex gap-6 items-center mt-4">
          <p>Required</p>
          <InputAddress
            isRequired={{
              province: true,
              ward: true,
              street: true,
              detail: true,
            }}
            provinces={provincesData}
            provinceTags={provincesData}
            wards={wardsData}
            streets={streetsData}
          />
        </div>
      </div>
    </div>
  );
}

export default DemoInput;
