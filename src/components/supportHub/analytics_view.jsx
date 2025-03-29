import { useEffect } from "react";
import * as echarts from "echarts";

const AnalyticsView = () => {
    useEffect(() => {
        const months = ["Dec 2023", "Feb 2024", "Apr 2024", "Jun 2024", "Aug 2024", "Oct 2024", "Dec 2024"];

        const initChart = (id, data, color) => {
            const chart = echarts.init(document.getElementById(id));
            chart.setOption({
                animation: false,
                tooltip: { trigger: "axis" },
                xAxis: { type: "category", data: months },
                yAxis: { type: "value" },
                series: [{ data, type: "bar", itemStyle: { color } }],
            });
            return chart;
        };

        const ticketsChart = initChart("ticketsChart", [180, 183, 177, 168, 149, 155, 114], "#FF9F87");
        const replyChart = initChart("replyChart", [0, 0, 9, 5.1, 2.5, 2.2, 0], "#FF9F87");
        const slaChart = initChart("slaChart", [0, 1, 20, 13, 8, 5, 5], "#2196f3");
        const messagesChart = initChart("messagesChart", [391, 386, 332, 123], "#FF9F87");

        window.addEventListener("resize", () => {
            ticketsChart.resize();
            replyChart.resize();
            slaChart.resize();
            messagesChart.resize();
        });

        return () => window.removeEventListener("resize", () => {
            ticketsChart.resize();
            replyChart.resize();
            slaChart.resize();
            messagesChart.resize();
        });
    }, []);

    return (
        <div className="">
            {/* Sidebar */}
         

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between px-4 py-4">
                        <div className="flex items-center space-x-4">
                            {["Team", "Support Rep", "Channel", "Pipeline", "Category"].map((item) => (
                                <button key={item} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                                    {item} <i className="fas fa-chevron-down ml-2"></i>
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                                <i className="fas fa-filter mr-2"></i> Dashboard filters
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                                More <i className="fas fa-chevron-down ml-2"></i>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Analyze</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {/* Charts */}
                        <ChartCard title="Tickets created over time" chartId="ticketsChart" />
                        <ChartCard title="First reply average over time" chartId="replyChart" />
                        <ChartCard title="First response SLA completion status" chartId="slaChart" />
                        <ChartCard title="Messages received over time" chartId="messagesChart" />
                    </div>
                </main>
            </div>
        </div>
    );
};

// Chart Card Component
const ChartCard = ({ title, chartId }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">{title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-ellipsis-v"></i>
                </button>
            </div>
            <div id={chartId} className="h-64"></div>
        </div>
    );
};

export default AnalyticsView;


// connect app app.jsx