import { ButtonCore, ModalCore } from "i-miniapp-ui";
import { useState } from "react";

function DemoModal() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <p>
        Dùng để hiển thị nội dung quan trọng hoặc yêu cầu người dùng thực hiện
        một hành động cụ thể trước khi tiếp tục sử dụng tính năng của ứng dụng.
      </p>
      <ButtonCore
        name="openModal"
        isFullWidth
        className="bg-blue-600 text-white px-4 p-2 rounded hover:bg-blue-500 transition-colors font-medium mt-4"
        onClick={() => setIsVisible(true)}
      >
        Mở modal
      </ButtonCore>
      <ModalCore isVisible={isVisible} onClose={() => setIsVisible(false)} />
    </div>
  );
}

export default DemoModal;
