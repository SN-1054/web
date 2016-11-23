body = document.body

start =
  x: 0
  y: 0

body.ontouchstart = (e) ->
  start.x = e.touches[0].clientX
  start.y = e.touches[0].clientY

  # 实现点击链接跳转
  e.preventDefault() if e.target.nodeName != "A"

  # 加载下下张图
  next = e.target.nextElementSibling.nextElementSibling
  next.src = next.getAttribute("data-src") if next.src?.length > 75

body.ontouchend = (e) ->

  # 实现点击链接跳转
  return if e.target.nodeName == "A"

  # 获取上一个元素
  first_not_top = document.querySelector("img:not(.top)")

  if (e.changedTouches[0].clientY - start.y > 60)
    # 向下滑动，翻到上一页
    if (first_not_top)
      first_not_top.previousElementSibling?.className = ""
    else
      document.querySelector(".top:last-of-type").className = "";
  else if (e.changedTouches[0].clientY - start.y <= -60)
    # 向上滑动，翻到下一页
    if (first_not_top != document.querySelector("body > img:last-of-type"))
      first_not_top?.className = "top"

