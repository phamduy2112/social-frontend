import { useState } from "react";
import { Trash, Check, Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TableManangeComment } from "./component/TableComment";

const commentsData = [
  { id: 1, user: "Duy", content: "Bài viết hay quá!", date: "2024-02-12", status: "approved" },
  { id: 2, user: "Admin", content: "Cảm ơn bạn!", date: "2024-02-12", status: "approved" },
  { id: 3, user: "User123", content: "Spam quá trời", date: "2024-02-12", status: "pending" },
];

export default function ManageComments() {
    return <>
    <div>
        <div className="flex gap-[1rem] items-center">
            <h3 className="text-[1.5rem] text-white">Quản lí bình luận</h3>
            <Select>
      <SelectTrigger className="w-[150px] text-white">
        <SelectValue placeholder="Chọn Ngày" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Ngày mới nhất</SelectItem>
          <SelectItem value="banana">Ngày cũ nhất</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <TableManangeComment/>
    </div>
    </>
}
