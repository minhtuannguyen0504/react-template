import { DateMultiplePicker, DateRangePicker, DateSinglePicker, DateTimeMultiplePicker, DateTimePicker, DateTimeRangePicker } from "i-miniapp-ui";

function DemoPicker() {
  return (
    <div>
      <div className="ps-2 mt-2 grid grid-cols-2 gap-x-6 gap-y-10">
        <div>
          <h2 className="font-semibold text-base">5.1 Date Single Picker</h2>
          <h3 className="mt-1 mb-4">
            Dùng để người dùng lựa chọn ngày tháng.
          </h3>
          <DateSinglePicker />
        </div>

        <div>
          <h2 className="font-semibold text-base">5.2 Date Multiple Picker</h2>
          <h3 className="mt-1 mb-4">
            Cho phép người dùng lựa chọn nhiều ngày một lúc.
          </h3>
          <DateMultiplePicker />
        </div>

        <div>
          <h2 className="font-semibold text-base">5.3 Date Range Picker</h2>
          <h3 className="mt-1 mb-4">
            Cho phép người dùng lựa chọn một khoảng thời gian từ ngày bắt đầu
            đến ngày kết thúc.
          </h3>
          <DateRangePicker />
        </div>

        <div>
          <h2 className="font-semibold text-base">5.4 Date Time Picker</h2>
          <h3 className="mt-1 mb-4">
            Cho phép người dùng lựa chọn ngày và giờ, thường dùng trong các
            trường hợp cần xác định thời gian cụ thể.
          </h3>
          <DateTimePicker />
        </div>

        <div>
          <h2 className="font-semibold text-base">5.5 Date Multiple Picker</h2>
          <h3 className="mt-1 mb-4">
            Cho phép người dùng lựa chọn nhiều ngày và giờ một lúc, hữu ích cho
            các sự kiện diễn ra trong nhiều ngày hoặc thời gian cụ thể.
          </h3>
          <DateTimeMultiplePicker />
        </div>

        <div>
          <h2 className="font-semibold text-base">5.6 Date Time Range Picker</h2>
          <h3 className="mt-1 mb-4">
            Cho phép người dùng lựa chọn một khoảng thời gian từ ngày bắt đầu
            đến ngày kết thúc, bao gồm cả giờ và phút.
          </h3>
          <DateTimeRangePicker />
        </div>
      </div>
    </div>
  );
}

export default DemoPicker;
