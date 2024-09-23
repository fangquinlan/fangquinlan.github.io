// 动态背景动画
gsap.to(".dynamic-background", {
  duration: 15,
  backgroundPosition: "100% 100%",
  repeat: -1,
  yoyo: true,
  ease: "linear"
});

// 非线性导航动画
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, { scale: 1.1, duration: 0.3 });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, { scale: 1, duration: 0.3 });
  });
});

// 时间轴动画
const timelineData = [
  { date: "2024-01", event: "课程一开始" },
  { date: "2024-03", event: "完成模块一" },
  { date: "2024-05", event: "中期评估" },
  { date: "2024-07", event: "完成模块二" },
  { date: "2024-09", event: "课程结束" }
];

// 设置时间轴尺寸
const width = 800;
const height = 200;

// 创建SVG容器
const svg = d3.select("#timeline")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// 添加线条
svg.append("line")
  .attr("x1", 50)
  .attr("y1", height / 2)
  .attr("x2", width - 50)
  .attr("y2", height / 2)
  .attr("stroke", "#f0f0f0")
  .attr("stroke-width", 2);

// 添加事件点
svg.selectAll("circle")
  .data(timelineData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => 50 + i * ((width - 100) / (timelineData.length - 1)))
  .attr("cy", height / 2)
  .attr("r", 10)
  .attr("fill", "#ff5722")
  .on("mouseover", function(event, d) {
    d3.select(this).transition()
      .duration(200)
      .attr("r", 15)
      .attr("fill", "#2196f3");
    
    // 显示事件信息
    svg.append("text")
      .attr("id", "tooltip")
      .attr("x", event.pageX - svg.node().getBoundingClientRect().x)
      .attr("y", event.pageY - svg.node().getBoundingClientRect().y - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "#ffffff")
      .text(d.event);
  })
  .on("mouseout", function() {
    d3.select(this).transition()
      .duration(200)
      .attr("r", 10)
      .attr("fill", "#ff5722");
    
    // 移除事件信息
    svg.select("#tooltip").remove();
  });
