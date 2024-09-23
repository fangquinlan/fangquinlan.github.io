---
layout: default
title: 课程
---

# 课程展示

## 时间轴

<div id="timeline"></div>

## 模块化内容

<div class="course-modules">
  {% for syllabus in site.sylla %}
    <div class="module-card">
      <h2>{{ syllabus.title }}</h2>
      <p>{{ syllabus.excerpt }}</p>
      <a href="{{ syllabus.url }}">阅读更多</a>
    </div>
  {% endfor %}
</div>
 
