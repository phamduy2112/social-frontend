import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectTrigger, SelectValue,SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select";

const reports = [
  {
    id: 1,
    content: "Bài viết vi phạm nội quy!",
    reporter: "Nguyễn Văn A",
    type: "Bài viết",
    status: "Đang chờ",
  },
  {
    id: 2,
    content: "Bình luận xúc phạm người khác",
    reporter: "Trần Thị B",
    type: "Bình luận",
    status: "Đã xử lý",
  },
];

const ReportPage = () => {
  return (
    <div className="p-6 text-white">
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-[1rem] justify-center">
        <h2 className="text-2xl font-semibold mb-4 mt-3">Quản lý báo cáo</h2>
        <Select>
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Trạng thái" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Đã xử lí</SelectItem>
          <SelectItem value="banana">Chưa xử lí</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
        <Select>
      <SelectTrigger className="w-[130px]">
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

            <Button className='text-white bg-red-600 hover:bg-red-500'>Tải PDF</Button>

        </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nội dung vi phạm</TableHead>
            <TableHead>Người báo cáo</TableHead>
            <TableHead>Loại</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.content}</TableCell>
              <TableCell>{report.reporter}</TableCell>
              <TableCell className="text-white">
                <Badge variant="outline" className="text-white">{report.type}</Badge>
              </TableCell>
              <TableCell className="text-white">
                <Badge
                  variant={report.status === "Đang chờ" ? "destructive" : "success"}
                >
                  {report.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="mr-2 hover:bg-slate-500 bg-slate-600 hover:text-white">Xem</Button>
                <Button variant="destructive">Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReportPage;
