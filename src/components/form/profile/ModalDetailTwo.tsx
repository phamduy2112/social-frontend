import React from "react";
import { FaGithub, FaPen, FaRegCommentDots } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

function ModalDetailUser() {
  return (
    <Dialog>
      <DialogTrigger className="w-[100%]">
        <Button className="w-[100%] mb-[.5rem] mt-[1rem]">
          Chỉnh sửa chi tiết
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[680px] w-full h-[45vh] bg-zinc-800 border-zinc-700 text-white ">
        {" "}
        {/* Thay đổi chiều rộng ở đây */}
        <DialogHeader>
          <DialogTitle className="text-center pb-3 text-[1.2rem]">
            Chỉnh sửa chi tiết
          </DialogTitle>

          {/* Đường kẻ ngang */}
          <div className="my-4 border-t border-gray-300" />
          <div className="text-[.9rem] text-zinc-400">
            Thông tin bạn chọn sẽ ở chế độ Công khai và hiển thị ở đầu trang cá
            nhân của bạn.
          </div>
          <div>
            <h4 className="py-3">Mối quan hệ</h4>
            <div className="flex justify-between items-center ">
              <div className="flex gap-[1.5rem] items-center">
                <Switch /> <span className="text-[.95rem]">Độc thân</span>
              </div>
              <FaPen />
            </div>
          </div>
          <div>
            <h4 className="py-3">Tham gia DuyBooks</h4>
            <div className="flex justify-between items-center ">
              <div className="flex gap-[1.5rem] items-center">
                <Switch />{" "}
                <span className="text-[.95rem]">
                  Tham gia vào Tháng 6 năm 2013
                </span>
              </div>
            </div>
          </div>
          <div>
         <h4>Trang web</h4> 
         <div className="text-[.8rem] text-zinc-400">
         Để hiển thị liên kết trên trang cá nhân, hãy đặt đối tượng thành Công khai.</div>
            <div className="flex justify-between items-center  ">
              <div className="text-zinc-300 text-[.95rem] py-[.4rem] flex gap-[.5rem] items-center">
              <FaGithub />
  <h4>github.com/phamduy2112                </h4>
              </div>
              <FaPen />
            </div>
          </div>
          <div className="my-4 border-t border-gray-300" />
        <div className="">
            <div className="flex justify-between mt-[.5rem]">
                <Button className="bg-transparent hover:bg-zinc-600 ">Cập nhận thông tin</Button>
                <div className="flex gap-[.4rem]">
                    <Button className="bg-zinc-700 border border-zinc-600 hover:bg-zinc-600">Hủy</Button>
                    <Button className="bg-blue-700 border border-blue-600 hover:bg-blue-600 w-[100px] ">Lưu</Button>
                </div>
            </div>
        </div>
        </DialogHeader>
        {/* Body của modal */}
        {/* Đường kẻ ngang giữa Body và Footer */}
      </DialogContent>
    </Dialog>
  );
}

export default ModalDetailUser;
