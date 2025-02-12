import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { BarChart, Bar, Legend } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const DashboardCharts = () => {
  // 🔹 Dữ liệu 1: Số người dùng đăng ký theo tuần (LineChart)
  const userGrowthData = [
    { name: "Tuần 1", users: 120 },
    { name: "Tuần 2", users: 180 },
    { name: "Tuần 3", users: 220 },
    { name: "Tuần 4", users: 300 }
  ];

  // 🔹 Dữ liệu 2: Số bài đăng theo danh mục (BarChart)
  const postCategoryData = [
    { category: "Công Nghệ", posts: 40 },
    { category: "Thời Trang", posts: 30 },
    { category: "Ẩm Thực", posts: 50 },
    { category: "Du Lịch", posts: 35 }
  ];

  // 🔹 Dữ liệu 3: Loại tương tác (PieChart)
  const interactionData = [
    { name: "Like", value: 400 },
    { name: "Share", value: 200 },
    { name: "Comment", value: 300 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[1rem]">
      {/* 📌 1️⃣ Biểu đồ LineChart - Người dùng đăng ký */}
      <div className="p-4 bg-zinc-900 border border-zinc-600 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Người dùng đăng ký</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 📌 2️⃣ Biểu đồ BarChart - Số bài đăng theo danh mục */}
      <div className="p-4 bg-zinc-900 border border-zinc-600 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Bài đăng theo danh mục</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={postCategoryData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="posts" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 📌 3️⃣ Biểu đồ PieChart - Loại tương tác */}
      <div className="p-4 bg-zinc-900 border border-zinc-600 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Tỷ lệ tương tác</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={interactionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
              {interactionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
